import { MantineLogoRounded } from "./MantineLogoRounded";
import { MantineLogoText } from "./MantineLogoText";
import { LogoProps } from "~/hooks/use-mantine-logo-colors";

export interface MantineLogoProps extends LogoProps {
  type?: "mark" | "full";
}

export function MantineLogo({ type, ...others }: MantineLogoProps) {
  if (type === "mark") {
    return <MantineLogoRounded {...others} />;
  }

  return <MantineLogoText {...others} />;
}
