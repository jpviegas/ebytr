import axios from 'axios';
import { useEffect, useState } from 'react';
import './taskslist.css';

function TasksList() {
  const [data, setData] = useState([]);
  const url = 'http://localhost:3001/tasks';
  useEffect(() => {
    try {
      axios.get(url).then((response) => {
        setData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [data]);

  const deleteTask = async (id) => {
    await axios.delete(url, { data: { id } });
  };

  const orderByTasks = async () => {
  };

  const orderByStatus = async () => {
  };

  const orderByDate = async () => {

  };
  const fetchMap = data.map((task) => (
    <div className="tasksListItem">
      <li>
        Tarefa:
        {task.task}
      </li>
      <li>
        Status:
        {task.status}
      </li>
      <li>
        Data:
        {task.date}
      </li>
      <div className="deleteTaskButton" role="button" onKeyDown={null} tabIndex={0} onClick={() => { deleteTask(task.id); }}>
        Deletar tarefa
      </div>
    </div>
  ));

  return (
    <div className="tasksList">
      <label htmlFor="order">Ordenar por</label>
      <select>
        <option value="task" selected>selecione</option>
        <option value="task" onClick={orderByTasks}>task</option>
        <option value="status" onClick={orderByStatus}>status</option>
        <option value="date" onClick={orderByDate}>data</option>
      </select>
      {!data ? null : <ul>{fetchMap}</ul>}
    </div>
  );
}

export default TasksList;
