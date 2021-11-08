import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_proto_cosmos_pb from '../../../cosmos_proto/cosmos_pb';


export class AcctAmtPair extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): AcctAmtPair;

  getAmount(): string;
  setAmount(value: string): AcctAmtPair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcctAmtPair.AsObject;
  static toObject(includeInstance: boolean, msg: AcctAmtPair): AcctAmtPair.AsObject;
  static serializeBinaryToWriter(message: AcctAmtPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcctAmtPair;
  static deserializeBinaryFromReader(message: AcctAmtPair, reader: jspb.BinaryReader): AcctAmtPair;
}

export namespace AcctAmtPair {
  export type AsObject = {
    account: string,
    amount: string,
  }
}

export class Sig extends jspb.Message {
  getSigner(): string;
  setSigner(value: string): Sig;

  getSig(): Uint8Array | string;
  getSig_asU8(): Uint8Array;
  getSig_asB64(): string;
  setSig(value: Uint8Array | string): Sig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sig.AsObject;
  static toObject(includeInstance: boolean, msg: Sig): Sig.AsObject;
  static serializeBinaryToWriter(message: Sig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sig;
  static deserializeBinaryFromReader(message: Sig, reader: jspb.BinaryReader): Sig;
}

export namespace Sig {
  export type AsObject = {
    signer: string,
    sig: Uint8Array | string,
  }
}

export class Slash extends jspb.Message {
  getValidator(): string;
  setValidator(value: string): Slash;

  getNonce(): number;
  setNonce(value: number): Slash;

  getSlashFactor(): number;
  setSlashFactor(value: number): Slash;

  getExpireTime(): number;
  setExpireTime(value: number): Slash;

  getJailPeriod(): number;
  setJailPeriod(value: number): Slash;

  getCollectorsList(): Array<AcctAmtPair>;
  setCollectorsList(value: Array<AcctAmtPair>): Slash;
  clearCollectorsList(): Slash;
  addCollectors(value?: AcctAmtPair, index?: number): AcctAmtPair;

  getReason(): string;
  setReason(value: string): Slash;

  getEthSlashBytes(): Uint8Array | string;
  getEthSlashBytes_asU8(): Uint8Array;
  getEthSlashBytes_asB64(): string;
  setEthSlashBytes(value: Uint8Array | string): Slash;

  getSigsList(): Array<Sig>;
  setSigsList(value: Array<Sig>): Slash;
  clearSigsList(): Slash;
  addSigs(value?: Sig, index?: number): Sig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Slash.AsObject;
  static toObject(includeInstance: boolean, msg: Slash): Slash.AsObject;
  static serializeBinaryToWriter(message: Slash, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Slash;
  static deserializeBinaryFromReader(message: Slash, reader: jspb.BinaryReader): Slash;
}

export namespace Slash {
  export type AsObject = {
    validator: string,
    nonce: number,
    slashFactor: number,
    expireTime: number,
    jailPeriod: number,
    collectorsList: Array<AcctAmtPair.AsObject>,
    reason: string,
    ethSlashBytes: Uint8Array | string,
    sigsList: Array<Sig.AsObject>,
  }
}

export class Params extends jspb.Message {
  getEnableSlash(): boolean;
  setEnableSlash(value: boolean): Params;

  getSignedBlocksWindow(): number;
  setSignedBlocksWindow(value: number): Params;

  getSlashTimeout(): number;
  setSlashTimeout(value: number): Params;

  getSlashFactorDoubleSign(): number;
  setSlashFactorDoubleSign(value: number): Params;

  getSlashFactorDowntime(): number;
  setSlashFactorDowntime(value: number): Params;

  getJailPeriod(): number;
  setJailPeriod(value: number): Params;

  getMinSignedPerWindow(): Uint8Array | string;
  getMinSignedPerWindow_asU8(): Uint8Array;
  getMinSignedPerWindow_asB64(): string;
  setMinSignedPerWindow(value: Uint8Array | string): Params;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    enableSlash: boolean,
    signedBlocksWindow: number,
    slashTimeout: number,
    slashFactorDoubleSign: number,
    slashFactorDowntime: number,
    jailPeriod: number,
    minSignedPerWindow: Uint8Array | string,
  }
}

export class QuerySlashParams extends jspb.Message {
  getNonce(): number;
  setNonce(value: number): QuerySlashParams;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySlashParams.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySlashParams): QuerySlashParams.AsObject;
  static serializeBinaryToWriter(message: QuerySlashParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySlashParams;
  static deserializeBinaryFromReader(message: QuerySlashParams, reader: jspb.BinaryReader): QuerySlashParams;
}

export namespace QuerySlashParams {
  export type AsObject = {
    nonce: number,
  }
}

