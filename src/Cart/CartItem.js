import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementQuantity,incrementQuantity,removeItem} from './cartSlice'

const CartItem = ({id, image, title, price, quantity=0, }) => {
    const dispatch = useDispatch()
  return (
    <div className="cartItem">
     <div className='product_img'>
     <img className="cart_img" src={image} alt='item'/>
     </div>
      <div className="cartItem__info">
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='cartItem__incrDec'>
          <button className='btn' onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button className='btn' onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <button
          className='btn' 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem