import { getDashboardRepoUrl } from "~/utils"
import Dashboard1 from "~/assets/preview-images/dashboard-1.png"
import Dashboard3 from "~/assets/preview-images/dashboard-5.png"
import Dashboard2 from "~/assets/preview-images/dashboard-6.jpeg"
import Dashboard4 from "~/assets/preview-images/dashboard-7.png"

export const dashboards = [
  {
    id: 1,
    image: Dashboard1,
    title: "NeuraDash",
    description:
      "Use these Mantine UI custom dashboard component examples to create clean, responsive interfaces for data visualization and management. These component layouts leverage flexible grid structures and provide both light and dark theme options, perfect for displaying key metrics, charts, and interactive elements.",
    link: "neura-dash",
    git_repo: getDashboardRepoUrl("neura-dash"),
  },
  {
    id: 2,
    image: Dashboard2,
    title: "Dashboard 2",
    description: "Description One Two Three",
    link: "neura-dash",
    git_repo: getDashboardRepoUrl("neura-dash"),
  },
  {
    id: 3,
    image: Dashboard3,
    title: "Dashboard 3",
    description: "Description One Two Three",
    link: "neura-dash",
    git_repo: getDashboardRepoUrl("neura-dash"),
  },
  {
    id: 4,
    image: Dashboard4,
    title: "Dashboard 4",
    description: "Description One Two Three",
    link: "neura-dash",
    git_repo: getDashboardRepoUrl("neura-dash"),
  },
] as const

export type Dashboard = (typeof dashboards)[number]
