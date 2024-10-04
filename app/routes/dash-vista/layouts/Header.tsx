import {
  ActionIcon,
  Avatar,
  Burger,
  Divider,
  Flex,
  Group,
  Popover,
  Text,
  TextInput,
} from "@mantine/core"
import { Notification, SearchNormal1, Setting2 } from "iconsax-react"
import { MantineLogoRounded } from "~/components/MantineLogoRounded"
import User from "../assets/avatars/avatar-3.jpg"
import ThemeSwitch from "../components/ThemeSwitch"
import classes from "./styles/Header.module.css"

interface Props {
  opened: boolean
  toggle: () => void
}

export default function Header({ opened, toggle }: Props) {
  return (
    <Group w="100%" gap={0} className={classes.root} p={0} h="100%">
      <Burger
        mr={10}
        opened={opened}
        onClick={toggle}
        hiddenFrom="md"
        size="sm"
      />
      <Flex gap="sm" align="center">
        <MantineLogoRounded color="black" size={30} />
        <Text fz={18} fw={600}>
          Tasker
        </Text>
      </Flex>

      <Flex
        flex={1}
        justify="end"
        align="center"
        gap={14}
        className={classes.toolSection}
      >
        <TextInput
          visibleFrom="md"
          radius="xl"
          flex={1}
          leftSectionWidth={44}
          leftSection={<SearchNormal1 size={18} />}
          classNames={{
            input: classes.searchInput,
          }}
          placeholder="Search"
        />

        <ActionIcon
          visibleFrom="md"
          className={classes.actionControl}
          variant="light"
        >
          <Notification size={18} />
        </ActionIcon>
        <ActionIcon
          visibleFrom="md"
          className={classes.actionControl}
          variant="light"
        >
          <Setting2 size={18} />
        </ActionIcon>

        <ThemeSwitch />

        <Group visibleFrom="md" align="center" gap={8}>
          <Avatar size={36} src={User} />
          <Flex direction="column" gap={3} align="start">
            <Text lh={1} fw={500} fz={14}>
              Shinn Thant
            </Text>
            <Text lh={1} fz={13} c="dimmed">
              Developer
            </Text>
          </Flex>
        </Group>
        <Popover width={200} position="bottom" withArrow shadow="md">
          <Popover.Target>
            <Avatar hiddenFrom="sm" size={36} src={User} />
          </Popover.Target>
          <Popover.Dropdown>
            <Flex direction="column" gap={5} align="start">
              <Text fw={500} fz={14}>
                Shinn Thant
              </Text>
              <Divider w="100%" />
              <Text fz={13} c="dimmed">
                Developer
              </Text>
            </Flex>
          </Popover.Dropdown>
        </Popover>
      </Flex>
    </Group>
  )
}
