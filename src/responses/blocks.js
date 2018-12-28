const buildRpc = require("../lib/buildRpc");
const { BlockCountResponse } = require("../grpc/NanoService_pb");

module.exports = client => ({
  blockCount: buildRpc(
    client,
    () => ({ action: "block_count" }),
    data => {
      const reply = new BlockCountResponse();
      reply.setCount(data.count);
      reply.setUnchecked(data.unchecked);
      return reply;
    }
  )
});
