import { Separator } from "@/components/ui/separator"
import { Info } from "./_components/info"
import { BoardList } from "./_components/board-list"
import { Suspense } from "react"

interface OrganizationPageProps {
  params: { organizationId: string }
}

const OrganizationPage = async ({ params }: OrganizationPageProps) => {

  const awaitedParams = await params


  return (
    <div className="w-full mb-20">
      <Info />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList organizationId={awaitedParams.organizationId} />
        </Suspense>
      </div>
    </div>
  )
}

export default OrganizationPage