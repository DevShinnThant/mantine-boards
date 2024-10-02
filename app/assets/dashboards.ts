import { getDashboardRepoUrl } from "~/utils"
import DashVista from "~/assets/preview-images/dash-vista.png"
import Dashboard4 from "~/assets/preview-images/dashboard-7.png"
import InsightGrid from "~/assets/preview-images/insight-grid.png"
import NeuraDash from "~/assets/preview-images/neura-dash.png"

export const dashboards = [
  {
    id: 1,
    image: NeuraDash,
    title: "NeuraDash",
    subTitle: "Nav with branch",
    description:
      "Use these Mantine UI custom dashboard component examples to create clean, responsive interfaces for data visualization and management. These component layouts leverage flexible grid structures and provide both light and dark theme options, perfect for displaying key metrics, charts, and interactive elements.",
    link: "neura-dash",
    git_repo: getDashboardRepoUrl("neura-dash"),
  },
  {
    id: 2,
    image: InsightGrid,
    title: "InsightGrid",
    subTitle: "Gallery-like dashboard",
    description:
      "Use these Mantine UI custom dashboard component examples to create clean, responsive interfaces for data visualization and management. These component layouts leverage flexible grid structures and provide both light and dark theme options, perfect for displaying key metrics, charts, and interactive elements.",
    link: "insight-grid",
    git_repo: getDashboardRepoUrl("insight-grid"),
  },
  {
    id: 3,
    image: DashVista,
    title: "DashVista",
    subTitle: "Dashboard for tasker system",
    description:
      "Use these Mantine UI custom dashboard component examples to create clean, responsive interfaces for data visualization and management. These component layouts leverage flexible grid structures and provide both light and dark theme options, perfect for displaying key metrics, charts, and interactive elements.",
    link: "dash-vista",
    git_repo: getDashboardRepoUrl("dash-vista"),
  },
  {
    id: 4,
    image: Dashboard4,
    title: "Dashboard 4",
    subTitle: "Nav with branch",
    description: "Description One Two Three",
    link: "neura-dash",
    git_repo: getDashboardRepoUrl("neura-dash"),
  },
] as const

export type Dashboard = (typeof dashboards)[number]
