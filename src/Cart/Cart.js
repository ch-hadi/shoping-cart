import React from 'react'
import { useSelector } from 'react-redux'
import Total from '../components/Total'
import CartItem from './CartItem'

const Cart = () => {
    // src/pages/Cart.js
const cart = useSelector((state) => state.cart.cart)
console.log(cart)
  return (
    <div >
    <h3>Shopping Cart</h3>
    <Total/>
    <div className='cart-page'>
    {cart?.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        image={item.thumbnail}
        title={item.title}
        price={item.newPrice} 
        quantity={item.quantity}
      />
    ))}
    </div>
   
  </div>
  )
}

export default Cart