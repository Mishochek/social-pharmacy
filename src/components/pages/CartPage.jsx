import React, { useState } from 'react'
import CartForm from './CartForm'

export default function CartPage({ cartItems, meds }) {
  const [cart, setCart] = useState(cartItems);
  const [medicine, setMedicine] = useState(meds);

  const deleteHandler = (id) => {
    console.log(id+'-------------------------------------------------------------------')
    console.log(cart)
    setCart((prev) => prev.filter(item => item.id !== id));
  }

  console.log(medicine)
  return (
    <div>
      <h3>Ваша корзина</h3>
      <div>
        {cart?.map(item => (
          <CartForm item={item} key={item.id} med={medicine.filter(el => el.id === item.med_id)[0]} deleteHandler={deleteHandler} />
        ))}
      </div>
    </div>
  )

}
