import axios from "axios";
import { ethers } from "ethers";
import { base64 } from "ethers/lib/utils";
import { WithdrawReq as WithdrawReqProto, WithdrawType } from "../tx-proto/sgn/cbridge/v1/tx_pb";
import { WithdrawMethodType } from "../ts-proto/sgn/gateway/v1/gateway_pb";

/* eslint-disable camelcase */
const preFix = { pathPrefix: process.env.REACT_APP_SERVER_URL }; // 域名
console.log("preFix", preFix);

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

// export const withdrawLiquidity = (params: WithdrawLiquidityRequest): Promise<WithdrawLiquidityResponse> => {
//   const req = {
//     withdraw_req: base64.encode(params.withdraw_req || ""),
//     sig: base64.encode(params.sig || ""), // 用 withdraw_req 签名后可用
//     estimated_received_amt: params.estimated_received_amt,
//     method_type: params.method_type,
//   };
//   return axios
//     .post(`${process.env.REACT_APP_SERVER_URL}/v1/withdrawLiquidity`, {
//       ...req,
//     })
//     .then(res => {
//       return res.data;
//     })
//     .catch(e => {
//       console.log("error=>", e);
//     });
// };

// export const withdrawLiquidityNew = async (
//   singleChainList,
//   singleChainRate,
//   chainID,
//   signer,
// ): Promise<WithdrawLiquidityResponse> => {
//   const timestamp = Math.floor(Date.now() / 1000);
//   let total_estimated_received_amt = BigNumber.from(0);
//   const WithdrawLqProtoList = singleChainList?.map(item => {
//     const withdrawLqProto = new WithdrawLqProto();
//     withdrawLqProto.setFromChainId(item.from_chain_id);
//     withdrawLqProto.setMaxSlippage((Number(singleChainRate) / 100) * 1000000); // base 1e6
//     withdrawLqProto.setTokenAddr(item.token_addr);
//     withdrawLqProto.setRatio(Number(item.ratio) * 1000000); // 100000000
//     total_estimated_received_amt = BigNumber.from(item.stimatedReceived).add(total_estimated_received_amt);
//     return withdrawLqProto;
//   });

//   const withdrawReqProto = new WithdrawReqProto();
//   withdrawReqProto.setWithdrawsList(WithdrawLqProtoList);
//   withdrawReqProto.setExitChainId(chainID);
//   withdrawReqProto.setReqId(timestamp);
//   withdrawReqProto.setWithdrawType(WithdrawType.WITHDRAW_TYPE_REMOVE_LIQUIDITY);
//   let sig;
//   try {
//     sig = await signer.signMessage(ethers.utils.arrayify(ethers.utils.keccak256(withdrawReqProto.serializeBinary())));
//   } catch (error) {
//     console.log(678, error);
//   }
//   const bytes = ethers.utils.arrayify(sig);

//   const req = {
//     withdraw_req: base64.encode(withdrawReqProto.serializeBinary() || ""),
//     sig: base64.encode(bytes || ""), // 用 withdraw_req 签名后可用
//     estimated_received_amt: total_estimated_received_amt.toString(),
//     method_type: WithdrawMethodType.WD_METHOD_TYPE_ALL_IN_ONE,
//   };
//   return axios
//     .post(`${process.env.REACT_APP_SERVER_URL}/v1/withdrawLiquidity`, {
//       ...req,
//     })
//     .then(res => {
//       return res.data;
//     })
//     .catch(e => {
//       console.log("error=>", e);
//     });
// };
