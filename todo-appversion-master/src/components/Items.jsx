
import { MdDeleteForever } from "react-icons/md";
import { MdCancel } from "react-icons/md";

const Items = ({tasks, deleteTask}) => {
  return (
    <div>
        <div style={{position:'absolute', left: '24.5rem', marginTop: '5px', borderRadius: '10px', borderStyle: 'none'}}>
            <div style={{display: 'flex', 
                        justifyContent:'space-between', 
                        alignItem: 'center', 
                        alignItems:'baseline',
                        width: '450px',
                        }}>
                
                <MdCancel style={{color:'blue', marginLeft: '20px'}}/>
                <p>{tasks.id}</p>
                <MdDeleteForever onClick={ deleteTask} style={{color:'red', marginRight: '20px'}} />
                    
            </div>
            <hr style={{display: 'block', width:'450px'}}/>
            
        </div>
    </div>
  )
}

export default Items