import React,{useEffect} from 'react'
import { v4 as uuidv4} from 'uuid';

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
    const updateTodo = (tittle, id, completed) => {
        const newTodo = todos.map ((todo) =>
        todo.id === id ? {tittle, id, completed} : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    };

    useEffect(() =>{
        if (editTodo){
            setInput(editTodo.tittle);
        }else {
            setInput("");
        }
    },[setInput,editTodo]);
   
    const onInputChange = (e) => {
        setInput(e.target.value);
    };
    const onFormSubmit = (e) => {
        e.preventDefault();
        if(!editTodo){
            setTodos([...todos, {id: uuidv4(), tittle: input, completed: false}]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed);
        }
    }
  return (
    <form onSubmit={onFormSubmit}>
        <input type="text" placeholder='' className='task-input' value={input} required onChange={onInputChange}/>
        <button className='button-add' type='submit'> {editTodo ? "Edit" : "Add"}
        </button>
    </form>
  )
}

export default Form