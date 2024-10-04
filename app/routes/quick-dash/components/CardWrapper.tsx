import { Card, CardProps } from "@mantine/core"
import classes from "./styles/CardWrapper.module.css"

interface Props extends CardProps {
  children: React.ReactNode
}

export default function CardWrapper({ children, ...rest }: Props) {
  return (
    <Card {...rest} className={classes.root} radius="lg">
      {children}
    </Card>
  )
}
