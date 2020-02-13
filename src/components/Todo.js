import React,{useState} from "react"


const Todos = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('');
    const deleteTodo = indexToDelete =>{
       setTodos(prevTodos =>{
           return prevTodos.filter((value,index)=>{
               return indexToDelete !== index;
       })
       })
    }
    return <div>
        <div className= "overall">
        <div className="serve input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter New To-Do" aria-label="Recipient's username" aria-describedby="button-addon2" name={inputValue} value={inputValue} onChange={e => setInputValue(e.target.value)}/>
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" 
            type="button" 
            onClick= {()=>
            { setTodos(prevTodos => [... prevTodos, inputValue]);
            setInputValue('')
            }} >Add</button>
         </div>
        </div>
        
       
               
            
            { 
            todos.map((value,index)=>{
                return <li className="list-group-item d-flex justify-content-between align-items-centerlist-group-item-primary" key= {index} >
                        {value}
                        
                        
                    <span 
                        onClick= {()=>{ 
                            deleteTodo(index)
                            
                            
                    }} 
                        type="button" >X</span></li> 
                        
                        
                         })


            }
            
            
    </div>
    </div>
    


}

export default Todos;

