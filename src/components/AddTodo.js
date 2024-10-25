import React,{useState,useEffect}from 'react';

export default function AddTodo(){
const[todo,setTodo]=useState([]);
const[todoInput,setTodoInput]=useState("")


useEffect(()=>{
    const savedTodo = localStorage.getItem("todo");
        try {
            const parsedTodo = savedTodo ? JSON.parse(savedTodo) : [];
            console.log(parsedTodo)
            if (Array.isArray(parsedTodo)) {
                setTodo(parsedTodo);
            } else {
                console.error("Invalid todo structure in local storage");
            }
        } catch (error) {
            console.error("Error parsing todo from local storage", error);
        }
    }, []);



const handleTodo=()=>{
    if(todoInput.trim()){
        const newTodo= setTodo([...todo,
            {name:todoInput,id:Math.random(),
        completed:false}]
        );
     const updatedTodo=[...todo,newTodo]
        setTodoInput("");
        localStorage.setItem("todo",JSON.stringify(updatedTodo))
    }else{

    }

}

const deleteTodo=(id)=>{
const filtered=todo.filter((item)=>{
    return item.id!==id
})
  setTodo(filtered)
 }
    return(
        <>
        
        <h1>Add todo</h1>
        
        <input type="text" value={todoInput} onChange={(e)=>setTodoInput(e.target.value)}/>
        <button onClick={()=>handleTodo()}>Add</button>
        <div style={{color:'white'}}>
        {todo.map((item,index)=>{
            return(
                <div key={item.id}>{item.name}<br/>
                
                <button onClick={()=>deleteTodo(item.id)}>Delete</button>
                </div>
             
            )
            
        })
        
        }
        
        </div>
        </>
    )
}