const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here. It should be the same as the constants.js file
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handler to handle incoming data
  conn.on('data', () => {
    console.log("you ded cuz you idled");
  });

  return conn;
};

console.log("Connecting ...");
connect();