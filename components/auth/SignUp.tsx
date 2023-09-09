"use client"
import { signIn } from 'next-auth/react'
import { FC } from 'react'

interface SignUpProps {
  
}

const SignUp: FC<SignUpProps> = ({  }) => {
  return (
    <button onClick={() => signIn('google')}>Log in</button>
  )
}

export default SignUp
