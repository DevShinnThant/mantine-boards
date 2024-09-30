import { Badge, Flex, ScrollArea, Text } from "@mantine/core"
import { Link, useLocation } from "@remix-run/react"
import {
  Calendar,
  Home2,
  Message,
  Profile2User,
  TaskSquare,
} from "iconsax-react"
import UsersChat from "../components/UsersChat"
import classes from "./styles/Navbar.module.css"

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <Flex h="100%" direction="column" gap={30} align="start" w="100%">
      <Flex direction="column" align="start">
        <Text className={classes.title} lh={1.1} fz={26} fw={500}>
          Welcome to the
        </Text>
        <Text className={classes.title} fz={26} fw={500}>
          Tasker System!
        </Text>
      </Flex>

      {/* 100% -  User Section + Header */}
      <ScrollArea
        scrollbarSize={0}
        h={{
          base: "100%",
          md: "calc(100% - 445.06px)",
        }}
        w="100%"
      >
        <Flex className={classes.navlinkContainer}>
          {navlinks.map(({ id, link, name, icon: Icon, notiCount }) => {
            return (
              <Link
                data-active={pathname === link}
                className={classes.navlink}
                to={link}
                key={id}
              >
                <Flex flex={1} align="center" gap={6}>
                  <Icon variant={id === 1 ? "Bold" : "Outline"} size={18} />
                  <Text fz={13}>{name}</Text>
                </Flex>

                {notiCount > 0 && (
                  <Badge
                    py={10}
                    px={8}
                    radius="xl"
                    fw={500}
                    color="var(--mantine-color-orange-6)"
                  >
                    +{notiCount}
                  </Badge>
                )}
              </Link>
            )
          })}
        </Flex>
      </ScrollArea>

      <UsersChat />
    </Flex>
  )
}

const navlinks = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dash-vista",
    icon: Home2,
    notiCount: 0,
  },
  {
    id: 2,
    name: "Message",
    link: "message",
    icon: Message,
    notiCount: 4,
  },
  {
    id: 3,
    name: "My Tasks",
    link: "my-tasks",
    icon: TaskSquare,
    notiCount: 1,
  },
  {
    id: 4,
    name: "Friends",
    link: "friends",
    icon: Profile2User,
    notiCount: 0,
  },
  {
    id: 5,
    name: "Calendar",
    link: "calendar",
    icon: Calendar,
    notiCount: 0,
  },
]
