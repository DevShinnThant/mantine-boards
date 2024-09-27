import { TypeScriptIcon } from "~/assets/icons"
import { CssIcon } from "~/assets/icons/CssIcon"

export function getCodeFileIcon(fileName: string) {
  if (fileName.endsWith(".ts") || fileName.endsWith(".tsx")) {
    return <TypeScriptIcon size={18} />
  }

  if (fileName.endsWith(".css") || fileName.endsWith(".scss")) {
    return <CssIcon size={18} />
  }

  return null
}
