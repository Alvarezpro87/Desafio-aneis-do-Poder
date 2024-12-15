import { DataSource } from 'typeorm';
import 'dotenv/config'; 
console.log('Database URL:', process.env.DATABASE_URL);

const isSSLRequired = process.env.DATABASE_URL?.includes('render.com');

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL, 
  synchronize: true, 
  logging: false,
  ssl: isSSLRequired ? { rejectUnauthorized: false } : undefined, 
  entities: ['./src/entities/*.ts'],
  migrations: ['./src/migrations/*.ts'],
  subscribers: [],
});
