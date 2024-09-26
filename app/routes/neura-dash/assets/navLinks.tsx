// Icons
import {
  Box1,
  Chart,
  ClipboardText,
  CodeCircle,
  ColorSwatch,
  Colorfilter,
  DocumentText,
  Element4,
  Graph,
  Icon,
  Map1,
  ShoppingCart,
  Sort,
  Speedometer,
} from "iconsax-react"

export interface NavLink {
  title: string
  label: string
  href: string
  icon: Icon
}

export interface SideLink extends NavLink {
  subs?: NavLink[]
}

export const sideLinks: SideLink[] = [
  {
    title: "Dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: Box1,
    subs: [
      {
        title: "Analytics",
        label: "Analytics",
        href: "/dashboard/analytics",
        icon: Chart,
      },
      {
        title: "Ecommerce",
        label: "Ecommerce",
        href: "/dashboard/expenses",
        icon: ShoppingCart,
      },
      {
        title: "Project",
        label: "Project",
        href: "/dashboard/project",
        icon: ClipboardText,
      },
    ],
  },
  {
    title: "Application",
    label: "Application",
    href: "/application",
    icon: Speedometer,
    subs: [
      {
        title: "Trips",
        label: "Trips",
        href: "/application/trips",
        icon: Chart,
      },
    ],
  },
  {
    title: "Components",
    label: "Components",
    href: "/components",
    icon: Colorfilter,
  },
  {
    title: "Form",
    label: "Form",
    href: "/form",
    icon: ColorSwatch,
  },
  {
    title: "Pages",
    label: "Pages",
    href: "/pages",
    icon: DocumentText,
  },
  {
    title: "Tables",
    label: "Tables",
    href: "/tables",
    icon: Element4,
  },
  {
    title: "Diagrams",
    label: "Diagrams",
    href: "/digrams",
    icon: Graph,
  },
  {
    title: "Charts",
    label: "Charts",
    href: "/charts",
    icon: Speedometer,
  },
  {
    title: "Maps",
    label: "Maps",
    href: "/maps",
    icon: Map1,
  },
  {
    title: "Icons",
    label: "Icons",
    href: "/icons",
    icon: CodeCircle,
  },
  {
    title: "MultiLevel",
    label: "MultiLevel",
    href: "/multi-level",
    icon: Sort,
  },
]
