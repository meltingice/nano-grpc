const Messages = require("./grpc/NanoService_pb");
const Services = require("./grpc/NanoService_grpc_pb");
const contentsToBlockArray = require("./lib/block");
const buildMap = require("./lib/buildMap");

module.exports = {
  Messages,
  Services,
  contentsToBlockArray,
  buildMap
};
