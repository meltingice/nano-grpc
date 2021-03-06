// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var Accounts_pb = require('./Accounts_pb.js');
var Blocks_pb = require('./Blocks_pb.js');
var Bootstrap_pb = require('./Bootstrap_pb.js');
var Confirmation_pb = require('./Confirmation_pb.js');
var Conversion_pb = require('./Conversion_pb.js');
var Delegators_pb = require('./Delegators_pb.js');
var Frontiers_pb = require('./Frontiers_pb.js');
var Miscellaneous_pb = require('./Miscellaneous_pb.js');
var Peers_pb = require('./Peers_pb.js');
var Representatives_pb = require('./Representatives_pb.js');
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

function serialize_nano_AccountRepresentativeRequest(arg) {
  if (!(arg instanceof Accounts_pb.AccountRepresentativeRequest)) {
    throw new Error('Expected argument of type nano.AccountRepresentativeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountRepresentativeRequest(buffer_arg) {
  return Accounts_pb.AccountRepresentativeRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_nano_AccountsBalancesResponse(arg) {
  if (!(arg instanceof Accounts_pb.AccountsBalancesResponse)) {
    throw new Error('Expected argument of type nano.AccountsBalancesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountsBalancesResponse(buffer_arg) {
  return Accounts_pb.AccountsBalancesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_AccountsCreateRequest(arg) {
  if (!(arg instanceof Accounts_pb.AccountsCreateRequest)) {
    throw new Error('Expected argument of type nano.AccountsCreateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountsCreateRequest(buffer_arg) {
  return Accounts_pb.AccountsCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_AccountsPendingRequest(arg) {
  if (!(arg instanceof Accounts_pb.AccountsPendingRequest)) {
    throw new Error('Expected argument of type nano.AccountsPendingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountsPendingRequest(buffer_arg) {
  return Accounts_pb.AccountsPendingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_AccountsPendingResponse(arg) {
  if (!(arg instanceof Accounts_pb.AccountsPendingResponse)) {
    throw new Error('Expected argument of type nano.AccountsPendingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountsPendingResponse(buffer_arg) {
  return Accounts_pb.AccountsPendingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_AccountsRequest(arg) {
  if (!(arg instanceof Accounts_pb.AccountsRequest)) {
    throw new Error('Expected argument of type nano.AccountsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountsRequest(buffer_arg) {
  return Accounts_pb.AccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_AccountsResponse(arg) {
  if (!(arg instanceof Accounts_pb.AccountsResponse)) {
    throw new Error('Expected argument of type nano.AccountsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AccountsResponse(buffer_arg) {
  return Accounts_pb.AccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_ActiveConfirmationRequest(arg) {
  if (!(arg instanceof Confirmation_pb.ActiveConfirmationRequest)) {
    throw new Error('Expected argument of type nano.ActiveConfirmationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_ActiveConfirmationRequest(buffer_arg) {
  return Confirmation_pb.ActiveConfirmationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_AmountRequest(arg) {
  if (!(arg instanceof Conversion_pb.AmountRequest)) {
    throw new Error('Expected argument of type nano.AmountRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AmountRequest(buffer_arg) {
  return Conversion_pb.AmountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_AmountResponse(arg) {
  if (!(arg instanceof Conversion_pb.AmountResponse)) {
    throw new Error('Expected argument of type nano.AmountResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_AmountResponse(buffer_arg) {
  return Conversion_pb.AmountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_Block(arg) {
  if (!(arg instanceof Blocks_pb.Block)) {
    throw new Error('Expected argument of type nano.Block');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_Block(buffer_arg) {
  return Blocks_pb.Block.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_nano_BlockCountTypeResponse(arg) {
  if (!(arg instanceof Blocks_pb.BlockCountTypeResponse)) {
    throw new Error('Expected argument of type nano.BlockCountTypeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_BlockCountTypeResponse(buffer_arg) {
  return Blocks_pb.BlockCountTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_BlockCreateRequest(arg) {
  if (!(arg instanceof Blocks_pb.BlockCreateRequest)) {
    throw new Error('Expected argument of type nano.BlockCreateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_BlockCreateRequest(buffer_arg) {
  return Blocks_pb.BlockCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_BlockCreateResponse(arg) {
  if (!(arg instanceof Blocks_pb.BlockCreateResponse)) {
    throw new Error('Expected argument of type nano.BlockCreateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_BlockCreateResponse(buffer_arg) {
  return Blocks_pb.BlockCreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_BlockHashRequest(arg) {
  if (!(arg instanceof Blocks_pb.BlockHashRequest)) {
    throw new Error('Expected argument of type nano.BlockHashRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_BlockHashRequest(buffer_arg) {
  return Blocks_pb.BlockHashRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_BlockHashesResponse(arg) {
  if (!(arg instanceof Blocks_pb.BlockHashesResponse)) {
    throw new Error('Expected argument of type nano.BlockHashesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_BlockHashesResponse(buffer_arg) {
  return Blocks_pb.BlockHashesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_BlockProcessRequest(arg) {
  if (!(arg instanceof Blocks_pb.BlockProcessRequest)) {
    throw new Error('Expected argument of type nano.BlockProcessRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_BlockProcessRequest(buffer_arg) {
  return Blocks_pb.BlockProcessRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_BlockRequest(arg) {
  if (!(arg instanceof Blocks_pb.BlockRequest)) {
    throw new Error('Expected argument of type nano.BlockRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_BlockRequest(buffer_arg) {
  return Blocks_pb.BlockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_BlockResponse(arg) {
  if (!(arg instanceof Blocks_pb.BlockResponse)) {
    throw new Error('Expected argument of type nano.BlockResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_BlockResponse(buffer_arg) {
  return Blocks_pb.BlockResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_BlocksInfoRequest(arg) {
  if (!(arg instanceof Blocks_pb.BlocksInfoRequest)) {
    throw new Error('Expected argument of type nano.BlocksInfoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_BlocksInfoRequest(buffer_arg) {
  return Blocks_pb.BlocksInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_BlocksInfoResponse(arg) {
  if (!(arg instanceof Blocks_pb.BlocksInfoResponse)) {
    throw new Error('Expected argument of type nano.BlocksInfoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_BlocksInfoResponse(buffer_arg) {
  return Blocks_pb.BlocksInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_BlocksRequest(arg) {
  if (!(arg instanceof Blocks_pb.BlocksRequest)) {
    throw new Error('Expected argument of type nano.BlocksRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_BlocksRequest(buffer_arg) {
  return Blocks_pb.BlocksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_BlocksResponse(arg) {
  if (!(arg instanceof Blocks_pb.BlocksResponse)) {
    throw new Error('Expected argument of type nano.BlocksResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_BlocksResponse(buffer_arg) {
  return Blocks_pb.BlocksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_BootstrapLazyRequest(arg) {
  if (!(arg instanceof Bootstrap_pb.BootstrapLazyRequest)) {
    throw new Error('Expected argument of type nano.BootstrapLazyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_BootstrapLazyRequest(buffer_arg) {
  return Bootstrap_pb.BootstrapLazyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_BootstrapRequest(arg) {
  if (!(arg instanceof Bootstrap_pb.BootstrapRequest)) {
    throw new Error('Expected argument of type nano.BootstrapRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_BootstrapRequest(buffer_arg) {
  return Bootstrap_pb.BootstrapRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_BootstrapStatusResponse(arg) {
  if (!(arg instanceof Bootstrap_pb.BootstrapStatusResponse)) {
    throw new Error('Expected argument of type nano.BootstrapStatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_BootstrapStatusResponse(buffer_arg) {
  return Bootstrap_pb.BootstrapStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_ChainRequest(arg) {
  if (!(arg instanceof Blocks_pb.ChainRequest)) {
    throw new Error('Expected argument of type nano.ChainRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_ChainRequest(buffer_arg) {
  return Blocks_pb.ChainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_ConfirmationHistoryResponse(arg) {
  if (!(arg instanceof Confirmation_pb.ConfirmationHistoryResponse)) {
    throw new Error('Expected argument of type nano.ConfirmationHistoryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_ConfirmationHistoryResponse(buffer_arg) {
  return Confirmation_pb.ConfirmationHistoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_ConfirmationInfoRequest(arg) {
  if (!(arg instanceof Confirmation_pb.ConfirmationInfoRequest)) {
    throw new Error('Expected argument of type nano.ConfirmationInfoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_ConfirmationInfoRequest(buffer_arg) {
  return Confirmation_pb.ConfirmationInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_ConfirmationInfoResponse(arg) {
  if (!(arg instanceof Confirmation_pb.ConfirmationInfoResponse)) {
    throw new Error('Expected argument of type nano.ConfirmationInfoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_ConfirmationInfoResponse(buffer_arg) {
  return Confirmation_pb.ConfirmationInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_ConfirmationQuorumRequest(arg) {
  if (!(arg instanceof Confirmation_pb.ConfirmationQuorumRequest)) {
    throw new Error('Expected argument of type nano.ConfirmationQuorumRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_ConfirmationQuorumRequest(buffer_arg) {
  return Confirmation_pb.ConfirmationQuorumRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_ConfirmationQuorumResponse(arg) {
  if (!(arg instanceof Confirmation_pb.ConfirmationQuorumResponse)) {
    throw new Error('Expected argument of type nano.ConfirmationQuorumResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_ConfirmationQuorumResponse(buffer_arg) {
  return Confirmation_pb.ConfirmationQuorumResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_CountResponse(arg) {
  if (!(arg instanceof Delegators_pb.CountResponse)) {
    throw new Error('Expected argument of type nano.CountResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_CountResponse(buffer_arg) {
  return Delegators_pb.CountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_DelegatorsResponse(arg) {
  if (!(arg instanceof Delegators_pb.DelegatorsResponse)) {
    throw new Error('Expected argument of type nano.DelegatorsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_DelegatorsResponse(buffer_arg) {
  return Delegators_pb.DelegatorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_DeterministicKeyRequest(arg) {
  if (!(arg instanceof Miscellaneous_pb.DeterministicKeyRequest)) {
    throw new Error('Expected argument of type nano.DeterministicKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_DeterministicKeyRequest(buffer_arg) {
  return Miscellaneous_pb.DeterministicKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_EmptyRequest(arg) {
  if (!(arg instanceof Miscellaneous_pb.EmptyRequest)) {
    throw new Error('Expected argument of type nano.EmptyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_EmptyRequest(buffer_arg) {
  return Miscellaneous_pb.EmptyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_FrontiersRequest(arg) {
  if (!(arg instanceof Frontiers_pb.FrontiersRequest)) {
    throw new Error('Expected argument of type nano.FrontiersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_FrontiersRequest(buffer_arg) {
  return Frontiers_pb.FrontiersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_FrontiersResponse(arg) {
  if (!(arg instanceof Frontiers_pb.FrontiersResponse)) {
    throw new Error('Expected argument of type nano.FrontiersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_FrontiersResponse(buffer_arg) {
  return Frontiers_pb.FrontiersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_KeepaliveRequest(arg) {
  if (!(arg instanceof Miscellaneous_pb.KeepaliveRequest)) {
    throw new Error('Expected argument of type nano.KeepaliveRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_KeepaliveRequest(buffer_arg) {
  return Miscellaneous_pb.KeepaliveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_KeyRequest(arg) {
  if (!(arg instanceof Miscellaneous_pb.KeyRequest)) {
    throw new Error('Expected argument of type nano.KeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_KeyRequest(buffer_arg) {
  return Miscellaneous_pb.KeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_KeyResponse(arg) {
  if (!(arg instanceof Miscellaneous_pb.KeyResponse)) {
    throw new Error('Expected argument of type nano.KeyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_KeyResponse(buffer_arg) {
  return Miscellaneous_pb.KeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_LedgerRequest(arg) {
  if (!(arg instanceof Frontiers_pb.LedgerRequest)) {
    throw new Error('Expected argument of type nano.LedgerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_LedgerRequest(buffer_arg) {
  return Frontiers_pb.LedgerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_LedgerResponse(arg) {
  if (!(arg instanceof Frontiers_pb.LedgerResponse)) {
    throw new Error('Expected argument of type nano.LedgerResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_LedgerResponse(buffer_arg) {
  return Frontiers_pb.LedgerResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_nano_ReceiveRequest(arg) {
  if (!(arg instanceof Blocks_pb.ReceiveRequest)) {
    throw new Error('Expected argument of type nano.ReceiveRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_ReceiveRequest(buffer_arg) {
  return Blocks_pb.ReceiveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_RepresentativesRequest(arg) {
  if (!(arg instanceof Representatives_pb.RepresentativesRequest)) {
    throw new Error('Expected argument of type nano.RepresentativesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_RepresentativesRequest(buffer_arg) {
  return Representatives_pb.RepresentativesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_RepresentativesResponse(arg) {
  if (!(arg instanceof Representatives_pb.RepresentativesResponse)) {
    throw new Error('Expected argument of type nano.RepresentativesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_RepresentativesResponse(buffer_arg) {
  return Representatives_pb.RepresentativesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_SuccessResponse(arg) {
  if (!(arg instanceof Bootstrap_pb.SuccessResponse)) {
    throw new Error('Expected argument of type nano.SuccessResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_SuccessResponse(buffer_arg) {
  return Bootstrap_pb.SuccessResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nano_ValidResponse(arg) {
  if (!(arg instanceof Accounts_pb.ValidResponse)) {
    throw new Error('Expected argument of type nano.ValidResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_ValidResponse(buffer_arg) {
  return Accounts_pb.ValidResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_nano_WeightResponse(arg) {
  if (!(arg instanceof Accounts_pb.WeightResponse)) {
    throw new Error('Expected argument of type nano.WeightResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_nano_WeightResponse(buffer_arg) {
  return Accounts_pb.WeightResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  accountRepresentative: {
    path: '/nano.NanoRPC/AccountRepresentative',
    requestStream: false,
    responseStream: false,
    requestType: Accounts_pb.AccountRequest,
    responseType: Accounts_pb.AccountResponse,
    requestSerialize: serialize_nano_AccountRequest,
    requestDeserialize: deserialize_nano_AccountRequest,
    responseSerialize: serialize_nano_AccountResponse,
    responseDeserialize: deserialize_nano_AccountResponse,
  },
  accountRepresentativeSet: {
    path: '/nano.NanoRPC/AccountRepresentativeSet',
    requestStream: false,
    responseStream: false,
    requestType: Accounts_pb.AccountRepresentativeRequest,
    responseType: Blocks_pb.BlockResponse,
    requestSerialize: serialize_nano_AccountRepresentativeRequest,
    requestDeserialize: deserialize_nano_AccountRepresentativeRequest,
    responseSerialize: serialize_nano_BlockResponse,
    responseDeserialize: deserialize_nano_BlockResponse,
  },
  accountWeight: {
    path: '/nano.NanoRPC/AccountWeight',
    requestStream: false,
    responseStream: false,
    requestType: Accounts_pb.AccountRequest,
    responseType: Accounts_pb.WeightResponse,
    requestSerialize: serialize_nano_AccountRequest,
    requestDeserialize: deserialize_nano_AccountRequest,
    responseSerialize: serialize_nano_WeightResponse,
    responseDeserialize: deserialize_nano_WeightResponse,
  },
  accountsBalances: {
    path: '/nano.NanoRPC/AccountsBalances',
    requestStream: false,
    responseStream: false,
    requestType: Accounts_pb.AccountsRequest,
    responseType: Accounts_pb.AccountsBalancesResponse,
    requestSerialize: serialize_nano_AccountsRequest,
    requestDeserialize: deserialize_nano_AccountsRequest,
    responseSerialize: serialize_nano_AccountsBalancesResponse,
    responseDeserialize: deserialize_nano_AccountsBalancesResponse,
  },
  accountsCreate: {
    path: '/nano.NanoRPC/AccountsCreate',
    requestStream: false,
    responseStream: false,
    requestType: Accounts_pb.AccountsCreateRequest,
    responseType: Accounts_pb.AccountsResponse,
    requestSerialize: serialize_nano_AccountsCreateRequest,
    requestDeserialize: deserialize_nano_AccountsCreateRequest,
    responseSerialize: serialize_nano_AccountsResponse,
    responseDeserialize: deserialize_nano_AccountsResponse,
  },
  accountsFrontiers: {
    path: '/nano.NanoRPC/AccountsFrontiers',
    requestStream: false,
    responseStream: false,
    requestType: Accounts_pb.AccountsRequest,
    responseType: Frontiers_pb.FrontiersResponse,
    requestSerialize: serialize_nano_AccountsRequest,
    requestDeserialize: deserialize_nano_AccountsRequest,
    responseSerialize: serialize_nano_FrontiersResponse,
    responseDeserialize: deserialize_nano_FrontiersResponse,
  },
  accountsPending: {
    path: '/nano.NanoRPC/AccountsPending',
    requestStream: false,
    responseStream: false,
    requestType: Accounts_pb.AccountsPendingRequest,
    responseType: Accounts_pb.AccountsPendingResponse,
    requestSerialize: serialize_nano_AccountsPendingRequest,
    requestDeserialize: deserialize_nano_AccountsPendingRequest,
    responseSerialize: serialize_nano_AccountsPendingResponse,
    responseDeserialize: deserialize_nano_AccountsPendingResponse,
  },
  validateAccountNumber: {
    path: '/nano.NanoRPC/ValidateAccountNumber',
    requestStream: false,
    responseStream: false,
    requestType: Accounts_pb.AccountRequest,
    responseType: Accounts_pb.ValidResponse,
    requestSerialize: serialize_nano_AccountRequest,
    requestDeserialize: deserialize_nano_AccountRequest,
    responseSerialize: serialize_nano_ValidResponse,
    responseDeserialize: deserialize_nano_ValidResponse,
  },
  // Blocks
  blockGet: {
    path: '/nano.NanoRPC/BlockGet',
    requestStream: false,
    responseStream: false,
    requestType: Blocks_pb.BlockRequest,
    responseType: Blocks_pb.Block,
    requestSerialize: serialize_nano_BlockRequest,
    requestDeserialize: deserialize_nano_BlockRequest,
    responseSerialize: serialize_nano_Block,
    responseDeserialize: deserialize_nano_Block,
  },
  blocksGet: {
    path: '/nano.NanoRPC/BlocksGet',
    requestStream: false,
    responseStream: false,
    requestType: Blocks_pb.BlocksRequest,
    responseType: Blocks_pb.BlocksResponse,
    requestSerialize: serialize_nano_BlocksRequest,
    requestDeserialize: deserialize_nano_BlocksRequest,
    responseSerialize: serialize_nano_BlocksResponse,
    responseDeserialize: deserialize_nano_BlocksResponse,
  },
  blocksInfo: {
    path: '/nano.NanoRPC/BlocksInfo',
    requestStream: false,
    responseStream: false,
    requestType: Blocks_pb.BlocksInfoRequest,
    responseType: Blocks_pb.BlocksInfoResponse,
    requestSerialize: serialize_nano_BlocksInfoRequest,
    requestDeserialize: deserialize_nano_BlocksInfoRequest,
    responseSerialize: serialize_nano_BlocksInfoResponse,
    responseDeserialize: deserialize_nano_BlocksInfoResponse,
  },
  blockAccount: {
    path: '/nano.NanoRPC/BlockAccount',
    requestStream: false,
    responseStream: false,
    requestType: Blocks_pb.BlockRequest,
    responseType: Accounts_pb.AccountResponse,
    requestSerialize: serialize_nano_BlockRequest,
    requestDeserialize: deserialize_nano_BlockRequest,
    responseSerialize: serialize_nano_AccountResponse,
    responseDeserialize: deserialize_nano_AccountResponse,
  },
  blockCount: {
    path: '/nano.NanoRPC/BlockCount',
    requestStream: false,
    responseStream: false,
    requestType: Miscellaneous_pb.EmptyRequest,
    responseType: Blocks_pb.BlockCountResponse,
    requestSerialize: serialize_nano_EmptyRequest,
    requestDeserialize: deserialize_nano_EmptyRequest,
    responseSerialize: serialize_nano_BlockCountResponse,
    responseDeserialize: deserialize_nano_BlockCountResponse,
  },
  blockCountType: {
    path: '/nano.NanoRPC/BlockCountType',
    requestStream: false,
    responseStream: false,
    requestType: Miscellaneous_pb.EmptyRequest,
    responseType: Blocks_pb.BlockCountTypeResponse,
    requestSerialize: serialize_nano_EmptyRequest,
    requestDeserialize: deserialize_nano_EmptyRequest,
    responseSerialize: serialize_nano_BlockCountTypeResponse,
    responseDeserialize: deserialize_nano_BlockCountTypeResponse,
  },
  blockHash: {
    path: '/nano.NanoRPC/BlockHash',
    requestStream: false,
    responseStream: false,
    requestType: Blocks_pb.BlockHashRequest,
    responseType: Blocks_pb.BlockResponse,
    requestSerialize: serialize_nano_BlockHashRequest,
    requestDeserialize: deserialize_nano_BlockHashRequest,
    responseSerialize: serialize_nano_BlockResponse,
    responseDeserialize: deserialize_nano_BlockResponse,
  },
  chain: {
    path: '/nano.NanoRPC/Chain',
    requestStream: false,
    responseStream: false,
    requestType: Blocks_pb.ChainRequest,
    responseType: Blocks_pb.BlockHashesResponse,
    requestSerialize: serialize_nano_ChainRequest,
    requestDeserialize: deserialize_nano_ChainRequest,
    responseSerialize: serialize_nano_BlockHashesResponse,
    responseDeserialize: deserialize_nano_BlockHashesResponse,
  },
  blockCreate: {
    path: '/nano.NanoRPC/BlockCreate',
    requestStream: false,
    responseStream: false,
    requestType: Blocks_pb.BlockCreateRequest,
    responseType: Blocks_pb.BlockCreateResponse,
    requestSerialize: serialize_nano_BlockCreateRequest,
    requestDeserialize: deserialize_nano_BlockCreateRequest,
    responseSerialize: serialize_nano_BlockCreateResponse,
    responseDeserialize: deserialize_nano_BlockCreateResponse,
  },
  blockProcess: {
    path: '/nano.NanoRPC/BlockProcess',
    requestStream: false,
    responseStream: false,
    requestType: Blocks_pb.BlockProcessRequest,
    responseType: Blocks_pb.BlockResponse,
    requestSerialize: serialize_nano_BlockProcessRequest,
    requestDeserialize: deserialize_nano_BlockProcessRequest,
    responseSerialize: serialize_nano_BlockResponse,
    responseDeserialize: deserialize_nano_BlockResponse,
  },
  receive: {
    path: '/nano.NanoRPC/Receive',
    requestStream: false,
    responseStream: false,
    requestType: Blocks_pb.ReceiveRequest,
    responseType: Blocks_pb.BlockResponse,
    requestSerialize: serialize_nano_ReceiveRequest,
    requestDeserialize: deserialize_nano_ReceiveRequest,
    responseSerialize: serialize_nano_BlockResponse,
    responseDeserialize: deserialize_nano_BlockResponse,
  },
  // Bootstrap
  bootstrap: {
    path: '/nano.NanoRPC/Bootstrap',
    requestStream: false,
    responseStream: false,
    requestType: Bootstrap_pb.BootstrapRequest,
    responseType: Bootstrap_pb.SuccessResponse,
    requestSerialize: serialize_nano_BootstrapRequest,
    requestDeserialize: deserialize_nano_BootstrapRequest,
    responseSerialize: serialize_nano_SuccessResponse,
    responseDeserialize: deserialize_nano_SuccessResponse,
  },
  bootstrapLazy: {
    path: '/nano.NanoRPC/BootstrapLazy',
    requestStream: false,
    responseStream: false,
    requestType: Bootstrap_pb.BootstrapLazyRequest,
    responseType: Bootstrap_pb.SuccessResponse,
    requestSerialize: serialize_nano_BootstrapLazyRequest,
    requestDeserialize: deserialize_nano_BootstrapLazyRequest,
    responseSerialize: serialize_nano_SuccessResponse,
    responseDeserialize: deserialize_nano_SuccessResponse,
  },
  bootstrapAny: {
    path: '/nano.NanoRPC/BootstrapAny',
    requestStream: false,
    responseStream: false,
    requestType: Miscellaneous_pb.EmptyRequest,
    responseType: Bootstrap_pb.SuccessResponse,
    requestSerialize: serialize_nano_EmptyRequest,
    requestDeserialize: deserialize_nano_EmptyRequest,
    responseSerialize: serialize_nano_SuccessResponse,
    responseDeserialize: deserialize_nano_SuccessResponse,
  },
  bootstrapStatus: {
    path: '/nano.NanoRPC/BootstrapStatus',
    requestStream: false,
    responseStream: false,
    requestType: Miscellaneous_pb.EmptyRequest,
    responseType: Bootstrap_pb.BootstrapStatusResponse,
    requestSerialize: serialize_nano_EmptyRequest,
    requestDeserialize: deserialize_nano_EmptyRequest,
    responseSerialize: serialize_nano_BootstrapStatusResponse,
    responseDeserialize: deserialize_nano_BootstrapStatusResponse,
  },
  // Confirmation
  confirmationActive: {
    path: '/nano.NanoRPC/ConfirmationActive',
    requestStream: false,
    responseStream: false,
    requestType: Confirmation_pb.ActiveConfirmationRequest,
    responseType: Blocks_pb.BlockHashesResponse,
    requestSerialize: serialize_nano_ActiveConfirmationRequest,
    requestDeserialize: deserialize_nano_ActiveConfirmationRequest,
    responseSerialize: serialize_nano_BlockHashesResponse,
    responseDeserialize: deserialize_nano_BlockHashesResponse,
  },
  confirmationHistory: {
    path: '/nano.NanoRPC/ConfirmationHistory',
    requestStream: false,
    responseStream: false,
    requestType: Miscellaneous_pb.EmptyRequest,
    responseType: Confirmation_pb.ConfirmationHistoryResponse,
    requestSerialize: serialize_nano_EmptyRequest,
    requestDeserialize: deserialize_nano_EmptyRequest,
    responseSerialize: serialize_nano_ConfirmationHistoryResponse,
    responseDeserialize: deserialize_nano_ConfirmationHistoryResponse,
  },
  confirmationInfo: {
    path: '/nano.NanoRPC/ConfirmationInfo',
    requestStream: false,
    responseStream: false,
    requestType: Confirmation_pb.ConfirmationInfoRequest,
    responseType: Confirmation_pb.ConfirmationInfoResponse,
    requestSerialize: serialize_nano_ConfirmationInfoRequest,
    requestDeserialize: deserialize_nano_ConfirmationInfoRequest,
    responseSerialize: serialize_nano_ConfirmationInfoResponse,
    responseDeserialize: deserialize_nano_ConfirmationInfoResponse,
  },
  confirmationQuorum: {
    path: '/nano.NanoRPC/ConfirmationQuorum',
    requestStream: false,
    responseStream: false,
    requestType: Confirmation_pb.ConfirmationQuorumRequest,
    responseType: Confirmation_pb.ConfirmationQuorumResponse,
    requestSerialize: serialize_nano_ConfirmationQuorumRequest,
    requestDeserialize: deserialize_nano_ConfirmationQuorumRequest,
    responseSerialize: serialize_nano_ConfirmationQuorumResponse,
    responseDeserialize: deserialize_nano_ConfirmationQuorumResponse,
  },
  // Conversion
  mraiFromRaw: {
    path: '/nano.NanoRPC/MraiFromRaw',
    requestStream: false,
    responseStream: false,
    requestType: Conversion_pb.AmountRequest,
    responseType: Conversion_pb.AmountResponse,
    requestSerialize: serialize_nano_AmountRequest,
    requestDeserialize: deserialize_nano_AmountRequest,
    responseSerialize: serialize_nano_AmountResponse,
    responseDeserialize: deserialize_nano_AmountResponse,
  },
  mraiToRaw: {
    path: '/nano.NanoRPC/MraiToRaw',
    requestStream: false,
    responseStream: false,
    requestType: Conversion_pb.AmountRequest,
    responseType: Conversion_pb.AmountResponse,
    requestSerialize: serialize_nano_AmountRequest,
    requestDeserialize: deserialize_nano_AmountRequest,
    responseSerialize: serialize_nano_AmountResponse,
    responseDeserialize: deserialize_nano_AmountResponse,
  },
  kraiFromRaw: {
    path: '/nano.NanoRPC/KraiFromRaw',
    requestStream: false,
    responseStream: false,
    requestType: Conversion_pb.AmountRequest,
    responseType: Conversion_pb.AmountResponse,
    requestSerialize: serialize_nano_AmountRequest,
    requestDeserialize: deserialize_nano_AmountRequest,
    responseSerialize: serialize_nano_AmountResponse,
    responseDeserialize: deserialize_nano_AmountResponse,
  },
  kraiToRaw: {
    path: '/nano.NanoRPC/KraiToRaw',
    requestStream: false,
    responseStream: false,
    requestType: Conversion_pb.AmountRequest,
    responseType: Conversion_pb.AmountResponse,
    requestSerialize: serialize_nano_AmountRequest,
    requestDeserialize: deserialize_nano_AmountRequest,
    responseSerialize: serialize_nano_AmountResponse,
    responseDeserialize: deserialize_nano_AmountResponse,
  },
  raiFromRaw: {
    path: '/nano.NanoRPC/RaiFromRaw',
    requestStream: false,
    responseStream: false,
    requestType: Conversion_pb.AmountRequest,
    responseType: Conversion_pb.AmountResponse,
    requestSerialize: serialize_nano_AmountRequest,
    requestDeserialize: deserialize_nano_AmountRequest,
    responseSerialize: serialize_nano_AmountResponse,
    responseDeserialize: deserialize_nano_AmountResponse,
  },
  raiToRaw: {
    path: '/nano.NanoRPC/RaiToRaw',
    requestStream: false,
    responseStream: false,
    requestType: Conversion_pb.AmountRequest,
    responseType: Conversion_pb.AmountResponse,
    requestSerialize: serialize_nano_AmountRequest,
    requestDeserialize: deserialize_nano_AmountRequest,
    responseSerialize: serialize_nano_AmountResponse,
    responseDeserialize: deserialize_nano_AmountResponse,
  },
  // Delegators
  delegators: {
    path: '/nano.NanoRPC/Delegators',
    requestStream: false,
    responseStream: false,
    requestType: Accounts_pb.AccountRequest,
    responseType: Delegators_pb.DelegatorsResponse,
    requestSerialize: serialize_nano_AccountRequest,
    requestDeserialize: deserialize_nano_AccountRequest,
    responseSerialize: serialize_nano_DelegatorsResponse,
    responseDeserialize: deserialize_nano_DelegatorsResponse,
  },
  delegatorsCount: {
    path: '/nano.NanoRPC/DelegatorsCount',
    requestStream: false,
    responseStream: false,
    requestType: Accounts_pb.AccountRequest,
    responseType: Delegators_pb.CountResponse,
    requestSerialize: serialize_nano_AccountRequest,
    requestDeserialize: deserialize_nano_AccountRequest,
    responseSerialize: serialize_nano_CountResponse,
    responseDeserialize: deserialize_nano_CountResponse,
  },
  // Frontiers
  frontiers: {
    path: '/nano.NanoRPC/Frontiers',
    requestStream: false,
    responseStream: false,
    requestType: Frontiers_pb.FrontiersRequest,
    responseType: Frontiers_pb.FrontiersResponse,
    requestSerialize: serialize_nano_FrontiersRequest,
    requestDeserialize: deserialize_nano_FrontiersRequest,
    responseSerialize: serialize_nano_FrontiersResponse,
    responseDeserialize: deserialize_nano_FrontiersResponse,
  },
  frontierCount: {
    path: '/nano.NanoRPC/FrontierCount',
    requestStream: false,
    responseStream: false,
    requestType: Miscellaneous_pb.EmptyRequest,
    responseType: Delegators_pb.CountResponse,
    requestSerialize: serialize_nano_EmptyRequest,
    requestDeserialize: deserialize_nano_EmptyRequest,
    responseSerialize: serialize_nano_CountResponse,
    responseDeserialize: deserialize_nano_CountResponse,
  },
  ledger: {
    path: '/nano.NanoRPC/Ledger',
    requestStream: false,
    responseStream: false,
    requestType: Frontiers_pb.LedgerRequest,
    responseType: Frontiers_pb.LedgerResponse,
    requestSerialize: serialize_nano_LedgerRequest,
    requestDeserialize: deserialize_nano_LedgerRequest,
    responseSerialize: serialize_nano_LedgerResponse,
    responseDeserialize: deserialize_nano_LedgerResponse,
  },
  // Peers
  peers: {
    path: '/nano.NanoRPC/Peers',
    requestStream: false,
    responseStream: false,
    requestType: Miscellaneous_pb.EmptyRequest,
    responseType: Peers_pb.PeersResponse,
    requestSerialize: serialize_nano_EmptyRequest,
    requestDeserialize: deserialize_nano_EmptyRequest,
    responseSerialize: serialize_nano_PeersResponse,
    responseDeserialize: deserialize_nano_PeersResponse,
  },
  // Representatives
  representatives: {
    path: '/nano.NanoRPC/Representatives',
    requestStream: false,
    responseStream: false,
    requestType: Representatives_pb.RepresentativesRequest,
    responseType: Representatives_pb.RepresentativesResponse,
    requestSerialize: serialize_nano_RepresentativesRequest,
    requestDeserialize: deserialize_nano_RepresentativesRequest,
    responseSerialize: serialize_nano_RepresentativesResponse,
    responseDeserialize: deserialize_nano_RepresentativesResponse,
  },
  representativesOnline: {
    path: '/nano.NanoRPC/RepresentativesOnline',
    requestStream: false,
    responseStream: false,
    requestType: Miscellaneous_pb.EmptyRequest,
    responseType: Accounts_pb.AccountsResponse,
    requestSerialize: serialize_nano_EmptyRequest,
    requestDeserialize: deserialize_nano_EmptyRequest,
    responseSerialize: serialize_nano_AccountsResponse,
    responseDeserialize: deserialize_nano_AccountsResponse,
  },
  // Miscellaneous
  deterministicKey: {
    path: '/nano.NanoRPC/DeterministicKey',
    requestStream: false,
    responseStream: false,
    requestType: Miscellaneous_pb.DeterministicKeyRequest,
    responseType: Miscellaneous_pb.KeyResponse,
    requestSerialize: serialize_nano_DeterministicKeyRequest,
    requestDeserialize: deserialize_nano_DeterministicKeyRequest,
    responseSerialize: serialize_nano_KeyResponse,
    responseDeserialize: deserialize_nano_KeyResponse,
  },
  keyCreate: {
    path: '/nano.NanoRPC/KeyCreate',
    requestStream: false,
    responseStream: false,
    requestType: Miscellaneous_pb.EmptyRequest,
    responseType: Miscellaneous_pb.KeyResponse,
    requestSerialize: serialize_nano_EmptyRequest,
    requestDeserialize: deserialize_nano_EmptyRequest,
    responseSerialize: serialize_nano_KeyResponse,
    responseDeserialize: deserialize_nano_KeyResponse,
  },
  keyExpand: {
    path: '/nano.NanoRPC/KeyExpand',
    requestStream: false,
    responseStream: false,
    requestType: Miscellaneous_pb.KeyRequest,
    responseType: Miscellaneous_pb.KeyResponse,
    requestSerialize: serialize_nano_KeyRequest,
    requestDeserialize: deserialize_nano_KeyRequest,
    responseSerialize: serialize_nano_KeyResponse,
    responseDeserialize: deserialize_nano_KeyResponse,
  },
  keepalive: {
    path: '/nano.NanoRPC/Keepalive',
    requestStream: false,
    responseStream: false,
    requestType: Miscellaneous_pb.KeepaliveRequest,
    responseType: Miscellaneous_pb.EmptyRequest,
    requestSerialize: serialize_nano_KeepaliveRequest,
    requestDeserialize: deserialize_nano_KeepaliveRequest,
    responseSerialize: serialize_nano_EmptyRequest,
    responseDeserialize: deserialize_nano_EmptyRequest,
  },
  nodeId: {
    path: '/nano.NanoRPC/NodeId',
    requestStream: false,
    responseStream: false,
    requestType: Miscellaneous_pb.EmptyRequest,
    responseType: Miscellaneous_pb.KeyResponse,
    requestSerialize: serialize_nano_EmptyRequest,
    requestDeserialize: deserialize_nano_EmptyRequest,
    responseSerialize: serialize_nano_KeyResponse,
    responseDeserialize: deserialize_nano_KeyResponse,
  },
  nodeIdDelete: {
    path: '/nano.NanoRPC/NodeIdDelete',
    requestStream: false,
    responseStream: false,
    requestType: Miscellaneous_pb.EmptyRequest,
    responseType: Bootstrap_pb.SuccessResponse,
    requestSerialize: serialize_nano_EmptyRequest,
    requestDeserialize: deserialize_nano_EmptyRequest,
    responseSerialize: serialize_nano_SuccessResponse,
    responseDeserialize: deserialize_nano_SuccessResponse,
  },
  receiveMinimum: {
    path: '/nano.NanoRPC/ReceiveMinimum',
    requestStream: false,
    responseStream: false,
    requestType: Miscellaneous_pb.EmptyRequest,
    responseType: Conversion_pb.AmountResponse,
    requestSerialize: serialize_nano_EmptyRequest,
    requestDeserialize: deserialize_nano_EmptyRequest,
    responseSerialize: serialize_nano_AmountResponse,
    responseDeserialize: deserialize_nano_AmountResponse,
  },
  receiveMinimumSet: {
    path: '/nano.NanoRPC/ReceiveMinimumSet',
    requestStream: false,
    responseStream: false,
    requestType: Conversion_pb.AmountRequest,
    responseType: Bootstrap_pb.SuccessResponse,
    requestSerialize: serialize_nano_AmountRequest,
    requestDeserialize: deserialize_nano_AmountRequest,
    responseSerialize: serialize_nano_SuccessResponse,
    responseDeserialize: deserialize_nano_SuccessResponse,
  },
};

exports.NanoRPCClient = grpc.makeGenericClientConstructor(NanoRPCService);
