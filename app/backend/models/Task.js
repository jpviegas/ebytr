import connection from './connection.js';

export const getAllTasks = async () => {
  const [tasks] = await connection.execute('SELECT * FROM ebytr.tasks;');

  return tasks;
};

export const getTaskById = async (id) => {
  const [tasks] = await connection.execute('SELECT * FROM ebytr.tasks WHERE id=?;', [id]);

  return tasks;
};

export const updateTaskById = async ({ id, task, status }) => {
  const [tasks] = await connection.execute('UPDATE ebytr.tasks SET task=?, status=? WHERE id=?;', [task, status, id]);

  return tasks;
};

export const createTask = async ({ task, status, date }) => connection.execute('INSERT INTO ebytr.tasks (task, status, date) VALUES (?, ?, ?)', [task, status, date]);

export const deleteTask = async (id) => connection.execute('DELETE FROM ebytr.tasks WHERE id=?', [id]);

export const deleteAllTasks = async () => connection.execute('DELETE FROM ebytr.tasks');
