export const formatUptime = (date: Date) => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  
  let uptime = ''
  if (days > 0) {
    uptime += `${days}d `
  }
  if (hours > 0) {
    uptime += `${hours}h `
  }
  if (minutes > 0) {
    uptime += `${minutes}m`
  }
  return uptime
}
