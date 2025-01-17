import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Authorizer
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const authorizerAbi = [
  {
    type: 'error',
    inputs: [],
    name: 'AuthorizedClaimers_ClaimerAlreadyAuthorized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'authorizer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'claimer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AuthorizedClaimerChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'authorizer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AuthorizedClaimerRemoved',
  },
  {
    type: 'function',
    inputs: [{ name: 'claimer', internalType: 'address', type: 'address' }],
    name: 'authorizeClaimer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'authorizer', internalType: 'address', type: 'address' }],
    name: 'getAuthorizedClaimer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'removeAuthorizedClaimer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const authorizerAddress = {
  1: '0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05',
  11155111: '0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const authorizerConfig = {
  address: authorizerAddress,
  abi: authorizerAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DropFacet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const dropFacetAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'rewardsDistribution', internalType: 'address', type: 'address' },
    ],
    name: '__DropFacet_init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'condition',
        internalType: 'struct IDropFacetBase.ClaimCondition',
        type: 'tuple',
        components: [
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'startTimestamp', internalType: 'uint40', type: 'uint40' },
          { name: 'endTimestamp', internalType: 'uint40', type: 'uint40' },
          { name: 'penaltyBps', internalType: 'uint16', type: 'uint16' },
          {
            name: 'maxClaimableSupply',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'supplyClaimed', internalType: 'uint256', type: 'uint256' },
          { name: 'merkleRoot', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    name: 'addClaimCondition',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'claim',
        internalType: 'struct IDropFacetBase.Claim',
        type: 'tuple',
        components: [
          { name: 'conditionId', internalType: 'uint256', type: 'uint256' },
          { name: 'account', internalType: 'address', type: 'address' },
          { name: 'quantity', internalType: 'uint256', type: 'uint256' },
          { name: 'proof', internalType: 'bytes32[]', type: 'bytes32[]' },
        ],
      },
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'claimAndStake',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'claim',
        internalType: 'struct IDropFacetBase.Claim',
        type: 'tuple',
        components: [
          { name: 'conditionId', internalType: 'uint256', type: 'uint256' },
          { name: 'account', internalType: 'address', type: 'address' },
          { name: 'quantity', internalType: 'uint256', type: 'uint256' },
          { name: 'proof', internalType: 'bytes32[]', type: 'bytes32[]' },
        ],
      },
      { name: 'expectedPenaltyBps', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'claimWithPenalty',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getActiveClaimConditionId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'conditionId', internalType: 'uint256', type: 'uint256' }],
    name: 'getClaimConditionById',
    outputs: [
      {
        name: 'condition',
        internalType: 'struct IDropFacetBase.ClaimCondition',
        type: 'tuple',
        components: [
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'startTimestamp', internalType: 'uint40', type: 'uint40' },
          { name: 'endTimestamp', internalType: 'uint40', type: 'uint40' },
          { name: 'penaltyBps', internalType: 'uint16', type: 'uint16' },
          {
            name: 'maxClaimableSupply',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'supplyClaimed', internalType: 'uint256', type: 'uint256' },
          { name: 'merkleRoot', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getClaimConditions',
    outputs: [
      {
        name: '',
        internalType: 'struct IDropFacetBase.ClaimCondition[]',
        type: 'tuple[]',
        components: [
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'startTimestamp', internalType: 'uint40', type: 'uint40' },
          { name: 'endTimestamp', internalType: 'uint40', type: 'uint40' },
          { name: 'penaltyBps', internalType: 'uint16', type: 'uint16' },
          {
            name: 'maxClaimableSupply',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'supplyClaimed', internalType: 'uint256', type: 'uint256' },
          { name: 'merkleRoot', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'conditionId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getDepositIdByWallet',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'conditionId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getSupplyClaimedByWallet',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'conditions',
        internalType: 'struct IDropFacetBase.ClaimCondition[]',
        type: 'tuple[]',
        components: [
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'startTimestamp', internalType: 'uint40', type: 'uint40' },
          { name: 'endTimestamp', internalType: 'uint40', type: 'uint40' },
          { name: 'penaltyBps', internalType: 'uint16', type: 'uint16' },
          {
            name: 'maxClaimableSupply',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'supplyClaimed', internalType: 'uint256', type: 'uint256' },
          { name: 'merkleRoot', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    name: 'setClaimConditions',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'condition',
        internalType: 'struct IDropFacetBase.ClaimCondition',
        type: 'tuple',
        components: [
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'startTimestamp', internalType: 'uint40', type: 'uint40' },
          { name: 'endTimestamp', internalType: 'uint40', type: 'uint40' },
          { name: 'penaltyBps', internalType: 'uint16', type: 'uint16' },
          {
            name: 'maxClaimableSupply',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'supplyClaimed', internalType: 'uint256', type: 'uint256' },
          { name: 'merkleRoot', internalType: 'bytes32', type: 'bytes32' },
        ],
        indexed: false,
      },
    ],
    name: 'DropFacet_ClaimConditionAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'conditions',
        internalType: 'struct IDropFacetBase.ClaimCondition[]',
        type: 'tuple[]',
        components: [
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'startTimestamp', internalType: 'uint40', type: 'uint40' },
          { name: 'endTimestamp', internalType: 'uint40', type: 'uint40' },
          { name: 'penaltyBps', internalType: 'uint16', type: 'uint16' },
          {
            name: 'maxClaimableSupply',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'supplyClaimed', internalType: 'uint256', type: 'uint256' },
          { name: 'merkleRoot', internalType: 'bytes32', type: 'bytes32' },
        ],
        indexed: false,
      },
    ],
    name: 'DropFacet_ClaimConditionsUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'conditionId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'claimer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DropFacet_Claimed_And_Staked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'conditionId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'claimer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DropFacet_Claimed_WithPenalty',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'interfaceId',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: true,
      },
    ],
    name: 'InterfaceAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'interfaceId',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: true,
      },
    ],
    name: 'InterfaceRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  { type: 'error', inputs: [], name: 'DropFacet__AlreadyClaimed' },
  { type: 'error', inputs: [], name: 'DropFacet__CannotSetClaimConditions' },
  {
    type: 'error',
    inputs: [],
    name: 'DropFacet__ClaimConditionsNotInAscendingOrder',
  },
  { type: 'error', inputs: [], name: 'DropFacet__ClaimHasEnded' },
  { type: 'error', inputs: [], name: 'DropFacet__ClaimHasNotStarted' },
  { type: 'error', inputs: [], name: 'DropFacet__CurrencyNotSet' },
  { type: 'error', inputs: [], name: 'DropFacet__ExceedsMaxClaimableSupply' },
  { type: 'error', inputs: [], name: 'DropFacet__InsufficientBalance' },
  { type: 'error', inputs: [], name: 'DropFacet__InvalidProof' },
  { type: 'error', inputs: [], name: 'DropFacet__MerkleRootNotSet' },
  { type: 'error', inputs: [], name: 'DropFacet__NoActiveClaimCondition' },
  {
    type: 'error',
    inputs: [],
    name: 'DropFacet__QuantityMustBeGreaterThanZero',
  },
  { type: 'error', inputs: [], name: 'DropFacet__RewardsDistributionNotSet' },
  { type: 'error', inputs: [], name: 'DropFacet__UnexpectedPenaltyBps' },
  { type: 'error', inputs: [], name: 'Initializable_InInitializingState' },
  { type: 'error', inputs: [], name: 'Initializable_NotInInitializingState' },
  { type: 'error', inputs: [], name: 'Introspection_AlreadySupported' },
  { type: 'error', inputs: [], name: 'Introspection_NotSupported' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'Ownable__NotOwner',
  },
  { type: 'error', inputs: [], name: 'Ownable__ZeroAddress' },
] as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const dropFacetAddress = {
  8453: '0x7c0422b31401C936172C897802CF0373B35B7698',
  31337: '0x1fA02b2d6A771842690194Cf62D91bdd92BfE28d',
  84532: '0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F',
} as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const dropFacetConfig = {
  address: dropFacetAddress,
  abi: dropFacetAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NodeOperator
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const nodeOperatorAbi = [
  { type: 'error', inputs: [], name: 'ApprovalCallerNotOwnerNorApproved' },
  { type: 'error', inputs: [], name: 'ApprovalQueryForNonexistentToken' },
  { type: 'error', inputs: [], name: 'BalanceQueryForZeroAddress' },
  { type: 'error', inputs: [], name: 'Initializable_InInitializingState' },
  { type: 'error', inputs: [], name: 'Initializable_NotInInitializingState' },
  { type: 'error', inputs: [], name: 'Introspection_AlreadySupported' },
  { type: 'error', inputs: [], name: 'Introspection_NotSupported' },
  { type: 'error', inputs: [], name: 'MintERC2309QuantityExceedsLimit' },
  { type: 'error', inputs: [], name: 'MintToZeroAddress' },
  { type: 'error', inputs: [], name: 'MintZeroQuantity' },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'NodeOperator__AlreadyDelegated',
  },
  { type: 'error', inputs: [], name: 'NodeOperator__AlreadyRegistered' },
  { type: 'error', inputs: [], name: 'NodeOperator__ClaimAddressNotChanged' },
  { type: 'error', inputs: [], name: 'NodeOperator__InvalidAddress' },
  { type: 'error', inputs: [], name: 'NodeOperator__InvalidCommissionRate' },
  { type: 'error', inputs: [], name: 'NodeOperator__InvalidOperator' },
  { type: 'error', inputs: [], name: 'NodeOperator__InvalidSpace' },
  { type: 'error', inputs: [], name: 'NodeOperator__InvalidStakeRequirement' },
  { type: 'error', inputs: [], name: 'NodeOperator__InvalidStatusTransition' },
  { type: 'error', inputs: [], name: 'NodeOperator__NotClaimer' },
  { type: 'error', inputs: [], name: 'NodeOperator__NotEnoughStake' },
  { type: 'error', inputs: [], name: 'NodeOperator__NotRegistered' },
  { type: 'error', inputs: [], name: 'NodeOperator__NotTransferable' },
  { type: 'error', inputs: [], name: 'NodeOperator__StatusNotChanged' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'Ownable__NotOwner',
  },
  { type: 'error', inputs: [], name: 'Ownable__ZeroAddress' },
  { type: 'error', inputs: [], name: 'OwnerQueryForNonexistentToken' },
  { type: 'error', inputs: [], name: 'OwnershipNotInitializedForExtraData' },
  { type: 'error', inputs: [], name: 'TransferCallerNotOwnerNorApproved' },
  { type: 'error', inputs: [], name: 'TransferFromIncorrectOwner' },
  { type: 'error', inputs: [], name: 'TransferToNonERC721ReceiverImplementer' },
  { type: 'error', inputs: [], name: 'TransferToZeroAddress' },
  { type: 'error', inputs: [], name: 'URIQueryForNonexistentToken' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'ConsecutiveTransfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'interfaceId',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: true,
      },
    ],
    name: 'InterfaceAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'interfaceId',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: true,
      },
    ],
    name: 'InterfaceRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'claimAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OperatorClaimAddressChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'commission',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'OperatorCommissionChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OperatorRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newStatus',
        internalType: 'enum NodeOperatorStatus',
        type: 'uint8',
        indexed: true,
      },
    ],
    name: 'OperatorStatusChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: '__NodeOperator_init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'getClaimAddressForOperator',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'getCommissionRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'getOperatorStatus',
    outputs: [
      { name: '', internalType: 'enum NodeOperatorStatus', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getOperators',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'isOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'claimer', internalType: 'address', type: 'address' }],
    name: 'registerOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'claimer', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'setClaimAddressForOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'rateBps', internalType: 'uint256', type: 'uint256' }],
    name: 'setCommissionRate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      {
        name: 'newStatus',
        internalType: 'enum NodeOperatorStatus',
        type: 'uint8',
      },
    ],
    name: 'setOperatorStatus',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const nodeOperatorAddress = {
  8453: '0x7c0422b31401C936172C897802CF0373B35B7698',
  31337: '0x0B306BF915C4d645ff596e518fAf3F9669b97016',
  84532: '0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F',
} as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const nodeOperatorConfig = {
  address: nodeOperatorAddress,
  abi: nodeOperatorAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RewardsDistribution
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const rewardsDistributionAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'delegator', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'DelegationAlreadySet',
  },
  { type: 'error', inputs: [], name: 'DelegationNotSet' },
  { type: 'error', inputs: [], name: 'Initializable_InInitializingState' },
  { type: 'error', inputs: [], name: 'Initializable_NotInInitializingState' },
  { type: 'error', inputs: [], name: 'Introspection_AlreadySupported' },
  { type: 'error', inputs: [], name: 'Introspection_NotSupported' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  {
    type: 'error',
    inputs: [{ name: 'claimer', internalType: 'address', type: 'address' }],
    name: 'InvalidClaimer',
  },
  {
    type: 'error',
    inputs: [{ name: 'delegator', internalType: 'address', type: 'address' }],
    name: 'InvalidDelegator',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'quantity', internalType: 'uint256', type: 'uint256' }],
    name: 'InvalidQuantity',
  },
  { type: 'error', inputs: [], name: 'NewImplementationHasNoCode' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'Ownable__NotOwner',
  },
  { type: 'error', inputs: [], name: 'Ownable__ZeroAddress' },
  {
    type: 'error',
    inputs: [],
    name: 'RewardsDistribution__CannotWithdrawFromSelf',
  },
  { type: 'error', inputs: [], name: 'RewardsDistribution__ExpiredDeadline' },
  { type: 'error', inputs: [], name: 'RewardsDistribution__InvalidSignature' },
  {
    type: 'error',
    inputs: [],
    name: 'RewardsDistribution__NoPendingWithdrawal',
  },
  { type: 'error', inputs: [], name: 'RewardsDistribution__NotActiveOperator' },
  { type: 'error', inputs: [], name: 'RewardsDistribution__NotBeneficiary' },
  { type: 'error', inputs: [], name: 'RewardsDistribution__NotClaimer' },
  { type: 'error', inputs: [], name: 'RewardsDistribution__NotDepositOwner' },
  {
    type: 'error',
    inputs: [],
    name: 'RewardsDistribution__NotOperatorOrSpace',
  },
  { type: 'error', inputs: [], name: 'RewardsDistribution__NotRewardNotifier' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'depositId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'newBeneficiary',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ChangeBeneficiary',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beneficiary',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'reward',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ClaimReward',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'claimer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ClaimerSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'depositId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'delegatee',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proxy',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'DelegationProxyDeployed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegationRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'quantity',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegationSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'depositId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint96',
        type: 'uint96',
        indexed: false,
      },
    ],
    name: 'IncreaseStake',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'depositId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint96',
        type: 'uint96',
        indexed: false,
      },
    ],
    name: 'InitiateWithdraw',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'interfaceId',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: true,
      },
    ],
    name: 'InterfaceAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'interfaceId',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: true,
      },
    ],
    name: 'InterfaceRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'notifier',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'reward',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NotifyRewardAmount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'depositId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'delegatee',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Redelegate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'notifier',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'enabled', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'RewardNotifierSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'stakeToken',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'rewardToken',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'rewardDuration',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RewardsDistributionInitialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'space',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'scaledReward',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SpaceRewardsSwept',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'delegatee',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'beneficiary',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'depositId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint96',
        type: 'uint96',
        indexed: false,
      },
    ],
    name: 'Stake',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'depositId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint96',
        type: 'uint96',
        indexed: false,
      },
    ],
    name: 'Withdraw',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stakeToken', internalType: 'address', type: 'address' },
      { name: 'rewardToken', internalType: 'address', type: 'address' },
      { name: 'rewardDuration', internalType: 'uint256', type: 'uint256' },
    ],
    name: '__RewardsDistribution_init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'depositId', internalType: 'uint256', type: 'uint256' },
      { name: 'newBeneficiary', internalType: 'address', type: 'address' },
    ],
    name: 'changeBeneficiary',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'beneficiary', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'claimReward',
    outputs: [{ name: 'reward', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'beneficiary', internalType: 'address', type: 'address' }],
    name: 'currentReward',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'currentRewardPerTokenAccumulated',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'currentSpaceDelegationReward',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'depositId', internalType: 'uint256', type: 'uint256' }],
    name: 'delegationProxyById',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'depositId', internalType: 'uint256', type: 'uint256' }],
    name: 'depositById',
    outputs: [
      {
        name: 'deposit',
        internalType: 'struct StakingRewards.Deposit',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint96', type: 'uint96' },
          { name: 'owner', internalType: 'address', type: 'address' },
          {
            name: 'commissionEarningPower',
            internalType: 'uint96',
            type: 'uint96',
          },
          { name: 'delegatee', internalType: 'address', type: 'address' },
          { name: 'pendingWithdrawal', internalType: 'uint96', type: 'uint96' },
          { name: 'beneficiary', internalType: 'address', type: 'address' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'depositor', internalType: 'address', type: 'address' }],
    name: 'getDepositsByDepositor',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'implementation',
    outputs: [{ name: 'result', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'depositId', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint96', type: 'uint96' },
    ],
    name: 'increaseStake',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'depositId', internalType: 'uint256', type: 'uint256' }],
    name: 'initiateWithdraw',
    outputs: [{ name: 'amount', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'notifier', internalType: 'address', type: 'address' }],
    name: 'isRewardNotifier',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastTimeRewardDistributed',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'reward', internalType: 'uint256', type: 'uint256' }],
    name: 'notifyRewardAmount',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint96', type: 'uint96' },
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'beneficiary', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permitAndStake',
    outputs: [{ name: 'depositId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'depositId', internalType: 'uint256', type: 'uint256' },
      { name: 'delegatee', internalType: 'address', type: 'address' },
    ],
    name: 'redelegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'notifier', internalType: 'address', type: 'address' },
      { name: 'enabled', internalType: 'bool', type: 'bool' },
    ],
    name: 'setRewardNotifier',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint96', type: 'uint96' },
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'beneficiary', internalType: 'address', type: 'address' },
    ],
    name: 'stake',
    outputs: [{ name: 'depositId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint96', type: 'uint96' },
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'beneficiary', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'stakeOnBehalf',
    outputs: [{ name: 'depositId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'depositor', internalType: 'address', type: 'address' }],
    name: 'stakedByDepositor',
    outputs: [{ name: 'amount', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stakingState',
    outputs: [
      {
        name: 'state',
        internalType: 'struct IRewardsDistributionBase.StakingState',
        type: 'tuple',
        components: [
          { name: 'riverToken', internalType: 'address', type: 'address' },
          { name: 'totalStaked', internalType: 'uint96', type: 'uint96' },
          { name: 'rewardDuration', internalType: 'uint256', type: 'uint256' },
          { name: 'rewardEndTime', internalType: 'uint256', type: 'uint256' },
          { name: 'lastUpdateTime', internalType: 'uint256', type: 'uint256' },
          { name: 'rewardRate', internalType: 'uint256', type: 'uint256' },
          {
            name: 'rewardPerTokenAccumulated',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'nextDepositId', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'beneficiary', internalType: 'address', type: 'address' }],
    name: 'treasureByBeneficiary',
    outputs: [
      {
        name: 'treasure',
        internalType: 'struct StakingRewards.Treasure',
        type: 'tuple',
        components: [
          { name: 'earningPower', internalType: 'uint96', type: 'uint96' },
          {
            name: 'rewardPerTokenAccumulated',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'unclaimedRewardSnapshot',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgradeDelegationProxy',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'depositId', internalType: 'uint256', type: 'uint256' }],
    name: 'withdraw',
    outputs: [{ name: 'amount', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const rewardsDistributionAddress = {
  8453: '0x7c0422b31401C936172C897802CF0373B35B7698',
  31337: '0x0B306BF915C4d645ff596e518fAf3F9669b97016',
  84532: '0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F',
} as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const rewardsDistributionConfig = {
  address: rewardsDistributionAddress,
  abi: rewardsDistributionAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RiverToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const riverTokenAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_bridge', internalType: 'address', type: 'address' },
      { name: '_remoteToken', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'CheckpointUnorderedInsertion' },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'increasedSupply', internalType: 'uint256', type: 'uint256' },
      { name: 'cap', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20ExceededSafeSupply',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC2612ExpiredSignature',
  },
  {
    type: 'error',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC2612InvalidSigner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'clock', internalType: 'uint48', type: 'uint48' },
    ],
    name: 'ERC5805FutureLookup',
  },
  { type: 'error', inputs: [], name: 'ERC6372InconsistentClock' },
  { type: 'error', inputs: [], name: 'Initializable_InInitializingState' },
  { type: 'error', inputs: [], name: 'Initializable_NotInInitializingState' },
  { type: 'error', inputs: [], name: 'Introspection_AlreadySupported' },
  { type: 'error', inputs: [], name: 'Introspection_NotSupported' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'LockNotAuthorized' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'River__DelegateeSameAsCurrent' },
  { type: 'error', inputs: [], name: 'River__TransferLockEnabled' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'interfaceId',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: true,
      },
    ],
    name: 'InterfaceAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'interfaceId',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: true,
      },
    ],
    name: 'InterfaceRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'caller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'enabled', internalType: 'bool', type: 'bool', indexed: true },
      {
        name: 'cooldown',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LockUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'threshold',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokenThresholdSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: '__Introspection_init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'cooldown', internalType: 'uint256', type: 'uint256' }],
    name: '__LockFacet_init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'bridge',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'pos', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'checkpoints',
    outputs: [
      {
        name: '',
        internalType: 'struct Checkpoints.Checkpoint208',
        type: 'tuple',
        components: [
          { name: '_key', internalType: 'uint48', type: 'uint48' },
          { name: '_value', internalType: 'uint208', type: 'uint208' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'disableLock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'enableLock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getDelegationTimeForDelegator',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getDelegators',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getDelegatorsByDelegatee',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isLockEnabled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'l1Token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'l2Bridge',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'lockCooldown',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'numCheckpoints',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'remoteToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'cooldown', internalType: 'uint256', type: 'uint256' }],
    name: 'setLockCooldown',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
] as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const riverTokenAddress = {
  8453: '0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920',
  84532: '0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0',
} as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const riverTokenConfig = {
  address: riverTokenAddress,
  abi: riverTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link authorizerAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useReadAuthorizer = /*#__PURE__*/ createUseReadContract({
  abi: authorizerAbi,
  address: authorizerAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link authorizerAbi}__ and `functionName` set to `"getAuthorizedClaimer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useReadAuthorizerGetAuthorizedClaimer =
  /*#__PURE__*/ createUseReadContract({
    abi: authorizerAbi,
    address: authorizerAddress,
    functionName: 'getAuthorizedClaimer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link authorizerAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useWriteAuthorizer = /*#__PURE__*/ createUseWriteContract({
  abi: authorizerAbi,
  address: authorizerAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link authorizerAbi}__ and `functionName` set to `"authorizeClaimer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useWriteAuthorizerAuthorizeClaimer =
  /*#__PURE__*/ createUseWriteContract({
    abi: authorizerAbi,
    address: authorizerAddress,
    functionName: 'authorizeClaimer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link authorizerAbi}__ and `functionName` set to `"removeAuthorizedClaimer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useWriteAuthorizerRemoveAuthorizedClaimer =
  /*#__PURE__*/ createUseWriteContract({
    abi: authorizerAbi,
    address: authorizerAddress,
    functionName: 'removeAuthorizedClaimer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link authorizerAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useSimulateAuthorizer = /*#__PURE__*/ createUseSimulateContract({
  abi: authorizerAbi,
  address: authorizerAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link authorizerAbi}__ and `functionName` set to `"authorizeClaimer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useSimulateAuthorizerAuthorizeClaimer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: authorizerAbi,
    address: authorizerAddress,
    functionName: 'authorizeClaimer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link authorizerAbi}__ and `functionName` set to `"removeAuthorizedClaimer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useSimulateAuthorizerRemoveAuthorizedClaimer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: authorizerAbi,
    address: authorizerAddress,
    functionName: 'removeAuthorizedClaimer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link authorizerAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useWatchAuthorizerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: authorizerAbi,
    address: authorizerAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link authorizerAbi}__ and `eventName` set to `"AuthorizedClaimerChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useWatchAuthorizerAuthorizedClaimerChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: authorizerAbi,
    address: authorizerAddress,
    eventName: 'AuthorizedClaimerChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link authorizerAbi}__ and `eventName` set to `"AuthorizedClaimerRemoved"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useWatchAuthorizerAuthorizedClaimerRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: authorizerAbi,
    address: authorizerAddress,
    eventName: 'AuthorizedClaimerRemoved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropFacetAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadDropFacet = /*#__PURE__*/ createUseReadContract({
  abi: dropFacetAbi,
  address: dropFacetAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropFacetAbi}__ and `functionName` set to `"getActiveClaimConditionId"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadDropFacetGetActiveClaimConditionId =
  /*#__PURE__*/ createUseReadContract({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    functionName: 'getActiveClaimConditionId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropFacetAbi}__ and `functionName` set to `"getClaimConditionById"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadDropFacetGetClaimConditionById =
  /*#__PURE__*/ createUseReadContract({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    functionName: 'getClaimConditionById',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropFacetAbi}__ and `functionName` set to `"getClaimConditions"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadDropFacetGetClaimConditions =
  /*#__PURE__*/ createUseReadContract({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    functionName: 'getClaimConditions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropFacetAbi}__ and `functionName` set to `"getDepositIdByWallet"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadDropFacetGetDepositIdByWallet =
  /*#__PURE__*/ createUseReadContract({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    functionName: 'getDepositIdByWallet',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dropFacetAbi}__ and `functionName` set to `"getSupplyClaimedByWallet"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadDropFacetGetSupplyClaimedByWallet =
  /*#__PURE__*/ createUseReadContract({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    functionName: 'getSupplyClaimedByWallet',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropFacetAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteDropFacet = /*#__PURE__*/ createUseWriteContract({
  abi: dropFacetAbi,
  address: dropFacetAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropFacetAbi}__ and `functionName` set to `"__DropFacet_init"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteDropFacetDropFacetInit =
  /*#__PURE__*/ createUseWriteContract({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    functionName: '__DropFacet_init',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropFacetAbi}__ and `functionName` set to `"addClaimCondition"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteDropFacetAddClaimCondition =
  /*#__PURE__*/ createUseWriteContract({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    functionName: 'addClaimCondition',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropFacetAbi}__ and `functionName` set to `"claimAndStake"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteDropFacetClaimAndStake =
  /*#__PURE__*/ createUseWriteContract({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    functionName: 'claimAndStake',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropFacetAbi}__ and `functionName` set to `"claimWithPenalty"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteDropFacetClaimWithPenalty =
  /*#__PURE__*/ createUseWriteContract({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    functionName: 'claimWithPenalty',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dropFacetAbi}__ and `functionName` set to `"setClaimConditions"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteDropFacetSetClaimConditions =
  /*#__PURE__*/ createUseWriteContract({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    functionName: 'setClaimConditions',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropFacetAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateDropFacet = /*#__PURE__*/ createUseSimulateContract({
  abi: dropFacetAbi,
  address: dropFacetAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropFacetAbi}__ and `functionName` set to `"__DropFacet_init"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateDropFacetDropFacetInit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    functionName: '__DropFacet_init',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropFacetAbi}__ and `functionName` set to `"addClaimCondition"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateDropFacetAddClaimCondition =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    functionName: 'addClaimCondition',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropFacetAbi}__ and `functionName` set to `"claimAndStake"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateDropFacetClaimAndStake =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    functionName: 'claimAndStake',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropFacetAbi}__ and `functionName` set to `"claimWithPenalty"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateDropFacetClaimWithPenalty =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    functionName: 'claimWithPenalty',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dropFacetAbi}__ and `functionName` set to `"setClaimConditions"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateDropFacetSetClaimConditions =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    functionName: 'setClaimConditions',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dropFacetAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchDropFacetEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: dropFacetAbi, address: dropFacetAddress },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dropFacetAbi}__ and `eventName` set to `"DropFacet_ClaimConditionAdded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchDropFacetDropFacetClaimConditionAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    eventName: 'DropFacet_ClaimConditionAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dropFacetAbi}__ and `eventName` set to `"DropFacet_ClaimConditionsUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchDropFacetDropFacetClaimConditionsUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    eventName: 'DropFacet_ClaimConditionsUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dropFacetAbi}__ and `eventName` set to `"DropFacet_Claimed_And_Staked"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchDropFacetDropFacetClaimedAndStakedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    eventName: 'DropFacet_Claimed_And_Staked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dropFacetAbi}__ and `eventName` set to `"DropFacet_Claimed_WithPenalty"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchDropFacetDropFacetClaimedWithPenaltyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    eventName: 'DropFacet_Claimed_WithPenalty',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dropFacetAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchDropFacetInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dropFacetAbi}__ and `eventName` set to `"InterfaceAdded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchDropFacetInterfaceAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    eventName: 'InterfaceAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dropFacetAbi}__ and `eventName` set to `"InterfaceRemoved"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchDropFacetInterfaceRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    eventName: 'InterfaceRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dropFacetAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchDropFacetOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dropFacetAbi,
    address: dropFacetAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nodeOperatorAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadNodeOperator = /*#__PURE__*/ createUseReadContract({
  abi: nodeOperatorAbi,
  address: nodeOperatorAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nodeOperatorAbi}__ and `functionName` set to `"getClaimAddressForOperator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadNodeOperatorGetClaimAddressForOperator =
  /*#__PURE__*/ createUseReadContract({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    functionName: 'getClaimAddressForOperator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nodeOperatorAbi}__ and `functionName` set to `"getCommissionRate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadNodeOperatorGetCommissionRate =
  /*#__PURE__*/ createUseReadContract({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    functionName: 'getCommissionRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nodeOperatorAbi}__ and `functionName` set to `"getOperatorStatus"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadNodeOperatorGetOperatorStatus =
  /*#__PURE__*/ createUseReadContract({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    functionName: 'getOperatorStatus',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nodeOperatorAbi}__ and `functionName` set to `"getOperators"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadNodeOperatorGetOperators =
  /*#__PURE__*/ createUseReadContract({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    functionName: 'getOperators',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nodeOperatorAbi}__ and `functionName` set to `"isOperator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadNodeOperatorIsOperator =
  /*#__PURE__*/ createUseReadContract({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    functionName: 'isOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nodeOperatorAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteNodeOperator = /*#__PURE__*/ createUseWriteContract({
  abi: nodeOperatorAbi,
  address: nodeOperatorAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nodeOperatorAbi}__ and `functionName` set to `"__NodeOperator_init"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteNodeOperatorNodeOperatorInit =
  /*#__PURE__*/ createUseWriteContract({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    functionName: '__NodeOperator_init',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nodeOperatorAbi}__ and `functionName` set to `"registerOperator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteNodeOperatorRegisterOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    functionName: 'registerOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nodeOperatorAbi}__ and `functionName` set to `"setClaimAddressForOperator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteNodeOperatorSetClaimAddressForOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    functionName: 'setClaimAddressForOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nodeOperatorAbi}__ and `functionName` set to `"setCommissionRate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteNodeOperatorSetCommissionRate =
  /*#__PURE__*/ createUseWriteContract({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    functionName: 'setCommissionRate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nodeOperatorAbi}__ and `functionName` set to `"setOperatorStatus"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteNodeOperatorSetOperatorStatus =
  /*#__PURE__*/ createUseWriteContract({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    functionName: 'setOperatorStatus',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nodeOperatorAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateNodeOperator = /*#__PURE__*/ createUseSimulateContract({
  abi: nodeOperatorAbi,
  address: nodeOperatorAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nodeOperatorAbi}__ and `functionName` set to `"__NodeOperator_init"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateNodeOperatorNodeOperatorInit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    functionName: '__NodeOperator_init',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nodeOperatorAbi}__ and `functionName` set to `"registerOperator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateNodeOperatorRegisterOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    functionName: 'registerOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nodeOperatorAbi}__ and `functionName` set to `"setClaimAddressForOperator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateNodeOperatorSetClaimAddressForOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    functionName: 'setClaimAddressForOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nodeOperatorAbi}__ and `functionName` set to `"setCommissionRate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateNodeOperatorSetCommissionRate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    functionName: 'setCommissionRate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nodeOperatorAbi}__ and `functionName` set to `"setOperatorStatus"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateNodeOperatorSetOperatorStatus =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    functionName: 'setOperatorStatus',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nodeOperatorAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchNodeOperatorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nodeOperatorAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchNodeOperatorApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nodeOperatorAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchNodeOperatorApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nodeOperatorAbi}__ and `eventName` set to `"ConsecutiveTransfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchNodeOperatorConsecutiveTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    eventName: 'ConsecutiveTransfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nodeOperatorAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchNodeOperatorInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nodeOperatorAbi}__ and `eventName` set to `"InterfaceAdded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchNodeOperatorInterfaceAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    eventName: 'InterfaceAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nodeOperatorAbi}__ and `eventName` set to `"InterfaceRemoved"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchNodeOperatorInterfaceRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    eventName: 'InterfaceRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nodeOperatorAbi}__ and `eventName` set to `"OperatorClaimAddressChanged"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchNodeOperatorOperatorClaimAddressChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    eventName: 'OperatorClaimAddressChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nodeOperatorAbi}__ and `eventName` set to `"OperatorCommissionChanged"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchNodeOperatorOperatorCommissionChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    eventName: 'OperatorCommissionChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nodeOperatorAbi}__ and `eventName` set to `"OperatorRegistered"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchNodeOperatorOperatorRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    eventName: 'OperatorRegistered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nodeOperatorAbi}__ and `eventName` set to `"OperatorStatusChanged"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchNodeOperatorOperatorStatusChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    eventName: 'OperatorStatusChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nodeOperatorAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchNodeOperatorOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nodeOperatorAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchNodeOperatorTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nodeOperatorAbi,
    address: nodeOperatorAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsDistributionAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadRewardsDistribution = /*#__PURE__*/ createUseReadContract({
  abi: rewardsDistributionAbi,
  address: rewardsDistributionAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"currentReward"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadRewardsDistributionCurrentReward =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'currentReward',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"currentRewardPerTokenAccumulated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadRewardsDistributionCurrentRewardPerTokenAccumulated =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'currentRewardPerTokenAccumulated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"currentSpaceDelegationReward"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadRewardsDistributionCurrentSpaceDelegationReward =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'currentSpaceDelegationReward',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"delegationProxyById"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadRewardsDistributionDelegationProxyById =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'delegationProxyById',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"depositById"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadRewardsDistributionDepositById =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'depositById',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"getDepositsByDepositor"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadRewardsDistributionGetDepositsByDepositor =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'getDepositsByDepositor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"implementation"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadRewardsDistributionImplementation =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'implementation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"isRewardNotifier"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadRewardsDistributionIsRewardNotifier =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'isRewardNotifier',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"lastTimeRewardDistributed"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadRewardsDistributionLastTimeRewardDistributed =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'lastTimeRewardDistributed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"stakedByDepositor"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadRewardsDistributionStakedByDepositor =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'stakedByDepositor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"stakingState"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadRewardsDistributionStakingState =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'stakingState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"treasureByBeneficiary"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadRewardsDistributionTreasureByBeneficiary =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'treasureByBeneficiary',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsDistributionAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRewardsDistribution = /*#__PURE__*/ createUseWriteContract(
  { abi: rewardsDistributionAbi, address: rewardsDistributionAddress },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"__RewardsDistribution_init"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRewardsDistributionRewardsDistributionInit =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: '__RewardsDistribution_init',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"changeBeneficiary"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRewardsDistributionChangeBeneficiary =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'changeBeneficiary',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"claimReward"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRewardsDistributionClaimReward =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'claimReward',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"increaseStake"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRewardsDistributionIncreaseStake =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'increaseStake',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"initiateWithdraw"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRewardsDistributionInitiateWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'initiateWithdraw',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"notifyRewardAmount"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRewardsDistributionNotifyRewardAmount =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'notifyRewardAmount',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"permitAndStake"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRewardsDistributionPermitAndStake =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'permitAndStake',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"redelegate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRewardsDistributionRedelegate =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'redelegate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"setRewardNotifier"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRewardsDistributionSetRewardNotifier =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'setRewardNotifier',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"stake"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRewardsDistributionStake =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'stake',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"stakeOnBehalf"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRewardsDistributionStakeOnBehalf =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'stakeOnBehalf',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"upgradeDelegationProxy"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRewardsDistributionUpgradeDelegationProxy =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'upgradeDelegationProxy',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"withdraw"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRewardsDistributionWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsDistributionAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRewardsDistribution =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"__RewardsDistribution_init"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRewardsDistributionRewardsDistributionInit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: '__RewardsDistribution_init',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"changeBeneficiary"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRewardsDistributionChangeBeneficiary =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'changeBeneficiary',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"claimReward"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRewardsDistributionClaimReward =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'claimReward',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"increaseStake"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRewardsDistributionIncreaseStake =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'increaseStake',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"initiateWithdraw"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRewardsDistributionInitiateWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'initiateWithdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"notifyRewardAmount"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRewardsDistributionNotifyRewardAmount =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'notifyRewardAmount',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"permitAndStake"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRewardsDistributionPermitAndStake =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'permitAndStake',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"redelegate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRewardsDistributionRedelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'redelegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"setRewardNotifier"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRewardsDistributionSetRewardNotifier =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'setRewardNotifier',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"stake"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRewardsDistributionStake =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'stake',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"stakeOnBehalf"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRewardsDistributionStakeOnBehalf =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'stakeOnBehalf',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"upgradeDelegationProxy"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRewardsDistributionUpgradeDelegationProxy =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'upgradeDelegationProxy',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `functionName` set to `"withdraw"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRewardsDistributionWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `eventName` set to `"ChangeBeneficiary"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionChangeBeneficiaryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    eventName: 'ChangeBeneficiary',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `eventName` set to `"ClaimReward"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionClaimRewardEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    eventName: 'ClaimReward',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `eventName` set to `"ClaimerSet"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionClaimerSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    eventName: 'ClaimerSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `eventName` set to `"DelegationProxyDeployed"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionDelegationProxyDeployedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    eventName: 'DelegationProxyDeployed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `eventName` set to `"DelegationRemoved"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionDelegationRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    eventName: 'DelegationRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `eventName` set to `"DelegationSet"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionDelegationSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    eventName: 'DelegationSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `eventName` set to `"IncreaseStake"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionIncreaseStakeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    eventName: 'IncreaseStake',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `eventName` set to `"InitiateWithdraw"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionInitiateWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    eventName: 'InitiateWithdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `eventName` set to `"InterfaceAdded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionInterfaceAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    eventName: 'InterfaceAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `eventName` set to `"InterfaceRemoved"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionInterfaceRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    eventName: 'InterfaceRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `eventName` set to `"NotifyRewardAmount"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionNotifyRewardAmountEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    eventName: 'NotifyRewardAmount',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `eventName` set to `"Redelegate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionRedelegateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    eventName: 'Redelegate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `eventName` set to `"RewardNotifierSet"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionRewardNotifierSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    eventName: 'RewardNotifierSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `eventName` set to `"RewardsDistributionInitialized"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionRewardsDistributionInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    eventName: 'RewardsDistributionInitialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `eventName` set to `"SpaceRewardsSwept"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionSpaceRewardsSweptEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    eventName: 'SpaceRewardsSwept',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `eventName` set to `"Stake"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionStakeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    eventName: 'Stake',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rewardsDistributionAbi}__ and `eventName` set to `"Withdraw"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * -
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRewardsDistributionWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress,
    eventName: 'Withdraw',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverToken = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"CLOCK_MODE"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenClockMode = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"bridge"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenBridge = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'bridge',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"checkpoints"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenCheckpoints = /*#__PURE__*/ createUseReadContract(
  {
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'checkpoints',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"clock"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenClock = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'clock',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"delegates"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenDelegates = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'delegates',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"eip712Domain"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenEip712Domain =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"getDelegationTimeForDelegator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenGetDelegationTimeForDelegator =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'getDelegationTimeForDelegator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"getDelegators"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenGetDelegators =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'getDelegators',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"getDelegatorsByDelegatee"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenGetDelegatorsByDelegatee =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'getDelegatorsByDelegatee',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"getPastTotalSupply"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenGetPastTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'getPastTotalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"getPastVotes"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenGetPastVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'getPastVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"getVotes"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenGetVotes = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"isLockEnabled"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenIsLockEnabled =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'isLockEnabled',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"l1Token"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenL1Token = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'l1Token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"l2Bridge"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenL2Bridge = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'l2Bridge',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"lockCooldown"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenLockCooldown =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'lockCooldown',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenName = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"nonces"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenNonces = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"numCheckpoints"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenNumCheckpoints =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'numCheckpoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenOwner = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"remoteToken"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenRemoteToken = /*#__PURE__*/ createUseReadContract(
  {
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'remoteToken',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenTotalSupply = /*#__PURE__*/ createUseReadContract(
  {
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'totalSupply',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"version"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useReadRiverTokenVersion = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'version',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWriteRiverToken = /*#__PURE__*/ createUseWriteContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"__Introspection_init"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWriteRiverTokenIntrospectionInit =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: '__Introspection_init',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"__LockFacet_init"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWriteRiverTokenLockFacetInit =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: '__LockFacet_init',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWriteRiverTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWriteRiverTokenBurn = /*#__PURE__*/ createUseWriteContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWriteRiverTokenDelegate = /*#__PURE__*/ createUseWriteContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'delegate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWriteRiverTokenDelegateBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"disableLock"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWriteRiverTokenDisableLock =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'disableLock',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"enableLock"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWriteRiverTokenEnableLock =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'enableLock',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWriteRiverTokenMint = /*#__PURE__*/ createUseWriteContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWriteRiverTokenPermit = /*#__PURE__*/ createUseWriteContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWriteRiverTokenRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"setLockCooldown"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWriteRiverTokenSetLockCooldown =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'setLockCooldown',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWriteRiverTokenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWriteRiverTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWriteRiverTokenTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useSimulateRiverToken = /*#__PURE__*/ createUseSimulateContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"__Introspection_init"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useSimulateRiverTokenIntrospectionInit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: '__Introspection_init',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"__LockFacet_init"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useSimulateRiverTokenLockFacetInit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: '__LockFacet_init',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useSimulateRiverTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useSimulateRiverTokenBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useSimulateRiverTokenDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'delegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useSimulateRiverTokenDelegateBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"disableLock"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useSimulateRiverTokenDisableLock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'disableLock',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"enableLock"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useSimulateRiverTokenEnableLock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'enableLock',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useSimulateRiverTokenMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useSimulateRiverTokenPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useSimulateRiverTokenRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"setLockCooldown"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useSimulateRiverTokenSetLockCooldown =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'setLockCooldown',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useSimulateRiverTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useSimulateRiverTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useSimulateRiverTokenTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWatchRiverTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWatchRiverTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"DelegateChanged"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWatchRiverTokenDelegateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWatchRiverTokenDelegateVotesChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWatchRiverTokenEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWatchRiverTokenInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"InterfaceAdded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWatchRiverTokenInterfaceAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'InterfaceAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"InterfaceRemoved"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWatchRiverTokenInterfaceRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'InterfaceRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"LockUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWatchRiverTokenLockUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'LockUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWatchRiverTokenOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"TokenThresholdSet"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWatchRiverTokenTokenThresholdSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'TokenThresholdSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0)
 */
export const useWatchRiverTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'Transfer',
  })
