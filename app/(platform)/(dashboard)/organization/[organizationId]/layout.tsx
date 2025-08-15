
import { OrgControl } from "./_components/org-control"

export async function generateMetadata() {
  return {
    title: "Organization"
  }
}

const OrganizationLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  )
}

export default OrganizationLayout