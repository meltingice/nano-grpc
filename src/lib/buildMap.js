module.exports = (map, obj, buildValue) => {
  Object.entries(obj).forEach(entry => {
    map.set(entry[0], buildValue(entry[1]));
  });
};
