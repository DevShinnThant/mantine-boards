import { useState } from "react"
import {
  Anchor,
  Badge,
  Box,
  Breadcrumbs,
  Center,
  Flex,
  Group,
  SegmentedControl,
  Stack,
  Text,
  rem,
} from "@mantine/core"
import { MetaFunction } from "@remix-run/node"
import { IconCode, IconCopy, IconEye } from "@tabler/icons-react"
import { useSyntaxHighlightStore } from "~/store/syntax-highter-store"
import { dashboards } from "~/assets/dashboards"
import { HeaderControl } from "~/components/HeaderControl"
import classes from "./styles/route.module.css"

const dashboard = dashboards.find(
  (dashboard) => dashboard.title === "NeuraDash"
)!

export const meta: MetaFunction = () => {
  return [
    { title: dashboard.title },
    {
      name: dashboard.title,
      content: dashboard.description,
    },
  ]
}

const codeForPreviousDemo = `import { useState } from "react"
import {
  Anchor,
  Badge,
  Box,
  Breadcrumbs,
  Center,
  Code,
  Flex,
  Group,
  SegmentedControl,
  Stack,
  Text,
  rem,
} from "@mantine/core"
import { MetaFunction } from "@remix-run/node"
import { IconCode, IconCopy, IconEye } from "@tabler/icons-react"
import { dashboards } from "~/assets/dashboards"
import { HeaderControl } from "~/components/HeaderControl"
import classes from "./styles/route.module.css"

const dashboard = dashboards.find(
  (dashboard) => dashboard.title === "NeuraDash"
)!

export const meta: MetaFunction = () => {
  return [
    { title: dashboard.title },
    {
      name: dashboard.title,
      content: dashboard.description,
    },
  ]
}

export default function NeuraDash() {
  const [value, setValue] = useState("preview")

  return (
    <Stack className={classes.root} gap={50}>
      <Flex direction="column" align="start" gap={10}>
        <Breadcrumbs separatorMargin="sm">
          <Anchor className={classes.breadcrumbs} size="sm" href="/">
            Dashboards
          </Anchor>
          <Anchor className={classes.breadcrumbs} href="/neura-dash" size="sm">
            NeuraDash
          </Anchor>
        </Breadcrumbs>
        <Text className={classes.title}>{dashboard.title}</Text>
        <Text className={classes.description}>{dashboard.description}</Text>
      </Flex>
      <Flex direction="column" align="start" gap="md">
        <Group w="100%" align="center" justify="space-between">
          <Flex align="center" gap="md">
            <Text className={classes.subTitle}>Nav with branch</Text>
            <Badge className={classes.badge} variant="light">
              New
            </Badge>
          </Flex>

          <Flex align="center" gap={20}>
            <SegmentedControl
              radius="md"
              c="accent.1"
              value={value}
              onChange={setValue}
              data={[
                {
                  value: "preview",
                  label: (
                    <Center style={{ gap: 10 }}>
                      <IconEye style={{ width: rem(16), height: rem(16) }} />
                      <span>Preview</span>
                    </Center>
                  ),
                },
                {
                  value: "code",
                  label: (
                    <Center style={{ gap: 10 }}>
                      <IconCode style={{ width: rem(16), height: rem(16) }} />
                      <span>Code</span>
                    </Center>
                  ),
                },
              ]}
            />

            <HeaderControl tooltip="Copy">
              <IconCopy className={classes.copyBtn} size={20} />
            </HeaderControl>
          </Flex>
        </Group>

        <Box className={classes.snippetContainer}>
          {value === "preview" && <div>Preview</div>}
          {value === "code" && (
            <div>
              <Code block>{codeForPreviousDemo}</Code>
            </div>
          )}
        </Box>
      </Flex>
    </Stack>
  )
}`

export default function NeuraDash() {
  const [value, setValue] = useState("preview")

  const { wrapperComponent: WrapperComponent, themes } =
    useSyntaxHighlightStore()

  if (!WrapperComponent || !themes) return null

  return (
    <Stack className={classes.root} gap={50}>
      <Flex direction="column" align="start" gap={10}>
        <Breadcrumbs separatorMargin="sm">
          <Anchor className={classes.breadcrumbs} size="sm" href="/">
            Dashboards
          </Anchor>
          <Anchor className={classes.breadcrumbs} href="/neura-dash" size="sm">
            NeuraDash
          </Anchor>
        </Breadcrumbs>
        <Text className={classes.title}>{dashboard.title}</Text>
        <Text className={classes.description}>{dashboard.description}</Text>
      </Flex>
      <Flex direction="column" align="start" gap="md">
        <Group w="100%" align="center" justify="space-between">
          <Flex align="center" gap="md">
            <Text className={classes.subTitle}>Nav with branch</Text>
            <Badge className={classes.badge} variant="light">
              New
            </Badge>
          </Flex>

          <Flex align="center" gap={20}>
            <SegmentedControl
              radius="md"
              c="accent.1"
              value={value}
              onChange={setValue}
              data={[
                {
                  value: "preview",
                  label: (
                    <Center style={{ gap: 10 }}>
                      <IconEye style={{ width: rem(16), height: rem(16) }} />
                      <span>Preview</span>
                    </Center>
                  ),
                },
                {
                  value: "code",
                  label: (
                    <Center style={{ gap: 10 }}>
                      <IconCode style={{ width: rem(16), height: rem(16) }} />
                      <span>Code</span>
                    </Center>
                  ),
                },
              ]}
            />

            <HeaderControl tooltip="Copy">
              <IconCopy className={classes.copyBtn} size={20} />
            </HeaderControl>
          </Flex>
        </Group>

        <Box className={classes.snippetContainer}>
          {value === "preview" && <div>Preview</div>}
          {value === "code" && (
            <WrapperComponent style={themes.atomOneDark} language="typescript">
              {codeForPreviousDemo}
            </WrapperComponent>
          )}
        </Box>
      </Flex>
    </Stack>
  )
}
