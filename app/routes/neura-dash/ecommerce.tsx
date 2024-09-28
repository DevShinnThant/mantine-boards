import { useState } from "react"
import { Flex, Grid, Stack, Text } from "@mantine/core"
import { DatePickerInput } from "@mantine/dates"
import { IconCalendar } from "@tabler/icons-react"
import AverageRevenue from "./charts/AverageRevenueChart"
import Stats from "./charts/Stats"
import TopBrowser from "./charts/TopBrowserChart"
import dateStyleClasses from "./styles/date.module.css"

export default function Ecommerce() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null])
  return (
    <Flex w="100%" direction="column" align="start" gap={30}>
      <Flex w="100%" align="center" justify="space-between">
        <Text fz={{ base: 18, md: 22, lg: 22 }} fw={600}>
          Ecommerce Dashboard
        </Text>
        <DatePickerInput
          size="xs"
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
        <Stats />

        <Grid columns={10} w="100%">
          <Grid.Col h={420} span={{ base: 10, md: 5, lg: 7 }}>
            <AverageRevenue />
          </Grid.Col>

          <Grid.Col
            h={{ base: "auto", md: 420, lg: 420 }}
            span={{ base: 10, md: 5, lg: 3 }}
          >
            <TopBrowser />
          </Grid.Col>
        </Grid>
      </Stack>
    </Flex>
  )
}
