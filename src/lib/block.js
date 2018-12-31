const { BlockType } = require("../grpc/NanoService_pb");

module.exports = {
  contentsToBlockArray: contents => {
    const data = JSON.parse(contents);
    return [
      BlockType[data.type.toUpperCase()],
      data.account,
      data.previous,
      data.representative,
      data.balance,
      data.link,
      data.link_as_account,
      data.signature,
      data.work
    ];
  }
};
