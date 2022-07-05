import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './taskbyid.css';

function TaskById() {
  const params = useParams();
  const baseUrl = 'http://localhost:3001/tasks';
  const url = `http://localhost:3001/tasks/${params.id}`;
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      axios.get(url).then((response) => {
        setData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [data]);
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('');

  const getTask = (event) => {
    setTask(event.target.value);
    console.log('task', task);
  };

  const getStatus = (event) => {
    setStatus(event.target.value);
    console.log('status', status);
  };

  const editTask = async () => (
    axios.patch(url, { task, status })
  );

  const deleteTask = async (id) => {
    await axios.delete(baseUrl, { data: { id } });
  };

  const fetchMap = data.map((item) => (
    <div>
      <li>
        Tarefa:
        {item.task}
      </li>
      <li>
        Status:
        {item.status}
      </li>
      <li>
        Data:
        {item.date}
      </li>
      <div className="deleteTaskButton" role="button" onKeyDown={null} tabIndex={0} onClick={() => { deleteTask(params.id); }}>
        Deletar tarefa
      </div>
    </div>
  ));

  return (
    <>
      <div className="editTask">
        <input type="text" name="tasks" id="tasks" maxLength="3" placeholder="digite sua tarefa aqui..." onChange={getTask} required />

        <label htmlFor="pendente">
          Pendente
          <input type="radio" name="status" id="pendente" value="pendente" defaultChecked onClick={getStatus} />
        </label>
        <label htmlFor="andamento">
          Em Andamento
          <input type="radio" name="status" id="andamento" value="em andamento" onClick={getStatus} />
        </label>
        <label htmlFor="pronto">
          Pronto
          <input type="radio" name="status" id="pronto" value="pronto" onClick={getStatus} />
        </label>
        <div className="finishTaskButton" role="button" onKeyDown={null} tabIndex={0} onClick={editTask}>
          Finalizar
        </div>
      </div>
      <div className="editContainer">
        <div className="taskItem">
          {!data ? null : <ul>{fetchMap}</ul>}
        </div>
      </div>
    </>
  );
}

export default TaskById;
