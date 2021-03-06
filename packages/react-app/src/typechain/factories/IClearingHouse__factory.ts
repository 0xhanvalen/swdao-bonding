/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IClearingHouse,
  IClearingHouseInterface,
} from "../IClearingHouse";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "baseToken",
            type: "address",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
          {
            internalType: "uint256",
            name: "oppositeAmountBound",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "referralCode",
            type: "bytes32",
          },
        ],
        internalType: "struct IClearingHouse.ClosePositionParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "closePosition",
    outputs: [
      {
        internalType: "uint256",
        name: "deltaBase",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deltaQuote",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "getAccountValue",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "getNetQuoteBalance",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "getOpenNotional",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "getOwedRealizedPnl",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "getPositionSize",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "getPositionValue",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "getTotalInitialMarginRequirement",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "getTotalUnrealizedPnl",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "baseToken",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isBaseToQuote",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isExactInput",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oppositeAmountBound",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
          {
            internalType: "bytes32",
            name: "referralCode",
            type: "bytes32",
          },
        ],
        internalType: "struct IClearingHouse.OpenPositionParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "openPosition",
    outputs: [
      {
        internalType: "uint256",
        name: "deltaBase",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deltaQuote",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
];

export class IClearingHouse__factory {
  static readonly abi = _abi;
  static createInterface(): IClearingHouseInterface {
    return new utils.Interface(_abi) as IClearingHouseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IClearingHouse {
    return new Contract(address, _abi, signerOrProvider) as IClearingHouse;
  }
}
