import express from 'express';
import { createTask, deleteTask, getAllTasks } from '../models/Task.js';

const router = express.Router();

router.get('/', async (_req, res) => {
  const tasks = await getAllTasks();

  res.status(200).json(tasks);
});

router.post('/', async (req, res) => {
  const { task, status } = req.body;
  const date = new Date();
  await createTask({ task, status, date });

  res.status(201).json({ message: 'Successfully created' });
});

router.delete('/', async (req, res) => {
  const { id } = req.body;
  await deleteTask(id);

  res.status(200).json({ message: 'Successfully deleted' });
});

export default router;
