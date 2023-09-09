"use client"
import { FC } from 'react'
import { Button } from './ui/Button'
import { signOut } from "next-auth/react"
import { toast } from 'react-hot-toast'

interface SignInProps {
  className?: string
}

const SignOutButton: FC<SignInProps> = ({ className }) => {
  const signOutWithGoogle = () => {
    signOut()
    toast.success('Successfully Logout')
  }
  return (
    <>
    <Button className={className} onClick={signOutWithGoogle}>Sign Out</Button>
    </>
  )
}

export default SignOutButton