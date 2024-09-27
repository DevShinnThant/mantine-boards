import fs from "node:fs/promises"
import path from "path"

function removeReact(input: string): string {
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

export async function getDashboardCode(
  componentFolder: string
): Promise<FileContext[]> {
  const layoutsFolder = path.join(`app/routes/${componentFolder}/layouts`)
  const stylesFolder = path.join(layoutsFolder, "styles")

  try {
    // Fetch all .tsx and .ts files in the layouts folder
    const componentFiles = await fs.readdir(layoutsFolder)

    const filteredComponentFiles = componentFiles.filter(
      (file) =>
        file.endsWith(".tsx") || file.endsWith(".ts") || file === "styles"
    )

    // Fetch all .css or .module.css files in the styles folder
    const styleFiles = await fs.readdir(stylesFolder)

    const filteredStyleFiles = styleFiles.filter((file) =>
      file.endsWith(".css")
    )

    // Process the main component files (e.g., App.tsx, AppHeader.tsx, Navbar.tsx, SubNavBar.tsx)
    const componentFileContents = await Promise.all(
      filteredComponentFiles
        .filter((file) => file !== "styles")
        .map(async (file) => ({
          name: file,
          language: "tsx",
          code: removeReact(
            await fs.readFile(path.join(layoutsFolder, file), "utf-8")
          ),
        }))
    )

    // Process the style files (e.g., .module.css)
    const styleFileContents = await Promise.all(
      filteredStyleFiles.map(async (file) => ({
        name: file,
        language: "css",
        code: await fs.readFile(path.join(stylesFolder, file), "utf-8"),
      }))
    )

    // Combine component and style files
    const filesContent = [...componentFileContents, ...styleFileContents]

    return filesContent
  } catch (error) {
    console.error(
      `Error reading files from ${layoutsFolder} or ${stylesFolder}:`,
      error
    )
    throw error // Rethrow the error after logging
  }
}
