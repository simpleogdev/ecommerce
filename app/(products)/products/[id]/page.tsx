import SinglePage from "@/components/layout/SinglePage";
import singleProduct from "@/lib/actions/singleProduct";
import { FC } from "react";

interface pageProps {
  params: any;
}

interface singleItemProps {
  id: number;
  name: string;
  price: number;
  brand: string;
  description: string;
  imgURL: string;
  star: number;
  ratings: string;
  reviews: string;
  category: string
}

const page: FC<pageProps> = async ({ params }) => {
  const id = params.id;
  const idToInt = Number(id);
  const product = await singleProduct(idToInt);
  // @ts-ignore
  const { productId, name, price, brand, description, imgURL, star, ratings, reviews } = product
  return (
    <main>
      <SinglePage productId={productId} name={name} price={price} brand={brand} description={description} imgURL={imgURL} star = {star} ratings={ratings} reviews={reviews} />
    </main>
  );
};

export default page;
