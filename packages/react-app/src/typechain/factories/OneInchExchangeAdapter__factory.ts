/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BytesLike,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OneInchExchangeAdapter,
  OneInchExchangeAdapterInterface,
} from "../OneInchExchangeAdapter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_oneInchApprovalAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_oneInchExchangeAddress",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "_oneInchFunctionSignature",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
        name: "_sourceToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_destinationToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_sourceQuantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minDestinationQuantity",
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
  {
    inputs: [],
    name: "oneInchApprovalAddress",
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
    name: "oneInchExchangeAddress",
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
    name: "oneInchFunctionSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161063538038061063583398101604081905261002f9161009b565b600080546001600160a01b03199081166001600160a01b039586161790915560018054909116929093169190911763ffffffff60a01b1916600160a01b60e09290921c919091021790556100f0565b80516001600160a01b038116811461009557600080fd5b92915050565b6000806000606084860312156100af578283fd5b6100b9858561007e565b92506100c8856020860161007e565b60408501519092506001600160e01b0319811681146100e5578182fd5b809150509250925092565b610536806100ff6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063334fc2891461005c57806364a6c8661461007a57806369fd263114610082578063c7868ace14610097578063e171fcab1461009f575b600080fd5b6100646100c1565b60405161007191906102f4565b60405180910390f35b6100646100d0565b61008a6100df565b6040516100719190610372565b6100646100ef565b6100b26100ad36600461022d565b6100fe565b60405161007193929190610308565b6000546001600160a01b031690565b6000546001600160a01b031681565b600154600160a01b900460e01b81565b6001546001600160a01b031681565b6020810151602482015160448301516064840151608485015160015460009586956060959194909391929091906001600160e01b0319808716600160a01b90920460e01b16146101695760405162461bcd60e51b815260040161016090610387565b60405180910390fd5b8d6001600160a01b0316846001600160a01b03161461019a5760405162461bcd60e51b815260040161016090610424565b8c6001600160a01b0316836001600160a01b0316146101cb5760405162461bcd60e51b8152600401610160906103f5565b8a82146101ea5760405162461bcd60e51b8152600401610160906103be565b8981101561020a5760405162461bcd60e51b815260040161016090610450565b50506001546001600160a01b03169c60009c50969a509598505050505050505050565b60008060008060008060c08789031215610245578182fd5b8635610250816104e8565b95506020870135610260816104e8565b94506040870135610270816104e8565b9350606087013592506080870135915060a087013567ffffffffffffffff811115610299578182fd5b80880189601f8201126102aa578283fd5b803591506102bf6102ba836104b8565b610491565b8281528a60208484010111156102d3578384fd5b6102e48360208301602085016104dc565b8093505050509295509295509295565b6001600160a01b0391909116815260200190565b600060018060a01b038516825260208481840152606060408401528351806060850152825b818110156103495785810183015185820160800152820161032d565b8181111561035a5783608083870101525b50601f01601f19169290920160800195945050505050565b6001600160e01b031991909116815260200190565b6020808252601a908201527f4e6f74204f6e6520496e636820537761702046756e6374696f6e000000000000604082015260600190565b60208082526018908201527f536f75726365207175616e74697479206d69736d617463680000000000000000604082015260600190565b60208082526015908201527424b73b30b634b2103932b1b2b4bb32903a37b5b2b760591b604082015260600190565b60208082526012908201527124b73b30b634b21039b2b732103a37b5b2b760711b604082015260600190565b60208082526021908201527f4d696e2064657374696e6174696f6e207175616e74697479206d69736d6174636040820152600d60fb1b606082015260800190565b60405181810167ffffffffffffffff811182821017156104b057600080fd5b604052919050565b600067ffffffffffffffff8211156104ce578081fd5b50601f01601f191660200190565b82818337506000910152565b6001600160a01b03811681146104fd57600080fd5b5056fea2646970667358221220e03135bacadc4643b483a736ed65077e84f246828efad0783dcd54e34a95c5f664736f6c634300060a0033";

type OneInchExchangeAdapterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OneInchExchangeAdapterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OneInchExchangeAdapter__factory extends ContractFactory {
  constructor(...args: OneInchExchangeAdapterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _oneInchApprovalAddress: string,
    _oneInchExchangeAddress: string,
    _oneInchFunctionSignature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OneInchExchangeAdapter> {
    return super.deploy(
      _oneInchApprovalAddress,
      _oneInchExchangeAddress,
      _oneInchFunctionSignature,
      overrides || {}
    ) as Promise<OneInchExchangeAdapter>;
  }
  getDeployTransaction(
    _oneInchApprovalAddress: string,
    _oneInchExchangeAddress: string,
    _oneInchFunctionSignature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _oneInchApprovalAddress,
      _oneInchExchangeAddress,
      _oneInchFunctionSignature,
      overrides || {}
    );
  }
  attach(address: string): OneInchExchangeAdapter {
    return super.attach(address) as OneInchExchangeAdapter;
  }
  connect(signer: Signer): OneInchExchangeAdapter__factory {
    return super.connect(signer) as OneInchExchangeAdapter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OneInchExchangeAdapterInterface {
    return new utils.Interface(_abi) as OneInchExchangeAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OneInchExchangeAdapter {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OneInchExchangeAdapter;
  }
}