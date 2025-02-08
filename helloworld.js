console.log("HELLO WORLD");
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("<h1>Hello Node</h1>");
});
server.listen(3000);
const fs = require("fs");
fs.writeFileSync("Welcome.tx", "Hello node", "utf8");
console.log("File created successfully");
const data = fs.readFileSync("Welcome.txt", "utf8");
console.log("File contents", data);
