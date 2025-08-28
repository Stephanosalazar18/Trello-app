import { ModalProviders } from "@/components/providers/modal-providers"
import { QueryProvider } from "@/components/providers/query-provider"

const PlatformLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div>
      <QueryProvider>
        <ModalProviders />
        {children}
      </QueryProvider>
    </div>
  )
}

export default PlatformLayout