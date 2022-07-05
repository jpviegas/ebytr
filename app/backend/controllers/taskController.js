import * as taskService from '../services/taskService.js';

export const getAllTasks = async (_req, res) => {
  const tasks = await taskService.getAllTasks();

  res.status(200).json(tasks);
};

export const getTaskById = async (req, res) => {
  const { id } = req.params;
  const tasks = await taskService.getTaskById(id);

  res.status(200).json(tasks);
};

export const updateTaskById = async (req, res) => {
  const { id } = req.params;
  const { task, status } = req.body;
  const tasks = await taskService.updateTaskById({ id, task, status });

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
  if (id === 0) {
    await taskService.deleteAllTasks();
  }
  await taskService.deleteTask(id);

  res.status(200).json({ message: 'Successfully deleted' });
};

export const deleteAllTasks = async (_req, res) => {
  await taskService.deleteAllTasks();

  res.status(200).json({ message: 'Successfully deleted all tasks' });
};
