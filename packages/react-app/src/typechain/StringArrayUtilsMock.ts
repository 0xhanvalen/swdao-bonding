/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface StringArrayUtilsMockInterface extends utils.Interface {
  functions: {
    "getStorageArray()": FunctionFragment;
    "setStorageArray(string[])": FunctionFragment;
    "storageArray(uint256)": FunctionFragment;
    "testIndexOf(string[],string)": FunctionFragment;
    "testRemoveStorage(string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getStorageArray",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setStorageArray",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "storageArray",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "testIndexOf",
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "testRemoveStorage",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getStorageArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStorageArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "storageArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testIndexOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testRemoveStorage",
    data: BytesLike
  ): Result;

  events: {};
}

export interface StringArrayUtilsMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StringArrayUtilsMockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getStorageArray(overrides?: CallOverrides): Promise<[string[]]>;

    setStorageArray(
      A: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    storageArray(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    testIndexOf(
      A: string[],
      a: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean]>;

    testRemoveStorage(
      a: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getStorageArray(overrides?: CallOverrides): Promise<string[]>;

  setStorageArray(
    A: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  storageArray(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  testIndexOf(
    A: string[],
    a: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, boolean]>;

  testRemoveStorage(
    a: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getStorageArray(overrides?: CallOverrides): Promise<string[]>;

    setStorageArray(A: string[], overrides?: CallOverrides): Promise<void>;

    storageArray(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    testIndexOf(
      A: string[],
      a: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean]>;

    testRemoveStorage(a: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getStorageArray(overrides?: CallOverrides): Promise<BigNumber>;

    setStorageArray(
      A: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    storageArray(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testIndexOf(
      A: string[],
      a: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testRemoveStorage(
      a: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getStorageArray(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setStorageArray(
      A: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    storageArray(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testIndexOf(
      A: string[],
      a: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testRemoveStorage(
      a: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
