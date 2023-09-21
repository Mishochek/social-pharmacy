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

  return (
    <>  
    <form>
   <p>Выберите дату: <input type="date" name="calendar" />
   <input type="submit" value="Отправить" /> </p>
  </form>
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
            <p  className="btn primary" style={{ backgroundColor: '#978C8A', color: 'white', textDecoration: ' line-through'  }}>{el.startprice} р.</p>
            <p  className="btn primary" style={{ backgroundColor: 'red', color: 'white', marginLeft: '10px'  }}>{el.saleprice} р.</p>
          </div>
          <Button onClick={()=>addCartHandler(el.id)}>Добавить в корзину</Button>
        </div>
        ))}
    </div>
    </>
  );
}
