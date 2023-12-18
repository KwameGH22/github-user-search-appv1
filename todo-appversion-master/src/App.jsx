import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import Form from './components/Form';
import FilterScreen from './components/FilterScreen';
import StatsStatus from './components/StatsStatus';
import Items from './components/Items';




function App() {
  // const initialTodosState = {
  //   id: Date.now(),
  //   task: '',
  //   complete: false,

  // }
  const [todos, setTodos] = useState([]);

  const handleTodosAddition = (text) => {
    const newTodo = {
      id: Date.now(),
      task: text,
      complete: false,
    }
    setTodos([...todos , newTodo]);
    
  }

  //Function to Delete items from my Todo Array.
  const handleDelete = (id) => {
    //use array method: filter() to delete items
    const updatedArray= todos.filter(todo => todo.id !== id);
    setTodos(updatedArray);
  }

  return (
    <>
      <NavBar/>
      <Form addNewTodo = {handleTodosAddition} />
      {todos.map((todo) => <Items key={todo.id} tasks = {todos} deleteTask={handleDelete}/>)}
      <FilterScreen/>
      <StatsStatus/>
    </>
  )
}

export default App
