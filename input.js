// Stores the active TCP connection object.
let connection;
const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MESSAGES } = require("./constants");

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
  // Mapping movements from constants.js file
  if (key === "w") {
    connection.write(MOVE_UP_KEY);
  }
  if (key === "s") {
    connection.write(MOVE_DOWN_KEY);
  }
  if (key === "a") {
    connection.write(MOVE_LEFT_KEY);
  }
  if (key === "d") {
    connection.write(MOVE_RIGHT_KEY);
  }
  // Mapping messages from MESSAGES object from constants.js
  if (MESSAGES[key]) {
    connection.write(`Say: ${MESSAGES[key]}`);
  }
};

module.exports = {
  setupInput
}