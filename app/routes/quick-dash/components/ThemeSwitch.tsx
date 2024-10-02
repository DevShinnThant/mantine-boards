import { Flex, Switch, useMantineColorScheme } from "@mantine/core"
import { Moon, Sun1 } from "iconsax-react"
import { useStore } from "../store/client/useStore"

export default function ThemeSwitch() {
  const { isNavbarCollapse } = useStore()
  const { setColorScheme, colorScheme } = useMantineColorScheme()
  return (
    <Flex
      m="auto"
      gap={10}
      direction={isNavbarCollapse ? "column" : "row"}
      align="center"
    >
      <Sun1
        color={
          colorScheme === "light"
            ? "var(--mantine-color-gray-8)"
            : "var(--mantine-color-gray-3)"
        }
        size={18}
      />
      <Switch
        onChange={() =>
          setColorScheme(colorScheme === "dark" ? "light" : "dark")
        }
        styles={{
          track: {
            cursor: "pointer",
            border: 0,
            background:
              "linear-gradient(90deg, var(--mantine-color-orange-6) 0%, var(--mantine-color-yellow-4) 100%)",
          },
        }}
        size={isNavbarCollapse ? "xs" : "lg"}
      />
      <Moon
        color={
          colorScheme === "light"
            ? "var(--mantine-color-gray-8)"
            : "var(--mantine-color-gray-3)"
        }
        size={18}
      />
    </Flex>
  )
}
