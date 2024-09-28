import { DonutChart } from "@mantine/charts"
import { Card, Text } from "@mantine/core"

export default function ReturningUserChart() {
  return (
    <Card w="100%" h="100%" shadow="sm" p="xl" radius={6}>
      <Card.Section>
        <Text fz={16} fw={600}>
          New vs Returning Visitors
        </Text>
      </Card.Section>

      <Card.Section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        h="100%"
        mt={30}
      >
        <DonutChart
          withLabelsLine
          thickness={28}
          withLabels
          data={[
            { name: "USA", value: 400, color: "indigo.6" },
            { name: "India", value: 300, color: "yellow.6" },
            { name: "Japan", value: 100, color: "teal.6" },
            { name: "Other", value: 200, color: "gray.6" },
          ]}
        />
      </Card.Section>
    </Card>
  )
}
