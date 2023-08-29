import React, { useEffect, useId, useState } from 'react'
import useFilters from '../hooks/useFilters';
import { products } from '../../data/mocks.json'

export const Filters = () => {

    const { filters, setFilters } = useFilters();
    const priceFilterId = useId();
    const categoryFilterId = useId();
    const uniqueCategories = new Set();
    products.map(product => uniqueCategories.add(product.category))


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

        <div className='flex flex-col gap-4 border border-slate-200 rounded p-4'>
            <h2>Filters</h2><hr />
            <div>
               
                <select onChange={handleChangeCategory} id={categoryFilterId}
                    className='py-3 px-4 pr-9 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 bg-white dark:border-gray-700 dark:text-gray-400'
                >
                    <option value={'all'}>All Categories</option>
                    {[...uniqueCategories].map(categoria => (
                        <option value={categoria} key={categoria}>{categoria}</option>))}


                </select>
            </div>
            <hr />
            <div className='flex flex-col gap-4'>
                <label htmlFor={priceFilterId} className='dark:text-gray-400 text-start'>  
                 Price
                </label>
                    <input
                        id={priceFilterId}
                        type='range'
                        min={0}
                        max={1000}
                        onChange={handleMinPrice}
                        value={filters.minPrice}
                        
                    />
                     
                     <input 
                    type="text" 
                    className="p-3 block w-16 border border-gray-400 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500  dark:text-gray-400"
                    value={filters.minPrice}
                    disabled
                />
            </div>
        </div>
    )
}
