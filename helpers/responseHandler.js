module.exports = (req, res, pathname) => {
  // Routing
  if (pathname === "/") {
    // Route: /
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the root page!");
  } else if (pathname === "/about") {
    // Route: /about
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About page - Project or creator info goes here.");
  } else {
    // Route: 404 Not Found
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
};
