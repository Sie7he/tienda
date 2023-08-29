import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/mocks.json';
import { useCart } from './hooks/useCart';

export const Details = () => {

   const { id } = useParams();
   const { addToCart } = useCart();

    const product = products.find((product) => product.id === parseInt(id))
    console.log(product)


return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img 
          alt={product.title} 
          className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" 
          src={product.thumbnail}
          style={{ viewTransitionName: `imagen-${product.id}` }}
          />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.brand}</h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
  
          <p className="leading-relaxed">{product.description}</p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
           
          </div>
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
            <button className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:green-red-700 rounded" onClick={() => (addToCart(product))}>Add To Cart</button>
           
          </div>
        </div>
      </div>
    </div>
  </section>
)    
}