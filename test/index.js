const grpc = require("grpc");

const messages = require("../src/grpc/NanoService_pb");
const services = require("../src/grpc/NanoService_grpc_pb");

function main() {
  var client = new services.NanoRPCClient(
    "localhost:50051",
    grpc.credentials.createInsecure()
  );

  var request = new messages.EmptyRequest();

  client.blockCount(request, function(err, response) {
    if (err) console.log(err);
    console.log("Checked:", response.getCount());
    console.log("Unchecked:", response.getUnchecked());
  });
}

main();
