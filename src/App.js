import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleOnChange = (e) => {
    setNewTask(e.target.value)
  }

  const handleOnClick = (e) => {
    setTodoList([...todoList, newTask])
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
            <h2>{i}</h2>
          )
        })
      }
    </>

  );
}

export default App;
