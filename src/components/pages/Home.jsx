import React, { useEffect, useState } from 'react'

export default function Home({meds}) {
  const [medicine, setMedicine] = useState(meds);
  // useEffect(() => {
  //   fetch("api/home")
  //     .then((res) => res.json())
  //     .then((data) => setMedicine(data));
  // }, [])
  return (

    <div className="row justify-content-evenly wrapper">
        {medicine.map((el) => (
          <div className="card" style={{ width: '18rem', margin: '30px', marginTop: '150px' }}>
          <img width="300px" height="300px" src={el.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text" style={{ fontSize: '22px' }}>{el.name}</p>
            <a href={`/category/${el.id}`} className="btn primary" style={{ backgroundColor: '#978C8A', color: 'white' }}>{el.startprice}</a>
          </div>
        </div>
          // <li key={item.id}><img src={item.img} alt='medicine' />{item.name}{item.startprice}</li>
        ))}
    </div>
  );
}
