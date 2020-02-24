import React from 'react'
import product from '../../images/product.svg'
export default function PHHeader() {
    return (
        <div className="title">
            <img src={product} alt="product house" className="mr-2" /> Production House
        </div>
    )
}
