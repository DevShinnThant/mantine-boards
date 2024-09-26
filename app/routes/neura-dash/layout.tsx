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
import { Outlet, useLoaderData } from "@remix-run/react"
import { IconCode, IconCopy, IconEye } from "@tabler/icons-react"
import { getDashboardCode } from "~/utils/getComponentCode"
import { dashboards } from "~/assets/dashboards"
import CodeSnippetTabs from "~/components/CodeSnippetTabs"
import { HeaderControl } from "~/components/HeaderControl"
import App from "./layouts/App"
import classes from "./styles/layout.module.css"

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

export async function loader() {
  const codes = getDashboardCode("neura-dash")
  return codes
}

export default function NeuraDash() {
  const codes = useLoaderData<typeof loader>()

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
          {value === "preview" && (
            <App>
              <Outlet />
            </App>
          )}
          {value === "code" && (
            <CodeSnippetTabs files={codes} initialFile={codes[0]} />
          )}
        </Box>
      </Flex>
    </Stack>
  )
}
