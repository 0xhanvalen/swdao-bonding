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

export type StreamingFeeInfoStruct = {
  feeRecipient: string;
  streamingFeePercentage: BigNumberish;
  unaccruedFees: BigNumberish;
};

export type StreamingFeeInfoStructOutput = [string, BigNumber, BigNumber] & {
  feeRecipient: string;
  streamingFeePercentage: BigNumber;
  unaccruedFees: BigNumber;
};

export interface StreamingFeeModuleViewerInterface extends utils.Interface {
  functions: {
    "batchFetchStreamingFeeInfo(address,address[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "batchFetchStreamingFeeInfo",
    values: [string, string[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "batchFetchStreamingFeeInfo",
    data: BytesLike
  ): Result;

  events: {};
}

export interface StreamingFeeModuleViewer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StreamingFeeModuleViewerInterface;

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
    batchFetchStreamingFeeInfo(
      _streamingFeeModule: string,
      _setTokens: string[],
      overrides?: CallOverrides
    ): Promise<[StreamingFeeInfoStructOutput[]]>;
  };

  batchFetchStreamingFeeInfo(
    _streamingFeeModule: string,
    _setTokens: string[],
    overrides?: CallOverrides
  ): Promise<StreamingFeeInfoStructOutput[]>;

  callStatic: {
    batchFetchStreamingFeeInfo(
      _streamingFeeModule: string,
      _setTokens: string[],
      overrides?: CallOverrides
    ): Promise<StreamingFeeInfoStructOutput[]>;
  };

  filters: {};

  estimateGas: {
    batchFetchStreamingFeeInfo(
      _streamingFeeModule: string,
      _setTokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    batchFetchStreamingFeeInfo(
      _streamingFeeModule: string,
      _setTokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}