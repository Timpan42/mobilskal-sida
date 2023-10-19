import { createContext, useState, useEffect } from 'react'

export const ProductIdContext = createContext()

export const CartContextProvider = (children) => {
    const [productId, setProductId] = useState()

    return (
        <ProductIdContext.Provider value={{
            productId,
            setProductId
        }}
        >
            {children}
        </ProductIdContext.Provider>
    )
}
