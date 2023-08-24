import React, { useContext, useId } from 'react'
import './cart.modules.css';
import { CartIcon } from './Icons';
import { useCart } from '../hooks/useCart';



function CartItem({ thumbnail, price, title, quantity, addToCart }) {

  return (
    <li>
    <img src={thumbnail}
      alt={title}
    />
    <div>
      <strong>
        {title}
      </strong>
      - ${price}
    </div>
    <footer>
      Qty: {quantity}
      <button onClick={addToCart}>+</button>
    </footer>
  </li>    
  )


}


export const Cart = () => {
  const cartCheckBoxId = useId();
  const { cart, clearCart, addToCart } = useCart();


  return (
    <>
      <label className={'cart-button'} htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckBoxId} hidden />
      <aside className={'cart'}>
        <ul>
          {cart.map(product => (
            
            <CartItem key={product.id} 
            addToCart={() => addToCart(product)} 
            {...product}/>
          ))}
        </ul>
      </aside>
    </>
  )
}
