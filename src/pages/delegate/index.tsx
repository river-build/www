import Layout from '@/components/Layout'
import BeaverAscii from '@/components/ascii-hero-image'
import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import { Typography } from '@/components/ui/typography'
import { RVR_TOKEN_ADDRESS } from '@/constants/contracts'
import { cn } from '@/lib/utils'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import Image from 'next/image'
import { erc20Abi, formatUnits } from 'viem'
import { useAccount, useDisconnect, useReadContracts } from 'wagmi'

const DelegatePage = () => {
  const { isConnected } = useAccount()
  return (
    <Layout title="Delegate">
      {/* render favicon here */}
      {/* <Head>{renderMetaTags([...cmsData._site.faviconMetaTags])}</Head> */}

      <Header />

      {isConnected ? <DelegateSection /> : <ConnectSection />}
      <div className="fixed inset-x-0 -bottom-4 h-[200px] w-full opacity-55 md:-bottom-52 md:h-[340px]">
        <Image
          src="/images/hero-wave.webp"
          alt="hero image"
          className="object-cover"
          fill
          priority
          quality={90}
          loading="eager"
        />
      </div>
    </Layout>
  )
}

const formatAddress = (address: `0x${string}`) => {
  return `${address.slice(0, 7)}...${address.slice(-4)}`
}

const ConnectSection = () => {
  const { open } = useWeb3Modal()
  return (
    <section
      className={cn(
        'hero-glow relative w-full overflow-x-clip bg-gray-90',
        'flex w-full flex-col items-start justify-center gap-6',
        'px-4 py-24',
        'min-h-screen items-center',
      )}
    >
      <BeaverAscii />
      <div className="flex flex-col items-center gap-2">
        <Typography
          as="h1"
          size="4xl"
          className="text-[32px] font-semibold leading-[44px] text-gray-10"
        >
          Delegate
        </Typography>
        <Typography size="sm" as="span" className="text-gray-20">
          Delegate and authorize your votes
        </Typography>
      </div>
      <Button variant="primary" onClick={() => open()}>
        Connect Wallet
      </Button>

    </section>
  )
}
const DelegateSection = () => {
  const { address } = useAccount()

  const { disconnect } = useDisconnect()

  const { isLoading, error, data } = useReadContracts({
    allowFailure: false,
    contracts: [
      {
        address: RVR_TOKEN_ADDRESS,
        abi: erc20Abi,
        functionName: 'balanceOf',
        args: address ? [address] : undefined,
      },
      {
        address: RVR_TOKEN_ADDRESS,
        abi: erc20Abi,
        functionName: 'decimals',
      },
    ],
    query: {
      enabled: !!address,
    },
  })


  return (
    <section
      className={cn(
        'hero-glow relative w-full overflow-x-clip bg-gray-90 md:min-h-screen',
        'flex w-full flex-col items-center',
        'pb-24 pt-[88px]',
      )}
    >
      <section className={cn('flex w-full flex-col gap-6 px-4', 'sm:max-w-lg')}>
        {/* <Button variant="primary" onClick={() => disconnect()}>
          Disconnect Wallet
        </Button> */}
        <Typography
          as="h1"
          size="3xl"
          className="text-2xl font-semibold leading-[44px] text-gray-10"
        >
          Delegate
        </Typography>

        <div className="w-full rounded-3xl border border-solid border-gray-60 bg-gray-80 p-6">
          <div className="flex justify-between gap-4">
            <span className="text-gray-20">Connected:</span>
            <span className="text-white">{address && formatAddress(address)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-20">RVR Balance:</span>
            <span className="text-white">
              {isLoading ? (
                <Skeleton className="inline-block h-4 w-20" />
              ) : data?.[0] && data?.[1] ? (
                formatUnits(data[0], data[1])
              ) : (
                0
              )}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-20">Delegating to:</span>
            <span></span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-20">Authorized claimer:</span>
            <span></span>
          </div>
        </div>

        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="to-addr" className="text-white">
            Delegate to:
          </Label>
          <Input id="to-addr" placeholder="0x55555.." />
          <Button variant="primary" className="w-full">
            Delegate
          </Button>
        </div>
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="authorize-claimer" className="text-white">
            Authorize claimer:
          </Label>
          <Input id="authorize-claimer" placeholder="0x55555.." />
          <Button variant="primary" className="w-full">
            Delegate
          </Button>
        </div>
      </section>
    </section>
  )
}

export default DelegatePage
