import express from "express";
import { AppDataSource } from "../dataSource";
import { Todo } from "../entities/Todo.entity";
const todoController = express.Router();

// Index - Get all
todoController.get("/", async (req, res) => {
  try {
    const data = await AppDataSource.createQueryBuilder(Todo, "todo").getMany();

    res.json(data);
  } catch (error) {
    res.status(500).json(JSON.stringify(error));
  }
});

// Show - Get 1
todoController.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await AppDataSource.createQueryBuilder(Todo, "todo")
      .where("todo.id = :id", { id })
      .getOne();
    res.json(data);
  } catch (error) {
    res.status(500).json(JSON.stringify(error));
  }
});
// Create
todoController.post("/", async (req, res) => {
  const { task } = req.body;

  try {
    const data = await AppDataSource.createQueryBuilder()
      .insert()
      .into(Todo)
      .values({ task, completed: false })
      .execute();

    res.json(data);
  } catch (error) {
    res.status(500).json(JSON.stringify(error));
  }
});
// Update
todoController.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;
  try {
    const updatedTodo = await AppDataSource.createQueryBuilder()
      .update(Todo)
      .set({ task, completed })
      .where("id = :id", { id })
      .execute();
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json(JSON.stringify(error));
  }
});
// Delete
todoController.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await AppDataSource.createQueryBuilder()
      .delete()
      .from(Todo)
      .where("id = :id", { id })
      .execute();
    res.json(deletedTodo);
  } catch (error) {
    res.status(500).json(JSON.stringify(error));
  }
});

export default todoController;
