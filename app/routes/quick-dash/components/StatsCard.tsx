import {
  ActionIcon,
  Box,
  Card,
  Divider,
  Flex,
  Group,
  Text,
} from "@mantine/core"
import { Link } from "@remix-run/react"
import { ArrowRight, Icon } from "iconsax-react"
import CardWrapper from "./CardWrapper"
import classes from "./styles/StatsCard.module.css"

interface Props {
  value: number
  label: string
  icon: Icon
  link: string
  color: string
  borderColor: string
}

export default function StatsCard({
  value,
  label,
  icon: Icon,
  link,
  color,
  borderColor,
}: Props) {
  return (
    <CardWrapper>
      <Card.Section p={14}>
        <Group align="center" gap={14}>
          <Box
            className={classes.iconWrapper}
            style={{
              background: color,
              borderColor,
            }}
          >
            <Icon variant="Bold" color="white" size={20} />
          </Box>
          <Flex direction="column" gap={2} align="start">
            <Text className={classes.value} fw={600} lh={1} fz={16}>
              {value.toLocaleString()}
            </Text>
            <Text className={classes.label} lts={-0.4} fw={500} fz={12}>
              {label}
            </Text>
          </Flex>
        </Group>
      </Card.Section>
      <Divider variant="dashed" w="100%" />
      <Card.Section px={14} py={10}>
        <Group align="center" w="100%" justify="space-between">
          <Link to={link}>
            <Text className={classes.viewDetail} lts={-0.4} fw={500} fz={12}>
              View details
            </Text>
          </Link>
          <ActionIcon variant="subtle" radius="sm">
            <ArrowRight size={16} />
          </ActionIcon>
        </Group>
      </Card.Section>
    </CardWrapper>
  )
}
