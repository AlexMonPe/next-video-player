import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const videos = sqliteTable('videos', {
  id: integer('id').primaryKey().unique(),
  title: text('title'),
  playcount: integer('playcount'),
  url: text('url'),
  description: text('description'),
});
