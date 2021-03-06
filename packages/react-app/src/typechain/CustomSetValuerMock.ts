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

export interface CustomSetValuerMockInterface extends utils.Interface {
  functions: {
    "calculateSetTokenValuation(address,address)": FunctionFragment;
    "setValuation(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateSetTokenValuation",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setValuation",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateSetTokenValuation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setValuation",
    data: BytesLike
  ): Result;

  events: {};
}

export interface CustomSetValuerMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CustomSetValuerMockInterface;

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
    calculateSetTokenValuation(
      arg0: string,
      _quoteAsset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setValuation(
      _quoteAsset: string,
      _valuation: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  calculateSetTokenValuation(
    arg0: string,
    _quoteAsset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setValuation(
    _quoteAsset: string,
    _valuation: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    calculateSetTokenValuation(
      arg0: string,
      _quoteAsset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setValuation(
      _quoteAsset: string,
      _valuation: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    calculateSetTokenValuation(
      arg0: string,
      _quoteAsset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setValuation(
      _quoteAsset: string,
      _valuation: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateSetTokenValuation(
      arg0: string,
      _quoteAsset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setValuation(
      _quoteAsset: string,
      _valuation: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
