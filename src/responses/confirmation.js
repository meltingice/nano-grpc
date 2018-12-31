const buildRpc = require("../lib/buildRpc");
const buildMap = require("../lib/buildMap");
const { contentsToBlockArray } = require("../lib/block");
const {
  BlockHashesResponse,
  ConfirmationHistoryResponse,
  ConfirmationInfoResponse
} = require("../grpc/NanoService_pb");

module.exports = client => ({
  confirmationActive: buildRpc(
    client,
    req => ({
      action: "confirmation_active",
      announcements: req.getAnnouncements() || 0
    }),
    data => new BlockHashesResponse([data.confirmations])
  ),

  confirmationHistory: buildRpc(
    client,
    req => ({ action: "confirmation_history" }),
    data =>
      new ConfirmationHistoryResponse([
        data.confirmation_stats.count,
        data.confirmation_stats.average,
        data.confirmations.map(c => [c.hash, c.duration, [c.time, 0], c.tally])
      ])
  ),

  confirmationInfo: buildRpc(
    client,
    req => ({
      action: "confirmation_info",
      root: req.getRoot(),
      contents: req.getContents(),
      representatives: req.getRepresentatives()
    }),
    data => {
      const { Confirmation } = ConfirmationInfoResponse;
      const reply = new ConfirmationInfoResponse([
        data.announcements,
        data.last_winner,
        data.total_tally
      ]);

      buildMap(reply.getBlocksMap(), data.blocks, block => {
        const contents = block.contents
          ? contentsToBlockArray(block.contents)
          : undefined;

        const confirmation = new Confirmation([block.tally, contents]);

        if (block.representatives) {
          buildMap(
            confirmation.getRepresentativesMap(),
            block.representatives,
            value => value
          );
        }

        return confirmation;
      });

      return reply;
    }
  )
});
