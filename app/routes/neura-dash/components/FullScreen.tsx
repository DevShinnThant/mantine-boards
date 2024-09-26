/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { Button } from "@mantine/core"
import { IconMaximize, IconMinimize } from "@tabler/icons-react"

export default function FullScreen() {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false)

  const handleFullScreen = () => {
    if (!isFullScreen) {
      const element = document.documentElement as any // Type assertion
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        element.webkitRequestFullscreen()
      } else if (element.msRequestFullscreen) {
        /* IE/Edge */
        element.msRequestFullscreen()
      }
    } else {
      const documentExitFullscreen =
        document.exitFullscreen ||
        // document.mozCancelFullScreen ||
        document.exitFullscreen ||
        document.exitFullscreen
      if (documentExitFullscreen) {
        documentExitFullscreen.call(document)
      }
    }
    setIsFullScreen(!isFullScreen)
  }

  useEffect(() => {
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullScreen(false)
      }
    }

    document.addEventListener("fullscreenchange", handleFullScreenChange)
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange)
    document.addEventListener("mozfullscreenchange", handleFullScreenChange)
    document.addEventListener("MSFullscreenChange", handleFullScreenChange)

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange)
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      )
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullScreenChange
      )
      document.removeEventListener("MSFullscreenChange", handleFullScreenChange)
    }
  }, [])

  return (
    <Button
      p={0}
      m={0}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        outline: "none",
        border: "none",
      }}
      variant="transparent"
      onClick={handleFullScreen}
    >
      {isFullScreen ? <IconMinimize size={20} /> : <IconMaximize size={20} />}
    </Button>
  )
}
