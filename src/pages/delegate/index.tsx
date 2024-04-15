import Layout from '@/components/Layout'
import BeaverAscii from '@/components/ascii-hero-image'
import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { Typography } from '@/components/ui/typography'
import { RVR_TOKEN_ADDRESS_SEPOLIA, riverAbi } from '@/constants/contracts'
import { useCopyToClipboard } from '@/lib/hooks/use-copy-to-clipboard'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { QueryKey, useQueryClient } from '@tanstack/react-query'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { Check, Copy } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { formatUnits, isAddress } from 'viem'
import {
  useAccount,
  useReadContract,
  useReadContracts,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi'
import { z } from 'zod'

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

type AddressProps = {
  address: `0x${string}`
}
const Address = ({ address }: AddressProps) => {
  const { copy, hasCopied } = useCopyToClipboard()

  useEffect(() => {
    console.log('copied', hasCopied)
  }, [hasCopied])
  return (
    <span className="flex items-center justify-center gap-2 text-white">
      {formatAddress(address)}
      {hasCopied ? (
        <Check className="h-4 w-4 text-green-300" />
      ) : (
        <button type="button" onClick={() => copy(address)}>
          <Copy className="h-4 w-4 text-gray-100" />
        </button>
      )}
    </span>
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

  const riverToken = useReadContracts({
    allowFailure: false,
    contracts: [
      {
        address: RVR_TOKEN_ADDRESS_SEPOLIA,
        abi: riverAbi,
        functionName: 'balanceOf',
        args: address ? [address] : undefined,
      },
      {
        address: RVR_TOKEN_ADDRESS_SEPOLIA,
        abi: riverAbi,
        functionName: 'decimals',
      },
    ],
    query: {
      enabled: !!address,
    },
  })

  const delegator = useReadContract({
    address: RVR_TOKEN_ADDRESS_SEPOLIA,
    abi: riverAbi,
    functionName: 'delegates',
    args: address ? [address] : undefined,
  })

  useEffect(() => {
    console.log('delegator', delegator.data)
  }, [delegator.data])

  return (
    <section
      className={cn(
        'hero-glow relative w-full overflow-x-clip bg-gray-90 md:min-h-screen',
        'flex w-full flex-col items-center',
        'pb-24 pt-[88px]',
      )}
    >
      <section className={cn('flex w-full flex-col gap-6 px-4', 'sm:max-w-lg')}>
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
            {address && <Address address={address} />}
          </div>
          <div className="flex justify-between">
            <span className="text-gray-20">RVR Balance:</span>
            <span className="text-white">
              {riverToken.isLoading ? (
                <Skeleton className="inline-block h-4 w-20" />
              ) : riverToken.data?.[0] && riverToken.data?.[1] ? (
                formatUnits(riverToken.data[0], riverToken.data[1])
              ) : (
                0
              )}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-20">Delegating to:</span>
            {/* TODO: add copy button */}
            {delegator.isLoading ? (
              <Skeleton className="inline-block h-4 w-32" />
            ) : delegator.data?.length ? (
              <Address address={delegator.data} />
            ) : null}
          </div>
          <div className="flex justify-between">
            <span className="text-gray-20">Authorized claimer:</span>
            {/* TODO: add copy button */}
            {delegator.isLoading ? <Skeleton className="inline-block h-4 w-32" /> : null}
          </div>
        </div>

        <DelegateForm delegatorsQueryKey={delegator.queryKey} />
        <AuthorizeForm authorizedClaimersQueryKey={undefined} />
      </section>
    </section>
  )
}

const formSchema = z.object({
  address: z.custom((value) => typeof value === 'string' && isAddress(value), {
    message: 'Invalid address',
  }),
})

type DelegateFormProps = {
  delegatorsQueryKey: QueryKey
}
const DelegateForm = ({ delegatorsQueryKey }: DelegateFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const qc = useQueryClient()
  const { data: hash, writeContract, isPending } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  useEffect(() => {
    if (isConfirmed) {
      qc.invalidateQueries({ queryKey: delegatorsQueryKey })
    }
  }, [isConfirmed])

  function onSubmit(form: z.infer<typeof formSchema>) {
    writeContract({
      abi: riverAbi,
      address: RVR_TOKEN_ADDRESS_SEPOLIA,
      functionName: 'delegate',
      args: [form.address],
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-2">
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Delegate to:</FormLabel>
              <FormControl>
                <Input placeholder="0x55555" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" isLoading={isPending || isConfirming} aria-label="Submit">
          {isConfirmed && <Check className="mr-2 h-4 w-4" />}
          {isConfirmed ? 'Delegated' : isPending || isConfirming ? 'Delegating...' : 'Delegate'}
        </Button>
      </form>
    </Form>
  )
}

type AuthorizeFormProps = {
  // TODO: remove undefined later
  authorizedClaimersQueryKey: QueryKey | undefined
}

const AuthorizeForm = ({ authorizedClaimersQueryKey }: AuthorizeFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const qc = useQueryClient()
  const {
    data: hash,
    writeContract,
    isPending,
  } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  useEffect(() => {
    if (isConfirmed) {
      qc.invalidateQueries({ queryKey: authorizedClaimersQueryKey })
    }
  }, [isConfirmed])

  function onSubmit(form: z.infer<typeof formSchema>) {
    // writeContract({
    //   abi: riverAbi,
    //   address: RVR_TOKEN_ADDRESS_SEPOLIA,
    //   functionName: 'authorizeClaimer',
    //   args: [form.address],
    // })
    console.log(form)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-2">
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Authorize claimer:</FormLabel>
              <FormControl>
                <Input placeholder="0x55555" autoComplete="off" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" isLoading={isPending} aria-label="Submit">
          {isConfirmed && <Check className="mr-2 h-4 w-4" />}
          {isConfirmed ? 'Authorized' : isPending || isConfirming ? 'Authorizing...' : 'Authorize'}
        </Button>
      </form>
    </Form>
  )
}

export default DelegatePage
