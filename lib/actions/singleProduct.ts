import prisma from "../prisma"

const singleProduct = async (id: number) => {
  const item = await prisma.products.findUnique({
    where: {
      id: id
    }
  })
  return item
}

export default singleProduct
