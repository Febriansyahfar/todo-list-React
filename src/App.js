import React,{useState} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodosList from "./components/TodosList";
import "./App.css";



const App = () => {

  const [input, setInput] = useState ("");
  const [todos, setTodos] = useState ([]);
  const [editTodo, setEditTodo] = useState (null);

  
  return (
  <div className="container">
    <div className="app-wrapper">
      <div>
        <Header/>
      </div>
      <div>
       <Form
       input = {input}
       setInput = {setInput}
       todos = {todos}
       setTodos = {setTodos}
       editTodo = {editTodo}
       setEditTodo = {setEditTodo}
       />
      </div>
      <div>
        <TodosList todos={todos} setTodos={setTodos} setEditTodo ={setEditTodo} />
      </div>
    </div>

  </div>);
}



//   const handleChangeTodo = (e) => {
//     const todo = e.target.value;
//     setValueTodo(todo);
//   }

//   const saveTodo = () => {
//     setCurrentTodo([
//       ...currentTodo,
//       valueTodo
//     ])
//     setValueTodo("")
//   }

//   const removeTodo = (index) => {
//     setCurrentTodo(currentTodo.filter((item, currentIndex) => currentIndex !== index));

//   }

//   return (
//     <div className="container">
//       <h1>Todo List</h1>
//       <div className="flex">
//         <input type="text" name="todo" value={valueTodo} onChange={(e) => handleChangeTodo(e)} className="input-todo"/>
//         <button onClick={() => saveTodo()}>SAVE</button>
//       </div>
//       <Header todo={currentTodo} handleRemoveTodo={removeTodo}/>
//     </div>
//   )
// }

export default App;