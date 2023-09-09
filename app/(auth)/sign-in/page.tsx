import SignIn from '@/components/auth/SignIn'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = async ({  }) => {
  return (
    <main className='flex items-center justify-center flex-col h-screen max-w-5xl mx-auto'>
      <SignIn />
    </main>
  )
}

export default page
