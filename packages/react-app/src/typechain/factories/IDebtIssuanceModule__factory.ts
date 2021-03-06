/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IDebtIssuanceModule,
  IDebtIssuanceModuleInterface,
} from "../IDebtIssuanceModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address",
      },
    ],
    name: "registerToIssuanceModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address",
      },
    ],
    name: "unregisterFromIssuanceModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
];

export class IDebtIssuanceModule__factory {
  static readonly abi = _abi;
  static createInterface(): IDebtIssuanceModuleInterface {
    return new utils.Interface(_abi) as IDebtIssuanceModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDebtIssuanceModule {
    return new Contract(address, _abi, signerOrProvider) as IDebtIssuanceModule;
  }
}
