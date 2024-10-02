import {
  ActionIcon,
  Avatar,
  Box,
  Divider,
  Flex,
  Group,
  Image,
  Menu,
  Text,
  rem,
} from "@mantine/core"
import { ExportSquare, Link1, UserAdd } from "iconsax-react"
import Avatar1 from "../assets/avatars/avatar-1.jpg"
import Avatar2 from "../assets/avatars/avatar-2.jpg"
import Avatar3 from "../assets/avatars/avatar-4.jpg"
import { Folder } from "./TabSection"
import classes from "./styles/FolderCard.module.css"

export default function FolderCard(folder: Folder) {
  return (
    <Box className={classes.root}>
      <Box className={classes.imageSection}>
        <Image h="100%" src={folder.image} />
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <ActionIcon className={classes.actionIcon} variant="subtle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="gray"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              </svg>
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              leftSection={
                <Link1
                  style={{
                    width: rem(14),
                    height: rem(14),
                    transform: "rotate(-40deg)",
                  }}
                />
              }
              fz={12}
            >
              Copy link
            </Menu.Item>

            <Menu.Item
              leftSection={
                <ExportSquare style={{ width: rem(14), height: rem(14) }} />
              }
              fz={12}
            >
              Share project
            </Menu.Item>
            <Menu.Item
              fz={12}
              leftSection={
                <UserAdd style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Manage permission
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Box>
      <Group w="100%" align="center" justify="space-between">
        <Flex direction="column" align="start" gap={3}>
          <Text lh={1} className={classes.title}>
            {folder.title}
          </Text>
          <Flex align="center" gap={10}>
            <Text fz={12}>{folder.imageCount} images </Text>

            <Divider component="span" orientation="vertical" />
            <Text fz={12} component="span">
              {folder.size}
            </Text>
          </Flex>
        </Flex>

        <Avatar.Group spacing={5}>
          <Avatar size={24} src={Avatar1} />
          <Avatar size={24} src={Avatar2} />
          <Avatar size={24} src={Avatar3} />
          <Avatar size={24}>+5</Avatar>
        </Avatar.Group>
      </Group>
    </Box>
  )
}
