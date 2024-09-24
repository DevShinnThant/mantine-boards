/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_REPO: string;
  readonly VITE_MANTINE_DOC: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
