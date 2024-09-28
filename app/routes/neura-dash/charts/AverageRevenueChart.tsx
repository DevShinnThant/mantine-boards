import { BarChart } from "@mantine/charts"
import { Card, Flex, Text, rem } from "@mantine/core"
import { DatePickerInput } from "@mantine/dates"

export default function AverageRevenue() {
  return (
    <Card
      w="100%"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: rem(20),
      }}
      h="100%"
      shadow="sm"
      px={0}
      radius={6}
    >
      <Flex px="md" justify="space-between" align="center">
        <Text fz={16} fw={600}>
          Average Revenue
        </Text>

        <DatePickerInput
          styles={{
            input: {
              border: `${rem(1)} solid var(--mantine-color-gray-5)`,
            },
            placeholder: {
              color: "var(--mantine-color-gray-6)",
            },
          }}
          size="xs"
          placeholder="Select Date"
        />
      </Flex>

      <BarChart
        px="md"
        h="100%"
        maxBarWidth={16}
        withLegend
        gridColor="rgba(119,136,153,0.3)"
        strokeDasharray={9}
        data={[
          { month: "January", Smartphones: 1200, Laptops: 900, Tablets: 200 },
          {
            month: "February",
            Smartphones: 1900,
            Laptops: 1200,
            Tablets: 400,
          },
          { month: "March", Smartphones: 400, Laptops: 1000, Tablets: 200 },
          { month: "April", Smartphones: 1000, Laptops: 200, Tablets: 800 },
          { month: "May", Smartphones: 800, Laptops: 1400, Tablets: 1200 },
          { month: "June", Smartphones: 750, Laptops: 600, Tablets: 1000 },
          { month: "July", Smartphones: 150, Laptops: 300, Tablets: 700 },
          { month: "Aug", Smartphones: 1250, Laptops: 800, Tablets: 100 },
          { month: "Sep", Smartphones: 950, Laptops: 1200, Tablets: 700 },
          { month: "Oct", Smartphones: 750, Laptops: 400, Tablets: 500 },
          { month: "Nov", Smartphones: 250, Laptops: 800, Tablets: 1000 },
          { month: "Dec", Smartphones: 750, Laptops: 600, Tablets: 1000 },
        ]}
        dataKey="month"
        type="stacked"
        series={[
          { name: "Smartphones", color: "rgb(30,144,255)" },
          { name: "Laptops", color: "rgb(0, 227, 150)" },
          { name: "Tablets", color: "rgb(250, 204, 21)" },
        ]}
      />
    </Card>
  )
}
