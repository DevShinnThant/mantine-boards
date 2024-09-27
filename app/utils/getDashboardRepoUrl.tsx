const GIT_REPO = import.meta.env.VITE_GITHUB_REPO

export function getDashboardRepoUrl(folder: string) {
  const repoLink = `${GIT_REPO}/tree/main/app/routes/${folder}`
  return repoLink
}
