const fetch = require("node-fetch");

class HTTPDriver {
  constructor(config) {
    this.url = config.http;
  }

  connect() {
    console.log(`HTTP driver using ${this.url}`);
  }

  async call(request) {
    const resp = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(request)
    });

    if (resp.ok) {
      return await resp.json();
    } else {
      throw new Error(`Received error from endpoint: ${resp.status}`);
    }
  }
}

HTTPDriver.driverName = "http";
module.exports = HTTPDriver;
