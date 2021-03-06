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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface AMMSplitterInterface extends utils.Interface {
  functions: {
    "getAmountsIn(uint256,address[])": FunctionFragment;
    "getAmountsOut(uint256,address[])": FunctionFragment;
    "sushiFactory()": FunctionFragment;
    "sushiRouter()": FunctionFragment;
    "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
    "swapTokensForExactTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
    "uniFactory()": FunctionFragment;
    "uniRouter()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAmountsIn",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountsOut",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "sushiFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sushiRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForTokens",
    values: [BigNumberish, BigNumberish, string[], string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForExactTokens",
    values: [BigNumberish, BigNumberish, string[], string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "uniFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "uniRouter", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "getAmountsIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sushiFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sushiRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForExactTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uniFactory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "uniRouter", data: BytesLike): Result;

  events: {
    "TradeExactInputExecuted(address,address,address,uint256,uint256,uint256,uint256)": EventFragment;
    "TradeExactOutputExecuted(address,address,address,uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TradeExactInputExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TradeExactOutputExecuted"): EventFragment;
}

export type TradeExactInputExecutedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    _sendToken: string;
    _receiveToken: string;
    _to: string;
    _amountIn: BigNumber;
    _amountOut: BigNumber;
    _uniTradeSize: BigNumber;
    _sushiTradeSize: BigNumber;
  }
>;

export type TradeExactInputExecutedEventFilter = TypedEventFilter<TradeExactInputExecutedEvent>;

export type TradeExactOutputExecutedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    _sendToken: string;
    _receiveToken: string;
    _to: string;
    _amountIn: BigNumber;
    _amountOut: BigNumber;
    _uniTradeSize: BigNumber;
    _sushiTradeSize: BigNumber;
  }
>;

export type TradeExactOutputExecutedEventFilter = TypedEventFilter<TradeExactOutputExecutedEvent>;

export interface AMMSplitter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AMMSplitterInterface;

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
    getAmountsIn(
      _amountOut: BigNumberish,
      _path: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getAmountsOut(
      _amountIn: BigNumberish,
      _path: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    sushiFactory(overrides?: CallOverrides): Promise<[string]>;

    sushiRouter(overrides?: CallOverrides): Promise<[string]>;

    swapExactTokensForTokens(
      _amountIn: BigNumberish,
      _amountOutMin: BigNumberish,
      _path: string[],
      _to: string,
      _deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapTokensForExactTokens(
      _amountOut: BigNumberish,
      _amountInMax: BigNumberish,
      _path: string[],
      _to: string,
      _deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uniFactory(overrides?: CallOverrides): Promise<[string]>;

    uniRouter(overrides?: CallOverrides): Promise<[string]>;
  };

  getAmountsIn(
    _amountOut: BigNumberish,
    _path: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getAmountsOut(
    _amountIn: BigNumberish,
    _path: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  sushiFactory(overrides?: CallOverrides): Promise<string>;

  sushiRouter(overrides?: CallOverrides): Promise<string>;

  swapExactTokensForTokens(
    _amountIn: BigNumberish,
    _amountOutMin: BigNumberish,
    _path: string[],
    _to: string,
    _deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapTokensForExactTokens(
    _amountOut: BigNumberish,
    _amountInMax: BigNumberish,
    _path: string[],
    _to: string,
    _deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uniFactory(overrides?: CallOverrides): Promise<string>;

  uniRouter(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getAmountsIn(
      _amountOut: BigNumberish,
      _path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getAmountsOut(
      _amountIn: BigNumberish,
      _path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    sushiFactory(overrides?: CallOverrides): Promise<string>;

    sushiRouter(overrides?: CallOverrides): Promise<string>;

    swapExactTokensForTokens(
      _amountIn: BigNumberish,
      _amountOutMin: BigNumberish,
      _path: string[],
      _to: string,
      _deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapTokensForExactTokens(
      _amountOut: BigNumberish,
      _amountInMax: BigNumberish,
      _path: string[],
      _to: string,
      _deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uniFactory(overrides?: CallOverrides): Promise<string>;

    uniRouter(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "TradeExactInputExecuted(address,address,address,uint256,uint256,uint256,uint256)"(
      _sendToken?: string | null,
      _receiveToken?: string | null,
      _to?: string | null,
      _amountIn?: null,
      _amountOut?: null,
      _uniTradeSize?: null,
      _sushiTradeSize?: null
    ): TradeExactInputExecutedEventFilter;
    TradeExactInputExecuted(
      _sendToken?: string | null,
      _receiveToken?: string | null,
      _to?: string | null,
      _amountIn?: null,
      _amountOut?: null,
      _uniTradeSize?: null,
      _sushiTradeSize?: null
    ): TradeExactInputExecutedEventFilter;

    "TradeExactOutputExecuted(address,address,address,uint256,uint256,uint256,uint256)"(
      _sendToken?: string | null,
      _receiveToken?: string | null,
      _to?: string | null,
      _amountIn?: null,
      _amountOut?: null,
      _uniTradeSize?: null,
      _sushiTradeSize?: null
    ): TradeExactOutputExecutedEventFilter;
    TradeExactOutputExecuted(
      _sendToken?: string | null,
      _receiveToken?: string | null,
      _to?: string | null,
      _amountIn?: null,
      _amountOut?: null,
      _uniTradeSize?: null,
      _sushiTradeSize?: null
    ): TradeExactOutputExecutedEventFilter;
  };

  estimateGas: {
    getAmountsIn(
      _amountOut: BigNumberish,
      _path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountsOut(
      _amountIn: BigNumberish,
      _path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sushiFactory(overrides?: CallOverrides): Promise<BigNumber>;

    sushiRouter(overrides?: CallOverrides): Promise<BigNumber>;

    swapExactTokensForTokens(
      _amountIn: BigNumberish,
      _amountOutMin: BigNumberish,
      _path: string[],
      _to: string,
      _deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapTokensForExactTokens(
      _amountOut: BigNumberish,
      _amountInMax: BigNumberish,
      _path: string[],
      _to: string,
      _deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uniFactory(overrides?: CallOverrides): Promise<BigNumber>;

    uniRouter(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getAmountsIn(
      _amountOut: BigNumberish,
      _path: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAmountsOut(
      _amountIn: BigNumberish,
      _path: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sushiFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sushiRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swapExactTokensForTokens(
      _amountIn: BigNumberish,
      _amountOutMin: BigNumberish,
      _path: string[],
      _to: string,
      _deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapTokensForExactTokens(
      _amountOut: BigNumberish,
      _amountInMax: BigNumberish,
      _path: string[],
      _to: string,
      _deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uniFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uniRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
