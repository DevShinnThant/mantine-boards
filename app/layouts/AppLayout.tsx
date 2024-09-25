import { AppShell, Flex, Group, Text } from "@mantine/core"
import { useHeadroom } from "@mantine/hooks"
import { MantineLogo } from "~/components/MantineLogo"
import ThemeSwitch from "~/components/ThemeSwitch"
import { DiscordControl } from "./header/DiscordControl"
import { GithubControl } from "./header/GithubControl"
import SearchControl from "./header/SearchControl"
import classes from "./styles/AppLayout.module.css"

const GITHUB_LINK = import.meta.env.VITE_GITHUB_REPO
const DISCORD_LINK = import.meta.env.VITE_DISCORD_ACC

export default function AppLayout({ children }: Children) {
  const pinned = useHeadroom({ fixedAt: 120 })

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned, offset: false }}
      padding="md"
    >
      <AppShell.Header>
        <Group
          className={classes.header}
          w="100%"
          h="100%"
          justify="space-between"
        >
          <Flex flex={1} ff="Greycliff" gap="sm" align="center">
            <MantineLogo size={30} color="black" type="mark" />
            <Flex align="center" gap={8}>
              <Text className={classes.logo_title} fz={24}>
                Mantine
              </Text>
              <Text visibleFrom="md" className={classes.logo_title} fz={24}>
                Dashboard
              </Text>
            </Flex>
          </Flex>
          <Flex align="center" gap="sm">
            <SearchControl />
            <GithubControl link={GITHUB_LINK} />
            <DiscordControl link={DISCORD_LINK} />
            <ThemeSwitch />
          </Flex>
        </Group>
      </AppShell.Header>

      <AppShell.Main px={0} pt={59} className={classes.main}>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}
