import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RiverAuthorizer
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const riverAuthorizerAbi = [
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
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'claimer', internalType: 'address', type: 'address' }],
    name: 'authorizeClaimer',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'authorizer', internalType: 'address', type: 'address' }],
    name: 'getAuthorizedClaimer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'removeAuthorizedClaimer',
    outputs: [],
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const riverAuthorizerAddress = {
  1: '0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05',
  11155111: '0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const riverAuthorizerConfig = {
  address: riverAuthorizerAddress,
  abi: riverAuthorizerAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RiverToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const riverTokenAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      {
        name: 'config',
        internalType: 'struct IRiverBase.RiverConfig',
        type: 'tuple',
        components: [
          { name: 'vault', internalType: 'address', type: 'address' },
          { name: 'owner', internalType: 'address', type: 'address' },
          {
            name: 'inflationConfig',
            internalType: 'struct IRiverBase.InflationConfig',
            type: 'tuple',
            components: [
              {
                name: 'initialInflationRate',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'finalInflationRate',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'inflationDecreaseRate',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'inflationDecreaseInterval',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
        ],
      },
    ],
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
  { type: 'error', inputs: [], name: 'LockAlreadyDisabled' },
  { type: 'error', inputs: [], name: 'LockAlreadyEnabled' },
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
  { type: 'error', inputs: [], name: 'River__CannotMint' },
  { type: 'error', inputs: [], name: 'River__CannotMintZero' },
  { type: 'error', inputs: [], name: 'River__DelegateeSameAsCurrent' },
  { type: 'error', inputs: [], name: 'River__InvalidAddress' },
  { type: 'error', inputs: [], name: 'River__InvalidDelegatee' },
  { type: 'error', inputs: [], name: 'River__InvalidInflationRate' },
  { type: 'error', inputs: [], name: 'River__MintingTooSoon' },
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
      {
        name: 'timestamp',
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
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: '__Introspection_init',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'cooldown', internalType: 'uint256', type: 'uint256' }],
    name: '__LockFacet_init',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
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
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'createInflation',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
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
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'deployedAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'disableLock',
    outputs: [],
  },
  {
    stateMutability: 'view',
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
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'enableLock',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'finalInflationRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getDelegators',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'inflationDecreaseInterval',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'inflationDecreaseRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'initialInflationRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isLockEnabled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'lastMintTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'lockCooldown',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'numCheckpoints',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'overrideInflation',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'overrideInflationRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
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
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'cooldown', internalType: 'uint256', type: 'uint256' }],
    name: 'setLockCooldown',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_overrideInflation', internalType: 'bool', type: 'bool' },
      {
        name: '_overrideInflationRate',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'setOverrideInflation',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const riverTokenAddress = {
  1: '0x53319181e003E7f86fB79f794649a2aB680Db244',
  11155111: '0x40eF1bb984503bb5Adef041A88a4F9180e8586f9',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const riverTokenConfig = {
  address: riverTokenAddress,
  abi: riverTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverAuthorizerAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useReadRiverAuthorizer = /*#__PURE__*/ createUseReadContract({
  abi: riverAuthorizerAbi,
  address: riverAuthorizerAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverAuthorizerAbi}__ and `functionName` set to `"getAuthorizedClaimer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useReadRiverAuthorizerGetAuthorizedClaimer =
  /*#__PURE__*/ createUseReadContract({
    abi: riverAuthorizerAbi,
    address: riverAuthorizerAddress,
    functionName: 'getAuthorizedClaimer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverAuthorizerAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useWriteRiverAuthorizer = /*#__PURE__*/ createUseWriteContract({
  abi: riverAuthorizerAbi,
  address: riverAuthorizerAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverAuthorizerAbi}__ and `functionName` set to `"authorizeClaimer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useWriteRiverAuthorizerAuthorizeClaimer =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverAuthorizerAbi,
    address: riverAuthorizerAddress,
    functionName: 'authorizeClaimer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverAuthorizerAbi}__ and `functionName` set to `"removeAuthorizedClaimer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useWriteRiverAuthorizerRemoveAuthorizedClaimer =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverAuthorizerAbi,
    address: riverAuthorizerAddress,
    functionName: 'removeAuthorizedClaimer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverAuthorizerAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useSimulateRiverAuthorizer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverAuthorizerAbi,
    address: riverAuthorizerAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverAuthorizerAbi}__ and `functionName` set to `"authorizeClaimer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useSimulateRiverAuthorizerAuthorizeClaimer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverAuthorizerAbi,
    address: riverAuthorizerAddress,
    functionName: 'authorizeClaimer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverAuthorizerAbi}__ and `functionName` set to `"removeAuthorizedClaimer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useSimulateRiverAuthorizerRemoveAuthorizedClaimer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverAuthorizerAbi,
    address: riverAuthorizerAddress,
    functionName: 'removeAuthorizedClaimer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverAuthorizerAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useWatchRiverAuthorizerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverAuthorizerAbi,
    address: riverAuthorizerAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverAuthorizerAbi}__ and `eventName` set to `"AuthorizedClaimerChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useWatchRiverAuthorizerAuthorizedClaimerChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverAuthorizerAbi,
    address: riverAuthorizerAddress,
    eventName: 'AuthorizedClaimerChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverAuthorizerAbi}__ and `eventName` set to `"AuthorizedClaimerRemoved"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useWatchRiverAuthorizerAuthorizedClaimerRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverAuthorizerAbi,
    address: riverAuthorizerAddress,
    eventName: 'AuthorizedClaimerRemoved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverToken = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"CLOCK_MODE"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenClockMode = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"checkpoints"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenClock = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'clock',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"delegates"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenDelegates = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'delegates',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"deployedAt"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenDeployedAt = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'deployedAt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"eip712Domain"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenEip712Domain =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"finalInflationRate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenFinalInflationRate =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'finalInflationRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"getDelegators"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenGetDelegators =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'getDelegators',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"getPastTotalSupply"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenGetVotes = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"inflationDecreaseInterval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenInflationDecreaseInterval =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'inflationDecreaseInterval',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"inflationDecreaseRate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenInflationDecreaseRate =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'inflationDecreaseRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"initialInflationRate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenInitialInflationRate =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'initialInflationRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"isLockEnabled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenIsLockEnabled =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'isLockEnabled',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"lastMintTime"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenLastMintTime =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'lastMintTime',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"lockCooldown"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenName = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"nonces"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenNonces = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"numCheckpoints"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenNumCheckpoints =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'numCheckpoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"overrideInflation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenOverrideInflation =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'overrideInflation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"overrideInflationRate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenOverrideInflationRate =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'overrideInflationRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenOwner = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenTotalSupply = /*#__PURE__*/ createUseReadContract(
  {
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'totalSupply',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverToken = /*#__PURE__*/ createUseWriteContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"__Introspection_init"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"createInflation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenCreateInflation =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'createInflation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenDelegate = /*#__PURE__*/ createUseWriteContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'delegate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenEnableLock =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'enableLock',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenPermit = /*#__PURE__*/ createUseWriteContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenSetLockCooldown =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'setLockCooldown',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"setOverrideInflation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenSetOverrideInflation =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'setOverrideInflation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverToken = /*#__PURE__*/ createUseSimulateContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"__Introspection_init"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"createInflation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverTokenCreateInflation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'createInflation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverTokenEnableLock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'enableLock',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverTokenSetLockCooldown =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'setLockCooldown',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"setOverrideInflation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverTokenSetOverrideInflation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'setOverrideInflation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWatchRiverTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWatchRiverTokenOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWatchRiverTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'Transfer',
  })
