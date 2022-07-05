import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './taskbyid.css';

function TaskById() {
  const params = useParams();
  const baseUrl = 'http://localhost:3001/tasks';
  const url = `http://localhost:3001/tasks/${params.id}`;
  const [data, setData] = useState([]);
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('pendente');

  useEffect(() => {
    try {
      axios.get(url).then((response) => {
        setData(response.data);
      });
    } catch (error) {
      throw new Error(error);
    }
  }, [data]);

  const getTask = (event) => {
    setTask(event.target.value);
  };

  const getStatus = (event) => {
    setStatus(event.target.value);
  };

  const editTask = async () => (
    axios.patch(url, { task, status })
  );

  const deleteTask = async (id) => {
    await axios.delete(baseUrl, { data: { id } });
  };

  const fetchMap = data.map((item) => (
    <div key={item.id}>
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
        <input type="text" name="tasks" id="tasks" maxLength="30" placeholder="digite sua tarefa aqui..." onKeyDown={(e) => ((e.key === 'Enter') ? editTask() : null)} onChange={getTask} required />

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

        <div className="finishTaskButton" role="button" onKeyDown={(e) => ((e.key === 'Enter') ? editTask() : null)} tabIndex={0} onClick={editTask}>
          Finalizar
        </div>
      </div>

      <div className="editContainer">
        {!data[0] ? null : <div className="taskItem"><ul>{fetchMap}</ul></div>}
      </div>
    </>
  );
}

export default TaskById;
