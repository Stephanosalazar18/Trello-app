"use client"

import { useProModal } from "@/hooks/use-pro-modal"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useAction } from "@/hooks/use-action"
import { stripeRedirect } from "@/actions/stripe-redirect"
import { toast } from "sonner"


export const ProModal = () => {
  const proModal = useProModal()

  const { execute, isLoading } = useAction(stripeRedirect, {
    onSuccess: (data) => {
      window.location.href = data
    },
    onError: (error) => {
      toast.error(error)
    }
  })

  const onClick = () => {
    execute({

    })
  }

  return (
    <Dialog
      open={proModal.isOpen}
      onOpenChange={proModal.onClose}
    >
      <DialogContent className="max-w-md overflow-hidden p-0">
        <div className="aspect-video mt-0 relative flex items-center justify-center border rounded-md ">
          <Image
            src="/hero.svg"
            alt="Hero"
            className="object-cover w-full scale-125"
            fill
          />
        </div>
        <div className="text-neutral-700 mx-auto space-y-6 p-6">
          <h2 className="font-semibold text-xl">
            Upgrade to Pro Today!
          </h2>
          <p className="text-xs font-semibold text-neutral-600">
            Explore the best of ...
          </p>
          <div className="pl-3">
            <ul className="text-sm list-disc">
              <li>Unlimited Boards</li>
              <li>Advanced checklists</li>
              <li>Custom backgrounds</li>
              <li>And more...</li>
            </ul>
          </div>
          <Button
            disabled={isLoading}
            onClick={onClick}
            className="w-full"
            variant="primary"
          >
            Upgrade
          </Button>
        </div>
      </DialogContent>

    </Dialog>
  )
}