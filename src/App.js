import { useState } from 'react';
import './App.css';

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

  const deleteTask = (arg) => {
    setTodoList(todoList.filter((i) => i.id !== arg))
  }

  return (
    <>
      <div className="App">
        <input onChange={handleOnChange} placeholder='Enter a task'></input>
        <button onClick={handleOnClick} >Add task</button>
      </div>
      <div className='list'>
        {newTask}
      </div>
      {
        todoList.map((i) => {
          return (
            <div className='todo-list'>
              <h2>{i.taskName}</h2>
              <button onClick={() => deleteTask(i.id) }>X</button>
            </div>

          )
        })
      }
    </>

  );
}

export default App;
