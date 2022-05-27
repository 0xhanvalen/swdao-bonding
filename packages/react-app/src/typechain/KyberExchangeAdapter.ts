/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface KyberExchangeAdapterInterface extends utils.Interface {
  functions: {
    "getConversionRates(address,address,uint256)": FunctionFragment;
    "getSpender()": FunctionFragment;
    "getTradeCalldata(address,address,address,uint256,uint256,bytes)": FunctionFragment;
    "kyberNetworkProxyAddress()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getConversionRates",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSpender",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTradeCalldata",
    values: [string, string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "kyberNetworkProxyAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getConversionRates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSpender", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTradeCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "kyberNetworkProxyAddress",
    data: BytesLike
  ): Result;

  events: {};
}

export interface KyberExchangeAdapter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KyberExchangeAdapterInterface;

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
    getConversionRates(
      _sourceToken: string,
      _destinationToken: string,
      _sourceQuantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getSpender(overrides?: CallOverrides): Promise<[string]>;

    getTradeCalldata(
      _sourceToken: string,
      _destinationToken: string,
      _destinationAddress: string,
      _sourceQuantity: BigNumberish,
      _minDestinationQuantity: BigNumberish,
      arg5: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    kyberNetworkProxyAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  getConversionRates(
    _sourceToken: string,
    _destinationToken: string,
    _sourceQuantity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  getSpender(overrides?: CallOverrides): Promise<string>;

  getTradeCalldata(
    _sourceToken: string,
    _destinationToken: string,
    _destinationAddress: string,
    _sourceQuantity: BigNumberish,
    _minDestinationQuantity: BigNumberish,
    arg5: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, string]>;

  kyberNetworkProxyAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getConversionRates(
      _sourceToken: string,
      _destinationToken: string,
      _sourceQuantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getSpender(overrides?: CallOverrides): Promise<string>;

    getTradeCalldata(
      _sourceToken: string,
      _destinationToken: string,
      _destinationAddress: string,
      _sourceQuantity: BigNumberish,
      _minDestinationQuantity: BigNumberish,
      arg5: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    kyberNetworkProxyAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getConversionRates(
      _sourceToken: string,
      _destinationToken: string,
      _sourceQuantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSpender(overrides?: CallOverrides): Promise<BigNumber>;

    getTradeCalldata(
      _sourceToken: string,
      _destinationToken: string,
      _destinationAddress: string,
      _sourceQuantity: BigNumberish,
      _minDestinationQuantity: BigNumberish,
      arg5: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    kyberNetworkProxyAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getConversionRates(
      _sourceToken: string,
      _destinationToken: string,
      _sourceQuantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSpender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTradeCalldata(
      _sourceToken: string,
      _destinationToken: string,
      _destinationAddress: string,
      _sourceQuantity: BigNumberish,
      _minDestinationQuantity: BigNumberish,
      arg5: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kyberNetworkProxyAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}