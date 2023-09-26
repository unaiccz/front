import React, { useState, useEffect } from 'react';
import Delete from './components/Delete';

function App() {
  const [data, setData] = useState(null);
  const [r, setr] = useState(null);
  const [delt, setDelt] = useState(false);
  
  

  const fetchData = async () => {
    const res = await fetch('http://localhost:1337/api/apuntes');
    const json = await res.json();
    setData(json.data);
    
  };
  const deleteData = async (id) => {
    setDelt(true);
    console.log('deleting');
    const res = await fetch(`http://localhost:1337/api/apuntes/${id}`,
    {method: 'DELETE'});
    console.log('deleted');
  }

  useEffect(() => {
    fetchData();
  }, [r]);

  return (
    <div>
      {data && (
        <div className='card mx-4 my-4 w-50 h'>
          {data.map((item) => (
            <div key={item.id} className='card-body'>
              <h5 className='card-title'>ID: {item.id}</h5>
              <p className='card-text'>Text: {item.attributes.text}</p>
              <p className='card-text'>Created At: {item.attributes.createdAt}</p>
              <p className='card-text'>Updated At: {item.attributes.updatedAt}</p>
              <p className='card-text'>Published At: {item.attributes.publishedAt}</p>
              <Delete id={item.id} fn={deleteData} delt={delt}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;