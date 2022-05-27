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

export interface CompoundPriceOracleMockInterface extends utils.Interface {
  functions: {
    "assetToPrices(address)": FunctionFragment;
    "getUnderlyingPrice(address)": FunctionFragment;
    "setUnderlyingPrice(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "assetToPrices",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnderlyingPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setUnderlyingPrice",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "assetToPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnderlyingPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUnderlyingPrice",
    data: BytesLike
  ): Result;

  events: {};
}

export interface CompoundPriceOracleMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CompoundPriceOracleMockInterface;

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
    assetToPrices(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUnderlyingPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setUnderlyingPrice(
      _token: string,
      _newPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  assetToPrices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  getUnderlyingPrice(
    _asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setUnderlyingPrice(
    _token: string,
    _newPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    assetToPrices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getUnderlyingPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setUnderlyingPrice(
      _token: string,
      _newPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    assetToPrices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getUnderlyingPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setUnderlyingPrice(
      _token: string,
      _newPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    assetToPrices(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUnderlyingPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setUnderlyingPrice(
      _token: string,
      _newPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}