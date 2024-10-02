import {
  ActionIcon,
  Avatar,
  Box,
  Burger,
  Button,
  Divider,
  Flex,
  Menu,
  Text,
  rem,
} from "@mantine/core"
import { IconSearch, IconSettings, IconTrash } from "@tabler/icons-react"
import { Link21, Notification } from "iconsax-react"
import Profile from "~/assets/logos/avatar.jpg"
import classes from "./styles/Header.module.css"

interface Props {
  opened: boolean
  toggle: () => void
}

export default function Header({ opened, toggle }: Props) {
  return (
    <Box className={classes.root} w="100%" h="100%">
      <Box className={classes.wrapper} w="100%" h="100%">
        <Flex align="center" gap={4}>
          <Burger
            mr={10}
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />
          <Text lts={-0.4} fw={500}>
            Dashboard
          </Text>
        </Flex>
        <Flex h="100%" align="center" gap={12}>
          <Button
            visibleFrom="md"
            leftSection={<Link21 size={16} />}
            radius="md"
            color="#07BA7D"
          >
            <Text lts={-0.4} fw={600} fz={12}>
              Share Dashboard
            </Text>
          </Button>
          <Divider w={2} h="100%" orientation="vertical" />
          <ActionIcon radius="sm" pos="relative" variant="subtle" size={28}>
            <Notification className={classes.noti} variant="Bold" size={20} />
            <Box
              pos="absolute"
              top={3}
              right={5}
              style={{
                width: rem(8),
                height: rem(8),
                borderRadius: rem(4),
                backgroundColor: "red",
                border: "1px solid var(--mantine-color-gray-4)",
              }}
            />
          </ActionIcon>

          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Button px={6} variant="subtle">
                <Flex align="center" gap={10}>
                  <Avatar size={30} src={Profile} />
                  <Flex direction="column" align="start">
                    <Text
                      className={classes.profileName}
                      fz={13}
                      lh={1}
                      fw={500}
                      lts={-0.3}
                    >
                      Shin thant
                    </Text>
                    <Text fz={11} fw={500} lts={-0.3}>
                      Frontend dev
                    </Text>
                  </Flex>
                </Flex>
              </Button>
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
      </Box>
    </Box>
  )
}
