import { AreaChart } from "@mantine/charts"
import {
  Card,
  Flex,
  Group,
  SimpleGrid,
  Text,
  rem,
  useMantineColorScheme,
} from "@mantine/core"
import { DatePickerInput } from "@mantine/dates"
import SnapshotFilter from "../components/SnapShotFilter"

export default function ReportSnapshotChart() {
  const { colorScheme } = useMantineColorScheme()
  return (
    <Card
      w="100%"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        gap: rem(30),
      }}
      h="100%"
      shadow="sm"
      px={0}
      py="md"
      radius={6}
    >
      <Group pt="md" px="md" w="100%" justify="space-between">
        <Flex direction="column" gap={4} align="start">
          <Text size="lg" fw={600}>
            Reports Snapshot
          </Text>
          <Text fz={12}>Demographic properties of your customer</Text>
        </Flex>

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
      </Group>

      <SimpleGrid px="md" w="100%" cols={{ base: 2, md: 4, lg: 4 }}>
        <SnapshotFilter
          title="All User"
          value={10234}
          bg={"var(--mantine-color-gray-3)"}
          circleColor={"var(--mantine-color-dark-3)"}
          active
        />
        <SnapshotFilter
          title="Event Count"
          value={536}
          bg={"var(--mantine-color-orange-6)"}
          circleColor="var(--mantine-color-orange-2)"
          active={false}
        />
        <SnapshotFilter
          title="Conversations"
          value={21}
          bg={"var(--mantine-color-green-6)"}
          circleColor="var(--mantine-color-green-2)"
          active={false}
        />
        <SnapshotFilter
          title="New Users"
          value={3321}
          bg={"var(--mantine-color-blue-6)"}
          circleColor="var(--mantine-color-blue-2)"
          active={false}
        />
      </SimpleGrid>

      <AreaChart
        pr="md"
        withDots={false}
        w="100%"
        h="80%"
        textColor={colorScheme === "dark" ? "white" : "black"}
        fillOpacity={0.6}
        curveType="bump"
        gridColor="rgba(119,136,153,0.3)"
        strokeDasharray={9}
        data={data}
        strokeWidth={3}
        dataKey="date"
        yAxisProps={{ domain: [0, 100] }}
        series={[
          {
            name: "Apples",
            color:
              colorScheme === "light" ? "rgb(60, 60, 60)" : "rgb(255,255,255)",
          },
        ]}
      />
    </Card>
  )
}

const data = [
  {
    date: "Jan",
    Apples: 31,
  },
  {
    date: "Feb",
    Apples: 200,
  },
  {
    date: "March",
    Apples: 28,
  },
  {
    date: "April",
    Apples: 100,
  },
  {
    date: "May",
    Apples: 42,
  },
  {
    date: "June",
    Apples: 109,
  },
  {
    date: "July",
    Apples: 100,
  },
  {
    date: "Aug",
    Apples: 45,
  },
  {
    date: "Sep",
    Apples: 89,
  },

  {
    date: "Oct",
    Apples: 100,
  },
  {
    date: "Nov",
    Apples: 23,
  },
  {
    date: "Dec",
    Apples: 67,
  },
]
