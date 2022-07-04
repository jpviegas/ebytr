import * as taskModel from '../models/Task.js';

export const getAllTasks = async () => {
  const result = await taskModel.getAllTasks();

  return result;
};

export const createTask = async ({ task, status, date }) => taskModel.createTask(
  { task, status, date },
);

export const deleteTask = async (id) => taskModel.deleteTask(id);
