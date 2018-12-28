const buildRpc = require("../lib/buildRpc");
const {
  AccountBalanceResponse,
  AccountBlockCountResponse,
  AccountResponse
} = require("../grpc/NanoService_pb");

module.exports = client => ({
  accountBalance: buildRpc(
    client,
    req => ({ action: "account_balance", account: req.getAccount() }),
    data => new AccountBalanceResponse([data.balance, data.pending])
  ),

  accountBlockCount: buildRpc(
    client,
    req => ({ action: "account_block_count", account: req.getAccount() }),
    data => new AccountBlockCountResponse([data.block_count])
  ),

  accountInfo: buildRpc(
    client,
    req => Object.assign({ action: "account_info" }, req.toObject()),
    data => {
      const reply = new AccountResponse([
        data.frontier,
        data.open_block,
        data.representative_block,
        data.balance,
        [data.modified_timestamp, 0],
        data.block_count
      ]);

      reply.setRepresentative(data.representative);
      reply.setWeight(data.weight);
      reply.setPending(data.pending);

      return reply;
    }
  )
});
