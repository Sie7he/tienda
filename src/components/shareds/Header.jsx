import React, { useState } from 'react';
import {products} from '../../data/mocks.json';
import { Filters } from './Filters';

export const Header = () => {


  return (
    <header className='bg-gradient-to-r from-slate-500 to-slate-300 w-full mb-4 p-4'>
    <h1 className='text-center text-4xl text-yellow-50'>React Shop</h1>
    <Filters />
    </header>
  )
}
