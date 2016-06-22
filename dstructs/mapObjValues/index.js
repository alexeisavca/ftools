"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (obj, cb) {
  var res = {};
  Object.keys(obj).forEach(function (key) {
    return res[key] = cb(obj[key]);
  });
  return res;
};

module.exports = exports["default"];

//# sourceMappingURL=index.js.map