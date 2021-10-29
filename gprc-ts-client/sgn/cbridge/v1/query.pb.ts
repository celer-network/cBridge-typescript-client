/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../../fetch.pb"
import * as SgnCbridgeV1Cbridge from "./cbridge.pb"

export enum LPHistoryStatus {
  LP_UNKNOWN = "LP_UNKNOWN",
  LP_WAITING_FOR_SGN = "LP_WAITING_FOR_SGN",
  LP_WAITING_FOR_LP = "LP_WAITING_FOR_LP",
  LP_SUBMITTING = "LP_SUBMITTING",
  LP_COMPLETED = "LP_COMPLETED",
  LP_FAILED = "LP_FAILED",
}

export enum TransferHistoryStatus {
  TRANSFER_UNKNOWN = "TRANSFER_UNKNOWN",
  TRANSFER_SUBMITTING = "TRANSFER_SUBMITTING",
  TRANSFER_FAILED = "TRANSFER_FAILED",
  TRANSFER_WAITING_FOR_SGN_CONFIRMATION = "TRANSFER_WAITING_FOR_SGN_CONFIRMATION",
  TRANSFER_WAITING_FOR_FUND_RELEASE = "TRANSFER_WAITING_FOR_FUND_RELEASE",
  TRANSFER_COMPLETED = "TRANSFER_COMPLETED",
  TRANSFER_TO_BE_REFUNDED = "TRANSFER_TO_BE_REFUNDED",
  TRANSFER_REQUESTING_REFUND = "TRANSFER_REQUESTING_REFUND",
  TRANSFER_REFUND_TO_BE_CONFIRMED = "TRANSFER_REFUND_TO_BE_CONFIRMED",
  TRANSFER_CONFIRMING_YOUR_REFUND = "TRANSFER_CONFIRMING_YOUR_REFUND",
  TRANSFER_REFUNDED = "TRANSFER_REFUNDED",
}

export type ChainTokensConfigRequest = {
}

export type ChainTokensConfigResponse = {
  chain_tokens?: {[key: string]: Tokens}
}

export type Tokens = {
  tokens?: Token[]
  contract_addr?: string
  block_delay?: number
}

export type GetFeeRequest = {
  src_chain_id?: string
  dst_chain_id?: string
  src_token_addr?: string
  amt?: string
  lp_addr?: string
}

export type GetFeeResponse = {
  eq_value_token_amt?: string
  perc_fee?: string
  base_fee?: string
  decimal?: string
}

export type GetFeePercentageRequest = {
  src_chain_id?: string
  dst_chain_id?: string
}

export type GetFeePercentageResponse = {
  fee_perc?: number
}

export type QueryTransferStatusRequest = {
  transfer_id?: string[]
}

export type QueryTransferStatusResponse = {
  status?: {[key: string]: TransferStatus}
}

export type LiquidityDetail = {
  chain_id?: string
  token?: Token
  usr_liquidity?: string
  usr_lp_fee_earning?: string
  total_liquidity?: string
  lp_fee_rate?: number
}

export type ChainTokenAddrPair = {
  chain_id?: string
  token_addr?: string
}

export type LiquidityDetailListRequest = {
  lp_addr?: string
  chain_token?: ChainTokenAddrPair[]
}

export type LiquidityDetailListResponse = {
  liquidity_detail?: LiquidityDetail[]
}

export type CheckChainTokenValidRequest = {
  src_chain_id?: string
  src_token_addr?: string
  dest_chain_id?: string
}

export type CheckChainTokenValidResponse = {
  valid?: boolean
}

export type TransferStatus = {
  gateway_status?: TransferHistoryStatus
  sgn_status?: SgnCbridgeV1Cbridge.XferStatus
}

export type Token = {
  symbol?: string
  address?: string
  decimal?: number
  xfer_disabled?: boolean
}

export class Query {
  static ChainTokensConfig(req: ChainTokensConfigRequest, initReq?: fm.InitReq): Promise<ChainTokensConfigResponse> {
    return fm.fetchReq<ChainTokensConfigRequest, ChainTokensConfigResponse>(`/sgn.cbridge.v1.Query/ChainTokensConfig`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetFee(req: GetFeeRequest, initReq?: fm.InitReq): Promise<GetFeeResponse> {
    return fm.fetchReq<GetFeeRequest, GetFeeResponse>(`/sgn.cbridge.v1.Query/GetFee`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetFeePercentage(req: GetFeePercentageRequest, initReq?: fm.InitReq): Promise<GetFeePercentageResponse> {
    return fm.fetchReq<GetFeePercentageRequest, GetFeePercentageResponse>(`/sgn.cbridge.v1.Query/GetFeePercentage`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static QueryTransferStatus(req: QueryTransferStatusRequest, initReq?: fm.InitReq): Promise<QueryTransferStatusResponse> {
    return fm.fetchReq<QueryTransferStatusRequest, QueryTransferStatusResponse>(`/sgn.cbridge.v1.Query/QueryTransferStatus`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static LiquidityDetailList(req: LiquidityDetailListRequest, initReq?: fm.InitReq): Promise<LiquidityDetailListResponse> {
    return fm.fetchReq<LiquidityDetailListRequest, LiquidityDetailListResponse>(`/sgn.cbridge.v1.Query/LiquidityDetailList`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}