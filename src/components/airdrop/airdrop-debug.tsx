'use client'

import dropFacetAbi from '@/DropFacet.abi'
import { useEffect } from 'react'
import { useAccount, useReadContract, useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { Button } from '../ui/button'
import { Typography } from '../ui/typography'
import { toast } from '../ui/use-toast'
import deployments from './data/deployments.json'

const DEBUG_ADDRESS = '0x0000000000000000000000000000000000000000'

export const AirdropDebug = () => {
  const { address, chainId } = useAccount()

  const { data: claimCondition } = useReadContract({
    address: deployments.local_multi.base.addresses.riverAirdrop as `0x${string}`,
    abi: dropFacetAbi,
    functionName: `getActiveClaimConditionId`,
    query: {
      enabled: true,
    },
  })

  const { data: supplyClaimedByWallet } = useReadContract({
    address: deployments.local_multi.base.addresses.riverAirdrop as `0x${string}`,
    abi: dropFacetAbi,
    functionName: `getSupplyClaimedByWallet`,
    args: [DEBUG_ADDRESS, BigInt(0)],
    query: {
      enabled: true,
    },
  })

  useEffect(() => {
    console.log(`[airdrop-debug] supplyClaimedByWallet`, supplyClaimedByWallet)
  }, [supplyClaimedByWallet])

  useEffect(() => {
    console.log(`[airdrop-debug] claimCondition`, claimCondition)
  }, [claimCondition])

  const { data: allClaimConditions } = useReadContract({
    address: deployments.local_multi.base.addresses.riverAirdrop as `0x${string}`,
    abi: dropFacetAbi,
    functionName: `getClaimConditions`,
    query: {
      enabled: true,
    },
  })

  useEffect(() => {
    console.log(`[airdrop-debug] allClaimConditions`, allClaimConditions)
  }, [allClaimConditions])

  const {
    data: txHash,
    writeContract,
    isPending,
    isSuccess: isWriteSuccess,
    error: writeError,
  } = useWriteContract({
    mutation: {
      onError: (e) => {
        toast({
          title: 'Error',
          description: e.name,
        })
      },
    },
  })

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    error: transactionError,
    data: transactionData,
    failureReason,
    isError: isTransactionError,
  } = useWaitForTransactionReceipt({
    hash: txHash,
    chainId,
    query: {
      enabled: !!txHash,
    },
  })

  useEffect(() => {
    console.log(`[airdrop-debug] writeError`, writeError)
  }, [writeError])

  useEffect(() => {
    console.log(`[airdrop-debug] isWriteSuccess`, isWriteSuccess)
  }, [isWriteSuccess])

  useEffect(() => {
    console.log(`[airdrop-debug] txHash`, txHash)
  }, [txHash])

  useEffect(() => {
    console.log(`[airdrop-debug] isPending`, isPending)
  }, [isPending])

  const postClaim = async () => {
    try {
      // const claimCondition = await drop.dropFacet.read.getActiveClaimConditionId()
      // console.log(`ttt claimCondition`, claimCondition)
      // const signer = provider.getSigner()

      const proof = await fetch('/api/merkle-proof', {
        method: 'POST',
        body: JSON.stringify({
          claim: {
            address: DEBUG_ADDRESS,
            amount: '10000',
          },
        }),
      })

      const proofData = await proof.json()

      console.log(`[airdrop-debug] proofData`, proofData)

      writeContract({
        address: deployments.local_multi.base.addresses.riverAirdrop as `0x${string}`,
        abi: dropFacetAbi,
        functionName: `claimWithPenalty`,
        args: [
          {
            conditionId: BigInt(0), //claimCondition),
            account: DEBUG_ADDRESS,
            quantity: BigInt(1000000000000000000),
            proof: proofData.proof,
          },
          0,
        ],
      })
    } catch (e) {
      console.log(`[airdrop-debug] error`, e)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Typography className="text-white">
          Supply claimed by wallet: {supplyClaimedByWallet}
        </Typography>
      </div>
      <Button onClick={postClaim}>Claim your airdrop</Button>
      <pre className="text-white">
        {allClaimConditions && JSON.stringify(allClaimConditions, null, 2)}
      </pre>
    </div>
  )
}
