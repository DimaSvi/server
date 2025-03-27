const http = require("http");

const server = http.createServer((req, res) => {
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Method: ${req.method}`);

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello, world!");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
