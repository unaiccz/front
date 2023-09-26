import React from 'react'
import { Outlet } from 'react-router-dom'

function Loayaut() {
  return (
<>
<h1 className='text-center '>APUNTES DaW</h1>
<div>
    <Outlet  className="text-center"/>

</div>
<h4>foot</h4>

</>

)
}

export default Loayaut
