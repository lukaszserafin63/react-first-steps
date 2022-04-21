import React,{useState} from 'react'
import './style.css';
const App = () => {
  const [todos,setTodos] = useState([]);
  const [todo,setTodo] = useState("");
  function addToTodoList(){
    setTodos([...todos,{"id":Date.now(),"todo":todo}])
    setTodo("")
    console.log(todos)
  }
  return (
    <div className='main'>
      <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo} />
      <button onClick={()=>addToTodoList()}>Dodaj</button>
      {todos.map((todo)=>{
        return <p key={todo.id}>{todo.todo}</p>
      })}
    </div>
  )
}

export default App