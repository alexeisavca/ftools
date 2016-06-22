"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _pipe = require("../pipe");

var _pipe2 = _interopRequireDefault(_pipe);

exports["default"] = function () {
  for (var _len = arguments.length, fs = Array(_len), _key = 0; _key < _len; _key++) {
    fs[_key] = arguments[_key];
  }

  return function () {
    return _pipe2["default"].apply(undefined, arguments).apply(undefined, _toConsumableArray(fs.reverse()));
  };
};

module.exports = exports["default"];

//# sourceMappingURL=index.js.map