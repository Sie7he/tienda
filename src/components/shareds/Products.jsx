import React from 'react'
import { useCart } from '../hooks/useCart'
import { Link, useNavigate } from 'react-router-dom';
import { Filters } from './Filters';
import { Hero } from '../Hero';
import { flushSync } from 'react-dom';

export const Products = ({ products }) => {

  const { addToCart } = useCart();
  const navigate = useNavigate();
  const handleClick = (id) => {

    if (!document.startViewTransition) {
        navigate(`/product/${id}`)
    }
    document.startViewTransition(() => {
        flushSync(() => navigate(`/product/${id}`))
    }
    )
}

  return (
    <>
    <Hero />
    <main className='flex flex-col md:flex-row justify-center text-center gap-7 w-full md:min-h-screen p-4'>
  <div className='p-4'>
    <Filters />
  </div>

  <div className='container bg-blend-saturation'>
  <div className='flex flex-wrap gap-4 justify-start'>
    {products.length > 0 ? (
      products.map((product) => (
        <div key={product.id} className="w-72 max-w-sm mx-auto rounded-md shadow-md overflow-hidden ">
         <picture className='w-full cursor-pointer' onClick={() => handleClick(product.id)}>
            <img 
              className='w-full h-auto object-fill aspect-square p-4' 
              src={product.thumbnail} 
              style={{ viewTransitionName: `imagen-${product.id}` }}
              />
          </picture>
          <button 
          onClick={() => addToCart(product)}
          className="p-2 rounded-full bg-white text-gray-400 border border-gray-400 mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </button>
       
        <div className="bg-slate-50 px-5 py-3 mt-4">
          <h3 className="text-gray-700 uppercase font-normal text-xs">{product.title}</h3>
          <span className="text-gray-500 mt-2">${product.price}</span>
        </div>
        </div>
      ))
    ) : (
      <div className="col-span-3 text-center">There is nothing here</div>
    )}
  </div>
  </div>
</main>

   
    </>
  )
}
