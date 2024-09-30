import { AppShell, Burger, Flex, Group, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { MantineLogoRounded } from "~/components/MantineLogoRounded"
import Navbar from "./Navbar"
import classes from "./styles/App.module.css"

export default function App({ children }: Children) {
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell
      header={{ height: 60 }}
      classNames={{
        root: classes.root,
        navbar: classes.navbar,
        header: classes.header,
        main: classes.main,
      }}
      navbar={{ width: 320, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group p={0} h="100%">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Flex gap="sm" align="center">
            <MantineLogoRounded color="black" size={30} />
            <Text fz={18} fw={600}>
              Tasker
            </Text>
          </Flex>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
