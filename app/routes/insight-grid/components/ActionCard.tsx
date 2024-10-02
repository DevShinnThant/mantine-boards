import { Box, Text } from "@mantine/core"
import { Icon } from "iconsax-react"
import classes from "./styles/ActionCard.module.css"

interface Props {
  icon: Icon
  content: string
}

export default function ActionCard({ icon: Icon, content }: Props) {
  return (
    <Box className={classes.root}>
      <Icon size={20} />
      <Text className={classes.content} fz={13}>
        {content}
      </Text>
    </Box>
  )
}
