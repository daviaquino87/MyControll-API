import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

const port = Number(process.env.DB_PORT);

export const AppdataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ["src/shared/infra/typeorm/entities/*{.ts,js}"],
  migrations: ["src/shared/infra/typeorm/migrations/*.{ts,js}"],
});
