const buildRpc = require("../lib/buildRpc");
const {
  AccountBalanceResponse,
  AccountBlockCountResponse,
  AccountInfoResponse,
  AccountResponse,
  AccountHistoryResponse,
  BlockType
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
    data =>
      new AccountInfoResponse([
        data.frontier,
        data.open_block,
        data.representative_block,
        data.balance,
        [data.modified_timestamp, 0],
        data.block_count,
        data.representative,
        data.weight,
        data.pending
      ])
  ),

  accountCreate: buildRpc(
    client,
    req => ({ action: "account_create", work: req.getWork() }),
    data => new AccountResponse([data.account])
  ),

  accountGet: buildRpc(
    client,
    req => ({ action: "account_get", key: req.getKey() }),
    data => new AccountResponse([data.account])
  ),

  accountHistory: buildRpc(
    client,
    req => ({
      action: "account_history",
      account: req.getAccount(),
      count: req.getCount(),
      raw: req.getRaw(),
      head: req.getHead() ? req.getHead() : undefined
    }),
    data =>
      new AccountHistoryResponse([
        data.history.map(entry => [
          BlockType[entry.type.toUpperCase()],
          entry.account,
          entry.amount,
          entry.hash,

          entry.representative,
          entry.link,
          entry.balance,
          entry.previous,
          entry.subtype ? BlockType[entry.subtype.toUpperCase()] : null,
          entry.work,
          entry.signature
        ]),
        data.previous
      ])
  )
});
