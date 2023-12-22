import React from 'react'
import { FaMoon } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdCancel } from "react-icons/md";



const FilterScreen = () => {
  return (
    <div style={{position: 'absolute',
                    width: '450px', 
                    top: '170px', 
                    left: '24.75rem',
                    zIndex: '999', 
                    background: 'white'
                }}>
        <div style={{display:'flex',
                    justifyContent:'space-around',
                    alignItems: 'baseline',
                    paddingTop: '5px',
                    borderRadius:'10px',
                }}
            >
            <button style={{borderStyle:'none'}}>All</button>
            <button style={{borderStyle:'none'}}>Active</button>
            <button style={{borderStyle:'none'}}>Completed</button>
        </div>
        <hr/>
        
    </div>
  )
}

export default FilterScreen