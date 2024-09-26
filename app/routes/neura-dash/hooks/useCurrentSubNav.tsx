import { useMemo } from "react"
import { sideLinks } from "../assets/navLinks"

interface Props {
  appTitle: string
}

export default function useCurrentSubNav({ appTitle }: Props) {
  const currentNav = useMemo(
    () => sideLinks.find((link) => link.title === appTitle),
    [appTitle]
  )

  return currentNav
}
