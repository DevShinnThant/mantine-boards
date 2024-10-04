import { useState } from "react"
import { BarChart } from "@mantine/charts"
import {
  ActionIcon,
  Box,
  Flex,
  FloatingIndicator,
  Group,
  Select,
  Tabs,
  Text,
  rem,
  useMantineColorScheme,
} from "@mantine/core"
import CardWrapper from "../components/CardWrapper"
import classes from "./styles/PageNamesChart.module.css"

export default function PageNamesChart() {
  const { colorScheme } = useMantineColorScheme()

  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null)
  const [value, setValue] = useState<string | null>("1")
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({})
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node
    setControlsRefs(controlsRefs)
  }

  return (
    <CardWrapper p={0} h="100%">
      <Tabs h="100%" variant="none" value={value} onChange={setValue}>
        <Flex align="center" p={16} justify="space-between">
          <Tabs.List ref={setRootRef} className={classes.list}>
            <Tabs.Tab
              value="1"
              ref={setControlRef("1")}
              className={classes.tab}
            >
              Pages
            </Tabs.Tab>
            <Tabs.Tab
              value="2"
              ref={setControlRef("2")}
              className={classes.tab}
            >
              Entry Pages
            </Tabs.Tab>
            <Tabs.Tab
              value="3"
              ref={setControlRef("3")}
              className={classes.tab}
            >
              Exit Pages
            </Tabs.Tab>

            <FloatingIndicator
              target={value ? controlsRefs[value] : null}
              parent={rootRef}
              className={classes.indicator}
            />
          </Tabs.List>

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
              value={"Last 3 months"}
              size="xs"
              data={["Last 3 months"]}
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
        </Flex>

        <Box className={classes.chartWrapper} mx={16}>
          <Tabs.Panel
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
            h="100%"
            value="1"
          >
            <Group w="100%" p={16} align="center" justify="space-between">
              <Text className={classes.chartLabel}>Pages Name</Text>
              <Text className={classes.chartLabel}>Visitors</Text>
            </Group>

            <BarChart
              gridAxis="none"
              withXAxis={false}
              h="80%"
              styles={{
                axis: {
                  color: colorScheme === "light" ? "black" : "white",
                  fontWeight: 600,
                  letterSpacing: rem(-0.4),
                },
              }}
              withRightYAxis
              rightYAxisProps={{
                dataKey: "Visitors",
              }}
              maxBarWidth={14}
              data={[
                {
                  page: "/Home",
                  Visitors: 1200,
                },
                {
                  page: "/Pricing",
                  Visitors: 1900,
                },
                {
                  page: "/Contact",
                  Visitors: 400,
                },
                {
                  page: "/News",
                  Visitors: 1000,
                },
                {
                  page: "/About",
                  Visitors: 800,
                },
              ]}
              dataKey="page"
              orientation="vertical"
              yAxisProps={{ width: 80 }}
              barProps={{ radius: 10 }}
              series={[{ name: "Visitors", color: "violet.5" }]}
            />
          </Tabs.Panel>
          <Tabs.Panel value="2">Second tab content</Tabs.Panel>
          <Tabs.Panel value="3">Third tab content</Tabs.Panel>
        </Box>
      </Tabs>
    </CardWrapper>
  )
}
