const RESPONSES = [
  "accounts",
  "blocks",
  "bootstrap",
  "confirmation",
  "conversion",
  "delegators",
  "frontiers",
  "miscellaneous",
  "peers",
  "representatives"
];

module.exports = function(client) {
  let mergedExports = {};
  for (let i = 0; i < RESPONSES.length; i++) {
    Object.assign(mergedExports, require(`./${RESPONSES[i]}`)(client));
  }

  return mergedExports;
};
