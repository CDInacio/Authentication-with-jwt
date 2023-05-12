import { Task } from "../models/Task.js";

export class TaskController {
  async getTasks(req, res) {
    const status = req.query.status;
    const task = await Task.find({ status }).populate("author");
    // console.log(task);
    res.status(200).send(task);
  }

  async postTask(req, res) {
    console.log(req.user);
    const { title, description, status } = req.body;
    let newTask = await Task.create({
      author: req.user.id,
      title,
      description,
      status,
    });

    if (newTask) return res.status(200).send(newTask);
  }
}
