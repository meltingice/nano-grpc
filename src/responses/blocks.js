const { BlockCountResponse } = require("../grpc/NanoService_pb");

module.exports = client => ({
  blockCount: async (call, callback) => {
    const data = await client.call({ action: "block_count" });
    const reply = new BlockCountResponse();
    reply.setCount(data.count);
    reply.setUnchecked(data.unchecked);

    callback(null, reply);
  }
});
