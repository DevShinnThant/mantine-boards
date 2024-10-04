import { Box } from "@mantine/core"
import { DirectInbox, Mouse, User } from "iconsax-react"
import DeviceUsersChart from "./charts/DeviceUsersChart"
import PageNamesChart from "./charts/PageNamesChart"
import PageViewChart from "./charts/PageViewChart"
import UnqiueVisitorChart from "./charts/UniqueVisitorChart"
import Insights from "./components/Insights"
import StatsCard from "./components/StatsCard"
import classes from "./layouts/styles/Dashboard.module.css"

const activeVisitorColor =
  "linear-gradient(90deg, var(--mantine-color-orange-6) 0%, var(--mantine-color-yellow-4) 100%)"

const clickEventColor =
  "linear-gradient(180deg, rgba(8,196,134,1) 0%, rgba(8,196,134,0.7833727240896359) 100%)"

const formSubmissionColor =
  "linear-gradient(180deg, rgba(59,146,248,1) 0%, rgba(59,146,248,0.774969362745098) 100%)"

export default function Dashboard() {
  return (
    <Box w="100%" h="100%" className={classes.root}>
      <Box className={classes.statsCardContainer}>
        <StatsCard
          color={activeVisitorColor}
          icon={User}
          label="Active Visitor"
          value={9}
          link=""
          borderColor="var(--mantine-color-orange-2)"
        />
      </Box>
      <Box className={classes.statsCardContainer}>
        <StatsCard
          color={clickEventColor}
          icon={Mouse}
          label="Click Events"
          value={2231}
          borderColor="var(--mantine-color-green-2)"
          link=""
        />
      </Box>
      <Box className={classes.statsCardContainer}>
        <StatsCard
          color={formSubmissionColor}
          icon={DirectInbox}
          label="Form Submissions"
          value={2}
          borderColor="var(--mantine-color-blue-2)"
          link=""
        />
      </Box>
      <Box className={classes.insightContainer}>
        <Insights />
      </Box>
      <Box className={classes.unqiueVisitorContainer}>
        <UnqiueVisitorChart />
      </Box>
      <Box className={classes.pageViewContainer}>
        <PageViewChart />
      </Box>
      <Box className={classes.pageNameContainer}>
        <PageNamesChart />
      </Box>
      <Box className={classes.deviceUserContainer}>
        <DeviceUsersChart />
      </Box>
    </Box>
  )
}
