import { AppShell } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import Navbar from "./Navbar"
import classes from "./styles/App.module.css"

export default function App({ children }: Children) {
  const [opened] = useDisclosure()

  return (
    <AppShell
      classNames={{
        root: classes.root,
        navbar: classes.navbar,
        header: classes.header,
        main: classes.main,
      }}
      navbar={{ width: 260, breakpoint: "sm", collapsed: { mobile: !opened } }}
    >
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
