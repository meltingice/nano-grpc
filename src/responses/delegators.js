const buildRpc = require("../lib/buildRpc");
const buildMap = require("../lib/buildMap");
const { DelegatorsResponse, CountResponse } = require("../grpc/NanoService_pb");

module.exports = client => ({
  delegators: buildRpc(
    client,
    req => ({ action: "delegators", account: req.getAccount() }),
    data => {
      const reply = new DelegatorsResponse();
      buildMap(reply.getDelegatorsMap(), data.delegators, value => value);
      return reply;
    }
  ),

  delegatorsCount: buildRpc(
    client,
    req => ({ action: "delegators_count", account: req.getAccount() }),
    data => new CountResponse([data.count])
  )
});
