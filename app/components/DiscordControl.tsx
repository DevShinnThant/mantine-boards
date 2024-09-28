import { DiscordIcon } from "~/assets/icons"
import { HeaderControl } from "~/components/HeaderControl"
import classes from "./styles/DiscordControl.module.css"

interface DiscordControlProps {
  link: string
}

export function DiscordControl({ link }: DiscordControlProps) {
  return (
    <HeaderControl
      className={classes.discord}
      tooltip="Source code"
      component="a"
      color=""
      inherit={false}
      visibleFrom="md"
      target="_blank"
      href={link}
    >
      <DiscordIcon size={22} />
    </HeaderControl>
  )
}
