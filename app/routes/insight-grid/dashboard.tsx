import { Group, Text } from "@mantine/core"

export default function Dashboard() {
  return (
    <>
      {/* Header */}
      <Group w="100%" align="center" justify="space-between">
        <Text fz={24} fw={800} c="white">
          Welcome back
        </Text>
      </Group>
      {/* Header */}
    </>
  )
}
