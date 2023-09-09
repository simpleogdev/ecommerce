"use client"
import { FC } from 'react'
import { Button } from './ui/Button'
import { toast } from 'react-hot-toast'

interface AddToCartProps {
  id: number
}

const AddToCart: FC<AddToCartProps> = ({ id }) => {
  const handleCart = () => {
    toast.success('Item added to cart')
    console.log(id)
  }
  return (
    <Button onClick={handleCart}>Add to cart</Button>
  )
}

export default AddToCart
