const buildRpc = require("../lib/buildRpc");
const buildMap = require("../lib/buildMap");
const { contentsToBlockArray } = require("../lib/block");
const {
  BlockCountResponse,
  Block,
  BlockType,
  BlocksResponse,
  BlocksInfoResponse,
  AccountResponse,
  BlockCountTypeResponse,
  BlockResponse,
  BlockHashesResponse,
  BlockCreateResponse
} = require("../grpc/NanoService_pb");

const blockEnumToType = type => Object.keys(BlockType)[type].toLowerCase();

module.exports = client => ({
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
  ),

  blockAccount: buildRpc(
    client,
    req => ({ action: "block_account", hash: req.getHash() }),
    data => new AccountResponse([data.account])
  ),

  blockCount: buildRpc(
    client,
    () => ({ action: "block_count" }),
    data => new BlockCountResponse([data.count, data.unchecked])
  ),

  blockCountType: buildRpc(
    client,
    req => ({ action: "block_count_type" }),
    data => {
      const reply = new BlockCountTypeResponse();
      buildMap(reply.getTypesMap(), data, value => value);
      return reply;
    }
  ),

  blockHash: buildRpc(
    client,
    req => {
      const block = req.getBlock().toObject();
      block.type = blockEnumToType(block.type);

      return {
        action: "block_hash",
        block: JSON.stringify(block)
      };
    },
    data => new BlockResponse([data.hash])
  ),

  chain: buildRpc(
    client,
    req => ({ action: "chain", block: req.getHash(), count: req.getCount() }),
    data => new BlockHashesResponse([data.blocks])
  ),

  blockCreate: buildRpc(
    client,
    req => {
      let block = req.toObject();
      block.type = blockEnumToType(block.type);
      Object.keys(block).forEach(key => {
        if (block[key] === "") delete block[key];
      });

      return {
        action: "block_create",
        ...block
      };
    },
    data =>
      new BlockCreateResponse([data.hash, contentsToBlockArray(data.block)])
  ),

  blockProcess: buildRpc(
    client,
    req => {
      const block = req.getBlock().toObject();
      block.type = blockEnumToType(block.type);
      block.link_as_account = block.linkAsAccount;
      delete block.linkAsAccount;

      return {
        action: "process",
        block: JSON.stringify(block),
        force: req.getForce()
      };
    },
    data => new BlockResponse([data.hash])
  ),

  receive: buildRpc(
    client,
    req => ({
      action: "receive",
      wallet: req.getWallet(),
      account: req.getAccount(),
      block: req.getBlock(),
      work: req.getWork().length ? req.getWork() : undefined
    }),
    data => new BlockResponse([data.block])
  )
});
