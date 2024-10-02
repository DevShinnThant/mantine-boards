import { ActionIcon, Grid, Group, Stack } from "@mantine/core"
import { Add, Additem, FolderAdd, UserAdd } from "iconsax-react"
import ActionCard from "./components/ActionCard"
import TabSection from "./components/TabSection"

export default function Dashboard() {
  return (
    <Stack gap={40}>
      <Group w="100%" align="start" justify="space-between">
        <Grid flex={1} columns={12} align="center" gutter={14}>
          <Grid.Col maw={200} span={{ base: 6, md: 3 }}>
            <ActionCard content="New document" icon={Add} />
          </Grid.Col>
          <Grid.Col maw={200} span={{ base: 6, md: 3 }}>
            <ActionCard content="New project" icon={FolderAdd} />
          </Grid.Col>
          <Grid.Col maw={200} span={{ base: 6, md: 3 }}>
            <ActionCard content="New team" icon={UserAdd} />
          </Grid.Col>
          <Grid.Col maw={200} span={{ base: 6, md: 3 }}>
            <ActionCard content="New organization" icon={Additem} />
          </Grid.Col>
        </Grid>

        <ActionIcon variant="subtle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          </svg>
        </ActionIcon>
      </Group>

      <TabSection />
    </Stack>
  )
}
