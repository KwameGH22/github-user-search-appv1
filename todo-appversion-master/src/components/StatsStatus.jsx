import React from 'react'

const StatsStatus = ({clearTodos}) => {
  return (
    <div style=
    {{
        display: 'flex', 
        width:'450px', 
        alignItems: 'center', 
        justifyContent:'space-between', 
        position:'absolute', 
        left: '24.5rem', 
        zIndex:'1000', 
        bottom: '100px'
    }}>
        <p style={{marginLeft: '20px'}}>4</p>
        <button onClick = {()=> clearTodos(todos.id)}style={{marginRight: '20px', borderStyle: 'none'}}>Completed</button>
    </div>
  )
}

export default StatsStatus