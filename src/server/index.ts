import { publicProcedure, router } from './trpc';

export const appRouter = router({
  getVideos: publicProcedure.query(async () => {
    return [
      {
        url: 'https://stream.mux.com/A3VXy02VoUinw01pwyomEO3bHnG4P32xzV7u1j1FSzjNg/high.mp4',
        title: 'Video 1',
        description: 'Descripción del video 1',
      },
      {
        url: 'https://stream.mux.com/A3VXy02VoUinw01pwyomEO3bHnG4P32xzV7u1j1FSzjNg/high.mp4',
        title: 'Video 2',
        description: 'Descripción del video 2',
      },
    ];
  }),
});

export type AppRouter = typeof appRouter;
