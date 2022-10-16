import React from 'react'
import { formatCurrency } from '../utilities/formatCurrency';

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

const StoreItem = ({id, name, price, imgUrl}: StoreItemProps) => {

    const quantity = 0

  return (
    <div>
        <span>{name} </span>
        <span>{formatCurrency(price)}</span>
        <div>
            {quantity === 0 ? (
                <button>+ Add to cart</button>
            ) : 
            <div>
                <button>-</button>
                <span>{quantity} in the cart</span>
                <button>+</button>
                <div>
                    <button>Remove</button>
                </div>
            </div> }
        </div>
    </div>
  )
}

export default StoreItem