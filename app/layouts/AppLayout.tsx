import { AppShell, Flex, Group, Text } from "@mantine/core"
import { useHeadroom } from "@mantine/hooks"
import { Link } from "@remix-run/react"
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
      header={{
        height: "var(--app-header-height)",
        collapsed: !pinned,
        offset: false,
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group
          className={classes.header}
          w="100%"
          h="100%"
          justify="space-between"
        >
          <Link to="/">
            <Flex flex={1} ff="Greycliff" gap="sm" align="center">
              <MantineLogo size={30} color="black" type="mark" />
              <Text visibleFrom="md" className={classes.logo_title} fz={24}>
                Mantine Dashboard
              </Text>
              <Text hiddenFrom="md" className={classes.logo_title} fz={24}>
                Dashboard
              </Text>
            </Flex>
          </Link>
          <Flex align="center" gap="sm">
            <SearchControl />
            <GithubControl link={GITHUB_LINK} />
            <DiscordControl link={DISCORD_LINK} />
            <ThemeSwitch />
          </Flex>
        </Group>
      </AppShell.Header>

      <AppShell.Main px={0} className={classes.main}>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}
