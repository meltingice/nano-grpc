module.exports = (client, buildRequest, buildResponse) => {
  return async (call, callback) => {
    const nodeReq = Object.assign({}, buildRequest(call.request));

    const data = await client.call(nodeReq);
    const reply = buildResponse(data);

    callback(null, reply);
  };
};
