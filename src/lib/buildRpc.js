const grpc = require("grpc");

module.exports = (client, buildRequest, buildResponse) => {
  return async (call, callback) => {
    const nodeReq = buildRequest(call.request);

    let data;
    try {
      data = await client.call(nodeReq);
    } catch (e) {
      console.log(e);
      return callback({
        code: grpc.status.UNAVAILABLE,
        message: e.message
      });
    }

    const reply = buildResponse(data, call.request);

    callback(null, reply);
  };
};
