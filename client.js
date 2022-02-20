const net = require("net");
const { IP, PORT, PLAYER } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handler to inform client that a connection has been established
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${PLAYER}`);
  });

  // event handler to handle incoming data
  conn.on('data', () => {
    console.log("you ded cuz you idled");
  });

  return conn;
};

// Exporting function using ES6 Shorthand syntax
module.exports = {
  connect
};