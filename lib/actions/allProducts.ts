'use server'

import prisma from "../prisma"

const allProducts = async () => {
  try {
    const allProducts = await prisma.products.findMany({})
    return allProducts
  } catch (error) {
    console.log(error)
  }
}

export default allProducts