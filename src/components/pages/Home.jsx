import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';

export default function Home({meds}) {
  const [medicine, setMedicine] = useState(meds);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    console.log(filter);
      switch (filter) {
        case 'low': setMedicine((prev) => [...prev].sort((el1, el2) => el1.startprice - el2.startprice));
          break;
        case 'high': setMedicine((prev) => [...prev].sort((el1, el2) => el2.startprice - el1.startprice));
          break;
        default:
          setMedicine(meds);
          break;
      }
  }, [filter])

  const addCartHandler = (id) => {
    axios.put(`api/cart/${id}`);
  }

  // const clickHandler = (e) => {
  //   if (e.target.value === 'low') setMedicine((prev) => prev.sort((el1, el2) => el1.startprice - el2.startprice));
  //   if (e.target.value === 'high') setMedicine((prev) => prev.sort((el1, el2) => el2.startprice - el1.startprice));
  //   console.log(medicine)
  // }

  return (
    <>  
    <Form.Select aria-label="Default select example" onChange={(e) => setFilter(e.target.value)}>
      <option value='default'>Open this select menu</option>
      <option value="low">Low price</option>
      <option value="high">High price</option>
    </Form.Select>
    <div className="row justify-content-evenly wrapper">
        {medicine.map((el) => (
          <div className="card" style={{ width: '18rem', margin: '30px', marginTop: '150px' }}>
          <img width="300px" height="300px" src={el.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text" style={{ fontSize: '22px' }}>{el.name}</p>
            <p className="card-text" style={{ fontSize: '22px' }}>{el.eq} шт.</p>
            <a href={`/category/${el.id}`} className="btn primary" style={{ backgroundColor: '#978C8A', color: 'white' }}>{el.startprice} р.</a>
          </div>
          <Button onClick={()=>addCartHandler(el.id)}>Добавить в корзину</Button>
        </div>
        ))}
    </div>
    </>
  );
}
