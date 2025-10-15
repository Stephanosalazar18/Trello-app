import Image from "next/image"

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Image
        src="/hero.jpg"
        alt="Fondo"
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none -z-10 object-cover object-center blur-sm scale-110 "
      />
    <div className="min-h-screen flex items-center justify-center">
      {children}
    </div>
    </>
  )
}

export default ClerkLayout