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

function serialize_nano_AccountHistoryRequest(arg) {
  if (!(arg instanceof Accounts_pb.AccountHistoryRequest)) {
    throw new Error('Expected argument of type nano.AccountHistoryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountHistoryRequest(buffer_arg) {
  return Accounts_pb.AccountHistoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_AccountHistoryResponse(arg) {
  if (!(arg instanceof Accounts_pb.AccountHistoryResponse)) {
    throw new Error('Expected argument of type nano.AccountHistoryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountHistoryResponse(buffer_arg) {
  return Accounts_pb.AccountHistoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_nano_AccountKeyRequest(arg) {
  if (!(arg instanceof Accounts_pb.AccountKeyRequest)) {
    throw new Error('Expected argument of type nano.AccountKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountKeyRequest(buffer_arg) {
  return Accounts_pb.AccountKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_AccountKeyResponse(arg) {
  if (!(arg instanceof Accounts_pb.AccountKeyResponse)) {
    throw new Error('Expected argument of type nano.AccountKeyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountKeyResponse(buffer_arg) {
  return Accounts_pb.AccountKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_AccountListResponse(arg) {
  if (!(arg instanceof Accounts_pb.AccountListResponse)) {
    throw new Error('Expected argument of type nano.AccountListResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountListResponse(buffer_arg) {
  return Accounts_pb.AccountListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_AccountMoveRequest(arg) {
  if (!(arg instanceof Accounts_pb.AccountMoveRequest)) {
    throw new Error('Expected argument of type nano.AccountMoveRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountMoveRequest(buffer_arg) {
  return Accounts_pb.AccountMoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_AccountMoveResponse(arg) {
  if (!(arg instanceof Accounts_pb.AccountMoveResponse)) {
    throw new Error('Expected argument of type nano.AccountMoveResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountMoveResponse(buffer_arg) {
  return Accounts_pb.AccountMoveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_AccountRemoveRequest(arg) {
  if (!(arg instanceof Accounts_pb.AccountRemoveRequest)) {
    throw new Error('Expected argument of type nano.AccountRemoveRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountRemoveRequest(buffer_arg) {
  return Accounts_pb.AccountRemoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_AccountRemoveResponse(arg) {
  if (!(arg instanceof Accounts_pb.AccountRemoveResponse)) {
    throw new Error('Expected argument of type nano.AccountRemoveResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountRemoveResponse(buffer_arg) {
  return Accounts_pb.AccountRemoveResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_nano_WalletRequest(arg) {
  if (!(arg instanceof Wallet_pb.WalletRequest)) {
    throw new Error('Expected argument of type nano.WalletRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_WalletRequest(buffer_arg) {
  return Wallet_pb.WalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
  accountGet: {
    path: '/nano.NanoRPC/AccountGet',
    requestStream: false,
    responseStream: false,
    requestType: Accounts_pb.AccountKeyRequest,
    responseType: Accounts_pb.AccountResponse,
    requestSerialize: serialize_nano_AccountKeyRequest,
    requestDeserialize: deserialize_nano_AccountKeyRequest,
    responseSerialize: serialize_nano_AccountResponse,
    responseDeserialize: deserialize_nano_AccountResponse,
  },
  accountHistory: {
    path: '/nano.NanoRPC/AccountHistory',
    requestStream: false,
    responseStream: false,
    requestType: Accounts_pb.AccountHistoryRequest,
    responseType: Accounts_pb.AccountHistoryResponse,
    requestSerialize: serialize_nano_AccountHistoryRequest,
    requestDeserialize: deserialize_nano_AccountHistoryRequest,
    responseSerialize: serialize_nano_AccountHistoryResponse,
    responseDeserialize: deserialize_nano_AccountHistoryResponse,
  },
  accountList: {
    path: '/nano.NanoRPC/AccountList',
    requestStream: false,
    responseStream: false,
    requestType: Wallet_pb.WalletRequest,
    responseType: Accounts_pb.AccountListResponse,
    requestSerialize: serialize_nano_WalletRequest,
    requestDeserialize: deserialize_nano_WalletRequest,
    responseSerialize: serialize_nano_AccountListResponse,
    responseDeserialize: deserialize_nano_AccountListResponse,
  },
  accountMove: {
    path: '/nano.NanoRPC/AccountMove',
    requestStream: false,
    responseStream: false,
    requestType: Accounts_pb.AccountMoveRequest,
    responseType: Accounts_pb.AccountMoveResponse,
    requestSerialize: serialize_nano_AccountMoveRequest,
    requestDeserialize: deserialize_nano_AccountMoveRequest,
    responseSerialize: serialize_nano_AccountMoveResponse,
    responseDeserialize: deserialize_nano_AccountMoveResponse,
  },
  accountPublicKey: {
    path: '/nano.NanoRPC/AccountPublicKey',
    requestStream: false,
    responseStream: false,
    requestType: Accounts_pb.AccountRequest,
    responseType: Accounts_pb.AccountKeyResponse,
    requestSerialize: serialize_nano_AccountRequest,
    requestDeserialize: deserialize_nano_AccountRequest,
    responseSerialize: serialize_nano_AccountKeyResponse,
    responseDeserialize: deserialize_nano_AccountKeyResponse,
  },
  accountRemove: {
    path: '/nano.NanoRPC/AccountRemove',
    requestStream: false,
    responseStream: false,
    requestType: Accounts_pb.AccountRemoveRequest,
    responseType: Accounts_pb.AccountRemoveResponse,
    requestSerialize: serialize_nano_AccountRemoveRequest,
    requestDeserialize: deserialize_nano_AccountRemoveRequest,
    responseSerialize: serialize_nano_AccountRemoveResponse,
    responseDeserialize: deserialize_nano_AccountRemoveResponse,
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
