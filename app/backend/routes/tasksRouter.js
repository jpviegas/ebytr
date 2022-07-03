import { Router } from 'express';
import {
  createTask, deleteTask, getAllTasks, orderByDate,
} from '../controllers/taskController.js';
import { validateStatus, validateStatusExists, validateStatusLength } from '../middlewares/validateStatus.js';
import { validateTaskExists, validateTaskLength } from '../middlewares/validateTask.js';

const router = Router();

// router.route('/')
//   .get('/', getAllTasks)
//   .post('/', createTask)
//   .delete('/', deleteTask);
router.get('/', getAllTasks, orderByDate);

router.post('/', validateTaskExists, validateTaskLength, validateStatus, validateStatusExists, validateStatusLength, validateStatus, createTask);

router.delete('/', deleteTask);

export default router;
