/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LendingPoolAddressesProviderMock,
  LendingPoolAddressesProviderMockInterface,
} from "../LendingPoolAddressesProviderMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getAddress",
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
    inputs: [],
    name: "getLendingPool",
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
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "setAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610153806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630261bf8b1461004657806321f8a7211461006a578063ca446dd914610087575b600080fd5b61004e6100b5565b604080516001600160a01b039092168252519081900360200190f35b61004e6004803603602081101561008057600080fd5b50356100d4565b6100b36004803603604081101561009d57600080fd5b50803590602001356001600160a01b03166100ef565b005b60006100cf6b13115391125391d7d413d3d360a21b6100d4565b905090565b6000908152602081905260409020546001600160a01b031690565b60009182526020829052604090912080546001600160a01b0319166001600160a01b0390921691909117905556fea2646970667358221220be21b430ae404ad9fa53b888e594c80b274681bd2197b8784ccbb75b93fbd2b264736f6c634300060a0033";

type LendingPoolAddressesProviderMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LendingPoolAddressesProviderMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LendingPoolAddressesProviderMock__factory extends ContractFactory {
  constructor(...args: LendingPoolAddressesProviderMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LendingPoolAddressesProviderMock> {
    return super.deploy(
      overrides || {}
    ) as Promise<LendingPoolAddressesProviderMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LendingPoolAddressesProviderMock {
    return super.attach(address) as LendingPoolAddressesProviderMock;
  }
  connect(signer: Signer): LendingPoolAddressesProviderMock__factory {
    return super.connect(signer) as LendingPoolAddressesProviderMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LendingPoolAddressesProviderMockInterface {
    return new utils.Interface(
      _abi
    ) as LendingPoolAddressesProviderMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LendingPoolAddressesProviderMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LendingPoolAddressesProviderMock;
  }
}
