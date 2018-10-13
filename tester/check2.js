const fs = require("fs");
const safeEval = require("safe-eval");
var Sandbox = require("sandbox"),
  s = new Sandbox();

// (function() {
//   if (!console) {
//     console = {};
//   }
//   var old = console.log;
//   print = function(message) {
//     output.push(message);
//   };
// })();

module.exports = function(level, param) {
  const output = [];
  let r;
  let file = fs.readFileSync(level, "utf-8");
  file = file.replace(/\n/g, " ");
  // file = file.replace(/console.log/g, "print");
  file = "(" + file + ")()";
  console.log("file:", file);
  s.run(file, o => {
    r = o
  });
  const res = safeEval(file);
  console.log(res, r);
};
