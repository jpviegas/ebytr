import connection from './connection.js';

export const getAllTasks = async () => {
  const [tasks] = await connection.execute(
    'SELECT task, status, date FROM ebytr.tasks;',
  );

  return tasks;
};

export const createTask = async ({ task, status, date }) => {
  await connection.execute('INSERT INTO ebytr.tasks (task, status, date) VALUES (?, ?, ?)', [task, status, date]);
};

export const deleteTask = async (id) => {
  await connection.execute('DELETE FROM ebytr.tasks WHERE (?)', [id]);
};
