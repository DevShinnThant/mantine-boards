import { Anchor, Container, Group } from "@mantine/core"
import { MantineLogo } from "~/components/MantineLogo"
import classes from "./styles/Footer.module.css"

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Careers" },
]

export function Footer() {
  const items = links.map((link) => (
    <Anchor<"a">
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ))

  return (
    <div className={classes.footer}>
      <Container fluid className={classes.inner}>
        <MantineLogo color="black" size={28} />
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  )
}
