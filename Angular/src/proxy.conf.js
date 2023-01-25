/* Blazor application URL */
const target = "https://localhost:7039/"  /*  for blazor Server */

const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "/_content",
      "/_framework",
      "/_blazor",
    ],
    proxyTimeout: 3000,
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  },
  {
    context: [
      "/_blazor"
    ],
    target: target,
    secure: false,
    ws: true,
    logLevel: "debug"
  }
];

module.exports = PROXY_CONFIG;

