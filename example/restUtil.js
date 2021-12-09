import axios from "axios";
import { ethers } from "ethers";
import { base64 } from "ethers/lib/utils";
import { WithdrawReq as WithdrawReqProto, WithdrawType } from "../tx-proto/sgn/cbridge/v1/tx_pb";
import { WithdrawMethodType } from "../ts-proto/sgn/gateway/v1/gateway_pb";

/* eslint-disable camelcase */

export const requestRestRefund = async (transfer_id, estimated, signer) => {
  const timestamp = Math.floor(Date.now() / 1000);
  const withdrawReqProto = new WithdrawReqProto();
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
    sig: base64.encode(bytes || ""), // 用 withdraw_req 签名后可用
    estimated_received_amt: estimated,
    method_type: WithdrawMethodType.WD_METHOD_TYPE_ALL_IN_ONE,
  };
  return axios
    .post(`${process.env.REACT_APP_SERVER_URL}/v1/withdrawLiquidity`, {//替换域名
      ...req,
    })
    .then(res => {
      return res.data;
    })
    .catch(e => {
      console.log("error=>", e);
    });
};