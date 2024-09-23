import { Box, Flex, Group, rem, Text, UnstyledButton } from "@mantine/core";
import {
  IconArrowRight,
  IconDashboard,
  IconFileText,
  IconHome,
  IconSearch,
} from "@tabler/icons-react";
import classes from "./styles/SearchControl.module.css";
import { Spotlight, SpotlightActionData, spotlight } from "@mantine/spotlight";

const actions: SpotlightActionData[] = [
  {
    id: "home",
    label: "Home",
    description: "Get to home page",
    onClick: () => console.log("Home"),
    leftSection: (
      <IconHome style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
    ),
  },
  {
    id: "dashboard",
    label: "Dashboard",
    description: "Get full information about current system status",
    onClick: () => console.log("Dashboard"),
    leftSection: (
      <IconDashboard style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
    ),
  },
  {
    id: "documentation",
    label: "Documentation",
    description: "Visit documentation to lean more about all features",
    onClick: () => console.log("Documentation"),
    leftSection: (
      <IconFileText style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
    ),
  },
];

export default function SearchControl() {
  return (
    <>
      <UnstyledButton onClick={spotlight.open} className={classes.root}>
        <Group align="center">
          <Flex
            className={classes.left_section}
            justify="center"
            align="center"
            gap={6}
          >
            <IconSearch
              className={classes.searchIcon}
              style={{ width: rem(15), height: rem(15) }}
              stroke={1.5}
            />
            <Text visibleFrom="md" fz="sm" c="dimmed">
              Search
            </Text>
          </Flex>

          <Box visibleFrom="md" className={classes.right_section_icon}>
            <IconArrowRight
              style={{ width: rem(14), height: rem(14) }}
              stroke={1.5}
            />
          </Box>
        </Group>
      </UnstyledButton>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        searchProps={{
          leftSection: (
            <IconSearch
              style={{ width: rem(20), height: rem(20) }}
              stroke={1.5}
            />
          ),
          placeholder: "Search...",
        }}
      />
    </>
  );
}
