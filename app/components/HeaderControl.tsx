import {
  BoxProps,
  Tooltip,
  UnstyledButton,
  createPolymorphicComponent,
} from "@mantine/core"
import cx from "clsx"
import classes from "./styles/HeaderControl.module.css"

export interface HeaderControlProps extends BoxProps {
  tooltip: string
  "aria-label"?: string
  children: React.ReactNode
  inherit?: boolean
}

function _HeaderControl({
  tooltip,
  className,
  "aria-label": label,
  inherit = true,
  ...others
}: HeaderControlProps) {
  return (
    <Tooltip label={tooltip}>
      <UnstyledButton
        className={cx(classes.control, inherit && classes.colors, className)}
        aria-label={label || tooltip}
        {...others}
      />
    </Tooltip>
  )
}

export const HeaderControl = createPolymorphicComponent<
  "button",
  HeaderControlProps
>(_HeaderControl)
