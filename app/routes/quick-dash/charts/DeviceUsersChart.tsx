import { BarChart } from "@mantine/charts"
import {
  ActionIcon,
  Badge,
  Button,
  Flex,
  Group,
  Select,
  Text,
  rem,
  useMantineColorScheme,
} from "@mantine/core"
import { IconArrowUpRight } from "@tabler/icons-react"
import CardWrapper from "../components/CardWrapper"

export default function DeviceUsersChart() {
  const { colorScheme } = useMantineColorScheme()

  return (
    <CardWrapper px={0} h="100%">
      <Group px={16} align="center" justify="space-between">
        <Text fz={12} fw={500} lts={-0.4}>
          Device users
        </Text>
        <Flex align="center" gap={10}>
          <Select
            styles={{
              input: {
                fontSize: rem(10),
                fontWeight: 600,
                border: "none",
                letterSpacing: rem(-0.4),
                background:
                  colorScheme === "dark"
                    ? "var(--mantine-color-dark-4)"
                    : "var(--mantine-color-gray-0)",
              },
              option: {
                fontSize: rem(12),
              },
            }}
            radius="md"
            value={"This month"}
            size="xs"
            data={["This month"]}
            w={110}
          />
          <ActionIcon radius="md" h="100%" variant="light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={colorScheme === "light" ? "black" : "white"}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
          </ActionIcon>
        </Flex>
      </Group>

      <Flex my={10} px={16} gap={0} direction="column" align="start">
        <Text
          fw={500}
          fz={11}
          lts={-0.4}
          c={
            colorScheme === "light"
              ? "var(--mantine-color-dark-3)"
              : "var(--mantine-color-gray-7))"
          }
        >
          Total visitors
        </Text>
        <Flex align="center" gap={6}>
          <Text fw={500} fz="xl" lts={-0.4}>
            2147
          </Text>
          <Badge color="green" variant="light" size="xs">
            +8.21%
          </Badge>
        </Flex>
      </Flex>

      <BarChart
        pr={16}
        mb={10}
        mih={200}
        strokeDasharray={10}
        gridColor={colorScheme === "light" ? "gray.2" : "dark.4"}
        gridAxis="xy"
        h="100%"
        styles={{
          axis: {
            color:
              colorScheme === "light" ? "var(--mantine-color-gray-6)" : "white",
            fontWeight: 600,
            letterSpacing: rem(-0.4),
          },
        }}
        maxBarWidth={14}
        withBarValueLabel
        data={[
          {
            device: "Mac OS",
            percentage: 81,
          },
          {
            device: "Windows",
            percentage: 69,
          },
          {
            device: "IOS",
            percentage: 55,
          },
          {
            device: "Andriod",
            percentage: 47,
          },
        ]}
        dataKey="device"
        orientation="vertical"
        yAxisProps={{ width: 80, orientation: "left" }}
        barProps={{
          radius: 10,
          label: {
            position: "right",
            color: "white",
            fontSize: rem(10),
            formatter: (value: unknown) => value + "%",
          },
        }}
        series={[{ name: "percentage", color: "#FFB31E" }]}
      />

      <Group px={16} align="center" justify="space-between">
        <Text
          fw={600}
          lts={-0.2}
          fz={10}
          c={colorScheme === "light" ? "black" : "white"}
        >
          You almost maintain very good statistics
        </Text>
        <Button size="xs" variant="transparent" p={0}>
          <Flex gap={4} align="center">
            <Text
              fw={600}
              lts={-0.2}
              fz={10}
              c={colorScheme === "light" ? "black" : "white"}
            >
              View report
            </Text>
            <IconArrowUpRight
              color={colorScheme === "light" ? "black" : "white"}
              size={14}
            />
          </Flex>
        </Button>
      </Group>
    </CardWrapper>
  )
}
