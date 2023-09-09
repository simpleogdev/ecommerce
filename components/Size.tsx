"use client";
import { FC, useState } from "react";

interface SizeProps {}

const Size: FC<SizeProps> = ({}) => {
  const [active, isActive] = useState<boolean>(false);
  const setIsActive = () => {
    isActive(!active);
  };
  return (
    <div className="flex space-x-4 my-2 items-center justify-center">
      <div
        onClick={setIsActive}
        className={` ${
          active ? "border-blue-500 border-2 text-blue-400" : "border"
        } cursor-pointer px-5 py-2 flex items-center justify-center`}
      >
        <p>S</p>
      </div>
      <div className="border cursor-pointer px-5 py-2 flex items-center justify-center">
        <p>M</p>
      </div>
      <div className="border cursor-pointer px-5 py-2 flex items-center justify-center">
        <p>L</p>
      </div>
      <div className="border cursor-pointer px-5 py-2 flex items-center justify-center">
        <p>XL</p>
      </div>
      <div className="border cursor-pointer px-5 py-2 flex items-center justify-center">
        <p>XXL</p>
      </div>
    </div>
  );
};

export default Size;
