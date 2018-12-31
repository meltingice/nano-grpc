const buildRpc = require("../lib/buildRpc");
const { AmountResponse } = require("../grpc/NanoService_pb");

module.exports = client => ({
  mraiFromRaw: buildRpc(
    client,
    req => ({ action: "mrai_from_raw", amount: req.getAmount() }),
    data => new AmountResponse([data.amount])
  ),

  mraiToRaw: buildRpc(
    client,
    req => ({ action: "mrai_to_raw", amount: req.getAmount() }),
    data => new AmountResponse([data.amount])
  ),

  kraiFromRaw: buildRpc(
    client,
    req => ({ action: "krai_from_raw", amount: req.getAmount() }),
    data => new AmountResponse([data.amount])
  ),

  kraiToRaw: buildRpc(
    client,
    req => ({ action: "krai_to_raw", amount: req.getAmount() }),
    data => new AmountResponse([data.amount])
  ),

  raiFromRaw: buildRpc(
    client,
    req => ({ action: "rai_from_raw", amount: req.getAmount() }),
    data => new AmountResponse([data.amount])
  ),

  raiToRaw: buildRpc(
    client,
    req => ({ action: "rai_to_raw", amount: req.getAmount() }),
    data => new AmountResponse([data.amount])
  )
});
