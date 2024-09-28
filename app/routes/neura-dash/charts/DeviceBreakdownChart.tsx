import { DonutChart } from "@mantine/charts"
import { Card, Text } from "@mantine/core"

export default function DeviceBreakdownChart() {
  return (
    <Card w="100%" h="100%" shadow="sm" p="xl" radius={6}>
      <Card.Section>
        <Text fz={16} fw={600}>
          Device Breakdown
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
          withLabelsLine={false}
          thickness={28}
          withLabels={false}
          chartLabel="Countries"
          data={[
            { name: "USA", value: 400, color: "accent.3" },
            { name: "India", value: 300, color: "orange.6" },
            { name: "Japan", value: 100, color: "white" },
            { name: "Other", value: 200, color: "red.5" },
          ]}
        />
      </Card.Section>
    </Card>
  )
}
