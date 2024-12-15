import { DataSource } from 'typeorm';
import 'dotenv/config'; // Certifique-se de que o pacote dotenv está instalado

//Configuração do Postgres
export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL, // Variável de ambiente
  synchronize: true,  // Para desenvolvimento, True cria/atualiza tabelas automaticamente
  logging: false,
  entities: ['./src/entities/*.ts'], 
  migrations: ['./src/migrations/*.ts'], // Se estiver usando migrações
  subscribers: [],
});
