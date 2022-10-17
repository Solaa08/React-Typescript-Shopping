import React from 'react'
import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

const StoreItem = ({id, name, price, imgUrl}: StoreItemProps) => {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      } = useShoppingCart()
      const quantity = getItemQuantity(id)

  return (
    <div>
        <span>{name} </span>
        <span>{formatCurrency(price)}</span>
        <div>
            {quantity === 0 ? (
                <button onClick={() => increaseCartQuantity(id)}>+ Add to cart</button>
            ) : 
            <div>
                <button onClick={() => decreaseCartQuantity(id)}>-</button>
                <span>{quantity} in the cart</span>
                <button onClick={() => increaseCartQuantity(id)}>+</button>
                <div>
                    <button onClick={() => removeFromCart(id)}>Remove</button>
                </div>
            </div> }
        </div>
    </div>
  )
}

export default StoreItem