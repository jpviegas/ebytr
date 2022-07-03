import cors from 'cors';
import 'dotenv/config';
import express, { json } from 'express';
import router from './routes/tasksRouter.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(json());

app.use('/tasks', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
