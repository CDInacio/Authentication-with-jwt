import { Task } from "../models/Task.js";

export class TaskController {
  async getTasks(req, res) {
    const task = await Task.find({}).populate("author");

    res.status(200).send(task);
  }

  async postTask(req, res) {
    const { title, description, status } = req.body;

    let newTask = await Task.create({
      author: req.user.id,
      title,
      description,
      status,
    });
  }
}
