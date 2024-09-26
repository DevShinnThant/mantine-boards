import { CSSProperties } from "react"
import { create } from "zustand"

type SyntaxHighlighter =
  typeof import("react-syntax-highlighter/dist/esm/light").default

type ThemeProperty =
  typeof import("react-syntax-highlighter/dist/esm/styles/hljs")

type ThemeKeys = keyof ThemeProperty

type Themes = Record<ThemeKeys, { [key: string]: CSSProperties }>

interface syntaxHighlightSlice {
  wrapperComponent: SyntaxHighlighter | null
  themes: Themes | null
  setWrapperComponent: (component: SyntaxHighlighter) => void
  setThemes: (themes: Themes) => void
}

export const useSyntaxHighlightStore = create<syntaxHighlightSlice>((set) => ({
  wrapperComponent: null,
  themes: null,
  setWrapperComponent: (wrapperComponent) => set({ wrapperComponent }),
  setThemes: (themes) => set({ themes }),
}))
