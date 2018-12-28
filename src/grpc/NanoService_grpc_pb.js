// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var Blocks_pb = require('./Blocks_pb.js');
var Peers_pb = require('./Peers_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
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
  blockCount: {
    path: '/nano.NanoRPC/BlockCount',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: Blocks_pb.BlockCountResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_nano_BlockCountResponse,
    responseDeserialize: deserialize_nano_BlockCountResponse,
  },
  peers: {
    path: '/nano.NanoRPC/Peers',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: Peers_pb.PeersResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_nano_PeersResponse,
    responseDeserialize: deserialize_nano_PeersResponse,
  },
};

exports.NanoRPCClient = grpc.makeGenericClientConstructor(NanoRPCService);
