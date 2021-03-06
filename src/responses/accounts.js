const buildRpc = require("../lib/buildRpc");
const buildMap = require("../lib/buildMap");
const {
  AccountBalanceResponse,
  AccountsBalancesResponse,
  AccountBlockCountResponse,
  AccountInfoResponse,
  AccountResponse,
  AccountHistoryResponse,
  BlockType,
  AccountListResponse,
  AccountMoveResponse,
  AccountKeyResponse,
  AccountRemoveResponse,
  BlockResponse,
  WeightResponse,
  AccountsResponse,
  FrontiersResponse,
  AccountsPendingResponse,
  ValidResponse
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
  ),

  accountList: buildRpc(
    client,
    req => ({
      action: "account_list",
      wallet: req.getWallet()
    }),
    data => new AccountListResponse([data.accounts])
  ),

  accountMove: buildRpc(
    client,
    req => Object.assign({ action: "account_move" }, req.toObject()),
    data => new AccountMoveResponse([data.moved === "1" ? true : false])
  ),

  accountPublicKey: buildRpc(
    client,
    req => ({ action: "account_key", account: req.getAccount() }),
    data => new AccountKeyResponse([data.key])
  ),

  accountRemove: buildRpc(
    client,
    req => ({
      action: "account_remove",
      wallet: req.getWallet(),
      account: req.getAccount()
    }),
    data => new AccountRemoveResponse([data.removed === "1" ? true : false])
  ),

  accountRepresentative: buildRpc(
    client,
    req => ({ action: "account_representative", account: req.getAccount() }),
    data => new AccountResponse([data.representative])
  ),

  accountRepresentativeSet: buildRpc(
    client,
    req =>
      Object.assign({ action: "account_representative_set" }, req.toObject()),
    data => new BlockResponse([data.block])
  ),

  accountWeight: buildRpc(
    client,
    req => ({ action: "account_weight", account: req.getAccount() }),
    data => new WeightResponse([data.weight])
  ),

  accountsBalances: buildRpc(
    client,
    req => ({ action: "accounts_balances", accounts: req.getAccountsList() }),
    data => {
      const reply = new AccountsBalancesResponse();
      buildMap(
        reply.getBalancesMap(),
        data.balances,
        value => new AccountBalanceResponse([value.balance, value.pending])
      );
      return reply;
    }
  ),

  accountsCreate: buildRpc(
    client,
    req => Object.assign({ action: "accounts_create" }, req.toObject()),
    data => new AccountsResponse([data.accounts])
  ),

  accountsFrontiers: buildRpc(
    client,
    req => ({ action: "accounts_frontiers", accounts: req.getAccountsList() }),
    data => {
      const reply = new FrontiersResponse();
      buildMap(reply.getFrontiersMap(), data.frontiers, value => value);
      return reply;
    }
  ),

  accountsPending: buildRpc(
    client,
    req => ({
      action: "accounts_pending",
      accounts: req.getAccountsList(),
      count: req.getCount(),
      threshold: req.getThreshold() ? req.getThreshold() : undefined,
      source: req.getSource(),
      include_active: req.getIncludeActive()
    }),
    (data, req) => {
      const { PendingBlockAccount } = AccountsPendingResponse;
      const reply = new AccountsPendingResponse();
      buildMap(reply.getAccountsMap(), data.blocks, value => {
        if (req.getSource()) {
          return new PendingBlockAccount([
            Object.entries(value).map(entry => [
              entry[0],
              entry[1].amount,
              entry[1].source
            ])
          ]);
        } else if (req.getThreshold()) {
          return new PendingBlockAccount([Object.entries(value)]);
        } else {
          return new PendingBlockAccount([value.map(hash => [hash])]);
        }
      });

      return reply;
    }
  ),

  validateAccountNumber: buildRpc(
    client,
    req => ({ action: "validate_account_number", account: req.getAccount() }),
    data => new ValidResponse([data.valid === "1" ? true : false])
  )
});
