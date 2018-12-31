const buildRpc = require("../lib/buildRpc");
const buildMap = require("../lib/buildMap");
const { DeterministicKeyResponse } = require("../grpc/NanoService_pb");

module.exports = client => ({
  deterministicKey: buildRpc(
    client,
    req => ({
      action: "deterministic_key",
      seed: req.getSeed(),
      index: req.getIndex()
    }),
    data =>
      new DeterministicKeyResponse([data.private, data.public, data.account])
  )
});
