const DRIVERS = [require("./ipc"), require("./http")];

module.exports = driver => {
  for (let i = 0; i < DRIVERS.length; i++) {
    if (DRIVERS[i].driverName === driver) {
      return DRIVERS[i];
    }
  }

  throw new Error(`Driver is not valid or supported: ${driver}`);
};
