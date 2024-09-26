import {
  Avatar,
  Burger,
  Flex,
  Group,
  Input,
  Menu,
  Text,
  rem,
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import {
  IconArrowsLeftRight,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from "@tabler/icons-react"
import { SearchNormal1 } from "iconsax-react"
import FullScreen from "../components/FullScreen"
import ThemeSwitch from "../components/ThemeSwitch"
import { useStore } from "../store/client/useStore"

interface Props {
  opened: boolean
  toggle: () => void
}

export default function AppHeader({ opened, toggle }: Props) {
  const { isNavbarCollapse, toggleNavbar } = useStore()

  const smallScreen = useMediaQuery("(max-width: 48em)")

  return (
    <Group h="100%" px="lg" justify="space-between">
      <Flex align="center" gap={16}>
        {smallScreen ? (
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        ) : (
          <Burger
            style={{
              outline: "none",
            }}
            size="sm"
            opened={!isNavbarCollapse}
            onClick={toggleNavbar}
          />
        )}
        <Input
          leftSection={<SearchNormal1 size={18} />}
          placeholder="Search..."
          w={smallScreen ? 100 : 300}
        />
      </Flex>

      <Flex align="center" gap={24}>
        <FullScreen />

        <ThemeSwitch />

        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Avatar src={"https://ui.shadcn.com/avatars/02.png"} radius="xl" />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Application</Menu.Label>
            <Menu.Item
              leftSection={
                <IconSettings style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Settings
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconMessageCircle
                  style={{ width: rem(14), height: rem(14) }}
                />
              }
            >
              Messages
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconPhoto style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Gallery
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconSearch style={{ width: rem(14), height: rem(14) }} />
              }
              rightSection={
                <Text size="xs" c="dimmed">
                  ⌘K
                </Text>
              }
            >
              Search
            </Menu.Item>

            <Menu.Divider />

            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item
              leftSection={
                <IconArrowsLeftRight
                  style={{ width: rem(14), height: rem(14) }}
                />
              }
            >
              Transfer my data
            </Menu.Item>
            <Menu.Item
              color="red"
              leftSection={
                <IconTrash style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Delete my account
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </Group>
  )
}
