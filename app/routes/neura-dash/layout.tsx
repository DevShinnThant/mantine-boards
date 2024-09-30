import { MetaFunction } from "@remix-run/node"
import { Outlet, useLoaderData } from "@remix-run/react"
import { getDashboardCode } from "~/utils"
import { dashboards } from "~/assets/dashboards"
import DetailLayout from "~/layouts/DetailLayout"
import App from "./layouts/App"

const dashboard = dashboards.find(
  (dashboard) => dashboard.title === "NeuraDash"
)!

export const meta: MetaFunction = () => {
  return [
    { title: dashboard.title },
    {
      name: dashboard.title,
      content: dashboard.description,
    },
  ]
}

export async function loader() {
  const codes = getDashboardCode("neura-dash")
  return codes
}

export default function NeuraDash() {
  const codes = useLoaderData<typeof loader>()

  return (
    <DetailLayout dashboard={dashboard} codes={codes}>
      <App>
        <Outlet />
      </App>
    </DetailLayout>
  )
}
