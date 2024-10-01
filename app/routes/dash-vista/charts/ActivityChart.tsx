import { BarChart } from "@mantine/charts"
import { Card, Flex, SegmentedControl, Text, rem } from "@mantine/core"

export default function ActivityChart() {
  return (
    <Card
      shadow="xs"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: rem(24),
      }}
      h="100%"
      radius="lg"
    >
      <Flex w="100%" align="center" justify="space-between">
        <Text fw={500} fz={20}>
          Activity
        </Text>
        <SegmentedControl
          styles={{
            label: {
              paddingLeft: rem(10),
              paddingRight: rem(10),
            },
          }}
          withItemsBorders={false}
          radius="xl"
          size="xs"
          data={["Week", "Month"]}
        />
      </Flex>
      <BarChart
        h="100%"
        title="Activity"
        barProps={{
          radius: 10,
        }}
        maxBarWidth={44}
        data={[
          {
            month: "January",
            Smartphones: 1200,
            Laptops: 900,
            Tablets: 200,
          },
          {
            month: "February",
            Smartphones: 1900,
            Laptops: 1200,
            Tablets: 400,
          },
          {
            month: "March",
            Smartphones: 400,
            Laptops: 1000,
            Tablets: 200,
          },
          {
            month: "April",
            Smartphones: 1000,
            Laptops: 200,
            Tablets: 800,
          },
          {
            month: "May",
            Smartphones: 800,
            Laptops: 1400,
            Tablets: 1200,
          },
          {
            month: "June",
            Smartphones: 750,
            Laptops: 600,
            Tablets: 1000,
          },
        ]}
        dataKey="month"
        series={[
          { name: "Smartphones", color: "var(--dashVista-accentColor)" },
        ]}
      />
    </Card>
  )
}
