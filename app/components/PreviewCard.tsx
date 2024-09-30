import {
  Avatar,
  Badge,
  Button,
  Card,
  Flex,
  Image,
  Overlay,
  Text,
} from "@mantine/core"
import { useNavigate } from "@remix-run/react"
import { IconHeartDollar, IconSparkles } from "@tabler/icons-react"
import { Dashboard } from "~/assets/dashboards"
import Creator from "~/assets/profile-avatar.jpeg"
import classes from "./styles/PreviewCard.module.css"

interface Props {
  dashboard: Dashboard
}

export default function PreviewCard({ dashboard }: Props) {
  const navigate = useNavigate()

  return (
    <Card className={classes.root} shadow="md" radius="md">
      <Card.Section>
        <Image className={classes.image} src={dashboard.image} />
      </Card.Section>
      <Card.Section p={20}>
        <Flex align="center" gap={60} justify="space-between">
          <Flex w="50%" gap={14} align="center">
            <Avatar size={38} src={Creator} />
            <Flex w="100%" direction="column" gap={0} align="start">
              <Text className={classes.title} ff="Greycliff" fw={500}>
                {dashboard.title}
              </Text>
              <Text className={classes.description} fz={12} fw={500}>
                __{dashboard.description}
              </Text>
            </Flex>
          </Flex>

          <Flex
            direction={{ base: "column", lg: "row" }}
            align={{ base: "start", md: "center", lg: "center" }}
            gap={6}
          >
            <Badge
              leftSection={
                <IconSparkles color="var(--mantine-color-accent-2)" size={20} />
              }
              size="md"
              px="sm"
              h={26}
              color="black"
            >
              Popular
            </Badge>
            <Badge
              leftSection={
                <IconHeartDollar
                  color="var(--mantine-color-accent-1)"
                  size={18}
                />
              }
              size="md"
              px="sm"
              h={26}
              color="black"
            >
              Free
            </Badge>
          </Flex>
        </Flex>
      </Card.Section>

      <Card.Section className={classes.vote_section}>
        <Overlay blur={1.4} className={classes.overlay}>
          <Button
            onClick={() => navigate("neura-dash")}
            className={classes.view_button}
            radius="xl"
            color="accent.6"
            size="xs"
            fz={12}
          >
            View Now
          </Button>
        </Overlay>
      </Card.Section>
    </Card>
  )
}
