import {
  Box,
  Button,
  Group,
  Image,
  SimpleGrid,
  Text,
  ThemeIcon,
  rem,
} from "@mantine/core"
import { IconFlame, IconMoon, IconShare } from "@tabler/icons-react"
import { GithubIcon } from "~/assets/icons"
import bannerImage from "~/assets/illustrations/hero-mockup.svg"
import classes from "./styles/HeaderHero.module.css"

const GIT_REPO = import.meta.env.VITE_GITHUB_REPO
const MANTINE_DOC = import.meta.env.VITE_MANTINE_DOC

const features = [
  {
    icon: IconFlame,
    title: "Flexible",
    description:
      "Customize colors, spacing, shadows, fonts and many other settings with global theme object",
  },
  {
    icon: IconMoon,
    title: "Light and dark theme",
    description:
      "Most components support both dark and light color schemes by default, no additional modifications needed.",
  },
]

export default function HeaderHero() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon color="accent" size={44} radius="md" variant="light">
        <feature.icon
          style={{ width: rem(26), height: rem(26) }}
          stroke={1.5}
        />
      </ThemeIcon>
      <Text fz="md" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text w="85%" c="dimmed" fz="xs">
        {feature.description}
      </Text>
    </div>
  ))

  return (
    <div className={classes.wrapper}>
      <Box className={classes.inner}>
        <Text tt="uppercase" fw={600}>
          Mantine
        </Text>
        <Text className={classes.title} c="accent.3">
          Seamless Dashboard UI
        </Text>
        <Text className={classes.sub_title}>designed for developers</Text>
        <Text className={classes.description}>
          Build highly customizable and responsive dashboards with ease using
          our library – over 100 components specifically tailored for creating
          fast, accessible, and dynamic user interfaces.
        </Text>
        <Group className={classes.controls}>
          <Button
            component="a"
            aria-label="go to github mantine docs"
            href={MANTINE_DOC}
            target="_blank"
            size="sm"
            variant="default"
            className={classes.control}
            rightSection={<IconShare size={18} />}
          >
            Get started with Mantine
          </Button>
          <Button
            component="a"
            href={GIT_REPO}
            size="sm"
            aria-label="go to github repository button"
            target="_blank"
            variant="default"
            className={classes.control}
            pos="relative"
            style={{
              zIndex: 1,
            }}
            leftSection={<GithubIcon size={20} />}
          >
            GitHub
          </Button>
          <Button
            component="a"
            href="#dashboards-section"
            size="sm"
            className={classes.control}
            pos="relative"
            style={{
              zIndex: 1,
            }}
            color="accent.4"
          >
            Browse Dashboards
          </Button>
        </Group>

        <SimpleGrid mt={50} cols={{ base: 1, md: 2 }} spacing={30}>
          {items}
        </SimpleGrid>
      </Box>

      <Image src={bannerImage} className={classes.image} />
    </div>
  )
}
