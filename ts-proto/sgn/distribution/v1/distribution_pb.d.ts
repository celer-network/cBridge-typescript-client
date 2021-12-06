import * as jspb from 'google-protobuf'

import * as gogoproto_gogo_pb from '../../../gogoproto/gogo_pb';
import * as cosmos_base_v1beta1_coin_pb from '../../../cosmos/base/v1beta1/coin_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as sgn_common_v1_common_pb from '../../../sgn/common/v1/common_pb';


export class Params extends jspb.Message {
  getCommunityTax(): string;
  setCommunityTax(value: string): Params;

  getBaseProposerReward(): string;
  setBaseProposerReward(value: string): Params;

  getBonusProposerReward(): string;
  setBonusProposerReward(value: string): Params;

  getWithdrawAddrEnabled(): boolean;
  setWithdrawAddrEnabled(value: boolean): Params;

  getClaimCooldown(): google_protobuf_duration_pb.Duration | undefined;
  setClaimCooldown(value?: google_protobuf_duration_pb.Duration): Params;
  hasClaimCooldown(): boolean;
  clearClaimCooldown(): Params;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    communityTax: string,
    baseProposerReward: string,
    bonusProposerReward: string,
    withdrawAddrEnabled: boolean,
    claimCooldown?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class ValidatorHistoricalRewards extends jspb.Message {
  getCumulativeRewardRatioList(): Array<cosmos_base_v1beta1_coin_pb.DecCoin>;
  setCumulativeRewardRatioList(value: Array<cosmos_base_v1beta1_coin_pb.DecCoin>): ValidatorHistoricalRewards;
  clearCumulativeRewardRatioList(): ValidatorHistoricalRewards;
  addCumulativeRewardRatio(value?: cosmos_base_v1beta1_coin_pb.DecCoin, index?: number): cosmos_base_v1beta1_coin_pb.DecCoin;

  getReferenceCount(): number;
  setReferenceCount(value: number): ValidatorHistoricalRewards;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorHistoricalRewards.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorHistoricalRewards): ValidatorHistoricalRewards.AsObject;
  static serializeBinaryToWriter(message: ValidatorHistoricalRewards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorHistoricalRewards;
  static deserializeBinaryFromReader(message: ValidatorHistoricalRewards, reader: jspb.BinaryReader): ValidatorHistoricalRewards;
}

export namespace ValidatorHistoricalRewards {
  export type AsObject = {
    cumulativeRewardRatioList: Array<cosmos_base_v1beta1_coin_pb.DecCoin.AsObject>,
    referenceCount: number,
  }
}

export class ValidatorCurrentRewards extends jspb.Message {
  getRewardsList(): Array<cosmos_base_v1beta1_coin_pb.DecCoin>;
  setRewardsList(value: Array<cosmos_base_v1beta1_coin_pb.DecCoin>): ValidatorCurrentRewards;
  clearRewardsList(): ValidatorCurrentRewards;
  addRewards(value?: cosmos_base_v1beta1_coin_pb.DecCoin, index?: number): cosmos_base_v1beta1_coin_pb.DecCoin;

  getPeriod(): number;
  setPeriod(value: number): ValidatorCurrentRewards;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorCurrentRewards.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorCurrentRewards): ValidatorCurrentRewards.AsObject;
  static serializeBinaryToWriter(message: ValidatorCurrentRewards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorCurrentRewards;
  static deserializeBinaryFromReader(message: ValidatorCurrentRewards, reader: jspb.BinaryReader): ValidatorCurrentRewards;
}

export namespace ValidatorCurrentRewards {
  export type AsObject = {
    rewardsList: Array<cosmos_base_v1beta1_coin_pb.DecCoin.AsObject>,
    period: number,
  }
}

export class ValidatorAccumulatedCommission extends jspb.Message {
  getCommissionList(): Array<cosmos_base_v1beta1_coin_pb.DecCoin>;
  setCommissionList(value: Array<cosmos_base_v1beta1_coin_pb.DecCoin>): ValidatorAccumulatedCommission;
  clearCommissionList(): ValidatorAccumulatedCommission;
  addCommission(value?: cosmos_base_v1beta1_coin_pb.DecCoin, index?: number): cosmos_base_v1beta1_coin_pb.DecCoin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorAccumulatedCommission.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorAccumulatedCommission): ValidatorAccumulatedCommission.AsObject;
  static serializeBinaryToWriter(message: ValidatorAccumulatedCommission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorAccumulatedCommission;
  static deserializeBinaryFromReader(message: ValidatorAccumulatedCommission, reader: jspb.BinaryReader): ValidatorAccumulatedCommission;
}

export namespace ValidatorAccumulatedCommission {
  export type AsObject = {
    commissionList: Array<cosmos_base_v1beta1_coin_pb.DecCoin.AsObject>,
  }
}

export class ValidatorOutstandingRewards extends jspb.Message {
  getRewardsList(): Array<cosmos_base_v1beta1_coin_pb.DecCoin>;
  setRewardsList(value: Array<cosmos_base_v1beta1_coin_pb.DecCoin>): ValidatorOutstandingRewards;
  clearRewardsList(): ValidatorOutstandingRewards;
  addRewards(value?: cosmos_base_v1beta1_coin_pb.DecCoin, index?: number): cosmos_base_v1beta1_coin_pb.DecCoin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorOutstandingRewards.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorOutstandingRewards): ValidatorOutstandingRewards.AsObject;
  static serializeBinaryToWriter(message: ValidatorOutstandingRewards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorOutstandingRewards;
  static deserializeBinaryFromReader(message: ValidatorOutstandingRewards, reader: jspb.BinaryReader): ValidatorOutstandingRewards;
}

export namespace ValidatorOutstandingRewards {
  export type AsObject = {
    rewardsList: Array<cosmos_base_v1beta1_coin_pb.DecCoin.AsObject>,
  }
}

export class ValidatorSlashEvent extends jspb.Message {
  getValidatorPeriod(): number;
  setValidatorPeriod(value: number): ValidatorSlashEvent;

  getFraction(): string;
  setFraction(value: string): ValidatorSlashEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorSlashEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorSlashEvent): ValidatorSlashEvent.AsObject;
  static serializeBinaryToWriter(message: ValidatorSlashEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorSlashEvent;
  static deserializeBinaryFromReader(message: ValidatorSlashEvent, reader: jspb.BinaryReader): ValidatorSlashEvent;
}

export namespace ValidatorSlashEvent {
  export type AsObject = {
    validatorPeriod: number,
    fraction: string,
  }
}

export class ValidatorSlashEvents extends jspb.Message {
  getValidatorSlashEventsList(): Array<ValidatorSlashEvent>;
  setValidatorSlashEventsList(value: Array<ValidatorSlashEvent>): ValidatorSlashEvents;
  clearValidatorSlashEventsList(): ValidatorSlashEvents;
  addValidatorSlashEvents(value?: ValidatorSlashEvent, index?: number): ValidatorSlashEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorSlashEvents.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorSlashEvents): ValidatorSlashEvents.AsObject;
  static serializeBinaryToWriter(message: ValidatorSlashEvents, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorSlashEvents;
  static deserializeBinaryFromReader(message: ValidatorSlashEvents, reader: jspb.BinaryReader): ValidatorSlashEvents;
}

export namespace ValidatorSlashEvents {
  export type AsObject = {
    validatorSlashEventsList: Array<ValidatorSlashEvent.AsObject>,
  }
}

export class FeePool extends jspb.Message {
  getCommunityPoolList(): Array<cosmos_base_v1beta1_coin_pb.DecCoin>;
  setCommunityPoolList(value: Array<cosmos_base_v1beta1_coin_pb.DecCoin>): FeePool;
  clearCommunityPoolList(): FeePool;
  addCommunityPool(value?: cosmos_base_v1beta1_coin_pb.DecCoin, index?: number): cosmos_base_v1beta1_coin_pb.DecCoin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeePool.AsObject;
  static toObject(includeInstance: boolean, msg: FeePool): FeePool.AsObject;
  static serializeBinaryToWriter(message: FeePool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeePool;
  static deserializeBinaryFromReader(message: FeePool, reader: jspb.BinaryReader): FeePool;
}

export namespace FeePool {
  export type AsObject = {
    communityPoolList: Array<cosmos_base_v1beta1_coin_pb.DecCoin.AsObject>,
  }
}

export class CommunityPoolSpendProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): CommunityPoolSpendProposal;

  getDescription(): string;
  setDescription(value: string): CommunityPoolSpendProposal;

  getRecipient(): string;
  setRecipient(value: string): CommunityPoolSpendProposal;

  getAmountList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setAmountList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): CommunityPoolSpendProposal;
  clearAmountList(): CommunityPoolSpendProposal;
  addAmount(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommunityPoolSpendProposal.AsObject;
  static toObject(includeInstance: boolean, msg: CommunityPoolSpendProposal): CommunityPoolSpendProposal.AsObject;
  static serializeBinaryToWriter(message: CommunityPoolSpendProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommunityPoolSpendProposal;
  static deserializeBinaryFromReader(message: CommunityPoolSpendProposal, reader: jspb.BinaryReader): CommunityPoolSpendProposal;
}

export namespace CommunityPoolSpendProposal {
  export type AsObject = {
    title: string,
    description: string,
    recipient: string,
    amountList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export class DelegatorStartingInfo extends jspb.Message {
  getPreviousPeriod(): number;
  setPreviousPeriod(value: number): DelegatorStartingInfo;

  getStake(): string;
  setStake(value: string): DelegatorStartingInfo;

  getHeight(): number;
  setHeight(value: number): DelegatorStartingInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelegatorStartingInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DelegatorStartingInfo): DelegatorStartingInfo.AsObject;
  static serializeBinaryToWriter(message: DelegatorStartingInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelegatorStartingInfo;
  static deserializeBinaryFromReader(message: DelegatorStartingInfo, reader: jspb.BinaryReader): DelegatorStartingInfo;
}

export namespace DelegatorStartingInfo {
  export type AsObject = {
    previousPeriod: number,
    stake: string,
    height: number,
  }
}

export class DelegationDelegatorReward extends jspb.Message {
  getValidatorAddress(): string;
  setValidatorAddress(value: string): DelegationDelegatorReward;

  getRewardList(): Array<cosmos_base_v1beta1_coin_pb.DecCoin>;
  setRewardList(value: Array<cosmos_base_v1beta1_coin_pb.DecCoin>): DelegationDelegatorReward;
  clearRewardList(): DelegationDelegatorReward;
  addReward(value?: cosmos_base_v1beta1_coin_pb.DecCoin, index?: number): cosmos_base_v1beta1_coin_pb.DecCoin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelegationDelegatorReward.AsObject;
  static toObject(includeInstance: boolean, msg: DelegationDelegatorReward): DelegationDelegatorReward.AsObject;
  static serializeBinaryToWriter(message: DelegationDelegatorReward, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelegationDelegatorReward;
  static deserializeBinaryFromReader(message: DelegationDelegatorReward, reader: jspb.BinaryReader): DelegationDelegatorReward;
}

export namespace DelegationDelegatorReward {
  export type AsObject = {
    validatorAddress: string,
    rewardList: Array<cosmos_base_v1beta1_coin_pb.DecCoin.AsObject>,
  }
}

export class StakingRewardInfo extends jspb.Message {
  getCumulativeRewardAmount(): cosmos_base_v1beta1_coin_pb.DecCoin | undefined;
  setCumulativeRewardAmount(value?: cosmos_base_v1beta1_coin_pb.DecCoin): StakingRewardInfo;
  hasCumulativeRewardAmount(): boolean;
  clearCumulativeRewardAmount(): StakingRewardInfo;

  getClaimedRewardAmount(): cosmos_base_v1beta1_coin_pb.DecCoin | undefined;
  setClaimedRewardAmount(value?: cosmos_base_v1beta1_coin_pb.DecCoin): StakingRewardInfo;
  hasClaimedRewardAmount(): boolean;
  clearClaimedRewardAmount(): StakingRewardInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StakingRewardInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StakingRewardInfo): StakingRewardInfo.AsObject;
  static serializeBinaryToWriter(message: StakingRewardInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StakingRewardInfo;
  static deserializeBinaryFromReader(message: StakingRewardInfo, reader: jspb.BinaryReader): StakingRewardInfo;
}

export namespace StakingRewardInfo {
  export type AsObject = {
    cumulativeRewardAmount?: cosmos_base_v1beta1_coin_pb.DecCoin.AsObject,
    claimedRewardAmount?: cosmos_base_v1beta1_coin_pb.DecCoin.AsObject,
  }
}

export class StakingRewardClaimInfo extends jspb.Message {
  getRecipient(): string;
  setRecipient(value: string): StakingRewardClaimInfo;

  getLastClaimTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastClaimTime(value?: google_protobuf_timestamp_pb.Timestamp): StakingRewardClaimInfo;
  hasLastClaimTime(): boolean;
  clearLastClaimTime(): StakingRewardClaimInfo;

  getCumulativeRewardAmount(): cosmos_base_v1beta1_coin_pb.DecCoin | undefined;
  setCumulativeRewardAmount(value?: cosmos_base_v1beta1_coin_pb.DecCoin): StakingRewardClaimInfo;
  hasCumulativeRewardAmount(): boolean;
  clearCumulativeRewardAmount(): StakingRewardClaimInfo;

  getRewardProtoBytes(): Uint8Array | string;
  getRewardProtoBytes_asU8(): Uint8Array;
  getRewardProtoBytes_asB64(): string;
  setRewardProtoBytes(value: Uint8Array | string): StakingRewardClaimInfo;

  getSignaturesList(): Array<sgn_common_v1_common_pb.Signature>;
  setSignaturesList(value: Array<sgn_common_v1_common_pb.Signature>): StakingRewardClaimInfo;
  clearSignaturesList(): StakingRewardClaimInfo;
  addSignatures(value?: sgn_common_v1_common_pb.Signature, index?: number): sgn_common_v1_common_pb.Signature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StakingRewardClaimInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StakingRewardClaimInfo): StakingRewardClaimInfo.AsObject;
  static serializeBinaryToWriter(message: StakingRewardClaimInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StakingRewardClaimInfo;
  static deserializeBinaryFromReader(message: StakingRewardClaimInfo, reader: jspb.BinaryReader): StakingRewardClaimInfo;
}

export namespace StakingRewardClaimInfo {
  export type AsObject = {
    recipient: string,
    lastClaimTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cumulativeRewardAmount?: cosmos_base_v1beta1_coin_pb.DecCoin.AsObject,
    rewardProtoBytes: Uint8Array | string,
    signaturesList: Array<sgn_common_v1_common_pb.Signature.AsObject>,
  }
}

export class CBridgeFeeShareInfo extends jspb.Message {
  getClaimableFeeAmountsList(): Array<cosmos_base_v1beta1_coin_pb.DecCoin>;
  setClaimableFeeAmountsList(value: Array<cosmos_base_v1beta1_coin_pb.DecCoin>): CBridgeFeeShareInfo;
  clearClaimableFeeAmountsList(): CBridgeFeeShareInfo;
  addClaimableFeeAmounts(value?: cosmos_base_v1beta1_coin_pb.DecCoin, index?: number): cosmos_base_v1beta1_coin_pb.DecCoin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CBridgeFeeShareInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CBridgeFeeShareInfo): CBridgeFeeShareInfo.AsObject;
  static serializeBinaryToWriter(message: CBridgeFeeShareInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CBridgeFeeShareInfo;
  static deserializeBinaryFromReader(message: CBridgeFeeShareInfo, reader: jspb.BinaryReader): CBridgeFeeShareInfo;
}

export namespace CBridgeFeeShareInfo {
  export type AsObject = {
    claimableFeeAmountsList: Array<cosmos_base_v1beta1_coin_pb.DecCoin.AsObject>,
  }
}

export class CommunityPoolSpendProposalWithDeposit extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): CommunityPoolSpendProposalWithDeposit;

  getDescription(): string;
  setDescription(value: string): CommunityPoolSpendProposalWithDeposit;

  getRecipient(): string;
  setRecipient(value: string): CommunityPoolSpendProposalWithDeposit;

  getAmount(): string;
  setAmount(value: string): CommunityPoolSpendProposalWithDeposit;

  getDeposit(): string;
  setDeposit(value: string): CommunityPoolSpendProposalWithDeposit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommunityPoolSpendProposalWithDeposit.AsObject;
  static toObject(includeInstance: boolean, msg: CommunityPoolSpendProposalWithDeposit): CommunityPoolSpendProposalWithDeposit.AsObject;
  static serializeBinaryToWriter(message: CommunityPoolSpendProposalWithDeposit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommunityPoolSpendProposalWithDeposit;
  static deserializeBinaryFromReader(message: CommunityPoolSpendProposalWithDeposit, reader: jspb.BinaryReader): CommunityPoolSpendProposalWithDeposit;
}

export namespace CommunityPoolSpendProposalWithDeposit {
  export type AsObject = {
    title: string,
    description: string,
    recipient: string,
    amount: string,
    deposit: string,
  }
}

