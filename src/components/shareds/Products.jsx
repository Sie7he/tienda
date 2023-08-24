import React from 'react'
import { AddToCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export const Products = ( {products} ) => {

  const { addToCart } = useCart()

  return (
   
   <main className='flex justify-center items-center text-center  w-full'>
    <ul className='grid grid-cols-3 gap-4'>
        { products.map( product =>
        
        <li key={product.id} className='p-4 m-4'>
          <h1 className='bold font-serif text-lg'>{product.title}</h1>
         <img src={product.thumbnail} className='w-full aspect-square h-96' />
         <span>${product.price}</span>
<div>
  <button onClick={()=>addToCart(product)}  className="bg-blue-500 hover:bg-blue-700 w-14 h-14 rounded inline">
    <AddToCartIcon/>
  </button>
</div>
        </li>
     )}
    </ul>
   </main>
  )
}
