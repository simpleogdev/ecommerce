import SignOut from "@/components/auth/SignOut";
import SignUp from "@/components/auth/SignUp";
import getUser from "@/lib/session";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { PiShoppingCartSimple } from "react-icons/pi";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = async ({}) => {
  const session = await getUser();
  return (
    <nav className="w-full py-5 px-20 bg-gray-100">
      <div className="flex items-center justify-between">
        <Link href={'/'} className="">
          <Image src="/images/pngwing.com.png" width={200} height={200} alt="logo" />
        </Link>
        <div className="space-x-5 md:flex hidden">
          <Link href="/men">Men's Clothing</Link>
          <Link href="/women">Women's Clothing</Link>
          <Link href="/kid">Kid's Clothing</Link>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <AiOutlineSearch className="" size={23} />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent py-4 outline-none placeholder:text-xl"
          />
          <ul className="relative cursor-pointer group">
            <li>
              {session?.image ? (
                <Image src={session?.image} alt="img" width={40} height={40} className="rounded-full" />
              ) : (
                <AiOutlineUser size={28} />
              )}
            </li>
            <ul className="absolute bg-white rounded-md hidden group-hover:flex flex-col right-0 gap-y-2 shadow-2xl p-5 items-center justify-center">
              <Link href={"/account"}>Account</Link>
              <Link href={"/order"}>Order</Link>
              <Link href={"/gifts"}>Gifts</Link>
              {session?.email ? <SignOut /> : <SignUp />}
            </ul>
          </ul>
          <Link className="p-2 border rounded-lg" href={"/cart"}>
            <PiShoppingCartSimple size={25} />
          </Link>
          <Link className="p-2 border rounded-lg" href={"/wishlist"}>
            <AiOutlineHeart size={25} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
