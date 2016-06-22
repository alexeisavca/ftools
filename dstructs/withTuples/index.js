"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _funcCompose = require("../../func/compose");

var _funcCompose2 = _interopRequireDefault(_funcCompose);

var _tuples2obj = require("../tuples2obj");

var _tuples2obj2 = _interopRequireDefault(_tuples2obj);

var _obj2tuples = require("../obj2tuples");

var _obj2tuples2 = _interopRequireDefault(_obj2tuples);

exports["default"] = function (obj, cb) {
  return (0, _funcCompose2["default"])(_tuples2obj2["default"], cb, _obj2tuples2["default"])(obj);
};

module.exports = exports["default"];

//# sourceMappingURL=index.js.map