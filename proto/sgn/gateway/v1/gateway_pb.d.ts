import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as sgn_cbridge_v1_query_pb from '../../../sgn/cbridge/v1/query_pb';
import * as sgn_cbridge_v1_cbridge_pb from '../../../sgn/cbridge/v1/cbridge_pb';
import * as sgn_farming_v1_farming_pb from '../../../sgn/farming/v1/farming_pb';
import * as sgn_distribution_v1_distribution_pb from '../../../sgn/distribution/v1/distribution_pb';
import * as cosmos_base_v1beta1_coin_pb from '../../../cosmos/base/v1beta1/coin_pb';


export class QueryLiquidityStatusResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): QueryLiquidityStatusResponse;
  hasErr(): boolean;
  clearErr(): QueryLiquidityStatusResponse;

  getStatus(): sgn_cbridge_v1_query_pb.LPHistoryStatus;
  setStatus(value: sgn_cbridge_v1_query_pb.LPHistoryStatus): QueryLiquidityStatusResponse;

  getWdOnchain(): Uint8Array | string;
  getWdOnchain_asU8(): Uint8Array;
  getWdOnchain_asB64(): string;
  setWdOnchain(value: Uint8Array | string): QueryLiquidityStatusResponse;

  getSortedSigsList(): Array<Uint8Array | string>;
  setSortedSigsList(value: Array<Uint8Array | string>): QueryLiquidityStatusResponse;
  clearSortedSigsList(): QueryLiquidityStatusResponse;
  addSortedSigs(value: Uint8Array | string, index?: number): QueryLiquidityStatusResponse;

  getSignersList(): Array<Uint8Array | string>;
  setSignersList(value: Array<Uint8Array | string>): QueryLiquidityStatusResponse;
  clearSignersList(): QueryLiquidityStatusResponse;
  addSigners(value: Uint8Array | string, index?: number): QueryLiquidityStatusResponse;

  getPowersList(): Array<Uint8Array | string>;
  setPowersList(value: Array<Uint8Array | string>): QueryLiquidityStatusResponse;
  clearPowersList(): QueryLiquidityStatusResponse;
  addPowers(value: Uint8Array | string, index?: number): QueryLiquidityStatusResponse;

  getBlockTxLink(): string;
  setBlockTxLink(value: string): QueryLiquidityStatusResponse;

  getBlockDelay(): number;
  setBlockDelay(value: number): QueryLiquidityStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLiquidityStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLiquidityStatusResponse): QueryLiquidityStatusResponse.AsObject;
  static serializeBinaryToWriter(message: QueryLiquidityStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLiquidityStatusResponse;
  static deserializeBinaryFromReader(message: QueryLiquidityStatusResponse, reader: jspb.BinaryReader): QueryLiquidityStatusResponse;
}

export namespace QueryLiquidityStatusResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    status: sgn_cbridge_v1_query_pb.LPHistoryStatus,
    wdOnchain: Uint8Array | string,
    sortedSigsList: Array<Uint8Array | string>,
    signersList: Array<Uint8Array | string>,
    powersList: Array<Uint8Array | string>,
    blockTxLink: string,
    blockDelay: number,
  }
}

export class Chain extends jspb.Message {
  getId(): number;
  setId(value: number): Chain;

  getName(): string;
  setName(value: string): Chain;

  getIcon(): string;
  setIcon(value: string): Chain;

  getBlockDelay(): number;
  setBlockDelay(value: number): Chain;

  getGasTokenSymbol(): string;
  setGasTokenSymbol(value: string): Chain;

  getExploreUrl(): string;
  setExploreUrl(value: string): Chain;

  getRpcUrl(): string;
  setRpcUrl(value: string): Chain;

  getContractAddr(): string;
  setContractAddr(value: string): Chain;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chain.AsObject;
  static toObject(includeInstance: boolean, msg: Chain): Chain.AsObject;
  static serializeBinaryToWriter(message: Chain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chain;
  static deserializeBinaryFromReader(message: Chain, reader: jspb.BinaryReader): Chain;
}

export namespace Chain {
  export type AsObject = {
    id: number,
    name: string,
    icon: string,
    blockDelay: number,
    gasTokenSymbol: string,
    exploreUrl: string,
    rpcUrl: string,
    contractAddr: string,
  }
}

export class ChainTokenInfo extends jspb.Message {
  getTokenList(): Array<TokenInfo>;
  setTokenList(value: Array<TokenInfo>): ChainTokenInfo;
  clearTokenList(): ChainTokenInfo;
  addToken(value?: TokenInfo, index?: number): TokenInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChainTokenInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ChainTokenInfo): ChainTokenInfo.AsObject;
  static serializeBinaryToWriter(message: ChainTokenInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChainTokenInfo;
  static deserializeBinaryFromReader(message: ChainTokenInfo, reader: jspb.BinaryReader): ChainTokenInfo;
}

export namespace ChainTokenInfo {
  export type AsObject = {
    tokenList: Array<TokenInfo.AsObject>,
  }
}

export class TokenInfo extends jspb.Message {
  getToken(): sgn_cbridge_v1_query_pb.Token | undefined;
  setToken(value?: sgn_cbridge_v1_query_pb.Token): TokenInfo;
  hasToken(): boolean;
  clearToken(): TokenInfo;

  getName(): string;
  setName(value: string): TokenInfo;

  getIcon(): string;
  setIcon(value: string): TokenInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TokenInfo): TokenInfo.AsObject;
  static serializeBinaryToWriter(message: TokenInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenInfo;
  static deserializeBinaryFromReader(message: TokenInfo, reader: jspb.BinaryReader): TokenInfo;
}

export namespace TokenInfo {
  export type AsObject = {
    token?: sgn_cbridge_v1_query_pb.Token.AsObject,
    name: string,
    icon: string,
  }
}

export class TransferInfo extends jspb.Message {
  getChain(): Chain | undefined;
  setChain(value?: Chain): TransferInfo;
  hasChain(): boolean;
  clearChain(): TransferInfo;

  getToken(): sgn_cbridge_v1_query_pb.Token | undefined;
  setToken(value?: sgn_cbridge_v1_query_pb.Token): TransferInfo;
  hasToken(): boolean;
  clearToken(): TransferInfo;

  getAmount(): string;
  setAmount(value: string): TransferInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TransferInfo): TransferInfo.AsObject;
  static serializeBinaryToWriter(message: TransferInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferInfo;
  static deserializeBinaryFromReader(message: TransferInfo, reader: jspb.BinaryReader): TransferInfo;
}

export namespace TransferInfo {
  export type AsObject = {
    chain?: Chain.AsObject,
    token?: sgn_cbridge_v1_query_pb.Token.AsObject,
    amount: string,
  }
}

export class GetTransferStatusRequest extends jspb.Message {
  getTransferId(): string;
  setTransferId(value: string): GetTransferStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransferStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransferStatusRequest): GetTransferStatusRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransferStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransferStatusRequest;
  static deserializeBinaryFromReader(message: GetTransferStatusRequest, reader: jspb.BinaryReader): GetTransferStatusRequest;
}

export namespace GetTransferStatusRequest {
  export type AsObject = {
    transferId: string,
  }
}

export class GetTransferStatusResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): GetTransferStatusResponse;
  hasErr(): boolean;
  clearErr(): GetTransferStatusResponse;

  getStatus(): sgn_cbridge_v1_query_pb.TransferHistoryStatus;
  setStatus(value: sgn_cbridge_v1_query_pb.TransferHistoryStatus): GetTransferStatusResponse;

  getWdOnchain(): Uint8Array | string;
  getWdOnchain_asU8(): Uint8Array;
  getWdOnchain_asB64(): string;
  setWdOnchain(value: Uint8Array | string): GetTransferStatusResponse;

  getSortedSigsList(): Array<Uint8Array | string>;
  setSortedSigsList(value: Array<Uint8Array | string>): GetTransferStatusResponse;
  clearSortedSigsList(): GetTransferStatusResponse;
  addSortedSigs(value: Uint8Array | string, index?: number): GetTransferStatusResponse;

  getSignersList(): Array<Uint8Array | string>;
  setSignersList(value: Array<Uint8Array | string>): GetTransferStatusResponse;
  clearSignersList(): GetTransferStatusResponse;
  addSigners(value: Uint8Array | string, index?: number): GetTransferStatusResponse;

  getPowersList(): Array<Uint8Array | string>;
  setPowersList(value: Array<Uint8Array | string>): GetTransferStatusResponse;
  clearPowersList(): GetTransferStatusResponse;
  addPowers(value: Uint8Array | string, index?: number): GetTransferStatusResponse;

  getRefundReason(): sgn_cbridge_v1_cbridge_pb.XferStatus;
  setRefundReason(value: sgn_cbridge_v1_cbridge_pb.XferStatus): GetTransferStatusResponse;

  getBlockDelay(): number;
  setBlockDelay(value: number): GetTransferStatusResponse;

  getSrcBlockTxLink(): string;
  setSrcBlockTxLink(value: string): GetTransferStatusResponse;

  getDstBlockTxLink(): string;
  setDstBlockTxLink(value: string): GetTransferStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransferStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransferStatusResponse): GetTransferStatusResponse.AsObject;
  static serializeBinaryToWriter(message: GetTransferStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransferStatusResponse;
  static deserializeBinaryFromReader(message: GetTransferStatusResponse, reader: jspb.BinaryReader): GetTransferStatusResponse;
}

export namespace GetTransferStatusResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    status: sgn_cbridge_v1_query_pb.TransferHistoryStatus,
    wdOnchain: Uint8Array | string,
    sortedSigsList: Array<Uint8Array | string>,
    signersList: Array<Uint8Array | string>,
    powersList: Array<Uint8Array | string>,
    refundReason: sgn_cbridge_v1_cbridge_pb.XferStatus,
    blockDelay: number,
    srcBlockTxLink: string,
    dstBlockTxLink: string,
  }
}

export class GetTransferConfigsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransferConfigsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransferConfigsRequest): GetTransferConfigsRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransferConfigsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransferConfigsRequest;
  static deserializeBinaryFromReader(message: GetTransferConfigsRequest, reader: jspb.BinaryReader): GetTransferConfigsRequest;
}

export namespace GetTransferConfigsRequest {
  export type AsObject = {
  }
}

export class GetTransferConfigsResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): GetTransferConfigsResponse;
  hasErr(): boolean;
  clearErr(): GetTransferConfigsResponse;

  getChainsList(): Array<Chain>;
  setChainsList(value: Array<Chain>): GetTransferConfigsResponse;
  clearChainsList(): GetTransferConfigsResponse;
  addChains(value?: Chain, index?: number): Chain;

  getChainTokenMap(): jspb.Map<number, ChainTokenInfo>;
  clearChainTokenMap(): GetTransferConfigsResponse;

  getFarmingRewardContractAddr(): string;
  setFarmingRewardContractAddr(value: string): GetTransferConfigsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransferConfigsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransferConfigsResponse): GetTransferConfigsResponse.AsObject;
  static serializeBinaryToWriter(message: GetTransferConfigsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransferConfigsResponse;
  static deserializeBinaryFromReader(message: GetTransferConfigsResponse, reader: jspb.BinaryReader): GetTransferConfigsResponse;
}

export namespace GetTransferConfigsResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    chainsList: Array<Chain.AsObject>,
    chainTokenMap: Array<[number, ChainTokenInfo.AsObject]>,
    farmingRewardContractAddr: string,
  }
}

export class GetTokenInfoRequest extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): GetTokenInfoRequest;

  getTokenSymbol(): string;
  setTokenSymbol(value: string): GetTokenInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTokenInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTokenInfoRequest): GetTokenInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetTokenInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTokenInfoRequest;
  static deserializeBinaryFromReader(message: GetTokenInfoRequest, reader: jspb.BinaryReader): GetTokenInfoRequest;
}

export namespace GetTokenInfoRequest {
  export type AsObject = {
    chainId: number,
    tokenSymbol: string,
  }
}

export class GetTokenInfoResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): GetTokenInfoResponse;
  hasErr(): boolean;
  clearErr(): GetTokenInfoResponse;

  getTokenInfo(): TokenInfo | undefined;
  setTokenInfo(value?: TokenInfo): GetTokenInfoResponse;
  hasTokenInfo(): boolean;
  clearTokenInfo(): GetTokenInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTokenInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTokenInfoResponse): GetTokenInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetTokenInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTokenInfoResponse;
  static deserializeBinaryFromReader(message: GetTokenInfoResponse, reader: jspb.BinaryReader): GetTokenInfoResponse;
}

export namespace GetTokenInfoResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    tokenInfo?: TokenInfo.AsObject,
  }
}

export class EstimateAmtRequest extends jspb.Message {
  getSrcChainId(): number;
  setSrcChainId(value: number): EstimateAmtRequest;

  getDstChainId(): number;
  setDstChainId(value: number): EstimateAmtRequest;

  getTokenSymbol(): string;
  setTokenSymbol(value: string): EstimateAmtRequest;

  getAmt(): string;
  setAmt(value: string): EstimateAmtRequest;

  getUsrAddr(): string;
  setUsrAddr(value: string): EstimateAmtRequest;

  getSlippageTolerance(): number;
  setSlippageTolerance(value: number): EstimateAmtRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EstimateAmtRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EstimateAmtRequest): EstimateAmtRequest.AsObject;
  static serializeBinaryToWriter(message: EstimateAmtRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EstimateAmtRequest;
  static deserializeBinaryFromReader(message: EstimateAmtRequest, reader: jspb.BinaryReader): EstimateAmtRequest;
}

export namespace EstimateAmtRequest {
  export type AsObject = {
    srcChainId: number,
    dstChainId: number,
    tokenSymbol: string,
    amt: string,
    usrAddr: string,
    slippageTolerance: number,
  }
}

export class EstimateAmtResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): EstimateAmtResponse;
  hasErr(): boolean;
  clearErr(): EstimateAmtResponse;

  getEqValueTokenAmt(): string;
  setEqValueTokenAmt(value: string): EstimateAmtResponse;

  getBridgeRate(): number;
  setBridgeRate(value: number): EstimateAmtResponse;

  getPercFee(): string;
  setPercFee(value: string): EstimateAmtResponse;

  getBaseFee(): string;
  setBaseFee(value: string): EstimateAmtResponse;

  getSlippageTolerance(): number;
  setSlippageTolerance(value: number): EstimateAmtResponse;

  getMaxSlippage(): number;
  setMaxSlippage(value: number): EstimateAmtResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EstimateAmtResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EstimateAmtResponse): EstimateAmtResponse.AsObject;
  static serializeBinaryToWriter(message: EstimateAmtResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EstimateAmtResponse;
  static deserializeBinaryFromReader(message: EstimateAmtResponse, reader: jspb.BinaryReader): EstimateAmtResponse;
}

export namespace EstimateAmtResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    eqValueTokenAmt: string,
    bridgeRate: number,
    percFee: string,
    baseFee: string,
    slippageTolerance: number,
    maxSlippage: number,
  }
}

export class WithdrawInfo extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): WithdrawInfo;

  getAmount(): string;
  setAmount(value: string): WithdrawInfo;

  getSlippageTolerance(): number;
  setSlippageTolerance(value: number): WithdrawInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawInfo): WithdrawInfo.AsObject;
  static serializeBinaryToWriter(message: WithdrawInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawInfo;
  static deserializeBinaryFromReader(message: WithdrawInfo, reader: jspb.BinaryReader): WithdrawInfo;
}

export namespace WithdrawInfo {
  export type AsObject = {
    chainId: number,
    amount: string,
    slippageTolerance: number,
  }
}

export class EstimateWithdrawAmtRequest extends jspb.Message {
  getSrcWithdrawsList(): Array<WithdrawInfo>;
  setSrcWithdrawsList(value: Array<WithdrawInfo>): EstimateWithdrawAmtRequest;
  clearSrcWithdrawsList(): EstimateWithdrawAmtRequest;
  addSrcWithdraws(value?: WithdrawInfo, index?: number): WithdrawInfo;

  getDstChainId(): number;
  setDstChainId(value: number): EstimateWithdrawAmtRequest;

  getTokenSymbol(): string;
  setTokenSymbol(value: string): EstimateWithdrawAmtRequest;

  getUsrAddr(): string;
  setUsrAddr(value: string): EstimateWithdrawAmtRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EstimateWithdrawAmtRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EstimateWithdrawAmtRequest): EstimateWithdrawAmtRequest.AsObject;
  static serializeBinaryToWriter(message: EstimateWithdrawAmtRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EstimateWithdrawAmtRequest;
  static deserializeBinaryFromReader(message: EstimateWithdrawAmtRequest, reader: jspb.BinaryReader): EstimateWithdrawAmtRequest;
}

export namespace EstimateWithdrawAmtRequest {
  export type AsObject = {
    srcWithdrawsList: Array<WithdrawInfo.AsObject>,
    dstChainId: number,
    tokenSymbol: string,
    usrAddr: string,
  }
}

export class EstimateWithdrawAmtResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): EstimateWithdrawAmtResponse;
  hasErr(): boolean;
  clearErr(): EstimateWithdrawAmtResponse;

  getReqAmtMap(): jspb.Map<number, EstimateWithdrawAmt>;
  clearReqAmtMap(): EstimateWithdrawAmtResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EstimateWithdrawAmtResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EstimateWithdrawAmtResponse): EstimateWithdrawAmtResponse.AsObject;
  static serializeBinaryToWriter(message: EstimateWithdrawAmtResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EstimateWithdrawAmtResponse;
  static deserializeBinaryFromReader(message: EstimateWithdrawAmtResponse, reader: jspb.BinaryReader): EstimateWithdrawAmtResponse;
}

export namespace EstimateWithdrawAmtResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    reqAmtMap: Array<[number, EstimateWithdrawAmt.AsObject]>,
  }
}

export class EstimateWithdrawAmt extends jspb.Message {
  getEqValueTokenAmt(): string;
  setEqValueTokenAmt(value: string): EstimateWithdrawAmt;

  getBridgeRate(): number;
  setBridgeRate(value: number): EstimateWithdrawAmt;

  getPercFee(): string;
  setPercFee(value: string): EstimateWithdrawAmt;

  getBaseFee(): string;
  setBaseFee(value: string): EstimateWithdrawAmt;

  getSlippageTolerance(): number;
  setSlippageTolerance(value: number): EstimateWithdrawAmt;

  getMaxSlippage(): number;
  setMaxSlippage(value: number): EstimateWithdrawAmt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EstimateWithdrawAmt.AsObject;
  static toObject(includeInstance: boolean, msg: EstimateWithdrawAmt): EstimateWithdrawAmt.AsObject;
  static serializeBinaryToWriter(message: EstimateWithdrawAmt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EstimateWithdrawAmt;
  static deserializeBinaryFromReader(message: EstimateWithdrawAmt, reader: jspb.BinaryReader): EstimateWithdrawAmt;
}

export namespace EstimateWithdrawAmt {
  export type AsObject = {
    eqValueTokenAmt: string,
    bridgeRate: number,
    percFee: string,
    baseFee: string,
    slippageTolerance: number,
    maxSlippage: number,
  }
}

export class MarkTransferRequest extends jspb.Message {
  getTransferId(): string;
  setTransferId(value: string): MarkTransferRequest;

  getSrcSendInfo(): TransferInfo | undefined;
  setSrcSendInfo(value?: TransferInfo): MarkTransferRequest;
  hasSrcSendInfo(): boolean;
  clearSrcSendInfo(): MarkTransferRequest;

  getDstMinReceivedInfo(): TransferInfo | undefined;
  setDstMinReceivedInfo(value?: TransferInfo): MarkTransferRequest;
  hasDstMinReceivedInfo(): boolean;
  clearDstMinReceivedInfo(): MarkTransferRequest;

  getAddr(): string;
  setAddr(value: string): MarkTransferRequest;

  getSrcTxHash(): string;
  setSrcTxHash(value: string): MarkTransferRequest;

  getType(): TransferType;
  setType(value: TransferType): MarkTransferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkTransferRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarkTransferRequest): MarkTransferRequest.AsObject;
  static serializeBinaryToWriter(message: MarkTransferRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkTransferRequest;
  static deserializeBinaryFromReader(message: MarkTransferRequest, reader: jspb.BinaryReader): MarkTransferRequest;
}

export namespace MarkTransferRequest {
  export type AsObject = {
    transferId: string,
    srcSendInfo?: TransferInfo.AsObject,
    dstMinReceivedInfo?: TransferInfo.AsObject,
    addr: string,
    srcTxHash: string,
    type: TransferType,
  }
}

export class MarkTransferResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): MarkTransferResponse;
  hasErr(): boolean;
  clearErr(): MarkTransferResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkTransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarkTransferResponse): MarkTransferResponse.AsObject;
  static serializeBinaryToWriter(message: MarkTransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkTransferResponse;
  static deserializeBinaryFromReader(message: MarkTransferResponse, reader: jspb.BinaryReader): MarkTransferResponse;
}

export namespace MarkTransferResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
  }
}

export class GetLPInfoListRequest extends jspb.Message {
  getAddr(): string;
  setAddr(value: string): GetLPInfoListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLPInfoListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLPInfoListRequest): GetLPInfoListRequest.AsObject;
  static serializeBinaryToWriter(message: GetLPInfoListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLPInfoListRequest;
  static deserializeBinaryFromReader(message: GetLPInfoListRequest, reader: jspb.BinaryReader): GetLPInfoListRequest;
}

export namespace GetLPInfoListRequest {
  export type AsObject = {
    addr: string,
  }
}

export class LPInfo extends jspb.Message {
  getChain(): Chain | undefined;
  setChain(value?: Chain): LPInfo;
  hasChain(): boolean;
  clearChain(): LPInfo;

  getToken(): TokenInfo | undefined;
  setToken(value?: TokenInfo): LPInfo;
  hasToken(): boolean;
  clearToken(): LPInfo;

  getLiquidity(): number;
  setLiquidity(value: number): LPInfo;

  getLiquidityAmt(): string;
  setLiquidityAmt(value: string): LPInfo;

  getHasFarmingSessions(): boolean;
  setHasFarmingSessions(value: boolean): LPInfo;

  getLpFeeEarning(): number;
  setLpFeeEarning(value: number): LPInfo;

  getFarmingRewardEarning(): number;
  setFarmingRewardEarning(value: number): LPInfo;

  getVolume24h(): number;
  setVolume24h(value: number): LPInfo;

  getTotalLiquidity(): number;
  setTotalLiquidity(value: number): LPInfo;

  getTotalLiquidityAmt(): string;
  setTotalLiquidityAmt(value: string): LPInfo;

  getLpFeeEarningApy(): number;
  setLpFeeEarningApy(value: number): LPInfo;

  getFarmingApy(): number;
  setFarmingApy(value: number): LPInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LPInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LPInfo): LPInfo.AsObject;
  static serializeBinaryToWriter(message: LPInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LPInfo;
  static deserializeBinaryFromReader(message: LPInfo, reader: jspb.BinaryReader): LPInfo;
}

export namespace LPInfo {
  export type AsObject = {
    chain?: Chain.AsObject,
    token?: TokenInfo.AsObject,
    liquidity: number,
    liquidityAmt: string,
    hasFarmingSessions: boolean,
    lpFeeEarning: number,
    farmingRewardEarning: number,
    volume24h: number,
    totalLiquidity: number,
    totalLiquidityAmt: string,
    lpFeeEarningApy: number,
    farmingApy: number,
  }
}

export class GetLPInfoListResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): GetLPInfoListResponse;
  hasErr(): boolean;
  clearErr(): GetLPInfoListResponse;

  getLpInfoList(): Array<LPInfo>;
  setLpInfoList(value: Array<LPInfo>): GetLPInfoListResponse;
  clearLpInfoList(): GetLPInfoListResponse;
  addLpInfo(value?: LPInfo, index?: number): LPInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLPInfoListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLPInfoListResponse): GetLPInfoListResponse.AsObject;
  static serializeBinaryToWriter(message: GetLPInfoListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLPInfoListResponse;
  static deserializeBinaryFromReader(message: GetLPInfoListResponse, reader: jspb.BinaryReader): GetLPInfoListResponse;
}

export namespace GetLPInfoListResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    lpInfoList: Array<LPInfo.AsObject>,
  }
}

export class WithdrawLiquidityRequest extends jspb.Message {
  getWithdrawReq(): Uint8Array | string;
  getWithdrawReq_asU8(): Uint8Array;
  getWithdrawReq_asB64(): string;
  setWithdrawReq(value: Uint8Array | string): WithdrawLiquidityRequest;

  getSig(): Uint8Array | string;
  getSig_asU8(): Uint8Array;
  getSig_asB64(): string;
  setSig(value: Uint8Array | string): WithdrawLiquidityRequest;

  getEstimatedReceivedAmt(): string;
  setEstimatedReceivedAmt(value: string): WithdrawLiquidityRequest;

  getMethodType(): WithdrawMethodType;
  setMethodType(value: WithdrawMethodType): WithdrawLiquidityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawLiquidityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawLiquidityRequest): WithdrawLiquidityRequest.AsObject;
  static serializeBinaryToWriter(message: WithdrawLiquidityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawLiquidityRequest;
  static deserializeBinaryFromReader(message: WithdrawLiquidityRequest, reader: jspb.BinaryReader): WithdrawLiquidityRequest;
}

export namespace WithdrawLiquidityRequest {
  export type AsObject = {
    withdrawReq: Uint8Array | string,
    sig: Uint8Array | string,
    estimatedReceivedAmt: string,
    methodType: WithdrawMethodType,
  }
}

export class WithdrawLiquidityResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): WithdrawLiquidityResponse;
  hasErr(): boolean;
  clearErr(): WithdrawLiquidityResponse;

  getSeqNum(): number;
  setSeqNum(value: number): WithdrawLiquidityResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawLiquidityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawLiquidityResponse): WithdrawLiquidityResponse.AsObject;
  static serializeBinaryToWriter(message: WithdrawLiquidityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawLiquidityResponse;
  static deserializeBinaryFromReader(message: WithdrawLiquidityResponse, reader: jspb.BinaryReader): WithdrawLiquidityResponse;
}

export namespace WithdrawLiquidityResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    seqNum: number,
  }
}

export class MarkLiquidityRequest extends jspb.Message {
  getLpAddr(): string;
  setLpAddr(value: string): MarkLiquidityRequest;

  getAmt(): string;
  setAmt(value: string): MarkLiquidityRequest;

  getTokenAddr(): string;
  setTokenAddr(value: string): MarkLiquidityRequest;

  getChainId(): number;
  setChainId(value: number): MarkLiquidityRequest;

  getSeqNum(): number;
  setSeqNum(value: number): MarkLiquidityRequest;

  getTxHash(): string;
  setTxHash(value: string): MarkLiquidityRequest;

  getType(): LPType;
  setType(value: LPType): MarkLiquidityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkLiquidityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarkLiquidityRequest): MarkLiquidityRequest.AsObject;
  static serializeBinaryToWriter(message: MarkLiquidityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkLiquidityRequest;
  static deserializeBinaryFromReader(message: MarkLiquidityRequest, reader: jspb.BinaryReader): MarkLiquidityRequest;
}

export namespace MarkLiquidityRequest {
  export type AsObject = {
    lpAddr: string,
    amt: string,
    tokenAddr: string,
    chainId: number,
    seqNum: number,
    txHash: string,
    type: LPType,
  }
}

export class MarkLiquidityResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): MarkLiquidityResponse;
  hasErr(): boolean;
  clearErr(): MarkLiquidityResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkLiquidityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarkLiquidityResponse): MarkLiquidityResponse.AsObject;
  static serializeBinaryToWriter(message: MarkLiquidityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkLiquidityResponse;
  static deserializeBinaryFromReader(message: MarkLiquidityResponse, reader: jspb.BinaryReader): MarkLiquidityResponse;
}

export namespace MarkLiquidityResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
  }
}

export class UnlockFarmingRewardRequest extends jspb.Message {
  getAddr(): string;
  setAddr(value: string): UnlockFarmingRewardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockFarmingRewardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockFarmingRewardRequest): UnlockFarmingRewardRequest.AsObject;
  static serializeBinaryToWriter(message: UnlockFarmingRewardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockFarmingRewardRequest;
  static deserializeBinaryFromReader(message: UnlockFarmingRewardRequest, reader: jspb.BinaryReader): UnlockFarmingRewardRequest;
}

export namespace UnlockFarmingRewardRequest {
  export type AsObject = {
    addr: string,
  }
}

export class UnlockFarmingRewardResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): UnlockFarmingRewardResponse;
  hasErr(): boolean;
  clearErr(): UnlockFarmingRewardResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockFarmingRewardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockFarmingRewardResponse): UnlockFarmingRewardResponse.AsObject;
  static serializeBinaryToWriter(message: UnlockFarmingRewardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockFarmingRewardResponse;
  static deserializeBinaryFromReader(message: UnlockFarmingRewardResponse, reader: jspb.BinaryReader): UnlockFarmingRewardResponse;
}

export namespace UnlockFarmingRewardResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
  }
}

export class GetFarmingRewardDetailsRequest extends jspb.Message {
  getAddr(): string;
  setAddr(value: string): GetFarmingRewardDetailsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFarmingRewardDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFarmingRewardDetailsRequest): GetFarmingRewardDetailsRequest.AsObject;
  static serializeBinaryToWriter(message: GetFarmingRewardDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFarmingRewardDetailsRequest;
  static deserializeBinaryFromReader(message: GetFarmingRewardDetailsRequest, reader: jspb.BinaryReader): GetFarmingRewardDetailsRequest;
}

export namespace GetFarmingRewardDetailsRequest {
  export type AsObject = {
    addr: string,
  }
}

export class GetFarmingRewardDetailsResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): GetFarmingRewardDetailsResponse;
  hasErr(): boolean;
  clearErr(): GetFarmingRewardDetailsResponse;

  getDetailsList(): Array<sgn_farming_v1_farming_pb.RewardClaimDetails>;
  setDetailsList(value: Array<sgn_farming_v1_farming_pb.RewardClaimDetails>): GetFarmingRewardDetailsResponse;
  clearDetailsList(): GetFarmingRewardDetailsResponse;
  addDetails(value?: sgn_farming_v1_farming_pb.RewardClaimDetails, index?: number): sgn_farming_v1_farming_pb.RewardClaimDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFarmingRewardDetailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFarmingRewardDetailsResponse): GetFarmingRewardDetailsResponse.AsObject;
  static serializeBinaryToWriter(message: GetFarmingRewardDetailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFarmingRewardDetailsResponse;
  static deserializeBinaryFromReader(message: GetFarmingRewardDetailsResponse, reader: jspb.BinaryReader): GetFarmingRewardDetailsResponse;
}

export namespace GetFarmingRewardDetailsResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    detailsList: Array<sgn_farming_v1_farming_pb.RewardClaimDetails.AsObject>,
  }
}

export class QueryLiquidityStatusRequest extends jspb.Message {
  getSeqNum(): number;
  setSeqNum(value: number): QueryLiquidityStatusRequest;

  getTxHash(): string;
  setTxHash(value: string): QueryLiquidityStatusRequest;

  getLpAddr(): string;
  setLpAddr(value: string): QueryLiquidityStatusRequest;

  getChainId(): number;
  setChainId(value: number): QueryLiquidityStatusRequest;

  getType(): LPType;
  setType(value: LPType): QueryLiquidityStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLiquidityStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLiquidityStatusRequest): QueryLiquidityStatusRequest.AsObject;
  static serializeBinaryToWriter(message: QueryLiquidityStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLiquidityStatusRequest;
  static deserializeBinaryFromReader(message: QueryLiquidityStatusRequest, reader: jspb.BinaryReader): QueryLiquidityStatusRequest;
}

export namespace QueryLiquidityStatusRequest {
  export type AsObject = {
    seqNum: number,
    txHash: string,
    lpAddr: string,
    chainId: number,
    type: LPType,
  }
}

export class TransferHistory extends jspb.Message {
  getTransferId(): string;
  setTransferId(value: string): TransferHistory;

  getSrcSendInfo(): TransferInfo | undefined;
  setSrcSendInfo(value?: TransferInfo): TransferHistory;
  hasSrcSendInfo(): boolean;
  clearSrcSendInfo(): TransferHistory;

  getDstReceivedInfo(): TransferInfo | undefined;
  setDstReceivedInfo(value?: TransferInfo): TransferHistory;
  hasDstReceivedInfo(): boolean;
  clearDstReceivedInfo(): TransferHistory;

  getTs(): number;
  setTs(value: number): TransferHistory;

  getSrcBlockTxLink(): string;
  setSrcBlockTxLink(value: string): TransferHistory;

  getDstBlockTxLink(): string;
  setDstBlockTxLink(value: string): TransferHistory;

  getStatus(): sgn_cbridge_v1_query_pb.TransferHistoryStatus;
  setStatus(value: sgn_cbridge_v1_query_pb.TransferHistoryStatus): TransferHistory;

  getRefundReason(): sgn_cbridge_v1_cbridge_pb.XferStatus;
  setRefundReason(value: sgn_cbridge_v1_cbridge_pb.XferStatus): TransferHistory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferHistory.AsObject;
  static toObject(includeInstance: boolean, msg: TransferHistory): TransferHistory.AsObject;
  static serializeBinaryToWriter(message: TransferHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferHistory;
  static deserializeBinaryFromReader(message: TransferHistory, reader: jspb.BinaryReader): TransferHistory;
}

export namespace TransferHistory {
  export type AsObject = {
    transferId: string,
    srcSendInfo?: TransferInfo.AsObject,
    dstReceivedInfo?: TransferInfo.AsObject,
    ts: number,
    srcBlockTxLink: string,
    dstBlockTxLink: string,
    status: sgn_cbridge_v1_query_pb.TransferHistoryStatus,
    refundReason: sgn_cbridge_v1_cbridge_pb.XferStatus,
  }
}

export class LPHistory extends jspb.Message {
  getChain(): Chain | undefined;
  setChain(value?: Chain): LPHistory;
  hasChain(): boolean;
  clearChain(): LPHistory;

  getToken(): TokenInfo | undefined;
  setToken(value?: TokenInfo): LPHistory;
  hasToken(): boolean;
  clearToken(): LPHistory;

  getAmount(): string;
  setAmount(value: string): LPHistory;

  getTs(): number;
  setTs(value: number): LPHistory;

  getBlockTxLink(): string;
  setBlockTxLink(value: string): LPHistory;

  getStatus(): sgn_cbridge_v1_query_pb.LPHistoryStatus;
  setStatus(value: sgn_cbridge_v1_query_pb.LPHistoryStatus): LPHistory;

  getType(): LPType;
  setType(value: LPType): LPHistory;

  getSeqNum(): number;
  setSeqNum(value: number): LPHistory;

  getMethodType(): WithdrawMethodType;
  setMethodType(value: WithdrawMethodType): LPHistory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LPHistory.AsObject;
  static toObject(includeInstance: boolean, msg: LPHistory): LPHistory.AsObject;
  static serializeBinaryToWriter(message: LPHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LPHistory;
  static deserializeBinaryFromReader(message: LPHistory, reader: jspb.BinaryReader): LPHistory;
}

export namespace LPHistory {
  export type AsObject = {
    chain?: Chain.AsObject,
    token?: TokenInfo.AsObject,
    amount: string,
    ts: number,
    blockTxLink: string,
    status: sgn_cbridge_v1_query_pb.LPHistoryStatus,
    type: LPType,
    seqNum: number,
    methodType: WithdrawMethodType,
  }
}

export class TransferHistoryRequest extends jspb.Message {
  getNextPageToken(): string;
  setNextPageToken(value: string): TransferHistoryRequest;

  getPageSize(): number;
  setPageSize(value: number): TransferHistoryRequest;

  getAddr(): string;
  setAddr(value: string): TransferHistoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferHistoryRequest): TransferHistoryRequest.AsObject;
  static serializeBinaryToWriter(message: TransferHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferHistoryRequest;
  static deserializeBinaryFromReader(message: TransferHistoryRequest, reader: jspb.BinaryReader): TransferHistoryRequest;
}

export namespace TransferHistoryRequest {
  export type AsObject = {
    nextPageToken: string,
    pageSize: number,
    addr: string,
  }
}

export class TransferHistoryResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): TransferHistoryResponse;
  hasErr(): boolean;
  clearErr(): TransferHistoryResponse;

  getHistoryList(): Array<TransferHistory>;
  setHistoryList(value: Array<TransferHistory>): TransferHistoryResponse;
  clearHistoryList(): TransferHistoryResponse;
  addHistory(value?: TransferHistory, index?: number): TransferHistory;

  getNextPageToken(): string;
  setNextPageToken(value: string): TransferHistoryResponse;

  getCurrentSize(): number;
  setCurrentSize(value: number): TransferHistoryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransferHistoryResponse): TransferHistoryResponse.AsObject;
  static serializeBinaryToWriter(message: TransferHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferHistoryResponse;
  static deserializeBinaryFromReader(message: TransferHistoryResponse, reader: jspb.BinaryReader): TransferHistoryResponse;
}

export namespace TransferHistoryResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    historyList: Array<TransferHistory.AsObject>,
    nextPageToken: string,
    currentSize: number,
  }
}

export class LPHistoryRequest extends jspb.Message {
  getNextPageToken(): string;
  setNextPageToken(value: string): LPHistoryRequest;

  getPageSize(): number;
  setPageSize(value: number): LPHistoryRequest;

  getAddr(): string;
  setAddr(value: string): LPHistoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LPHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LPHistoryRequest): LPHistoryRequest.AsObject;
  static serializeBinaryToWriter(message: LPHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LPHistoryRequest;
  static deserializeBinaryFromReader(message: LPHistoryRequest, reader: jspb.BinaryReader): LPHistoryRequest;
}

export namespace LPHistoryRequest {
  export type AsObject = {
    nextPageToken: string,
    pageSize: number,
    addr: string,
  }
}

export class LPHistoryResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): LPHistoryResponse;
  hasErr(): boolean;
  clearErr(): LPHistoryResponse;

  getHistoryList(): Array<LPHistory>;
  setHistoryList(value: Array<LPHistory>): LPHistoryResponse;
  clearHistoryList(): LPHistoryResponse;
  addHistory(value?: LPHistory, index?: number): LPHistory;

  getNextPageToken(): string;
  setNextPageToken(value: string): LPHistoryResponse;

  getCurrentSize(): number;
  setCurrentSize(value: number): LPHistoryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LPHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LPHistoryResponse): LPHistoryResponse.AsObject;
  static serializeBinaryToWriter(message: LPHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LPHistoryResponse;
  static deserializeBinaryFromReader(message: LPHistoryResponse, reader: jspb.BinaryReader): LPHistoryResponse;
}

export namespace LPHistoryResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    historyList: Array<LPHistory.AsObject>,
    nextPageToken: string,
    currentSize: number,
  }
}

export class RewardingDataRequest extends jspb.Message {
  getAddr(): string;
  setAddr(value: string): RewardingDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RewardingDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RewardingDataRequest): RewardingDataRequest.AsObject;
  static serializeBinaryToWriter(message: RewardingDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RewardingDataRequest;
  static deserializeBinaryFromReader(message: RewardingDataRequest, reader: jspb.BinaryReader): RewardingDataRequest;
}

export namespace RewardingDataRequest {
  export type AsObject = {
    addr: string,
  }
}

export class Reward extends jspb.Message {
  getAmt(): number;
  setAmt(value: number): Reward;

  getToken(): sgn_cbridge_v1_query_pb.Token | undefined;
  setToken(value?: sgn_cbridge_v1_query_pb.Token): Reward;
  hasToken(): boolean;
  clearToken(): Reward;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reward.AsObject;
  static toObject(includeInstance: boolean, msg: Reward): Reward.AsObject;
  static serializeBinaryToWriter(message: Reward, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reward;
  static deserializeBinaryFromReader(message: Reward, reader: jspb.BinaryReader): Reward;
}

export namespace Reward {
  export type AsObject = {
    amt: number,
    token?: sgn_cbridge_v1_query_pb.Token.AsObject,
  }
}

export class RewardingDataResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): RewardingDataResponse;
  hasErr(): boolean;
  clearErr(): RewardingDataResponse;

  getUsdPriceMap(): jspb.Map<string, number>;
  clearUsdPriceMap(): RewardingDataResponse;

  getHistoricalCumulativeRewardsList(): Array<Reward>;
  setHistoricalCumulativeRewardsList(value: Array<Reward>): RewardingDataResponse;
  clearHistoricalCumulativeRewardsList(): RewardingDataResponse;
  addHistoricalCumulativeRewards(value?: Reward, index?: number): Reward;

  getUnlockedCumulativeRewardsList(): Array<Reward>;
  setUnlockedCumulativeRewardsList(value: Array<Reward>): RewardingDataResponse;
  clearUnlockedCumulativeRewardsList(): RewardingDataResponse;
  addUnlockedCumulativeRewards(value?: Reward, index?: number): Reward;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RewardingDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RewardingDataResponse): RewardingDataResponse.AsObject;
  static serializeBinaryToWriter(message: RewardingDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RewardingDataResponse;
  static deserializeBinaryFromReader(message: RewardingDataResponse, reader: jspb.BinaryReader): RewardingDataResponse;
}

export namespace RewardingDataResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    usdPriceMap: Array<[string, number]>,
    historicalCumulativeRewardsList: Array<Reward.AsObject>,
    unlockedCumulativeRewardsList: Array<Reward.AsObject>,
  }
}

export class UpdateChainRequest extends jspb.Message {
  getChain(): Chain | undefined;
  setChain(value?: Chain): UpdateChainRequest;
  hasChain(): boolean;
  clearChain(): UpdateChainRequest;

  getTxUrlPrefix(): string;
  setTxUrlPrefix(value: string): UpdateChainRequest;

  getSig(): Uint8Array | string;
  getSig_asU8(): Uint8Array;
  getSig_asB64(): string;
  setSig(value: Uint8Array | string): UpdateChainRequest;

  getAddr(): string;
  setAddr(value: string): UpdateChainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChainRequest): UpdateChainRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateChainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChainRequest;
  static deserializeBinaryFromReader(message: UpdateChainRequest, reader: jspb.BinaryReader): UpdateChainRequest;
}

export namespace UpdateChainRequest {
  export type AsObject = {
    chain?: Chain.AsObject,
    txUrlPrefix: string,
    sig: Uint8Array | string,
    addr: string,
  }
}

export class UpdateChainResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): UpdateChainResponse;
  hasErr(): boolean;
  clearErr(): UpdateChainResponse;

  getChain(): Chain | undefined;
  setChain(value?: Chain): UpdateChainResponse;
  hasChain(): boolean;
  clearChain(): UpdateChainResponse;

  getTxUrlPrefix(): string;
  setTxUrlPrefix(value: string): UpdateChainResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChainResponse): UpdateChainResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateChainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChainResponse;
  static deserializeBinaryFromReader(message: UpdateChainResponse, reader: jspb.BinaryReader): UpdateChainResponse;
}

export namespace UpdateChainResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    chain?: Chain.AsObject,
    txUrlPrefix: string,
  }
}

export class UpdateTokenRequest extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): UpdateTokenRequest;

  getTokenSymbol(): string;
  setTokenSymbol(value: string): UpdateTokenRequest;

  getTokenName(): string;
  setTokenName(value: string): UpdateTokenRequest;

  getTokenIcon(): string;
  setTokenIcon(value: string): UpdateTokenRequest;

  getSig(): Uint8Array | string;
  getSig_asU8(): Uint8Array;
  getSig_asB64(): string;
  setSig(value: Uint8Array | string): UpdateTokenRequest;

  getAddr(): string;
  setAddr(value: string): UpdateTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTokenRequest): UpdateTokenRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTokenRequest;
  static deserializeBinaryFromReader(message: UpdateTokenRequest, reader: jspb.BinaryReader): UpdateTokenRequest;
}

export namespace UpdateTokenRequest {
  export type AsObject = {
    chainId: number,
    tokenSymbol: string,
    tokenName: string,
    tokenIcon: string,
    sig: Uint8Array | string,
    addr: string,
  }
}

export class UpdateTokenResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): UpdateTokenResponse;
  hasErr(): boolean;
  clearErr(): UpdateTokenResponse;

  getToken(): TokenInfo | undefined;
  setToken(value?: TokenInfo): UpdateTokenResponse;
  hasToken(): boolean;
  clearToken(): UpdateTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTokenResponse): UpdateTokenResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTokenResponse;
  static deserializeBinaryFromReader(message: UpdateTokenResponse, reader: jspb.BinaryReader): UpdateTokenResponse;
}

export namespace UpdateTokenResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    token?: TokenInfo.AsObject,
  }
}

export class StakingConfigRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StakingConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StakingConfigRequest): StakingConfigRequest.AsObject;
  static serializeBinaryToWriter(message: StakingConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StakingConfigRequest;
  static deserializeBinaryFromReader(message: StakingConfigRequest, reader: jspb.BinaryReader): StakingConfigRequest;
}

export namespace StakingConfigRequest {
  export type AsObject = {
  }
}

export class StakingConfigResponse extends jspb.Message {
  getViewerContract(): string;
  setViewerContract(value: string): StakingConfigResponse;

  getStakingContract(): string;
  setStakingContract(value: string): StakingConfigResponse;

  getStakingRewardContract(): string;
  setStakingRewardContract(value: string): StakingConfigResponse;

  getCelrContract(): string;
  setCelrContract(value: string): StakingConfigResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StakingConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StakingConfigResponse): StakingConfigResponse.AsObject;
  static serializeBinaryToWriter(message: StakingConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StakingConfigResponse;
  static deserializeBinaryFromReader(message: StakingConfigResponse, reader: jspb.BinaryReader): StakingConfigResponse;
}

export namespace StakingConfigResponse {
  export type AsObject = {
    viewerContract: string,
    stakingContract: string,
    stakingRewardContract: string,
    celrContract: string,
  }
}

export class UnlockStakingRewardRequest extends jspb.Message {
  getDelegatorAddress(): string;
  setDelegatorAddress(value: string): UnlockStakingRewardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockStakingRewardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockStakingRewardRequest): UnlockStakingRewardRequest.AsObject;
  static serializeBinaryToWriter(message: UnlockStakingRewardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockStakingRewardRequest;
  static deserializeBinaryFromReader(message: UnlockStakingRewardRequest, reader: jspb.BinaryReader): UnlockStakingRewardRequest;
}

export namespace UnlockStakingRewardRequest {
  export type AsObject = {
    delegatorAddress: string,
  }
}

export class UnlockStakingRewardResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): UnlockStakingRewardResponse;
  hasErr(): boolean;
  clearErr(): UnlockStakingRewardResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnlockStakingRewardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnlockStakingRewardResponse): UnlockStakingRewardResponse.AsObject;
  static serializeBinaryToWriter(message: UnlockStakingRewardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnlockStakingRewardResponse;
  static deserializeBinaryFromReader(message: UnlockStakingRewardResponse, reader: jspb.BinaryReader): UnlockStakingRewardResponse;
}

export namespace UnlockStakingRewardResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
  }
}

export class GetStakingRewardDetailsRequest extends jspb.Message {
  getDelegatorAddress(): string;
  setDelegatorAddress(value: string): GetStakingRewardDetailsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStakingRewardDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStakingRewardDetailsRequest): GetStakingRewardDetailsRequest.AsObject;
  static serializeBinaryToWriter(message: GetStakingRewardDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStakingRewardDetailsRequest;
  static deserializeBinaryFromReader(message: GetStakingRewardDetailsRequest, reader: jspb.BinaryReader): GetStakingRewardDetailsRequest;
}

export namespace GetStakingRewardDetailsRequest {
  export type AsObject = {
    delegatorAddress: string,
  }
}

export class GetStakingRewardDetailsResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): GetStakingRewardDetailsResponse;
  hasErr(): boolean;
  clearErr(): GetStakingRewardDetailsResponse;

  getDetail(): sgn_distribution_v1_distribution_pb.StakingRewardClaimInfo | undefined;
  setDetail(value?: sgn_distribution_v1_distribution_pb.StakingRewardClaimInfo): GetStakingRewardDetailsResponse;
  hasDetail(): boolean;
  clearDetail(): GetStakingRewardDetailsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStakingRewardDetailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStakingRewardDetailsResponse): GetStakingRewardDetailsResponse.AsObject;
  static serializeBinaryToWriter(message: GetStakingRewardDetailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStakingRewardDetailsResponse;
  static deserializeBinaryFromReader(message: GetStakingRewardDetailsResponse, reader: jspb.BinaryReader): GetStakingRewardDetailsResponse;
}

export namespace GetStakingRewardDetailsResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    detail?: sgn_distribution_v1_distribution_pb.StakingRewardClaimInfo.AsObject,
  }
}

export class GetTotalLiquidityProviderTokenBalanceRequest extends jspb.Message {
  getChainIdsList(): Array<number>;
  setChainIdsList(value: Array<number>): GetTotalLiquidityProviderTokenBalanceRequest;
  clearChainIdsList(): GetTotalLiquidityProviderTokenBalanceRequest;
  addChainIds(value: number, index?: number): GetTotalLiquidityProviderTokenBalanceRequest;

  getTokenSymbol(): string;
  setTokenSymbol(value: string): GetTotalLiquidityProviderTokenBalanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTotalLiquidityProviderTokenBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTotalLiquidityProviderTokenBalanceRequest): GetTotalLiquidityProviderTokenBalanceRequest.AsObject;
  static serializeBinaryToWriter(message: GetTotalLiquidityProviderTokenBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTotalLiquidityProviderTokenBalanceRequest;
  static deserializeBinaryFromReader(message: GetTotalLiquidityProviderTokenBalanceRequest, reader: jspb.BinaryReader): GetTotalLiquidityProviderTokenBalanceRequest;
}

export namespace GetTotalLiquidityProviderTokenBalanceRequest {
  export type AsObject = {
    chainIdsList: Array<number>,
    tokenSymbol: string,
  }
}

export class GetTotalLiquidityProviderTokenBalanceResponse extends jspb.Message {
  getErr(): ErrMsg | undefined;
  setErr(value?: ErrMsg): GetTotalLiquidityProviderTokenBalanceResponse;
  hasErr(): boolean;
  clearErr(): GetTotalLiquidityProviderTokenBalanceResponse;

  getTotalLiqMap(): jspb.Map<number, string>;
  clearTotalLiqMap(): GetTotalLiquidityProviderTokenBalanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTotalLiquidityProviderTokenBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTotalLiquidityProviderTokenBalanceResponse): GetTotalLiquidityProviderTokenBalanceResponse.AsObject;
  static serializeBinaryToWriter(message: GetTotalLiquidityProviderTokenBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTotalLiquidityProviderTokenBalanceResponse;
  static deserializeBinaryFromReader(message: GetTotalLiquidityProviderTokenBalanceResponse, reader: jspb.BinaryReader): GetTotalLiquidityProviderTokenBalanceResponse;
}

export namespace GetTotalLiquidityProviderTokenBalanceResponse {
  export type AsObject = {
    err?: ErrMsg.AsObject,
    totalLiqMap: Array<[number, string]>,
  }
}

export class ErrMsg extends jspb.Message {
  getCode(): ErrCode;
  setCode(value: ErrCode): ErrMsg;

  getMsg(): string;
  setMsg(value: string): ErrMsg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ErrMsg): ErrMsg.AsObject;
  static serializeBinaryToWriter(message: ErrMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrMsg;
  static deserializeBinaryFromReader(message: ErrMsg, reader: jspb.BinaryReader): ErrMsg;
}

export namespace ErrMsg {
  export type AsObject = {
    code: ErrCode,
    msg: string,
  }
}

export enum TransferType { 
  TRANSFER_TYPE_UNKNOWN = 0,
  TRANSFER_TYPE_SEND = 1,
  TRANSFER_TYPE_REFUND = 2,
}
export enum LPType { 
  LP_TYPE_UNKNOWN = 0,
  LP_TYPE_ADD = 1,
  LP_TYPE_REMOVE = 2,
}
export enum WithdrawMethodType { 
  WD_METHOD_TYPE_UNDEFINED = 0,
  WD_METHOD_TYPE_ONE_RM = 1,
  WD_METHOD_TYPE_ALL_IN_ONE = 2,
  WD_METHOD_TYPE_STAKING_CLAIM = 3,
}
export enum ErrCode { 
  ERROR_CODE_UNDEFINED = 0,
  ERROR_CODE_COMMON = 500,
  ERROR_NO_TOKEN_ON_DST_CHAIN = 1001,
  ERROR_NO_TOKEN_ON_SRC_CHAIN = 1002,
}
