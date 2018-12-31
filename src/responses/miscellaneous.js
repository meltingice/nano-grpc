const buildRpc = require("../lib/buildRpc");
const buildMap = require("../lib/buildMap");
const { KeyResponse, EmptyRequest } = require("../grpc/NanoService_pb");

module.exports = client => ({
  deterministicKey: buildRpc(
    client,
    req => ({
      action: "deterministic_key",
      seed: req.getSeed(),
      index: req.getIndex()
    }),
    data => new KeyResponse([data.private, data.public, data.account])
  ),

  keepalive: buildRpc(
    client,
    req => ({
      action: "keepalive",
      address: req.getAddress(),
      port: req.getPort()
    }),
    data => new EmptyRequest()
  ),

  keyCreate: buildRpc(
    client,
    req => ({ action: "key_create" }),
    data => new KeyResponse([data.private, data.public, data.account])
  ),

  keyExpand: buildRpc(
    client,
    req => ({ action: "key_expand", key: req.getKey() }),
    data => new KeyResponse([data.private, data.public, data.account])
  )
});
