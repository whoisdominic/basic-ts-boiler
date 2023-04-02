import dotenv from "dotenv";
dotenv.config();
import chalk from "chalk";
import express from "express";
import todoController from "./controllers/todo.controller";
import { AppDataSource } from "./dataSource";
import morgan from "morgan";
import cors from "cors";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(morgan("dev"));

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

app.use("/todos", todoController);

app.get("/", (req, res) => {
  res.json({ message: "Service is alive!" });
});

app.listen(PORT, () => {
  console.log(chalk.blue(`Server is starting 🚀 on PORT: ${PORT}`));
});
