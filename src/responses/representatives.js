const buildRpc = require("../lib/buildRpc");
const buildMap = require("../lib/buildMap");
const { RepresentativesResponse } = require("../grpc/NanoService_pb");

module.exports = client => ({
  representatives: buildRpc(
    client,
    req => ({
      action: "representatives",
      count: req.getCount() ? req.getCount() : undefined,
      sorting: req.getSorting()
    }),
    data => {
      const reply = new RepresentativesResponse()
      buildMap(reply.getRepresentativesMap(), data.representatives, value => value);
      return reply
    }
  )
})
