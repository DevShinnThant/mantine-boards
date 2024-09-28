import { Box, Card, Flex, Text, rem } from "@mantine/core"

interface Props {
  bg: string
  circleColor: string
  title: string
  value: number
  active: boolean
}

export default function SnapshotFilter({
  bg,
  circleColor,
  title,
  value,
  active,
}: Props) {
  return (
    <Card
      style={{
        cursor: "pointer",
      }}
      pos="relative"
      w="100%"
      shadow="xs"
      p={0}
      px={10}
      py={4}
      radius="sm"
      bg={bg}
    >
      <Box
        style={{
          position: "absolute",
          top: -14,
          right: -14,
          display: "inline-block",
          background: circleColor,
          width: 40,
          height: 40,
          borderRadius: "50%",
        }}
      />
      <Box
        style={{
          position: "absolute",
          top: -21,
          right: -21,
          display: "inline-block",
          background: circleColor,
          opacity: "50%",
          width: 54,
          height: 54,
          borderRadius: "50%",
        }}
      />
      <Flex
        w="100%"
        h="100%"
        direction="column"
        gap={10}
        align="start"
        justify="start"
      >
        <Text c="dark" fz={{ base: 10, md: 12, lg: 12 }} fw={600}>
          {title}
        </Text>
        <Text
          component="span"
          fz={{ base: 10, md: 17, lg: 17 }}
          fw={600}
          c="black"
        >
          {value.toLocaleString()}
        </Text>
      </Flex>

      {/* Active */}
      {active && (
        <Flex
          justify="center"
          align="center"
          pos="absolute"
          bottom={4}
          w="100%"
          left={0}
        >
          <Box
            w={{ base: 10, md: 30, lg: 30 }}
            h={1}
            style={{
              border: `${rem(1)} solid var(--mantine-color-dark-3)`,
            }}
          />
        </Flex>
      )}
      {/* Active */}
    </Card>
  )
}
