import { DataSource } from 'typeorm';
import 'dotenv/config';

const isSSLRequired = process.env.DATABASE_URL?.includes('render.com');

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  ssl: isSSLRequired ? { rejectUnauthorized: false } : undefined,
  entities: ['dist/entities/*.js'], // Certifique-se de que os arquivos no dist estão corretos
  migrations: ['dist/migrations/*.js'],
});