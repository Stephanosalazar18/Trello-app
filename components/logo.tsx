import Image from 'next/image'
import Link from 'next/link'

import localFont from 'next/font/local'
import { cn } from '@/lib/utils'

const headingFont = localFont({
  src: '../public/fonts/font.ttf',
})

const Logo = () => {
  return (
    <Link href="">
      <div className="hover:opacity-75 transition item-center gap-x-8 hidden md:flex">
        <Image
          src="/logo.svg"
          alt="Logo"
          height={30}
          width={30}
        />
        {/* <p className={cn(
          "text-lg text-neutral-700 pb-1",
          headingFont.className)}>
          NNF
        </p> */}

      </div>
    </Link>
  )
}

export default Logo