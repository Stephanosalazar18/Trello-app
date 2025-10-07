import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full p-4 px-16 border-b flex shadow-sm bg-white/85 backdrop-blur'>
      <div className='mx-auto w-full max-w-screen-2xl flex items-center justify-between'>
        <Logo />
        <div className='flex items-center space-x-3 md:space-x-4'>
          <Button size="sm" variant="ghost" asChild>
            <Link href="/sign-in">
              Privacy Policy
            </Link>
          </Button>
          <Button size="sm" variant="ghost" asChild>
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Footer