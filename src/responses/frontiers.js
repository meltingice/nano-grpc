const buildRpc = require("../lib/buildRpc");
const buildMap = require("../lib/buildMap");
const { FrontiersResponse, CountResponse } = require("../grpc/NanoService_pb");

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
  )
});
