import React from 'react'
import { useCart } from '../hooks/useCart'

export const Footer = () => {

    const {cart} = useCart();

  return (
  <footer className='rounded bg-slate-700 opacity-70 text-white fixed bottom-7 left-7'>

  </footer>
  )
}
