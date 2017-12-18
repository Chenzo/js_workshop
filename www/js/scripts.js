'use strict';

//using polyfill promise from https://github.com/lahmatiy/es6-promise-polyfill


function aPromise() {
	return new Promise(function (resolve) {
		setTimeout(function () {
			outputText('2 seconds passed');
			resolve('i get passed to the then');
		}, 2000);
	});
}

function outputText(theT) {
	document.getElementById('output').value = document.getElementById('output').value + theT + "\n";
}

function runMeFirst() {
	outputText("run me first function fired");
	aPromise().then(function (value) {
		outputText("then this: " + value);
	});
	outputText('I run even though were waiting on aPromise()');
}

var callback = function callback() {
	runMeFirst();
};

if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
	callback();
} else {
	document.addEventListener("DOMContentLoaded", callback);
}
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (t) {
  function z() {
    for (var a = 0; a < g.length; a++) {
      g[a][0](g[a][1]);
    }g = [];m = !1;
  }function n(a, b) {
    g.push([a, b]);m || (m = !0, A(z, 0));
  }function B(a, b) {
    function c(a) {
      p(b, a);
    }function h(a) {
      k(b, a);
    }try {
      a(c, h);
    } catch (d) {
      h(d);
    }
  }function u(a) {
    var b = a.owner,
        c = b.state_,
        b = b.data_,
        h = a[c];a = a.then;if ("function" === typeof h) {
      c = l;try {
        b = h(b);
      } catch (d) {
        k(a, d);
      }
    }v(a, b) || (c === l && p(a, b), c === q && k(a, b));
  }function v(a, b) {
    var c;try {
      if (a === b) throw new TypeError("A promises callback cannot return that same promise.");if (b && ("function" === typeof b || "object" === (typeof b === "undefined" ? "undefined" : _typeof(b)))) {
        var h = b.then;if ("function" === typeof h) return h.call(b, function (d) {
          c || (c = !0, b !== d ? p(a, d) : w(a, d));
        }, function (b) {
          c || (c = !0, k(a, b));
        }), !0;
      }
    } catch (d) {
      return c || k(a, d), !0;
    }return !1;
  }function p(a, b) {
    a !== b && v(a, b) || w(a, b);
  }function w(a, b) {
    a.state_ === r && (a.state_ = x, a.data_ = b, n(C, a));
  }function k(a, b) {
    a.state_ === r && (a.state_ = x, a.data_ = b, n(D, a));
  }function y(a) {
    var b = a.then_;a.then_ = void 0;for (a = 0; a < b.length; a++) {
      u(b[a]);
    }
  }function C(a) {
    a.state_ = l;y(a);
  }function D(a) {
    a.state_ = q;y(a);
  }function e(a) {
    if ("function" !== typeof a) throw new TypeError("Promise constructor takes a function argument");if (!1 === this instanceof e) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this.then_ = [];B(a, this);
  }var f = t.Promise,
      s = f && "resolve" in f && "reject" in f && "all" in f && "race" in f && function () {
    var a;new f(function (b) {
      a = b;
    });return "function" === typeof a;
  }();"undefined" !== typeof exports && exports ? (exports.Promise = s ? f : e, exports.Polyfill = e) : "function" == typeof define && define.amd ? define(function () {
    return s ? f : e;
  }) : s || (t.Promise = e);var r = "pending",
      x = "sealed",
      l = "fulfilled",
      q = "rejected",
      E = function E() {},
      A = "undefined" !== typeof setImmediate ? setImmediate : setTimeout,
      g = [],
      m;e.prototype = { constructor: e, state_: r, then_: null, data_: void 0, then: function then(a, b) {
      var c = { owner: this, then: new this.constructor(E), fulfilled: a, rejected: b };this.state_ === l || this.state_ === q ? n(u, c) : this.then_.push(c);return c.then;
    }, "catch": function _catch(a) {
      return this.then(null, a);
    } };e.all = function (a) {
    if ("[object Array]" !== Object.prototype.toString.call(a)) throw new TypeError("You must pass an array to Promise.all().");return new this(function (b, c) {
      function h(a) {
        e++;return function (c) {
          d[a] = c;--e || b(d);
        };
      }for (var d = [], e = 0, f = 0, g; f < a.length; f++) {
        (g = a[f]) && "function" === typeof g.then ? g.then(h(f), c) : d[f] = g;
      }e || b(d);
    });
  };e.race = function (a) {
    if ("[object Array]" !== Object.prototype.toString.call(a)) throw new TypeError("You must pass an array to Promise.race().");return new this(function (b, c) {
      for (var e = 0, d; e < a.length; e++) {
        (d = a[e]) && "function" === typeof d.then ? d.then(b, c) : b(d);
      }
    });
  };e.resolve = function (a) {
    return a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && a.constructor === this ? a : new this(function (b) {
      b(a);
    });
  };e.reject = function (a) {
    return new this(function (b, c) {
      c(a);
    });
  };
})("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : undefined);
"use strict";

console.log("Called from two.js");