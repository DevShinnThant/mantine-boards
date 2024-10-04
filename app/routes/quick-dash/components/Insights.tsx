import { ActionIcon, Box, Flex, Text, rem } from "@mantine/core"
import dayjs from "dayjs"
import { MantineLogoRounded } from "~/components/MantineLogoRounded"
import classes from "./styles/Insights.module.css"

export default function Insights() {
  return (
    <Box className={classes.plan}>
      <Flex w="100%" align="center" justify="space-between">
        <Flex align="center" gap={14}>
          <Box className={classes.planLogoContainer}>
            <MantineLogoRounded color="orange.5" size={24} />
          </Box>
          <Flex direction="column" align="start" gap={4}>
            <Text fw={600} lh={1} fz={18} lts={-0.4} c="white">
              Mantine
            </Text>
            <Text fz={13} lh={1} lts={-0.4} fw={500} c="white">
              Website insights
            </Text>
          </Flex>
        </Flex>
        <ActionIcon
          radius="md"
          size={34}
          className={classes.actionIcon}
          variant="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          </svg>
        </ActionIcon>
      </Flex>
      <Text className={classes.count}>32%</Text>
      <Flex direction="column" align="start" gap={10}>
        <Text fz={14} fw={500} c="white">
          Insight summarized in this month.
        </Text>
        <Text fz={12} fw={500} c="white">
          This is a summary of the statistics of visits that occurred in this
          month to your website.
        </Text>
      </Flex>

      <Box className={classes.infoSection}>
        {activities.map((activity) => (
          <Flex
            key={activity.id}
            gap={10}
            w="100%"
            direction="column"
            align="start"
          >
            <Flex w="100%" align="center" gap={14}>
              <Text fz={14} lts={-0.4} c="black" fw={500}>
                {activity.type}
              </Text>
              <Text fz={12} lts={-0.4} c="dark.3" fw={500}>
                {dayjs(activity.createdAt).format("h")} hours ago
              </Text>
            </Flex>

            <Flex align="start" gap={10}>
              <Box
                style={{
                  width: rem(10),
                  height: rem(10),
                  padding: rem(1),
                  border: "1px solid var(--mantine-color-green-5)",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    backgroundColor: "var(--mantine-color-green-7)",
                  }}
                />
              </Box>
              <Flex direction="column" align="start" gap={6}>
                <Text lh={1} fz={12} lts={-0.4} c="black" fw={500}>
                  Page: /
                </Text>
                {activity.pages.map((page) => (
                  <Text key={page.id} fz={12} lts={-0.4} c="dark.3" fw={500}>
                    Content: {page.content}
                  </Text>
                ))}
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Box>
    </Box>
  )
}

const activities = [
  {
    id: 1,
    type: "Link clicked",
    createdAt: new Date(),
    pages: [
      {
        id: 1,
        content: "/pricing",
      },
    ],
  },
  {
    id: 2,
    type: "Link clicked",
    createdAt: new Date(),
    pages: [
      {
        id: 1,
        content: "https://app.nolito.com/sign-in",
      },
    ],
  },
]
