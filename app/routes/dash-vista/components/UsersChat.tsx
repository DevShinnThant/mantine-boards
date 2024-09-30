import { useState } from "react"
import {
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Image,
  Input,
  ScrollArea,
  Tabs,
  Text,
  rem,
} from "@mantine/core"
import { IconChecks, IconSend } from "@tabler/icons-react"
import dayjs from "dayjs"
import User1 from "../assets/avatars/avatar-1.jpg"
import User2 from "../assets/avatars/avatar-2.jpg"
import User3 from "../assets/avatars/avatar-3.jpg"
import User4 from "../assets/avatars/avatar-4.jpg"
import classes from "./styles/UsersChat.module.css"

export default function UsersChat() {
  const [value, setValue] = useState<string | null>("1")
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({})
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node
    setControlsRefs(controlsRefs)
  }

  return (
    <Tabs visibleFrom="md" variant="none" value={value} onChange={setValue}>
      <Tabs.List className={classes.list}>
        <Tabs.Tab
          data-first-active={true}
          value="1"
          ref={setControlRef("1")}
          className={classes.tab}
        >
          <Image className={classes.avatarImage} src={User1} />
          <Box className={classes.active_indicator} />
        </Tabs.Tab>
        <Tabs.Tab value="2" ref={setControlRef("2")} className={classes.tab}>
          <Image className={classes.avatarImage} src={User2} />
          <Box className={classes.active_indicator} />
        </Tabs.Tab>
        <Tabs.Tab value="3" ref={setControlRef("3")} className={classes.tab}>
          <Image className={classes.avatarImage} src={User3} />
          <Box className={classes.active_indicator} />
        </Tabs.Tab>
        <Tabs.Tab value="4" ref={setControlRef("4")} className={classes.tab}>
          <Image className={classes.avatarImage} src={User4} />
          <Box className={classes.active_indicator} />
        </Tabs.Tab>

        <Button disabled className={classes.moreBtn}>
          +10
        </Button>
      </Tabs.List>
      <Tabs.Panel
        data-first-active={value === "1"}
        className={classes.tabContent}
        value="1"
      >
        <Flex
          py={10}
          h="100%"
          gap={20}
          direction="column"
          justify="space-between"
          align="start"
        >
          <Flex px={10} w="100%" gap={14} direction="column" align="start">
            <Flex w="100%" align="center" justify="space-between">
              <Text fz={14} fw={500}>
                Maxim
              </Text>
              <Text className={classes.conversationTime} fz={12} fw={500}>
                (PM)
              </Text>
            </Flex>
            <Divider w="100%" />
          </Flex>

          <ScrollArea px={10} scrollbarSize={5} h="100%">
            <Flex h="100%" direction="column" align="start" gap={10}>
              {messages.map((message, index) => {
                const myMessage = message.type === "me"
                return (
                  <Flex
                    w="100%"
                    my={
                      myMessage && messages[index - 1].type === "other"
                        ? rem(8)
                        : 0
                    }
                    key={message.id}
                    align="center"
                    gap={10}
                    justify={myMessage ? "end" : "start"}
                  >
                    {message.status === "deliver" && (
                      <IconChecks
                        color="var(--mantine-color-green-5)"
                        size={14}
                      />
                    )}
                    <Box
                      px={8}
                      py={5}
                      className={classes.messageBox}
                      data-type={message.type}
                    >
                      <Text fz={14}>{message.message}</Text>
                    </Box>
                    <Text fz={12} c="dimmed">
                      {dayjs(message.createdAt).format("h:mm")}
                    </Text>
                  </Flex>
                )
              })}
            </Flex>
          </ScrollArea>

          <Group px={10} align="center" w="100%">
            <Image radius="xl" w={34} h={34} src={User3} />
            <Input
              placeholder="Send a message"
              classNames={{
                input: classes.textInput,
              }}
              flex={1}
            />
            <Button p={0} w={34} h={34} radius="xl" color="black">
              <IconSend color="white" size={16} />
            </Button>
          </Group>
        </Flex>
      </Tabs.Panel>
      <Tabs.Panel
        data-first-active={value === "1"}
        className={classes.tabContent}
        value="2"
      >
        <Flex
          py={10}
          h="100%"
          gap={20}
          direction="column"
          justify="space-between"
          align="start"
        >
          <Flex px={10} w="100%" gap={14} direction="column" align="start">
            <Flex w="100%" align="center" justify="space-between">
              <Text fz={14} fw={500}>
                Maxim
              </Text>
              <Text className={classes.conversationTime} fz={12} fw={500}>
                (PM)
              </Text>
            </Flex>
            <Divider w="100%" />
          </Flex>

          <ScrollArea px={10} scrollbarSize={5} h="100%">
            <Flex h="100%" direction="column" align="start" gap={10}>
              {messages.map((message, index) => {
                const myMessage = message.type === "me"
                return (
                  <Flex
                    w="100%"
                    my={
                      myMessage && messages[index - 1].type === "other"
                        ? rem(8)
                        : 0
                    }
                    key={message.id}
                    align="center"
                    gap={10}
                    justify={myMessage ? "end" : "start"}
                  >
                    {message.status === "deliver" && (
                      <IconChecks
                        color="var(--mantine-color-green-5)"
                        size={14}
                      />
                    )}
                    <Box
                      px={8}
                      py={5}
                      className={classes.messageBox}
                      data-type={message.type}
                    >
                      <Text fz={14}>{message.message}</Text>
                    </Box>
                    <Text fz={12} c="dimmed">
                      {dayjs(message.createdAt).format("h:mm")}
                    </Text>
                  </Flex>
                )
              })}
            </Flex>
          </ScrollArea>

          <Group px={10} align="center" w="100%">
            <Image radius="xl" w={34} h={34} src={User3} />
            <Input
              placeholder="Send a message"
              classNames={{
                input: classes.textInput,
              }}
              flex={1}
            />
            <Button p={0} w={34} h={34} radius="xl" color="black">
              <IconSend color="white" size={16} />
            </Button>
          </Group>
        </Flex>
      </Tabs.Panel>
      <Tabs.Panel
        data-first-active={value === "1"}
        className={classes.tabContent}
        value="3"
      >
        <Flex
          py={10}
          h="100%"
          gap={20}
          direction="column"
          justify="space-between"
          align="start"
        >
          <Flex px={10} w="100%" gap={14} direction="column" align="start">
            <Flex w="100%" align="center" justify="space-between">
              <Text fz={14} fw={500}>
                Maxim
              </Text>
              <Text className={classes.conversationTime} fz={12} fw={500}>
                (PM)
              </Text>
            </Flex>
            <Divider w="100%" />
          </Flex>

          <ScrollArea px={10} scrollbarSize={5} h="100%">
            <Flex h="100%" direction="column" align="start" gap={10}>
              {messages.map((message, index) => {
                const myMessage = message.type === "me"
                return (
                  <Flex
                    w="100%"
                    my={
                      myMessage && messages[index - 1].type === "other"
                        ? rem(8)
                        : 0
                    }
                    key={message.id}
                    align="center"
                    gap={10}
                    justify={myMessage ? "end" : "start"}
                  >
                    {message.status === "deliver" && (
                      <IconChecks
                        color="var(--mantine-color-green-5)"
                        size={14}
                      />
                    )}
                    <Box
                      px={8}
                      py={5}
                      className={classes.messageBox}
                      data-type={message.type}
                    >
                      <Text fz={14}>{message.message}</Text>
                    </Box>
                    <Text fz={12} c="dimmed">
                      {dayjs(message.createdAt).format("h:mm")}
                    </Text>
                  </Flex>
                )
              })}
            </Flex>
          </ScrollArea>

          <Group px={10} align="center" w="100%">
            <Image radius="xl" w={34} h={34} src={User3} />
            <Input
              placeholder="Send a message"
              classNames={{
                input: classes.textInput,
              }}
              flex={1}
            />
            <Button p={0} w={34} h={34} radius="xl" color="black">
              <IconSend color="white" size={16} />
            </Button>
          </Group>
        </Flex>
      </Tabs.Panel>

      <Tabs.Panel
        data-first-active={value === "1"}
        className={classes.tabContent}
        value="4"
      >
        <Flex
          py={10}
          h="100%"
          gap={20}
          direction="column"
          justify="space-between"
          align="start"
        >
          <Flex px={10} w="100%" gap={14} direction="column" align="start">
            <Flex w="100%" align="center" justify="space-between">
              <Text fz={14} fw={500}>
                Maxim
              </Text>
              <Text className={classes.conversationTime} fz={12} fw={500}>
                (PM)
              </Text>
            </Flex>
            <Divider w="100%" />
          </Flex>

          <ScrollArea px={10} scrollbarSize={5} h="100%">
            <Flex h="100%" direction="column" align="start" gap={10}>
              {messages.map((message, index) => {
                const myMessage = message.type === "me"
                return (
                  <Flex
                    w="100%"
                    my={
                      myMessage && messages[index - 1].type === "other"
                        ? rem(8)
                        : 0
                    }
                    key={message.id}
                    align="center"
                    gap={10}
                    justify={myMessage ? "end" : "start"}
                  >
                    {message.status === "deliver" && (
                      <IconChecks
                        color="var(--mantine-color-green-5)"
                        size={14}
                      />
                    )}
                    <Box
                      px={8}
                      py={5}
                      className={classes.messageBox}
                      data-type={message.type}
                    >
                      <Text fz={14}>{message.message}</Text>
                    </Box>
                    <Text fz={12} c="dimmed">
                      {dayjs(message.createdAt).format("h:mm")}
                    </Text>
                  </Flex>
                )
              })}
            </Flex>
          </ScrollArea>

          <Group px={10} align="center" w="100%">
            <Image radius="xl" w={34} h={34} src={User3} />
            <Input
              placeholder="Send a message"
              classNames={{
                input: classes.textInput,
              }}
              flex={1}
            />
            <Button p={0} w={34} h={34} radius="xl" color="black">
              <IconSend color="white" size={16} />
            </Button>
          </Group>
        </Flex>
      </Tabs.Panel>
    </Tabs>
  )
}

const messages = [
  {
    id: 1,
    message: "Hi,Darina ✌️",
    createdAt: new Date(),
    type: "other",
    status: "seen",
  },
  {
    id: 2,
    message: "Please tell me, do you have a minute to ring the bell?",
    createdAt: new Date(),
    type: "other",
    status: "seen",
  },
  {
    id: 3,
    message: "Yes,of course, let's go",
    createdAt: new Date(),
    type: "me",
    status: "deliver",
  },
  {
    id: 4,
    message: "Come on!",
    createdAt: new Date(),
    type: "me",
    status: "deliver",
  },
] as const
