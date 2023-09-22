import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

export default function CartForm({ item, deleteHandler, handleAddition, med }) {
  // console.log(med, '--------------------------------------------------------------------')
  const [quantity, setQuantity] = useState(1);



  const handleIncrement = () => {
    if (quantity < med.eq) {
      setQuantity(quantity + 1);
      handleAddition(quantity, item.med_id);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    if (quantity === 0) {
      axios.delete(`api/cart/delete/${item.id}`);
    }
  }, [quantity]);
  const calculateTotalPrice = () => {

    const pricePerItem = med.saleprice;
    // el.saleprice
    return (quantity * pricePerItem);
  };
  return (
    <div style={{ display: 'flex' }}>
      {quantity ? (
        <div
          className="card rounded-3 mb-4"
          style={{ width: '800px', margin: '30px auto' }}
        >
          <div className="card-body p-4">
            <div
              className="row d-flex justify-content-between align-items-center"
              style={{ gap: '10px' }}
            >
              <div className="col-md-2 col-lg-2 col-xl-2">
                <img
                  src={med.img}
                  className="img-fluid rounded-3"
                  alt="Cotton T-shirt"
                />
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <p className="lead fw-normal mb-2">{med.name}</p>
                <p>{med.eq}</p>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button className="btn btn-link px-2" className="btn btn-link px-2" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '20px' }} onClick={() => handleDecrement()}>
                  -
                </button>

                <input
                  id="form1"
                  min="0"
                  name="quantity"
                  type="number"
                  className="form-control form-control-sm"
                  value={quantity}
                  readOnly
                  style={{ width: '50px', textAlign: 'center' }}
                />
                <button className="btn btn-link px-2" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '20px' }} onClick={() => { handleIncrement() }}>
                  +
                </button>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 className="mb-0">₽{calculateTotalPrice()}</h5>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 text-end" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={() => deleteHandler(item.id)} style={{ backgroundColor: '#527f62', color: 'white', border: 'none' }}>Удалить</Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

