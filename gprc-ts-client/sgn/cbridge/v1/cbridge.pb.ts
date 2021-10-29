/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as GoogleProtobufDuration from "../../../google/protobuf/duration.pb"
import * as GoogleProtobufTimestamp from "../../../google/protobuf/timestamp.pb"

export enum XferStatus {
  UNKNOWN = "UNKNOWN",
  OK_TO_RELAY = "OK_TO_RELAY",
  SUCCESS = "SUCCESS",
  BAD_LIQUIDITY = "BAD_LIQUIDITY",
  BAD_SLIPPAGE = "BAD_SLIPPAGE",
  BAD_TOKEN = "BAD_TOKEN",
  REFUND_REQUESTED = "REFUND_REQUESTED",
  REFUND_DONE = "REFUND_DONE",
  BAD_XFER_DISABLED = "BAD_XFER_DISABLED",
  BAD_DEST_CHAIN = "BAD_DEST_CHAIN",
}

export type Params = {
  signer_update_duration?: GoogleProtobufDuration.Duration
  sign_again_cool_down_duration?: GoogleProtobufDuration.Duration
}

export type CbrConfig = {
  lp_fee_perc?: number
  pick_lp_size?: number
  relay_gas_cost?: RelayGasCostParam[]
  assets?: ChainAsset[]
  chain_pairs?: ChainPair[]
}

export type CbrPrice = {
  update_epoch?: string
  asset_price?: AssetPrice[]
  gas_price?: GasPrice[]
}

export type RelayGasCostParam = {
  chain_id?: string
  cost_base?: number
  per_validator?: number
  per_sig?: number
}

export type AssetPrice = {
  symbol?: string
  chain_ids?: string[]
  price?: number
}

export type GasPrice = {
  chain_id?: string
  price?: string
}

export type ChainAsset = {
  symbol?: string
  chain_id?: string
  addr?: string
  decimal?: number
  max_fee_amount?: string
  xfer_disabled?: boolean
}

export type ChainPair = {
  chid1?: string
  chid2?: string
  weight1?: number
  fee1to2?: number
  fee2to1?: number
  const_a?: number
}

export type CbrProposal = {
  title?: string
  description?: string
  cbr_config?: CbrConfig
  deposit?: string
}

export type OnChainEvent = {
  chainid?: string
  evtype?: string
  elog?: Uint8Array
}

export type RelayOnChain = {
  sender?: Uint8Array
  receiver?: Uint8Array
  token?: Uint8Array
  amount?: Uint8Array
  src_chain_id?: string
  dst_chain_id?: string
  src_transfer_id?: Uint8Array
}

export type WithdrawOnchain = {
  chainid?: string
  seqnum?: string
  receiver?: Uint8Array
  token?: Uint8Array
  amount?: Uint8Array
}

export type XferRelay = {
  relay?: Uint8Array
  sorted_sigs?: AddrSig[]
}

export type WithdrawDetail = {
  wd_onchain?: Uint8Array
  sorted_sigs?: AddrSig[]
  completed?: boolean
  last_req_time?: string
  xferId?: Uint8Array
}

export type AddrSig = {
  addr?: Uint8Array
  sig?: Uint8Array
}

export type Signer = {
  addr?: Uint8Array
  power?: Uint8Array
}

export type ChainSigners = {
  chain_id?: string
  sorted_signers?: Signer[]
}

export type LatestSigners = {
  sorted_signers?: Signer[]
  signers_bytes?: Uint8Array
  sorted_sigs?: AddrSig[]
  update_time?: GoogleProtobufTimestamp.Timestamp
}