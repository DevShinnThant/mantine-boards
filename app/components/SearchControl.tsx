import { Box, Flex, Group, Text, UnstyledButton, rem } from "@mantine/core"
import { Spotlight, SpotlightActionData, spotlight } from "@mantine/spotlight"
import { useNavigate } from "@remix-run/react"
import {
  IconArrowRight,
  IconDashboard,
  IconFileText,
  IconHome,
  IconLayoutDashboard,
  IconSearch,
} from "@tabler/icons-react"
import { dashboards } from "~/assets/dashboards"
import classes from "./styles/SearchControl.module.css"

export default function SearchControl() {
  const navigate = useNavigate()

  const defaultActions = [
    {
      id: "home",
      label: "Home",
      description: "Get to home page",
      onClick: () => navigate("/"),
      leftSection: (
        <IconHome style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
      ),
    },
    {
      id: "dashboard",
      label: "Dashboard",
      description: "Get full information about current system status",
      onClick: () => navigate("#dashboards-section"),
      leftSection: (
        <IconDashboard
          style={{ width: rem(24), height: rem(24) }}
          stroke={1.5}
        />
      ),
    },
    {
      id: "documentation",
      label: "Documentation",
      description: "Visit documentation to lean more about all features",
      onClick: () =>
        window.open(
          "https://mantine.dev/getting-started/",
          "_blank",
          "noopener,noreferrer"
        ),
      leftSection: (
        <IconFileText
          style={{ width: rem(24), height: rem(24) }}
          stroke={1.5}
        />
      ),
    },
  ]

  const dashboardActions: SpotlightActionData[] = dashboards.map(
    (dashboard) => {
      return {
        id: dashboard.title,
        label: dashboard.title,
        description: dashboard.subTitle,
        onClick: () => navigate(dashboard.link),
        leftSection: (
          <IconLayoutDashboard
            style={{ width: rem(24), height: rem(24) }}
            stroke={1.5}
          />
        ),
      }
    }
  )

  const actions = [...defaultActions, ...dashboardActions]

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
  )
}
