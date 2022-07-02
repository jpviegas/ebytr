import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Tasks from './pages/Tasks';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
