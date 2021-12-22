// if use other RPC frame instead of axios, ignore this
import axios from "axios";

// sign the request message with ethers utils
import { ethers } from "ethers";
import { base64 } from "ethers/lib/utils";

import {
  WithdrawReq,
  WithdrawType,
} from "../ts-proto/sgn/cbridge/v1/tx_pb";
import { WithdrawMethodType } from "../ts-proto/sgn/gateway/v1/gateway_pb";

/* eslint-disable camelcase */

/* transfer_id: https://cbridge-docs.celer.network/developer/api-reference/contract-send#transferid-generation
   estimated: string type of BigAmount
   signer: signer of Web3Provider, https://docs.ethers.io/v4/cookbook-providers.html 
*/
export const requestRestRefund = async (transfer_id, estimated): Promise<any> => {
  const timestamp = Math.floor(Date.now() / 1000);
  const withdrawReqProto = new WithdrawReq();
  withdrawReqProto.setXferId(transfer_id);
  withdrawReqProto.setReqId(timestamp);
  withdrawReqProto.setWithdrawType(WithdrawType.WITHDRAW_TYPE_REFUND_TRANSFER);
 
  const req = {
    withdraw_req: base64.encode(withdrawReqProto.serializeBinary() || ""),
    estimated_received_amt: estimated,
    method_type: WithdrawMethodType.WD_METHOD_TYPE_ALL_IN_ONE,
  };

  // use your preferred RPC framework
  return axios
      // heads up to replace REACT_APP_SERVER_URL 
    .post(`${process.env.REACT_APP_SERVER_URL}/v1/withdrawLiquidity`, {
      ...req,
    })
    .then(res => {
      return res.data;
    })
    .catch(e => {
      console.log("error=>", e);
    });
};

