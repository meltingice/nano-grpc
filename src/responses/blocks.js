const buildRpc = require("../lib/buildRpc");
const buildMap = require("../lib/buildMap");
const {
  BlockCountResponse,
  Block,
  BlockType,
  BlocksResponse,
  BlocksInfoResponse
} = require("../grpc/NanoService_pb");

const contentsToBlockArray = contents => {
  const data = JSON.parse(contents);
  return [
    BlockType[data.type.toUpperCase()],
    data.account,
    data.previous,
    data.representative,
    data.balance,
    data.link,
    data.link_as_account,
    data.signature,
    data.work
  ];
};

module.exports = client => ({
  blockCount: buildRpc(
    client,
    () => ({ action: "block_count" }),
    data => new BlockCountResponse([data.count, data.unchecked])
  ),

  blockGet: buildRpc(
    client,
    req => ({ action: "block", hash: req.getHash() }),
    data => new Block(contentsToBlockArray(data.contents))
  ),

  blocksGet: buildRpc(
    client,
    req => ({ action: "blocks", hashes: req.getHashesList() }),
    resp => {
      const reply = new BlocksResponse();
      buildMap(reply.getBlocksMap(), resp.blocks, value => {
        const data = JSON.parse(value);
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
      });

      return reply;
    }
  ),

  blocksInfo: buildRpc(
    client,
    req => ({
      action: "blocks_info",
      hashes: req.getHashesList(),
      pending: req.getPending(),
      source: req.getSource(),
      balance: req.getBalance()
    }),
    data => {
      const { BlockWithInfo } = BlocksInfoResponse;
      const reply = new BlocksInfoResponse();
      buildMap(
        reply.getBlocksMap(),
        data.blocks,
        block =>
          new BlockWithInfo([
            contentsToBlockArray(block.contents),
            block.block_account,
            block.amount,
            block.pending,
            block.source_account,
            block.balance
          ])
      );

      return reply;
    }
  )
});
