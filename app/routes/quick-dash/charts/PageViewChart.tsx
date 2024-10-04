import { AreaChart } from "@mantine/charts"
import { Flex, Select, Text, rem, useMantineColorScheme } from "@mantine/core"
import { ArrowUp } from "iconsax-react"
import CardWrapper from "../components/CardWrapper"

export default function PageViewChart() {
  const { colorScheme } = useMantineColorScheme()

  return (
    <CardWrapper p={0} pb={20} h="100%">
      <Flex py={10} px={20} align="center" justify="space-between">
        <Text fz={12} fw={500} lts={-0.4}>
          Unique Visitor
        </Text>
        <Select
          styles={{
            input: {
              fontSize: rem(10),
              border: "none",
              letterSpacing: rem(-0.4),
              background:
                colorScheme === "light"
                  ? "var(--mantine-color-gray-0)"
                  : "var(--mantine-color-dark-4)",
            },
            option: {
              fontSize: rem(12),
            },
          }}
          radius="md"
          value={"Last 3 months"}
          size="xs"
          data={["Last 3 months"]}
          w={110}
        />
      </Flex>
      <Flex mb={22} px={20} align="center" justify="space-between">
        <Text fw={600} fz={22}>
          827
        </Text>
        <Text fw={600} c="#00A954" fz={22}>
          <ArrowUp size={16} /> 3%
        </Text>
      </Flex>
      <AreaChart
        pr={20}
        h="100%"
        data={[
          {
            date: "July",
            Apples: 40,
          },
          {
            date: "Aug",
            Apples: 20,
          },
          {
            date: "Sep",
            Apples: 10,
          },
          {
            date: "Oct",
            Apples: 15,
          },
          {
            date: "Nov",
            Apples: 5,
          },
          {
            date: "Dec",
            Apples: 10,
          },
        ]}
        gridColor={colorScheme === "light" ? "gray.2" : "dark.4"}
        gridProps={{
          strokeDasharray: 9,
        }}
        gridAxis="xy"
        dataKey="date"
        withDots={false}
        series={[{ name: "Apples", color: "#FE9500" }]}
        curveType="step"
        connectNulls
      />
    </CardWrapper>
  )
}
