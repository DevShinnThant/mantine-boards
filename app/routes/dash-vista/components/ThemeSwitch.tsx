import { Switch, rem, useMantineColorScheme } from "@mantine/core"
import { Moon, Sun1 } from "iconsax-react"

export default function ThemeSwitch() {
  const sunIcon = <Sun1 style={{ width: rem(16), height: rem(16) }} />

  const moonIcon = <Moon style={{ width: rem(16), height: rem(16) }} />

  const { setColorScheme, colorScheme } = useMantineColorScheme()

  return (
    <Switch
      size="xl"
      checked={colorScheme === "dark"}
      styles={{
        thumb: {
          backgroundColor: "#6637F5",
          border: 0,
        },
      }}
      onChange={() =>
        setColorScheme(colorScheme === "light" ? "dark" : "light")
      }
      thumbIcon={
        colorScheme === "dark" ? (
          <Moon color="white" style={{ width: rem(16), height: rem(16) }} />
        ) : (
          <Sun1 style={{ width: rem(16), height: rem(16) }} color="white" />
        )
      }
      color="dark.6"
      onLabel={sunIcon}
      offLabel={moonIcon}
    />
  )
}
