import React, { useEffect, useState } from 'react'
import CartForm from './CartForm'

export default function CartPage({ cartItems, meds }) {
  const [cart, setCart] = useState(cartItems);
  const [medicine, setMedicine] = useState(meds);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  // const allPrice = 
  useEffect(() => {
    setTotalPrice((prev) => prev + cart.map(item => medicine.filter(el => el.id === item.med_id)[0]).reduce((sum, item) => sum + item.saleprice, 0));
    console.log(totalPrice)

  }, [])

  const handleAddition = (equantity, id) => {
    setTotalPrice((prev) => prev + equantity * medicine.filter(el => el.id === id)[0].saleprice);
    console.log(totalPrice)
  }

  console.log(totalPrice)


  const deleteHandler = (id) => {
    // console.log(id+'-------------------------------------------------------------------')
    console.log(cart)
    setCart((prev) => prev.filter(item => item.id !== id));
  }
  
  return (
    <div>
      <p style={{ color: 'black', fontSize: '30px',textAlign: 'center', marginBottom: '20px', marginTop: '20px'  }}>В вашей корзине {cart.reduce((acc, el) => acc + 1, 0)}</p>
      <div>
        {cart?.map(item => (
          <CartForm item={item} key={item.med_id} med={medicine.filter(el => el.id === item.med_id)[0]} deleteHandler={deleteHandler} handleAddition={handleAddition}/>
        ))}
      </div>
      <div>
        <hr className="border bg-dark w-100" style={{ color: 'black' }} />
      </div>
      <div style={{ display: 'flex' }}>
        <div>
          <form style={{ marginRight: '20px', marginLeft: '40px' }}>
            <div className="d-flex flex-row pb-3" style={{ width: '100%', marginRight: '20px' }}>
              <div className="d-flex align-items-center pe-2">
                <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1v"
                  value="credit" aria-label="..." />
              </div>
              <div className="rounded border w-100 p-3">
                <p className="d-flex align-items-center mb-0">
                  <i className="fab fa-cc-mastercard fa-lg text-dark pe-2" />Credit Card
                </p>
              </div>
            </div>
            <div className="d-flex flex-row pb-3" style={{ width: '100%', marginRight: '20px' }}>
              <div className="d-flex align-items-center pe-2">
                <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2v"
                  value="debit" aria-label="..." />
              </div>
              <div className="rounded border w-100 p-3" >
                <p className="d-flex align-items-center mb-0">
                  <i className="fab fa-cc-visa fa-2x fa-lg text-dark pe-2" />Debit Card
                </p>
              </div>
            </div>
            <div className="d-flex flex-row" style={{ width: '100%', marginRight: '20px' }}>
              <div className="d-flex align-items-center pe-2">
                <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel3v"
                  value="paypal" aria-label="..." />
              </div>
              <div className="rounded border w-100 p-3">
                <p className="d-flex align-items-center mb-0">
                  <i className="fab fa-cc-paypal fa-2x fa-lg text-dark pe-2" />PayPal
                </p>
              </div>
            </div>
          </form>
        </div >
        <div className="col-md-6 col-lg-4 col-xl-6" style={{ marginRight: '20px' }}>
          <div className="row">
            <div className="col-12 col-xl-6">
              <div className="form-outline mb-4 mb-xl-5">
                <input type="text" id="typeName" className="form-control form-control-lg" size="17"
                  placeholder="John Smith" />
                <label className="form-label" htmlFor="typeName">ФИО</label>
              </div>

              <div className="form-outline mb-4 mb-xl-5">
                <input type="text" id="typeExp" className="form-control form-control-lg" placeholder="MM/YY"
                  size="7" id="exp" minLength="7" maxLength="7" />
                <label className="form-label" htmlFor="typeExp">Expiration</label>
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <div className="form-outline mb-4 mb-xl-5">
                <input type="text" id="typeText" className="form-control form-control-lg" size="17"
                  placeholder="1111 2222 3333 4444" minLength="19" maxLength="19" />
                <label className="form-label" htmlFor="typeText">Номер карты</label>
              </div>

              <div className="form-outline mb-4 mb-xl-5">
                <input type="password" id="typeText" className="form-control form-control-lg"
                  placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3" />
                <label className="form-label" htmlFor="typeText">CVV</label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-xl-3">
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 500 }}>
            <p className="mb-2">Стоимость</p>
            <p className="mb-2">₽{totalPrice}</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 500 }}>
            <p className="mb-0">Персональная скидка</p>
            <p className="mb-0">-</p>
          </div>

          <hr className="my-4" />

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontWeight: 500 }}>
            <p className="mb-2">Итого </p>
            <p className="mb-2">₽{totalPrice}</p>
          </div>

          <button type="button" className="btn primary btn-block btn-lg" style={{ backgroundColor: '#527f62', color: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
       
              <span>К оплате ₽{totalPrice}</span>
            </div>
          </button>
        </div>
      </div >
    </div >
    // </div >
  )

}
