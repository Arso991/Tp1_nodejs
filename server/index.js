const http = require("http");
const handler = require("./handler");
const server = http.createServer(handler);

module.exports = server