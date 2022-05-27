/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IIntegrationRegistry,
  IIntegrationRegistryInterface,
} from "../IIntegrationRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_module",
        type: "address",
      },
      {
        internalType: "string",
        name: "_id",
        type: "string",
      },
      {
        internalType: "address",
        name: "_wrapper",
        type: "address",
      },
    ],
    name: "addIntegration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_module",
        type: "address",
      },
      {
        internalType: "string",
        name: "_id",
        type: "string",
      },
    ],
    name: "getIntegrationAdapter",
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
        name: "_module",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_id",
        type: "bytes32",
      },
    ],
    name: "getIntegrationAdapterWithHash",
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
        name: "_module",
        type: "address",
      },
      {
        internalType: "string",
        name: "_id",
        type: "string",
      },
    ],
    name: "isValidIntegration",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
];

export class IIntegrationRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IIntegrationRegistryInterface {
    return new utils.Interface(_abi) as IIntegrationRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IIntegrationRegistry {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IIntegrationRegistry;
  }
}