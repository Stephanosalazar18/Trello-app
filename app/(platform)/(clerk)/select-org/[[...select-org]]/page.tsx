import { OrganizationList } from "@clerk/nextjs"


export default function CreateOrganization() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image con blur aplicado directamente a la imagen */}
      
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