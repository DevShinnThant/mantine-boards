import { BarChart } from "@mantine/charts"
import {
  Card,
  Flex,
  Group,
  Table,
  Text,
  useMantineColorScheme,
} from "@mantine/core"
import { IconTrendingUp } from "@tabler/icons-react"

export default function UserChart() {
  const { colorScheme } = useMantineColorScheme()
  return (
    <Card w="100%" h="100%" shadow="sm" p="xl" radius={6}>
      <Card.Section>
        <Group justify="space-between">
          <Flex direction="column" align="start" gap={4}>
            <Text size="lg" fw={600}>
              Users
            </Text>
            <Text size="xs">In Last 30 Minutes</Text>
          </Flex>

          <Flex align="center" gap={6}>
            <Text fz={35} fw={600}>
              63
            </Text>
            <IconTrendingUp color="var(--mantine-color-green-7)" />
          </Flex>
        </Group>
      </Card.Section>

      <Card.Section my={14} h="100%">
        <BarChart
          withXAxis={false}
          withYAxis={false}
          maxBarWidth={24}
          gridColor="rgba(119,136,153,0.3)"
          strokeDasharray={9}
          h="100%"
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
          ]}
          dataKey="month"
          series={[
            {
              name: "Smartphones",
              color:
                colorScheme === "light"
                  ? "rgb(60, 60, 60)"
                  : "rgb(255,255,255)",
            },
          ]}
        />
      </Card.Section>

      <Card.Section>
        <Table withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Top Countries</Table.Th>
              <Table.Th ta="end">Users</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>Bangladesh</Table.Td>
              <Table.Td ta="end">05</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>India</Table.Td>
              <Table.Td ta="end">06</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Pakistan</Table.Td>
              <Table.Td ta="end">06</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Australia</Table.Td>
              <Table.Td ta="end">10</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Card.Section>
    </Card>
  )
}
