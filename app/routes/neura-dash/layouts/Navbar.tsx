import { useEffect, useState } from "react"
import { Avatar, Box, Flex, Image, SimpleGrid } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { Setting2 } from "iconsax-react"
import Logo from "~/assets/dev-logo.png"
import { sideLinks } from "../assets/navLinks"
import useCurrentNav from "../hooks/useCurrentNav"
import { useStore } from "../store/client/useStore"
import SubNavBar from "./SubNavBar"
import classes from "./styles/Navbar.module.css"

export default function Navbar() {
  const smallScreen = useMediaQuery("(max-width: 48em)")
  const { isNavbarCollapse, openNavbar, closeNavbar } = useStore()

  const [currentAppTitle, setCurrentAppTitle] = useState<string>("")

  const currentNav = useCurrentNav()

  useEffect(() => {
    if (currentNav) {
      setCurrentAppTitle(currentNav.title)
    }
  }, [currentNav])

  useEffect(() => {
    smallScreen && closeNavbar()
  }, [smallScreen, closeNavbar])

  return (
    <Box className={classes.root}>
      <Flex
        direction="column"
        align="center"
        justify="space-between"
        p="sm"
        h="100%"
        w={81}
        className={classes.mini_container}
      >
        <Flex w="100%" direction="column" align="center" gap={10}>
          <Image w={40} src={Logo} />
          <SimpleGrid
            mt={30}
            pb={10}
            className={classes.mini_link_item_container}
            cols={1}
            w="100%"
          >
            {sideLinks.map(({ icon: Icon, href, title }) => (
              <Box
                key={href}
                onClick={() => {
                  setCurrentAppTitle(title)
                  if (smallScreen && !isNavbarCollapse) {
                    openNavbar()
                  }
                }}
                data-active={href === currentNav?.href}
                className={classes.mini_link}
              >
                <Icon
                  color={href === currentNav?.href ? "black" : "gray"}
                  variant="Bulk"
                />
              </Box>
            ))}
          </SimpleGrid>
        </Flex>

        <Flex h={100} gap={16} w="100%" direction="column" align="center">
          <Box>
            <Setting2 color="gray" size={30} variant="Bulk" />
          </Box>

          <Avatar src={"https://ui.shadcn.com/avatars/02.png"} radius="xl" />
        </Flex>
      </Flex>

      <SubNavBar appTitle={currentAppTitle} isNavbarOpen={isNavbarCollapse} />
    </Box>
  )
}
