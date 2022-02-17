
import './App.css';
import AddTask from './components/addTask/AddTask';
import TaskList from './components/taskList/TaskList';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTask/>
     <TaskList/>
    </div>
  );
}

export default App;
