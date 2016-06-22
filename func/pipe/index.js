"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (f) {
    for (var _len2 = arguments.length, fs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      fs[_key2 - 1] = arguments[_key2];
    }

    return fs.reduce(function (arg, f) {
      return f(arg);
    }, f.apply(undefined, args));
  };
};

module.exports = exports["default"];

//# sourceMappingURL=index.js.map