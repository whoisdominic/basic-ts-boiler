import { DataSource } from "typeorm";
import { Todo } from "./entities/Todo.entity";

// Setup Typeorm DB
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  database: "postgres",
  // username: process.env.PG_USERNAME,
  // password: process.env.PG_PASSWORD,
  synchronize: true,
  entities: [Todo],
});
