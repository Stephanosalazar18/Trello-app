"use client"

import { Plus } from "lucide-react"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import { FormPopover } from "@/components/form/form-popover"


import { MobileSidebar } from "./mobile-sidebar"

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-14 z-20  px-16 border-b shadow-sm bg-white flex items-center">
      <MobileSidebar />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex pl-8">
          <Logo />
        </div>
        <FormPopover align="start" side="bottom" sideOffset={18}>
          <Button size="sm" className="rounded-sm hidden md:block h-auto py-1.5 px-2 bg-indigo-500 text-white">
            Create
          </Button>
        </FormPopover>

        <FormPopover>
          <Button size="sm" className="rounded-sm md:hidden block bg-indigo-500">
            <Plus className="h-4 w-4" />
          </Button>
        </FormPopover>

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