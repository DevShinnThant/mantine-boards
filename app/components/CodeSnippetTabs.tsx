import { useState } from "react"
import { FloatingIndicator, Tabs } from "@mantine/core"
import { FileContext } from "~/utils/getComponentCode"
import { useSyntaxHighlightStore } from "~/store/syntax-highter-store"
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

  return (
    <Tabs variant="none" value={value} onChange={setValue}>
      <Tabs.List ref={setRootRef} className={classes.list}>
        {files.map((file) => (
          <Tabs.Tab
            key={file.name}
            value={file.name}
            ref={setControlRef(file.name)}
            className={classes.tab}
          >
            {file.name}
          </Tabs.Tab>
        ))}

        <FloatingIndicator
          target={value ? controlsRefs[value] : null}
          parent={rootRef}
          className={classes.indicator}
        />
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
