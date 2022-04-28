
import './App.css';
import TaskList from './componentes/taskList';

function App() {
  return (
    <div className="task-app">
      <div className='title'>
        <h1>Task App</h1>
      </div>
      <div className='main-task-list'>
        <h2>My Tasks</h2>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
