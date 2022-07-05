import { Router } from 'express';
import {
  createTask, deleteTask, getAllTasks, getTaskById, updateTaskById,
} from '../controllers/taskController.js';
import { validateStatus, validateStatusExists, validateStatusLength } from '../middlewares/validateStatus.js';
import { validateTaskExists, validateTaskLength } from '../middlewares/validateTask.js';

const router = Router();

router.get('/', getAllTasks);

router.get('/:id', getTaskById);

router.post('/', validateTaskExists, validateTaskLength, validateStatus, validateStatusExists, validateStatusLength, validateStatus, createTask);

router.patch('/:id', validateTaskExists, validateTaskLength, validateStatus, validateStatusExists, validateStatusLength, validateStatus, updateTaskById);

router.delete('/', deleteTask);

export default router;
