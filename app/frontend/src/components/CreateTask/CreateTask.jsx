import axios from 'axios';
import { useState } from 'react';
import './createtask.css';

function CreateTask() {
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('pendente');
  const url = 'http://localhost:3001/tasks';

  const getTask = (event) => {
    setTask(event.target.value);
  };

  const getStatus = (event) => {
    setStatus(event.target.value);
  };

  const createTask = async () => (
    axios.post(url, { task, status })
  );

  return (
    <div className="createTask">
      <p>Crie sua tarefa:</p>
      <input type="text" name="tasks" id="tasks" maxLength="30" placeholder="digite sua tarefa aqui..." onKeyDown={(e) => ((e.key === 'Enter') ? createTask() : null)} onChange={getTask} required />

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

      <div className="createTaskButton" role="button" onKeyDown={(e) => ((e.key === 'Enter') ? createTask() : null)} tabIndex={0} onClick={createTask}>
        Criar tarefa
      </div>
    </div>
  );
}

export default CreateTask;
