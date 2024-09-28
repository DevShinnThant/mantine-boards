import { useState } from "react"
import { Flex, Grid, Stack, Text } from "@mantine/core"
import { DatePickerInput } from "@mantine/dates"
import { IconCalendar } from "@tabler/icons-react"
import ReportSnapshot from "./charts/ReportSnapshotChart"
import UserChart from "./charts/UserChart"
import dateStyleClasses from "./styles/date.module.css"

export default function Dashboard() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null])
  return (
    <Flex w="100%" direction="column" align="start" gap={30}>
      <Flex w="100%" align="center" justify="space-between">
        <Text fz={22} fw={600}>
          Analytics dashboard
        </Text>
        <DatePickerInput
          type="range"
          leftSection={<IconCalendar size={20} />}
          placeholder="Pick a date"
          value={value}
          classNames={{
            input: dateStyleClasses.date_input,
            placeholder: dateStyleClasses.date_input_placeholder,
          }}
          onChange={setValue}
        />
      </Flex>

      <Stack w="100%" align="stretch" justify="center">
        <Grid columns={10} w="100%">
          <Grid.Col h={500} span={{ base: 10, md: 7, lg: 7 }}>
            <ReportSnapshot />
          </Grid.Col>
          <Grid.Col h={500} span={{ base: 10, md: 3, lg: 3 }}>
            <UserChart />
          </Grid.Col>

          <Grid.Col h={350} span={{ base: 10, md: 5, lg: 4 }}>
            Stats
          </Grid.Col>
          <Grid.Col h={350} span={{ base: 10, md: 5, lg: 3 }}>
            Returning User
          </Grid.Col>

          <Grid.Col h={350} span={{ base: 10, md: 5, lg: 3 }}>
            Device Breakdown
          </Grid.Col>
        </Grid>
      </Stack>
    </Flex>
  )
}
