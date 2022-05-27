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

export interface AaveGovernanceV2AdapterInterface extends utils.Interface {
  functions: {
    "DELEGATE_SIGNATURE()": FunctionFragment;
    "PROPOSE_SIGNATURE()": FunctionFragment;
    "VOTE_SIGNATURE()": FunctionFragment;
    "aaveGovernanceV2()": FunctionFragment;
    "aaveToken()": FunctionFragment;
    "getDelegateCalldata(address)": FunctionFragment;
    "getProposeCalldata(bytes)": FunctionFragment;
    "getRegisterCalldata(address)": FunctionFragment;
    "getRevokeCalldata()": FunctionFragment;
    "getVoteCalldata(uint256,bool,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DELEGATE_SIGNATURE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PROPOSE_SIGNATURE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "VOTE_SIGNATURE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "aaveGovernanceV2",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "aaveToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getDelegateCalldata",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposeCalldata",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRegisterCalldata",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRevokeCalldata",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVoteCalldata",
    values: [BigNumberish, boolean, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "DELEGATE_SIGNATURE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PROPOSE_SIGNATURE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "VOTE_SIGNATURE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "aaveGovernanceV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "aaveToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDelegateCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposeCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRegisterCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRevokeCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVoteCalldata",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AaveGovernanceV2Adapter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AaveGovernanceV2AdapterInterface;

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
    DELEGATE_SIGNATURE(overrides?: CallOverrides): Promise<[string]>;

    PROPOSE_SIGNATURE(overrides?: CallOverrides): Promise<[string]>;

    VOTE_SIGNATURE(overrides?: CallOverrides): Promise<[string]>;

    aaveGovernanceV2(overrides?: CallOverrides): Promise<[string]>;

    aaveToken(overrides?: CallOverrides): Promise<[string]>;

    getDelegateCalldata(
      _delegatee: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    getProposeCalldata(
      _proposalData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    getRegisterCalldata(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    getRevokeCalldata(
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    getVoteCalldata(
      _proposalId: BigNumberish,
      _support: boolean,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;
  };

  DELEGATE_SIGNATURE(overrides?: CallOverrides): Promise<string>;

  PROPOSE_SIGNATURE(overrides?: CallOverrides): Promise<string>;

  VOTE_SIGNATURE(overrides?: CallOverrides): Promise<string>;

  aaveGovernanceV2(overrides?: CallOverrides): Promise<string>;

  aaveToken(overrides?: CallOverrides): Promise<string>;

  getDelegateCalldata(
    _delegatee: string,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, string]>;

  getProposeCalldata(
    _proposalData: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, string]>;

  getRegisterCalldata(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, string]>;

  getRevokeCalldata(
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, string]>;

  getVoteCalldata(
    _proposalId: BigNumberish,
    _support: boolean,
    arg2: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, string]>;

  callStatic: {
    DELEGATE_SIGNATURE(overrides?: CallOverrides): Promise<string>;

    PROPOSE_SIGNATURE(overrides?: CallOverrides): Promise<string>;

    VOTE_SIGNATURE(overrides?: CallOverrides): Promise<string>;

    aaveGovernanceV2(overrides?: CallOverrides): Promise<string>;

    aaveToken(overrides?: CallOverrides): Promise<string>;

    getDelegateCalldata(
      _delegatee: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    getProposeCalldata(
      _proposalData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    getRegisterCalldata(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    getRevokeCalldata(
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    getVoteCalldata(
      _proposalId: BigNumberish,
      _support: boolean,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;
  };

  filters: {};

  estimateGas: {
    DELEGATE_SIGNATURE(overrides?: CallOverrides): Promise<BigNumber>;

    PROPOSE_SIGNATURE(overrides?: CallOverrides): Promise<BigNumber>;

    VOTE_SIGNATURE(overrides?: CallOverrides): Promise<BigNumber>;

    aaveGovernanceV2(overrides?: CallOverrides): Promise<BigNumber>;

    aaveToken(overrides?: CallOverrides): Promise<BigNumber>;

    getDelegateCalldata(
      _delegatee: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposeCalldata(
      _proposalData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRegisterCalldata(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRevokeCalldata(overrides?: CallOverrides): Promise<BigNumber>;

    getVoteCalldata(
      _proposalId: BigNumberish,
      _support: boolean,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DELEGATE_SIGNATURE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PROPOSE_SIGNATURE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VOTE_SIGNATURE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    aaveGovernanceV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    aaveToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDelegateCalldata(
      _delegatee: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposeCalldata(
      _proposalData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRegisterCalldata(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRevokeCalldata(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVoteCalldata(
      _proposalId: BigNumberish,
      _support: boolean,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}