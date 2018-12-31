#!/usr/bin/env node

const program = require("commander");
const grpc = require("grpc");
const services = require("./src/grpc/NanoService_grpc_pb");

program
  .name("nano-grpc")
  .version(require("./package.json").version)
  .option(
    "-d, --driver [driver]",
    "client driver for connecting to the Nano node. Can be: ipc, http.",
    "ipc"
  )
  .option(
    "--ipc [path]",
    "path to the Nano IPC socket, if enabled",
    "/tmp/nano"
  )
  .option(
    "--http [url]",
    "URL of the Nano HTTP RPC, if enabled",
    "http://[::1]:7076"
  )
  .option("-h, --host [host]", "host for the gRPC server", "0.0.0.0")
  .option("-p, --port [port]", "port for the gRPC server", 50051)
  .parse(process.argv);

const Driver = require("./src/drivers")(program.driver);
const client = new Driver(program);

const responses = require("./src/responses")(client);

async function main() {
  try {
    await client.connect();
  } catch (e) {
    console.warn("IPC not available. Attempting to start anyways...");
  }

  const server = new grpc.Server();
  server.addService(services.NanoRPCService, responses);
  server.bind(
    `${program.host}:${program.port}`,
    grpc.ServerCredentials.createInsecure()
  );

  server.start();
}

main();
