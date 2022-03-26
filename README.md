# cBridge-typescript-client

cBridge provides a simple liquidity provider experience and high liquidity efficiency for users when they manage their funds in different
chains with lower costs. Learn more about flow and terminology from this doc:
[cBridge requirements](https://docs.google.com/document/d/15gVJfiAjzfR9dyz_ad7jQOx5PSPI6p_RanLA6XRLCYU/edit?usp=sharing)

## Folder Structure

[examples](./examples): Ready-to-run code examples to call the cBridge gateway via the REST API.
[contract](./contract): Generated cBridge contract ABIs and bindings.
[proto](./proto): gRPC-Web Protobuf definitions.
[ts-proto](./ts-proto): Generated .d.ts gRPC-Web bindings.

## Quick Start

### Refund via REST API

Set `CBRIDGE_GATEWAY_URL` to one of the following in `.env`:

Testnet: https://cbridge-v2-test.celer.network
Mainnet: https://cbridge-prod2.celer.network

Run via:

```sh
ts-node examples/refund.ts
```

or

```sh
node examples/refund.js
```

### Refund via gRPC-Web API

1. Install grpc-web

https://github.com/grpc/grpc-web

Install gRPC-Web:

```sh
npm install grpc-web
```

2. Imports

```javascript
// Import request, response and relative messages
import { WithdrawReq, WithdrawLq, WithdrawType } from '../../proto/sgn/cbridge/v1/tx_pb';

// Import gRPC-web WebClient
import { WebClient } from '../proto/sgn/gateway/v1/GatewayServiceClientPb';
```

3. Call gateway with gRPC-Web client

```javascript
// construct request
const bytes = ethers.utils.arrayify(sig);
const req = new WithdrawLiquidityRequest();
req.setWithdrawReq(withdrawReqProto.serializeBinary());
req.setSig(bytes);
req.setEstimatedReceivedAmt(estimatedAmount);
req.setMethodType(WithdrawMethodType.WD_METHOD_TYPE_ONE_RM);

// Withdraw liquidity via gRPC-Web client

const client = new WebClient(`${process.env.CBRIDGE_GATEWAY_URL}`, null, null);
client.withdrawLiquidity(req, null);
```
