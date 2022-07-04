import connection from './connection.js';

export const getAllTasks = async () => {
  const [tasks] = await connection.execute('SELECT id, task, status, date FROM ebytr.tasks;');

  return tasks;
};

export const createTask = async ({ task, status, date }) => connection.execute('INSERT INTO ebytr.tasks (task, status, date) VALUES (?, ?, ?)', [task, status, date]);

export const deleteTask = async (id) => connection.execute('DELETE FROM ebytr.tasks WHERE id=?', [id]);
