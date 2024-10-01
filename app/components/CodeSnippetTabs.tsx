import { useState } from "react"
import {
  CopyButton,
  Flex,
  FloatingIndicator,
  Group,
  ScrollArea,
  Tabs,
  Text,
} from "@mantine/core"
import { Copy, CopySuccess } from "iconsax-react"
import { FileContext } from "~/utils/getDashboardCode"
import { useSyntaxHighlightStore } from "~/store/syntax-highter-store"
import { HeaderControl } from "./HeaderControl"
import { getCodeFileIcon } from "./get-code-file-icon"
import classes from "./styles/CodeSnippetTabs.module.css"

interface Props {
  files: FileContext[]
  initialFile: FileContext
}

export default function CodeSnippetTabs({ files, initialFile }: Props) {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null)
  const [value, setValue] = useState<string | null>(initialFile.name)
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({})
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node
    setControlsRefs(controlsRefs)
  }

  const { wrapperComponent: WrapperComponent, themes } =
    useSyntaxHighlightStore()

  if (!WrapperComponent || !themes) return null

  const copyFile = files.find((file) => file.name === value)

  return (
    <Tabs p={20} variant="none" value={value} onChange={setValue}>
      <Tabs.List ref={setRootRef} className={classes.list}>
        <Group w="100%" justify="space-between" align="center">
          <ScrollArea scrollbars="x" scrollbarSize={1}>
            <Flex pos="relative" align="center">
              {files.map((file) => (
                <Tabs.Tab
                  key={file.name}
                  value={file.name}
                  ref={setControlRef(file.name)}
                  className={classes.tab}
                >
                  <Flex align="center" gap={4}>
                    {getCodeFileIcon(file.name)}
                    <Text ff="Greycliff" fz={13} fw={500}>
                      {file.name}
                    </Text>
                  </Flex>
                </Tabs.Tab>
              ))}

              <FloatingIndicator
                pos="absolute"
                target={value ? controlsRefs[value] : null}
                parent={rootRef}
                className={classes.indicator}
              />
            </Flex>
          </ScrollArea>

          <CopyButton value={copyFile?.code || ""}>
            {({ copied, copy }) => (
              <HeaderControl tooltip={value || ""} onClick={copy}>
                {copied ? (
                  <CopySuccess color="var(--mantine-color-blue-4)" />
                ) : (
                  <Copy />
                )}
              </HeaderControl>
            )}
          </CopyButton>
        </Group>
      </Tabs.List>

      {files.map((file) => (
        <Tabs.Panel key={file.name} value={file.name}>
          <WrapperComponent style={themes.atomOneDark} language="typescript">
            {file.code}
          </WrapperComponent>
        </Tabs.Panel>
      ))}
    </Tabs>
  )
}
