import { Plus } from "lucide-react"
import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { MobileSidebar } from "./mobile-sidebar"

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-14 px-16 border-b shadow-sm bg-white flex items-center">
      <MobileSidebar />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex pl-8">
          <Logo />
        </div>
        <Button size="sm" className="rounded-sm hidden md:block h-auto py-1.5 px-2 bg-indigo-500 text-white">
          Create
        </Button>
        <Button size="sm" className="rounded-sm md:hidden block ">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={"/organization/:id"}
          afterSelectOrganizationUrl={"/organization/:id"}
          afterLeaveOrganizationUrl={"/select-org"}
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }
            }
          }}
        />
        <UserButton
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              }
            }
          }}
        />
      </div>
    </nav>
  )
}

export default Navbar