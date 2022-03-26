// Use any RPC framework of your choice
import axios from 'axios';
import dotenv from 'dotenv';
import { BigNumberish } from 'ethers';
import { base64 } from 'ethers/lib/utils';

import { WithdrawMethodType } from '../ts-proto/gateway/gateway_pb';
import { WithdrawReq, WithdrawType } from '../ts-proto/sgn/cbridge/v1/tx_pb';

dotenv.config();

/**
 * Requests refund via the cBridge REST API.
 *
 * @param transferId https://cbridge-docs.celer.network/developer/api-reference/contract-send#transferid-generation
 * @param estimatedReceivedAmt estimated amount of refund
 */
export const requestRefund = async (transferId: string, estimatedReceivedAmt: BigNumberish): Promise<any> => {
  const timestamp = Math.floor(Date.now() / 1000);
  const withdrawReqProto = new WithdrawReq();
  withdrawReqProto.setXferId(transferId);
  withdrawReqProto.setReqId(timestamp);
  withdrawReqProto.setWithdrawType(WithdrawType.WITHDRAW_TYPE_REFUND_TRANSFER);

  const req = {
    withdraw_req: base64.encode(withdrawReqProto.serializeBinary() || ''),
    estimated_received_amt: estimatedReceivedAmt,
    method_type: WithdrawMethodType.WD_METHOD_TYPE_ALL_IN_ONE
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
