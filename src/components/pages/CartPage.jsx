import React, { useState } from 'react'
import CartForm from './CartForm'
import axios from 'axios';

export default function CartPage({ cartItems, meds }) {
  const [cart, setCart] = useState(cartItems);
  const [medicine, setMedicine] = useState(meds);
  const [equant, setEquant] = useState(1);

  const deleteHandler = (id) => {
    axios.delete(`api/cart/delete/${id}`);
    setCart((prev) => prev.filter(item => item.id !== id));
  }

  return (
    <div>
      <h3>Ваша корзина</h3>
      <div>
        {[...new Set(cart?.map(item => (
          <CartForm item={item} key={item.id} med={medicine.filter(el => el.id === item.med_id)[0]} deleteHandler={deleteHandler} />
        )))]}
      </div>
    </div>
  )

}
