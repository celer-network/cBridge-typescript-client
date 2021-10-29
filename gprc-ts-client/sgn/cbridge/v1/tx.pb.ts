/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../../fetch.pb"

export enum SignDataType {
  INVALID = "INVALID",
  RELAY = "RELAY",
  WITHDRAW = "WITHDRAW",
  SIGNERS = "SIGNERS",
}

export enum WithdrawType {
  WITHDRAW_TYPE_REMOVE_LIQUIDITY = "WITHDRAW_TYPE_REMOVE_LIQUIDITY",
  WITHDRAW_TYPE_REFUND_TRANSFER = "WITHDRAW_TYPE_REFUND_TRANSFER",
  WITHDRAW_TYPE_CLAIM_FEE_SHARE = "WITHDRAW_TYPE_CLAIM_FEE_SHARE",
}

export enum ErrCode {
  UNDEFINED = "UNDEFINED",
  INVALID_REQ = "INVALID_REQ",
  INVALID_SIG = "INVALID_SIG",
  INVALID_STATUS = "INVALID_STATUS",
  NOT_FOUND = "NOT_FOUND",
  DUP_REQID = "DUP_REQID",
  REQ_TOO_SOON = "REQ_TOO_SOON",
  BAL_NOT_ENOUGH = "BAL_NOT_ENOUGH",
  XFER_NOT_REFUNDABLE = "XFER_NOT_REFUNDABLE",
  XFER_REFUND_STARTED = "XFER_REFUND_STARTED",
  WD_INTERNAL_XFER_FAILURE = "WD_INTERNAL_XFER_FAILURE",
}

export type MsgSendMySig = {
  datatype?: SignDataType
  data?: Uint8Array
  my_sig?: Uint8Array
  creator?: string
}

export type MsgSendMySigResp = {
}

export type WithdrawLq = {
  from_chain_id?: string
  token_addr?: string
  ratio?: number
  max_slippage?: number
}

export type WithdrawReq = {
  xfer_id?: string
  withdraws?: WithdrawLq[]
  exit_chain_id?: string
  req_id?: string
  withdraw_type?: WithdrawType
}

export type MsgInitWithdraw = {
  withdraw_req?: Uint8Array
  user_sig?: Uint8Array
  creator?: string
}

export type MsgInitWithdrawResp = {
}

export type MsgSignAgain = {
  user_addr?: Uint8Array
  req_id?: string
  creator?: string
}

export type MsgSignAgainResp = {
}

export type ErrMsg = {
  code?: ErrCode
  desc?: string
}

export class Msg {
  static InitWithdraw(req: MsgInitWithdraw, initReq?: fm.InitReq): Promise<MsgInitWithdrawResp> {
    return fm.fetchReq<MsgInitWithdraw, MsgInitWithdrawResp>(`/sgn.cbridge.v1.Msg/InitWithdraw`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static SignAgain(req: MsgSignAgain, initReq?: fm.InitReq): Promise<MsgSignAgainResp> {
    return fm.fetchReq<MsgSignAgain, MsgSignAgainResp>(`/sgn.cbridge.v1.Msg/SignAgain`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static SendMySig(req: MsgSendMySig, initReq?: fm.InitReq): Promise<MsgSendMySigResp> {
    return fm.fetchReq<MsgSendMySig, MsgSendMySigResp>(`/sgn.cbridge.v1.Msg/SendMySig`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}