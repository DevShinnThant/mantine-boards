import {
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Flex,
  ScrollArea,
  Text,
  rem,
} from "@mantine/core"
import { IconAlarm } from "@tabler/icons-react"
import classes from "./styles/TashBoard.module.css"

export default function TaskBoard() {
  return (
    <Card
      shadow="xs"
      p="md"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: rem(24),
      }}
      h="100%"
      radius="lg"
    >
      <Flex w="100%" align="center" justify="space-between">
        <Text fw={500} fz={20}>
          Task Board
        </Text>
        <Button radius="xl" size="sm" color="black">
          All task
        </Button>
      </Flex>

      <ScrollArea w="100%" h="100%" scrollbarSize={4}>
        <Flex w="100%" h="100%" direction="column" align="start" gap={24}>
          {tasks.map((task) => (
            <Box key={task.id} className={classes.taskCard}>
              <Flex align="center">
                <Flex direction="column" align="start" gap={8}>
                  <Text fz={16} fw={500}>
                    {task.title}
                  </Text>
                  <Text lh={1.2} w="80%" fz={12} c="dimmed">
                    {task.description}
                  </Text>
                </Flex>
                <Box className={classes.badge} bg={task.badgeColor}>
                  {task.badge}
                </Box>
              </Flex>
              <Divider w="100%" />

              <Badge
                className={classes.log}
                h={30}
                leftSection={<IconAlarm size={18} strokeWidth={1.2} />}
              >
                <Text tt="capitalize" fz={12} fw={400}>
                  Log: {task.log}
                </Text>
              </Badge>
            </Box>
          ))}
        </Flex>
      </ScrollArea>
    </Card>
  )
}

const tasks = [
  {
    id: 1,
    title: "EduPath",
    description: "Platform for online learning and professional development",
    badge: "Design",
    badgeColor: "var(--dashVista-green)",
    log: "13h20m",
  },
  {
    id: 2,
    title: "GreenMarket",
    description: "Eco-friendly online grocery and household goods store",
    badge: "Concept",
    badgeColor: "var(--dashVista-accentColor)",
    log: "8h20m",
  },
  {
    id: 3,
    title: "TravelTales",
    description:
      "A social network for travllers to share stories and plan trips",
    badge: "Re-design",
    badgeColor: "var(--dashVista-orange)",
    log: "80h40m",
  },
]
