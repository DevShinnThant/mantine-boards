import { useEffect } from "react"
import "@mantine/charts/styles.css"
import { Button, ColorSchemeScript, MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import "@mantine/dates/styles.css"
import "@mantine/spotlight/styles.css"
import type { LinksFunction } from "@remix-run/node"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "@remix-run/react"
import WorkInProgressImage from "~/assets/illustrations/work-in-progress.png"
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
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap",
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
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          {children}
        </MantineProvider>
        <Scripts />
        <ScrollRestoration />
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

  const navigate = useNavigate()

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <div
        style={{
          height: "100svh",
          width: "80%",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          height={400}
          src={WorkInProgressImage}
          alt="work-in-progress-cover"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "10px",
          }}
        >
          <div
            style={{
              fontSize: "34px",
              fontWeight: "bolder",
              color: "var(--mantine-color-accent-2)",
            }}
          >
            Work in progress ✨
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "normal",
              color: "var(--mantine-color-gray-4)",
            }}
          >
            This page is currently under active development. Please stay tuned
            for updates as we continue to refine the product. Your feedback and
            support are always appreciated!
          </div>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Button
              onClick={() => navigate("/")}
              style={{
                cursor: "pointer",
                borderRadius: "6px",
                border: "none",
                padding: "7px 16px",
                backgroundColor: "var(--mantine-color-accent-3)",
                color: "white",
                fontSize: "14px",
                fontWeight: 600,
                boxShadow: "var(--mantine-shadow-xs)",
              }}
            >
              Back to Home
            </Button>
            <Button
              onClick={() => navigate(-1)}
              style={{
                cursor: "pointer",
                borderRadius: "6px",
                padding: "7px 16px",
                backgroundColor: "transparent",
                border: "1px solid var(--mantine-color-accent-3)",
                color: "white",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <html lang="en">
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>
          {isRouteErrorResponse(error)
            ? `${error.status} ${error.statusText}`
            : error instanceof Error
              ? error.message
              : "Unknown Error"}
        </h1>
        <Scripts />
      </body>
    </html>
  )
}
