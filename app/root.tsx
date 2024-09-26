import { useEffect } from "react"
import { ColorSchemeScript, MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import "@mantine/spotlight/styles.css"
import type { LinksFunction } from "@remix-run/node"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react"
import AppLayout from "./layouts/AppLayout"
import { useSyntaxHighlightStore } from "./store/syntax-highter-store"
import "./styles/fonts/styles.css"
import "./styles/global.css"
import { theme } from "./styles/theme"

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "icon",
    href: "/favicon.svg",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
]

export function Layout({ children }: Children) {
  const { setWrapperComponent, setThemes } = useSyntaxHighlightStore()

  useEffect(() => {
    import("react-syntax-highlighter").then((module) => {
      setWrapperComponent(module.Light)
    })
    import("react-syntax-highlighter/dist/esm/styles/hljs").then((mod) => {
      setThemes(mod)
    })
  }, [setThemes, setWrapperComponent])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="light" theme={theme}>
          {children}
        </MantineProvider>
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    )
  }

  return (
    <>
      <h1>Error!</h1>
    </>
  )
}
