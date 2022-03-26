// Use any RPC framework of your choice
const axios = require('axios');
const dotenv = require('dotenv');
const { base64 } = require('ethers/lib/utils.js');

const gatewayPb = require('../ts-proto/gateway/gateway_pb.js');
const cbridgeTxPb = require('../ts-proto/sgn/cbridge/v1/tx_pb.js');

dotenv.config();

/**
 * Requests refund via the cBridge REST API.
 *
 * @param transferId https://cbridge-docs.celer.network/developer/api-reference/contract-send#transferid-generation
 * @param estimatedReceivedAmt estimated amount of refund
 */
const requestRefund = async (transferId, estimatedReceivedAmt) => {
  const timestamp = Math.floor(Date.now() / 1000);
  const withdrawReqProto = new cbridgeTxPb.WithdrawReq();
  withdrawReqProto.setXferId(transferId);
  withdrawReqProto.setReqId(timestamp);
  withdrawReqProto.setWithdrawType(cbridgeTxPb.WithdrawType.WITHDRAW_TYPE_REFUND_TRANSFER);

  const req = {
    withdraw_req: base64.encode(withdrawReqProto.serializeBinary() || ''),
    estimated_received_amt: estimatedReceivedAmt,
    method_type: gatewayPb.WithdrawMethodType.WD_METHOD_TYPE_ALL_IN_ONE
  };

  return (
    axios
      // Replace CBRIDGE_GATEWAY_URL
      .post(`${process.env.CBRIDGE_GATEWAY_URL}/v1/withdrawLiquidity`, {
        ...req
      })
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        console.log('Error:', e);
      })
  );
};

// Replace with your input and uncomment
// requestRefund('TRANSFER_ID', ESTIMATED_RECEIVED_AMT);
