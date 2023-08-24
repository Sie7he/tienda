import React, { createContext, useState } from 'react'

export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {

    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 700
    })

  return (
    <FiltersContext.Provider value={{
        filters,
        setFilters
    }}>
        {children}
    </FiltersContext.Provider>
    )
}
