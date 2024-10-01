import { AppShell } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import Header from "./Header"
import Navbar from "./Navbar"
import classes from "./styles/App.module.css"

export default function App({ children }: Children) {
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell
      classNames={{
        root: classes.root,
        navbar: classes.navbar,
        header: classes.header,
        main: classes.main,
      }}
      navbar={{ width: 280, breakpoint: "sm", collapsed: { mobile: !opened } }}
    >
      <AppShell.Header>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
