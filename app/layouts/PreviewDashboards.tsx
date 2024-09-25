import { Grid, Stack, Text } from "@mantine/core";
import { dashboards } from "~/assets/dashboards";
import PreviewCard from "~/components/PreviewCard";
import classes from "./styles/PreviewDashboards.module.css";

export default function PreviewDashboards() {
  return (
    <Stack className={classes.root} gap="lg">
      <Text className={classes.title} ff="Greycliff" fw="bold" fz={24}>
        Dashboards
        <Text ml={10} c="dimmed" component="span" fw={400} fz={14}>
          4 dashboards
        </Text>
      </Text>
      <Grid gutter={34} columns={6}>
        {dashboards.map((dashboard) => (
          <Grid.Col key={dashboard.id} span={{ base: 6, md: 6, lg: 3 }}>
            <PreviewCard dashboard={dashboard} />
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
}
