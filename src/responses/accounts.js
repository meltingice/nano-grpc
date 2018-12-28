const buildRpc = require("../lib/buildRpc");
const { AccountBalanceResponse } = require("../grpc/NanoService_pb");

module.exports = client => ({
  accountBalance: buildRpc(
    client,
    req => ({ action: "account_balance", account: req.getAccount() }),
    data => {
      const reply = new AccountBalanceResponse();
      reply.setBalance(data.balance);
      reply.setPending(data.pending);

      return reply;
    }
  )
});
