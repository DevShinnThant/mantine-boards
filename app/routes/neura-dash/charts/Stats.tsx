import { Card, Grid, useComputedColorScheme } from "@mantine/core"
import {
  IconAlertCircleFilled,
  IconGardenCart,
  IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react"
import { DocumentText1 } from "iconsax-react"
import StatsCard from "./StatsCard"

const Stats = () => {
  const colorSchema = useComputedColorScheme("dark")
  return (
    <Card w="100%" radius={6} shadow="sm">
      <Grid>
        <Grid.Col span={{ base: 6, md: 6, lg: 3 }}>
          <StatsCard
            title="Top Sale"
            value={561212}
            bgColor={"var(--mantine-color-violet-9)"}
            circleColor={
              colorSchema === "dark"
                ? "var(--mantine-color-violet-6)"
                : "var(--mantine-color-violet-3)"
            }
            iconColor={
              colorSchema === "dark"
                ? "var(--mantine-color-violet-4)"
                : "var(--mantine-color-violet-5)"
            }
            icon={<IconGardenCart size={14} color="#fff" />}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 6, lg: 3 }}>
          <StatsCard
            title="Today Orders"
            value={536233}
            bgColor={"var(--mantine-color-orange-6)"}
            circleColor={"var(--mantine-color-orange-3)"}
            iconColor={
              colorSchema === "dark"
                ? "var(--mantine-color-orange-4)"
                : "var(--mantine-color-orange-5)"
            }
            icon={<DocumentText1 size={14} color="#fff" />}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 6, lg: 3 }}>
          <StatsCard
            title="Completed Orders"
            value={2341}
            bgColor={"var(--mantine-color-green-6)"}
            circleColor={
              colorSchema === "dark"
                ? "var(--mantine-color-green-3)"
                : "var(--mantine-color-teal-3)"
            }
            iconColor={
              colorSchema === "dark"
                ? "var(--mantine-color-green-3)"
                : "var(--mantine-color-teal-6)"
            }
            icon={<IconRosetteDiscountCheckFilled size={14} color="#fff" />}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 6, md: 6, lg: 3 }}>
          <StatsCard
            title="Pending Order"
            value={33234}
            bgColor={"var(--mantine-color-red-7)"}
            circleColor={
              colorSchema === "dark"
                ? "var(--mantine-color-red-3)"
                : "var(--mantine-color-red-2)"
            }
            iconColor={
              colorSchema === "dark"
                ? "var(--mantine-color-red-4)"
                : "var(--mantine-color-red-6)"
            }
            icon={<IconAlertCircleFilled size={14} color="#fff" />}
          />
        </Grid.Col>
      </Grid>
    </Card>
  )
}

export default Stats
