import Image from "next/image";
import { FC } from "react";
import { AiFillStar } from "react-icons/ai";
import Size from "../Size";
import AddToCart from "../AddToCart";

interface SinglePageProps {
  productId: number;
  name: string;
  price: number;
  brand: string;
  description: string;
  imgURL: string;
  star: number;
  ratings: string;
  reviews: string;
}

const SinglePage: FC<SinglePageProps> = ({
  productId,
  name,
  price,
  brand,
  description,
  imgURL,
  star,
  ratings,
  reviews,
}) => {
  return (
    <div className="max-w-5xl my-10 mx-auto">
      <div className="flex items-start justify-center space-x-10">
        <div>
          <Image src={imgURL} alt={name} width={400} height={400} className="object-cover rounded-md" />
        </div>
        <div>
          <h4 className="text-gray-400 font-medium my-5">{brand}</h4>
          <h2 className="text-xl font-medium">{name}</h2>
          <p className="text-xl font-bold my-5">₹ {price}.00</p>
          <div className="flex items-center space-x-2 justify-start">
            <div className="flex bg-green-500 text-white space-x-2 px-3 font-semibold py-1 rounded-lg items-center justify-center">
              <p>{star.toString()}</p>
              <AiFillStar className="" />
            </div>
            <div>
              <p>
                {ratings} ratings and {reviews} reviews
              </p>
            </div>
          </div>
          <div className="my-5 max-w-2xl text-lg font-medium">
            <p>{description}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg text-gray-400">size</p>
            <Size />
          </div>
        <div className="my-5 flex items-center justify-start">
          <AddToCart id={productId}/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
