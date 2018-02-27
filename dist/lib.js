/**@license
 * Open Source Library - version 0.1.0
 *
 * Copyright (c) 2018 Jakub Jankiewicz <https://jcubic.pl/me>
 * Released under the MIT license
 *
 * build: Tue, 27 Feb 2018 07:56:31 +0000
 */
'use strict';
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
(function (global, factory) {
  (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.lib = {});
})(undefined, function (exports) {
  'use strict';
  function foo(arg) {
    return arg === undefined ? 'foo' : arg + ' foo';
  }
  function bar(arg) {
    return arg === undefined ? ['bar'] : [arg, 'bar'];
  }
  var version = '0.1.0';
  exports.version = version;
  exports.foo = foo;
  exports.bar = bar;
  Object.defineProperty(exports, '__esModule', { value: true });
});
