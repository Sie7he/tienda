import React, { useId, useState } from 'react'
import useFilters from '../hooks/useFilters';

export const Filters = () => {
    
    const { filters, setFilters } = useFilters();
    const priceFilterId = useId();
    const categoryFilterId = useId();

    const handleMinPrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

  return (
   
<div className='flex justify-between'>
<div className='flex gap-4'>
<label htmlFor={priceFilterId}>
    <input
        id={priceFilterId}
        type='range'
        min={0} 
        max={1000}
        onChange={handleMinPrice}
        value={filters.minPrice}
    />

</label>
<span className='text-white'>{filters.minPrice}</span>
</div>

<div>
<select onChange={handleChangeCategory} id={categoryFilterId}
    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
>
    <option value={'all'}>Todas las Categorías</option>
    <option value={'laptops'}>Notebooks</option>
    <option value={'smartphones'}>Celulares</option>
</select>
</div>
</div>
  )
}
