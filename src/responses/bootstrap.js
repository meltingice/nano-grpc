const buildRpc = require("../lib/buildRpc");
const buildMap = require("../lib/buildMap");
const {
  SuccessResponse,
  BootstrapStatusResponse
} = require("../grpc/NanoService_pb");

module.exports = client => ({
  bootstrap: buildRpc(
    client,
    req => Object.assign({ action: "bootstrap" }, req.toObject()),
    data => new SuccessResponse([data.success === "" ? true : false])
  ),

  bootstrapLazy: buildRpc(
    client,
    req => ({
      action: "bootstrap_lazy",
      hash: req.getHash(),
      force: req.getForce()
    }),
    data => new SuccessResponse([data.started === "1" ? true : false])
  ),

  bootstrapAny: buildRpc(
    client,
    req => ({ action: "bootstrap_any" }),
    data => new SuccessResponse([data.success === "" ? true : false])
  ),

  bootstrapStatus: buildRpc(
    client,
    req => ({ action: "bootstrap_status" }),
    data => {
      const reply = new BootstrapStatusResponse();
      buildMap(reply.getStatusMap(), data, value => value);
      return reply;
    }
  )
});
