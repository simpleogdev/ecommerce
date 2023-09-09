import allProducts from "@/lib/actions/allProducts";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";

interface HomeProps {}

const AllProducts: FC<HomeProps> = async ({}) => {
  const products = await allProducts();
  return (
    <main className="max-w-6xl my-10 gap-5 gap-x-20 mx-auto grid grid-cols-4">
      {products &&
        products?.map((product) => (
          <Link key={product?.id} href={`products/${product?.id}`} className="flex flex-col relative cursor-pointer items-start justify-start">
            <Image
              className="max-h-[300px] w-full object-center rounded-md min-h-[300px] object-cover"
              src={product?.imgURL}
              alt={product?.name}
              width={400}
              height={400}
            />
            <p className="my-5">{product?.name}</p>
            <p className="text-left">₹ {product?.price}.00</p>
            <div className="absolute w-14 right-1 h-14 p-5  text-gray-100 rounded-full flex items-center justify-center">
              <div className="flex flex-col items-center justify-center p-5">
                <AiOutlineHeart size={30}/>
              </div>
            </div>
          </Link>
        ))}
    </main>
  );
};

export default AllProducts;
