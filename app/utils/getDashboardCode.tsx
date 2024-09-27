import fs from "fs"
import path from "path"

function removeReact(input: string) {
  const lines = input.split("\n")

  if (lines[0].includes("import React from 'react';")) {
    lines.shift()
  } else if (lines[0].includes("import React")) {
    const remainingImports = lines[0].replace(/import React[^;]+;/, "")
    lines[0] = remainingImports
  }

  return lines.join("\n")
}

export type FileContext = {
  name: string
  language: string
  code: string
}

export function getDashboardCode(componentFolder: string): FileContext[] {
  const layoutsFolder = path.join(`app/routes/${componentFolder}/layouts`)
  const stylesFolder = path.join(layoutsFolder, "styles")

  // Fetch all .tsx and .ts files in the layouts folder
  const componentFiles = fs
    .readdirSync(layoutsFolder)
    .filter(
      (file) =>
        file.endsWith(".tsx") || file.endsWith(".ts") || file === "styles"
    )

  // Fetch all .css or .module.css files in the styles folder
  let styleFiles: string[] = []
  if (fs.existsSync(stylesFolder)) {
    styleFiles = fs
      .readdirSync(stylesFolder)
      .filter((file) => file.endsWith(".css"))
  }

  // Process the main component files (e.g., App.tsx, AppHeader.tsx, Navbar.tsx, SubNavBar.tsx)
  const componentFileContents = componentFiles
    .filter((file) => file !== "styles")
    .map((file) => ({
      name: file,
      language: "tsx",
      code: removeReact(
        fs.readFileSync(path.join(layoutsFolder, file), "utf-8")
      ),
    }))

  // Process the style files (e.g., .module.css)
  const styleFileContents = styleFiles.map((file) => ({
    name: file,
    language: "css",
    code: fs.readFileSync(path.join(stylesFolder, file), "utf-8"),
  }))

  // Combine component and style files
  const filesContent = [...componentFileContents, ...styleFileContents]

  return filesContent
}
