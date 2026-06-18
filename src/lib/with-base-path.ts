const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

function isAbsoluteUrl(path: string) {
  return /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(path) || path.startsWith('//')
}

export function withBasePath(path: string) {
  if (!BASE_PATH || !path) {
    return path
  }

  if (path.startsWith('#') || isAbsoluteUrl(path) || !path.startsWith('/')) {
    return path
  }

  if (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`)) {
    return path
  }

  return `${BASE_PATH}${path}`
}
