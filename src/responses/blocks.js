const messages = require("../grpc/NanoService_pb");

module.exports = function(client) {
  return {
    blockCount: async (call, callback) => {
      const data = await client.call({ action: "block_count" });
      const reply = new messages.BlockCountResponse();
      reply.setCount(data.count);
      reply.setUnchecked(data.unchecked);

      callback(null, reply);
    }
  };
};
