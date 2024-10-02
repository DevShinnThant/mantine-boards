import { BarChart } from "@mantine/charts"
import { Card, Text, rem } from "@mantine/core"

export default function ScheduleChart() {
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
      <Text fw={500} fz={20}>
        My Screen Time
      </Text>

      <BarChart
        h="100%"
        orientation="vertical"
        barProps={{
          radius: 4,
        }}
        maxBarWidth={20}
        data={[
          {
            item: "Mon",
            time: 2,
            color: "var(--mantine-color-violet-8)",
          },
          {
            item: "Tue",
            time: 5,
            color: "var(--mantine-color-blue-2)",
          },
          { item: "Wed", time: 1, color: "var(--dashVista-green)" },
          {
            item: "Thu",
            time: 6,
            color: "var(--dashVista-orange)",
          },
          { item: "Fri", time: 4, color: "var(--mantine-color-red-4)" },
        ]}
        dataKey="item"
        type="default"
        series={[{ name: "time", color: "var(--dashVista-accentColor)" }]}
        withLegend
      />
    </Card>
  )
}
