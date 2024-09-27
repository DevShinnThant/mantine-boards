/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_REPO: string
  readonly VITE_MANTINE_DOC: string
  readonly VITE_DISCORD_ACC: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
