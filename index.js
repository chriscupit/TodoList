function App(){
  const [todos, setTodos] = React.useState([
    {
      text: ' Learn React ',
      isCompleted: false,
    },
    {
      text: ' Meet a friend for lunch',
      isCompleted: false,
    },
    {
      text: ' Build Todo App',
      isCompleted: false,
    },
    {
      text: ' One',
      isCompleted: false,
    },
    {
      text: ' Two',
      isCompleted: false,
    },
    {
      text: ' Three',
      isCompleted: false,
    },         
  ])

 const addTodo = text => {
  const newTodos = [...todos, {text:text, isCompleted:false}];
  setTodos(newTodos);
 }

    const removeTodo = index => {
      //const index = Number(e.target.id);
      let temp = [...todos];
      temp.splice(index,1);
      setTodos(temp);
    }
  
    return (<>
    <div className = "app">
      <div className = "todo-list">
    
    {todos.map((todo,i) => 
      <Todo index= {i} key = {i} todo = {todo} remove = {removeTodo}/>)}
      <TodoForm addTodo = {addTodo}/>
      </div>
    </div>
   </> );
  }


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
