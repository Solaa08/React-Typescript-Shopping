import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartModal from './CartModal';
import { useState } from 'react';

type ShoppingCartProps = {
    isOpen: boolean
  }
  

const ShoppingCart = ({isOpen}: ShoppingCartProps) => {

    const [show, setShow] = useState(false)

    const { closeCart } = useShoppingCart()

  return (
    <div>
        <CartModal isOpen={isOpen} hide={closeCart}/>
    </div>
  )
}

export default ShoppingCart