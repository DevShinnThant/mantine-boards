import { DonutChart } from "@mantine/charts"
import { Card, Text } from "@mantine/core"

export default function TopBrowser() {
  return (
    <Card w="100%" h="100%" shadow="sm" px={0} radius={6}>
      <Text px="md" fz={16} fw={600}>
        Top Browser
      </Text>

      <Card.Section px={0} h="100%" mt={{ base: 0, md: 40, lg: 40 }}>
        <DonutChart
          size={200}
          thickness={30}
          withLabels
          data={[
            { name: "USA", value: 400, color: "indigo.6" },
            { name: "India", value: 300, color: "yellow.6" },
            { name: "Japan", value: 100, color: "teal.6" },
            { name: "Other", value: 200, color: "gray.6" },
          ]}
          tooltipDataSource="segment"
          chartLabel="Users by country"
          mx="auto"
        />
      </Card.Section>
    </Card>
  )
}
