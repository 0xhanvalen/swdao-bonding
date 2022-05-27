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

export interface GaugeControllerMockInterface extends utils.Interface {
  functions: {
    "addGaugeType(address,int128)": FunctionFragment;
    "gauge_types(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addGaugeType",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "gauge_types", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "addGaugeType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gauge_types",
    data: BytesLike
  ): Result;

  events: {};
}

export interface GaugeControllerMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GaugeControllerMockInterface;

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
    addGaugeType(
      _gauge: string,
      _type: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    gauge_types(
      _gauge: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  addGaugeType(
    _gauge: string,
    _type: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  gauge_types(_gauge: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    addGaugeType(
      _gauge: string,
      _type: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    gauge_types(_gauge: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    addGaugeType(
      _gauge: string,
      _type: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    gauge_types(_gauge: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addGaugeType(
      _gauge: string,
      _type: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    gauge_types(
      _gauge: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}