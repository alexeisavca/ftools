"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _withTuples = require("../withTuples");

var _withTuples2 = _interopRequireDefault(_withTuples);

exports["default"] = function (obj, cb) {
  return (0, _withTuples2["default"])(obj, function (tuples) {
    return tuples.map(cb);
  });
};

module.exports = exports["default"];

//# sourceMappingURL=index.js.map