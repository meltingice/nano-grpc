const buildRpc = require("../lib/buildRpc");
const buildMap = require("../lib/buildMap");
const {
  FrontiersResponse,
  CountResponse,
  LedgerResponse
} = require("../grpc/NanoService_pb");

module.exports = client => ({
  frontiers: buildRpc(
    client,
    req => ({
      action: "frontiers",
      account: req.getAccount(),
      count: req.getCount()
    }),
    data => {
      const reply = new FrontiersResponse();
      buildMap(reply.getFrontiersMap(), data.frontiers, value => value);
      return reply;
    }
  ),

  frontierCount: buildRpc(
    client,
    req => ({ action: "frontier_count" }),
    data => new CountResponse([data.count])
  ),

  ledger: buildRpc(
    client,
    req => ({
      action: "ledger",
      account: req.getAccount(),
      count: req.getCount(),
      representative: req.getRepresentative(),
      weight: req.getWeight(),
      pending: req.getPending(),
      modified_since: req.getModifiedSince()
        ? req.getModifiedSince().getSeconds()
        : undefined,
      sorting: req.getSorting()
    }),
    data => {
      const { Account } = LedgerResponse;
      const reply = new LedgerResponse();
      buildMap(
        reply.getAccountsMap(),
        data.accounts,
        a =>
          new Account([
            a.frontier,
            a.open_block,
            a.representative_block,
            a.balance,
            [a.modified_timestamp, 0],
            a.block_count,
            a.representative,
            a.weight,
            a.pending
          ])
      );

      return reply;
    }
  )
});
