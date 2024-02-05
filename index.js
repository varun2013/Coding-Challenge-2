const http = require("http");
const url = require("url");
const dotenv = require("dotenv");
const responseHandler = require("./helpers/responseHandler");

dotenv.config();

const serverPort = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Log the request method and URL
  console.log(`${req.method} ${req.url}`);

  // Parse the URL to get the pathname
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // Handle response using the response handler
  responseHandler(req, res, pathname);
});

server.listen(serverPort, () => {
  console.log(`Server running at http://localhost:${serverPort}/`);
});
