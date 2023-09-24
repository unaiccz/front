import React from 'react'

function Delete({ id}) {
    
    const del = async (rel) => {
        const res = await fetch(`http://localhost:1337/api/apuntes/${id}`, {
            method: 'DELETE'
        })
        const json = await res.json()
        console.log(json)
    }
    return (
        <>
            <button className='btn btn-danger' onClick={() => del(id)}>
                Delete
            </button>
        </>
    )
}

export default Delete