import Database from 'better-sqlite3';
import { publicProcedure, router } from './trpc';

import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';

import { z } from 'zod';
import { videos } from '@/db/schema';
import { seed } from '@/db/seed';
import { eq } from 'drizzle-orm';
import { TRPCError } from '@trpc/server';

const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite);

migrate(db, { migrationsFolder: 'drizzle' });

const videoSchema = z.object({
  id: z.number(),
  title: z.string().nullable(),
  playcount: z.number().nullable(),
  url: z.string().nullable(),
  description: z.string().nullable(),
});
const videosSchema = z.array(videoSchema);
await seed().catch((err) => {
  console.error('Error al poblar la base de datos:', err);
});

export const appRouter = router({
  getVideos: publicProcedure.output(videosSchema).query(async () => {
    try {
      return await db.select().from(videos).all();
    } catch (error) {
      console.error('Error getting videos:', error);
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred, please try again later.' ,
        cause: error
      });
    }
  }),
  incrementPlayCount: publicProcedure
    .input(
      z.object({
        id: z.number(),
        playcount: z.number(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const { id, playcount } = input;
        const updatedVideo = await db
          .update(videos)
          .set({ playcount })
          .where(eq(videos.id, id))
          .returning({ updatedVideo: videos });

        return updatedVideo;
      } catch (error) {
        console.error('Failed to update playcount:', error);
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'An unexpected error occurred, please try again later.' ,
          cause: error
        });
      }
    }),
});

export type AppRouter = typeof appRouter;
