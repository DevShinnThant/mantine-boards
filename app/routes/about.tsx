import { Button } from "@mantine/core";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Button" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function About() {
  return (
    <div>
      <Button>This is a mantine button</Button>
    </div>
  );
}
