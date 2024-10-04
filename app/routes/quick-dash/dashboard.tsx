import { Box, rem } from "@mantine/core"
import { DirectInbox, Mouse, User } from "iconsax-react"
import PageNamesChart from "./charts/PageNamesChart"
import PageViewChart from "./charts/PageViewChart"
import UnqiueVisitorChart from "./charts/UniqueVisitorChart"
import StatsCard from "./components/StatsCard"

export default function Dashboard() {
  return (
    <Box
      w="100%"
      h="100%"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(9,minmax(0,1fr))",
        gridTemplateRows: "repeat(7,minmax(0,1fr))",
        gap: rem(20),
      }}
    >
      <Box
        style={{
          gridColumn: "span 2 / span 9",
        }}
      >
        <StatsCard
          color="linear-gradient(90deg, var(--mantine-color-orange-6) 0%, var(--mantine-color-yellow-4) 100%)"
          icon={User}
          label="Active Visitor"
          value={9}
          link=""
          borderColor="var(--mantine-color-orange-2)"
        />
      </Box>
      <Box
        style={{
          gridColumn: "span 2 / span 9",
        }}
      >
        <StatsCard
          color="linear-gradient(180deg, rgba(8,196,134,1) 0%, rgba(8,196,134,0.7833727240896359) 100%)"
          icon={Mouse}
          label="Click Events"
          value={2231}
          borderColor="var(--mantine-color-green-2)"
          link=""
        />
      </Box>
      <Box
        style={{
          gridColumn: "span 2 / span 9",
        }}
      >
        <StatsCard
          color="linear-gradient(180deg, rgba(59,146,248,1) 0%, rgba(59,146,248,0.774969362745098) 100%)"
          icon={DirectInbox}
          label="Form Submissions"
          value={2}
          borderColor="var(--mantine-color-blue-2)"
          link=""
        />
      </Box>
      <Box
        style={{
          gridColumn: "span 3 / span 9",
          gridRow: "span 4 / span 7",
        }}
      >
        Right
      </Box>

      <Box
        style={{
          gridColumn: "span 3 / span 12",
          gridRow: "span 3 / span 7",
        }}
      >
        <UnqiueVisitorChart />
      </Box>
      <Box
        style={{
          gridColumn: "span 3 / span 12",
          gridRow: "span 3 / span 7",
        }}
      >
        <PageViewChart />
      </Box>
      <Box
        style={{
          gridColumn: "span 6 / span 12",
          gridRow: "span 3 / span 7",
        }}
      >
        <PageNamesChart />
      </Box>
      <Box
        style={{
          gridColumn: "span 3 / span 12",
          gridRow: "span 3 / span 7",
        }}
      >
        Bottom
      </Box>
    </Box>
  )
}
