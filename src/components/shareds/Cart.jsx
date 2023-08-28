import React, { useContext, useEffect, useId, useState } from 'react'
import './cart.modules.css';
import { CartIcon } from './Icons';
import { useCart } from '../hooks/useCart';




function CartItem({ thumbnail, price, title, quantity, addToCart, reduceFromCart }) {

  return (
    <li>
    <img src={thumbnail}
      alt={title}
    />
    <div className='flex flex-col justify-around p-4'>
      <strong>
        {title}
      </strong>
       ${price.toLocaleString().replace(',','.')}
    <div>
    <div className="quantity-button border-2 rounded-lg py-">
  {quantity === 1 ? 
  <button className="quantity-decrease border-r-2 bg-gray-200 rounded"  disabled onClick={reduceFromCart}>-</button>
   : 
   <button className="quantity-decrease border-r-2" onClick={reduceFromCart}>-</button>
   }
  <span className="quantity-value">{quantity}</span>
  <button className="quantity-increase border-l-2" onClick={addToCart} >+</button>
</div>
</div>
    </div>
  </li>    
  )


}


export const Cart = () => {
  const cartCheckBoxId = useId();
  const { cart, removeFromCart, clearCart, addToCart, reduceFromCart } = useCart();
  const [number, setNumber] = useState(0);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {

    const newTotalQuantity = cart.reduce((total, product) => total + product.quantity, 0);
    setNumber(newTotalQuantity)

    const newTotal = cart.reduce((total, product) => total + (product.quantity * product.price), 0);
    setTotal(newTotal)

  },[cart])


  return (
    <>
      <label className={'cart-button'} htmlFor={cartCheckBoxId} onClick={() => setOpen(!open)}>
        {open ? 'X' : <CartIcon />}
        <div className='bg-red-700 rounded-full h-4 w-4 absolute -top-2  right-0 text-center text-white text-xs'>
          {number}
        </div>
      </label>
      <input type='checkbox' id={cartCheckBoxId} hidden />
      <aside className={'cart'}>
        <ul>
          {cart.map(product => (
            
            <CartItem key={product.id} 
            addToCart={() => addToCart(product)} 
            reduceFromCart={() => reduceFromCart(product)}
            {...product}/>
            
          ))}
        </ul>
        <div className='grid grid-cols-2 p-4 w-full'>
          <span className=''>Total:</span>
         <span className='text-end font-bold'>
         ${total.toLocaleString().replace(',', '.')}
         </span>

        </div>
      </aside>
    </>
  )
}
