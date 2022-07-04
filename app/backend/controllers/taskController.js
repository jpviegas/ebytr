import * as taskService from '../services/taskService.js';

export const getAllTasks = async (req, res) => {
  const tasks = await taskService.getAllTasks();

  res.status(200).json(tasks);
};

export const createTask = async (req, res) => {
  const { task, status } = req.body;
  const date = new Date();
  await taskService.createTask({ task, status, date });

  res.status(201).json({ message: 'Successfully created' });
};

export const deleteTask = async (req, res) => {
  const { id } = req.body;
  await taskService.deleteTask(id);

  res.status(200).json({ message: 'Successfully deleted' });
};
