/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../../fetch.pb"
import * as SgnCbridgeV1Cbridge from "../../cbridge/v1/cbridge.pb"
import * as SgnCbridgeV1Query from "../../cbridge/v1/query.pb"

type Absent<T, K extends keyof T> = { [k in Exclude<keyof T, K>]?: undefined };
type OneOf<T> =
  | { [k in keyof T]?: undefined }
  | (
    keyof T extends infer K ?
      (K extends string & keyof T ? { [k in K]: T[K] } & Absent<T, K>
        : never)
    : never);

export enum TransferType {
  TRANSFER_TYPE_UNKNOWN = "TRANSFER_TYPE_UNKNOWN",
  TRANSFER_TYPE_SEND = "TRANSFER_TYPE_SEND",
  TRANSFER_TYPE_REFUND = "TRANSFER_TYPE_REFUND",
}

export enum LPType {
  LP_TYPE_UNKNOWN = "LP_TYPE_UNKNOWN",
  LP_TYPE_ADD = "LP_TYPE_ADD",
  LP_TYPE_REMOVE = "LP_TYPE_REMOVE",
}

export enum WithdrawMethodType {
  WD_METHOD_TYPE_UNDEFINED = "WD_METHOD_TYPE_UNDEFINED",
  WD_METHOD_TYPE_ONE_RM = "WD_METHOD_TYPE_ONE_RM",
  WD_METHOD_TYPE_ALL_IN_ONE = "WD_METHOD_TYPE_ALL_IN_ONE",
  WD_METHOD_TYPE_STAKING_CLAIM = "WD_METHOD_TYPE_STAKING_CLAIM",
}

export enum ErrCode {
  ERROR_CODE_UNDEFINED = "ERROR_CODE_UNDEFINED",
  ERROR_CODE_COMMON = "ERROR_CODE_COMMON",
  ERROR_NO_TOKEN_ON_DST_CHAIN = "ERROR_NO_TOKEN_ON_DST_CHAIN",
  ERROR_NO_TOKEN_ON_SRC_CHAIN = "ERROR_NO_TOKEN_ON_SRC_CHAIN",
}

export type Chain = {
  id?: number
  name?: string
  icon?: string
  block_delay?: number
  gas_token_symbol?: string
  explore_url?: string
  rpc_url?: string
  contract_addr?: string
}

export type ChainTokenInfo = {
  token?: TokenInfo[]
}

export type TokenInfo = {
  token?: SgnCbridgeV1Query.Token
  name?: string
  icon?: string
}

export type TransferInfo = {
  chain?: Chain
  token?: SgnCbridgeV1Query.Token
  amount?: string
}

export type SetAdvancedInfoRequest = {
  addr?: string
  slippage_tolerance?: number
}

export type SetAdvancedInfoResponse = {
  err?: ErrMsg
}

export type GetAdvancedInfoRequest = {
  addr?: string
}

export type GetAdvancedInfoResponse = {
  err?: ErrMsg
  slippage_tolerance?: number
}

export type GetTransferStatusRequest = {
  transfer_id?: string
}

export type GetTransferStatusResponse = {
  err?: ErrMsg
  status?: SgnCbridgeV1Query.TransferHistoryStatus
  wd_onchain?: Uint8Array
  sorted_sigs?: Uint8Array[]
  signers?: Uint8Array[]
  powers?: Uint8Array[]
  refund_reason?: SgnCbridgeV1Cbridge.XferStatus
  block_delay?: number
  src_block_tx_link?: string
  dst_block_tx_link?: string
}

export type GetTransferConfigsRequest = {
}

export type GetTransferConfigsResponse = {
  err?: ErrMsg
  chains?: Chain[]
  chain_token?: {[key: number]: ChainTokenInfo}
  farming_reward_contract_addr?: string
}


type BaseGetTokenInfoRequest = {
  chain_id?: number
}

export type GetTokenInfoRequest = BaseGetTokenInfoRequest
  & OneOf<{ token_symbol: string; token_addr: string }>

export type GetTokenInfoResponse = {
  err?: ErrMsg
  token_info?: TokenInfo
}

export type EstimateAmtRequest = {
  src_chain_id?: number
  dst_chain_id?: number
  token_symbol?: string
  amt?: string
  usr_addr?: string
}

export type EstimateAmtResponse = {
  err?: ErrMsg
  eq_value_token_amt?: string
  bridge_rate?: number
  perc_fee?: string
  base_fee?: string
  slippage_tolerance?: number
  max_slippage?: number
}

export type EstimateWithdrawAmt = {
  eq_value_token_amt?: string
  bridge_rate?: number
  perc_fee?: string
  base_fee?: string
  slippage_tolerance?: number
  max_slippage?: number
}

export type MarkTransferRequest = {
  transfer_id?: string
  src_send_info?: TransferInfo
  dst_min_received_info?: TransferInfo
  addr?: string
  src_tx_hash?: string
  type?: TransferType
}

export type MarkTransferResponse = {
  err?: ErrMsg
}

export type WithdrawLiquidityRequest = {
  withdraw_req?: Uint8Array
  sig?: Uint8Array
  estimated_received_amt?: string
  method_type?: WithdrawMethodType
}

export type WithdrawLiquidityResponse = {
  err?: ErrMsg
  seq_num?: string
}

export type MarkLiquidityRequest = {
  lp_addr?: string
  amt?: string
  token_addr?: string
  chain_id?: number
  seq_num?: string
  tx_hash?: string
  type?: LPType
}

export type MarkLiquidityResponse = {
  err?: ErrMsg
}

export type QueryLiquidityStatusRequest = {
  seq_num?: string
  lp_addr?: string
  chain_id?: number
  type?: LPType
}

export type TransferHistory = {
  transfer_id?: string
  src_send_info?: TransferInfo
  dst_received_info?: TransferInfo
  ts?: string
  src_block_tx_link?: string
  dst_block_tx_link?: string
  status?: SgnCbridgeV1Query.TransferHistoryStatus
  refund_reason?: SgnCbridgeV1Cbridge.XferStatus
}

export type TransferHistoryRequest = {
  next_page_token?: string
  page_size?: string
  addr?: string
}

export type TransferHistoryResponse = {
  err?: ErrMsg
  history?: TransferHistory[]
  next_page_token?: string
  current_size?: string
}

export type LPHistoryRequest = {
  next_page_token?: string
  page_size?: string
  addr?: string
}

export type UpdateChainRequest = {
  chain?: Chain
  tx_url_prefix?: string
}

export type UpdateChainResponse = {
  err?: ErrMsg
  chain?: Chain
  tx_url_prefix?: string
}

export type UpdateTokenRequest = {
  chain_id?: number
  token_symbol?: string
  token_name?: string
  token_icon?: string
}

export type UpdateTokenResponse = {
  err?: ErrMsg
  token?: TokenInfo
}

export type ErrMsg = {
  code?: ErrCode
  msg?: string
}

export class Web {
  static SetAdvancedInfo(req: SetAdvancedInfoRequest, initReq?: fm.InitReq): Promise<SetAdvancedInfoResponse> {
    return fm.fetchReq<SetAdvancedInfoRequest, SetAdvancedInfoResponse>(`/v1/setAdvancedInfo`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetAdvancedInfo(req: GetAdvancedInfoRequest, initReq?: fm.InitReq): Promise<GetAdvancedInfoResponse> {
    return fm.fetchReq<GetAdvancedInfoRequest, GetAdvancedInfoResponse>(`/v1/getAdvancedInfo`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetTransferConfigs(req: GetTransferConfigsRequest, initReq?: fm.InitReq): Promise<GetTransferConfigsResponse> {
    return fm.fetchReq<GetTransferConfigsRequest, GetTransferConfigsResponse>(`/v1/getTransferConfigs?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static GetTokenInfo(req: GetTokenInfoRequest, initReq?: fm.InitReq): Promise<GetTokenInfoResponse> {
    return fm.fetchReq<GetTokenInfoRequest, GetTokenInfoResponse>(`/v1/getTokenInfo?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static EstimateAmt(req: EstimateAmtRequest, initReq?: fm.InitReq): Promise<EstimateAmtResponse> {
    return fm.fetchReq<EstimateAmtRequest, EstimateAmtResponse>(`/v1/estimateAmt?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static MarkTransfer(req: MarkTransferRequest, initReq?: fm.InitReq): Promise<MarkTransferResponse> {
    return fm.fetchReq<MarkTransferRequest, MarkTransferResponse>(`/v1/markTransfer`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetTransferStatus(req: GetTransferStatusRequest, initReq?: fm.InitReq): Promise<GetTransferStatusResponse> {
    return fm.fetchReq<GetTransferStatusRequest, GetTransferStatusResponse>(`/v1/getTransferStatus`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static MarkLiquidity(req: MarkLiquidityRequest, initReq?: fm.InitReq): Promise<MarkLiquidityResponse> {
    return fm.fetchReq<MarkLiquidityRequest, MarkLiquidityResponse>(`/v1/markLiquidity`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static WithdrawLiquidity(req: WithdrawLiquidityRequest, initReq?: fm.InitReq): Promise<WithdrawLiquidityResponse> {
    return fm.fetchReq<WithdrawLiquidityRequest, WithdrawLiquidityResponse>(`/v1/withdrawLiquidity`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static TransferHistory(req: TransferHistoryRequest, initReq?: fm.InitReq): Promise<TransferHistoryResponse> {
    return fm.fetchReq<TransferHistoryRequest, TransferHistoryResponse>(`/v1/transferHistory?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static UpdateChain(req: UpdateChainRequest, initReq?: fm.InitReq): Promise<UpdateChainResponse> {
    return fm.fetchReq<UpdateChainRequest, UpdateChainResponse>(`/v1/config/updateChain`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static UpdateToken(req: UpdateTokenRequest, initReq?: fm.InitReq): Promise<UpdateTokenResponse> {
    return fm.fetchReq<UpdateTokenRequest, UpdateTokenResponse>(`/v1/config/updateToken`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}