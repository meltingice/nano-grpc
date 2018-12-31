const NanoIPC = require("nano-ipc");

class IPCDriver {
  constructor(config) {
    this.client = new NanoIPC.Client(config.ipc);
  }

  connect() {
    return this.client.connect();
  }

  call(request) {
    return this.client.call(request);
  }
}

IPCDriver.driverName = "ipc";
module.exports = IPCDriver;
