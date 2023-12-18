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
        {/* <div>
            <div style={{display: 'flex', 
                        justifyContent:'space-between', 
                        alignItem: 'center', 
                        alignItems:'baseline'
                        }}>
                <MdCancel style={{color:'red'}}/>
                <p>item 1</p>
                <MdDeleteForever style={{color:'red'}} />
                
            </div>
            <hr style={{display: 'block'}}/>
            
        </div> */}
    </div>
  )
}

export default FilterScreen