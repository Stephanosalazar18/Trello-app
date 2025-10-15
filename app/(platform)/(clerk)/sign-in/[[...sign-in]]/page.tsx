import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
  <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background image con blur aplicado directamente a la imagen */}
       
        <div>
          <SignIn />
        </div>
      </div>)
}