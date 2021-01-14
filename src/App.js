import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {Route} from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask'
function App() {
  return (
  <div>
      <AddTask></AddTask>
      <TaskList></TaskList>
 
  </div>
  );
}

export default App;
