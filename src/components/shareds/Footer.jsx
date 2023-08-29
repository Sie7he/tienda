import React from 'react'
import { useCart } from '../hooks/useCart'

export const Footer = () => {

    const {cart} = useCart();

  return (
  <footer className='flex items-center bg-slate-700 opacity-70 text-white fixed bottom-0 left-0 h-7 w-full p-4 '>
   <span className='text-center text-xs text-yellow-50' > Shopping Cart Midudev</span>
  </footer>
  )
}
