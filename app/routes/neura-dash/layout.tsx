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
import { IconCode, IconEye } from "@tabler/icons-react"
import { getDashboardCode, getDashboardRepoUrl } from "~/utils"
import { dashboards } from "~/assets/dashboards"
import CodeSnippetTabs from "~/components/CodeSnippetTabs"
import { GithubControl } from "~/layouts/header/GithubControl"
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

  const dashboardRepoUrl = getDashboardRepoUrl("neura-dash")

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
              size="sm"
              className={classes.switchControl}
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

            <GithubControl link={dashboardRepoUrl} />
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
