import axios from "axios";
import { ethers } from "ethers";
import { base64 } from "ethers/lib/utils";
import { WithdrawReq, WithdrawType } from "../ts-proto/sgn/cbridge/v1/tx_pb";
import { WithdrawMethodType } from "../ts-proto/sgn/gateway/v1/gateway_pb";


/* eslint-disable camelcase */
export const refund = async (transfer_id, estimated, signer) => {
  const timestamp = Math.floor(Date.now() / 1000);
  const withdrawReqProto = new WithdrawReq();
  withdrawReqProto.setXferId(transfer_id);
  withdrawReqProto.setReqId(timestamp);
  withdrawReqProto.setWithdrawType(WithdrawType.WITHDRAW_TYPE_REFUND_TRANSFER);
  let sig;
  try {
    sig = await signer.signMessage(ethers.utils.arrayify(ethers.utils.keccak256(withdrawReqProto.serializeBinary())));
  } catch (error) {
    console.log(error);
  }

  const bytes = ethers.utils.arrayify(sig);
  const req = {
    withdraw_req: base64.encode(withdrawReqProto.serializeBinary() || ""),
    sig: base64.encode(bytes || ""), 
    estimated_received_amt: estimated,
    method_type: WithdrawMethodType.WD_METHOD_TYPE_ALL_IN_ONE,
  };
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