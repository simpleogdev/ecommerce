"use client";
import { signOut } from "next-auth/react";
import { FC } from "react";

interface SignOutProps {}

const SignOut: FC<SignOutProps> = ({}) => {
  return (
    <button className="" onClick={() => signOut()}>
      Log out
    </button>
  );
};

export default SignOut;
