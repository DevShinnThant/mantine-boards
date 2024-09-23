import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import cx from "clsx";
import classes from "./styles/ThemeSwitch.module.css";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function ThemeSwitch() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="default"
      size="lg"
      radius="md"
      aria-label="Toggle color scheme"
    >
      <IconSun className={cx(classes.icon, classes.dark)} />
      <IconMoon className={cx(classes.icon, classes.light)} />
    </ActionIcon>
  );
}
