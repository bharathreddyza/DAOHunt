/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from 'ethers'
import { Provider } from '@ethersproject/providers'

import type { ArbOwner } from '../ArbOwner'

export class ArbOwner__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbOwner {
    return new Contract(address, _abi, signerOrProvider) as ArbOwner
  }
}

const _abi = [
  {
    inputs: [],
    name: 'addToReserveFunds',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'pluggableId',
        type: 'uint256',
      },
    ],
    name: 'bindAddressToPluggable',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'marshalledCode',
        type: 'bytes',
      },
    ],
    name: 'continueCodeUpload',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'finishCodeUploadAsArbosUpgrade',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'keepState',
        type: 'bool',
      },
    ],
    name: 'finishCodeUploadAsPluggable',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getFeeRecipients',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwnerAddr',
        type: 'address',
      },
    ],
    name: 'giveOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'setFairGasPriceSender',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'netFeeRecipient',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'congestionFeeRecipient',
        type: 'address',
      },
    ],
    name: 'setFeeRecipients',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'enabled',
        type: 'bool',
      },
    ],
    name: 'setFeesEnabled',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'speedLimitPerBlock',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'gasPoolMax',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxTxGasLimit',
        type: 'uint256',
      },
    ],
    name: 'setGasAccountingParams',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'blocksPerSend',
        type: 'uint256',
      },
    ],
    name: 'setSecondsPerSend',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'startCodeUpload',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
