const buildRpc = require("../lib/buildRpc");
const { PeersResponse, Peer } = require("../grpc/NanoService_pb");

module.exports = client => ({
  peers: buildRpc(
    client,
    () => ({ action: "peers" }),
    data => {
      const reply = new PeersResponse();
      reply.setPeersList(
        Object.entries(data.peers).map(entry => {
          const peer = new Peer();
          peer.setAddress(entry[0]);
          peer.setVersion(entry[1]);
          return peer;
        })
      );

      return reply;
    }
  )
});
