function App(){
  const [todos, setTodos] = React.useState([
    {
      text: ' Learn react',
      isCompleted: false,
    },
    {
      text: ' Meet friend for lunch today',
      isCompleted: false,
    },
    {
      text: ' Build todo app',
      isCompleted: false,
    }        
  ])

  //function TodoForm({addTodo}){
    const [value,setValue] = React.useState('');
    
    const handleSubmit = e => {
      e.preventDefault();
      if(!value) return;
      const newTodos = [...todos, {text:value, isCompleted:false}];
      setTodos(newTodos);
      //addTodo(value);
      setValue('');
    }

    const removeTodo = e => {
      const index = Number(e.target.id);
      let temp = [...todos];
      temp.splice(index,1);
      setTodos(temp);
    }
  
    return (<>
    {todos.map((todo,i) => <div classname = "todo"
      key = {i} id = {i} onClick = {removeTodo} > {todo.text}</div>)}
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          className="input"
          value={value}
          placeholder="Add Todo..."
          onChange={e => setValue(e.target.value)} />
      </form>
   </> );
  }


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
