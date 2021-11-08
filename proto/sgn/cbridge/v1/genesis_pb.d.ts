import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as sgn_cbridge_v1_cbridge_pb from '../../../sgn/cbridge/v1/cbridge_pb';


export class GenesisState extends jspb.Message {
  getParams(): sgn_cbridge_v1_cbridge_pb.Params | undefined;
  setParams(value?: sgn_cbridge_v1_cbridge_pb.Params): GenesisState;
  hasParams(): boolean;
  clearParams(): GenesisState;

  getConfig(): sgn_cbridge_v1_cbridge_pb.CbrConfig | undefined;
  setConfig(value?: sgn_cbridge_v1_cbridge_pb.CbrConfig): GenesisState;
  hasConfig(): boolean;
  clearConfig(): GenesisState;

  getPrice(): sgn_cbridge_v1_cbridge_pb.CbrPrice | undefined;
  setPrice(value?: sgn_cbridge_v1_cbridge_pb.CbrPrice): GenesisState;
  hasPrice(): boolean;
  clearPrice(): GenesisState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    params?: sgn_cbridge_v1_cbridge_pb.Params.AsObject,
    config?: sgn_cbridge_v1_cbridge_pb.CbrConfig.AsObject,
    price?: sgn_cbridge_v1_cbridge_pb.CbrPrice.AsObject,
  }
}

