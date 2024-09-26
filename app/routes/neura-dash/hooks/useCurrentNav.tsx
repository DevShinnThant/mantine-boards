import { useMemo } from "react"
import { useLocation } from "@remix-run/react"
import { sideLinks } from "../assets/navLinks"

export default function useCurrentNav() {
  const { pathname } = useLocation()

  const currentNav = useMemo(
    () =>
      sideLinks.find((link) => {
        return link.href.split("/").includes(pathname.split("/")[1])
      }),
    [pathname]
  )

  return currentNav
}
