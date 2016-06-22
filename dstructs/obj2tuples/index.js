"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (obj) {
  return Object.keys(obj).map(function (key) {
    return [key, obj[key]];
  });
};

module.exports = exports["default"];

//# sourceMappingURL=index.js.map