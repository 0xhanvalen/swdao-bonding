/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Minter, MinterInterface } from "../Minter";

const _abi = [
  {
    name: "Minted",
    inputs: [
      {
        type: "address",
        name: "recipient",
        indexed: true,
      },
      {
        type: "address",
        name: "gauge",
        indexed: false,
      },
      {
        type: "uint256",
        name: "minted",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    outputs: [],
    inputs: [
      {
        type: "address",
        name: "_token",
      },
      {
        type: "address",
        name: "_controller",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    name: "mint",
    outputs: [],
    inputs: [
      {
        type: "address",
        name: "gauge_addr",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: "100038",
  },
  {
    name: "mint_many",
    outputs: [],
    inputs: [
      {
        type: "address[8]",
        name: "gauge_addrs",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: "408502",
  },
  {
    name: "mint_for",
    outputs: [],
    inputs: [
      {
        type: "address",
        name: "gauge_addr",
      },
      {
        type: "address",
        name: "_for",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: "101219",
  },
  {
    name: "toggle_approve_mint",
    outputs: [],
    inputs: [
      {
        type: "address",
        name: "minting_user",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: "36726",
  },
  {
    name: "token",
    outputs: [
      {
        type: "address",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: "1301",
  },
  {
    name: "controller",
    outputs: [
      {
        type: "address",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: "1331",
  },
  {
    name: "minted",
    outputs: [
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "arg0",
      },
      {
        type: "address",
        name: "arg1",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "1669",
  },
  {
    name: "allowed_to_mint_for",
    outputs: [
      {
        type: "bool",
        name: "",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "arg0",
      },
      {
        type: "address",
        name: "arg1",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "1699",
  },
];

const _bytecode =
  "0x740100000000000000000000000000000000000000006020526f7fffffffffffffffffffffffffffffff6040527fffffffffffffffffffffffffffffffff8000000000000000000000000000000060605274012a05f1fffffffffffffffffffffffffdabf41c006080527ffffffffffffffffffffffffed5fa0e000000000000000000000000000000000060a05260406107036101403934156100a157600080fd5b602061070360c03960c05160205181106100ba57600080fd5b50602060206107030160c03960c05160205181106100d757600080fd5b5061014051600055610160516001556106eb56600436101561000d576105fa565b600035601c52740100000000000000000000000000000000000000006020526f7fffffffffffffffffffffffffffffff6040527fffffffffffffffffffffffffffffffff8000000000000000000000000000000060605274012a05f1fffffffffffffffffffffffffdabf41c006080527ffffffffffffffffffffffffed5fa0e000000000000000000000000000000000060a052600015610278575b610180526101405261016052600060206102206024633f9095b76101a052610140516101c0526101bc6001545afa6100e057600080fd5b601f3d116100ed57600080fd5b6000506102205112156100ff57600080fd5b60206102c06024634b82009361024052610160516102605261025c6000610140515af161012b57600080fd5b601f3d1161013857600080fd5b6000506102c05060206103806024630940070761030052610160516103205261031c610140515afa61016957600080fd5b601f3d1161017657600080fd5b600050610380516102e0526102e05160026101605160e05260c052604060c0206101405160e05260c052604060c02054808210156101b357600080fd5b808203905090506103a05260006103a051181561027257602061046060446340c10f196103c052610160516103e0526103a051610400526103dc60006000545af16101fd57600080fd5b601f3d1161020a57600080fd5b600050610460506102e05160026101605160e05260c052604060c0206101405160e05260c052604060c0205561014051610480526102e0516104a052610160517f9d228d69b5fdb8d273a2336f8fb8612d039631024ea9bf09c424a9503aa078f06040610480a25b61018051565b636a62784260005114156102e25762ffffff541561029557600080fd5b600162ffffff5534156102a757600080fd5b60043560205181106102b857600080fd5b506004356101405233610160526101605161014051600658016100a9565b600050600062ffffff55005b63a51e190460005114156103d45762ffffff54156102ff57600080fd5b600162ffffff55341561031157600080fd5b6000610120525b6101205160040135602051811061032e57600080fd5b50602061012051016101205261010061012051101561034c57610318565b61014060006008818352015b6004610140516008811061036b57600080fd5b6020020135151561037b576103c9565b610140516004610140516008811061039257600080fd5b602002013561018052336101a0526101a05161018051600658016100a9565b610140526000505b8151600101808352811415610358575b5050600062ffffff55005b6327f18ae360005114156104755762ffffff54156103f157600080fd5b600162ffffff55341561040357600080fd5b600435602051811061041457600080fd5b50602435602051811061042657600080fd5b5060033360e05260c052604060c02060243560e05260c052604060c020541561046c5760043561014052602435610160526101605161014051600658016100a9565b6000505b600062ffffff55005b63dd289d6060005114156104dd57341561048e57600080fd5b600435602051811061049f57600080fd5b50600360043560e05260c052604060c0203360e05260c052604060c0205415600360043560e05260c052604060c0203360e05260c052604060c02055005b63fc0c546a60005114156105045734156104f657600080fd5b60005460005260206000f350005b63f77c4791600051141561052b57341561051d57600080fd5b60015460005260206000f350005b638b752bb0600051141561059257341561054457600080fd5b600435602051811061055557600080fd5b50602435602051811061056757600080fd5b50600260043560e05260c052604060c02060243560e05260c052604060c0205460005260206000f350005b63a099003360005114156105f95734156105ab57600080fd5b60043560205181106105bc57600080fd5b5060243560205181106105ce57600080fd5b50600360043560e05260c052604060c02060243560e05260c052604060c0205460005260206000f350005b5b60006000fd5b6100eb6106eb036100eb6000396100eb6106eb036000f3";

type MinterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MinterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Minter__factory extends ContractFactory {
  constructor(...args: MinterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _token: string,
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Minter> {
    return super.deploy(
      _token,
      _controller,
      overrides || {}
    ) as Promise<Minter>;
  }
  getDeployTransaction(
    _token: string,
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, _controller, overrides || {});
  }
  attach(address: string): Minter {
    return super.attach(address) as Minter;
  }
  connect(signer: Signer): Minter__factory {
    return super.connect(signer) as Minter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MinterInterface {
    return new utils.Interface(_abi) as MinterInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Minter {
    return new Contract(address, _abi, signerOrProvider) as Minter;
  }
}