/* Blazor application URL */
const target = "https://localhost:7039/"  /*  for blazor Server */

const PROXY_CONFIG = [
  {
    context: [
      "/_content",
      "/_framework",
      "/_blazor"
   ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    },
    ws: true
  }
]

module.exports = PROXY_CONFIG;

