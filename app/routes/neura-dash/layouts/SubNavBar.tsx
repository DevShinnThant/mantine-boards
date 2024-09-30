import { Link, useLocation, useNavigate } from "react-router-dom"
import { Button, Flex, Text, useMantineColorScheme } from "@mantine/core"
import { LoginCurve } from "iconsax-react"
import useCurrentSubNav from "../hooks/useCurrentSubNav"
import classes from "./styles/SubNavBar.module.css"

interface Props {
  isNavbarOpen: boolean
  appTitle: string
}

export default function SubNavBar({ isNavbarOpen, appTitle }: Props) {
  const currentNav = useCurrentSubNav({ appTitle })

  const navigate = useNavigate()

  const { pathname } = useLocation()

  const { colorScheme } = useMantineColorScheme()

  return (
    <Flex
      className={classes.root}
      data-collapsed={isNavbarOpen}
      h="100%"
      direction="column"
      align="start"
      w={217}
      py="sm"
      px="md"
    >
      <Text fz={20} fw={600}>
        {currentNav?.label}
      </Text>

      <Flex flex={1} gap={10} direction="column" align="start" my={30} w="100%">
        {currentNav?.subs?.map(({ href, icon: Icon, title }) => (
          <Link
            key={href}
            preventScrollReset
            className={classes.nav_link}
            data-active={pathname === href}
            to={href}
            onClick={() => {
              navigate(href)
            }}
          >
            <Icon
              color={
                colorScheme === "light" && pathname === href
                  ? "white"
                  : colorScheme === "dark" && pathname === href
                    ? "black"
                    : "gray"
              }
              variant="Bulk"
            />
            <Text fz={14}>{title}</Text>
          </Link>
        ))}
      </Flex>

      <Flex
        pos="absolute"
        bottom={0}
        left={0}
        p={10}
        bg={
          colorScheme === "light"
            ? "var(--mantine-color-gray-0)"
            : "var(--mantine-color-gray-8)"
        }
        w="100%"
        justify="space-between"
        align="center"
      >
        <Flex direction="column" align="start">
          <Text fz={14} fw={600}>
            Xsphere
          </Text>
          <Text fz={12}>xsphere@gmail.com</Text>
        </Flex>
        <Button
          m={0}
          p={8}
          color={
            colorScheme === "light" ? "black" : "var(--mantine-color-gray-7)"
          }
        >
          <LoginCurve size={20} />
        </Button>
      </Flex>
    </Flex>
  )
}
