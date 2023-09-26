import React,{useState, useEffect} from 'react'

function Delete({fn, id, delt}) {  
  return (
    <>
    <div onClick={()=> fn(id)} className='mb-4 btn btn-danger'>Delete
    
    </div>
    {
      delt && <h3 className='alert'>Deleted</h3>
    }
    </>
  )
}

export default Delete 