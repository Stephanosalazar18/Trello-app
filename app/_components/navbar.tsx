import Logo from '@/components/logo-white'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-14 px-6 md:px-16 flex items-center z-30">
      <div className="mx-auto w-full max-w-screen-2xl flex items-center justify-between">
        <Logo />
        <div className="flex items-center space-x-3 md:space-x-4">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-up">sign-up</Link>
          </Button>
          {/* <SignedOut>
            <Button size="sm" variant="outline" className="cursor-pointer" asChild>
              <SignInButton />
            </Button> 
            <SignUpButton>
              <Button size="sm" variant="outline" className="cursor-pointer">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar