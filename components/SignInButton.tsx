"use client";
import { FC, useState } from "react";
import { Button } from "./ui/Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface SignInProps {
  className?: string;
}

const SignInButton: FC<SignInProps> = ({ className }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signInWithGoogle = () => {
    signIn("google");
  };
  return (
    <>
      <Button className={className} onClick={signInWithGoogle}>
        Sign In With Google
      </Button>
    </>
  );
};

export default SignInButton;
