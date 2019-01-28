# Nano gRPC

A gRPC server for the Nano cryptocurrency node. Allows you to query the node using type-safe, well-defined, and lightweight messages in any language supported by [gRPC](https://grpc.io).

This server supports communication with the Nano node via the experimental IPC RPC or via the HTTP RPC.

**This is a work in progress. Not all of the RPC methods are implemented yet.**

## Installation

nano-grpc can be installed from npm:

```
npm install nano-grpc -g
nano-grpc --help
```

Or you can install it from source:

```
git clone https://github.com/meltingice/nano-grpc.git
cd nano-grpc
npm install
./index.js --help
```

## Configuration

All of the available configuration options are viewable with the `--help` flag.

```
Usage: nano-grpc [options]

Options:
  -V, --version          output the version number
  -d, --driver [driver]  client driver for connecting to the Nano node. Can be: ipc, http. (default: "ipc")
  --ipc [path]           path to the Nano IPC socket, if enabled (default: "/tmp/nano")
  --http [url]           URL of the Nano HTTP RPC, if enabled (default: "http://[::1]:7076")
  -h, --host [host]      host for the gRPC server (default: "0.0.0.0")
  -p, --port [port]      port for the gRPC server (default: 50051)
  -h, --help             output usage information
```

## Development

If you make changes to any of the protobufs, the libraries for the server have to be recompiled with `npm run build` after they're modified.

If you want to play around with the RPC, I highly recommend [BloomRPC](https://github.com/uw-labs/bloomrpc).
