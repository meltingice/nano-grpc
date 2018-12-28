// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var NanoService_pb = require('./NanoService_pb.js');
var Accounts_pb = require('./Accounts_pb.js');
var Blocks_pb = require('./Blocks_pb.js');
var Peers_pb = require('./Peers_pb.js');
var Wallet_pb = require('./Wallet_pb.js');

function serialize_nano_AccountBalanceResponse(arg) {
  if (!(arg instanceof Accounts_pb.AccountBalanceResponse)) {
    throw new Error('Expected argument of type nano.AccountBalanceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountBalanceResponse(buffer_arg) {
  return Accounts_pb.AccountBalanceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_AccountBlockCountResponse(arg) {
  if (!(arg instanceof Accounts_pb.AccountBlockCountResponse)) {
    throw new Error('Expected argument of type nano.AccountBlockCountResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountBlockCountResponse(buffer_arg) {
  return Accounts_pb.AccountBlockCountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_AccountCreateRequest(arg) {
  if (!(arg instanceof Accounts_pb.AccountCreateRequest)) {
    throw new Error('Expected argument of type nano.AccountCreateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountCreateRequest(buffer_arg) {
  return Accounts_pb.AccountCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_AccountInfoRequest(arg) {
  if (!(arg instanceof Accounts_pb.AccountInfoRequest)) {
    throw new Error('Expected argument of type nano.AccountInfoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountInfoRequest(buffer_arg) {
  return Accounts_pb.AccountInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_AccountInfoResponse(arg) {
  if (!(arg instanceof Accounts_pb.AccountInfoResponse)) {
    throw new Error('Expected argument of type nano.AccountInfoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountInfoResponse(buffer_arg) {
  return Accounts_pb.AccountInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_AccountRequest(arg) {
  if (!(arg instanceof Accounts_pb.AccountRequest)) {
    throw new Error('Expected argument of type nano.AccountRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountRequest(buffer_arg) {
  return Accounts_pb.AccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_AccountResponse(arg) {
  if (!(arg instanceof Accounts_pb.AccountResponse)) {
    throw new Error('Expected argument of type nano.AccountResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountResponse(buffer_arg) {
  return Accounts_pb.AccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_BlockCountResponse(arg) {
  if (!(arg instanceof Blocks_pb.BlockCountResponse)) {
    throw new Error('Expected argument of type nano.BlockCountResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_BlockCountResponse(buffer_arg) {
  return Blocks_pb.BlockCountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_EmptyRequest(arg) {
  if (!(arg instanceof NanoService_pb.EmptyRequest)) {
    throw new Error('Expected argument of type nano.EmptyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_EmptyRequest(buffer_arg) {
  return NanoService_pb.EmptyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_PeersResponse(arg) {
  if (!(arg instanceof Peers_pb.PeersResponse)) {
    throw new Error('Expected argument of type nano.PeersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_PeersResponse(buffer_arg) {
  return Peers_pb.PeersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var NanoRPCService = exports.NanoRPCService = {
  // Accounts
  accountBalance: {
    path: '/nano.NanoRPC/AccountBalance',
    requestStream: false,
    responseStream: false,
    requestType: Accounts_pb.AccountRequest,
    responseType: Accounts_pb.AccountBalanceResponse,
    requestSerialize: serialize_nano_AccountRequest,
    requestDeserialize: deserialize_nano_AccountRequest,
    responseSerialize: serialize_nano_AccountBalanceResponse,
    responseDeserialize: deserialize_nano_AccountBalanceResponse,
  },
  accountBlockCount: {
    path: '/nano.NanoRPC/AccountBlockCount',
    requestStream: false,
    responseStream: false,
    requestType: Accounts_pb.AccountRequest,
    responseType: Accounts_pb.AccountBlockCountResponse,
    requestSerialize: serialize_nano_AccountRequest,
    requestDeserialize: deserialize_nano_AccountRequest,
    responseSerialize: serialize_nano_AccountBlockCountResponse,
    responseDeserialize: deserialize_nano_AccountBlockCountResponse,
  },
  accountInfo: {
    path: '/nano.NanoRPC/AccountInfo',
    requestStream: false,
    responseStream: false,
    requestType: Accounts_pb.AccountInfoRequest,
    responseType: Accounts_pb.AccountInfoResponse,
    requestSerialize: serialize_nano_AccountInfoRequest,
    requestDeserialize: deserialize_nano_AccountInfoRequest,
    responseSerialize: serialize_nano_AccountInfoResponse,
    responseDeserialize: deserialize_nano_AccountInfoResponse,
  },
  accountCreate: {
    path: '/nano.NanoRPC/AccountCreate',
    requestStream: false,
    responseStream: false,
    requestType: Accounts_pb.AccountCreateRequest,
    responseType: Accounts_pb.AccountResponse,
    requestSerialize: serialize_nano_AccountCreateRequest,
    requestDeserialize: deserialize_nano_AccountCreateRequest,
    responseSerialize: serialize_nano_AccountResponse,
    responseDeserialize: deserialize_nano_AccountResponse,
  },
  // Blocks
  blockCount: {
    path: '/nano.NanoRPC/BlockCount',
    requestStream: false,
    responseStream: false,
    requestType: NanoService_pb.EmptyRequest,
    responseType: Blocks_pb.BlockCountResponse,
    requestSerialize: serialize_nano_EmptyRequest,
    requestDeserialize: deserialize_nano_EmptyRequest,
    responseSerialize: serialize_nano_BlockCountResponse,
    responseDeserialize: deserialize_nano_BlockCountResponse,
  },
  // Peers
  peers: {
    path: '/nano.NanoRPC/Peers',
    requestStream: false,
    responseStream: false,
    requestType: NanoService_pb.EmptyRequest,
    responseType: Peers_pb.PeersResponse,
    requestSerialize: serialize_nano_EmptyRequest,
    requestDeserialize: deserialize_nano_EmptyRequest,
    responseSerialize: serialize_nano_PeersResponse,
    responseDeserialize: deserialize_nano_PeersResponse,
  },
};

exports.NanoRPCClient = grpc.makeGenericClientConstructor(NanoRPCService);
