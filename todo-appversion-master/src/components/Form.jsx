import {React,useState} from 'react';



const Form = ({addNewTodo}) => {
 const [inputValue, setInputValue] = useState(''); 

 const handleChange = (event) => {
    setInputValue(event.target.value);
 };

 const handleSubmit = (event) => {
    event.preventDefault();
    addNewTodo(inputValue);
    setInputValue('');
};
 

  return (

    <div style={{position:'relative'}}>
        <form onSubmit={handleSubmit} >
            <input 
                name='todos' 
                type='text' 
                id='todos'
                value={inputValue}
                onChange={handleChange}
                style=
                {{
                    position:'absolute', 
                    top: '-120px', 
                    left: '24rem', 
                    // name:'text' ,
                    // type:'text', 
                    // placeholder:'Create new todo item',
                    
                }}
            />
            
            <button type='submit' 
                style=
                {{
                    position:'absolute', 
                    left: '48rem', 
                    marginTop: 10, 
                    top: '-123px',
                    width: '60px',
                    height: '28px',
                    color: 'white',
                    backgroundColor: 'blue',
                    borderRadius: '5px',
                    borderStyle: 'none',
                    marginBottom:'10px'
                }}
            >
                Add
            </button>
        </form>
    
    </div>
  )
}

export default Form