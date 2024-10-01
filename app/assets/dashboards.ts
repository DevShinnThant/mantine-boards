import { getDashboardRepoUrl } from "~/utils"
import Dashboard2 from "~/assets/preview-images/dashboard-6.jpeg"
import Dashboard4 from "~/assets/preview-images/dashboard-7.png"
import Dashboard3 from "~/assets/preview-images/dashboard-8.png"
import Dashboard1 from "~/assets/preview-images/dashboard-9.png"

export const dashboards = [
  {
    id: 1,
    image: Dashboard1,
    title: "NeuraDash",
    subTitle: "Nav with branch",
    description:
      "Use these Mantine UI custom dashboard component examples to create clean, responsive interfaces for data visualization and management. These component layouts leverage flexible grid structures and provide both light and dark theme options, perfect for displaying key metrics, charts, and interactive elements.",
    link: "neura-dash",
    git_repo: getDashboardRepoUrl("neura-dash"),
  },
  {
    id: 2,
    image: Dashboard2,
    title: "InsightGrid",
    subTitle: "Gallery-like dashboard",
    description:
      "Use these Mantine UI custom dashboard component examples to create clean, responsive interfaces for data visualization and management. These component layouts leverage flexible grid structures and provide both light and dark theme options, perfect for displaying key metrics, charts, and interactive elements.",
    link: "insight-grid",
    git_repo: getDashboardRepoUrl("insight-grid"),
  },
  {
    id: 3,
    image: Dashboard3,
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
