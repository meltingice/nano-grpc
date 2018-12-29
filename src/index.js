const grpc = require("grpc");
const services = require("./grpc/NanoService_grpc_pb");
const NanoIPC = require("nano-ipc");

const client = new NanoIPC.Client();
const responses = require("./responses")(client);

async function main() {
  try {
    await client.connect();
  } catch (e) {
    console.warn("IPC not available. Attempting to start anyways...");
  }

  const server = new grpc.Server();
  server.addService(services.NanoRPCService, responses);
  server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
