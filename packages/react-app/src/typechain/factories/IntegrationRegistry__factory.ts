/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  IntegrationRegistry,
  IntegrationRegistryInterface,
} from "../IntegrationRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IController",
        name: "_controller",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_module",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_adapter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_integrationName",
        type: "string",
      },
    ],
    name: "IntegrationAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_module",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_newAdapter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_integrationName",
        type: "string",
      },
    ],
    name: "IntegrationEdited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_module",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_adapter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_integrationName",
        type: "string",
      },
    ],
    name: "IntegrationRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
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
        name: "_name",
        type: "string",
      },
      {
        internalType: "address",
        name: "_adapter",
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
        internalType: "address[]",
        name: "_modules",
        type: "address[]",
      },
      {
        internalType: "string[]",
        name: "_names",
        type: "string[]",
      },
      {
        internalType: "address[]",
        name: "_adapters",
        type: "address[]",
      },
    ],
    name: "batchAddIntegration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_modules",
        type: "address[]",
      },
      {
        internalType: "string[]",
        name: "_names",
        type: "string[]",
      },
      {
        internalType: "address[]",
        name: "_adapters",
        type: "address[]",
      },
    ],
    name: "batchEditIntegration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [],
    name: "controller",
    outputs: [
      {
        internalType: "contract IController",
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
        name: "_name",
        type: "string",
      },
      {
        internalType: "address",
        name: "_adapter",
        type: "address",
      },
    ],
    name: "editIntegration",
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
        name: "_name",
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
        name: "_nameHash",
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
        name: "_name",
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
  {
    inputs: [],
    name: "owner",
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
        name: "_name",
        type: "string",
      },
    ],
    name: "removeIntegration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161110d38038061110d83398101604081905261002f916100b5565b60006100426001600160e01b036100b116565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b0319166001600160a01b03929092169190911790556100e3565b3390565b6000602082840312156100c6578081fd5b81516001600160a01b03811681146100dc578182fd5b9392505050565b61101b806100f26000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063ad1f231611610071578063ad1f23161461013a578063bdf590751461014d578063d9be0e1214610160578063e6d642c514610173578063f2fde38b14610186578063f77c479114610199576100b4565b8063639a3978146100b9578063715018a6146100e25780637a3d5b2a146100ec5780638da5cb5b146100ff578063a19ba6dc14610114578063a30945cb14610127575b600080fd5b6100cc6100c7366004610b4b565b6101a1565b6040516100d99190610d82565b60405180910390f35b6100ea6101ea565b005b6100ea6100fa366004610c02565b610272565b610107610364565b6040516100d99190610d42565b610107610122366004610b4b565b610373565b6100ea610135366004610ba4565b6103b6565b6100ea610148366004610ba4565b610572565b6100ea61015b366004610c02565b610732565b6100ea61016e366004610b4b565b61081d565b610107610181366004610b21565b61090d565b6100ea610194366004610aff565b610935565b6101076109eb565b6001600160a01b03821660009081526002602052604081208190816101c5856109fa565b81526020810191909152604001600020546001600160a01b0316141590505b92915050565b6101f2610a05565b6000546001600160a01b039081169116146102285760405162461bcd60e51b815260040161021f90610e83565b60405180910390fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b61027a610a05565b6000546001600160a01b039081169116146102a75760405162461bcd60e51b815260040161021f90610e83565b8251806102c65760405162461bcd60e51b815260040161021f90610dcf565b825181146102e65760405162461bcd60e51b815260040161021f90610f69565b815181146103065760405162461bcd60e51b815260040161021f90610eb8565b60005b8181101561035d5761035585828151811061032057fe5b602002602001015185838151811061033457fe5b602002602001015185848151811061034857fe5b60200260200101516103b6565b600101610309565b5050505050565b6000546001600160a01b031690565b6001600160a01b038216600090815260026020526040812081610395846109fa565b81526020810191909152604001600020546001600160a01b03169392505050565b6103be610a05565b6000546001600160a01b039081169116146103eb5760405162461bcd60e51b815260040161021f90610e83565b60006103f6836109fa565b6001546040516342f6e38960e01b81529192506001600160a01b0316906342f6e38990610427908790600401610d42565b60206040518083038186803b15801561043f57600080fd5b505afa158015610453573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104779190610cd7565b6104935760405162461bcd60e51b815260040161021f90610da0565b6001600160a01b03848116600090815260026020908152604080832085845290915290205416156104d65760405162461bcd60e51b815260040161021f90610e4c565b6001600160a01b0382166104fc5760405162461bcd60e51b815260040161021f90610efb565b6001600160a01b0384811660008181526002602090815260408083208684529091529081902080546001600160a01b0319169386169384179055517f43640b154e7a2d5d196915068b6d815bb713d3263abf2a154581f32dab54890d90610564908790610d8d565b60405180910390a350505050565b61057a610a05565b6000546001600160a01b039081169116146105a75760405162461bcd60e51b815260040161021f90610e83565b60006105b2836109fa565b6001546040516342f6e38960e01b81529192506001600160a01b0316906342f6e389906105e3908790600401610d42565b60206040518083038186803b1580156105fb57600080fd5b505afa15801561060f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106339190610cd7565b61064f5760405162461bcd60e51b815260040161021f90610da0565b6001600160a01b038481166000908152600260209081526040808320858452909152902054166106915760405162461bcd60e51b815260040161021f90610f32565b6001600160a01b0382166106b75760405162461bcd60e51b815260040161021f90610efb565b6001600160a01b0384811660008181526002602090815260408083208684529091529081902080546001600160a01b0319169386169390931790925590517fa2dbad778187774fb7e1aa28aa65a07b1f6fc3f3ad3eea64f843dacae9ed0e00906107249085908790610d56565b60405180910390a250505050565b61073a610a05565b6000546001600160a01b039081169116146107675760405162461bcd60e51b815260040161021f90610e83565b8251806107865760405162461bcd60e51b815260040161021f90610dcf565b825181146107a65760405162461bcd60e51b815260040161021f90610f69565b815181146107c65760405162461bcd60e51b815260040161021f90610eb8565b60005b8181101561035d576108158582815181106107e057fe5b60200260200101518583815181106107f457fe5b602002602001015185848151811061080857fe5b6020026020010151610572565b6001016107c9565b610825610a05565b6000546001600160a01b039081169116146108525760405162461bcd60e51b815260040161021f90610e83565b600061085d826109fa565b6001600160a01b038481166000908152600260209081526040808320858452909152902054919250166108a25760405162461bcd60e51b815260040161021f90610f32565b6001600160a01b0383811660008181526002602090815260408083208684529091529081902080546001600160a01b0319811690915590519216918291907f824b40f41a4e550651acdd3e4f51be3b80092c952b2ae347cab6930b5a6f50fc90610564908790610d8d565b6001600160a01b03918216600090815260026020908152604080832093835292905220541690565b61093d610a05565b6000546001600160a01b0390811691161461096a5760405162461bcd60e51b815260040161021f90610e83565b6001600160a01b0381166109905760405162461bcd60e51b815260040161021f90610e06565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b031681565b805160209091012090565b3390565b80356001600160a01b03811681146101e457600080fd5b600082601f830112610a30578081fd5b8135610a43610a3e82610fc5565b610f9e565b818152915060208083019084810181840286018201871015610a6457600080fd5b60005b84811015610a8b57610a798883610a09565b84529282019290820190600101610a67565b505050505092915050565b600082601f830112610aa6578081fd5b813567ffffffffffffffff811115610abc578182fd5b610acf601f8201601f1916602001610f9e565b9150808252836020828501011115610ae657600080fd5b8060208401602084013760009082016020015292915050565b600060208284031215610b10578081fd5b610b1a8383610a09565b9392505050565b60008060408385031215610b33578081fd5b610b3d8484610a09565b946020939093013593505050565b60008060408385031215610b5d578182fd5b82356001600160a01b0381168114610b73578283fd5b9150602083013567ffffffffffffffff811115610b8e578182fd5b610b9a85828601610a96565b9150509250929050565b600080600060608486031215610bb8578081fd5b610bc28585610a09565b9250602084013567ffffffffffffffff811115610bdd578182fd5b610be986828701610a96565b925050610bf98560408601610a09565b90509250925092565b600080600060608486031215610c16578283fd5b833567ffffffffffffffff80821115610c2d578485fd5b610c3987838801610a20565b9450602091508186013581811115610c4f578485fd5b80870188601f820112610c60578586fd5b80359150610c70610a3e83610fc5565b82815284810190828601885b85811015610ca557610c938d898435880101610a96565b84529287019290870190600101610c7c565b50909750505050604087013592505080821115610cc0578283fd5b50610ccd86828701610a20565b9150509250925092565b600060208284031215610ce8578081fd5b81518015158114610b1a578182fd5b60008151808452815b81811015610d1c57602081850181015186830182015201610d00565b81811115610d2d5782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0383168152604060208201819052600090610d7a90830184610cf7565b949350505050565b901515815260200190565b600060208252610b1a6020830184610cf7565b60208082526015908201527426bab9ba103132903b30b634b21036b7b23ab6329760591b604082015260600190565b60208082526019908201527f4d6f64756c6573206d757374206e6f7420626520656d70747900000000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252601b908201527f496e746567726174696f6e2065786973747320616c72656164792e0000000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526023908201527f4d6f64756c6520616e642061646170746572206c656e67746873206d69736d616040820152620e8c6d60eb1b606082015260800190565b6020808252601b908201527f416461707465722061646472657373206d7573742065786973742e0000000000604082015260600190565b6020808252601b908201527f496e746567726174696f6e20646f6573206e6f742065786973742e0000000000604082015260600190565b6020808252818101527f4d6f64756c6520616e64206e616d65206c656e67746873206d69736d61746368604082015260600190565b60405181810167ffffffffffffffff81118282101715610fbd57600080fd5b604052919050565b600067ffffffffffffffff821115610fdb578081fd5b506020908102019056fea2646970667358221220f2157c618ce3e0b4e2c6fb6ebde6323a60277c99d2cc669a76473050087be90364736f6c634300060a0033";

type IntegrationRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IntegrationRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class IntegrationRegistry__factory extends ContractFactory {
  constructor(...args: IntegrationRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IntegrationRegistry> {
    return super.deploy(
      _controller,
      overrides || {}
    ) as Promise<IntegrationRegistry>;
  }
  getDeployTransaction(
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_controller, overrides || {});
  }
  attach(address: string): IntegrationRegistry {
    return super.attach(address) as IntegrationRegistry;
  }
  connect(signer: Signer): IntegrationRegistry__factory {
    return super.connect(signer) as IntegrationRegistry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IntegrationRegistryInterface {
    return new utils.Interface(_abi) as IntegrationRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IntegrationRegistry {
    return new Contract(address, _abi, signerOrProvider) as IntegrationRegistry;
  }
}
