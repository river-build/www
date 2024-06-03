export const formatAddress = (address: `0x${string}`) => {
  return `${address.slice(0, 7)}...${address.slice(-4)}`
}