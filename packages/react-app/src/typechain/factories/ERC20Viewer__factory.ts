/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Viewer, ERC20ViewerInterface } from "../ERC20Viewer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_tokenAddresses",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_ownerAddresses",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_spenderAddresses",
        type: "address[]",
      },
    ],
    name: "batchFetchAllowances",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_tokenAddresses",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_ownerAddresses",
        type: "address[]",
      },
    ],
    name: "batchFetchBalancesOf",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610532806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063312c61131461003b57806381316c8414610149575b600080fd5b6100f96004803603604081101561005157600080fd5b810190602081018135600160201b81111561006b57600080fd5b82018360208201111561007d57600080fd5b803590602001918460208302840111600160201b8311171561009e57600080fd5b919390929091602081019035600160201b8111156100bb57600080fd5b8201836020820111156100cd57600080fd5b803590602001918460208302840111600160201b831117156100ee57600080fd5b509092509050610257565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561013557818101518382015260200161011d565b505050509050019250505060405180910390f35b6100f96004803603606081101561015f57600080fd5b810190602081018135600160201b81111561017957600080fd5b82018360208201111561018b57600080fd5b803590602001918460208302840111600160201b831117156101ac57600080fd5b919390929091602081019035600160201b8111156101c957600080fd5b8201836020820111156101db57600080fd5b803590602001918460208302840111600160201b831117156101fc57600080fd5b919390929091602081019035600160201b81111561021957600080fd5b82018360208201111561022b57600080fd5b803590602001918460208302840111600160201b8311171561024c57600080fd5b50909250905061038e565b606083818167ffffffffffffffff8111801561027257600080fd5b5060405190808252806020026020018201604052801561029c578160200160208202803683370190505b50905060005b82811015610383578787828181106102b657fe5b905060200201356001600160a01b03166001600160a01b03166370a082318787848181106102e057fe5b905060200201356001600160a01b03166040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561033657600080fd5b505afa15801561034a573d6000803e3d6000fd5b505050506040513d602081101561036057600080fd5b5051825183908390811061037057fe5b60209081029190910101526001016102a2565b509695505050505050565b606085818167ffffffffffffffff811180156103a957600080fd5b506040519080825280602002602001820160405280156103d3578160200160208202803683370190505b50905060005b828110156104ef578989828181106103ed57fe5b905060200201356001600160a01b03166001600160a01b031663dd62ed3e89898481811061041757fe5b905060200201356001600160a01b031688888581811061043357fe5b905060200201356001600160a01b03166040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b03168152602001826001600160a01b03166001600160a01b031681526020019250505060206040518083038186803b1580156104a257600080fd5b505afa1580156104b6573d6000803e3d6000fd5b505050506040513d60208110156104cc57600080fd5b505182518390839081106104dc57fe5b60209081029190910101526001016103d9565b509897505050505050505056fea264697066735822122052b39d0a6f7b2c0ffde922a445d0fd23017ca19141b1dc6388c7e9eb3d3fe48664736f6c634300060a0033";

type ERC20ViewerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ViewerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Viewer__factory extends ContractFactory {
  constructor(...args: ERC20ViewerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Viewer> {
    return super.deploy(overrides || {}) as Promise<ERC20Viewer>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20Viewer {
    return super.attach(address) as ERC20Viewer;
  }
  connect(signer: Signer): ERC20Viewer__factory {
    return super.connect(signer) as ERC20Viewer__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20ViewerInterface {
    return new utils.Interface(_abi) as ERC20ViewerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Viewer {
    return new Contract(address, _abi, signerOrProvider) as ERC20Viewer;
  }
}
