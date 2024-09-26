import { defineConfig } from "vite"
import { vitePlugin as remix } from "@remix-run/dev"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [
    remix({
      basename: "/",
      buildDirectory: "build",
      ignoredRouteFiles: [],
      serverBuildFile: "index.js",

      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("neura-dash", "routes/neura-dash/layout.tsx", () => {
            route("", "routes/neura-dash/dashboard.tsx", { index: true })
            route("ecommerce", "routes/neura-dash/ecommerce.tsx")
          })
        })
      },

      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),

    tsconfigPaths(),
  ],
})
