import * as jspb from 'google-protobuf'

import * as sgn_cbridge_v1_cbridge_pb from '../../../sgn/cbridge/v1/cbridge_pb';


export class ChainTokensConfigRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChainTokensConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChainTokensConfigRequest): ChainTokensConfigRequest.AsObject;
  static serializeBinaryToWriter(message: ChainTokensConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChainTokensConfigRequest;
  static deserializeBinaryFromReader(message: ChainTokensConfigRequest, reader: jspb.BinaryReader): ChainTokensConfigRequest;
}

export namespace ChainTokensConfigRequest {
  export type AsObject = {
  }
}

export class ChainTokensConfigResponse extends jspb.Message {
  getChainTokensMap(): jspb.Map<string, Tokens>;
  clearChainTokensMap(): ChainTokensConfigResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChainTokensConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChainTokensConfigResponse): ChainTokensConfigResponse.AsObject;
  static serializeBinaryToWriter(message: ChainTokensConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChainTokensConfigResponse;
  static deserializeBinaryFromReader(message: ChainTokensConfigResponse, reader: jspb.BinaryReader): ChainTokensConfigResponse;
}

export namespace ChainTokensConfigResponse {
  export type AsObject = {
    chainTokensMap: Array<[string, Tokens.AsObject]>,
  }
}

export class Tokens extends jspb.Message {
  getTokensList(): Array<Token>;
  setTokensList(value: Array<Token>): Tokens;
  clearTokensList(): Tokens;
  addTokens(value?: Token, index?: number): Token;

  getContractAddr(): string;
  setContractAddr(value: string): Tokens;

  getBlockDelay(): number;
  setBlockDelay(value: number): Tokens;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tokens.AsObject;
  static toObject(includeInstance: boolean, msg: Tokens): Tokens.AsObject;
  static serializeBinaryToWriter(message: Tokens, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tokens;
  static deserializeBinaryFromReader(message: Tokens, reader: jspb.BinaryReader): Tokens;
}

export namespace Tokens {
  export type AsObject = {
    tokensList: Array<Token.AsObject>,
    contractAddr: string,
    blockDelay: number,
  }
}

export class GetFeeRequest extends jspb.Message {
  getSrcChainId(): number;
  setSrcChainId(value: number): GetFeeRequest;

  getDstChainId(): number;
  setDstChainId(value: number): GetFeeRequest;

  getSrcTokenAddr(): string;
  setSrcTokenAddr(value: string): GetFeeRequest;

  getAmt(): string;
  setAmt(value: string): GetFeeRequest;

  getLpAddr(): string;
  setLpAddr(value: string): GetFeeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeeRequest): GetFeeRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeeRequest;
  static deserializeBinaryFromReader(message: GetFeeRequest, reader: jspb.BinaryReader): GetFeeRequest;
}

export namespace GetFeeRequest {
  export type AsObject = {
    srcChainId: number,
    dstChainId: number,
    srcTokenAddr: string,
    amt: string,
    lpAddr: string,
  }
}

export class GetFeeResponse extends jspb.Message {
  getEqValueTokenAmt(): string;
  setEqValueTokenAmt(value: string): GetFeeResponse;

  getPercFee(): string;
  setPercFee(value: string): GetFeeResponse;

  getBaseFee(): string;
  setBaseFee(value: string): GetFeeResponse;

  getDecimal(): number;
  setDecimal(value: number): GetFeeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeeResponse): GetFeeResponse.AsObject;
  static serializeBinaryToWriter(message: GetFeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeeResponse;
  static deserializeBinaryFromReader(message: GetFeeResponse, reader: jspb.BinaryReader): GetFeeResponse;
}

export namespace GetFeeResponse {
  export type AsObject = {
    eqValueTokenAmt: string,
    percFee: string,
    baseFee: string,
    decimal: number,
  }
}

export class GetFeePercentageRequest extends jspb.Message {
  getSrcChainId(): number;
  setSrcChainId(value: number): GetFeePercentageRequest;

  getDstChainId(): number;
  setDstChainId(value: number): GetFeePercentageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeePercentageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeePercentageRequest): GetFeePercentageRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeePercentageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeePercentageRequest;
  static deserializeBinaryFromReader(message: GetFeePercentageRequest, reader: jspb.BinaryReader): GetFeePercentageRequest;
}

export namespace GetFeePercentageRequest {
  export type AsObject = {
    srcChainId: number,
    dstChainId: number,
  }
}

export class GetFeePercentageResponse extends jspb.Message {
  getFeePerc(): number;
  setFeePerc(value: number): GetFeePercentageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeePercentageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeePercentageResponse): GetFeePercentageResponse.AsObject;
  static serializeBinaryToWriter(message: GetFeePercentageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeePercentageResponse;
  static deserializeBinaryFromReader(message: GetFeePercentageResponse, reader: jspb.BinaryReader): GetFeePercentageResponse;
}

export namespace GetFeePercentageResponse {
  export type AsObject = {
    feePerc: number,
  }
}

export class QueryTransferStatusRequest extends jspb.Message {
  getTransferIdList(): Array<string>;
  setTransferIdList(value: Array<string>): QueryTransferStatusRequest;
  clearTransferIdList(): QueryTransferStatusRequest;
  addTransferId(value: string, index?: number): QueryTransferStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTransferStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTransferStatusRequest): QueryTransferStatusRequest.AsObject;
  static serializeBinaryToWriter(message: QueryTransferStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTransferStatusRequest;
  static deserializeBinaryFromReader(message: QueryTransferStatusRequest, reader: jspb.BinaryReader): QueryTransferStatusRequest;
}

export namespace QueryTransferStatusRequest {
  export type AsObject = {
    transferIdList: Array<string>,
  }
}

export class QueryTransferStatusResponse extends jspb.Message {
  getStatusMap(): jspb.Map<string, TransferStatus>;
  clearStatusMap(): QueryTransferStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTransferStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTransferStatusResponse): QueryTransferStatusResponse.AsObject;
  static serializeBinaryToWriter(message: QueryTransferStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTransferStatusResponse;
  static deserializeBinaryFromReader(message: QueryTransferStatusResponse, reader: jspb.BinaryReader): QueryTransferStatusResponse;
}

export namespace QueryTransferStatusResponse {
  export type AsObject = {
    statusMap: Array<[string, TransferStatus.AsObject]>,
  }
}

export class LiquidityDetail extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): LiquidityDetail;

  getToken(): Token | undefined;
  setToken(value?: Token): LiquidityDetail;
  hasToken(): boolean;
  clearToken(): LiquidityDetail;

  getUsrLiquidity(): string;
  setUsrLiquidity(value: string): LiquidityDetail;

  getUsrLpFeeEarning(): string;
  setUsrLpFeeEarning(value: string): LiquidityDetail;

  getTotalLiquidity(): string;
  setTotalLiquidity(value: string): LiquidityDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiquidityDetail.AsObject;
  static toObject(includeInstance: boolean, msg: LiquidityDetail): LiquidityDetail.AsObject;
  static serializeBinaryToWriter(message: LiquidityDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiquidityDetail;
  static deserializeBinaryFromReader(message: LiquidityDetail, reader: jspb.BinaryReader): LiquidityDetail;
}

export namespace LiquidityDetail {
  export type AsObject = {
    chainId: number,
    token?: Token.AsObject,
    usrLiquidity: string,
    usrLpFeeEarning: string,
    totalLiquidity: string,
  }
}

export class ChainTokenAddrPair extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): ChainTokenAddrPair;

  getTokenAddr(): string;
  setTokenAddr(value: string): ChainTokenAddrPair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChainTokenAddrPair.AsObject;
  static toObject(includeInstance: boolean, msg: ChainTokenAddrPair): ChainTokenAddrPair.AsObject;
  static serializeBinaryToWriter(message: ChainTokenAddrPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChainTokenAddrPair;
  static deserializeBinaryFromReader(message: ChainTokenAddrPair, reader: jspb.BinaryReader): ChainTokenAddrPair;
}

export namespace ChainTokenAddrPair {
  export type AsObject = {
    chainId: number,
    tokenAddr: string,
  }
}

export class LiquidityDetailListRequest extends jspb.Message {
  getLpAddr(): string;
  setLpAddr(value: string): LiquidityDetailListRequest;

  getChainTokenList(): Array<ChainTokenAddrPair>;
  setChainTokenList(value: Array<ChainTokenAddrPair>): LiquidityDetailListRequest;
  clearChainTokenList(): LiquidityDetailListRequest;
  addChainToken(value?: ChainTokenAddrPair, index?: number): ChainTokenAddrPair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiquidityDetailListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LiquidityDetailListRequest): LiquidityDetailListRequest.AsObject;
  static serializeBinaryToWriter(message: LiquidityDetailListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiquidityDetailListRequest;
  static deserializeBinaryFromReader(message: LiquidityDetailListRequest, reader: jspb.BinaryReader): LiquidityDetailListRequest;
}

export namespace LiquidityDetailListRequest {
  export type AsObject = {
    lpAddr: string,
    chainTokenList: Array<ChainTokenAddrPair.AsObject>,
  }
}

export class LiquidityDetailListResponse extends jspb.Message {
  getLiquidityDetailList(): Array<LiquidityDetail>;
  setLiquidityDetailList(value: Array<LiquidityDetail>): LiquidityDetailListResponse;
  clearLiquidityDetailList(): LiquidityDetailListResponse;
  addLiquidityDetail(value?: LiquidityDetail, index?: number): LiquidityDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiquidityDetailListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LiquidityDetailListResponse): LiquidityDetailListResponse.AsObject;
  static serializeBinaryToWriter(message: LiquidityDetailListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiquidityDetailListResponse;
  static deserializeBinaryFromReader(message: LiquidityDetailListResponse, reader: jspb.BinaryReader): LiquidityDetailListResponse;
}

export namespace LiquidityDetailListResponse {
  export type AsObject = {
    liquidityDetailList: Array<LiquidityDetail.AsObject>,
  }
}

export class QueryTotalLiquidityRequest extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): QueryTotalLiquidityRequest;

  getTokenAddr(): string;
  setTokenAddr(value: string): QueryTotalLiquidityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalLiquidityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTotalLiquidityRequest): QueryTotalLiquidityRequest.AsObject;
  static serializeBinaryToWriter(message: QueryTotalLiquidityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalLiquidityRequest;
  static deserializeBinaryFromReader(message: QueryTotalLiquidityRequest, reader: jspb.BinaryReader): QueryTotalLiquidityRequest;
}

export namespace QueryTotalLiquidityRequest {
  export type AsObject = {
    chainId: number,
    tokenAddr: string,
  }
}

export class QueryTotalLiquidityResponse extends jspb.Message {
  getTotalLiq(): string;
  setTotalLiq(value: string): QueryTotalLiquidityResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTotalLiquidityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTotalLiquidityResponse): QueryTotalLiquidityResponse.AsObject;
  static serializeBinaryToWriter(message: QueryTotalLiquidityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTotalLiquidityResponse;
  static deserializeBinaryFromReader(message: QueryTotalLiquidityResponse, reader: jspb.BinaryReader): QueryTotalLiquidityResponse;
}

export namespace QueryTotalLiquidityResponse {
  export type AsObject = {
    totalLiq: string,
  }
}

export class QueryAddLiquidityStatusRequest extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): QueryAddLiquidityStatusRequest;

  getSeqNum(): number;
  setSeqNum(value: number): QueryAddLiquidityStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAddLiquidityStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAddLiquidityStatusRequest): QueryAddLiquidityStatusRequest.AsObject;
  static serializeBinaryToWriter(message: QueryAddLiquidityStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAddLiquidityStatusRequest;
  static deserializeBinaryFromReader(message: QueryAddLiquidityStatusRequest, reader: jspb.BinaryReader): QueryAddLiquidityStatusRequest;
}

export namespace QueryAddLiquidityStatusRequest {
  export type AsObject = {
    chainId: number,
    seqNum: number,
  }
}

export class QueryWithdrawLiquidityStatusRequest extends jspb.Message {
  getSeqNum(): number;
  setSeqNum(value: number): QueryWithdrawLiquidityStatusRequest;

  getUsrAddr(): string;
  setUsrAddr(value: string): QueryWithdrawLiquidityStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryWithdrawLiquidityStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryWithdrawLiquidityStatusRequest): QueryWithdrawLiquidityStatusRequest.AsObject;
  static serializeBinaryToWriter(message: QueryWithdrawLiquidityStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryWithdrawLiquidityStatusRequest;
  static deserializeBinaryFromReader(message: QueryWithdrawLiquidityStatusRequest, reader: jspb.BinaryReader): QueryWithdrawLiquidityStatusRequest;
}

export namespace QueryWithdrawLiquidityStatusRequest {
  export type AsObject = {
    seqNum: number,
    usrAddr: string,
  }
}

export class QueryLiquidityStatusResponse extends jspb.Message {
  getStatus(): LPHistoryStatus;
  setStatus(value: LPHistoryStatus): QueryLiquidityStatusResponse;

  getDetail(): sgn_cbridge_v1_cbridge_pb.WithdrawDetail | undefined;
  setDetail(value?: sgn_cbridge_v1_cbridge_pb.WithdrawDetail): QueryLiquidityStatusResponse;
  hasDetail(): boolean;
  clearDetail(): QueryLiquidityStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLiquidityStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLiquidityStatusResponse): QueryLiquidityStatusResponse.AsObject;
  static serializeBinaryToWriter(message: QueryLiquidityStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLiquidityStatusResponse;
  static deserializeBinaryFromReader(message: QueryLiquidityStatusResponse, reader: jspb.BinaryReader): QueryLiquidityStatusResponse;
}

export namespace QueryLiquidityStatusResponse {
  export type AsObject = {
    status: LPHistoryStatus,
    detail?: sgn_cbridge_v1_cbridge_pb.WithdrawDetail.AsObject,
  }
}

export class CheckChainTokenValidRequest extends jspb.Message {
  getSrcChainId(): number;
  setSrcChainId(value: number): CheckChainTokenValidRequest;

  getSrcTokenAddr(): string;
  setSrcTokenAddr(value: string): CheckChainTokenValidRequest;

  getDestChainId(): number;
  setDestChainId(value: number): CheckChainTokenValidRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckChainTokenValidRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckChainTokenValidRequest): CheckChainTokenValidRequest.AsObject;
  static serializeBinaryToWriter(message: CheckChainTokenValidRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckChainTokenValidRequest;
  static deserializeBinaryFromReader(message: CheckChainTokenValidRequest, reader: jspb.BinaryReader): CheckChainTokenValidRequest;
}

export namespace CheckChainTokenValidRequest {
  export type AsObject = {
    srcChainId: number,
    srcTokenAddr: string,
    destChainId: number,
  }
}

export class CheckChainTokenValidResponse extends jspb.Message {
  getValid(): boolean;
  setValid(value: boolean): CheckChainTokenValidResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckChainTokenValidResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckChainTokenValidResponse): CheckChainTokenValidResponse.AsObject;
  static serializeBinaryToWriter(message: CheckChainTokenValidResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckChainTokenValidResponse;
  static deserializeBinaryFromReader(message: CheckChainTokenValidResponse, reader: jspb.BinaryReader): CheckChainTokenValidResponse;
}

export namespace CheckChainTokenValidResponse {
  export type AsObject = {
    valid: boolean,
  }
}

export class TransferStatus extends jspb.Message {
  getGatewayStatus(): TransferHistoryStatus;
  setGatewayStatus(value: TransferHistoryStatus): TransferStatus;

  getSgnStatus(): sgn_cbridge_v1_cbridge_pb.XferStatus;
  setSgnStatus(value: sgn_cbridge_v1_cbridge_pb.XferStatus): TransferStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferStatus.AsObject;
  static toObject(includeInstance: boolean, msg: TransferStatus): TransferStatus.AsObject;
  static serializeBinaryToWriter(message: TransferStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferStatus;
  static deserializeBinaryFromReader(message: TransferStatus, reader: jspb.BinaryReader): TransferStatus;
}

export namespace TransferStatus {
  export type AsObject = {
    gatewayStatus: TransferHistoryStatus,
    sgnStatus: sgn_cbridge_v1_cbridge_pb.XferStatus,
  }
}

export class Token extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): Token;

  getAddress(): string;
  setAddress(value: string): Token;

  getDecimal(): number;
  setDecimal(value: number): Token;

  getXferDisabled(): boolean;
  setXferDisabled(value: boolean): Token;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    symbol: string,
    address: string,
    decimal: number,
    xferDisabled: boolean,
  }
}

export enum LPHistoryStatus { 
  LP_UNKNOWN = 0,
  LP_WAITING_FOR_SGN = 1,
  LP_WAITING_FOR_LP = 2,
  LP_SUBMITTING = 3,
  LP_COMPLETED = 4,
  LP_FAILED = 5,
}
export enum TransferHistoryStatus { 
  TRANSFER_UNKNOWN = 0,
  TRANSFER_SUBMITTING = 1,
  TRANSFER_FAILED = 2,
  TRANSFER_WAITING_FOR_SGN_CONFIRMATION = 3,
  TRANSFER_WAITING_FOR_FUND_RELEASE = 4,
  TRANSFER_COMPLETED = 5,
  TRANSFER_TO_BE_REFUNDED = 6,
  TRANSFER_REQUESTING_REFUND = 7,
  TRANSFER_REFUND_TO_BE_CONFIRMED = 8,
  TRANSFER_CONFIRMING_YOUR_REFUND = 9,
  TRANSFER_REFUNDED = 10,
}
