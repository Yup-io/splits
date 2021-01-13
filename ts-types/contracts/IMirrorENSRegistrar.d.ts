/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IMirrorENSRegistrarInterface extends ethers.utils.Interface {
  functions: {
    "changeRootnodeOwner(address)": FunctionFragment;
    "ensResolver()": FunctionFragment;
    "getENSReverseRegistrar()": FunctionFragment;
    "isAvailable(bytes32)": FunctionFragment;
    "register(string,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "changeRootnodeOwner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "ensResolver",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getENSReverseRegistrar",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAvailable",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeRootnodeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ensResolver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getENSReverseRegistrar",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;

  events: {
    "ENSResolverChanged(address)": EventFragment;
    "RegisteredENS(address,string)": EventFragment;
    "RootnodeOwnerChange(bytes32,address)": EventFragment;
    "UnregisteredENS(string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ENSResolverChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RegisteredENS"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RootnodeOwnerChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnregisteredENS"): EventFragment;
}

export class IMirrorENSRegistrar extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IMirrorENSRegistrarInterface;

  functions: {
    changeRootnodeOwner(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "changeRootnodeOwner(address)"(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ensResolver(overrides?: CallOverrides): Promise<[string]>;

    "ensResolver()"(overrides?: CallOverrides): Promise<[string]>;

    getENSReverseRegistrar(overrides?: CallOverrides): Promise<[string]>;

    "getENSReverseRegistrar()"(overrides?: CallOverrides): Promise<[string]>;

    isAvailable(
      _subnode: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isAvailable(bytes32)"(
      _subnode: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    register(
      _label: string,
      _owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "register(string,address)"(
      _label: string,
      _owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  changeRootnodeOwner(
    _newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "changeRootnodeOwner(address)"(
    _newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ensResolver(overrides?: CallOverrides): Promise<string>;

  "ensResolver()"(overrides?: CallOverrides): Promise<string>;

  getENSReverseRegistrar(overrides?: CallOverrides): Promise<string>;

  "getENSReverseRegistrar()"(overrides?: CallOverrides): Promise<string>;

  isAvailable(_subnode: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  "isAvailable(bytes32)"(
    _subnode: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  register(
    _label: string,
    _owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "register(string,address)"(
    _label: string,
    _owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    changeRootnodeOwner(
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "changeRootnodeOwner(address)"(
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    ensResolver(overrides?: CallOverrides): Promise<string>;

    "ensResolver()"(overrides?: CallOverrides): Promise<string>;

    getENSReverseRegistrar(overrides?: CallOverrides): Promise<string>;

    "getENSReverseRegistrar()"(overrides?: CallOverrides): Promise<string>;

    isAvailable(
      _subnode: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isAvailable(bytes32)"(
      _subnode: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    register(
      _label: string,
      _owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "register(string,address)"(
      _label: string,
      _owner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ENSResolverChanged(addr: null): EventFilter;

    RegisteredENS(_owner: string | null, _ens: null): EventFilter;

    RootnodeOwnerChange(
      _rootnode: BytesLike | null,
      _newOwner: string | null
    ): EventFilter;

    UnregisteredENS(_ens: null): EventFilter;
  };

  estimateGas: {
    changeRootnodeOwner(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "changeRootnodeOwner(address)"(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    ensResolver(overrides?: CallOverrides): Promise<BigNumber>;

    "ensResolver()"(overrides?: CallOverrides): Promise<BigNumber>;

    getENSReverseRegistrar(overrides?: CallOverrides): Promise<BigNumber>;

    "getENSReverseRegistrar()"(overrides?: CallOverrides): Promise<BigNumber>;

    isAvailable(
      _subnode: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isAvailable(bytes32)"(
      _subnode: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    register(
      _label: string,
      _owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "register(string,address)"(
      _label: string,
      _owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    changeRootnodeOwner(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "changeRootnodeOwner(address)"(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ensResolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ensResolver()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getENSReverseRegistrar(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getENSReverseRegistrar()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAvailable(
      _subnode: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAvailable(bytes32)"(
      _subnode: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    register(
      _label: string,
      _owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "register(string,address)"(
      _label: string,
      _owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}