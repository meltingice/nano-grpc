const buildRpc = require("../lib/buildRpc");
const { BlockCountResponse } = require("../grpc/NanoService_pb");

module.exports = client => ({
  blockCount: buildRpc(
    client,
    () => ({ action: "block_count" }),
    data => new BlockCountResponse([data.count, data.unchecked])
  )
});
