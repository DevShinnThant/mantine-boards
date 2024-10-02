import {
  ActionIcon,
  Avatar,
  Box,
  Burger,
  Divider,
  Flex,
  Group,
  Text,
  TextInput,
} from "@mantine/core"
import { Notification, SearchNormal1, Setting } from "iconsax-react"
import ProfileImage from "~/assets/logos/avatar.jpg"
import classes from "./styles/Header.module.css"

interface Props {
  opened: boolean
  toggle: () => void
}

export default function Header({ opened, toggle }: Props) {
  return (
    <Flex
      h="100%"
      gap={10}
      w="100%"
      direction={{ base: "row", md: "column" }}
      align="center"
    >
      <Burger
        mr={10}
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
        size="sm"
      />
      <Group className={classes.wrapper}>
        <Text visibleFrom="md" className={classes.title} fz={24} fw={800}>
          Welcome back
        </Text>
        <Flex align="center" gap={24}>
          <TextInput
            visibleFrom="md"
            radius="md"
            w={260}
            leftSection={<SearchNormal1 size={14} />}
            placeholder="Search"
            classNames={{
              input: classes.searchInput,
            }}
          />
          <Flex align="center" gap={8}>
            <Flex pos="relative">
              <Avatar size={34} src={ProfileImage} alt="it's me" />
              <Box
                w={12}
                h={12}
                bg="green.4"
                style={{
                  borderRadius: "50%",
                  border: "2px solid black",
                }}
                pos="absolute"
                bottom={-2}
                right={-2}
              />
            </Flex>
            <Text className={classes.username} lts={-0.4} fz={12} fw={700}>
              Shin Thant
            </Text>
          </Flex>

          <Flex align="center" gap={8}>
            <ActionIcon
              className={classes.actionIcon}
              size={30}
              radius="xl"
              variant="subtle"
            >
              <Notification size={16} />
            </ActionIcon>
            <ActionIcon
              className={classes.actionIcon}
              size={30}
              radius="xl"
              variant="subtle"
            >
              <Setting size={16} />
            </ActionIcon>
          </Flex>
        </Flex>
      </Group>
      <Divider visibleFrom="md" w="100%" />
    </Flex>
  )
}
