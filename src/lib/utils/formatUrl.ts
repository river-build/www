export const formatUrl = (url: string) => {
  return url.replace('https://', '').replace('http://', '')
}