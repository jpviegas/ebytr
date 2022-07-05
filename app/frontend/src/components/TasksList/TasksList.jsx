import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
      <div>
        <div className="editTaskButton" role="button" onKeyDown={null} tabIndex={0}>
          <Link to={`/${task.id}`}>Editar tarefa</Link>
        </div>
        <div className="deleteTaskButton" role="button" onKeyDown={null} tabIndex={0} onClick={() => { deleteTask(task.id); }}>
          Deletar tarefa
        </div>
      </div>
    </div>
  ));

  return (
    <>
    <div className="tasksList">
      <label htmlFor="order">Ordenar por</label>
      <select>
        <option value="" selected>selecione</option>
        <option value="task">task</option>
        <option value="status">status</option>
        <option value="date">data</option>
      </select>
      {!data ? null : <ul>{fetchMap}</ul>}
    </div>
      <div className="deleteAllTasksButton" role="button" onKeyDown={null} tabIndex={0} onClick={() => { deleteTask(0); }}>
        Deletar todas as tarefas
      </div>
    </>
  );
}

export default TasksList;
