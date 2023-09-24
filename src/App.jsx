import React, { useState, useEffect } from 'react';
import Delete from './components/Delete';

function App() {
  const [data, setData] = useState(null);
  const [r, setr] = useState(null);
  

  const fetchData = async () => {
    const res = await fetch('http://localhost:1337/api/apuntes');
    const json = await res.json();
    setData(json.data);
    
  };

  useEffect(() => {
    fetchData();
  }, [r]);

  return (
    <div>
      <h1 className='bg-dark mx-4 my-4 rounded-3 text-white p-4'>Bloc de notas unai</h1>
      {data && (
        <div className='card mx-4 my-4 w-50 h'>
          {data.map((item) => (
            <div key={item.id} className='card-body'>
              <h5 className='card-title'>ID: {item.id}</h5>
              <p className='card-text'>Text: {item.attributes.text}</p>
              <p className='card-text'>Created At: {item.attributes.createdAt}</p>
              <p className='card-text'>Updated At: {item.attributes.updatedAt}</p>
              <p className='card-text'>Published At: {item.attributes.publishedAt}</p>
              <Delete id={item.id}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;