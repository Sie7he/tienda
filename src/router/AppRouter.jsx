import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Products } from '../components/shareds/Products';
import { Details } from '../components/Details';
import { products as initialProducts} from '../data/mocks.json'
import useFilters from '../components/hooks/useFilters';

export const AppRouter = () => {
    const { filterProducts } = useFilters()
    const filteredProducts = filterProducts(initialProducts)

    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Products products={filteredProducts} />} />

            <Route path='/product/:id' element={<Details />} />
        </Routes>
        
        
        </BrowserRouter>
    )
}