/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
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

export interface IntegrationRegistryInterface extends utils.Interface {
  functions: {
    "addIntegration(address,string,address)": FunctionFragment;
    "batchAddIntegration(address[],string[],address[])": FunctionFragment;
    "batchEditIntegration(address[],string[],address[])": FunctionFragment;
    "controller()": FunctionFragment;
    "editIntegration(address,string,address)": FunctionFragment;
    "getIntegrationAdapter(address,string)": FunctionFragment;
    "getIntegrationAdapterWithHash(address,bytes32)": FunctionFragment;
    "isValidIntegration(address,string)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeIntegration(address,string)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addIntegration",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "batchAddIntegration",
    values: [string[], string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "batchEditIntegration",
    values: [string[], string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "editIntegration",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getIntegrationAdapter",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getIntegrationAdapterWithHash",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidIntegration",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeIntegration",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addIntegration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchAddIntegration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchEditIntegration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "editIntegration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIntegrationAdapter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIntegrationAdapterWithHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidIntegration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeIntegration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "IntegrationAdded(address,address,string)": EventFragment;
    "IntegrationEdited(address,address,string)": EventFragment;
    "IntegrationRemoved(address,address,string)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "IntegrationAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IntegrationEdited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IntegrationRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type IntegrationAddedEvent = TypedEvent<
  [string, string, string],
  { _module: string; _adapter: string; _integrationName: string }
>;

export type IntegrationAddedEventFilter = TypedEventFilter<IntegrationAddedEvent>;

export type IntegrationEditedEvent = TypedEvent<
  [string, string, string],
  { _module: string; _newAdapter: string; _integrationName: string }
>;

export type IntegrationEditedEventFilter = TypedEventFilter<IntegrationEditedEvent>;

export type IntegrationRemovedEvent = TypedEvent<
  [string, string, string],
  { _module: string; _adapter: string; _integrationName: string }
>;

export type IntegrationRemovedEventFilter = TypedEventFilter<IntegrationRemovedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface IntegrationRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IntegrationRegistryInterface;

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
    addIntegration(
      _module: string,
      _name: string,
      _adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    batchAddIntegration(
      _modules: string[],
      _names: string[],
      _adapters: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    batchEditIntegration(
      _modules: string[],
      _names: string[],
      _adapters: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    controller(overrides?: CallOverrides): Promise<[string]>;

    editIntegration(
      _module: string,
      _name: string,
      _adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getIntegrationAdapter(
      _module: string,
      _name: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getIntegrationAdapterWithHash(
      _module: string,
      _nameHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isValidIntegration(
      _module: string,
      _name: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeIntegration(
      _module: string,
      _name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addIntegration(
    _module: string,
    _name: string,
    _adapter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  batchAddIntegration(
    _modules: string[],
    _names: string[],
    _adapters: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  batchEditIntegration(
    _modules: string[],
    _names: string[],
    _adapters: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  controller(overrides?: CallOverrides): Promise<string>;

  editIntegration(
    _module: string,
    _name: string,
    _adapter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getIntegrationAdapter(
    _module: string,
    _name: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getIntegrationAdapterWithHash(
    _module: string,
    _nameHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  isValidIntegration(
    _module: string,
    _name: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeIntegration(
    _module: string,
    _name: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addIntegration(
      _module: string,
      _name: string,
      _adapter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    batchAddIntegration(
      _modules: string[],
      _names: string[],
      _adapters: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    batchEditIntegration(
      _modules: string[],
      _names: string[],
      _adapters: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    controller(overrides?: CallOverrides): Promise<string>;

    editIntegration(
      _module: string,
      _name: string,
      _adapter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getIntegrationAdapter(
      _module: string,
      _name: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getIntegrationAdapterWithHash(
      _module: string,
      _nameHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    isValidIntegration(
      _module: string,
      _name: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeIntegration(
      _module: string,
      _name: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "IntegrationAdded(address,address,string)"(
      _module?: string | null,
      _adapter?: string | null,
      _integrationName?: null
    ): IntegrationAddedEventFilter;
    IntegrationAdded(
      _module?: string | null,
      _adapter?: string | null,
      _integrationName?: null
    ): IntegrationAddedEventFilter;

    "IntegrationEdited(address,address,string)"(
      _module?: string | null,
      _newAdapter?: null,
      _integrationName?: null
    ): IntegrationEditedEventFilter;
    IntegrationEdited(
      _module?: string | null,
      _newAdapter?: null,
      _integrationName?: null
    ): IntegrationEditedEventFilter;

    "IntegrationRemoved(address,address,string)"(
      _module?: string | null,
      _adapter?: string | null,
      _integrationName?: null
    ): IntegrationRemovedEventFilter;
    IntegrationRemoved(
      _module?: string | null,
      _adapter?: string | null,
      _integrationName?: null
    ): IntegrationRemovedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    addIntegration(
      _module: string,
      _name: string,
      _adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    batchAddIntegration(
      _modules: string[],
      _names: string[],
      _adapters: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    batchEditIntegration(
      _modules: string[],
      _names: string[],
      _adapters: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    editIntegration(
      _module: string,
      _name: string,
      _adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getIntegrationAdapter(
      _module: string,
      _name: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIntegrationAdapterWithHash(
      _module: string,
      _nameHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidIntegration(
      _module: string,
      _name: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeIntegration(
      _module: string,
      _name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addIntegration(
      _module: string,
      _name: string,
      _adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    batchAddIntegration(
      _modules: string[],
      _names: string[],
      _adapters: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    batchEditIntegration(
      _modules: string[],
      _names: string[],
      _adapters: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    editIntegration(
      _module: string,
      _name: string,
      _adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getIntegrationAdapter(
      _module: string,
      _name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIntegrationAdapterWithHash(
      _module: string,
      _nameHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidIntegration(
      _module: string,
      _name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeIntegration(
      _module: string,
      _name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
