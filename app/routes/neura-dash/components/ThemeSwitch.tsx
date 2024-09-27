import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core"
import cx from "clsx"
import { Moon, Sun1 } from "iconsax-react"
import classes from "./styles/ThemeSwitch.module.css"

export default function ThemeSwitch() {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  })

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="default"
      size="md"
      radius="md"
      aria-label="Toggle color scheme"
    >
      <Sun1 className={cx(classes.icon, classes.dark)} />
      <Moon className={cx(classes.icon, classes.light)} />
    </ActionIcon>
  )
}
