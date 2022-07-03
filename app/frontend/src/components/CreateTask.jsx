import axios from 'axios';
import { useState } from 'react';

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
    <div>
      <input type="text" name="tasks" id="tasks" onChange={getTask} placeholder="type your task here" />

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

      <br />
      <br />

      <button type="button" onClick={createTask}>
        Create Task
      </button>
    </div>
  );
}

export default CreateTask;
