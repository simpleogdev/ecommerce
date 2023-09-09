import Image from 'next/image'
import { FC } from 'react'
import SignInButton from '../SignInButton'

interface SignInProps {
  
}

const SignIn: FC<SignInProps> = ({  }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='my-10'>
        <Image className='bg-transparent' src='/images/logo.jpg' alt='logo' width={200} height={200} quality={100}/>
      </div>
      <div className='flex w-full my-5'>
        <SignInButton className='flex w-[500px] py-6' />
      </div>
    </div>
  )
}

export default SignIn