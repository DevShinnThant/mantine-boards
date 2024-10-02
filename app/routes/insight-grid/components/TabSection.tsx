import { useState } from "react"
import { Box, Flex, FloatingIndicator, Grid, Tabs, Text } from "@mantine/core"
import Image1 from "../assets/images/image-1.jpeg"
import Image2 from "../assets/images/image-2.jpeg"
import Image3 from "../assets/images/image-3.jpeg"
import Image4 from "../assets/images/image-4.jpeg"
import Image5 from "../assets/images/image-5.jpeg"
import Image6 from "../assets/images/image-6.jpeg"
import FolderCard from "./FolderCard"
import classes from "./styles/TabSection.module.css"

export default function TabSection() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null)
  const [value, setValue] = useState<string | null>("1")
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({})
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node
    setControlsRefs(controlsRefs)
  }

  return (
    <Flex w="100%" direction="column" align="start" gap={16}>
      <Text className={classes.title}>All folders</Text>

      <Tabs w="100%" variant="none" value={value} onChange={setValue}>
        <Tabs.List ref={setRootRef} className={classes.list}>
          <Tabs.Tab value="1" ref={setControlRef("1")} className={classes.tab}>
            Recent
          </Tabs.Tab>
          <Tabs.Tab value="2" ref={setControlRef("2")} className={classes.tab}>
            Favourites
          </Tabs.Tab>
          <Tabs.Tab value="3" ref={setControlRef("3")} className={classes.tab}>
            Share
          </Tabs.Tab>
          <Tabs.Tab value="4" ref={setControlRef("4")} className={classes.tab}>
            External
          </Tabs.Tab>
          <Tabs.Tab value="5" ref={setControlRef("5")} className={classes.tab}>
            Achieved
          </Tabs.Tab>

          <FloatingIndicator
            target={value ? controlsRefs[value] : null}
            parent={rootRef}
            className={classes.indicator}
          />
        </Tabs.List>

        <Box w="100%" my={30}>
          <Tabs.Panel w="100%" value="1">
            <Grid columns={3} gutter={20}>
              {folders.map((folder) => (
                <Grid.Col key={folder.id} span={{ base: 3, md: 1 }}>
                  <FolderCard {...folder} />
                </Grid.Col>
              ))}
            </Grid>
          </Tabs.Panel>
          <Tabs.Panel value="2">Second tab content</Tabs.Panel>
          <Tabs.Panel value="3">Third tab content</Tabs.Panel>
        </Box>
      </Tabs>
    </Flex>
  )
}

export type Folder = (typeof folders)[number]

const folders = [
  {
    id: 1,
    title: "Design",
    imageCount: 18,
    size: "92MB",
    image: Image1,
  },
  {
    id: 2,
    title: "Landing Web Design",
    imageCount: 32,
    size: "188MB",
    image: Image2,
  },
  {
    id: 3,
    title: "UI presentations",
    imageCount: 8,
    size: "286MB",
    image: Image3,
  },
  {
    id: 4,
    title: "Team photos",
    imageCount: 246,
    size: "1.28GB",
    image: Image4,
  },
  {
    id: 5,
    title: "Movie Web Design",
    imageCount: 42,
    size: "126MB",
    image: Image5,
  },
  {
    id: 6,
    title: "Dashboard 3.0",
    imageCount: 22,
    size: "96MB",
    image: Image6,
  },
]
