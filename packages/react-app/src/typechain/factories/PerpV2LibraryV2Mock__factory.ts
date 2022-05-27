/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PerpV2LibraryV2Mock,
  PerpV2LibraryV2MockInterface,
} from "../PerpV2LibraryV2Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address",
      },
    ],
    name: "initializeModuleOnSet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract ISetToken",
            name: "setToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "baseToken",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isBuy",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "baseTokenAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oppositeAmountBound",
            type: "uint256",
          },
        ],
        internalType: "struct PerpV2LibraryV2.ActionInfo",
        name: "_actionInfo",
        type: "tuple",
      },
      {
        internalType: "contract IClearingHouse",
        name: "_perpClearingHouse",
        type: "address",
      },
    ],
    name: "testExecuteTrade",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
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
        internalType: "contract IVault",
        name: "_vault",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountNotional",
        type: "uint256",
      },
    ],
    name: "testGetDepositCalldata",
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
    stateMutability: "pure",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "contract IClearingHouse",
        name: "_clearingHouse",
        type: "address",
      },
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
        name: "_params",
        type: "tuple",
      },
    ],
    name: "testGetOpenPositionCalldata",
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
    stateMutability: "pure",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "contract IQuoter",
        name: "_quoter",
        type: "address",
      },
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
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType: "struct IQuoter.SwapParams",
        name: "_params",
        type: "tuple",
      },
    ],
    name: "testGetSwapCalldata",
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
    stateMutability: "pure",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "contract IVault",
        name: "_vault",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountNotional",
        type: "uint256",
      },
    ],
    name: "testGetWithdrawCalldata",
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
    stateMutability: "pure",
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
      {
        internalType: "contract IVault",
        name: "_vault",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountNotional",
        type: "uint256",
      },
    ],
    name: "testInvokeDeposit",
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
      {
        internalType: "contract IClearingHouse",
        name: "_clearingHouse",
        type: "address",
      },
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
        name: "_params",
        type: "tuple",
      },
    ],
    name: "testInvokeOpenPosition",
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
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address",
      },
      {
        internalType: "contract IQuoter",
        name: "_quoter",
        type: "address",
      },
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
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType: "struct IQuoter.SwapParams",
        name: "_params",
        type: "tuple",
      },
    ],
    name: "testInvokeSwap",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "deltaAvailableBase",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deltaAvailableQuote",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "exchangedPositionSize",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "exchangedPositionNotional",
            type: "int256",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceX96",
            type: "uint160",
          },
        ],
        internalType: "struct IQuoter.SwapResponse",
        name: "",
        type: "tuple",
      },
    ],
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
      {
        internalType: "contract IVault",
        name: "_vault",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountNotional",
        type: "uint256",
      },
    ],
    name: "testInvokeWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract ISetToken",
            name: "setToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "baseToken",
            type: "address",
          },
          {
            internalType: "bool",
            name: "isBuy",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "baseTokenAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oppositeAmountBound",
            type: "uint256",
          },
        ],
        internalType: "struct PerpV2LibraryV2.ActionInfo",
        name: "_actionInfo",
        type: "tuple",
      },
      {
        internalType: "contract IQuoter",
        name: "_perpQuoter",
        type: "address",
      },
    ],
    name: "testSimulateTrade",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610e51806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80635f35af31116100715780635f35af3114610135578063634328551461014857806366efcda31461015b57806379f3d1f51461017b578063d554a2061461018e578063d6409d94146101a1576100a9565b8063028f87b5146100ae57806305823776146100d857806313c47e66146100fa5780633cc991e11461010f578063598a8d2414610122575b600080fd5b6100c16100bc366004610a82565b6101b4565b6040516100cf929190610d94565b60405180910390f35b6100eb6100e6366004610a42565b61024a565b6040516100cf93929190610c0b565b61010d6101083660046109f2565b6102ed565b005b61010d61011d3660046109f2565b610361565b6100eb610130366004610a42565b61039e565b6100eb6101433660046108ee565b6103de565b6100eb610156366004610924565b61047d565b61016e6101693660046109b4565b6104bb565b6040516100cf9190610d56565b6100c1610189366004610a82565b610558565b6100c161019c36600461096c565b610594565b61010d6101af366004610950565b61062d565b60008073__$37f46b63326be74363878a0a0fa6eea058$__63d4c2a2cd85856040518363ffffffff1660e01b81526004016101f0929190610d30565b604080518083038186803b15801561020757600080fd5b505af415801561021b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023f9190610b10565b915091509250929050565b600080606073__$37f46b63326be74363878a0a0fa6eea058$__630293a1288787876040518463ffffffff1660e01b815260040161028a93929190610d0c565b60006040518083038186803b1580156102a257600080fd5b505af41580156102b6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102de9190810190610843565b92509250925093509350939050565b604051632ab3e8ef60e11b815273__$37f46b63326be74363878a0a0fa6eea058$__90635567d1de9061032a908790879087908790600401610ce2565b60006040518083038186803b15801561034257600080fd5b505af4158015610356573d6000803e3d6000fd5b505050505b50505050565b6040516305e190a960e21b815273__$37f46b63326be74363878a0a0fa6eea058$__9063178642a49061032a908790879087908790600401610ce2565b600080606073__$37f46b63326be74363878a0a0fa6eea058$__6384e88afe8787876040518463ffffffff1660e01b815260040161028a93929190610d0c565b600080606073__$37f46b63326be74363878a0a0fa6eea058$__633f3876eb86866040518363ffffffff1660e01b815260040161041c929190610c54565b60006040518083038186803b15801561043457600080fd5b505af4158015610448573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104709190810190610843565b9250925092509250925092565b600080606073__$37f46b63326be74363878a0a0fa6eea058$__632130ef5e86866040518363ffffffff1660e01b815260040161041c929190610c72565b6104c3610683565b604051634496ad3760e11b815273__$37f46b63326be74363878a0a0fa6eea058$__9063892d5a6e906104fe90879087908790600401610cbd565b60a06040518083038186803b15801561051657600080fd5b505af415801561052a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054e9190610ab9565b90505b9392505050565b60008073__$37f46b63326be74363878a0a0fa6eea058$__63e815274e85856040518363ffffffff1660e01b81526004016101f0929190610d30565b60008073__$37f46b63326be74363878a0a0fa6eea058$__63d3a5c2858686866040518463ffffffff1660e01b81526004016105d293929190610c8f565b604080518083038186803b1580156105e957600080fd5b505af41580156105fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106219190610b10565b91509150935093915050565b806001600160a01b0316630ffe0f1e6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561066857600080fd5b505af115801561067c573d6000803e3d6000fd5b5050505050565b6040518060a001604052806000815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b803580151581146106cb57600080fd5b92915050565b600060a082840312156106e2578081fd5b6106ec60a0610da2565b905081356106f981610df5565b8152602082013561070981610df5565b6020820152604082013561071c81610e0d565b80604083015250606082013560608201526080820135608082015292915050565b6000610100808385031215610750578182fd5b61075981610da2565b915050813561076781610df5565b815261077683602084016106bb565b602082015261078883604084016106bb565b6040820152606082013560608201526080820135608082015260a082013560a082015260c08201356107b981610df5565b8060c08301525060e082013560e082015292915050565b600060a082840312156107e1578081fd5b6107eb60a0610da2565b905081356107f881610df5565b8152602082013561080881610e0d565b6020820152604082013561081b81610e0d565b604082015260608281013590820152608082013561083881610df5565b608082015292915050565b600080600060608486031215610857578283fd5b835161086281610df5565b60208501516040860151919450925067ffffffffffffffff80821115610886578283fd5b81860187601f820112610897578384fd5b80519250818311156108a7578384fd5b6108ba601f8401601f1916602001610da2565b91508282528760208483010111156108d0578384fd5b6108e1836020840160208401610dc9565b5080925050509250925092565b6000806101208385031215610901578182fd5b823561090c81610df5565b915061091b846020850161073d565b90509250929050565b60008060c08385031215610936578182fd5b823561094181610df5565b915061091b84602085016107d0565b600060208284031215610961578081fd5b813561055181610df5565b60008060006101408486031215610981578081fd5b833561098c81610df5565b9250602084013561099c81610df5565b91506109ab856040860161073d565b90509250925092565b600080600060e084860312156109c8578081fd5b83356109d381610df5565b925060208401356109e381610df5565b91506109ab85604086016107d0565b60008060008060808587031215610a07578182fd5b8435610a1281610df5565b93506020850135610a2281610df5565b92506040850135610a3281610df5565b9396929550929360600135925050565b600080600060608486031215610a56578081fd5b8335610a6181610df5565b92506020840135610a7181610df5565b929592945050506040919091013590565b60008060c08385031215610a94578182fd5b610a9e84846106d1565b915060a0830135610aae81610df5565b809150509250929050565b600060a08284031215610aca578081fd5b610ad460a0610da2565b825181526020830151602082015260408301516040820152606083015160608201526080830151610b0481610df5565b60808201529392505050565b60008060408385031215610b22578182fd5b505080516020909101519092909150565b80516001600160a01b0390811683526020808301519091169083015260408082015115159083015260608082015190830152608090810151910152565b60018060a01b03808251168352602082015115156020840152604082015115156040840152606082015160608401526080820151608084015260a082015160a08401528060c08301511660c08401525060e081015160e08301525050565b80516001600160a01b0390811683526020808301511515908401526040808301511515908401526060808301519084015260809182015116910152565b600060018060a01b0385168252836020830152606060408301528251806060840152610c3e816080850160208701610dc9565b601f01601f191691909101608001949350505050565b6001600160a01b038316815261012081016105516020830184610b70565b6001600160a01b038316815260c081016105516020830184610bce565b6001600160a01b038481168252831660208201526101408101610cb56040830184610b70565b949350505050565b6001600160a01b0384811682528316602082015260e08101610cb56040830184610bce565b6001600160a01b039485168152928416602084015292166040820152606081019190915260800190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60c08101610d3e8285610b33565b6001600160a01b039290921660a09190910152919050565b815181526020808301519082015260408083015190820152606080830151908201526080918201516001600160a01b03169181019190915260a00190565b918252602082015260400190565b60405181810167ffffffffffffffff81118282101715610dc157600080fd5b604052919050565b60005b83811015610de4578181015183820152602001610dcc565b8381111561035b5750506000910152565b6001600160a01b0381168114610e0a57600080fd5b50565b8015158114610e0a57600080fdfea264697066735822122061dd0aa4434883b65a67cfb10264aac7748fcd0031a81bcad751de8912ce812764736f6c634300060a0033";

type PerpV2LibraryV2MockConstructorParams =
  | [linkLibraryAddresses: PerpV2LibraryV2MockLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PerpV2LibraryV2MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class PerpV2LibraryV2Mock__factory extends ContractFactory {
  constructor(...args: PerpV2LibraryV2MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        PerpV2LibraryV2Mock__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: PerpV2LibraryV2MockLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$37f46b63326be74363878a0a0fa6eea058\\$__", "g"),
      linkLibraryAddresses[
        "contracts/protocol/integration/lib/PerpV2LibraryV2.sol:PerpV2LibraryV2"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PerpV2LibraryV2Mock> {
    return super.deploy(overrides || {}) as Promise<PerpV2LibraryV2Mock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PerpV2LibraryV2Mock {
    return super.attach(address) as PerpV2LibraryV2Mock;
  }
  connect(signer: Signer): PerpV2LibraryV2Mock__factory {
    return super.connect(signer) as PerpV2LibraryV2Mock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PerpV2LibraryV2MockInterface {
    return new utils.Interface(_abi) as PerpV2LibraryV2MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PerpV2LibraryV2Mock {
    return new Contract(address, _abi, signerOrProvider) as PerpV2LibraryV2Mock;
  }
}

export interface PerpV2LibraryV2MockLibraryAddresses {
  ["contracts/protocol/integration/lib/PerpV2LibraryV2.sol:PerpV2LibraryV2"]: string;
}