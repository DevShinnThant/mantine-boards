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
import { IconCode, IconEye } from "@tabler/icons-react"
import { FileContext } from "~/utils/getDashboardCode"
import { Dashboard } from "~/assets/dashboards"
import CodeSnippetTabs from "~/components/CodeSnippetTabs"
import { GithubControl } from "~/components/GithubControl"
import classes from "./styles/DetailLayout.module.css"

interface Props {
  children: React.ReactNode
  dashboard: Dashboard

  codes: FileContext[]
}

export default function DetailLayout({
  children,

  dashboard,
  codes,
}: Props) {
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
            <Text className={classes.subTitle}>{dashboard.subTitle}</Text>
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

            <GithubControl link={dashboard.git_repo} />
          </Flex>
        </Group>

        <Box className={classes.snippetContainer}>
          {value === "preview" && children}
          {value === "code" && (
            <CodeSnippetTabs files={codes} initialFile={codes[0]} />
          )}
        </Box>
      </Flex>
    </Stack>
  )
}
