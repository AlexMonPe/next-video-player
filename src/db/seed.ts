// seed.ts
import { videos } from './schema';
import Database from 'better-sqlite3';
import { count } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import mockVideos from './videos.json';

const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite);

export async function seed() {
  const videosCount = await db.select({ value: count() }).from(videos);
  if (videosCount[0]?.value === 0) {
    await db.insert(videos).values(mockVideos);
    console.log('La base de datos ha sido poblada con éxito.');
  }
}
