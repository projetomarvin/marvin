const fs = require("fs");


module.exports = function(level, param) {
  let result;
  const output = [];
  (function() {
    if (!console) {
      console = {};
    }
    var old = console.log;
    print = function(message) {
      output.push(message);
    };
  })();
  let file = fs.readFileSync(level, "utf-8");
  file = file.replace(/console.log/g, "print");
  file = "module.exports = {\nfun:" + file + "}";
  fs.writeFileSync("./" + level.split("/")[1], file);
  const test = require('./' + level.split("/")[1]);
  if (!param) result = test.fun();
  else if (typeof param === "string" || param.length === 1) result = test.fun(param);
  else if (param.length === 2) result = test.fun(param[0], param[1]);
  else if (param.length === 3) result = test.fun(param[0], param[1], param[2]);
  else if (param.length === 4) result = test.fun(param[0], param[1], param[2], param[3]);
  fs.unlinkSync('./' + level.split("/")[1]);
  return {output, result};
};
