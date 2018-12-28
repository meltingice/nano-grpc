const { PeersResponse, Peer } = require("../grpc/NanoService_pb");

module.exports = client => ({
  peers: async (call, callback) => {
    const data = await client.call({ action: "peers" });
    const reply = new PeersResponse();
    reply.setPeersList(
      Object.entries(data.peers).map(entry => {
        const peer = new Peer();
        peer.setAddress(entry[0]);
        peer.setVersion(entry[1]);
        return peer;
      })
    );

    callback(null, reply);
  }
});
