/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IExchangeAdapter,
  IExchangeAdapterInterface,
} from "../IExchangeAdapter";

const _abi = [
  {
    inputs: [],
    name: "getSpender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
        name: "_fromToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_toToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_toAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_fromQuantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minToQuantity",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "getTradeCalldata",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
];

export class IExchangeAdapter__factory {
  static readonly abi = _abi;
  static createInterface(): IExchangeAdapterInterface {
    return new utils.Interface(_abi) as IExchangeAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IExchangeAdapter {
    return new Contract(address, _abi, signerOrProvider) as IExchangeAdapter;
  }
}
