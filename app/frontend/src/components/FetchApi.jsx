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

  const fetchMap = data.map((task) => (
    <>
      <li>
        Task
        {task.id}
        :
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
      <br />
    </>
  ));

  return (
    <div>
      {!data ? null : <ul>{fetchMap}</ul>}
    </div>
  );
}

export default FetchApi;
