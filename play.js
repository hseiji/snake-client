const { connect } = require("./client");

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
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
};

setupInput();