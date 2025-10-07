import { OrganizationList } from "@clerk/nextjs"
import Image from "next/image"


export default function CreateOrganization() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image con blur aplicado directamente a la imagen */}
      <Image
        src="/hero.jpg"
        alt="Fondo"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover blur-xs brightness-70"
      />
      <div>
        <OrganizationList
          hidePersonal
          afterSelectOrganizationUrl={"/organization/:id"}
          afterCreateOrganizationUrl={"/organization/:id"}
        />
      </div>
    </div>
  )
} 