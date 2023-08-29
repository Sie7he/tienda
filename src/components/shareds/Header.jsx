import React, { useState } from 'react';
import {products} from '../../data/mocks.json';
import { Filters } from './Filters';

export const Header = () => {


  return (
    <header className='flex items-center bg-gradient-to-r from-slate-500 to-slate-300 h-7 w-full p-4'>
    <span className='text-center text-xs text-yellow-50' > 2023 Diego Escurra.</span>
   
    </header>
  )
}
