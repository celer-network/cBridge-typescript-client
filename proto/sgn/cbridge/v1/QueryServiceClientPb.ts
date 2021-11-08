/**
 * @fileoverview gRPC-Web generated client stub for sgn.cbridge.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as sgn_cbridge_v1_query_pb from '../../../sgn/cbridge/v1/query_pb';


export class QueryClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoChainTokensConfig = new grpcWeb.MethodDescriptor(
    '/sgn.cbridge.v1.Query/ChainTokensConfig',
    grpcWeb.MethodType.UNARY,
    sgn_cbridge_v1_query_pb.ChainTokensConfigRequest,
    sgn_cbridge_v1_query_pb.ChainTokensConfigResponse,
    (request: sgn_cbridge_v1_query_pb.ChainTokensConfigRequest) => {
      return request.serializeBinary();
    },
    sgn_cbridge_v1_query_pb.ChainTokensConfigResponse.deserializeBinary
  );

  chainTokensConfig(
    request: sgn_cbridge_v1_query_pb.ChainTokensConfigRequest,
    metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.ChainTokensConfigResponse>;

  chainTokensConfig(
    request: sgn_cbridge_v1_query_pb.ChainTokensConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: sgn_cbridge_v1_query_pb.ChainTokensConfigResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.ChainTokensConfigResponse>;

  chainTokensConfig(
    request: sgn_cbridge_v1_query_pb.ChainTokensConfigRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: sgn_cbridge_v1_query_pb.ChainTokensConfigResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/sgn.cbridge.v1.Query/ChainTokensConfig',
        request,
        metadata || {},
        this.methodInfoChainTokensConfig,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/sgn.cbridge.v1.Query/ChainTokensConfig',
    request,
    metadata || {},
    this.methodInfoChainTokensConfig);
  }

  methodInfoGetFee = new grpcWeb.MethodDescriptor(
    '/sgn.cbridge.v1.Query/GetFee',
    grpcWeb.MethodType.UNARY,
    sgn_cbridge_v1_query_pb.GetFeeRequest,
    sgn_cbridge_v1_query_pb.GetFeeResponse,
    (request: sgn_cbridge_v1_query_pb.GetFeeRequest) => {
      return request.serializeBinary();
    },
    sgn_cbridge_v1_query_pb.GetFeeResponse.deserializeBinary
  );

  getFee(
    request: sgn_cbridge_v1_query_pb.GetFeeRequest,
    metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.GetFeeResponse>;

  getFee(
    request: sgn_cbridge_v1_query_pb.GetFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: sgn_cbridge_v1_query_pb.GetFeeResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.GetFeeResponse>;

  getFee(
    request: sgn_cbridge_v1_query_pb.GetFeeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: sgn_cbridge_v1_query_pb.GetFeeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/sgn.cbridge.v1.Query/GetFee',
        request,
        metadata || {},
        this.methodInfoGetFee,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/sgn.cbridge.v1.Query/GetFee',
    request,
    metadata || {},
    this.methodInfoGetFee);
  }

  methodInfoGetFeePercentage = new grpcWeb.MethodDescriptor(
    '/sgn.cbridge.v1.Query/GetFeePercentage',
    grpcWeb.MethodType.UNARY,
    sgn_cbridge_v1_query_pb.GetFeePercentageRequest,
    sgn_cbridge_v1_query_pb.GetFeePercentageResponse,
    (request: sgn_cbridge_v1_query_pb.GetFeePercentageRequest) => {
      return request.serializeBinary();
    },
    sgn_cbridge_v1_query_pb.GetFeePercentageResponse.deserializeBinary
  );

  getFeePercentage(
    request: sgn_cbridge_v1_query_pb.GetFeePercentageRequest,
    metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.GetFeePercentageResponse>;

  getFeePercentage(
    request: sgn_cbridge_v1_query_pb.GetFeePercentageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: sgn_cbridge_v1_query_pb.GetFeePercentageResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.GetFeePercentageResponse>;

  getFeePercentage(
    request: sgn_cbridge_v1_query_pb.GetFeePercentageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: sgn_cbridge_v1_query_pb.GetFeePercentageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/sgn.cbridge.v1.Query/GetFeePercentage',
        request,
        metadata || {},
        this.methodInfoGetFeePercentage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/sgn.cbridge.v1.Query/GetFeePercentage',
    request,
    metadata || {},
    this.methodInfoGetFeePercentage);
  }

  methodInfoQueryTransferStatus = new grpcWeb.MethodDescriptor(
    '/sgn.cbridge.v1.Query/QueryTransferStatus',
    grpcWeb.MethodType.UNARY,
    sgn_cbridge_v1_query_pb.QueryTransferStatusRequest,
    sgn_cbridge_v1_query_pb.QueryTransferStatusResponse,
    (request: sgn_cbridge_v1_query_pb.QueryTransferStatusRequest) => {
      return request.serializeBinary();
    },
    sgn_cbridge_v1_query_pb.QueryTransferStatusResponse.deserializeBinary
  );

  queryTransferStatus(
    request: sgn_cbridge_v1_query_pb.QueryTransferStatusRequest,
    metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.QueryTransferStatusResponse>;

  queryTransferStatus(
    request: sgn_cbridge_v1_query_pb.QueryTransferStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: sgn_cbridge_v1_query_pb.QueryTransferStatusResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.QueryTransferStatusResponse>;

  queryTransferStatus(
    request: sgn_cbridge_v1_query_pb.QueryTransferStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: sgn_cbridge_v1_query_pb.QueryTransferStatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/sgn.cbridge.v1.Query/QueryTransferStatus',
        request,
        metadata || {},
        this.methodInfoQueryTransferStatus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/sgn.cbridge.v1.Query/QueryTransferStatus',
    request,
    metadata || {},
    this.methodInfoQueryTransferStatus);
  }

  methodInfoLiquidityDetailList = new grpcWeb.MethodDescriptor(
    '/sgn.cbridge.v1.Query/LiquidityDetailList',
    grpcWeb.MethodType.UNARY,
    sgn_cbridge_v1_query_pb.LiquidityDetailListRequest,
    sgn_cbridge_v1_query_pb.LiquidityDetailListResponse,
    (request: sgn_cbridge_v1_query_pb.LiquidityDetailListRequest) => {
      return request.serializeBinary();
    },
    sgn_cbridge_v1_query_pb.LiquidityDetailListResponse.deserializeBinary
  );

  liquidityDetailList(
    request: sgn_cbridge_v1_query_pb.LiquidityDetailListRequest,
    metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.LiquidityDetailListResponse>;

  liquidityDetailList(
    request: sgn_cbridge_v1_query_pb.LiquidityDetailListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: sgn_cbridge_v1_query_pb.LiquidityDetailListResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.LiquidityDetailListResponse>;

  liquidityDetailList(
    request: sgn_cbridge_v1_query_pb.LiquidityDetailListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: sgn_cbridge_v1_query_pb.LiquidityDetailListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/sgn.cbridge.v1.Query/LiquidityDetailList',
        request,
        metadata || {},
        this.methodInfoLiquidityDetailList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/sgn.cbridge.v1.Query/LiquidityDetailList',
    request,
    metadata || {},
    this.methodInfoLiquidityDetailList);
  }

  methodInfoQueryTotalLiquidity = new grpcWeb.MethodDescriptor(
    '/sgn.cbridge.v1.Query/QueryTotalLiquidity',
    grpcWeb.MethodType.UNARY,
    sgn_cbridge_v1_query_pb.QueryTotalLiquidityRequest,
    sgn_cbridge_v1_query_pb.QueryTotalLiquidityResponse,
    (request: sgn_cbridge_v1_query_pb.QueryTotalLiquidityRequest) => {
      return request.serializeBinary();
    },
    sgn_cbridge_v1_query_pb.QueryTotalLiquidityResponse.deserializeBinary
  );

  queryTotalLiquidity(
    request: sgn_cbridge_v1_query_pb.QueryTotalLiquidityRequest,
    metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.QueryTotalLiquidityResponse>;

  queryTotalLiquidity(
    request: sgn_cbridge_v1_query_pb.QueryTotalLiquidityRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: sgn_cbridge_v1_query_pb.QueryTotalLiquidityResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.QueryTotalLiquidityResponse>;

  queryTotalLiquidity(
    request: sgn_cbridge_v1_query_pb.QueryTotalLiquidityRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: sgn_cbridge_v1_query_pb.QueryTotalLiquidityResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/sgn.cbridge.v1.Query/QueryTotalLiquidity',
        request,
        metadata || {},
        this.methodInfoQueryTotalLiquidity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/sgn.cbridge.v1.Query/QueryTotalLiquidity',
    request,
    metadata || {},
    this.methodInfoQueryTotalLiquidity);
  }

  methodInfoQueryAddLiquidityStatus = new grpcWeb.MethodDescriptor(
    '/sgn.cbridge.v1.Query/QueryAddLiquidityStatus',
    grpcWeb.MethodType.UNARY,
    sgn_cbridge_v1_query_pb.QueryAddLiquidityStatusRequest,
    sgn_cbridge_v1_query_pb.QueryLiquidityStatusResponse,
    (request: sgn_cbridge_v1_query_pb.QueryAddLiquidityStatusRequest) => {
      return request.serializeBinary();
    },
    sgn_cbridge_v1_query_pb.QueryLiquidityStatusResponse.deserializeBinary
  );

  queryAddLiquidityStatus(
    request: sgn_cbridge_v1_query_pb.QueryAddLiquidityStatusRequest,
    metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.QueryLiquidityStatusResponse>;

  queryAddLiquidityStatus(
    request: sgn_cbridge_v1_query_pb.QueryAddLiquidityStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: sgn_cbridge_v1_query_pb.QueryLiquidityStatusResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.QueryLiquidityStatusResponse>;

  queryAddLiquidityStatus(
    request: sgn_cbridge_v1_query_pb.QueryAddLiquidityStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: sgn_cbridge_v1_query_pb.QueryLiquidityStatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/sgn.cbridge.v1.Query/QueryAddLiquidityStatus',
        request,
        metadata || {},
        this.methodInfoQueryAddLiquidityStatus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/sgn.cbridge.v1.Query/QueryAddLiquidityStatus',
    request,
    metadata || {},
    this.methodInfoQueryAddLiquidityStatus);
  }

  methodInfoQueryWithdrawLiquidityStatus = new grpcWeb.MethodDescriptor(
    '/sgn.cbridge.v1.Query/QueryWithdrawLiquidityStatus',
    grpcWeb.MethodType.UNARY,
    sgn_cbridge_v1_query_pb.QueryWithdrawLiquidityStatusRequest,
    sgn_cbridge_v1_query_pb.QueryLiquidityStatusResponse,
    (request: sgn_cbridge_v1_query_pb.QueryWithdrawLiquidityStatusRequest) => {
      return request.serializeBinary();
    },
    sgn_cbridge_v1_query_pb.QueryLiquidityStatusResponse.deserializeBinary
  );

  queryWithdrawLiquidityStatus(
    request: sgn_cbridge_v1_query_pb.QueryWithdrawLiquidityStatusRequest,
    metadata: grpcWeb.Metadata | null): Promise<sgn_cbridge_v1_query_pb.QueryLiquidityStatusResponse>;

  queryWithdrawLiquidityStatus(
    request: sgn_cbridge_v1_query_pb.QueryWithdrawLiquidityStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: sgn_cbridge_v1_query_pb.QueryLiquidityStatusResponse) => void): grpcWeb.ClientReadableStream<sgn_cbridge_v1_query_pb.QueryLiquidityStatusResponse>;

  queryWithdrawLiquidityStatus(
    request: sgn_cbridge_v1_query_pb.QueryWithdrawLiquidityStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: sgn_cbridge_v1_query_pb.QueryLiquidityStatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/sgn.cbridge.v1.Query/QueryWithdrawLiquidityStatus',
        request,
        metadata || {},
        this.methodInfoQueryWithdrawLiquidityStatus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/sgn.cbridge.v1.Query/QueryWithdrawLiquidityStatus',
    request,
    metadata || {},
    this.methodInfoQueryWithdrawLiquidityStatus);
  }

}

