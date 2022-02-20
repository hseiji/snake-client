// Stores the active TCP connection object.
let connection;
const { stdin } = require("process");

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // event listener
  stdin.on('data', (key) => handleUserInput(key));
  return stdin;
};

const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input. Terminate the terminal
  if (key === '\u0003') {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
};

module.exports = {
  setupInput
}