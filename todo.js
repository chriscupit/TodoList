function Todo ({todo, index, remove}){
    function handle(){
        remove(index);
    }
    return <div classname = "todo"
    onClick = {handle} > {todo.text} (-)</div>
}