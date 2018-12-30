const buildRpc = require("../lib/buildRpc");
const {
  BlockCountResponse,
  Block,
  BlockType
} = require("../grpc/NanoService_pb");

module.exports = client => ({
  blockCount: buildRpc(
    client,
    () => ({ action: "block_count" }),
    data => new BlockCountResponse([data.count, data.unchecked])
  ),

  blockGet: buildRpc(
    client,
    req => ({ action: "block", hash: req.getHash() }),
    resp => {
      const data = JSON.parse(resp.contents);
      return new Block([
        BlockType[data.type.toUpperCase()],
        data.account,
        data.previous,
        data.representative,
        data.balance,
        data.link,
        data.link_as_account,
        data.signature,
        data.work
      ]);
    }
  )
});
