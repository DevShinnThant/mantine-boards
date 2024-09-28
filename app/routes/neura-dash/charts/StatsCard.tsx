import { FC, ReactNode } from "react"
import { Card, Flex, Group, Text, ThemeIcon } from "@mantine/core"
import { IconTrendingUp } from "@tabler/icons-react"

interface StaticCardProps {
  title: string
  value: number
  bgColor: string
  circleColor: string
  icon: ReactNode
  iconColor: string
}

const StatsCard: FC<StaticCardProps> = ({
  title,
  value,
  bgColor,
  circleColor,
  icon,
  iconColor,
}) => {
  return (
    <Card shadow="xs" padding="lg" radius="sm" bg={bgColor}>
      <Group justify="space-between" pos="relative">
        <div
          style={{
            display: "flex",
            width: 31,
            justifyContent: "center",
            alignItems: "center",
            height: 31,
            border: "dashed 1px",
            borderColor: iconColor,
            borderRadius: "50%",
          }}
        >
          <ThemeIcon color={iconColor} radius="xl" size="sm">
            {icon}
          </ThemeIcon>
        </div>
        <div
          style={{
            position: "absolute",
            top: -55,
            right: -55,
            display: "inline-block",
            background: circleColor,
            width: 100,
            height: 100,
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: -70,
            right: -70,
            display: "inline-block",
            background: circleColor,
            opacity: "40%",
            width: 140,
            height: 140,
            borderRadius: "50%",
          }}
        ></div>
      </Group>
      <Card.Section>
        <Flex w="100%" p={20} gap={10} direction="column" align="start">
          <Text fz={14} w="100%" truncate c="white" fw={600}>
            {title}
          </Text>
          <Group w="100%" gap={10}>
            <Text component="span" c="white" fz={15} fw={600}>
              {value.toLocaleString()}
            </Text>
            <IconTrendingUp size={20} color="white" />
          </Group>
        </Flex>
      </Card.Section>
    </Card>
  )
}

export default StatsCard
