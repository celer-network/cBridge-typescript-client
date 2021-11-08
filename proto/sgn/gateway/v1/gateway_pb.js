// source: sgn/gateway/v1/gateway.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var sgn_cbridge_v1_query_pb = require('../../../sgn/cbridge/v1/query_pb.js');
goog.object.extend(proto, sgn_cbridge_v1_query_pb);
var sgn_cbridge_v1_cbridge_pb = require('../../../sgn/cbridge/v1/cbridge_pb.js');
goog.object.extend(proto, sgn_cbridge_v1_cbridge_pb);
var sgn_farming_v1_farming_pb = require('../../../sgn/farming/v1/farming_pb.js');
goog.object.extend(proto, sgn_farming_v1_farming_pb);
var sgn_distribution_v1_distribution_pb = require('../../../sgn/distribution/v1/distribution_pb.js');
goog.object.extend(proto, sgn_distribution_v1_distribution_pb);
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');
goog.object.extend(proto, cosmos_base_v1beta1_coin_pb);
goog.exportSymbol('proto.sgn.gateway.v1.Chain', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.ChainTokenInfo', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.ErrCode', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.ErrMsg', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.EstimateAmtRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.EstimateAmtResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.EstimateWithdrawAmt', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.EstimateWithdrawAmtRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.EstimateWithdrawAmtResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.GetLPInfoListRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.GetLPInfoListResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.GetStakingRewardDetailsRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.GetStakingRewardDetailsResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.GetTokenInfoRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.GetTokenInfoResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.GetTransferConfigsRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.GetTransferConfigsResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.GetTransferStatusRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.GetTransferStatusResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.LPHistory', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.LPHistoryRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.LPHistoryResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.LPInfo', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.LPType', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.MarkLiquidityRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.MarkLiquidityResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.MarkTransferRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.MarkTransferResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.QueryLiquidityStatusRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.QueryLiquidityStatusResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.Reward', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.RewardingDataRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.RewardingDataResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.StakingConfigRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.StakingConfigResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.TokenInfo', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.TransferHistory', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.TransferHistoryRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.TransferHistoryResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.TransferInfo', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.TransferType', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.UnlockFarmingRewardRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.UnlockFarmingRewardResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.UnlockStakingRewardRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.UnlockStakingRewardResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.UpdateChainRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.UpdateChainResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.UpdateTokenRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.UpdateTokenResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.WithdrawInfo', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.WithdrawLiquidityRequest', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.WithdrawLiquidityResponse', null, global);
goog.exportSymbol('proto.sgn.gateway.v1.WithdrawMethodType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sgn.gateway.v1.QueryLiquidityStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.sgn.gateway.v1.QueryLiquidityStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.QueryLiquidityStatusResponse.displayName = 'proto.sgn.gateway.v1.QueryLiquidityStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.Chain = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.Chain, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.Chain.displayName = 'proto.sgn.gateway.v1.Chain';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.ChainTokenInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sgn.gateway.v1.ChainTokenInfo.repeatedFields_, null);
};
goog.inherits(proto.sgn.gateway.v1.ChainTokenInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.ChainTokenInfo.displayName = 'proto.sgn.gateway.v1.ChainTokenInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.TokenInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.TokenInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.TokenInfo.displayName = 'proto.sgn.gateway.v1.TokenInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.TransferInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.TransferInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.TransferInfo.displayName = 'proto.sgn.gateway.v1.TransferInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.GetTransferStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.GetTransferStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.GetTransferStatusRequest.displayName = 'proto.sgn.gateway.v1.GetTransferStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.GetTransferStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sgn.gateway.v1.GetTransferStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.sgn.gateway.v1.GetTransferStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.GetTransferStatusResponse.displayName = 'proto.sgn.gateway.v1.GetTransferStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.GetTransferConfigsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.GetTransferConfigsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.GetTransferConfigsRequest.displayName = 'proto.sgn.gateway.v1.GetTransferConfigsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.GetTransferConfigsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sgn.gateway.v1.GetTransferConfigsResponse.repeatedFields_, null);
};
goog.inherits(proto.sgn.gateway.v1.GetTransferConfigsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.GetTransferConfigsResponse.displayName = 'proto.sgn.gateway.v1.GetTransferConfigsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.GetTokenInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.GetTokenInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.GetTokenInfoRequest.displayName = 'proto.sgn.gateway.v1.GetTokenInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.GetTokenInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.GetTokenInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.GetTokenInfoResponse.displayName = 'proto.sgn.gateway.v1.GetTokenInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.EstimateAmtRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.EstimateAmtRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.EstimateAmtRequest.displayName = 'proto.sgn.gateway.v1.EstimateAmtRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.EstimateAmtResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.EstimateAmtResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.EstimateAmtResponse.displayName = 'proto.sgn.gateway.v1.EstimateAmtResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.WithdrawInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.WithdrawInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.WithdrawInfo.displayName = 'proto.sgn.gateway.v1.WithdrawInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.repeatedFields_, null);
};
goog.inherits(proto.sgn.gateway.v1.EstimateWithdrawAmtRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.displayName = 'proto.sgn.gateway.v1.EstimateWithdrawAmtRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.EstimateWithdrawAmtResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.EstimateWithdrawAmtResponse.displayName = 'proto.sgn.gateway.v1.EstimateWithdrawAmtResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.EstimateWithdrawAmt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.EstimateWithdrawAmt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.EstimateWithdrawAmt.displayName = 'proto.sgn.gateway.v1.EstimateWithdrawAmt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.MarkTransferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.MarkTransferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.MarkTransferRequest.displayName = 'proto.sgn.gateway.v1.MarkTransferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.MarkTransferResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.MarkTransferResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.MarkTransferResponse.displayName = 'proto.sgn.gateway.v1.MarkTransferResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.GetLPInfoListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.GetLPInfoListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.GetLPInfoListRequest.displayName = 'proto.sgn.gateway.v1.GetLPInfoListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.LPInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.LPInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.LPInfo.displayName = 'proto.sgn.gateway.v1.LPInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.GetLPInfoListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sgn.gateway.v1.GetLPInfoListResponse.repeatedFields_, null);
};
goog.inherits(proto.sgn.gateway.v1.GetLPInfoListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.GetLPInfoListResponse.displayName = 'proto.sgn.gateway.v1.GetLPInfoListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.WithdrawLiquidityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.WithdrawLiquidityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.WithdrawLiquidityRequest.displayName = 'proto.sgn.gateway.v1.WithdrawLiquidityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.WithdrawLiquidityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.WithdrawLiquidityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.WithdrawLiquidityResponse.displayName = 'proto.sgn.gateway.v1.WithdrawLiquidityResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.MarkLiquidityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.MarkLiquidityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.MarkLiquidityRequest.displayName = 'proto.sgn.gateway.v1.MarkLiquidityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.MarkLiquidityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.MarkLiquidityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.MarkLiquidityResponse.displayName = 'proto.sgn.gateway.v1.MarkLiquidityResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.UnlockFarmingRewardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.UnlockFarmingRewardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.UnlockFarmingRewardRequest.displayName = 'proto.sgn.gateway.v1.UnlockFarmingRewardRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.UnlockFarmingRewardResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.UnlockFarmingRewardResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.UnlockFarmingRewardResponse.displayName = 'proto.sgn.gateway.v1.UnlockFarmingRewardResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest.displayName = 'proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse.repeatedFields_, null);
};
goog.inherits(proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse.displayName = 'proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.QueryLiquidityStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.QueryLiquidityStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.QueryLiquidityStatusRequest.displayName = 'proto.sgn.gateway.v1.QueryLiquidityStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.TransferHistory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.TransferHistory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.TransferHistory.displayName = 'proto.sgn.gateway.v1.TransferHistory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.LPHistory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.LPHistory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.LPHistory.displayName = 'proto.sgn.gateway.v1.LPHistory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.TransferHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.TransferHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.TransferHistoryRequest.displayName = 'proto.sgn.gateway.v1.TransferHistoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.TransferHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sgn.gateway.v1.TransferHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.sgn.gateway.v1.TransferHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.TransferHistoryResponse.displayName = 'proto.sgn.gateway.v1.TransferHistoryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.LPHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.LPHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.LPHistoryRequest.displayName = 'proto.sgn.gateway.v1.LPHistoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.LPHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sgn.gateway.v1.LPHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.sgn.gateway.v1.LPHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.LPHistoryResponse.displayName = 'proto.sgn.gateway.v1.LPHistoryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.RewardingDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.RewardingDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.RewardingDataRequest.displayName = 'proto.sgn.gateway.v1.RewardingDataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.Reward = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.Reward, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.Reward.displayName = 'proto.sgn.gateway.v1.Reward';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.RewardingDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sgn.gateway.v1.RewardingDataResponse.repeatedFields_, null);
};
goog.inherits(proto.sgn.gateway.v1.RewardingDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.RewardingDataResponse.displayName = 'proto.sgn.gateway.v1.RewardingDataResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.UpdateChainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.UpdateChainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.UpdateChainRequest.displayName = 'proto.sgn.gateway.v1.UpdateChainRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.UpdateChainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.UpdateChainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.UpdateChainResponse.displayName = 'proto.sgn.gateway.v1.UpdateChainResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.UpdateTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.UpdateTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.UpdateTokenRequest.displayName = 'proto.sgn.gateway.v1.UpdateTokenRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.UpdateTokenResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.UpdateTokenResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.UpdateTokenResponse.displayName = 'proto.sgn.gateway.v1.UpdateTokenResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.StakingConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.StakingConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.StakingConfigRequest.displayName = 'proto.sgn.gateway.v1.StakingConfigRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.StakingConfigResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.StakingConfigResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.StakingConfigResponse.displayName = 'proto.sgn.gateway.v1.StakingConfigResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.UnlockStakingRewardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.UnlockStakingRewardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.UnlockStakingRewardRequest.displayName = 'proto.sgn.gateway.v1.UnlockStakingRewardRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.UnlockStakingRewardResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.UnlockStakingRewardResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.UnlockStakingRewardResponse.displayName = 'proto.sgn.gateway.v1.UnlockStakingRewardResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.GetStakingRewardDetailsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.GetStakingRewardDetailsRequest.displayName = 'proto.sgn.gateway.v1.GetStakingRewardDetailsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.GetStakingRewardDetailsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.GetStakingRewardDetailsResponse.displayName = 'proto.sgn.gateway.v1.GetStakingRewardDetailsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest.repeatedFields_, null);
};
goog.inherits(proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest.displayName = 'proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse.displayName = 'proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sgn.gateway.v1.ErrMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sgn.gateway.v1.ErrMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sgn.gateway.v1.ErrMsg.displayName = 'proto.sgn.gateway.v1.ErrMsg';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.repeatedFields_ = [4,5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.QueryLiquidityStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.QueryLiquidityStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.sgn.gateway.v1.ErrMsg.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    wdOnchain: msg.getWdOnchain_asB64(),
    sortedSigsList: msg.getSortedSigsList_asB64(),
    signersList: msg.getSignersList_asB64(),
    powersList: msg.getPowersList_asB64(),
    blockTxLink: jspb.Message.getFieldWithDefault(msg, 7, ""),
    blockDelay: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusResponse}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.QueryLiquidityStatusResponse;
  return proto.sgn.gateway.v1.QueryLiquidityStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.QueryLiquidityStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusResponse}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.ErrMsg;
      reader.readMessage(value,proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = /** @type {!proto.sgn.cbridge.v1.LPHistoryStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setWdOnchain(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addSortedSigs(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addSigners(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addPowers(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockTxLink(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlockDelay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.QueryLiquidityStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.QueryLiquidityStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getWdOnchain_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getSortedSigsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      4,
      f
    );
  }
  f = message.getSignersList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      5,
      f
    );
  }
  f = message.getPowersList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      6,
      f
    );
  }
  f = message.getBlockTxLink();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getBlockDelay();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.getErr = function() {
  return /** @type{?proto.sgn.gateway.v1.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.ErrMsg, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.ErrMsg|undefined} value
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusResponse} returns this
*/
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusResponse} returns this
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional sgn.cbridge.v1.LPHistoryStatus status = 2;
 * @return {!proto.sgn.cbridge.v1.LPHistoryStatus}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.getStatus = function() {
  return /** @type {!proto.sgn.cbridge.v1.LPHistoryStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.sgn.cbridge.v1.LPHistoryStatus} value
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusResponse} returns this
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bytes wd_onchain = 3;
 * @return {!(string|Uint8Array)}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.getWdOnchain = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes wd_onchain = 3;
 * This is a type-conversion wrapper around `getWdOnchain()`
 * @return {string}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.getWdOnchain_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getWdOnchain()));
};


/**
 * optional bytes wd_onchain = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getWdOnchain()`
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.getWdOnchain_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getWdOnchain()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusResponse} returns this
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.setWdOnchain = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * repeated bytes sorted_sigs = 4;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.getSortedSigsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * repeated bytes sorted_sigs = 4;
 * This is a type-conversion wrapper around `getSortedSigsList()`
 * @return {!Array<string>}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.getSortedSigsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getSortedSigsList()));
};


/**
 * repeated bytes sorted_sigs = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSortedSigsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.getSortedSigsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getSortedSigsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusResponse} returns this
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.setSortedSigsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusResponse} returns this
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.addSortedSigs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusResponse} returns this
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.clearSortedSigsList = function() {
  return this.setSortedSigsList([]);
};


/**
 * repeated bytes signers = 5;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.getSignersList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * repeated bytes signers = 5;
 * This is a type-conversion wrapper around `getSignersList()`
 * @return {!Array<string>}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.getSignersList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getSignersList()));
};


/**
 * repeated bytes signers = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignersList()`
 * @return {!Array<!Uint8Array>}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.getSignersList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getSignersList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusResponse} returns this
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusResponse} returns this
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusResponse} returns this
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};


/**
 * repeated bytes powers = 6;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.getPowersList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * repeated bytes powers = 6;
 * This is a type-conversion wrapper around `getPowersList()`
 * @return {!Array<string>}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.getPowersList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getPowersList()));
};


/**
 * repeated bytes powers = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPowersList()`
 * @return {!Array<!Uint8Array>}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.getPowersList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getPowersList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusResponse} returns this
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.setPowersList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusResponse} returns this
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.addPowers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusResponse} returns this
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.clearPowersList = function() {
  return this.setPowersList([]);
};


/**
 * optional string block_tx_link = 7;
 * @return {string}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.getBlockTxLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusResponse} returns this
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.setBlockTxLink = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint32 block_delay = 8;
 * @return {number}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.getBlockDelay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusResponse} returns this
 */
proto.sgn.gateway.v1.QueryLiquidityStatusResponse.prototype.setBlockDelay = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.Chain.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.Chain.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.Chain} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.Chain.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 3, ""),
    blockDelay: jspb.Message.getFieldWithDefault(msg, 4, 0),
    gasTokenSymbol: jspb.Message.getFieldWithDefault(msg, 5, ""),
    exploreUrl: jspb.Message.getFieldWithDefault(msg, 6, ""),
    rpcUrl: jspb.Message.getFieldWithDefault(msg, 7, ""),
    contractAddr: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.Chain}
 */
proto.sgn.gateway.v1.Chain.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.Chain;
  return proto.sgn.gateway.v1.Chain.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.Chain} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.Chain}
 */
proto.sgn.gateway.v1.Chain.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlockDelay(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGasTokenSymbol(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setExploreUrl(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRpcUrl(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractAddr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.Chain.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.Chain.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.Chain} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.Chain.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBlockDelay();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getGasTokenSymbol();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getExploreUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRpcUrl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getContractAddr();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.sgn.gateway.v1.Chain.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.Chain} returns this
 */
proto.sgn.gateway.v1.Chain.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.sgn.gateway.v1.Chain.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.Chain} returns this
 */
proto.sgn.gateway.v1.Chain.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string icon = 3;
 * @return {string}
 */
proto.sgn.gateway.v1.Chain.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.Chain} returns this
 */
proto.sgn.gateway.v1.Chain.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 block_delay = 4;
 * @return {number}
 */
proto.sgn.gateway.v1.Chain.prototype.getBlockDelay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.Chain} returns this
 */
proto.sgn.gateway.v1.Chain.prototype.setBlockDelay = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string gas_token_symbol = 5;
 * @return {string}
 */
proto.sgn.gateway.v1.Chain.prototype.getGasTokenSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.Chain} returns this
 */
proto.sgn.gateway.v1.Chain.prototype.setGasTokenSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string explore_url = 6;
 * @return {string}
 */
proto.sgn.gateway.v1.Chain.prototype.getExploreUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.Chain} returns this
 */
proto.sgn.gateway.v1.Chain.prototype.setExploreUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string rpc_url = 7;
 * @return {string}
 */
proto.sgn.gateway.v1.Chain.prototype.getRpcUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.Chain} returns this
 */
proto.sgn.gateway.v1.Chain.prototype.setRpcUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string contract_addr = 8;
 * @return {string}
 */
proto.sgn.gateway.v1.Chain.prototype.getContractAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.Chain} returns this
 */
proto.sgn.gateway.v1.Chain.prototype.setContractAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sgn.gateway.v1.ChainTokenInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.ChainTokenInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.ChainTokenInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.ChainTokenInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.ChainTokenInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokenList: jspb.Message.toObjectList(msg.getTokenList(),
    proto.sgn.gateway.v1.TokenInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.ChainTokenInfo}
 */
proto.sgn.gateway.v1.ChainTokenInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.ChainTokenInfo;
  return proto.sgn.gateway.v1.ChainTokenInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.ChainTokenInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.ChainTokenInfo}
 */
proto.sgn.gateway.v1.ChainTokenInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.TokenInfo;
      reader.readMessage(value,proto.sgn.gateway.v1.TokenInfo.deserializeBinaryFromReader);
      msg.addToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.ChainTokenInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.ChainTokenInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.ChainTokenInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.ChainTokenInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sgn.gateway.v1.TokenInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TokenInfo token = 1;
 * @return {!Array<!proto.sgn.gateway.v1.TokenInfo>}
 */
proto.sgn.gateway.v1.ChainTokenInfo.prototype.getTokenList = function() {
  return /** @type{!Array<!proto.sgn.gateway.v1.TokenInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sgn.gateway.v1.TokenInfo, 1));
};


/**
 * @param {!Array<!proto.sgn.gateway.v1.TokenInfo>} value
 * @return {!proto.sgn.gateway.v1.ChainTokenInfo} returns this
*/
proto.sgn.gateway.v1.ChainTokenInfo.prototype.setTokenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sgn.gateway.v1.TokenInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sgn.gateway.v1.TokenInfo}
 */
proto.sgn.gateway.v1.ChainTokenInfo.prototype.addToken = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sgn.gateway.v1.TokenInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.gateway.v1.ChainTokenInfo} returns this
 */
proto.sgn.gateway.v1.ChainTokenInfo.prototype.clearTokenList = function() {
  return this.setTokenList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.TokenInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.TokenInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.TokenInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.TokenInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: (f = msg.getToken()) && sgn_cbridge_v1_query_pb.Token.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.TokenInfo}
 */
proto.sgn.gateway.v1.TokenInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.TokenInfo;
  return proto.sgn.gateway.v1.TokenInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.TokenInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.TokenInfo}
 */
proto.sgn.gateway.v1.TokenInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new sgn_cbridge_v1_query_pb.Token;
      reader.readMessage(value,sgn_cbridge_v1_query_pb.Token.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.TokenInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.TokenInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.TokenInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.TokenInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      sgn_cbridge_v1_query_pb.Token.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional sgn.cbridge.v1.Token token = 1;
 * @return {?proto.sgn.cbridge.v1.Token}
 */
proto.sgn.gateway.v1.TokenInfo.prototype.getToken = function() {
  return /** @type{?proto.sgn.cbridge.v1.Token} */ (
    jspb.Message.getWrapperField(this, sgn_cbridge_v1_query_pb.Token, 1));
};


/**
 * @param {?proto.sgn.cbridge.v1.Token|undefined} value
 * @return {!proto.sgn.gateway.v1.TokenInfo} returns this
*/
proto.sgn.gateway.v1.TokenInfo.prototype.setToken = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.TokenInfo} returns this
 */
proto.sgn.gateway.v1.TokenInfo.prototype.clearToken = function() {
  return this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.TokenInfo.prototype.hasToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.sgn.gateway.v1.TokenInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.TokenInfo} returns this
 */
proto.sgn.gateway.v1.TokenInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string icon = 3;
 * @return {string}
 */
proto.sgn.gateway.v1.TokenInfo.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.TokenInfo} returns this
 */
proto.sgn.gateway.v1.TokenInfo.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.TransferInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.TransferInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.TransferInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.TransferInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    chain: (f = msg.getChain()) && proto.sgn.gateway.v1.Chain.toObject(includeInstance, f),
    token: (f = msg.getToken()) && sgn_cbridge_v1_query_pb.Token.toObject(includeInstance, f),
    amount: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.TransferInfo}
 */
proto.sgn.gateway.v1.TransferInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.TransferInfo;
  return proto.sgn.gateway.v1.TransferInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.TransferInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.TransferInfo}
 */
proto.sgn.gateway.v1.TransferInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.Chain;
      reader.readMessage(value,proto.sgn.gateway.v1.Chain.deserializeBinaryFromReader);
      msg.setChain(value);
      break;
    case 2:
      var value = new sgn_cbridge_v1_query_pb.Token;
      reader.readMessage(value,sgn_cbridge_v1_query_pb.Token.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.TransferInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.TransferInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.TransferInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.TransferInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChain();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.Chain.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sgn_cbridge_v1_query_pb.Token.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Chain chain = 1;
 * @return {?proto.sgn.gateway.v1.Chain}
 */
proto.sgn.gateway.v1.TransferInfo.prototype.getChain = function() {
  return /** @type{?proto.sgn.gateway.v1.Chain} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.Chain, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.Chain|undefined} value
 * @return {!proto.sgn.gateway.v1.TransferInfo} returns this
*/
proto.sgn.gateway.v1.TransferInfo.prototype.setChain = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.TransferInfo} returns this
 */
proto.sgn.gateway.v1.TransferInfo.prototype.clearChain = function() {
  return this.setChain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.TransferInfo.prototype.hasChain = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional sgn.cbridge.v1.Token token = 2;
 * @return {?proto.sgn.cbridge.v1.Token}
 */
proto.sgn.gateway.v1.TransferInfo.prototype.getToken = function() {
  return /** @type{?proto.sgn.cbridge.v1.Token} */ (
    jspb.Message.getWrapperField(this, sgn_cbridge_v1_query_pb.Token, 2));
};


/**
 * @param {?proto.sgn.cbridge.v1.Token|undefined} value
 * @return {!proto.sgn.gateway.v1.TransferInfo} returns this
*/
proto.sgn.gateway.v1.TransferInfo.prototype.setToken = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.TransferInfo} returns this
 */
proto.sgn.gateway.v1.TransferInfo.prototype.clearToken = function() {
  return this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.TransferInfo.prototype.hasToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string amount = 3;
 * @return {string}
 */
proto.sgn.gateway.v1.TransferInfo.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.TransferInfo} returns this
 */
proto.sgn.gateway.v1.TransferInfo.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.GetTransferStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.GetTransferStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.GetTransferStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetTransferStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.GetTransferStatusRequest}
 */
proto.sgn.gateway.v1.GetTransferStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.GetTransferStatusRequest;
  return proto.sgn.gateway.v1.GetTransferStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.GetTransferStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.GetTransferStatusRequest}
 */
proto.sgn.gateway.v1.GetTransferStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.GetTransferStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.GetTransferStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.GetTransferStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetTransferStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransferId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string transfer_id = 1;
 * @return {string}
 */
proto.sgn.gateway.v1.GetTransferStatusRequest.prototype.getTransferId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.GetTransferStatusRequest} returns this
 */
proto.sgn.gateway.v1.GetTransferStatusRequest.prototype.setTransferId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.repeatedFields_ = [4,5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.GetTransferStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.GetTransferStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.sgn.gateway.v1.ErrMsg.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    wdOnchain: msg.getWdOnchain_asB64(),
    sortedSigsList: msg.getSortedSigsList_asB64(),
    signersList: msg.getSignersList_asB64(),
    powersList: msg.getPowersList_asB64(),
    refundReason: jspb.Message.getFieldWithDefault(msg, 7, 0),
    blockDelay: jspb.Message.getFieldWithDefault(msg, 8, 0),
    srcBlockTxLink: jspb.Message.getFieldWithDefault(msg, 9, ""),
    dstBlockTxLink: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.GetTransferStatusResponse}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.GetTransferStatusResponse;
  return proto.sgn.gateway.v1.GetTransferStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.GetTransferStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.GetTransferStatusResponse}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.ErrMsg;
      reader.readMessage(value,proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = /** @type {!proto.sgn.cbridge.v1.TransferHistoryStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setWdOnchain(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addSortedSigs(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addSigners(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addPowers(value);
      break;
    case 7:
      var value = /** @type {!proto.sgn.cbridge.v1.XferStatus} */ (reader.readEnum());
      msg.setRefundReason(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBlockDelay(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcBlockTxLink(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDstBlockTxLink(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.GetTransferStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.GetTransferStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getWdOnchain_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getSortedSigsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      4,
      f
    );
  }
  f = message.getSignersList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      5,
      f
    );
  }
  f = message.getPowersList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      6,
      f
    );
  }
  f = message.getRefundReason();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getBlockDelay();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getSrcBlockTxLink();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDstBlockTxLink();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.getErr = function() {
  return /** @type{?proto.sgn.gateway.v1.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.ErrMsg, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.ErrMsg|undefined} value
 * @return {!proto.sgn.gateway.v1.GetTransferStatusResponse} returns this
*/
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.GetTransferStatusResponse} returns this
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional sgn.cbridge.v1.TransferHistoryStatus status = 2;
 * @return {!proto.sgn.cbridge.v1.TransferHistoryStatus}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.getStatus = function() {
  return /** @type {!proto.sgn.cbridge.v1.TransferHistoryStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.sgn.cbridge.v1.TransferHistoryStatus} value
 * @return {!proto.sgn.gateway.v1.GetTransferStatusResponse} returns this
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bytes wd_onchain = 3;
 * @return {!(string|Uint8Array)}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.getWdOnchain = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes wd_onchain = 3;
 * This is a type-conversion wrapper around `getWdOnchain()`
 * @return {string}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.getWdOnchain_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getWdOnchain()));
};


/**
 * optional bytes wd_onchain = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getWdOnchain()`
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.getWdOnchain_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getWdOnchain()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sgn.gateway.v1.GetTransferStatusResponse} returns this
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.setWdOnchain = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * repeated bytes sorted_sigs = 4;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.getSortedSigsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * repeated bytes sorted_sigs = 4;
 * This is a type-conversion wrapper around `getSortedSigsList()`
 * @return {!Array<string>}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.getSortedSigsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getSortedSigsList()));
};


/**
 * repeated bytes sorted_sigs = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSortedSigsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.getSortedSigsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getSortedSigsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.sgn.gateway.v1.GetTransferStatusResponse} returns this
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.setSortedSigsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.sgn.gateway.v1.GetTransferStatusResponse} returns this
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.addSortedSigs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.gateway.v1.GetTransferStatusResponse} returns this
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.clearSortedSigsList = function() {
  return this.setSortedSigsList([]);
};


/**
 * repeated bytes signers = 5;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.getSignersList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * repeated bytes signers = 5;
 * This is a type-conversion wrapper around `getSignersList()`
 * @return {!Array<string>}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.getSignersList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getSignersList()));
};


/**
 * repeated bytes signers = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignersList()`
 * @return {!Array<!Uint8Array>}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.getSignersList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getSignersList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.sgn.gateway.v1.GetTransferStatusResponse} returns this
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.setSignersList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.sgn.gateway.v1.GetTransferStatusResponse} returns this
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.addSigners = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.gateway.v1.GetTransferStatusResponse} returns this
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.clearSignersList = function() {
  return this.setSignersList([]);
};


/**
 * repeated bytes powers = 6;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.getPowersList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * repeated bytes powers = 6;
 * This is a type-conversion wrapper around `getPowersList()`
 * @return {!Array<string>}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.getPowersList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getPowersList()));
};


/**
 * repeated bytes powers = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPowersList()`
 * @return {!Array<!Uint8Array>}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.getPowersList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getPowersList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.sgn.gateway.v1.GetTransferStatusResponse} returns this
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.setPowersList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.sgn.gateway.v1.GetTransferStatusResponse} returns this
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.addPowers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.gateway.v1.GetTransferStatusResponse} returns this
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.clearPowersList = function() {
  return this.setPowersList([]);
};


/**
 * optional sgn.cbridge.v1.XferStatus refund_reason = 7;
 * @return {!proto.sgn.cbridge.v1.XferStatus}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.getRefundReason = function() {
  return /** @type {!proto.sgn.cbridge.v1.XferStatus} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.sgn.cbridge.v1.XferStatus} value
 * @return {!proto.sgn.gateway.v1.GetTransferStatusResponse} returns this
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.setRefundReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional uint32 block_delay = 8;
 * @return {number}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.getBlockDelay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.GetTransferStatusResponse} returns this
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.setBlockDelay = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string src_block_tx_link = 9;
 * @return {string}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.getSrcBlockTxLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.GetTransferStatusResponse} returns this
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.setSrcBlockTxLink = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string dst_block_tx_link = 10;
 * @return {string}
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.getDstBlockTxLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.GetTransferStatusResponse} returns this
 */
proto.sgn.gateway.v1.GetTransferStatusResponse.prototype.setDstBlockTxLink = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.GetTransferConfigsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.GetTransferConfigsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.GetTransferConfigsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetTransferConfigsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.GetTransferConfigsRequest}
 */
proto.sgn.gateway.v1.GetTransferConfigsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.GetTransferConfigsRequest;
  return proto.sgn.gateway.v1.GetTransferConfigsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.GetTransferConfigsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.GetTransferConfigsRequest}
 */
proto.sgn.gateway.v1.GetTransferConfigsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.GetTransferConfigsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.GetTransferConfigsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.GetTransferConfigsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetTransferConfigsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sgn.gateway.v1.GetTransferConfigsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.GetTransferConfigsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.GetTransferConfigsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.GetTransferConfigsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetTransferConfigsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.sgn.gateway.v1.ErrMsg.toObject(includeInstance, f),
    chainsList: jspb.Message.toObjectList(msg.getChainsList(),
    proto.sgn.gateway.v1.Chain.toObject, includeInstance),
    chainTokenMap: (f = msg.getChainTokenMap()) ? f.toObject(includeInstance, proto.sgn.gateway.v1.ChainTokenInfo.toObject) : [],
    farmingRewardContractAddr: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.GetTransferConfigsResponse}
 */
proto.sgn.gateway.v1.GetTransferConfigsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.GetTransferConfigsResponse;
  return proto.sgn.gateway.v1.GetTransferConfigsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.GetTransferConfigsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.GetTransferConfigsResponse}
 */
proto.sgn.gateway.v1.GetTransferConfigsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.ErrMsg;
      reader.readMessage(value,proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = new proto.sgn.gateway.v1.Chain;
      reader.readMessage(value,proto.sgn.gateway.v1.Chain.deserializeBinaryFromReader);
      msg.addChains(value);
      break;
    case 3:
      var value = msg.getChainTokenMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint32, jspb.BinaryReader.prototype.readMessage, proto.sgn.gateway.v1.ChainTokenInfo.deserializeBinaryFromReader, 0, new proto.sgn.gateway.v1.ChainTokenInfo());
         });
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFarmingRewardContractAddr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.GetTransferConfigsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.GetTransferConfigsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.GetTransferConfigsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetTransferConfigsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getChainsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sgn.gateway.v1.Chain.serializeBinaryToWriter
    );
  }
  f = message.getChainTokenMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeUint32, jspb.BinaryWriter.prototype.writeMessage, proto.sgn.gateway.v1.ChainTokenInfo.serializeBinaryToWriter);
  }
  f = message.getFarmingRewardContractAddr();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.GetTransferConfigsResponse.prototype.getErr = function() {
  return /** @type{?proto.sgn.gateway.v1.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.ErrMsg, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.ErrMsg|undefined} value
 * @return {!proto.sgn.gateway.v1.GetTransferConfigsResponse} returns this
*/
proto.sgn.gateway.v1.GetTransferConfigsResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.GetTransferConfigsResponse} returns this
 */
proto.sgn.gateway.v1.GetTransferConfigsResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.GetTransferConfigsResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Chain chains = 2;
 * @return {!Array<!proto.sgn.gateway.v1.Chain>}
 */
proto.sgn.gateway.v1.GetTransferConfigsResponse.prototype.getChainsList = function() {
  return /** @type{!Array<!proto.sgn.gateway.v1.Chain>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sgn.gateway.v1.Chain, 2));
};


/**
 * @param {!Array<!proto.sgn.gateway.v1.Chain>} value
 * @return {!proto.sgn.gateway.v1.GetTransferConfigsResponse} returns this
*/
proto.sgn.gateway.v1.GetTransferConfigsResponse.prototype.setChainsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sgn.gateway.v1.Chain=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sgn.gateway.v1.Chain}
 */
proto.sgn.gateway.v1.GetTransferConfigsResponse.prototype.addChains = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sgn.gateway.v1.Chain, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.gateway.v1.GetTransferConfigsResponse} returns this
 */
proto.sgn.gateway.v1.GetTransferConfigsResponse.prototype.clearChainsList = function() {
  return this.setChainsList([]);
};


/**
 * map<uint32, ChainTokenInfo> chain_token = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.sgn.gateway.v1.ChainTokenInfo>}
 */
proto.sgn.gateway.v1.GetTransferConfigsResponse.prototype.getChainTokenMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.sgn.gateway.v1.ChainTokenInfo>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.sgn.gateway.v1.ChainTokenInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sgn.gateway.v1.GetTransferConfigsResponse} returns this
 */
proto.sgn.gateway.v1.GetTransferConfigsResponse.prototype.clearChainTokenMap = function() {
  this.getChainTokenMap().clear();
  return this;};


/**
 * optional string farming_reward_contract_addr = 4;
 * @return {string}
 */
proto.sgn.gateway.v1.GetTransferConfigsResponse.prototype.getFarmingRewardContractAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.GetTransferConfigsResponse} returns this
 */
proto.sgn.gateway.v1.GetTransferConfigsResponse.prototype.setFarmingRewardContractAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.GetTokenInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.GetTokenInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.GetTokenInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetTokenInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tokenSymbol: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.GetTokenInfoRequest}
 */
proto.sgn.gateway.v1.GetTokenInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.GetTokenInfoRequest;
  return proto.sgn.gateway.v1.GetTokenInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.GetTokenInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.GetTokenInfoRequest}
 */
proto.sgn.gateway.v1.GetTokenInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChainId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenSymbol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.GetTokenInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.GetTokenInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.GetTokenInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetTokenInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTokenSymbol();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 chain_id = 1;
 * @return {number}
 */
proto.sgn.gateway.v1.GetTokenInfoRequest.prototype.getChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.GetTokenInfoRequest} returns this
 */
proto.sgn.gateway.v1.GetTokenInfoRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token_symbol = 2;
 * @return {string}
 */
proto.sgn.gateway.v1.GetTokenInfoRequest.prototype.getTokenSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.GetTokenInfoRequest} returns this
 */
proto.sgn.gateway.v1.GetTokenInfoRequest.prototype.setTokenSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.GetTokenInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.GetTokenInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.GetTokenInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetTokenInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.sgn.gateway.v1.ErrMsg.toObject(includeInstance, f),
    tokenInfo: (f = msg.getTokenInfo()) && proto.sgn.gateway.v1.TokenInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.GetTokenInfoResponse}
 */
proto.sgn.gateway.v1.GetTokenInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.GetTokenInfoResponse;
  return proto.sgn.gateway.v1.GetTokenInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.GetTokenInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.GetTokenInfoResponse}
 */
proto.sgn.gateway.v1.GetTokenInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.ErrMsg;
      reader.readMessage(value,proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = new proto.sgn.gateway.v1.TokenInfo;
      reader.readMessage(value,proto.sgn.gateway.v1.TokenInfo.deserializeBinaryFromReader);
      msg.setTokenInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.GetTokenInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.GetTokenInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.GetTokenInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetTokenInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getTokenInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sgn.gateway.v1.TokenInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.GetTokenInfoResponse.prototype.getErr = function() {
  return /** @type{?proto.sgn.gateway.v1.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.ErrMsg, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.ErrMsg|undefined} value
 * @return {!proto.sgn.gateway.v1.GetTokenInfoResponse} returns this
*/
proto.sgn.gateway.v1.GetTokenInfoResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.GetTokenInfoResponse} returns this
 */
proto.sgn.gateway.v1.GetTokenInfoResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.GetTokenInfoResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TokenInfo token_info = 2;
 * @return {?proto.sgn.gateway.v1.TokenInfo}
 */
proto.sgn.gateway.v1.GetTokenInfoResponse.prototype.getTokenInfo = function() {
  return /** @type{?proto.sgn.gateway.v1.TokenInfo} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.TokenInfo, 2));
};


/**
 * @param {?proto.sgn.gateway.v1.TokenInfo|undefined} value
 * @return {!proto.sgn.gateway.v1.GetTokenInfoResponse} returns this
*/
proto.sgn.gateway.v1.GetTokenInfoResponse.prototype.setTokenInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.GetTokenInfoResponse} returns this
 */
proto.sgn.gateway.v1.GetTokenInfoResponse.prototype.clearTokenInfo = function() {
  return this.setTokenInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.GetTokenInfoResponse.prototype.hasTokenInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.EstimateAmtRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.EstimateAmtRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.EstimateAmtRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.EstimateAmtRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    srcChainId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dstChainId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tokenSymbol: jspb.Message.getFieldWithDefault(msg, 3, ""),
    amt: jspb.Message.getFieldWithDefault(msg, 4, ""),
    usrAddr: jspb.Message.getFieldWithDefault(msg, 5, ""),
    slippageTolerance: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.EstimateAmtRequest}
 */
proto.sgn.gateway.v1.EstimateAmtRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.EstimateAmtRequest;
  return proto.sgn.gateway.v1.EstimateAmtRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.EstimateAmtRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.EstimateAmtRequest}
 */
proto.sgn.gateway.v1.EstimateAmtRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSrcChainId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDstChainId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenSymbol(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmt(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsrAddr(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSlippageTolerance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.EstimateAmtRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.EstimateAmtRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.EstimateAmtRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.EstimateAmtRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSrcChainId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDstChainId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getTokenSymbol();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAmt();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUsrAddr();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSlippageTolerance();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional uint32 src_chain_id = 1;
 * @return {number}
 */
proto.sgn.gateway.v1.EstimateAmtRequest.prototype.getSrcChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.EstimateAmtRequest} returns this
 */
proto.sgn.gateway.v1.EstimateAmtRequest.prototype.setSrcChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 dst_chain_id = 2;
 * @return {number}
 */
proto.sgn.gateway.v1.EstimateAmtRequest.prototype.getDstChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.EstimateAmtRequest} returns this
 */
proto.sgn.gateway.v1.EstimateAmtRequest.prototype.setDstChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string token_symbol = 3;
 * @return {string}
 */
proto.sgn.gateway.v1.EstimateAmtRequest.prototype.getTokenSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.EstimateAmtRequest} returns this
 */
proto.sgn.gateway.v1.EstimateAmtRequest.prototype.setTokenSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string amt = 4;
 * @return {string}
 */
proto.sgn.gateway.v1.EstimateAmtRequest.prototype.getAmt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.EstimateAmtRequest} returns this
 */
proto.sgn.gateway.v1.EstimateAmtRequest.prototype.setAmt = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string usr_addr = 5;
 * @return {string}
 */
proto.sgn.gateway.v1.EstimateAmtRequest.prototype.getUsrAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.EstimateAmtRequest} returns this
 */
proto.sgn.gateway.v1.EstimateAmtRequest.prototype.setUsrAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 slippage_tolerance = 6;
 * @return {number}
 */
proto.sgn.gateway.v1.EstimateAmtRequest.prototype.getSlippageTolerance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.EstimateAmtRequest} returns this
 */
proto.sgn.gateway.v1.EstimateAmtRequest.prototype.setSlippageTolerance = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.EstimateAmtResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.EstimateAmtResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.EstimateAmtResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.EstimateAmtResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.sgn.gateway.v1.ErrMsg.toObject(includeInstance, f),
    eqValueTokenAmt: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bridgeRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    percFee: jspb.Message.getFieldWithDefault(msg, 4, ""),
    baseFee: jspb.Message.getFieldWithDefault(msg, 7, ""),
    slippageTolerance: jspb.Message.getFieldWithDefault(msg, 5, 0),
    maxSlippage: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.EstimateAmtResponse}
 */
proto.sgn.gateway.v1.EstimateAmtResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.EstimateAmtResponse;
  return proto.sgn.gateway.v1.EstimateAmtResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.EstimateAmtResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.EstimateAmtResponse}
 */
proto.sgn.gateway.v1.EstimateAmtResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.ErrMsg;
      reader.readMessage(value,proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEqValueTokenAmt(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBridgeRate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPercFee(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseFee(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSlippageTolerance(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxSlippage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.EstimateAmtResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.EstimateAmtResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.EstimateAmtResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.EstimateAmtResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getEqValueTokenAmt();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBridgeRate();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getPercFee();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBaseFee();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSlippageTolerance();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getMaxSlippage();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.EstimateAmtResponse.prototype.getErr = function() {
  return /** @type{?proto.sgn.gateway.v1.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.ErrMsg, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.ErrMsg|undefined} value
 * @return {!proto.sgn.gateway.v1.EstimateAmtResponse} returns this
*/
proto.sgn.gateway.v1.EstimateAmtResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.EstimateAmtResponse} returns this
 */
proto.sgn.gateway.v1.EstimateAmtResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.EstimateAmtResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string eq_value_token_amt = 2;
 * @return {string}
 */
proto.sgn.gateway.v1.EstimateAmtResponse.prototype.getEqValueTokenAmt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.EstimateAmtResponse} returns this
 */
proto.sgn.gateway.v1.EstimateAmtResponse.prototype.setEqValueTokenAmt = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float bridge_rate = 3;
 * @return {number}
 */
proto.sgn.gateway.v1.EstimateAmtResponse.prototype.getBridgeRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.EstimateAmtResponse} returns this
 */
proto.sgn.gateway.v1.EstimateAmtResponse.prototype.setBridgeRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string perc_fee = 4;
 * @return {string}
 */
proto.sgn.gateway.v1.EstimateAmtResponse.prototype.getPercFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.EstimateAmtResponse} returns this
 */
proto.sgn.gateway.v1.EstimateAmtResponse.prototype.setPercFee = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string base_fee = 7;
 * @return {string}
 */
proto.sgn.gateway.v1.EstimateAmtResponse.prototype.getBaseFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.EstimateAmtResponse} returns this
 */
proto.sgn.gateway.v1.EstimateAmtResponse.prototype.setBaseFee = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint32 slippage_tolerance = 5;
 * @return {number}
 */
proto.sgn.gateway.v1.EstimateAmtResponse.prototype.getSlippageTolerance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.EstimateAmtResponse} returns this
 */
proto.sgn.gateway.v1.EstimateAmtResponse.prototype.setSlippageTolerance = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 max_slippage = 6;
 * @return {number}
 */
proto.sgn.gateway.v1.EstimateAmtResponse.prototype.getMaxSlippage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.EstimateAmtResponse} returns this
 */
proto.sgn.gateway.v1.EstimateAmtResponse.prototype.setMaxSlippage = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.WithdrawInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.WithdrawInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.WithdrawInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.WithdrawInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    amount: jspb.Message.getFieldWithDefault(msg, 2, ""),
    slippageTolerance: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.WithdrawInfo}
 */
proto.sgn.gateway.v1.WithdrawInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.WithdrawInfo;
  return proto.sgn.gateway.v1.WithdrawInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.WithdrawInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.WithdrawInfo}
 */
proto.sgn.gateway.v1.WithdrawInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChainId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSlippageTolerance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.WithdrawInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.WithdrawInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.WithdrawInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.WithdrawInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSlippageTolerance();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 chain_id = 1;
 * @return {number}
 */
proto.sgn.gateway.v1.WithdrawInfo.prototype.getChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.WithdrawInfo} returns this
 */
proto.sgn.gateway.v1.WithdrawInfo.prototype.setChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string amount = 2;
 * @return {string}
 */
proto.sgn.gateway.v1.WithdrawInfo.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.WithdrawInfo} returns this
 */
proto.sgn.gateway.v1.WithdrawInfo.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 slippage_tolerance = 3;
 * @return {number}
 */
proto.sgn.gateway.v1.WithdrawInfo.prototype.getSlippageTolerance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.WithdrawInfo} returns this
 */
proto.sgn.gateway.v1.WithdrawInfo.prototype.setSlippageTolerance = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.EstimateWithdrawAmtRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    srcWithdrawsList: jspb.Message.toObjectList(msg.getSrcWithdrawsList(),
    proto.sgn.gateway.v1.WithdrawInfo.toObject, includeInstance),
    dstChainId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tokenSymbol: jspb.Message.getFieldWithDefault(msg, 3, ""),
    usrAddr: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.EstimateWithdrawAmtRequest}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.EstimateWithdrawAmtRequest;
  return proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.EstimateWithdrawAmtRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.EstimateWithdrawAmtRequest}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.WithdrawInfo;
      reader.readMessage(value,proto.sgn.gateway.v1.WithdrawInfo.deserializeBinaryFromReader);
      msg.addSrcWithdraws(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDstChainId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenSymbol(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsrAddr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.EstimateWithdrawAmtRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSrcWithdrawsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sgn.gateway.v1.WithdrawInfo.serializeBinaryToWriter
    );
  }
  f = message.getDstChainId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getTokenSymbol();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUsrAddr();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * repeated WithdrawInfo src_withdraws = 1;
 * @return {!Array<!proto.sgn.gateway.v1.WithdrawInfo>}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.prototype.getSrcWithdrawsList = function() {
  return /** @type{!Array<!proto.sgn.gateway.v1.WithdrawInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sgn.gateway.v1.WithdrawInfo, 1));
};


/**
 * @param {!Array<!proto.sgn.gateway.v1.WithdrawInfo>} value
 * @return {!proto.sgn.gateway.v1.EstimateWithdrawAmtRequest} returns this
*/
proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.prototype.setSrcWithdrawsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sgn.gateway.v1.WithdrawInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sgn.gateway.v1.WithdrawInfo}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.prototype.addSrcWithdraws = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sgn.gateway.v1.WithdrawInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.gateway.v1.EstimateWithdrawAmtRequest} returns this
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.prototype.clearSrcWithdrawsList = function() {
  return this.setSrcWithdrawsList([]);
};


/**
 * optional uint32 dst_chain_id = 2;
 * @return {number}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.prototype.getDstChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.EstimateWithdrawAmtRequest} returns this
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.prototype.setDstChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string token_symbol = 3;
 * @return {string}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.prototype.getTokenSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.EstimateWithdrawAmtRequest} returns this
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.prototype.setTokenSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string usr_addr = 4;
 * @return {string}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.prototype.getUsrAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.EstimateWithdrawAmtRequest} returns this
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtRequest.prototype.setUsrAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.EstimateWithdrawAmtResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.EstimateWithdrawAmtResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.sgn.gateway.v1.ErrMsg.toObject(includeInstance, f),
    reqAmtMap: (f = msg.getReqAmtMap()) ? f.toObject(includeInstance, proto.sgn.gateway.v1.EstimateWithdrawAmt.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.EstimateWithdrawAmtResponse}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.EstimateWithdrawAmtResponse;
  return proto.sgn.gateway.v1.EstimateWithdrawAmtResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.EstimateWithdrawAmtResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.EstimateWithdrawAmtResponse}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.ErrMsg;
      reader.readMessage(value,proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = msg.getReqAmtMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint32, jspb.BinaryReader.prototype.readMessage, proto.sgn.gateway.v1.EstimateWithdrawAmt.deserializeBinaryFromReader, 0, new proto.sgn.gateway.v1.EstimateWithdrawAmt());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.EstimateWithdrawAmtResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.EstimateWithdrawAmtResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getReqAmtMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeUint32, jspb.BinaryWriter.prototype.writeMessage, proto.sgn.gateway.v1.EstimateWithdrawAmt.serializeBinaryToWriter);
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtResponse.prototype.getErr = function() {
  return /** @type{?proto.sgn.gateway.v1.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.ErrMsg, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.ErrMsg|undefined} value
 * @return {!proto.sgn.gateway.v1.EstimateWithdrawAmtResponse} returns this
*/
proto.sgn.gateway.v1.EstimateWithdrawAmtResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.EstimateWithdrawAmtResponse} returns this
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<uint32, EstimateWithdrawAmt> req_amt = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.sgn.gateway.v1.EstimateWithdrawAmt>}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtResponse.prototype.getReqAmtMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.sgn.gateway.v1.EstimateWithdrawAmt>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.sgn.gateway.v1.EstimateWithdrawAmt));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sgn.gateway.v1.EstimateWithdrawAmtResponse} returns this
 */
proto.sgn.gateway.v1.EstimateWithdrawAmtResponse.prototype.clearReqAmtMap = function() {
  this.getReqAmtMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmt.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.EstimateWithdrawAmt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.EstimateWithdrawAmt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.EstimateWithdrawAmt.toObject = function(includeInstance, msg) {
  var f, obj = {
    eqValueTokenAmt: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bridgeRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    percFee: jspb.Message.getFieldWithDefault(msg, 3, ""),
    baseFee: jspb.Message.getFieldWithDefault(msg, 4, ""),
    slippageTolerance: jspb.Message.getFieldWithDefault(msg, 5, 0),
    maxSlippage: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.EstimateWithdrawAmt}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.EstimateWithdrawAmt;
  return proto.sgn.gateway.v1.EstimateWithdrawAmt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.EstimateWithdrawAmt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.EstimateWithdrawAmt}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEqValueTokenAmt(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBridgeRate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPercFee(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseFee(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSlippageTolerance(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxSlippage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.EstimateWithdrawAmt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.EstimateWithdrawAmt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.EstimateWithdrawAmt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEqValueTokenAmt();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBridgeRate();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getPercFee();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBaseFee();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSlippageTolerance();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getMaxSlippage();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional string eq_value_token_amt = 1;
 * @return {string}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmt.prototype.getEqValueTokenAmt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.EstimateWithdrawAmt} returns this
 */
proto.sgn.gateway.v1.EstimateWithdrawAmt.prototype.setEqValueTokenAmt = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float bridge_rate = 2;
 * @return {number}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmt.prototype.getBridgeRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.EstimateWithdrawAmt} returns this
 */
proto.sgn.gateway.v1.EstimateWithdrawAmt.prototype.setBridgeRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string perc_fee = 3;
 * @return {string}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmt.prototype.getPercFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.EstimateWithdrawAmt} returns this
 */
proto.sgn.gateway.v1.EstimateWithdrawAmt.prototype.setPercFee = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string base_fee = 4;
 * @return {string}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmt.prototype.getBaseFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.EstimateWithdrawAmt} returns this
 */
proto.sgn.gateway.v1.EstimateWithdrawAmt.prototype.setBaseFee = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 slippage_tolerance = 5;
 * @return {number}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmt.prototype.getSlippageTolerance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.EstimateWithdrawAmt} returns this
 */
proto.sgn.gateway.v1.EstimateWithdrawAmt.prototype.setSlippageTolerance = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 max_slippage = 6;
 * @return {number}
 */
proto.sgn.gateway.v1.EstimateWithdrawAmt.prototype.getMaxSlippage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.EstimateWithdrawAmt} returns this
 */
proto.sgn.gateway.v1.EstimateWithdrawAmt.prototype.setMaxSlippage = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.MarkTransferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.MarkTransferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.MarkTransferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.MarkTransferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    srcSendInfo: (f = msg.getSrcSendInfo()) && proto.sgn.gateway.v1.TransferInfo.toObject(includeInstance, f),
    dstMinReceivedInfo: (f = msg.getDstMinReceivedInfo()) && proto.sgn.gateway.v1.TransferInfo.toObject(includeInstance, f),
    addr: jspb.Message.getFieldWithDefault(msg, 4, ""),
    srcTxHash: jspb.Message.getFieldWithDefault(msg, 5, ""),
    type: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.MarkTransferRequest}
 */
proto.sgn.gateway.v1.MarkTransferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.MarkTransferRequest;
  return proto.sgn.gateway.v1.MarkTransferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.MarkTransferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.MarkTransferRequest}
 */
proto.sgn.gateway.v1.MarkTransferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferId(value);
      break;
    case 2:
      var value = new proto.sgn.gateway.v1.TransferInfo;
      reader.readMessage(value,proto.sgn.gateway.v1.TransferInfo.deserializeBinaryFromReader);
      msg.setSrcSendInfo(value);
      break;
    case 3:
      var value = new proto.sgn.gateway.v1.TransferInfo;
      reader.readMessage(value,proto.sgn.gateway.v1.TransferInfo.deserializeBinaryFromReader);
      msg.setDstMinReceivedInfo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddr(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcTxHash(value);
      break;
    case 6:
      var value = /** @type {!proto.sgn.gateway.v1.TransferType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.MarkTransferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.MarkTransferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.MarkTransferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.MarkTransferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransferId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSrcSendInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sgn.gateway.v1.TransferInfo.serializeBinaryToWriter
    );
  }
  f = message.getDstMinReceivedInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sgn.gateway.v1.TransferInfo.serializeBinaryToWriter
    );
  }
  f = message.getAddr();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSrcTxHash();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string transfer_id = 1;
 * @return {string}
 */
proto.sgn.gateway.v1.MarkTransferRequest.prototype.getTransferId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.MarkTransferRequest} returns this
 */
proto.sgn.gateway.v1.MarkTransferRequest.prototype.setTransferId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TransferInfo src_send_info = 2;
 * @return {?proto.sgn.gateway.v1.TransferInfo}
 */
proto.sgn.gateway.v1.MarkTransferRequest.prototype.getSrcSendInfo = function() {
  return /** @type{?proto.sgn.gateway.v1.TransferInfo} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.TransferInfo, 2));
};


/**
 * @param {?proto.sgn.gateway.v1.TransferInfo|undefined} value
 * @return {!proto.sgn.gateway.v1.MarkTransferRequest} returns this
*/
proto.sgn.gateway.v1.MarkTransferRequest.prototype.setSrcSendInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.MarkTransferRequest} returns this
 */
proto.sgn.gateway.v1.MarkTransferRequest.prototype.clearSrcSendInfo = function() {
  return this.setSrcSendInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.MarkTransferRequest.prototype.hasSrcSendInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TransferInfo dst_min_received_info = 3;
 * @return {?proto.sgn.gateway.v1.TransferInfo}
 */
proto.sgn.gateway.v1.MarkTransferRequest.prototype.getDstMinReceivedInfo = function() {
  return /** @type{?proto.sgn.gateway.v1.TransferInfo} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.TransferInfo, 3));
};


/**
 * @param {?proto.sgn.gateway.v1.TransferInfo|undefined} value
 * @return {!proto.sgn.gateway.v1.MarkTransferRequest} returns this
*/
proto.sgn.gateway.v1.MarkTransferRequest.prototype.setDstMinReceivedInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.MarkTransferRequest} returns this
 */
proto.sgn.gateway.v1.MarkTransferRequest.prototype.clearDstMinReceivedInfo = function() {
  return this.setDstMinReceivedInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.MarkTransferRequest.prototype.hasDstMinReceivedInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string addr = 4;
 * @return {string}
 */
proto.sgn.gateway.v1.MarkTransferRequest.prototype.getAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.MarkTransferRequest} returns this
 */
proto.sgn.gateway.v1.MarkTransferRequest.prototype.setAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string src_tx_hash = 5;
 * @return {string}
 */
proto.sgn.gateway.v1.MarkTransferRequest.prototype.getSrcTxHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.MarkTransferRequest} returns this
 */
proto.sgn.gateway.v1.MarkTransferRequest.prototype.setSrcTxHash = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional TransferType type = 6;
 * @return {!proto.sgn.gateway.v1.TransferType}
 */
proto.sgn.gateway.v1.MarkTransferRequest.prototype.getType = function() {
  return /** @type {!proto.sgn.gateway.v1.TransferType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.sgn.gateway.v1.TransferType} value
 * @return {!proto.sgn.gateway.v1.MarkTransferRequest} returns this
 */
proto.sgn.gateway.v1.MarkTransferRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.MarkTransferResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.MarkTransferResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.MarkTransferResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.MarkTransferResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.sgn.gateway.v1.ErrMsg.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.MarkTransferResponse}
 */
proto.sgn.gateway.v1.MarkTransferResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.MarkTransferResponse;
  return proto.sgn.gateway.v1.MarkTransferResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.MarkTransferResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.MarkTransferResponse}
 */
proto.sgn.gateway.v1.MarkTransferResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.ErrMsg;
      reader.readMessage(value,proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.MarkTransferResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.MarkTransferResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.MarkTransferResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.MarkTransferResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.MarkTransferResponse.prototype.getErr = function() {
  return /** @type{?proto.sgn.gateway.v1.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.ErrMsg, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.ErrMsg|undefined} value
 * @return {!proto.sgn.gateway.v1.MarkTransferResponse} returns this
*/
proto.sgn.gateway.v1.MarkTransferResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.MarkTransferResponse} returns this
 */
proto.sgn.gateway.v1.MarkTransferResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.MarkTransferResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.GetLPInfoListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.GetLPInfoListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.GetLPInfoListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetLPInfoListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    addr: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.GetLPInfoListRequest}
 */
proto.sgn.gateway.v1.GetLPInfoListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.GetLPInfoListRequest;
  return proto.sgn.gateway.v1.GetLPInfoListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.GetLPInfoListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.GetLPInfoListRequest}
 */
proto.sgn.gateway.v1.GetLPInfoListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.GetLPInfoListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.GetLPInfoListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.GetLPInfoListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetLPInfoListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string addr = 1;
 * @return {string}
 */
proto.sgn.gateway.v1.GetLPInfoListRequest.prototype.getAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.GetLPInfoListRequest} returns this
 */
proto.sgn.gateway.v1.GetLPInfoListRequest.prototype.setAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.LPInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.LPInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.LPInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.LPInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    chain: (f = msg.getChain()) && proto.sgn.gateway.v1.Chain.toObject(includeInstance, f),
    token: (f = msg.getToken()) && proto.sgn.gateway.v1.TokenInfo.toObject(includeInstance, f),
    liquidity: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    liquidityAmt: jspb.Message.getFieldWithDefault(msg, 4, ""),
    hasFarmingSessions: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    lpFeeEarning: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    farmingRewardEarning: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    volume24h: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    totalLiquidity: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    totalLiquidityAmt: jspb.Message.getFieldWithDefault(msg, 10, ""),
    lpFeeEarningApy: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    farmingApy: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.LPInfo}
 */
proto.sgn.gateway.v1.LPInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.LPInfo;
  return proto.sgn.gateway.v1.LPInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.LPInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.LPInfo}
 */
proto.sgn.gateway.v1.LPInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.Chain;
      reader.readMessage(value,proto.sgn.gateway.v1.Chain.deserializeBinaryFromReader);
      msg.setChain(value);
      break;
    case 2:
      var value = new proto.sgn.gateway.v1.TokenInfo;
      reader.readMessage(value,proto.sgn.gateway.v1.TokenInfo.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLiquidity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLiquidityAmt(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasFarmingSessions(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLpFeeEarning(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFarmingRewardEarning(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolume24h(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalLiquidity(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotalLiquidityAmt(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLpFeeEarningApy(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFarmingApy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.LPInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.LPInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.LPInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.LPInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChain();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.Chain.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sgn.gateway.v1.TokenInfo.serializeBinaryToWriter
    );
  }
  f = message.getLiquidity();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getLiquidityAmt();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHasFarmingSessions();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getLpFeeEarning();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getFarmingRewardEarning();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getVolume24h();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getTotalLiquidity();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getTotalLiquidityAmt();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getLpFeeEarningApy();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getFarmingApy();
  if (f !== 0.0) {
    writer.writeDouble(
      12,
      f
    );
  }
};


/**
 * optional Chain chain = 1;
 * @return {?proto.sgn.gateway.v1.Chain}
 */
proto.sgn.gateway.v1.LPInfo.prototype.getChain = function() {
  return /** @type{?proto.sgn.gateway.v1.Chain} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.Chain, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.Chain|undefined} value
 * @return {!proto.sgn.gateway.v1.LPInfo} returns this
*/
proto.sgn.gateway.v1.LPInfo.prototype.setChain = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.LPInfo} returns this
 */
proto.sgn.gateway.v1.LPInfo.prototype.clearChain = function() {
  return this.setChain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.LPInfo.prototype.hasChain = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TokenInfo token = 2;
 * @return {?proto.sgn.gateway.v1.TokenInfo}
 */
proto.sgn.gateway.v1.LPInfo.prototype.getToken = function() {
  return /** @type{?proto.sgn.gateway.v1.TokenInfo} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.TokenInfo, 2));
};


/**
 * @param {?proto.sgn.gateway.v1.TokenInfo|undefined} value
 * @return {!proto.sgn.gateway.v1.LPInfo} returns this
*/
proto.sgn.gateway.v1.LPInfo.prototype.setToken = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.LPInfo} returns this
 */
proto.sgn.gateway.v1.LPInfo.prototype.clearToken = function() {
  return this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.LPInfo.prototype.hasToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double liquidity = 3;
 * @return {number}
 */
proto.sgn.gateway.v1.LPInfo.prototype.getLiquidity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.LPInfo} returns this
 */
proto.sgn.gateway.v1.LPInfo.prototype.setLiquidity = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string liquidity_amt = 4;
 * @return {string}
 */
proto.sgn.gateway.v1.LPInfo.prototype.getLiquidityAmt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.LPInfo} returns this
 */
proto.sgn.gateway.v1.LPInfo.prototype.setLiquidityAmt = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool has_farming_sessions = 5;
 * @return {boolean}
 */
proto.sgn.gateway.v1.LPInfo.prototype.getHasFarmingSessions = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sgn.gateway.v1.LPInfo} returns this
 */
proto.sgn.gateway.v1.LPInfo.prototype.setHasFarmingSessions = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional double lp_fee_earning = 6;
 * @return {number}
 */
proto.sgn.gateway.v1.LPInfo.prototype.getLpFeeEarning = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.LPInfo} returns this
 */
proto.sgn.gateway.v1.LPInfo.prototype.setLpFeeEarning = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double farming_reward_earning = 7;
 * @return {number}
 */
proto.sgn.gateway.v1.LPInfo.prototype.getFarmingRewardEarning = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.LPInfo} returns this
 */
proto.sgn.gateway.v1.LPInfo.prototype.setFarmingRewardEarning = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double volume_24h = 8;
 * @return {number}
 */
proto.sgn.gateway.v1.LPInfo.prototype.getVolume24h = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.LPInfo} returns this
 */
proto.sgn.gateway.v1.LPInfo.prototype.setVolume24h = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double total_liquidity = 9;
 * @return {number}
 */
proto.sgn.gateway.v1.LPInfo.prototype.getTotalLiquidity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.LPInfo} returns this
 */
proto.sgn.gateway.v1.LPInfo.prototype.setTotalLiquidity = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional string total_liquidity_amt = 10;
 * @return {string}
 */
proto.sgn.gateway.v1.LPInfo.prototype.getTotalLiquidityAmt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.LPInfo} returns this
 */
proto.sgn.gateway.v1.LPInfo.prototype.setTotalLiquidityAmt = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional double lp_fee_earning_apy = 11;
 * @return {number}
 */
proto.sgn.gateway.v1.LPInfo.prototype.getLpFeeEarningApy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.LPInfo} returns this
 */
proto.sgn.gateway.v1.LPInfo.prototype.setLpFeeEarningApy = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional double farming_apy = 12;
 * @return {number}
 */
proto.sgn.gateway.v1.LPInfo.prototype.getFarmingApy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.LPInfo} returns this
 */
proto.sgn.gateway.v1.LPInfo.prototype.setFarmingApy = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sgn.gateway.v1.GetLPInfoListResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.GetLPInfoListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.GetLPInfoListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.GetLPInfoListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetLPInfoListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.sgn.gateway.v1.ErrMsg.toObject(includeInstance, f),
    lpInfoList: jspb.Message.toObjectList(msg.getLpInfoList(),
    proto.sgn.gateway.v1.LPInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.GetLPInfoListResponse}
 */
proto.sgn.gateway.v1.GetLPInfoListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.GetLPInfoListResponse;
  return proto.sgn.gateway.v1.GetLPInfoListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.GetLPInfoListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.GetLPInfoListResponse}
 */
proto.sgn.gateway.v1.GetLPInfoListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.ErrMsg;
      reader.readMessage(value,proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = new proto.sgn.gateway.v1.LPInfo;
      reader.readMessage(value,proto.sgn.gateway.v1.LPInfo.deserializeBinaryFromReader);
      msg.addLpInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.GetLPInfoListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.GetLPInfoListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.GetLPInfoListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetLPInfoListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getLpInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sgn.gateway.v1.LPInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.GetLPInfoListResponse.prototype.getErr = function() {
  return /** @type{?proto.sgn.gateway.v1.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.ErrMsg, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.ErrMsg|undefined} value
 * @return {!proto.sgn.gateway.v1.GetLPInfoListResponse} returns this
*/
proto.sgn.gateway.v1.GetLPInfoListResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.GetLPInfoListResponse} returns this
 */
proto.sgn.gateway.v1.GetLPInfoListResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.GetLPInfoListResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated LPInfo lp_info = 2;
 * @return {!Array<!proto.sgn.gateway.v1.LPInfo>}
 */
proto.sgn.gateway.v1.GetLPInfoListResponse.prototype.getLpInfoList = function() {
  return /** @type{!Array<!proto.sgn.gateway.v1.LPInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sgn.gateway.v1.LPInfo, 2));
};


/**
 * @param {!Array<!proto.sgn.gateway.v1.LPInfo>} value
 * @return {!proto.sgn.gateway.v1.GetLPInfoListResponse} returns this
*/
proto.sgn.gateway.v1.GetLPInfoListResponse.prototype.setLpInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sgn.gateway.v1.LPInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sgn.gateway.v1.LPInfo}
 */
proto.sgn.gateway.v1.GetLPInfoListResponse.prototype.addLpInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sgn.gateway.v1.LPInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.gateway.v1.GetLPInfoListResponse} returns this
 */
proto.sgn.gateway.v1.GetLPInfoListResponse.prototype.clearLpInfoList = function() {
  return this.setLpInfoList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.WithdrawLiquidityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.WithdrawLiquidityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.WithdrawLiquidityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.WithdrawLiquidityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    withdrawReq: msg.getWithdrawReq_asB64(),
    sig: msg.getSig_asB64(),
    estimatedReceivedAmt: jspb.Message.getFieldWithDefault(msg, 3, ""),
    methodType: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.WithdrawLiquidityRequest}
 */
proto.sgn.gateway.v1.WithdrawLiquidityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.WithdrawLiquidityRequest;
  return proto.sgn.gateway.v1.WithdrawLiquidityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.WithdrawLiquidityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.WithdrawLiquidityRequest}
 */
proto.sgn.gateway.v1.WithdrawLiquidityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setWithdrawReq(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSig(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEstimatedReceivedAmt(value);
      break;
    case 4:
      var value = /** @type {!proto.sgn.gateway.v1.WithdrawMethodType} */ (reader.readEnum());
      msg.setMethodType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.WithdrawLiquidityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.WithdrawLiquidityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.WithdrawLiquidityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.WithdrawLiquidityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWithdrawReq_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSig_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getEstimatedReceivedAmt();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMethodType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional bytes withdraw_req = 1;
 * @return {!(string|Uint8Array)}
 */
proto.sgn.gateway.v1.WithdrawLiquidityRequest.prototype.getWithdrawReq = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes withdraw_req = 1;
 * This is a type-conversion wrapper around `getWithdrawReq()`
 * @return {string}
 */
proto.sgn.gateway.v1.WithdrawLiquidityRequest.prototype.getWithdrawReq_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getWithdrawReq()));
};


/**
 * optional bytes withdraw_req = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getWithdrawReq()`
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.WithdrawLiquidityRequest.prototype.getWithdrawReq_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getWithdrawReq()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sgn.gateway.v1.WithdrawLiquidityRequest} returns this
 */
proto.sgn.gateway.v1.WithdrawLiquidityRequest.prototype.setWithdrawReq = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes sig = 2;
 * @return {!(string|Uint8Array)}
 */
proto.sgn.gateway.v1.WithdrawLiquidityRequest.prototype.getSig = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes sig = 2;
 * This is a type-conversion wrapper around `getSig()`
 * @return {string}
 */
proto.sgn.gateway.v1.WithdrawLiquidityRequest.prototype.getSig_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSig()));
};


/**
 * optional bytes sig = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSig()`
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.WithdrawLiquidityRequest.prototype.getSig_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSig()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sgn.gateway.v1.WithdrawLiquidityRequest} returns this
 */
proto.sgn.gateway.v1.WithdrawLiquidityRequest.prototype.setSig = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string estimated_received_amt = 3;
 * @return {string}
 */
proto.sgn.gateway.v1.WithdrawLiquidityRequest.prototype.getEstimatedReceivedAmt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.WithdrawLiquidityRequest} returns this
 */
proto.sgn.gateway.v1.WithdrawLiquidityRequest.prototype.setEstimatedReceivedAmt = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional WithdrawMethodType method_type = 4;
 * @return {!proto.sgn.gateway.v1.WithdrawMethodType}
 */
proto.sgn.gateway.v1.WithdrawLiquidityRequest.prototype.getMethodType = function() {
  return /** @type {!proto.sgn.gateway.v1.WithdrawMethodType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.sgn.gateway.v1.WithdrawMethodType} value
 * @return {!proto.sgn.gateway.v1.WithdrawLiquidityRequest} returns this
 */
proto.sgn.gateway.v1.WithdrawLiquidityRequest.prototype.setMethodType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.WithdrawLiquidityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.WithdrawLiquidityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.WithdrawLiquidityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.WithdrawLiquidityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.sgn.gateway.v1.ErrMsg.toObject(includeInstance, f),
    seqNum: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.WithdrawLiquidityResponse}
 */
proto.sgn.gateway.v1.WithdrawLiquidityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.WithdrawLiquidityResponse;
  return proto.sgn.gateway.v1.WithdrawLiquidityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.WithdrawLiquidityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.WithdrawLiquidityResponse}
 */
proto.sgn.gateway.v1.WithdrawLiquidityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.ErrMsg;
      reader.readMessage(value,proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSeqNum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.WithdrawLiquidityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.WithdrawLiquidityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.WithdrawLiquidityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.WithdrawLiquidityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getSeqNum();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.WithdrawLiquidityResponse.prototype.getErr = function() {
  return /** @type{?proto.sgn.gateway.v1.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.ErrMsg, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.ErrMsg|undefined} value
 * @return {!proto.sgn.gateway.v1.WithdrawLiquidityResponse} returns this
*/
proto.sgn.gateway.v1.WithdrawLiquidityResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.WithdrawLiquidityResponse} returns this
 */
proto.sgn.gateway.v1.WithdrawLiquidityResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.WithdrawLiquidityResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 seq_num = 2;
 * @return {number}
 */
proto.sgn.gateway.v1.WithdrawLiquidityResponse.prototype.getSeqNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.WithdrawLiquidityResponse} returns this
 */
proto.sgn.gateway.v1.WithdrawLiquidityResponse.prototype.setSeqNum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.MarkLiquidityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.MarkLiquidityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.MarkLiquidityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.MarkLiquidityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    lpAddr: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amt: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tokenAddr: jspb.Message.getFieldWithDefault(msg, 3, ""),
    chainId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    seqNum: jspb.Message.getFieldWithDefault(msg, 5, 0),
    txHash: jspb.Message.getFieldWithDefault(msg, 6, ""),
    type: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.MarkLiquidityRequest}
 */
proto.sgn.gateway.v1.MarkLiquidityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.MarkLiquidityRequest;
  return proto.sgn.gateway.v1.MarkLiquidityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.MarkLiquidityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.MarkLiquidityRequest}
 */
proto.sgn.gateway.v1.MarkLiquidityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLpAddr(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmt(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenAddr(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChainId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSeqNum(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxHash(value);
      break;
    case 7:
      var value = /** @type {!proto.sgn.gateway.v1.LPType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.MarkLiquidityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.MarkLiquidityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.MarkLiquidityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.MarkLiquidityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLpAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmt();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTokenAddr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getChainId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getSeqNum();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getTxHash();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional string lp_addr = 1;
 * @return {string}
 */
proto.sgn.gateway.v1.MarkLiquidityRequest.prototype.getLpAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.MarkLiquidityRequest} returns this
 */
proto.sgn.gateway.v1.MarkLiquidityRequest.prototype.setLpAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string amt = 2;
 * @return {string}
 */
proto.sgn.gateway.v1.MarkLiquidityRequest.prototype.getAmt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.MarkLiquidityRequest} returns this
 */
proto.sgn.gateway.v1.MarkLiquidityRequest.prototype.setAmt = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string token_addr = 3;
 * @return {string}
 */
proto.sgn.gateway.v1.MarkLiquidityRequest.prototype.getTokenAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.MarkLiquidityRequest} returns this
 */
proto.sgn.gateway.v1.MarkLiquidityRequest.prototype.setTokenAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 chain_id = 4;
 * @return {number}
 */
proto.sgn.gateway.v1.MarkLiquidityRequest.prototype.getChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.MarkLiquidityRequest} returns this
 */
proto.sgn.gateway.v1.MarkLiquidityRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 seq_num = 5;
 * @return {number}
 */
proto.sgn.gateway.v1.MarkLiquidityRequest.prototype.getSeqNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.MarkLiquidityRequest} returns this
 */
proto.sgn.gateway.v1.MarkLiquidityRequest.prototype.setSeqNum = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string tx_hash = 6;
 * @return {string}
 */
proto.sgn.gateway.v1.MarkLiquidityRequest.prototype.getTxHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.MarkLiquidityRequest} returns this
 */
proto.sgn.gateway.v1.MarkLiquidityRequest.prototype.setTxHash = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional LPType type = 7;
 * @return {!proto.sgn.gateway.v1.LPType}
 */
proto.sgn.gateway.v1.MarkLiquidityRequest.prototype.getType = function() {
  return /** @type {!proto.sgn.gateway.v1.LPType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.sgn.gateway.v1.LPType} value
 * @return {!proto.sgn.gateway.v1.MarkLiquidityRequest} returns this
 */
proto.sgn.gateway.v1.MarkLiquidityRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.MarkLiquidityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.MarkLiquidityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.MarkLiquidityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.MarkLiquidityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.sgn.gateway.v1.ErrMsg.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.MarkLiquidityResponse}
 */
proto.sgn.gateway.v1.MarkLiquidityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.MarkLiquidityResponse;
  return proto.sgn.gateway.v1.MarkLiquidityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.MarkLiquidityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.MarkLiquidityResponse}
 */
proto.sgn.gateway.v1.MarkLiquidityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.ErrMsg;
      reader.readMessage(value,proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.MarkLiquidityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.MarkLiquidityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.MarkLiquidityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.MarkLiquidityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.MarkLiquidityResponse.prototype.getErr = function() {
  return /** @type{?proto.sgn.gateway.v1.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.ErrMsg, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.ErrMsg|undefined} value
 * @return {!proto.sgn.gateway.v1.MarkLiquidityResponse} returns this
*/
proto.sgn.gateway.v1.MarkLiquidityResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.MarkLiquidityResponse} returns this
 */
proto.sgn.gateway.v1.MarkLiquidityResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.MarkLiquidityResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.UnlockFarmingRewardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.UnlockFarmingRewardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.UnlockFarmingRewardRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.UnlockFarmingRewardRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    addr: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.UnlockFarmingRewardRequest}
 */
proto.sgn.gateway.v1.UnlockFarmingRewardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.UnlockFarmingRewardRequest;
  return proto.sgn.gateway.v1.UnlockFarmingRewardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.UnlockFarmingRewardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.UnlockFarmingRewardRequest}
 */
proto.sgn.gateway.v1.UnlockFarmingRewardRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.UnlockFarmingRewardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.UnlockFarmingRewardRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.UnlockFarmingRewardRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.UnlockFarmingRewardRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string addr = 1;
 * @return {string}
 */
proto.sgn.gateway.v1.UnlockFarmingRewardRequest.prototype.getAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.UnlockFarmingRewardRequest} returns this
 */
proto.sgn.gateway.v1.UnlockFarmingRewardRequest.prototype.setAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.UnlockFarmingRewardResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.UnlockFarmingRewardResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.UnlockFarmingRewardResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.UnlockFarmingRewardResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.sgn.gateway.v1.ErrMsg.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.UnlockFarmingRewardResponse}
 */
proto.sgn.gateway.v1.UnlockFarmingRewardResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.UnlockFarmingRewardResponse;
  return proto.sgn.gateway.v1.UnlockFarmingRewardResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.UnlockFarmingRewardResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.UnlockFarmingRewardResponse}
 */
proto.sgn.gateway.v1.UnlockFarmingRewardResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.ErrMsg;
      reader.readMessage(value,proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.UnlockFarmingRewardResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.UnlockFarmingRewardResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.UnlockFarmingRewardResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.UnlockFarmingRewardResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.UnlockFarmingRewardResponse.prototype.getErr = function() {
  return /** @type{?proto.sgn.gateway.v1.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.ErrMsg, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.ErrMsg|undefined} value
 * @return {!proto.sgn.gateway.v1.UnlockFarmingRewardResponse} returns this
*/
proto.sgn.gateway.v1.UnlockFarmingRewardResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.UnlockFarmingRewardResponse} returns this
 */
proto.sgn.gateway.v1.UnlockFarmingRewardResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.UnlockFarmingRewardResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    addr: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest}
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest;
  return proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest}
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string addr = 1;
 * @return {string}
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest.prototype.getAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest} returns this
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsRequest.prototype.setAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.sgn.gateway.v1.ErrMsg.toObject(includeInstance, f),
    detailsList: jspb.Message.toObjectList(msg.getDetailsList(),
    sgn_farming_v1_farming_pb.RewardClaimDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse}
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse;
  return proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse}
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.ErrMsg;
      reader.readMessage(value,proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = new sgn_farming_v1_farming_pb.RewardClaimDetails;
      reader.readMessage(value,sgn_farming_v1_farming_pb.RewardClaimDetails.deserializeBinaryFromReader);
      msg.addDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      sgn_farming_v1_farming_pb.RewardClaimDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse.prototype.getErr = function() {
  return /** @type{?proto.sgn.gateway.v1.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.ErrMsg, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.ErrMsg|undefined} value
 * @return {!proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse} returns this
*/
proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse} returns this
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated sgn.farming.v1.RewardClaimDetails details = 2;
 * @return {!Array<!proto.sgn.farming.v1.RewardClaimDetails>}
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse.prototype.getDetailsList = function() {
  return /** @type{!Array<!proto.sgn.farming.v1.RewardClaimDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, sgn_farming_v1_farming_pb.RewardClaimDetails, 2));
};


/**
 * @param {!Array<!proto.sgn.farming.v1.RewardClaimDetails>} value
 * @return {!proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse} returns this
*/
proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse.prototype.setDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sgn.farming.v1.RewardClaimDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sgn.farming.v1.RewardClaimDetails}
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse.prototype.addDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sgn.farming.v1.RewardClaimDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse} returns this
 */
proto.sgn.gateway.v1.GetFarmingRewardDetailsResponse.prototype.clearDetailsList = function() {
  return this.setDetailsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.QueryLiquidityStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.QueryLiquidityStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.QueryLiquidityStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    seqNum: jspb.Message.getFieldWithDefault(msg, 1, 0),
    txHash: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lpAddr: jspb.Message.getFieldWithDefault(msg, 3, ""),
    chainId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusRequest}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.QueryLiquidityStatusRequest;
  return proto.sgn.gateway.v1.QueryLiquidityStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.QueryLiquidityStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusRequest}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSeqNum(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxHash(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLpAddr(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChainId(value);
      break;
    case 5:
      var value = /** @type {!proto.sgn.gateway.v1.LPType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.QueryLiquidityStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.QueryLiquidityStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.QueryLiquidityStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeqNum();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getTxHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLpAddr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getChainId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional uint64 seq_num = 1;
 * @return {number}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusRequest.prototype.getSeqNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusRequest} returns this
 */
proto.sgn.gateway.v1.QueryLiquidityStatusRequest.prototype.setSeqNum = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string tx_hash = 2;
 * @return {string}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusRequest.prototype.getTxHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusRequest} returns this
 */
proto.sgn.gateway.v1.QueryLiquidityStatusRequest.prototype.setTxHash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string lp_addr = 3;
 * @return {string}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusRequest.prototype.getLpAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusRequest} returns this
 */
proto.sgn.gateway.v1.QueryLiquidityStatusRequest.prototype.setLpAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 chain_id = 4;
 * @return {number}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusRequest.prototype.getChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusRequest} returns this
 */
proto.sgn.gateway.v1.QueryLiquidityStatusRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional LPType type = 5;
 * @return {!proto.sgn.gateway.v1.LPType}
 */
proto.sgn.gateway.v1.QueryLiquidityStatusRequest.prototype.getType = function() {
  return /** @type {!proto.sgn.gateway.v1.LPType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.sgn.gateway.v1.LPType} value
 * @return {!proto.sgn.gateway.v1.QueryLiquidityStatusRequest} returns this
 */
proto.sgn.gateway.v1.QueryLiquidityStatusRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.TransferHistory.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.TransferHistory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.TransferHistory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.TransferHistory.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    srcSendInfo: (f = msg.getSrcSendInfo()) && proto.sgn.gateway.v1.TransferInfo.toObject(includeInstance, f),
    dstReceivedInfo: (f = msg.getDstReceivedInfo()) && proto.sgn.gateway.v1.TransferInfo.toObject(includeInstance, f),
    ts: jspb.Message.getFieldWithDefault(msg, 4, 0),
    srcBlockTxLink: jspb.Message.getFieldWithDefault(msg, 5, ""),
    dstBlockTxLink: jspb.Message.getFieldWithDefault(msg, 6, ""),
    status: jspb.Message.getFieldWithDefault(msg, 7, 0),
    refundReason: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.TransferHistory}
 */
proto.sgn.gateway.v1.TransferHistory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.TransferHistory;
  return proto.sgn.gateway.v1.TransferHistory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.TransferHistory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.TransferHistory}
 */
proto.sgn.gateway.v1.TransferHistory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferId(value);
      break;
    case 2:
      var value = new proto.sgn.gateway.v1.TransferInfo;
      reader.readMessage(value,proto.sgn.gateway.v1.TransferInfo.deserializeBinaryFromReader);
      msg.setSrcSendInfo(value);
      break;
    case 3:
      var value = new proto.sgn.gateway.v1.TransferInfo;
      reader.readMessage(value,proto.sgn.gateway.v1.TransferInfo.deserializeBinaryFromReader);
      msg.setDstReceivedInfo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTs(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcBlockTxLink(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDstBlockTxLink(value);
      break;
    case 7:
      var value = /** @type {!proto.sgn.cbridge.v1.TransferHistoryStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 8:
      var value = /** @type {!proto.sgn.cbridge.v1.XferStatus} */ (reader.readEnum());
      msg.setRefundReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.TransferHistory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.TransferHistory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.TransferHistory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.TransferHistory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransferId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSrcSendInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sgn.gateway.v1.TransferInfo.serializeBinaryToWriter
    );
  }
  f = message.getDstReceivedInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.sgn.gateway.v1.TransferInfo.serializeBinaryToWriter
    );
  }
  f = message.getTs();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getSrcBlockTxLink();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDstBlockTxLink();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getRefundReason();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional string transfer_id = 1;
 * @return {string}
 */
proto.sgn.gateway.v1.TransferHistory.prototype.getTransferId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.TransferHistory} returns this
 */
proto.sgn.gateway.v1.TransferHistory.prototype.setTransferId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TransferInfo src_send_info = 2;
 * @return {?proto.sgn.gateway.v1.TransferInfo}
 */
proto.sgn.gateway.v1.TransferHistory.prototype.getSrcSendInfo = function() {
  return /** @type{?proto.sgn.gateway.v1.TransferInfo} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.TransferInfo, 2));
};


/**
 * @param {?proto.sgn.gateway.v1.TransferInfo|undefined} value
 * @return {!proto.sgn.gateway.v1.TransferHistory} returns this
*/
proto.sgn.gateway.v1.TransferHistory.prototype.setSrcSendInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.TransferHistory} returns this
 */
proto.sgn.gateway.v1.TransferHistory.prototype.clearSrcSendInfo = function() {
  return this.setSrcSendInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.TransferHistory.prototype.hasSrcSendInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TransferInfo dst_received_info = 3;
 * @return {?proto.sgn.gateway.v1.TransferInfo}
 */
proto.sgn.gateway.v1.TransferHistory.prototype.getDstReceivedInfo = function() {
  return /** @type{?proto.sgn.gateway.v1.TransferInfo} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.TransferInfo, 3));
};


/**
 * @param {?proto.sgn.gateway.v1.TransferInfo|undefined} value
 * @return {!proto.sgn.gateway.v1.TransferHistory} returns this
*/
proto.sgn.gateway.v1.TransferHistory.prototype.setDstReceivedInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.TransferHistory} returns this
 */
proto.sgn.gateway.v1.TransferHistory.prototype.clearDstReceivedInfo = function() {
  return this.setDstReceivedInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.TransferHistory.prototype.hasDstReceivedInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 ts = 4;
 * @return {number}
 */
proto.sgn.gateway.v1.TransferHistory.prototype.getTs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.TransferHistory} returns this
 */
proto.sgn.gateway.v1.TransferHistory.prototype.setTs = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string src_block_tx_link = 5;
 * @return {string}
 */
proto.sgn.gateway.v1.TransferHistory.prototype.getSrcBlockTxLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.TransferHistory} returns this
 */
proto.sgn.gateway.v1.TransferHistory.prototype.setSrcBlockTxLink = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string dst_block_tx_link = 6;
 * @return {string}
 */
proto.sgn.gateway.v1.TransferHistory.prototype.getDstBlockTxLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.TransferHistory} returns this
 */
proto.sgn.gateway.v1.TransferHistory.prototype.setDstBlockTxLink = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional sgn.cbridge.v1.TransferHistoryStatus status = 7;
 * @return {!proto.sgn.cbridge.v1.TransferHistoryStatus}
 */
proto.sgn.gateway.v1.TransferHistory.prototype.getStatus = function() {
  return /** @type {!proto.sgn.cbridge.v1.TransferHistoryStatus} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.sgn.cbridge.v1.TransferHistoryStatus} value
 * @return {!proto.sgn.gateway.v1.TransferHistory} returns this
 */
proto.sgn.gateway.v1.TransferHistory.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional sgn.cbridge.v1.XferStatus refund_reason = 8;
 * @return {!proto.sgn.cbridge.v1.XferStatus}
 */
proto.sgn.gateway.v1.TransferHistory.prototype.getRefundReason = function() {
  return /** @type {!proto.sgn.cbridge.v1.XferStatus} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.sgn.cbridge.v1.XferStatus} value
 * @return {!proto.sgn.gateway.v1.TransferHistory} returns this
 */
proto.sgn.gateway.v1.TransferHistory.prototype.setRefundReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.LPHistory.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.LPHistory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.LPHistory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.LPHistory.toObject = function(includeInstance, msg) {
  var f, obj = {
    chain: (f = msg.getChain()) && proto.sgn.gateway.v1.Chain.toObject(includeInstance, f),
    token: (f = msg.getToken()) && proto.sgn.gateway.v1.TokenInfo.toObject(includeInstance, f),
    amount: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ts: jspb.Message.getFieldWithDefault(msg, 4, 0),
    blockTxLink: jspb.Message.getFieldWithDefault(msg, 5, ""),
    status: jspb.Message.getFieldWithDefault(msg, 6, 0),
    type: jspb.Message.getFieldWithDefault(msg, 7, 0),
    seqNum: jspb.Message.getFieldWithDefault(msg, 8, 0),
    methodType: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.LPHistory}
 */
proto.sgn.gateway.v1.LPHistory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.LPHistory;
  return proto.sgn.gateway.v1.LPHistory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.LPHistory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.LPHistory}
 */
proto.sgn.gateway.v1.LPHistory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.Chain;
      reader.readMessage(value,proto.sgn.gateway.v1.Chain.deserializeBinaryFromReader);
      msg.setChain(value);
      break;
    case 2:
      var value = new proto.sgn.gateway.v1.TokenInfo;
      reader.readMessage(value,proto.sgn.gateway.v1.TokenInfo.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTs(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockTxLink(value);
      break;
    case 6:
      var value = /** @type {!proto.sgn.cbridge.v1.LPHistoryStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 7:
      var value = /** @type {!proto.sgn.gateway.v1.LPType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSeqNum(value);
      break;
    case 9:
      var value = /** @type {!proto.sgn.gateway.v1.WithdrawMethodType} */ (reader.readEnum());
      msg.setMethodType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.LPHistory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.LPHistory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.LPHistory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.LPHistory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChain();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.Chain.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sgn.gateway.v1.TokenInfo.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTs();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getBlockTxLink();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getSeqNum();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getMethodType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * optional Chain chain = 1;
 * @return {?proto.sgn.gateway.v1.Chain}
 */
proto.sgn.gateway.v1.LPHistory.prototype.getChain = function() {
  return /** @type{?proto.sgn.gateway.v1.Chain} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.Chain, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.Chain|undefined} value
 * @return {!proto.sgn.gateway.v1.LPHistory} returns this
*/
proto.sgn.gateway.v1.LPHistory.prototype.setChain = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.LPHistory} returns this
 */
proto.sgn.gateway.v1.LPHistory.prototype.clearChain = function() {
  return this.setChain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.LPHistory.prototype.hasChain = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TokenInfo token = 2;
 * @return {?proto.sgn.gateway.v1.TokenInfo}
 */
proto.sgn.gateway.v1.LPHistory.prototype.getToken = function() {
  return /** @type{?proto.sgn.gateway.v1.TokenInfo} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.TokenInfo, 2));
};


/**
 * @param {?proto.sgn.gateway.v1.TokenInfo|undefined} value
 * @return {!proto.sgn.gateway.v1.LPHistory} returns this
*/
proto.sgn.gateway.v1.LPHistory.prototype.setToken = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.LPHistory} returns this
 */
proto.sgn.gateway.v1.LPHistory.prototype.clearToken = function() {
  return this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.LPHistory.prototype.hasToken = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string amount = 3;
 * @return {string}
 */
proto.sgn.gateway.v1.LPHistory.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.LPHistory} returns this
 */
proto.sgn.gateway.v1.LPHistory.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 ts = 4;
 * @return {number}
 */
proto.sgn.gateway.v1.LPHistory.prototype.getTs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.LPHistory} returns this
 */
proto.sgn.gateway.v1.LPHistory.prototype.setTs = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string block_tx_link = 5;
 * @return {string}
 */
proto.sgn.gateway.v1.LPHistory.prototype.getBlockTxLink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.LPHistory} returns this
 */
proto.sgn.gateway.v1.LPHistory.prototype.setBlockTxLink = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional sgn.cbridge.v1.LPHistoryStatus status = 6;
 * @return {!proto.sgn.cbridge.v1.LPHistoryStatus}
 */
proto.sgn.gateway.v1.LPHistory.prototype.getStatus = function() {
  return /** @type {!proto.sgn.cbridge.v1.LPHistoryStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.sgn.cbridge.v1.LPHistoryStatus} value
 * @return {!proto.sgn.gateway.v1.LPHistory} returns this
 */
proto.sgn.gateway.v1.LPHistory.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional LPType type = 7;
 * @return {!proto.sgn.gateway.v1.LPType}
 */
proto.sgn.gateway.v1.LPHistory.prototype.getType = function() {
  return /** @type {!proto.sgn.gateway.v1.LPType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.sgn.gateway.v1.LPType} value
 * @return {!proto.sgn.gateway.v1.LPHistory} returns this
 */
proto.sgn.gateway.v1.LPHistory.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional uint64 seq_num = 8;
 * @return {number}
 */
proto.sgn.gateway.v1.LPHistory.prototype.getSeqNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.LPHistory} returns this
 */
proto.sgn.gateway.v1.LPHistory.prototype.setSeqNum = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional WithdrawMethodType method_type = 9;
 * @return {!proto.sgn.gateway.v1.WithdrawMethodType}
 */
proto.sgn.gateway.v1.LPHistory.prototype.getMethodType = function() {
  return /** @type {!proto.sgn.gateway.v1.WithdrawMethodType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.sgn.gateway.v1.WithdrawMethodType} value
 * @return {!proto.sgn.gateway.v1.LPHistory} returns this
 */
proto.sgn.gateway.v1.LPHistory.prototype.setMethodType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.TransferHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.TransferHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.TransferHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.TransferHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    addr: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.TransferHistoryRequest}
 */
proto.sgn.gateway.v1.TransferHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.TransferHistoryRequest;
  return proto.sgn.gateway.v1.TransferHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.TransferHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.TransferHistoryRequest}
 */
proto.sgn.gateway.v1.TransferHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.TransferHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.TransferHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.TransferHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.TransferHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAddr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string next_page_token = 1;
 * @return {string}
 */
proto.sgn.gateway.v1.TransferHistoryRequest.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.TransferHistoryRequest} returns this
 */
proto.sgn.gateway.v1.TransferHistoryRequest.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 page_size = 2;
 * @return {number}
 */
proto.sgn.gateway.v1.TransferHistoryRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.TransferHistoryRequest} returns this
 */
proto.sgn.gateway.v1.TransferHistoryRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string addr = 3;
 * @return {string}
 */
proto.sgn.gateway.v1.TransferHistoryRequest.prototype.getAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.TransferHistoryRequest} returns this
 */
proto.sgn.gateway.v1.TransferHistoryRequest.prototype.setAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sgn.gateway.v1.TransferHistoryResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.TransferHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.TransferHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.TransferHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.TransferHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.sgn.gateway.v1.ErrMsg.toObject(includeInstance, f),
    historyList: jspb.Message.toObjectList(msg.getHistoryList(),
    proto.sgn.gateway.v1.TransferHistory.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    currentSize: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.TransferHistoryResponse}
 */
proto.sgn.gateway.v1.TransferHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.TransferHistoryResponse;
  return proto.sgn.gateway.v1.TransferHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.TransferHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.TransferHistoryResponse}
 */
proto.sgn.gateway.v1.TransferHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.ErrMsg;
      reader.readMessage(value,proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = new proto.sgn.gateway.v1.TransferHistory;
      reader.readMessage(value,proto.sgn.gateway.v1.TransferHistory.deserializeBinaryFromReader);
      msg.addHistory(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCurrentSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.TransferHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.TransferHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.TransferHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.TransferHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getHistoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sgn.gateway.v1.TransferHistory.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCurrentSize();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.TransferHistoryResponse.prototype.getErr = function() {
  return /** @type{?proto.sgn.gateway.v1.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.ErrMsg, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.ErrMsg|undefined} value
 * @return {!proto.sgn.gateway.v1.TransferHistoryResponse} returns this
*/
proto.sgn.gateway.v1.TransferHistoryResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.TransferHistoryResponse} returns this
 */
proto.sgn.gateway.v1.TransferHistoryResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.TransferHistoryResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated TransferHistory history = 2;
 * @return {!Array<!proto.sgn.gateway.v1.TransferHistory>}
 */
proto.sgn.gateway.v1.TransferHistoryResponse.prototype.getHistoryList = function() {
  return /** @type{!Array<!proto.sgn.gateway.v1.TransferHistory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sgn.gateway.v1.TransferHistory, 2));
};


/**
 * @param {!Array<!proto.sgn.gateway.v1.TransferHistory>} value
 * @return {!proto.sgn.gateway.v1.TransferHistoryResponse} returns this
*/
proto.sgn.gateway.v1.TransferHistoryResponse.prototype.setHistoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sgn.gateway.v1.TransferHistory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sgn.gateway.v1.TransferHistory}
 */
proto.sgn.gateway.v1.TransferHistoryResponse.prototype.addHistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sgn.gateway.v1.TransferHistory, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.gateway.v1.TransferHistoryResponse} returns this
 */
proto.sgn.gateway.v1.TransferHistoryResponse.prototype.clearHistoryList = function() {
  return this.setHistoryList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.sgn.gateway.v1.TransferHistoryResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.TransferHistoryResponse} returns this
 */
proto.sgn.gateway.v1.TransferHistoryResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 current_size = 4;
 * @return {number}
 */
proto.sgn.gateway.v1.TransferHistoryResponse.prototype.getCurrentSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.TransferHistoryResponse} returns this
 */
proto.sgn.gateway.v1.TransferHistoryResponse.prototype.setCurrentSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.LPHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.LPHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.LPHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.LPHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    addr: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.LPHistoryRequest}
 */
proto.sgn.gateway.v1.LPHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.LPHistoryRequest;
  return proto.sgn.gateway.v1.LPHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.LPHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.LPHistoryRequest}
 */
proto.sgn.gateway.v1.LPHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.LPHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.LPHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.LPHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.LPHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAddr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string next_page_token = 1;
 * @return {string}
 */
proto.sgn.gateway.v1.LPHistoryRequest.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.LPHistoryRequest} returns this
 */
proto.sgn.gateway.v1.LPHistoryRequest.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 page_size = 2;
 * @return {number}
 */
proto.sgn.gateway.v1.LPHistoryRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.LPHistoryRequest} returns this
 */
proto.sgn.gateway.v1.LPHistoryRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string addr = 3;
 * @return {string}
 */
proto.sgn.gateway.v1.LPHistoryRequest.prototype.getAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.LPHistoryRequest} returns this
 */
proto.sgn.gateway.v1.LPHistoryRequest.prototype.setAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sgn.gateway.v1.LPHistoryResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.LPHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.LPHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.LPHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.LPHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.sgn.gateway.v1.ErrMsg.toObject(includeInstance, f),
    historyList: jspb.Message.toObjectList(msg.getHistoryList(),
    proto.sgn.gateway.v1.LPHistory.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    currentSize: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.LPHistoryResponse}
 */
proto.sgn.gateway.v1.LPHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.LPHistoryResponse;
  return proto.sgn.gateway.v1.LPHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.LPHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.LPHistoryResponse}
 */
proto.sgn.gateway.v1.LPHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.ErrMsg;
      reader.readMessage(value,proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = new proto.sgn.gateway.v1.LPHistory;
      reader.readMessage(value,proto.sgn.gateway.v1.LPHistory.deserializeBinaryFromReader);
      msg.addHistory(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCurrentSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.LPHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.LPHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.LPHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.LPHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getHistoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.sgn.gateway.v1.LPHistory.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCurrentSize();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.LPHistoryResponse.prototype.getErr = function() {
  return /** @type{?proto.sgn.gateway.v1.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.ErrMsg, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.ErrMsg|undefined} value
 * @return {!proto.sgn.gateway.v1.LPHistoryResponse} returns this
*/
proto.sgn.gateway.v1.LPHistoryResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.LPHistoryResponse} returns this
 */
proto.sgn.gateway.v1.LPHistoryResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.LPHistoryResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated LPHistory history = 2;
 * @return {!Array<!proto.sgn.gateway.v1.LPHistory>}
 */
proto.sgn.gateway.v1.LPHistoryResponse.prototype.getHistoryList = function() {
  return /** @type{!Array<!proto.sgn.gateway.v1.LPHistory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sgn.gateway.v1.LPHistory, 2));
};


/**
 * @param {!Array<!proto.sgn.gateway.v1.LPHistory>} value
 * @return {!proto.sgn.gateway.v1.LPHistoryResponse} returns this
*/
proto.sgn.gateway.v1.LPHistoryResponse.prototype.setHistoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.sgn.gateway.v1.LPHistory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sgn.gateway.v1.LPHistory}
 */
proto.sgn.gateway.v1.LPHistoryResponse.prototype.addHistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.sgn.gateway.v1.LPHistory, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.gateway.v1.LPHistoryResponse} returns this
 */
proto.sgn.gateway.v1.LPHistoryResponse.prototype.clearHistoryList = function() {
  return this.setHistoryList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.sgn.gateway.v1.LPHistoryResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.LPHistoryResponse} returns this
 */
proto.sgn.gateway.v1.LPHistoryResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 current_size = 4;
 * @return {number}
 */
proto.sgn.gateway.v1.LPHistoryResponse.prototype.getCurrentSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.LPHistoryResponse} returns this
 */
proto.sgn.gateway.v1.LPHistoryResponse.prototype.setCurrentSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.RewardingDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.RewardingDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.RewardingDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.RewardingDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    addr: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.RewardingDataRequest}
 */
proto.sgn.gateway.v1.RewardingDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.RewardingDataRequest;
  return proto.sgn.gateway.v1.RewardingDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.RewardingDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.RewardingDataRequest}
 */
proto.sgn.gateway.v1.RewardingDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.RewardingDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.RewardingDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.RewardingDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.RewardingDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string addr = 1;
 * @return {string}
 */
proto.sgn.gateway.v1.RewardingDataRequest.prototype.getAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.RewardingDataRequest} returns this
 */
proto.sgn.gateway.v1.RewardingDataRequest.prototype.setAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.Reward.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.Reward.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.Reward} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.Reward.toObject = function(includeInstance, msg) {
  var f, obj = {
    amt: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    token: (f = msg.getToken()) && sgn_cbridge_v1_query_pb.Token.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.Reward}
 */
proto.sgn.gateway.v1.Reward.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.Reward;
  return proto.sgn.gateway.v1.Reward.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.Reward} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.Reward}
 */
proto.sgn.gateway.v1.Reward.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAmt(value);
      break;
    case 2:
      var value = new sgn_cbridge_v1_query_pb.Token;
      reader.readMessage(value,sgn_cbridge_v1_query_pb.Token.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.Reward.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.Reward.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.Reward} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.Reward.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmt();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sgn_cbridge_v1_query_pb.Token.serializeBinaryToWriter
    );
  }
};


/**
 * optional double amt = 1;
 * @return {number}
 */
proto.sgn.gateway.v1.Reward.prototype.getAmt = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.Reward} returns this
 */
proto.sgn.gateway.v1.Reward.prototype.setAmt = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional sgn.cbridge.v1.Token token = 2;
 * @return {?proto.sgn.cbridge.v1.Token}
 */
proto.sgn.gateway.v1.Reward.prototype.getToken = function() {
  return /** @type{?proto.sgn.cbridge.v1.Token} */ (
    jspb.Message.getWrapperField(this, sgn_cbridge_v1_query_pb.Token, 2));
};


/**
 * @param {?proto.sgn.cbridge.v1.Token|undefined} value
 * @return {!proto.sgn.gateway.v1.Reward} returns this
*/
proto.sgn.gateway.v1.Reward.prototype.setToken = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.Reward} returns this
 */
proto.sgn.gateway.v1.Reward.prototype.clearToken = function() {
  return this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.Reward.prototype.hasToken = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sgn.gateway.v1.RewardingDataResponse.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.RewardingDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.RewardingDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.RewardingDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.RewardingDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.sgn.gateway.v1.ErrMsg.toObject(includeInstance, f),
    usdPriceMap: (f = msg.getUsdPriceMap()) ? f.toObject(includeInstance, undefined) : [],
    historicalCumulativeRewardsList: jspb.Message.toObjectList(msg.getHistoricalCumulativeRewardsList(),
    proto.sgn.gateway.v1.Reward.toObject, includeInstance),
    unlockedCumulativeRewardsList: jspb.Message.toObjectList(msg.getUnlockedCumulativeRewardsList(),
    proto.sgn.gateway.v1.Reward.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.RewardingDataResponse}
 */
proto.sgn.gateway.v1.RewardingDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.RewardingDataResponse;
  return proto.sgn.gateway.v1.RewardingDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.RewardingDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.RewardingDataResponse}
 */
proto.sgn.gateway.v1.RewardingDataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.ErrMsg;
      reader.readMessage(value,proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = msg.getUsdPriceMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readDouble, null, "", 0.0);
         });
      break;
    case 3:
      var value = new proto.sgn.gateway.v1.Reward;
      reader.readMessage(value,proto.sgn.gateway.v1.Reward.deserializeBinaryFromReader);
      msg.addHistoricalCumulativeRewards(value);
      break;
    case 4:
      var value = new proto.sgn.gateway.v1.Reward;
      reader.readMessage(value,proto.sgn.gateway.v1.Reward.deserializeBinaryFromReader);
      msg.addUnlockedCumulativeRewards(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.RewardingDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.RewardingDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.RewardingDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.RewardingDataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getUsdPriceMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeDouble);
  }
  f = message.getHistoricalCumulativeRewardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.sgn.gateway.v1.Reward.serializeBinaryToWriter
    );
  }
  f = message.getUnlockedCumulativeRewardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.sgn.gateway.v1.Reward.serializeBinaryToWriter
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.RewardingDataResponse.prototype.getErr = function() {
  return /** @type{?proto.sgn.gateway.v1.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.ErrMsg, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.ErrMsg|undefined} value
 * @return {!proto.sgn.gateway.v1.RewardingDataResponse} returns this
*/
proto.sgn.gateway.v1.RewardingDataResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.RewardingDataResponse} returns this
 */
proto.sgn.gateway.v1.RewardingDataResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.RewardingDataResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, double> usd_price = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.sgn.gateway.v1.RewardingDataResponse.prototype.getUsdPriceMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sgn.gateway.v1.RewardingDataResponse} returns this
 */
proto.sgn.gateway.v1.RewardingDataResponse.prototype.clearUsdPriceMap = function() {
  this.getUsdPriceMap().clear();
  return this;};


/**
 * repeated Reward historical_cumulative_rewards = 3;
 * @return {!Array<!proto.sgn.gateway.v1.Reward>}
 */
proto.sgn.gateway.v1.RewardingDataResponse.prototype.getHistoricalCumulativeRewardsList = function() {
  return /** @type{!Array<!proto.sgn.gateway.v1.Reward>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sgn.gateway.v1.Reward, 3));
};


/**
 * @param {!Array<!proto.sgn.gateway.v1.Reward>} value
 * @return {!proto.sgn.gateway.v1.RewardingDataResponse} returns this
*/
proto.sgn.gateway.v1.RewardingDataResponse.prototype.setHistoricalCumulativeRewardsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.sgn.gateway.v1.Reward=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sgn.gateway.v1.Reward}
 */
proto.sgn.gateway.v1.RewardingDataResponse.prototype.addHistoricalCumulativeRewards = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.sgn.gateway.v1.Reward, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.gateway.v1.RewardingDataResponse} returns this
 */
proto.sgn.gateway.v1.RewardingDataResponse.prototype.clearHistoricalCumulativeRewardsList = function() {
  return this.setHistoricalCumulativeRewardsList([]);
};


/**
 * repeated Reward unlocked_cumulative_rewards = 4;
 * @return {!Array<!proto.sgn.gateway.v1.Reward>}
 */
proto.sgn.gateway.v1.RewardingDataResponse.prototype.getUnlockedCumulativeRewardsList = function() {
  return /** @type{!Array<!proto.sgn.gateway.v1.Reward>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sgn.gateway.v1.Reward, 4));
};


/**
 * @param {!Array<!proto.sgn.gateway.v1.Reward>} value
 * @return {!proto.sgn.gateway.v1.RewardingDataResponse} returns this
*/
proto.sgn.gateway.v1.RewardingDataResponse.prototype.setUnlockedCumulativeRewardsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.sgn.gateway.v1.Reward=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sgn.gateway.v1.Reward}
 */
proto.sgn.gateway.v1.RewardingDataResponse.prototype.addUnlockedCumulativeRewards = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.sgn.gateway.v1.Reward, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.gateway.v1.RewardingDataResponse} returns this
 */
proto.sgn.gateway.v1.RewardingDataResponse.prototype.clearUnlockedCumulativeRewardsList = function() {
  return this.setUnlockedCumulativeRewardsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.UpdateChainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.UpdateChainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.UpdateChainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.UpdateChainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chain: (f = msg.getChain()) && proto.sgn.gateway.v1.Chain.toObject(includeInstance, f),
    txUrlPrefix: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sig: msg.getSig_asB64(),
    addr: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.UpdateChainRequest}
 */
proto.sgn.gateway.v1.UpdateChainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.UpdateChainRequest;
  return proto.sgn.gateway.v1.UpdateChainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.UpdateChainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.UpdateChainRequest}
 */
proto.sgn.gateway.v1.UpdateChainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.Chain;
      reader.readMessage(value,proto.sgn.gateway.v1.Chain.deserializeBinaryFromReader);
      msg.setChain(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxUrlPrefix(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSig(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.UpdateChainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.UpdateChainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.UpdateChainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.UpdateChainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChain();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.Chain.serializeBinaryToWriter
    );
  }
  f = message.getTxUrlPrefix();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSig_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getAddr();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional Chain chain = 1;
 * @return {?proto.sgn.gateway.v1.Chain}
 */
proto.sgn.gateway.v1.UpdateChainRequest.prototype.getChain = function() {
  return /** @type{?proto.sgn.gateway.v1.Chain} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.Chain, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.Chain|undefined} value
 * @return {!proto.sgn.gateway.v1.UpdateChainRequest} returns this
*/
proto.sgn.gateway.v1.UpdateChainRequest.prototype.setChain = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.UpdateChainRequest} returns this
 */
proto.sgn.gateway.v1.UpdateChainRequest.prototype.clearChain = function() {
  return this.setChain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.UpdateChainRequest.prototype.hasChain = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tx_url_prefix = 2;
 * @return {string}
 */
proto.sgn.gateway.v1.UpdateChainRequest.prototype.getTxUrlPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.UpdateChainRequest} returns this
 */
proto.sgn.gateway.v1.UpdateChainRequest.prototype.setTxUrlPrefix = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes sig = 3;
 * @return {!(string|Uint8Array)}
 */
proto.sgn.gateway.v1.UpdateChainRequest.prototype.getSig = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes sig = 3;
 * This is a type-conversion wrapper around `getSig()`
 * @return {string}
 */
proto.sgn.gateway.v1.UpdateChainRequest.prototype.getSig_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSig()));
};


/**
 * optional bytes sig = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSig()`
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.UpdateChainRequest.prototype.getSig_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSig()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sgn.gateway.v1.UpdateChainRequest} returns this
 */
proto.sgn.gateway.v1.UpdateChainRequest.prototype.setSig = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional string addr = 4;
 * @return {string}
 */
proto.sgn.gateway.v1.UpdateChainRequest.prototype.getAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.UpdateChainRequest} returns this
 */
proto.sgn.gateway.v1.UpdateChainRequest.prototype.setAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.UpdateChainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.UpdateChainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.UpdateChainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.UpdateChainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.sgn.gateway.v1.ErrMsg.toObject(includeInstance, f),
    chain: (f = msg.getChain()) && proto.sgn.gateway.v1.Chain.toObject(includeInstance, f),
    txUrlPrefix: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.UpdateChainResponse}
 */
proto.sgn.gateway.v1.UpdateChainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.UpdateChainResponse;
  return proto.sgn.gateway.v1.UpdateChainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.UpdateChainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.UpdateChainResponse}
 */
proto.sgn.gateway.v1.UpdateChainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.ErrMsg;
      reader.readMessage(value,proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = new proto.sgn.gateway.v1.Chain;
      reader.readMessage(value,proto.sgn.gateway.v1.Chain.deserializeBinaryFromReader);
      msg.setChain(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxUrlPrefix(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.UpdateChainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.UpdateChainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.UpdateChainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.UpdateChainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getChain();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sgn.gateway.v1.Chain.serializeBinaryToWriter
    );
  }
  f = message.getTxUrlPrefix();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.UpdateChainResponse.prototype.getErr = function() {
  return /** @type{?proto.sgn.gateway.v1.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.ErrMsg, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.ErrMsg|undefined} value
 * @return {!proto.sgn.gateway.v1.UpdateChainResponse} returns this
*/
proto.sgn.gateway.v1.UpdateChainResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.UpdateChainResponse} returns this
 */
proto.sgn.gateway.v1.UpdateChainResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.UpdateChainResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Chain chain = 2;
 * @return {?proto.sgn.gateway.v1.Chain}
 */
proto.sgn.gateway.v1.UpdateChainResponse.prototype.getChain = function() {
  return /** @type{?proto.sgn.gateway.v1.Chain} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.Chain, 2));
};


/**
 * @param {?proto.sgn.gateway.v1.Chain|undefined} value
 * @return {!proto.sgn.gateway.v1.UpdateChainResponse} returns this
*/
proto.sgn.gateway.v1.UpdateChainResponse.prototype.setChain = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.UpdateChainResponse} returns this
 */
proto.sgn.gateway.v1.UpdateChainResponse.prototype.clearChain = function() {
  return this.setChain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.UpdateChainResponse.prototype.hasChain = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string tx_url_prefix = 3;
 * @return {string}
 */
proto.sgn.gateway.v1.UpdateChainResponse.prototype.getTxUrlPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.UpdateChainResponse} returns this
 */
proto.sgn.gateway.v1.UpdateChainResponse.prototype.setTxUrlPrefix = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.UpdateTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.UpdateTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.UpdateTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.UpdateTokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tokenSymbol: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tokenName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tokenIcon: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sig: msg.getSig_asB64(),
    addr: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.UpdateTokenRequest}
 */
proto.sgn.gateway.v1.UpdateTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.UpdateTokenRequest;
  return proto.sgn.gateway.v1.UpdateTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.UpdateTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.UpdateTokenRequest}
 */
proto.sgn.gateway.v1.UpdateTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChainId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenSymbol(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenIcon(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSig(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.UpdateTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.UpdateTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.UpdateTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.UpdateTokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTokenSymbol();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTokenName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTokenIcon();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSig_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getAddr();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional uint32 chain_id = 1;
 * @return {number}
 */
proto.sgn.gateway.v1.UpdateTokenRequest.prototype.getChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.sgn.gateway.v1.UpdateTokenRequest} returns this
 */
proto.sgn.gateway.v1.UpdateTokenRequest.prototype.setChainId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string token_symbol = 2;
 * @return {string}
 */
proto.sgn.gateway.v1.UpdateTokenRequest.prototype.getTokenSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.UpdateTokenRequest} returns this
 */
proto.sgn.gateway.v1.UpdateTokenRequest.prototype.setTokenSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string token_name = 3;
 * @return {string}
 */
proto.sgn.gateway.v1.UpdateTokenRequest.prototype.getTokenName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.UpdateTokenRequest} returns this
 */
proto.sgn.gateway.v1.UpdateTokenRequest.prototype.setTokenName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string token_icon = 4;
 * @return {string}
 */
proto.sgn.gateway.v1.UpdateTokenRequest.prototype.getTokenIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.UpdateTokenRequest} returns this
 */
proto.sgn.gateway.v1.UpdateTokenRequest.prototype.setTokenIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bytes sig = 5;
 * @return {!(string|Uint8Array)}
 */
proto.sgn.gateway.v1.UpdateTokenRequest.prototype.getSig = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes sig = 5;
 * This is a type-conversion wrapper around `getSig()`
 * @return {string}
 */
proto.sgn.gateway.v1.UpdateTokenRequest.prototype.getSig_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSig()));
};


/**
 * optional bytes sig = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSig()`
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.UpdateTokenRequest.prototype.getSig_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSig()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.sgn.gateway.v1.UpdateTokenRequest} returns this
 */
proto.sgn.gateway.v1.UpdateTokenRequest.prototype.setSig = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional string addr = 6;
 * @return {string}
 */
proto.sgn.gateway.v1.UpdateTokenRequest.prototype.getAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.UpdateTokenRequest} returns this
 */
proto.sgn.gateway.v1.UpdateTokenRequest.prototype.setAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.UpdateTokenResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.UpdateTokenResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.UpdateTokenResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.UpdateTokenResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.sgn.gateway.v1.ErrMsg.toObject(includeInstance, f),
    token: (f = msg.getToken()) && proto.sgn.gateway.v1.TokenInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.UpdateTokenResponse}
 */
proto.sgn.gateway.v1.UpdateTokenResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.UpdateTokenResponse;
  return proto.sgn.gateway.v1.UpdateTokenResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.UpdateTokenResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.UpdateTokenResponse}
 */
proto.sgn.gateway.v1.UpdateTokenResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.ErrMsg;
      reader.readMessage(value,proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = new proto.sgn.gateway.v1.TokenInfo;
      reader.readMessage(value,proto.sgn.gateway.v1.TokenInfo.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.UpdateTokenResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.UpdateTokenResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.UpdateTokenResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.UpdateTokenResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.sgn.gateway.v1.TokenInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.UpdateTokenResponse.prototype.getErr = function() {
  return /** @type{?proto.sgn.gateway.v1.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.ErrMsg, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.ErrMsg|undefined} value
 * @return {!proto.sgn.gateway.v1.UpdateTokenResponse} returns this
*/
proto.sgn.gateway.v1.UpdateTokenResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.UpdateTokenResponse} returns this
 */
proto.sgn.gateway.v1.UpdateTokenResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.UpdateTokenResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TokenInfo token = 2;
 * @return {?proto.sgn.gateway.v1.TokenInfo}
 */
proto.sgn.gateway.v1.UpdateTokenResponse.prototype.getToken = function() {
  return /** @type{?proto.sgn.gateway.v1.TokenInfo} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.TokenInfo, 2));
};


/**
 * @param {?proto.sgn.gateway.v1.TokenInfo|undefined} value
 * @return {!proto.sgn.gateway.v1.UpdateTokenResponse} returns this
*/
proto.sgn.gateway.v1.UpdateTokenResponse.prototype.setToken = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.UpdateTokenResponse} returns this
 */
proto.sgn.gateway.v1.UpdateTokenResponse.prototype.clearToken = function() {
  return this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.UpdateTokenResponse.prototype.hasToken = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.StakingConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.StakingConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.StakingConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.StakingConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.StakingConfigRequest}
 */
proto.sgn.gateway.v1.StakingConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.StakingConfigRequest;
  return proto.sgn.gateway.v1.StakingConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.StakingConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.StakingConfigRequest}
 */
proto.sgn.gateway.v1.StakingConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.StakingConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.StakingConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.StakingConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.StakingConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.StakingConfigResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.StakingConfigResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.StakingConfigResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.StakingConfigResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    viewerContract: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stakingContract: jspb.Message.getFieldWithDefault(msg, 2, ""),
    stakingRewardContract: jspb.Message.getFieldWithDefault(msg, 3, ""),
    celrContract: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.StakingConfigResponse}
 */
proto.sgn.gateway.v1.StakingConfigResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.StakingConfigResponse;
  return proto.sgn.gateway.v1.StakingConfigResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.StakingConfigResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.StakingConfigResponse}
 */
proto.sgn.gateway.v1.StakingConfigResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setViewerContract(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStakingContract(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStakingRewardContract(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCelrContract(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.StakingConfigResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.StakingConfigResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.StakingConfigResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.StakingConfigResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getViewerContract();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStakingContract();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStakingRewardContract();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCelrContract();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string viewer_contract = 1;
 * @return {string}
 */
proto.sgn.gateway.v1.StakingConfigResponse.prototype.getViewerContract = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.StakingConfigResponse} returns this
 */
proto.sgn.gateway.v1.StakingConfigResponse.prototype.setViewerContract = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string staking_contract = 2;
 * @return {string}
 */
proto.sgn.gateway.v1.StakingConfigResponse.prototype.getStakingContract = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.StakingConfigResponse} returns this
 */
proto.sgn.gateway.v1.StakingConfigResponse.prototype.setStakingContract = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string staking_reward_contract = 3;
 * @return {string}
 */
proto.sgn.gateway.v1.StakingConfigResponse.prototype.getStakingRewardContract = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.StakingConfigResponse} returns this
 */
proto.sgn.gateway.v1.StakingConfigResponse.prototype.setStakingRewardContract = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string celr_contract = 4;
 * @return {string}
 */
proto.sgn.gateway.v1.StakingConfigResponse.prototype.getCelrContract = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.StakingConfigResponse} returns this
 */
proto.sgn.gateway.v1.StakingConfigResponse.prototype.setCelrContract = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.UnlockStakingRewardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.UnlockStakingRewardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.UnlockStakingRewardRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.UnlockStakingRewardRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegatorAddress: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.UnlockStakingRewardRequest}
 */
proto.sgn.gateway.v1.UnlockStakingRewardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.UnlockStakingRewardRequest;
  return proto.sgn.gateway.v1.UnlockStakingRewardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.UnlockStakingRewardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.UnlockStakingRewardRequest}
 */
proto.sgn.gateway.v1.UnlockStakingRewardRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDelegatorAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.UnlockStakingRewardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.UnlockStakingRewardRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.UnlockStakingRewardRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.UnlockStakingRewardRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelegatorAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string delegator_address = 1;
 * @return {string}
 */
proto.sgn.gateway.v1.UnlockStakingRewardRequest.prototype.getDelegatorAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.UnlockStakingRewardRequest} returns this
 */
proto.sgn.gateway.v1.UnlockStakingRewardRequest.prototype.setDelegatorAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.UnlockStakingRewardResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.UnlockStakingRewardResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.UnlockStakingRewardResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.UnlockStakingRewardResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.sgn.gateway.v1.ErrMsg.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.UnlockStakingRewardResponse}
 */
proto.sgn.gateway.v1.UnlockStakingRewardResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.UnlockStakingRewardResponse;
  return proto.sgn.gateway.v1.UnlockStakingRewardResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.UnlockStakingRewardResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.UnlockStakingRewardResponse}
 */
proto.sgn.gateway.v1.UnlockStakingRewardResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.ErrMsg;
      reader.readMessage(value,proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.UnlockStakingRewardResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.UnlockStakingRewardResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.UnlockStakingRewardResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.UnlockStakingRewardResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.UnlockStakingRewardResponse.prototype.getErr = function() {
  return /** @type{?proto.sgn.gateway.v1.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.ErrMsg, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.ErrMsg|undefined} value
 * @return {!proto.sgn.gateway.v1.UnlockStakingRewardResponse} returns this
*/
proto.sgn.gateway.v1.UnlockStakingRewardResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.UnlockStakingRewardResponse} returns this
 */
proto.sgn.gateway.v1.UnlockStakingRewardResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.UnlockStakingRewardResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.GetStakingRewardDetailsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.GetStakingRewardDetailsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegatorAddress: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.GetStakingRewardDetailsRequest}
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.GetStakingRewardDetailsRequest;
  return proto.sgn.gateway.v1.GetStakingRewardDetailsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.GetStakingRewardDetailsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.GetStakingRewardDetailsRequest}
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDelegatorAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.GetStakingRewardDetailsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.GetStakingRewardDetailsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelegatorAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string delegator_address = 1;
 * @return {string}
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsRequest.prototype.getDelegatorAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.GetStakingRewardDetailsRequest} returns this
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsRequest.prototype.setDelegatorAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.GetStakingRewardDetailsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.GetStakingRewardDetailsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.sgn.gateway.v1.ErrMsg.toObject(includeInstance, f),
    detail: (f = msg.getDetail()) && sgn_distribution_v1_distribution_pb.StakingRewardClaimInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.GetStakingRewardDetailsResponse}
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.GetStakingRewardDetailsResponse;
  return proto.sgn.gateway.v1.GetStakingRewardDetailsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.GetStakingRewardDetailsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.GetStakingRewardDetailsResponse}
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.ErrMsg;
      reader.readMessage(value,proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = new sgn_distribution_v1_distribution_pb.StakingRewardClaimInfo;
      reader.readMessage(value,sgn_distribution_v1_distribution_pb.StakingRewardClaimInfo.deserializeBinaryFromReader);
      msg.setDetail(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.GetStakingRewardDetailsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.GetStakingRewardDetailsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getDetail();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sgn_distribution_v1_distribution_pb.StakingRewardClaimInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsResponse.prototype.getErr = function() {
  return /** @type{?proto.sgn.gateway.v1.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.ErrMsg, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.ErrMsg|undefined} value
 * @return {!proto.sgn.gateway.v1.GetStakingRewardDetailsResponse} returns this
*/
proto.sgn.gateway.v1.GetStakingRewardDetailsResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.GetStakingRewardDetailsResponse} returns this
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional sgn.distribution.v1.StakingRewardClaimInfo detail = 2;
 * @return {?proto.sgn.distribution.v1.StakingRewardClaimInfo}
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsResponse.prototype.getDetail = function() {
  return /** @type{?proto.sgn.distribution.v1.StakingRewardClaimInfo} */ (
    jspb.Message.getWrapperField(this, sgn_distribution_v1_distribution_pb.StakingRewardClaimInfo, 2));
};


/**
 * @param {?proto.sgn.distribution.v1.StakingRewardClaimInfo|undefined} value
 * @return {!proto.sgn.gateway.v1.GetStakingRewardDetailsResponse} returns this
*/
proto.sgn.gateway.v1.GetStakingRewardDetailsResponse.prototype.setDetail = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.GetStakingRewardDetailsResponse} returns this
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsResponse.prototype.clearDetail = function() {
  return this.setDetail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.GetStakingRewardDetailsResponse.prototype.hasDetail = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    tokenSymbol: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest}
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest;
  return proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest}
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setChainIdsList(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenSymbol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainIdsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      1,
      f
    );
  }
  f = message.getTokenSymbol();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated uint32 chain_ids = 1;
 * @return {!Array<number>}
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest.prototype.getChainIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest} returns this
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest.prototype.setChainIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest} returns this
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest.prototype.addChainIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest} returns this
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest.prototype.clearChainIdsList = function() {
  return this.setChainIdsList([]);
};


/**
 * optional string token_symbol = 2;
 * @return {string}
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest.prototype.getTokenSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest} returns this
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceRequest.prototype.setTokenSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.sgn.gateway.v1.ErrMsg.toObject(includeInstance, f),
    totalLiqMap: (f = msg.getTotalLiqMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse}
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse;
  return proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse}
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sgn.gateway.v1.ErrMsg;
      reader.readMessage(value,proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = msg.getTotalLiqMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readString, null, 0, "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter
    );
  }
  f = message.getTotalLiqMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional ErrMsg err = 1;
 * @return {?proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse.prototype.getErr = function() {
  return /** @type{?proto.sgn.gateway.v1.ErrMsg} */ (
    jspb.Message.getWrapperField(this, proto.sgn.gateway.v1.ErrMsg, 1));
};


/**
 * @param {?proto.sgn.gateway.v1.ErrMsg|undefined} value
 * @return {!proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse} returns this
*/
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse} returns this
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<uint64, string> total_liq = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,string>}
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse.prototype.getTotalLiqMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse} returns this
 */
proto.sgn.gateway.v1.GetTotalLiquidityProviderTokenBalanceResponse.prototype.clearTotalLiqMap = function() {
  this.getTotalLiqMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sgn.gateway.v1.ErrMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.sgn.gateway.v1.ErrMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sgn.gateway.v1.ErrMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.ErrMsg.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.ErrMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sgn.gateway.v1.ErrMsg;
  return proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sgn.gateway.v1.ErrMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sgn.gateway.v1.ErrMsg}
 */
proto.sgn.gateway.v1.ErrMsg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sgn.gateway.v1.ErrCode} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sgn.gateway.v1.ErrMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sgn.gateway.v1.ErrMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sgn.gateway.v1.ErrMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ErrCode code = 1;
 * @return {!proto.sgn.gateway.v1.ErrCode}
 */
proto.sgn.gateway.v1.ErrMsg.prototype.getCode = function() {
  return /** @type {!proto.sgn.gateway.v1.ErrCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sgn.gateway.v1.ErrCode} value
 * @return {!proto.sgn.gateway.v1.ErrMsg} returns this
 */
proto.sgn.gateway.v1.ErrMsg.prototype.setCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.sgn.gateway.v1.ErrMsg.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.sgn.gateway.v1.ErrMsg} returns this
 */
proto.sgn.gateway.v1.ErrMsg.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.sgn.gateway.v1.TransferType = {
  TRANSFER_TYPE_UNKNOWN: 0,
  TRANSFER_TYPE_SEND: 1,
  TRANSFER_TYPE_REFUND: 2
};

/**
 * @enum {number}
 */
proto.sgn.gateway.v1.LPType = {
  LP_TYPE_UNKNOWN: 0,
  LP_TYPE_ADD: 1,
  LP_TYPE_REMOVE: 2
};

/**
 * @enum {number}
 */
proto.sgn.gateway.v1.WithdrawMethodType = {
  WD_METHOD_TYPE_UNDEFINED: 0,
  WD_METHOD_TYPE_ONE_RM: 1,
  WD_METHOD_TYPE_ALL_IN_ONE: 2,
  WD_METHOD_TYPE_STAKING_CLAIM: 3
};

/**
 * @enum {number}
 */
proto.sgn.gateway.v1.ErrCode = {
  ERROR_CODE_UNDEFINED: 0,
  ERROR_CODE_COMMON: 500,
  ERROR_NO_TOKEN_ON_DST_CHAIN: 1001,
  ERROR_NO_TOKEN_ON_SRC_CHAIN: 1002
};

goog.object.extend(exports, proto.sgn.gateway.v1);
