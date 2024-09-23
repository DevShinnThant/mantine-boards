import { HeaderControl } from "~/components/HeaderControl";
import classes from "./styles/DiscordControl.module.css";
import { DiscordIcon } from "~/assets/icons";

interface DiscordControlProps {
  link: string;
}

export function DiscordControl({ link }: DiscordControlProps) {
  return (
    <HeaderControl
      tooltip="Discord"
      component="a"
      href={link}
      visibleFrom="md"
      className={classes.discord}
    >
      <DiscordIcon size={20} />
    </HeaderControl>
  );
}
