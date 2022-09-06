import { useState } from 'react';
import './App.css';
import { Task } from './Task';

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleOnChange = (e) => {
    setNewTask(e.target.value)
  }

  const handleOnClick = (e) => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    }
    setTodoList([...todoList, task])
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  }

  return (
    <>
      <div className="App">
        <div className='add-task'>
          <input onChange={handleOnChange} placeholder='Enter a task'></input>
          <button onClick={handleOnClick} >Add task</button>
        </div>
      </div>
      <div className='list'>
        {
          todoList.map((task) => {
            return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} />
          })
        }
      </div>
    </>

  );
}

export default App;
