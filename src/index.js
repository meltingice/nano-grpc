const grpc = require("grpc");
const services = require("./grpc/NanoService_grpc_pb");
const NanoIPC = require("nano-ipc");

const client = new NanoIPC.Client();
const responses = require("./responses")(client);

async function main() {
  await client.connect();

  const server = new grpc.Server();
  server.addService(services.NanoRPCService, responses);
  server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
