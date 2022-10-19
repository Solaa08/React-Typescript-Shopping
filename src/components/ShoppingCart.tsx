import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartModal from './CartModal';
import { useState } from 'react';

type ShoppingCartProps = {
    isOpen: boolean
  }
  

const ShoppingCart = ({isOpen}: ShoppingCartProps) => {


    const { closeCart } = useShoppingCart()

  return (
    <div>
        <CartModal isOpen={isOpen}/>
    </div>
  )
}

export default ShoppingCart