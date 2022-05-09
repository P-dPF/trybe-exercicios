import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasksArray = ['Terminar exercícios', 'Rever Aulas', 'Fazer o projeto', 'Ficar em dia'];

const createTaskList = tasksArray.map((task) => Task(task));

class App extends React.Component {
  render() {
    return createTaskList;
  }
}

export default App;
