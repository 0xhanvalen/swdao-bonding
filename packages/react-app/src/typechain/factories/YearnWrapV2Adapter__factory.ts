/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  YearnWrapV2Adapter,
  YearnWrapV2AdapterInterface,
} from "../YearnWrapV2Adapter";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wrappedToken",
        type: "address",
      },
    ],
    name: "getSpenderAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_underlyingToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wrappedToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_wrappedTokenUnits",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getUnwrapCallData",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_underlyingToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wrappedToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_underlyingUnits",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getWrapCallData",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b506104b3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806390f0f93814610046578063d91462ca14610071578063de68a3da14610084575b600080fd5b610059610054366004610291565b6100a4565b60405161006893929190610364565b60405180910390f35b61005961007f366004610291565b610129565b610097610092366004610259565b6101a5565b6040516100689190610350565b600080606087876100b582826101aa565b6100da5760405162461bcd60e51b81526004016100d1906103ce565b60405180910390fd5b6060886040516024016100ed9190610405565b60408051601f198184030181529190526020810180516001600160e01b0316632e1a7d4d60e01b179052999b60009b5098505050505050505050565b6000806060878761013a82826101aa565b6101565760405162461bcd60e51b81526004016100d1906103ce565b6060886040516024016101699190610405565b60408051601f198184030181529190526020810180516001600160e01b031663b6b55f2560e01b179052999b60009b5098505050505050505050565b919050565b600080826001600160a01b031663fc0c546a6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101e657600080fd5b505afa1580156101fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021e9190610236565b6001600160a01b039081169085161491505092915050565b600060208284031215610247578081fd5b815161025281610465565b9392505050565b6000806040838503121561026b578081fd5b823561027681610465565b9150602083013561028681610465565b809150509250929050565b600080600080600060a086880312156102a8578081fd5b85356102b381610465565b945060208601356102c381610465565b93506040860135925060608601356102da81610465565b9150608086013567ffffffffffffffff8111156102f5578182fd5b80870188601f820112610306578283fd5b8035915061031b61031683610435565b61040e565b82815289602084840101111561032f578384fd5b610340836020830160208501610459565b8093505050509295509295909350565b6001600160a01b0391909116815260200190565b600060018060a01b038516825260208481840152606060408401528351806060850152825b818110156103a557858101830151858201608001528201610389565b818111156103b65783608083870101525b50601f01601f19169290920160800195945050505050565b6020808252601a908201527f4d75737420626520612076616c696420746f6b656e2070616972000000000000604082015260600190565b90815260200190565b60405181810167ffffffffffffffff8111828210171561042d57600080fd5b604052919050565b600067ffffffffffffffff82111561044b578081fd5b50601f01601f191660200190565b82818337506000910152565b6001600160a01b038116811461047a57600080fd5b5056fea2646970667358221220c1ec0a520044f6853811ea8fdd5bdd5435bf12c242efb9f38fd9db4f81c58e3c64736f6c634300060a0033";

type YearnWrapV2AdapterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YearnWrapV2AdapterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YearnWrapV2Adapter__factory extends ContractFactory {
  constructor(...args: YearnWrapV2AdapterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<YearnWrapV2Adapter> {
    return super.deploy(overrides || {}) as Promise<YearnWrapV2Adapter>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): YearnWrapV2Adapter {
    return super.attach(address) as YearnWrapV2Adapter;
  }
  connect(signer: Signer): YearnWrapV2Adapter__factory {
    return super.connect(signer) as YearnWrapV2Adapter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YearnWrapV2AdapterInterface {
    return new utils.Interface(_abi) as YearnWrapV2AdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YearnWrapV2Adapter {
    return new Contract(address, _abi, signerOrProvider) as YearnWrapV2Adapter;
  }
}
