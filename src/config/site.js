// Keep public media and plain anchors inside the configured deployment directory.
export function sitePath(path) {
  const base = import.meta.env.BASE_URL
  if (!path?.startsWith('/') || path.startsWith('//') || path.startsWith(base)) return path
  return `${base}${path.slice(1)}`
}
