import axios from 'axios';
import { useEffect, useState } from 'react';

function FetchApi() {
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
    <>
      <li>
        Task:
        {task.task}
      </li>
      <li>
        Status:
        {task.status}
      </li>
      <li>
        Date:
        {task.date}
      </li>
      <button type="button" onClick={() => { deleteTask(task.id); }}>delete</button>
      <br />
      <br />
    </>
  ));

  return (
    <div>
      <button type="button" onClick={orderByTasks}>Order By Task</button>
      <button type="button" onClick={orderByStatus}>Order By Status</button>
      <button type="button" onClick={orderByDate}>Order By Date</button>
      {!data ? null : <ul>{fetchMap}</ul>}
    </div>
  );
}

export default FetchApi;
