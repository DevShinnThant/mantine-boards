import { AppShell } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { useStore } from "../store/client/useStore"
import Header from "./Header"
import Navbar from "./Navbar"
import classes from "./styles/App.module.css"

export default function App({ children }: Children) {
  const [opened, { toggle }] = useDisclosure()

  const { isNavbarCollapse } = useStore()

  return (
    <AppShell
      classNames={{
        root: classes.root,
        navbar: classes.navbar,
        header: classes.header,
        main: classes.main,
      }}
      navbar={{
        width: isNavbarCollapse ? 60 : 260,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>
      <AppShell.Navbar data-collpased={isNavbarCollapse}>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
