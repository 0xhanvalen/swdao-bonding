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

export interface AmmAdapterMockInterface extends utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "approvedToken()": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "exitPool(uint256,uint256[])": FunctionFragment;
    "exitswapPoolAmountIn(address,uint256,uint256)": FunctionFragment;
    "getProvideLiquidityCalldata(address,address,address[],uint256[],uint256)": FunctionFragment;
    "getProvideLiquiditySingleAssetCalldata(address,address,address,uint256,uint256)": FunctionFragment;
    "getRemoveLiquidityCalldata(address,address,address[],uint256[],uint256)": FunctionFragment;
    "getRemoveLiquiditySingleAssetCalldata(address,address,address,uint256,uint256)": FunctionFragment;
    "getSpenderAddress(address)": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "isValidPool(address,address[])": FunctionFragment;
    "joinPool(uint256,uint256[])": FunctionFragment;
    "joinswapPoolAmountOut(address,uint256,uint256)": FunctionFragment;
    "mintTo(address,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "poolTokens(uint256)": FunctionFragment;
    "returnLessThanMinimum()": FunctionFragment;
    "setApprovedToken(address)": FunctionFragment;
    "setMintLessThanMinimum()": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approvedToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exitPool",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "exitswapPoolAmountIn",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProvideLiquidityCalldata",
    values: [string, string, string[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProvideLiquiditySingleAssetCalldata",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRemoveLiquidityCalldata",
    values: [string, string, string[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRemoveLiquiditySingleAssetCalldata",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSpenderAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidPool",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "joinPool",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "joinswapPoolAmountOut",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintTo",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "returnLessThanMinimum",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovedToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setMintLessThanMinimum",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approvedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exitPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exitswapPoolAmountIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProvideLiquidityCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProvideLiquiditySingleAssetCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRemoveLiquidityCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRemoveLiquiditySingleAssetCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSpenderAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "joinPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "joinswapPoolAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "returnLessThanMinimum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMintLessThanMinimum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  { owner: string; spender: string; value: BigNumber }
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  { from: string; to: string; value: BigNumber }
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface AmmAdapterMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AmmAdapterMockInterface;

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
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approvedToken(overrides?: CallOverrides): Promise<[string]>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exitPool(
      poolAmountIn: BigNumberish,
      minAmountsOut: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exitswapPoolAmountIn(
      tokenOut: string,
      poolAmountIn: BigNumberish,
      minAmountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getProvideLiquidityCalldata(
      arg0: string,
      _pool: string,
      _components: string[],
      _maxTokensIn: BigNumberish[],
      _minLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string] & {
        _target: string;
        _value: BigNumber;
        _calldata: string;
      }
    >;

    getProvideLiquiditySingleAssetCalldata(
      arg0: string,
      _pool: string,
      _component: string,
      _maxTokenIn: BigNumberish,
      _minLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string] & {
        _target: string;
        _value: BigNumber;
        _calldata: string;
      }
    >;

    getRemoveLiquidityCalldata(
      arg0: string,
      _pool: string,
      _components: string[],
      _minTokensOut: BigNumberish[],
      _liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string] & {
        _target: string;
        _value: BigNumber;
        _calldata: string;
      }
    >;

    getRemoveLiquiditySingleAssetCalldata(
      arg0: string,
      _pool: string,
      _component: string,
      _minTokenOut: BigNumberish,
      _liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string] & {
        _target: string;
        _value: BigNumber;
        _calldata: string;
      }
    >;

    getSpenderAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isValidPool(
      _pool: string,
      arg1: string[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    joinPool(
      poolAmountOut: BigNumberish,
      maxAmountsIn: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    joinswapPoolAmountOut(
      tokenIn: string,
      poolAmountOut: BigNumberish,
      maxAmountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintTo(
      _to: string,
      _quantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    poolTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    returnLessThanMinimum(overrides?: CallOverrides): Promise<[boolean]>;

    setApprovedToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMintLessThanMinimum(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approvedToken(overrides?: CallOverrides): Promise<string>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exitPool(
    poolAmountIn: BigNumberish,
    minAmountsOut: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exitswapPoolAmountIn(
    tokenOut: string,
    poolAmountIn: BigNumberish,
    minAmountOut: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getProvideLiquidityCalldata(
    arg0: string,
    _pool: string,
    _components: string[],
    _maxTokensIn: BigNumberish[],
    _minLiquidity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string] & {
      _target: string;
      _value: BigNumber;
      _calldata: string;
    }
  >;

  getProvideLiquiditySingleAssetCalldata(
    arg0: string,
    _pool: string,
    _component: string,
    _maxTokenIn: BigNumberish,
    _minLiquidity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string] & {
      _target: string;
      _value: BigNumber;
      _calldata: string;
    }
  >;

  getRemoveLiquidityCalldata(
    arg0: string,
    _pool: string,
    _components: string[],
    _minTokensOut: BigNumberish[],
    _liquidity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string] & {
      _target: string;
      _value: BigNumber;
      _calldata: string;
    }
  >;

  getRemoveLiquiditySingleAssetCalldata(
    arg0: string,
    _pool: string,
    _component: string,
    _minTokenOut: BigNumberish,
    _liquidity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string] & {
      _target: string;
      _value: BigNumber;
      _calldata: string;
    }
  >;

  getSpenderAddress(arg0: string, overrides?: CallOverrides): Promise<string>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isValidPool(
    _pool: string,
    arg1: string[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  joinPool(
    poolAmountOut: BigNumberish,
    maxAmountsIn: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  joinswapPoolAmountOut(
    tokenIn: string,
    poolAmountOut: BigNumberish,
    maxAmountIn: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintTo(
    _to: string,
    _quantity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  poolTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  returnLessThanMinimum(overrides?: CallOverrides): Promise<boolean>;

  setApprovedToken(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMintLessThanMinimum(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    approvedToken(overrides?: CallOverrides): Promise<string>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    exitPool(
      poolAmountIn: BigNumberish,
      minAmountsOut: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    exitswapPoolAmountIn(
      tokenOut: string,
      poolAmountIn: BigNumberish,
      minAmountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getProvideLiquidityCalldata(
      arg0: string,
      _pool: string,
      _components: string[],
      _maxTokensIn: BigNumberish[],
      _minLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string] & {
        _target: string;
        _value: BigNumber;
        _calldata: string;
      }
    >;

    getProvideLiquiditySingleAssetCalldata(
      arg0: string,
      _pool: string,
      _component: string,
      _maxTokenIn: BigNumberish,
      _minLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string] & {
        _target: string;
        _value: BigNumber;
        _calldata: string;
      }
    >;

    getRemoveLiquidityCalldata(
      arg0: string,
      _pool: string,
      _components: string[],
      _minTokensOut: BigNumberish[],
      _liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string] & {
        _target: string;
        _value: BigNumber;
        _calldata: string;
      }
    >;

    getRemoveLiquiditySingleAssetCalldata(
      arg0: string,
      _pool: string,
      _component: string,
      _minTokenOut: BigNumberish,
      _liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string] & {
        _target: string;
        _value: BigNumber;
        _calldata: string;
      }
    >;

    getSpenderAddress(arg0: string, overrides?: CallOverrides): Promise<string>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isValidPool(
      _pool: string,
      arg1: string[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    joinPool(
      poolAmountOut: BigNumberish,
      maxAmountsIn: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    joinswapPoolAmountOut(
      tokenIn: string,
      poolAmountOut: BigNumberish,
      maxAmountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    mintTo(
      _to: string,
      _quantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    poolTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    returnLessThanMinimum(overrides?: CallOverrides): Promise<boolean>;

    setApprovedToken(_token: string, overrides?: CallOverrides): Promise<void>;

    setMintLessThanMinimum(overrides?: CallOverrides): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approvedToken(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exitPool(
      poolAmountIn: BigNumberish,
      minAmountsOut: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exitswapPoolAmountIn(
      tokenOut: string,
      poolAmountIn: BigNumberish,
      minAmountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getProvideLiquidityCalldata(
      arg0: string,
      _pool: string,
      _components: string[],
      _maxTokensIn: BigNumberish[],
      _minLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProvideLiquiditySingleAssetCalldata(
      arg0: string,
      _pool: string,
      _component: string,
      _maxTokenIn: BigNumberish,
      _minLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRemoveLiquidityCalldata(
      arg0: string,
      _pool: string,
      _components: string[],
      _minTokensOut: BigNumberish[],
      _liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRemoveLiquiditySingleAssetCalldata(
      arg0: string,
      _pool: string,
      _component: string,
      _minTokenOut: BigNumberish,
      _liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSpenderAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isValidPool(
      _pool: string,
      arg1: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    joinPool(
      poolAmountOut: BigNumberish,
      maxAmountsIn: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    joinswapPoolAmountOut(
      tokenIn: string,
      poolAmountOut: BigNumberish,
      maxAmountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintTo(
      _to: string,
      _quantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    poolTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnLessThanMinimum(overrides?: CallOverrides): Promise<BigNumber>;

    setApprovedToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMintLessThanMinimum(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approvedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exitPool(
      poolAmountIn: BigNumberish,
      minAmountsOut: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exitswapPoolAmountIn(
      tokenOut: string,
      poolAmountIn: BigNumberish,
      minAmountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getProvideLiquidityCalldata(
      arg0: string,
      _pool: string,
      _components: string[],
      _maxTokensIn: BigNumberish[],
      _minLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProvideLiquiditySingleAssetCalldata(
      arg0: string,
      _pool: string,
      _component: string,
      _maxTokenIn: BigNumberish,
      _minLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRemoveLiquidityCalldata(
      arg0: string,
      _pool: string,
      _components: string[],
      _minTokensOut: BigNumberish[],
      _liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRemoveLiquiditySingleAssetCalldata(
      arg0: string,
      _pool: string,
      _component: string,
      _minTokenOut: BigNumberish,
      _liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSpenderAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isValidPool(
      _pool: string,
      arg1: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    joinPool(
      poolAmountOut: BigNumberish,
      maxAmountsIn: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    joinswapPoolAmountOut(
      tokenIn: string,
      poolAmountOut: BigNumberish,
      maxAmountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintTo(
      _to: string,
      _quantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    returnLessThanMinimum(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setApprovedToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMintLessThanMinimum(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
