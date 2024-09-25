import {
  Avatar,
  Button,
  Card,
  Flex,
  Image,
  Overlay,
  Text,
} from "@mantine/core";
import { IconArrowRight, IconSparkles } from "@tabler/icons-react";
import { Dashboard } from "~/assets/dashboards";
import classes from "./styles/PreviewCard.module.css";
import Creator from "~/assets/profile-avatar.jpeg";

interface Props {
  dashboard: Dashboard;
}

export default function PreviewCard({ dashboard }: Props) {
  return (
    <Card className={classes.root} shadow="md" radius="md">
      <Card.Section>
        <Image className={classes.image} src={dashboard.image} />
      </Card.Section>
      <Card.Section p={20}>
        <Flex align="center" justify="space-between">
          <Flex gap={14} align="center">
            <Avatar size={38} src={Creator} />
            <Flex direction="column" gap={0} align="start">
              <Text className={classes.title} ff="Greycliff" fz={20} fw={500}>
                {dashboard.title}
              </Text>
              <Text className={classes.description} fz={12} fw={500}>
                {dashboard.description}
              </Text>
            </Flex>
          </Flex>

          <Flex align="center" gap={5}>
            <IconSparkles color="var(--mantine-color-accent-2)" size={20} />
            <Text fw={600} fz={13}>
              20
            </Text>
          </Flex>
        </Flex>
      </Card.Section>

      <Card.Section className={classes.vote_section}>
        <Overlay className={classes.overlay}>
          <Button
            onClick={() => {}}
            variant="gradient"
            gradient={{ from: "var(--mantine-color-accent-4)", to: "gray.4" }}
            size="sm"
            color="accent.2"
            leftSection={<IconArrowRight size={20} />}
          >
            View Now
          </Button>
        </Overlay>
      </Card.Section>
    </Card>
  );
}
