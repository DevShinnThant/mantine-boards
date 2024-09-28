import {
  Box,
  Card,
  Flex,
  SimpleGrid,
  Text,
  useMantineColorScheme,
} from "@mantine/core"
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import { ClipboardTick, Eye, Folder2, ShoppingCart } from "iconsax-react"

export default function StatsSection() {
  const { colorScheme } = useMantineColorScheme()

  return (
    <Flex w="100%" h="100%" align="center" gap={10}>
      <SimpleGrid w="100%" h="100%" cols={2}>
        <StatsCard
          title="Sessions"
          badge={
            <Flex
              justify="center"
              align="center"
              w="100%"
              h="100%"
              bg={
                colorScheme === "light"
                  ? "var(--mantine-color-gray-1)"
                  : "var(--mantine-color-dark-4)"
              }
              style={{
                borderRadius: "50%",
              }}
            >
              <ClipboardTick
                color="var(--mantine-color-blue-4)"
                variant="Bulk"
                size={16}
              />
            </Flex>
          }
          value={6132}
          rate={150}
          type="up"
        />
        <StatsCard
          title="Page Views"
          badge={
            <Flex
              justify="center"
              align="center"
              w="100%"
              h="100%"
              bg={
                colorScheme === "light"
                  ? "var(--mantine-color-blue-0)"
                  : "var(--mantine-color-dark-4)"
              }
              style={{
                borderRadius: "50%",
              }}
            >
              <Eye
                color="var(--mantine-color-violet-4)"
                variant="Bulk"
                size={16}
              />
            </Flex>
          }
          value={11236}
          rate={202}
          type="down"
        />
        <StatsCard
          title="Average"
          badge={
            <Flex
              justify="center"
              align="center"
              w="100%"
              h="100%"
              bg={
                colorScheme === "light"
                  ? "var(--mantine-color-orange-0)"
                  : "var(--mantine-color-dark-4)"
              }
              style={{
                borderRadius: "50%",
              }}
            >
              <Folder2
                color="var(--mantine-color-orange-6)"
                variant="Bulk"
                size={16}
              />
            </Flex>
          }
          value={46}
          rate={22}
          type="up"
        />
        <StatsCard
          title="Bounce Rate"
          badge={
            <Flex
              justify="center"
              align="center"
              w="100%"
              h="100%"
              bg={
                colorScheme === "light"
                  ? "var(--mantine-color-red-0)"
                  : "var(--mantine-color-dark-4)"
              }
              style={{
                borderRadius: "50%",
              }}
            >
              <ShoppingCart
                color="var(--mantine-color-red-6)"
                variant="Bulk"
                size={16}
              />
            </Flex>
          }
          value={6132}
          rate={30}
          type="down"
        />
      </SimpleGrid>
    </Flex>
  )
}

interface StatsCardProps {
  title: string
  badge: React.ReactNode
  value: number
  rate: number
  type: "up" | "down"
}

const StatsCard = ({ title, badge, value, rate, type }: StatsCardProps) => {
  return (
    <Card pos="relative" w="100%" h="100%" shadow="sm" p="xl" radius={6}>
      <Card.Section>
        <Text fw={600}>{title}</Text>
      </Card.Section>

      <Box pos="absolute" right={14} top={20} w={34} h={34}>
        {badge}
      </Box>

      <Card.Section mt={24}>
        <Flex direction="column" align="start" gap={6}>
          <Text fz={24} fw={600}>
            {value.toLocaleString()}
          </Text>
          <Flex align="center" gap={4}>
            <Text
              c={
                type === "up"
                  ? "var(--mantine-color-green-6)"
                  : "var(--mantine-color-red-6)"
              }
              fw={600}
              fz={15}
            >
              {rate}%
            </Text>
            {type === "up" ? (
              <IconTrendingUp size={18} color="var(--mantine-color-green-6)" />
            ) : (
              <IconTrendingDown size={18} color="var(--mantine-color-red-6)" />
            )}
          </Flex>
          <Text fz={12}>vs Previous 30 Days</Text>
        </Flex>
      </Card.Section>
    </Card>
  )
}
