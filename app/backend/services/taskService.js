import * as taskModel from '../models/Task.js';

export const getAllTasks = async () => {
  const result = await taskModel.getAllTasks();

  return result;
};

export const getTaskById = async (id) => {
  const result = await taskModel.getTaskById(id);

  return result;
};

export const updateTaskById = async ({ id, task, status }) => {
  const result = await taskModel.updateTaskById({ id, task, status });

  return result;
};

export const createTask = async ({ task, status, date }) => taskModel.createTask(
  { task, status, date },
);

export const deleteTask = async (id) => taskModel.deleteTask(id);

export const deleteAllTasks = async () => taskModel.deleteAllTasks();
