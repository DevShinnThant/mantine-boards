import { GithubIcon } from "~/assets/icons";
import { HeaderControl } from "~/components/HeaderControl";

interface GithubControlProps {
  link: string;
}

export function GithubControl({ link }: GithubControlProps) {
  return (
    <HeaderControl
      tooltip="Source code"
      component="a"
      visibleFrom="md"
      target="_blank"
      href={link}
    >
      <GithubIcon size={22} />
    </HeaderControl>
  );
}
