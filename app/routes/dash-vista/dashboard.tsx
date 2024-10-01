import { Box, rem } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import ActivityChart from "./charts/ActivityChart"
import ScheduleChart from "./charts/ScheduleChart"
import TaskBoard from "./charts/TaskBoard"

export default function Dashboard() {
  const smallScreen = useMediaQuery("(max-width: 48em)")

  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
        gridTemplateRows: "repeat(4, minmax(0,1fr))",
        gap: rem(20),
      }}
    >
      <Box
        style={{
          gridColumn: smallScreen ? "span 12 / span 12" : "span 7 / span 12",
          gridRow: smallScreen ? "span 1 / span 4" : "span 2 / span 4",
        }}
      >
        <ActivityChart />
      </Box>
      <Box
        h={{
          base: 400,
          md: 700,
        }}
        style={{
          gridColumn: smallScreen ? "span 12 / span 12" : "span 5 / span 12",
          gridRow: smallScreen ? "span 1 / span 4" : "span 4 / span 4",
        }}
      >
        <TaskBoard />
      </Box>
      <Box
        style={{
          gridColumn: smallScreen ? "span 12 / span 12" : "span 7 / span 12",
          gridRow: smallScreen ? "span 1 / span 4" : "span 2 / span 4",
        }}
      >
        <ScheduleChart />
      </Box>
    </Box>
  )
}
