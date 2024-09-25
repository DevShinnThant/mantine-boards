import Dashboard1 from "~/assets/preview-images/dashboard-1.png";
import Dashboard4 from "~/assets/preview-images/dashboard-7.png";
import Dashboard3 from "~/assets/preview-images/dashboard-5.png";
import Dashboard2 from "~/assets/preview-images/dashboard-6.jpeg";

export const dashboards = [
  {
    id: 1,
    image: Dashboard1,
    title: "Dashboard 1",
    description: "Description One Two Three",
  },
  {
    id: 2,
    image: Dashboard2,
    title: "Dashboard 2",
    description: "Description One Two Three",
  },
  {
    id: 3,
    image: Dashboard3,
    title: "Dashboard 3",
    description: "Description One Two Three",
  },
  {
    id: 4,
    image: Dashboard4,
    title: "Dashboard 4",
    description: "Description One Two Three",
  },
];

export type Dashboard = (typeof dashboards)[number];
