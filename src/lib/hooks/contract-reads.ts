'use client'; 

import { getRiverAddress, RVR_TOKEN, RVR_AUTHORIZER } from "@/constants/contracts"
import { useAccount, useReadContracts, useReadContract } from "wagmi"

type Options = { enabled?: boolean }

export const useRiverToken = (queryOptions?: Options) => {
  const { address, chainId } = useAccount()
  return useReadContracts({
    allowFailure: false,
    contracts: [
      {
        address: chainId ? getRiverAddress(RVR_TOKEN, chainId) : undefined,
        abi: RVR_TOKEN.abi,
        functionName: 'balanceOf',
        args: address ? [address] : undefined,
      },
      {
        address: chainId ? getRiverAddress(RVR_TOKEN, chainId) : undefined,
        abi: RVR_TOKEN.abi,
        functionName: 'decimals',
      },
    ],
    query: {
      enabled: !!address && !!chainId,
      ...queryOptions,
    },
  })
}

export const useRewardsBalance = (queryOptions?: Options) => {
  const { address, chainId } = useAccount()
  return useReadContracts({
    allowFailure: false,
    contracts: [
      {
        address: chainId ? getRiverAddress(RVR_TOKEN, chainId) : undefined,
        abi: RVR_TOKEN.abi,
        functionName: 'balanceOf',
        args: address ? [address] : undefined,
      },
      {
        address: chainId ? getRiverAddress(RVR_TOKEN, chainId) : undefined,
        abi: RVR_TOKEN.abi,
        functionName: 'decimals',
      },
    ],
    query: {
      enabled: !!address && !!chainId,
      ...queryOptions,
    },
  })
}

export const useDelegatee = (queryOptions?: Options) => {
  const { address, chainId } = useAccount()
  return useReadContract({
    address: chainId ? getRiverAddress(RVR_TOKEN, chainId) : undefined,
    abi: RVR_TOKEN.abi,
    functionName: 'delegates',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && !!chainId,
      ...queryOptions,
    },
  })
}
export const useAuthorizedClaimer = (queryOptions?: Options) => {
  const { address, chainId } = useAccount()
  return useReadContract({
    address: chainId ? getRiverAddress(RVR_AUTHORIZER, chainId) : undefined,
    abi: RVR_AUTHORIZER.abi,
    functionName: 'getAuthorizedClaimer',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && !!chainId,
      ...queryOptions,
    },
  })
}
