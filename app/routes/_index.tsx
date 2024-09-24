import type { MetaFunction } from "@remix-run/node";
import HeaderHero from "~/layouts/HeaderHero";

export const meta: MetaFunction = () => {
  return [
    { title: "Mantine Dashboard" },
    {
      name: "Mantine Dashboard",
      content:
        "A feature-rich dashboard UI built using Mantine and powered by RemixJS.",
    },
  ];
};

export default function Index() {
  return <HeaderHero />;
}
