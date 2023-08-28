import React from 'react'
import { useCart } from '../hooks/useCart'
import { Link } from 'react-router-dom';

export const Products = ({ products }) => {

  const { addToCart } = useCart();

  return (

    <main className='flex justify-center items-center text-center  w-full'>
      <div className='grid grid-cols-3 gap-4'>

    {products.map((product) => (
        <Link to={`/product/${product.id}`}>
           <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div className="h-56 w-full " >
          <div className='w-full'>
            <img className='w-full h-auto object-fill aspect-video' src={product.thumbnail} />
          </div>
          <button 
          onClick={() => addToCart(product)}
          className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </button>
        </div>
        <div className="bg-slate-50 px-5 py-3 mt-4">
          <h3 className="text-gray-700 uppercase">{product.title}</h3>
          <span className="text-gray-500 mt-2">${product.price}</span>
        </div>
      </div>
        </Link>
    ))}
    
    </div>
    
    </main>
  )
}
