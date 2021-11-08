# cBridge-typescript-client

cBridge provides a simple liquidity provider experience and high liquidity efficiency for users when they manage their funds in different chains with lower costs. known more about flow and terminology from this doc

<a href="https://docs.google.com/document/d/15gVJfiAjzfR9dyz_ad7jQOx5PSPI6p_RanLA6XRLCYU/edit?usp=sharing"> cBridge requirements</a>


## Client folders

<b>proto</b>: .d.ts protobuf. using grpc-web to do the gateway communication.

<b>contract</b>: cBridge contract. 

## Quick Start
### Install grpc-web

https://github.com/grpc/grpc-web

install gprc-web with yarn or npm

yarn install

`yarn add grpc-web`

npm install

`npm install grpc-web`

### gRPC-web Refund request example

1. imports

```javascript

// import reqquest, response and reletive messages
import {
  WithdrawReq,
  WithdrawLq,
  WithdrawType
} from "../../proto/sgn/cbridge/v1/tx_pb";

// import grpc-web WebClient
import { WebClient } from "../proto/sgn/gateway/v1/GatewayServiceClientPb";

```

2. rpc with grpc-web client

```javascript

// construct request
const bytes = ethers.utils.arrayify(sig);
const req = new WithdrawLiquidityRequest();
req.setWithdrawReq(withdrawReqProto.serializeBinary());
req.setSig(bytes);
req.setEstimatedReceivedAmt(estimatedAmount);
req.setMethodType(WithdrawMethodType.WD_METHOD_TYPE_ONE_RM);

// rpc calling with gprc-web client

const client = new WebClient(`${process.env.CBRIDEGE_TESTNET_URL}`, null, null);
client.withdrawLiquidity(req, null)
```