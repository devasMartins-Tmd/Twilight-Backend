function Ky(e, t) {
   for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != 'string' && !Array.isArray(r)) {
         for (const s in r)
            if (s !== 'default' && !(s in e)) {
               const i = Object.getOwnPropertyDescriptor(r, s);
               i && Object.defineProperty(e, s, i.get ? i : { enumerable: !0, get: () => r[s] });
            }
      }
   }
   return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
   const t = document.createElement('link').relList;
   if (t && t.supports && t.supports('modulepreload')) return;
   for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
   new MutationObserver((s) => {
      for (const i of s)
         if (i.type === 'childList') for (const o of i.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
   }).observe(document, { childList: !0, subtree: !0 });
   function n(s) {
      const i = {};
      return (
         s.integrity && (i.integrity = s.integrity),
         s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
         s.crossOrigin === 'use-credentials'
            ? (i.credentials = 'include')
            : s.crossOrigin === 'anonymous'
            ? (i.credentials = 'omit')
            : (i.credentials = 'same-origin'),
         i
      );
   }
   function r(s) {
      if (s.ep) return;
      s.ep = !0;
      const i = n(s);
      fetch(s.href, i);
   }
})();
function qy(e) {
   return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var bd = { exports: {} },
   Gi = {},
   Id = { exports: {} },
   b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vs = Symbol.for('react.element'),
   Hy = Symbol.for('react.portal'),
   Gy = Symbol.for('react.fragment'),
   Yy = Symbol.for('react.strict_mode'),
   Xy = Symbol.for('react.profiler'),
   Jy = Symbol.for('react.provider'),
   Zy = Symbol.for('react.context'),
   eg = Symbol.for('react.forward_ref'),
   tg = Symbol.for('react.suspense'),
   ng = Symbol.for('react.memo'),
   rg = Symbol.for('react.lazy'),
   Zu = Symbol.iterator;
function sg(e) {
   return e === null || typeof e != 'object' ? null : ((e = (Zu && e[Zu]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Vd = {
      isMounted: function () {
         return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
   },
   _d = Object.assign,
   Bd = {};
function ur(e, t, n) {
   (this.props = e), (this.context = t), (this.refs = Bd), (this.updater = n || Vd);
}
ur.prototype.isReactComponent = {};
ur.prototype.setState = function (e, t) {
   if (typeof e != 'object' && typeof e != 'function' && e != null)
      throw Error('setState(...): takes an object of state variables to update or a function which returns an object of state variables.');
   this.updater.enqueueSetState(this, e, t, 'setState');
};
ur.prototype.forceUpdate = function (e) {
   this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function zd() {}
zd.prototype = ur.prototype;
function Fa(e, t, n) {
   (this.props = e), (this.context = t), (this.refs = Bd), (this.updater = n || Vd);
}
var Da = (Fa.prototype = new zd());
Da.constructor = Fa;
_d(Da, ur.prototype);
Da.isPureReactComponent = !0;
var ec = Array.isArray,
   Ud = Object.prototype.hasOwnProperty,
   Ma = { current: null },
   $d = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qd(e, t, n) {
   var r,
      s = {},
      i = null,
      o = null;
   if (t != null)
      for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = '' + t.key), t))
         Ud.call(t, r) && !$d.hasOwnProperty(r) && (s[r] = t[r]);
   var l = arguments.length - 2;
   if (l === 1) s.children = n;
   else if (1 < l) {
      for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
      s.children = a;
   }
   if (e && e.defaultProps) for (r in ((l = e.defaultProps), l)) s[r] === void 0 && (s[r] = l[r]);
   return { $$typeof: vs, type: e, key: i, ref: o, props: s, _owner: Ma.current };
}
function ig(e, t) {
   return { $$typeof: vs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function La(e) {
   return typeof e == 'object' && e !== null && e.$$typeof === vs;
}
function og(e) {
   var t = { '=': '=0', ':': '=2' };
   return (
      '$' +
      e.replace(/[=:]/g, function (n) {
         return t[n];
      })
   );
}
var tc = /\/+/g;
function No(e, t) {
   return typeof e == 'object' && e !== null && e.key != null ? og('' + e.key) : t.toString(36);
}
function Js(e, t, n, r, s) {
   var i = typeof e;
   (i === 'undefined' || i === 'boolean') && (e = null);
   var o = !1;
   if (e === null) o = !0;
   else
      switch (i) {
         case 'string':
         case 'number':
            o = !0;
            break;
         case 'object':
            switch (e.$$typeof) {
               case vs:
               case Hy:
                  o = !0;
            }
      }
   if (o)
      return (
         (o = e),
         (s = s(o)),
         (e = r === '' ? '.' + No(o, 0) : r),
         ec(s)
            ? ((n = ''),
              e != null && (n = e.replace(tc, '$&/') + '/'),
              Js(s, t, n, '', function (u) {
                 return u;
              }))
            : s != null &&
              (La(s) && (s = ig(s, n + (!s.key || (o && o.key === s.key) ? '' : ('' + s.key).replace(tc, '$&/') + '/') + e)), t.push(s)),
         1
      );
   if (((o = 0), (r = r === '' ? '.' : r + ':'), ec(e)))
      for (var l = 0; l < e.length; l++) {
         i = e[l];
         var a = r + No(i, l);
         o += Js(i, t, n, a, s);
      }
   else if (((a = sg(e)), typeof a == 'function'))
      for (e = a.call(e), l = 0; !(i = e.next()).done; ) (i = i.value), (a = r + No(i, l++)), (o += Js(i, t, n, a, s));
   else if (i === 'object')
      throw (
         ((t = String(e)),
         Error(
            'Objects are not valid as a React child (found: ' +
               (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
               '). If you meant to render a collection of children, use an array instead.'
         ))
      );
   return o;
}
function Fs(e, t, n) {
   if (e == null) return e;
   var r = [],
      s = 0;
   return (
      Js(e, r, '', '', function (i) {
         return t.call(n, i, s++);
      }),
      r
   );
}
function lg(e) {
   if (e._status === -1) {
      var t = e._result;
      (t = t()),
         t.then(
            function (n) {
               (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
            },
            function (n) {
               (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
            }
         ),
         e._status === -1 && ((e._status = 0), (e._result = t));
   }
   if (e._status === 1) return e._result.default;
   throw e._result;
}
var Ce = { current: null },
   Zs = { transition: null },
   ag = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: Zs, ReactCurrentOwner: Ma };
b.Children = {
   map: Fs,
   forEach: function (e, t, n) {
      Fs(
         e,
         function () {
            t.apply(this, arguments);
         },
         n
      );
   },
   count: function (e) {
      var t = 0;
      return (
         Fs(e, function () {
            t++;
         }),
         t
      );
   },
   toArray: function (e) {
      return (
         Fs(e, function (t) {
            return t;
         }) || []
      );
   },
   only: function (e) {
      if (!La(e)) throw Error('React.Children.only expected to receive a single React element child.');
      return e;
   },
};
b.Component = ur;
b.Fragment = Gy;
b.Profiler = Xy;
b.PureComponent = Fa;
b.StrictMode = Yy;
b.Suspense = tg;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ag;
b.cloneElement = function (e, t, n) {
   if (e == null) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
   var r = _d({}, e.props),
      s = e.key,
      i = e.ref,
      o = e._owner;
   if (t != null) {
      if ((t.ref !== void 0 && ((i = t.ref), (o = Ma.current)), t.key !== void 0 && (s = '' + t.key), e.type && e.type.defaultProps))
         var l = e.type.defaultProps;
      for (a in t) Ud.call(t, a) && !$d.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
   }
   var a = arguments.length - 2;
   if (a === 1) r.children = n;
   else if (1 < a) {
      l = Array(a);
      for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
      r.children = l;
   }
   return { $$typeof: vs, type: e.type, key: s, ref: i, props: r, _owner: o };
};
b.createContext = function (e) {
   return (
      (e = {
         $$typeof: Zy,
         _currentValue: e,
         _currentValue2: e,
         _threadCount: 0,
         Provider: null,
         Consumer: null,
         _defaultValue: null,
         _globalName: null,
      }),
      (e.Provider = { $$typeof: Jy, _context: e }),
      (e.Consumer = e)
   );
};
b.createElement = Qd;
b.createFactory = function (e) {
   var t = Qd.bind(null, e);
   return (t.type = e), t;
};
b.createRef = function () {
   return { current: null };
};
b.forwardRef = function (e) {
   return { $$typeof: eg, render: e };
};
b.isValidElement = La;
b.lazy = function (e) {
   return { $$typeof: rg, _payload: { _status: -1, _result: e }, _init: lg };
};
b.memo = function (e, t) {
   return { $$typeof: ng, type: e, compare: t === void 0 ? null : t };
};
b.startTransition = function (e) {
   var t = Zs.transition;
   Zs.transition = {};
   try {
      e();
   } finally {
      Zs.transition = t;
   }
};
b.unstable_act = function () {
   throw Error('act(...) is not supported in production builds of React.');
};
b.useCallback = function (e, t) {
   return Ce.current.useCallback(e, t);
};
b.useContext = function (e) {
   return Ce.current.useContext(e);
};
b.useDebugValue = function () {};
b.useDeferredValue = function (e) {
   return Ce.current.useDeferredValue(e);
};
b.useEffect = function (e, t) {
   return Ce.current.useEffect(e, t);
};
b.useId = function () {
   return Ce.current.useId();
};
b.useImperativeHandle = function (e, t, n) {
   return Ce.current.useImperativeHandle(e, t, n);
};
b.useInsertionEffect = function (e, t) {
   return Ce.current.useInsertionEffect(e, t);
};
b.useLayoutEffect = function (e, t) {
   return Ce.current.useLayoutEffect(e, t);
};
b.useMemo = function (e, t) {
   return Ce.current.useMemo(e, t);
};
b.useReducer = function (e, t, n) {
   return Ce.current.useReducer(e, t, n);
};
b.useRef = function (e) {
   return Ce.current.useRef(e);
};
b.useState = function (e) {
   return Ce.current.useState(e);
};
b.useSyncExternalStore = function (e, t, n) {
   return Ce.current.useSyncExternalStore(e, t, n);
};
b.useTransition = function () {
   return Ce.current.useTransition();
};
b.version = '18.2.0';
Id.exports = b;
var w = Id.exports;
const Yi = qy(w),
   ug = Ky({ __proto__: null, default: Yi }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cg = w,
   fg = Symbol.for('react.element'),
   dg = Symbol.for('react.fragment'),
   hg = Object.prototype.hasOwnProperty,
   pg = cg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
   mg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wd(e, t, n) {
   var r,
      s = {},
      i = null,
      o = null;
   n !== void 0 && (i = '' + n), t.key !== void 0 && (i = '' + t.key), t.ref !== void 0 && (o = t.ref);
   for (r in t) hg.call(t, r) && !mg.hasOwnProperty(r) && (s[r] = t[r]);
   if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
   return { $$typeof: fg, type: e, key: i, ref: o, props: s, _owner: pg.current };
}
Gi.Fragment = dg;
Gi.jsx = Wd;
Gi.jsxs = Wd;
bd.exports = Gi;
var d = bd.exports,
   ml = {},
   Kd = { exports: {} },
   Ie = {},
   qd = { exports: {} },
   Hd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
   function t(T, M) {
      var O = T.length;
      T.push(M);
      e: for (; 0 < O; ) {
         var L = (O - 1) >>> 1,
            W = T[L];
         if (0 < s(W, M)) (T[L] = M), (T[O] = W), (O = L);
         else break e;
      }
   }
   function n(T) {
      return T.length === 0 ? null : T[0];
   }
   function r(T) {
      if (T.length === 0) return null;
      var M = T[0],
         O = T.pop();
      if (O !== M) {
         T[0] = O;
         e: for (var L = 0, W = T.length, rn = W >>> 1; L < rn; ) {
            var st = 2 * (L + 1) - 1,
               Nn = T[st],
               Fe = st + 1,
               sn = T[Fe];
            if (0 > s(Nn, O)) Fe < W && 0 > s(sn, Nn) ? ((T[L] = sn), (T[Fe] = O), (L = Fe)) : ((T[L] = Nn), (T[st] = O), (L = st));
            else if (Fe < W && 0 > s(sn, O)) (T[L] = sn), (T[Fe] = O), (L = Fe);
            else break e;
         }
      }
      return M;
   }
   function s(T, M) {
      var O = T.sortIndex - M.sortIndex;
      return O !== 0 ? O : T.id - M.id;
   }
   if (typeof performance == 'object' && typeof performance.now == 'function') {
      var i = performance;
      e.unstable_now = function () {
         return i.now();
      };
   } else {
      var o = Date,
         l = o.now();
      e.unstable_now = function () {
         return o.now() - l;
      };
   }
   var a = [],
      u = [],
      c = 1,
      f = null,
      h = 3,
      m = !1,
      v = !1,
      x = !1,
      C = typeof setTimeout == 'function' ? setTimeout : null,
      y = typeof clearTimeout == 'function' ? clearTimeout : null,
      p = typeof setImmediate < 'u' ? setImmediate : null;
   typeof navigator < 'u' &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
   function g(T) {
      for (var M = n(u); M !== null; ) {
         if (M.callback === null) r(u);
         else if (M.startTime <= T) r(u), (M.sortIndex = M.expirationTime), t(a, M);
         else break;
         M = n(u);
      }
   }
   function S(T) {
      if (((x = !1), g(T), !v))
         if (n(a) !== null) (v = !0), _e(j);
         else {
            var M = n(u);
            M !== null && rt(S, M.startTime - T);
         }
   }
   function j(T, M) {
      (v = !1), x && ((x = !1), y(P), (P = -1)), (m = !0);
      var O = h;
      try {
         for (g(M), f = n(a); f !== null && (!(f.expirationTime > M) || (T && !B())); ) {
            var L = f.callback;
            if (typeof L == 'function') {
               (f.callback = null), (h = f.priorityLevel);
               var W = L(f.expirationTime <= M);
               (M = e.unstable_now()), typeof W == 'function' ? (f.callback = W) : f === n(a) && r(a), g(M);
            } else r(a);
            f = n(a);
         }
         if (f !== null) var rn = !0;
         else {
            var st = n(u);
            st !== null && rt(S, st.startTime - M), (rn = !1);
         }
         return rn;
      } finally {
         (f = null), (h = O), (m = !1);
      }
   }
   var k = !1,
      E = null,
      P = -1,
      R = 5,
      F = -1;
   function B() {
      return !(e.unstable_now() - F < R);
   }
   function ve() {
      if (E !== null) {
         var T = e.unstable_now();
         F = T;
         var M = !0;
         try {
            M = E(!0, T);
         } finally {
            M ? je() : ((k = !1), (E = null));
         }
      } else k = !1;
   }
   var je;
   if (typeof p == 'function')
      je = function () {
         p(ve);
      };
   else if (typeof MessageChannel < 'u') {
      var ee = new MessageChannel(),
         te = ee.port2;
      (ee.port1.onmessage = ve),
         (je = function () {
            te.postMessage(null);
         });
   } else
      je = function () {
         C(ve, 0);
      };
   function _e(T) {
      (E = T), k || ((k = !0), je());
   }
   function rt(T, M) {
      P = C(function () {
         T(e.unstable_now());
      }, M);
   }
   (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (T) {
         T.callback = null;
      }),
      (e.unstable_continueExecution = function () {
         v || m || ((v = !0), _e(j));
      }),
      (e.unstable_forceFrameRate = function (T) {
         0 > T || 125 < T
            ? console.error(
                 'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
              )
            : (R = 0 < T ? Math.floor(1e3 / T) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
         return h;
      }),
      (e.unstable_getFirstCallbackNode = function () {
         return n(a);
      }),
      (e.unstable_next = function (T) {
         switch (h) {
            case 1:
            case 2:
            case 3:
               var M = 3;
               break;
            default:
               M = h;
         }
         var O = h;
         h = M;
         try {
            return T();
         } finally {
            h = O;
         }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (T, M) {
         switch (T) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
               break;
            default:
               T = 3;
         }
         var O = h;
         h = T;
         try {
            return M();
         } finally {
            h = O;
         }
      }),
      (e.unstable_scheduleCallback = function (T, M, O) {
         var L = e.unstable_now();
         switch ((typeof O == 'object' && O !== null ? ((O = O.delay), (O = typeof O == 'number' && 0 < O ? L + O : L)) : (O = L), T)) {
            case 1:
               var W = -1;
               break;
            case 2:
               W = 250;
               break;
            case 5:
               W = 1073741823;
               break;
            case 4:
               W = 1e4;
               break;
            default:
               W = 5e3;
         }
         return (
            (W = O + W),
            (T = { id: c++, callback: M, priorityLevel: T, startTime: O, expirationTime: W, sortIndex: -1 }),
            O > L
               ? ((T.sortIndex = O), t(u, T), n(a) === null && T === n(u) && (x ? (y(P), (P = -1)) : (x = !0), rt(S, O - L)))
               : ((T.sortIndex = W), t(a, T), v || m || ((v = !0), _e(j))),
            T
         );
      }),
      (e.unstable_shouldYield = B),
      (e.unstable_wrapCallback = function (T) {
         var M = h;
         return function () {
            var O = h;
            h = M;
            try {
               return T.apply(this, arguments);
            } finally {
               h = O;
            }
         };
      });
})(Hd);
qd.exports = Hd;
var yg = qd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gd = w,
   Oe = yg;
function A(e) {
   for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
      t += '&args[]=' + encodeURIComponent(arguments[n]);
   return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
   );
}
var Yd = new Set(),
   Hr = {};
function En(e, t) {
   er(e, t), er(e + 'Capture', t);
}
function er(e, t) {
   for (Hr[e] = t, e = 0; e < t.length; e++) Yd.add(t[e]);
}
var wt = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
   yl = Object.prototype.hasOwnProperty,
   gg =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
   nc = {},
   rc = {};
function vg(e) {
   return yl.call(rc, e) ? !0 : yl.call(nc, e) ? !1 : gg.test(e) ? (rc[e] = !0) : ((nc[e] = !0), !1);
}
function xg(e, t, n, r) {
   if (n !== null && n.type === 0) return !1;
   switch (typeof t) {
      case 'function':
      case 'symbol':
         return !0;
      case 'boolean':
         return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
      default:
         return !1;
   }
}
function wg(e, t, n, r) {
   if (t === null || typeof t > 'u' || xg(e, t, n, r)) return !0;
   if (r) return !1;
   if (n !== null)
      switch (n.type) {
         case 3:
            return !t;
         case 4:
            return t === !1;
         case 5:
            return isNaN(t);
         case 6:
            return isNaN(t) || 1 > t;
      }
   return !1;
}
function Pe(e, t, n, r, s, i, o) {
   (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = s),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = o);
}
var he = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
   .split(' ')
   .forEach(function (e) {
      he[e] = new Pe(e, 0, !1, e, null, !1, !1);
   });
[
   ['acceptCharset', 'accept-charset'],
   ['className', 'class'],
   ['htmlFor', 'for'],
   ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
   var t = e[0];
   he[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
   he[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
   he[e] = new Pe(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
   .split(' ')
   .forEach(function (e) {
      he[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
   });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
   he[e] = new Pe(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
   he[e] = new Pe(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
   he[e] = new Pe(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
   he[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Oa = /[\-:]([a-z])/g;
function ba(e) {
   return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
   .split(' ')
   .forEach(function (e) {
      var t = e.replace(Oa, ba);
      he[t] = new Pe(t, 1, !1, e, null, !1, !1);
   });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
   var t = e.replace(Oa, ba);
   he[t] = new Pe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
   var t = e.replace(Oa, ba);
   he[t] = new Pe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
   he[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new Pe('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
   he[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ia(e, t, n, r) {
   var s = he.hasOwnProperty(t) ? he[t] : null;
   (s !== null ? s.type !== 0 : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (wg(t, n, s, r) && (n = null),
      r || s === null
         ? vg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
         : s.mustUseProperty
         ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : '') : n)
         : ((t = s.attributeName),
           (r = s.attributeNamespace),
           n === null
              ? e.removeAttribute(t)
              : ((s = s.type),
                (n = s === 3 || (s === 4 && n === !0) ? '' : '' + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var kt = Gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
   Ds = Symbol.for('react.element'),
   Fn = Symbol.for('react.portal'),
   Dn = Symbol.for('react.fragment'),
   Va = Symbol.for('react.strict_mode'),
   gl = Symbol.for('react.profiler'),
   Xd = Symbol.for('react.provider'),
   Jd = Symbol.for('react.context'),
   _a = Symbol.for('react.forward_ref'),
   vl = Symbol.for('react.suspense'),
   xl = Symbol.for('react.suspense_list'),
   Ba = Symbol.for('react.memo'),
   Nt = Symbol.for('react.lazy'),
   Zd = Symbol.for('react.offscreen'),
   sc = Symbol.iterator;
function vr(e) {
   return e === null || typeof e != 'object' ? null : ((e = (sc && e[sc]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var X = Object.assign,
   Ro;
function Tr(e) {
   if (Ro === void 0)
      try {
         throw Error();
      } catch (n) {
         var t = n.stack.trim().match(/\n( *(at )?)/);
         Ro = (t && t[1]) || '';
      }
   return (
      `
` +
      Ro +
      e
   );
}
var Fo = !1;
function Do(e, t) {
   if (!e || Fo) return '';
   Fo = !0;
   var n = Error.prepareStackTrace;
   Error.prepareStackTrace = void 0;
   try {
      if (t)
         if (
            ((t = function () {
               throw Error();
            }),
            Object.defineProperty(t.prototype, 'props', {
               set: function () {
                  throw Error();
               },
            }),
            typeof Reflect == 'object' && Reflect.construct)
         ) {
            try {
               Reflect.construct(t, []);
            } catch (u) {
               var r = u;
            }
            Reflect.construct(e, [], t);
         } else {
            try {
               t.call();
            } catch (u) {
               r = u;
            }
            e.call(t.prototype);
         }
      else {
         try {
            throw Error();
         } catch (u) {
            r = u;
         }
         e();
      }
   } catch (u) {
      if (u && r && typeof u.stack == 'string') {
         for (
            var s = u.stack.split(`
`),
               i = r.stack.split(`
`),
               o = s.length - 1,
               l = i.length - 1;
            1 <= o && 0 <= l && s[o] !== i[l];

         )
            l--;
         for (; 1 <= o && 0 <= l; o--, l--)
            if (s[o] !== i[l]) {
               if (o !== 1 || l !== 1)
                  do
                     if ((o--, l--, 0 > l || s[o] !== i[l])) {
                        var a =
                           `
` + s[o].replace(' at new ', ' at ');
                        return e.displayName && a.includes('<anonymous>') && (a = a.replace('<anonymous>', e.displayName)), a;
                     }
                  while (1 <= o && 0 <= l);
               break;
            }
      }
   } finally {
      (Fo = !1), (Error.prepareStackTrace = n);
   }
   return (e = e ? e.displayName || e.name : '') ? Tr(e) : '';
}
function Sg(e) {
   switch (e.tag) {
      case 5:
         return Tr(e.type);
      case 16:
         return Tr('Lazy');
      case 13:
         return Tr('Suspense');
      case 19:
         return Tr('SuspenseList');
      case 0:
      case 2:
      case 15:
         return (e = Do(e.type, !1)), e;
      case 11:
         return (e = Do(e.type.render, !1)), e;
      case 1:
         return (e = Do(e.type, !0)), e;
      default:
         return '';
   }
}
function wl(e) {
   if (e == null) return null;
   if (typeof e == 'function') return e.displayName || e.name || null;
   if (typeof e == 'string') return e;
   switch (e) {
      case Dn:
         return 'Fragment';
      case Fn:
         return 'Portal';
      case gl:
         return 'Profiler';
      case Va:
         return 'StrictMode';
      case vl:
         return 'Suspense';
      case xl:
         return 'SuspenseList';
   }
   if (typeof e == 'object')
      switch (e.$$typeof) {
         case Jd:
            return (e.displayName || 'Context') + '.Consumer';
         case Xd:
            return (e._context.displayName || 'Context') + '.Provider';
         case _a:
            var t = e.render;
            return (
               (e = e.displayName), e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')), e
            );
         case Ba:
            return (t = e.displayName || null), t !== null ? t : wl(e.type) || 'Memo';
         case Nt:
            (t = e._payload), (e = e._init);
            try {
               return wl(e(t));
            } catch {}
      }
   return null;
}
function Cg(e) {
   var t = e.type;
   switch (e.tag) {
      case 24:
         return 'Cache';
      case 9:
         return (t.displayName || 'Context') + '.Consumer';
      case 10:
         return (t._context.displayName || 'Context') + '.Provider';
      case 18:
         return 'DehydratedFragment';
      case 11:
         return (e = t.render), (e = e.displayName || e.name || ''), t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef');
      case 7:
         return 'Fragment';
      case 5:
         return t;
      case 4:
         return 'Portal';
      case 3:
         return 'Root';
      case 6:
         return 'Text';
      case 16:
         return wl(t);
      case 8:
         return t === Va ? 'StrictMode' : 'Mode';
      case 22:
         return 'Offscreen';
      case 12:
         return 'Profiler';
      case 21:
         return 'Scope';
      case 13:
         return 'Suspense';
      case 19:
         return 'SuspenseList';
      case 25:
         return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
         if (typeof t == 'function') return t.displayName || t.name || null;
         if (typeof t == 'string') return t;
   }
   return null;
}
function Ht(e) {
   switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
         return e;
      case 'object':
         return e;
      default:
         return '';
   }
}
function eh(e) {
   var t = e.type;
   return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function Pg(e) {
   var t = eh(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = '' + e[t];
   if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
      var s = n.get,
         i = n.set;
      return (
         Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
               return s.call(this);
            },
            set: function (o) {
               (r = '' + o), i.call(this, o);
            },
         }),
         Object.defineProperty(e, t, { enumerable: n.enumerable }),
         {
            getValue: function () {
               return r;
            },
            setValue: function (o) {
               r = '' + o;
            },
            stopTracking: function () {
               (e._valueTracker = null), delete e[t];
            },
         }
      );
   }
}
function Ms(e) {
   e._valueTracker || (e._valueTracker = Pg(e));
}
function th(e) {
   if (!e) return !1;
   var t = e._valueTracker;
   if (!t) return !0;
   var n = t.getValue(),
      r = '';
   return e && (r = eh(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function hi(e) {
   if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
   try {
      return e.activeElement || e.body;
   } catch {
      return e.body;
   }
}
function Sl(e, t) {
   var n = t.checked;
   return X({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ic(e, t) {
   var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
   (n = Ht(t.value != null ? t.value : n)),
      (e._wrapperState = {
         initialChecked: r,
         initialValue: n,
         controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      });
}
function nh(e, t) {
   (t = t.checked), t != null && Ia(e, 'checked', t, !1);
}
function Cl(e, t) {
   nh(e, t);
   var n = Ht(t.value),
      r = t.type;
   if (n != null)
      r === 'number' ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n) : e.value !== '' + n && (e.value = '' + n);
   else if (r === 'submit' || r === 'reset') {
      e.removeAttribute('value');
      return;
   }
   t.hasOwnProperty('value') ? Pl(e, t.type, n) : t.hasOwnProperty('defaultValue') && Pl(e, t.type, Ht(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function oc(e, t, n) {
   if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var r = t.type;
      if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
      (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
   }
   (n = e.name), n !== '' && (e.name = ''), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== '' && (e.name = n);
}
function Pl(e, t, n) {
   (t !== 'number' || hi(e.ownerDocument) !== e) &&
      (n == null ? (e.defaultValue = '' + e._wrapperState.initialValue) : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Nr = Array.isArray;
function qn(e, t, n, r) {
   if (((e = e.options), t)) {
      t = {};
      for (var s = 0; s < n.length; s++) t['$' + n[s]] = !0;
      for (n = 0; n < e.length; n++)
         (s = t.hasOwnProperty('$' + e[n].value)), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
   } else {
      for (n = '' + Ht(n), t = null, s = 0; s < e.length; s++) {
         if (e[s].value === n) {
            (e[s].selected = !0), r && (e[s].defaultSelected = !0);
            return;
         }
         t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
   }
}
function jl(e, t) {
   if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
   return X({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function lc(e, t) {
   var n = t.value;
   if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
         if (t != null) throw Error(A(92));
         if (Nr(n)) {
            if (1 < n.length) throw Error(A(93));
            n = n[0];
         }
         t = n;
      }
      t == null && (t = ''), (n = t);
   }
   e._wrapperState = { initialValue: Ht(n) };
}
function rh(e, t) {
   var n = Ht(t.value),
      r = Ht(t.defaultValue);
   n != null && ((n = '' + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r);
}
function ac(e) {
   var t = e.textContent;
   t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function sh(e) {
   switch (e) {
      case 'svg':
         return 'http://www.w3.org/2000/svg';
      case 'math':
         return 'http://www.w3.org/1998/Math/MathML';
      default:
         return 'http://www.w3.org/1999/xhtml';
   }
}
function El(e, t) {
   return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? sh(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var Ls,
   ih = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
         ? function (t, n, r, s) {
              MSApp.execUnsafeLocalFunction(function () {
                 return e(t, n, r, s);
              });
           }
         : e;
   })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
      else {
         for (
            Ls = Ls || document.createElement('div'), Ls.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>', t = Ls.firstChild;
            e.firstChild;

         )
            e.removeChild(e.firstChild);
         for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
   });
function Gr(e, t) {
   if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
         n.nodeValue = t;
         return;
      }
   }
   e.textContent = t;
}
var Or = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
   },
   jg = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Or).forEach(function (e) {
   jg.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Or[t] = Or[e]);
   });
});
function oh(e, t, n) {
   return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (Or.hasOwnProperty(e) && Or[e])
      ? ('' + t).trim()
      : t + 'px';
}
function lh(e, t) {
   e = e.style;
   for (var n in t)
      if (t.hasOwnProperty(n)) {
         var r = n.indexOf('--') === 0,
            s = oh(n, t[n], r);
         n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, s) : (e[n] = s);
      }
}
var Eg = X(
   { menuitem: !0 },
   {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
   }
);
function kl(e, t) {
   if (t) {
      if (Eg[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
      if (t.dangerouslySetInnerHTML != null) {
         if (t.children != null) throw Error(A(60));
         if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(A(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(A(62));
   }
}
function Al(e, t) {
   if (e.indexOf('-') === -1) return typeof t.is == 'string';
   switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
         return !1;
      default:
         return !0;
   }
}
var Tl = null;
function za(e) {
   return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
   );
}
var Nl = null,
   Hn = null,
   Gn = null;
function uc(e) {
   if ((e = Ss(e))) {
      if (typeof Nl != 'function') throw Error(A(280));
      var t = e.stateNode;
      t && ((t = to(t)), Nl(e.stateNode, e.type, t));
   }
}
function ah(e) {
   Hn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Hn = e);
}
function uh() {
   if (Hn) {
      var e = Hn,
         t = Gn;
      if (((Gn = Hn = null), uc(e), t)) for (e = 0; e < t.length; e++) uc(t[e]);
   }
}
function ch(e, t) {
   return e(t);
}
function fh() {}
var Mo = !1;
function dh(e, t, n) {
   if (Mo) return e(t, n);
   Mo = !0;
   try {
      return ch(e, t, n);
   } finally {
      (Mo = !1), (Hn !== null || Gn !== null) && (fh(), uh());
   }
}
function Yr(e, t) {
   var n = e.stateNode;
   if (n === null) return null;
   var r = to(n);
   if (r === null) return null;
   n = r[t];
   e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
         (r = !r.disabled) || ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))), (e = !r);
         break e;
      default:
         e = !1;
   }
   if (e) return null;
   if (n && typeof n != 'function') throw Error(A(231, t, typeof n));
   return n;
}
var Rl = !1;
if (wt)
   try {
      var xr = {};
      Object.defineProperty(xr, 'passive', {
         get: function () {
            Rl = !0;
         },
      }),
         window.addEventListener('test', xr, xr),
         window.removeEventListener('test', xr, xr);
   } catch {
      Rl = !1;
   }
function kg(e, t, n, r, s, i, o, l, a) {
   var u = Array.prototype.slice.call(arguments, 3);
   try {
      t.apply(n, u);
   } catch (c) {
      this.onError(c);
   }
}
var br = !1,
   pi = null,
   mi = !1,
   Fl = null,
   Ag = {
      onError: function (e) {
         (br = !0), (pi = e);
      },
   };
function Tg(e, t, n, r, s, i, o, l, a) {
   (br = !1), (pi = null), kg.apply(Ag, arguments);
}
function Ng(e, t, n, r, s, i, o, l, a) {
   if ((Tg.apply(this, arguments), br)) {
      if (br) {
         var u = pi;
         (br = !1), (pi = null);
      } else throw Error(A(198));
      mi || ((mi = !0), (Fl = u));
   }
}
function kn(e) {
   var t = e,
      n = e;
   if (e.alternate) for (; t.return; ) t = t.return;
   else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
   }
   return t.tag === 3 ? n : null;
}
function hh(e) {
   if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
   }
   return null;
}
function cc(e) {
   if (kn(e) !== e) throw Error(A(188));
}
function Rg(e) {
   var t = e.alternate;
   if (!t) {
      if (((t = kn(e)), t === null)) throw Error(A(188));
      return t !== e ? null : e;
   }
   for (var n = e, r = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var i = s.alternate;
      if (i === null) {
         if (((r = s.return), r !== null)) {
            n = r;
            continue;
         }
         break;
      }
      if (s.child === i.child) {
         for (i = s.child; i; ) {
            if (i === n) return cc(s), e;
            if (i === r) return cc(s), t;
            i = i.sibling;
         }
         throw Error(A(188));
      }
      if (n.return !== r.return) (n = s), (r = i);
      else {
         for (var o = !1, l = s.child; l; ) {
            if (l === n) {
               (o = !0), (n = s), (r = i);
               break;
            }
            if (l === r) {
               (o = !0), (r = s), (n = i);
               break;
            }
            l = l.sibling;
         }
         if (!o) {
            for (l = i.child; l; ) {
               if (l === n) {
                  (o = !0), (n = i), (r = s);
                  break;
               }
               if (l === r) {
                  (o = !0), (r = i), (n = s);
                  break;
               }
               l = l.sibling;
            }
            if (!o) throw Error(A(189));
         }
      }
      if (n.alternate !== r) throw Error(A(190));
   }
   if (n.tag !== 3) throw Error(A(188));
   return n.stateNode.current === n ? e : t;
}
function ph(e) {
   return (e = Rg(e)), e !== null ? mh(e) : null;
}
function mh(e) {
   if (e.tag === 5 || e.tag === 6) return e;
   for (e = e.child; e !== null; ) {
      var t = mh(e);
      if (t !== null) return t;
      e = e.sibling;
   }
   return null;
}
var yh = Oe.unstable_scheduleCallback,
   fc = Oe.unstable_cancelCallback,
   Fg = Oe.unstable_shouldYield,
   Dg = Oe.unstable_requestPaint,
   ne = Oe.unstable_now,
   Mg = Oe.unstable_getCurrentPriorityLevel,
   Ua = Oe.unstable_ImmediatePriority,
   gh = Oe.unstable_UserBlockingPriority,
   yi = Oe.unstable_NormalPriority,
   Lg = Oe.unstable_LowPriority,
   vh = Oe.unstable_IdlePriority,
   Xi = null,
   ut = null;
function Og(e) {
   if (ut && typeof ut.onCommitFiberRoot == 'function')
      try {
         ut.onCommitFiberRoot(Xi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
}
var et = Math.clz32 ? Math.clz32 : Vg,
   bg = Math.log,
   Ig = Math.LN2;
function Vg(e) {
   return (e >>>= 0), e === 0 ? 32 : (31 - ((bg(e) / Ig) | 0)) | 0;
}
var Os = 64,
   bs = 4194304;
function Rr(e) {
   switch (e & -e) {
      case 1:
         return 1;
      case 2:
         return 2;
      case 4:
         return 4;
      case 8:
         return 8;
      case 16:
         return 16;
      case 32:
         return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
         return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
         return e & 130023424;
      case 134217728:
         return 134217728;
      case 268435456:
         return 268435456;
      case 536870912:
         return 536870912;
      case 1073741824:
         return 1073741824;
      default:
         return e;
   }
}
function gi(e, t) {
   var n = e.pendingLanes;
   if (n === 0) return 0;
   var r = 0,
      s = e.suspendedLanes,
      i = e.pingedLanes,
      o = n & 268435455;
   if (o !== 0) {
      var l = o & ~s;
      l !== 0 ? (r = Rr(l)) : ((i &= o), i !== 0 && (r = Rr(i)));
   } else (o = n & ~s), o !== 0 ? (r = Rr(o)) : i !== 0 && (r = Rr(i));
   if (r === 0) return 0;
   if (t !== 0 && t !== r && !(t & s) && ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))) return t;
   if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - et(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
   return r;
}
function _g(e, t) {
   switch (e) {
      case 1:
      case 2:
      case 4:
         return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
         return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
         return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
         return -1;
      default:
         return -1;
   }
}
function Bg(e, t) {
   for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var o = 31 - et(i),
         l = 1 << o,
         a = s[o];
      a === -1 ? (!(l & n) || l & r) && (s[o] = _g(l, t)) : a <= t && (e.expiredLanes |= l), (i &= ~l);
   }
}
function Dl(e) {
   return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function xh() {
   var e = Os;
   return (Os <<= 1), !(Os & 4194240) && (Os = 64), e;
}
function Lo(e) {
   for (var t = [], n = 0; 31 > n; n++) t.push(e);
   return t;
}
function xs(e, t, n) {
   (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - et(t)),
      (e[t] = n);
}
function zg(e, t) {
   var n = e.pendingLanes & ~t;
   (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
   var r = e.eventTimes;
   for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - et(n),
         i = 1 << s;
      (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i);
   }
}
function $a(e, t) {
   var n = (e.entangledLanes |= t);
   for (e = e.entanglements; n; ) {
      var r = 31 - et(n),
         s = 1 << r;
      (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
   }
}
var V = 0;
function wh(e) {
   return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Sh,
   Qa,
   Ch,
   Ph,
   jh,
   Ml = !1,
   Is = [],
   Vt = null,
   _t = null,
   Bt = null,
   Xr = new Map(),
   Jr = new Map(),
   Mt = [],
   Ug =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
         ' '
      );
function dc(e, t) {
   switch (e) {
      case 'focusin':
      case 'focusout':
         Vt = null;
         break;
      case 'dragenter':
      case 'dragleave':
         _t = null;
         break;
      case 'mouseover':
      case 'mouseout':
         Bt = null;
         break;
      case 'pointerover':
      case 'pointerout':
         Xr.delete(t.pointerId);
         break;
      case 'gotpointercapture':
      case 'lostpointercapture':
         Jr.delete(t.pointerId);
   }
}
function wr(e, t, n, r, s, i) {
   return e === null || e.nativeEvent !== i
      ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [s] }),
        t !== null && ((t = Ss(t)), t !== null && Qa(t)),
        e)
      : ((e.eventSystemFlags |= r), (t = e.targetContainers), s !== null && t.indexOf(s) === -1 && t.push(s), e);
}
function $g(e, t, n, r, s) {
   switch (t) {
      case 'focusin':
         return (Vt = wr(Vt, e, t, n, r, s)), !0;
      case 'dragenter':
         return (_t = wr(_t, e, t, n, r, s)), !0;
      case 'mouseover':
         return (Bt = wr(Bt, e, t, n, r, s)), !0;
      case 'pointerover':
         var i = s.pointerId;
         return Xr.set(i, wr(Xr.get(i) || null, e, t, n, r, s)), !0;
      case 'gotpointercapture':
         return (i = s.pointerId), Jr.set(i, wr(Jr.get(i) || null, e, t, n, r, s)), !0;
   }
   return !1;
}
function Eh(e) {
   var t = dn(e.target);
   if (t !== null) {
      var n = kn(t);
      if (n !== null) {
         if (((t = n.tag), t === 13)) {
            if (((t = hh(n)), t !== null)) {
               (e.blockedOn = t),
                  jh(e.priority, function () {
                     Ch(n);
                  });
               return;
            }
         } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
         }
      }
   }
   e.blockedOn = null;
}
function ei(e) {
   if (e.blockedOn !== null) return !1;
   for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ll(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
         n = e.nativeEvent;
         var r = new n.constructor(n.type, n);
         (Tl = r), n.target.dispatchEvent(r), (Tl = null);
      } else return (t = Ss(n)), t !== null && Qa(t), (e.blockedOn = n), !1;
      t.shift();
   }
   return !0;
}
function hc(e, t, n) {
   ei(e) && n.delete(t);
}
function Qg() {
   (Ml = !1),
      Vt !== null && ei(Vt) && (Vt = null),
      _t !== null && ei(_t) && (_t = null),
      Bt !== null && ei(Bt) && (Bt = null),
      Xr.forEach(hc),
      Jr.forEach(hc);
}
function Sr(e, t) {
   e.blockedOn === t && ((e.blockedOn = null), Ml || ((Ml = !0), Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, Qg)));
}
function Zr(e) {
   function t(s) {
      return Sr(s, e);
   }
   if (0 < Is.length) {
      Sr(Is[0], e);
      for (var n = 1; n < Is.length; n++) {
         var r = Is[n];
         r.blockedOn === e && (r.blockedOn = null);
      }
   }
   for (
      Vt !== null && Sr(Vt, e), _t !== null && Sr(_t, e), Bt !== null && Sr(Bt, e), Xr.forEach(t), Jr.forEach(t), n = 0;
      n < Mt.length;
      n++
   )
      (r = Mt[n]), r.blockedOn === e && (r.blockedOn = null);
   for (; 0 < Mt.length && ((n = Mt[0]), n.blockedOn === null); ) Eh(n), n.blockedOn === null && Mt.shift();
}
var Yn = kt.ReactCurrentBatchConfig,
   vi = !0;
function Wg(e, t, n, r) {
   var s = V,
      i = Yn.transition;
   Yn.transition = null;
   try {
      (V = 1), Wa(e, t, n, r);
   } finally {
      (V = s), (Yn.transition = i);
   }
}
function Kg(e, t, n, r) {
   var s = V,
      i = Yn.transition;
   Yn.transition = null;
   try {
      (V = 4), Wa(e, t, n, r);
   } finally {
      (V = s), (Yn.transition = i);
   }
}
function Wa(e, t, n, r) {
   if (vi) {
      var s = Ll(e, t, n, r);
      if (s === null) Qo(e, t, r, xi, n), dc(e, r);
      else if ($g(s, e, t, n, r)) r.stopPropagation();
      else if ((dc(e, r), t & 4 && -1 < Ug.indexOf(e))) {
         for (; s !== null; ) {
            var i = Ss(s);
            if ((i !== null && Sh(i), (i = Ll(e, t, n, r)), i === null && Qo(e, t, r, xi, n), i === s)) break;
            s = i;
         }
         s !== null && r.stopPropagation();
      } else Qo(e, t, r, null, n);
   }
}
var xi = null;
function Ll(e, t, n, r) {
   if (((xi = null), (e = za(r)), (e = dn(e)), e !== null))
      if (((t = kn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
         if (((e = hh(t)), e !== null)) return e;
         e = null;
      } else if (n === 3) {
         if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
         e = null;
      } else t !== e && (e = null);
   return (xi = e), null;
}
function kh(e) {
   switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
         return 1;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
         return 4;
      case 'message':
         switch (Mg()) {
            case Ua:
               return 1;
            case gh:
               return 4;
            case yi:
            case Lg:
               return 16;
            case vh:
               return 536870912;
            default:
               return 16;
         }
      default:
         return 16;
   }
}
var Ot = null,
   Ka = null,
   ti = null;
function Ah() {
   if (ti) return ti;
   var e,
      t = Ka,
      n = t.length,
      r,
      s = 'value' in Ot ? Ot.value : Ot.textContent,
      i = s.length;
   for (e = 0; e < n && t[e] === s[e]; e++);
   var o = n - e;
   for (r = 1; r <= o && t[n - r] === s[i - r]; r++);
   return (ti = s.slice(e, 1 < r ? 1 - r : void 0));
}
function ni(e) {
   var t = e.keyCode;
   return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
   );
}
function Vs() {
   return !0;
}
function pc() {
   return !1;
}
function Ve(e) {
   function t(n, r, s, i, o) {
      (this._reactName = n),
         (this._targetInst = s),
         (this.type = r),
         (this.nativeEvent = i),
         (this.target = o),
         (this.currentTarget = null);
      for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
      return (
         (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Vs : pc),
         (this.isPropagationStopped = pc),
         this
      );
   }
   return (
      X(t.prototype, {
         preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n &&
               (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
               (this.isDefaultPrevented = Vs));
         },
         stopPropagation: function () {
            var n = this.nativeEvent;
            n &&
               (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
               (this.isPropagationStopped = Vs));
         },
         persist: function () {},
         isPersistent: Vs,
      }),
      t
   );
}
var cr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
         return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
   },
   qa = Ve(cr),
   ws = X({}, cr, { view: 0, detail: 0 }),
   qg = Ve(ws),
   Oo,
   bo,
   Cr,
   Ji = X({}, ws, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ha,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
         return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
      },
      movementX: function (e) {
         return 'movementX' in e
            ? e.movementX
            : (e !== Cr &&
                 (Cr && e.type === 'mousemove' ? ((Oo = e.screenX - Cr.screenX), (bo = e.screenY - Cr.screenY)) : (bo = Oo = 0), (Cr = e)),
              Oo);
      },
      movementY: function (e) {
         return 'movementY' in e ? e.movementY : bo;
      },
   }),
   mc = Ve(Ji),
   Hg = X({}, Ji, { dataTransfer: 0 }),
   Gg = Ve(Hg),
   Yg = X({}, ws, { relatedTarget: 0 }),
   Io = Ve(Yg),
   Xg = X({}, cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
   Jg = Ve(Xg),
   Zg = X({}, cr, {
      clipboardData: function (e) {
         return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
   }),
   ev = Ve(Zg),
   tv = X({}, cr, { data: 0 }),
   yc = Ve(tv),
   nv = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
   },
   rv = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
   },
   sv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function iv(e) {
   var t = this.nativeEvent;
   return t.getModifierState ? t.getModifierState(e) : (e = sv[e]) ? !!t[e] : !1;
}
function Ha() {
   return iv;
}
var ov = X({}, ws, {
      key: function (e) {
         if (e.key) {
            var t = nv[e.key] || e.key;
            if (t !== 'Unidentified') return t;
         }
         return e.type === 'keypress'
            ? ((e = ni(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
            : e.type === 'keydown' || e.type === 'keyup'
            ? rv[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ha,
      charCode: function (e) {
         return e.type === 'keypress' ? ni(e) : 0;
      },
      keyCode: function (e) {
         return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
         return e.type === 'keypress' ? ni(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
   }),
   lv = Ve(ov),
   av = X({}, Ji, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
   }),
   gc = Ve(av),
   uv = X({}, ws, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ha,
   }),
   cv = Ve(uv),
   fv = X({}, cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
   dv = Ve(fv),
   hv = X({}, Ji, {
      deltaX: function (e) {
         return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
         return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
   }),
   pv = Ve(hv),
   mv = [9, 13, 27, 32],
   Ga = wt && 'CompositionEvent' in window,
   Ir = null;
wt && 'documentMode' in document && (Ir = document.documentMode);
var yv = wt && 'TextEvent' in window && !Ir,
   Th = wt && (!Ga || (Ir && 8 < Ir && 11 >= Ir)),
   vc = String.fromCharCode(32),
   xc = !1;
function Nh(e, t) {
   switch (e) {
      case 'keyup':
         return mv.indexOf(t.keyCode) !== -1;
      case 'keydown':
         return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
         return !0;
      default:
         return !1;
   }
}
function Rh(e) {
   return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Mn = !1;
function gv(e, t) {
   switch (e) {
      case 'compositionend':
         return Rh(t);
      case 'keypress':
         return t.which !== 32 ? null : ((xc = !0), vc);
      case 'textInput':
         return (e = t.data), e === vc && xc ? null : e;
      default:
         return null;
   }
}
function vv(e, t) {
   if (Mn) return e === 'compositionend' || (!Ga && Nh(e, t)) ? ((e = Ah()), (ti = Ka = Ot = null), (Mn = !1), e) : null;
   switch (e) {
      case 'paste':
         return null;
      case 'keypress':
         if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
         }
         return null;
      case 'compositionend':
         return Th && t.locale !== 'ko' ? null : t.data;
      default:
         return null;
   }
}
var xv = {
   color: !0,
   date: !0,
   datetime: !0,
   'datetime-local': !0,
   email: !0,
   month: !0,
   number: !0,
   password: !0,
   range: !0,
   search: !0,
   tel: !0,
   text: !0,
   time: !0,
   url: !0,
   week: !0,
};
function wc(e) {
   var t = e && e.nodeName && e.nodeName.toLowerCase();
   return t === 'input' ? !!xv[e.type] : t === 'textarea';
}
function Fh(e, t, n, r) {
   ah(r), (t = wi(t, 'onChange')), 0 < t.length && ((n = new qa('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var Vr = null,
   es = null;
function wv(e) {
   Uh(e, 0);
}
function Zi(e) {
   var t = bn(e);
   if (th(t)) return e;
}
function Sv(e, t) {
   if (e === 'change') return t;
}
var Dh = !1;
if (wt) {
   var Vo;
   if (wt) {
      var _o = 'oninput' in document;
      if (!_o) {
         var Sc = document.createElement('div');
         Sc.setAttribute('oninput', 'return;'), (_o = typeof Sc.oninput == 'function');
      }
      Vo = _o;
   } else Vo = !1;
   Dh = Vo && (!document.documentMode || 9 < document.documentMode);
}
function Cc() {
   Vr && (Vr.detachEvent('onpropertychange', Mh), (es = Vr = null));
}
function Mh(e) {
   if (e.propertyName === 'value' && Zi(es)) {
      var t = [];
      Fh(t, es, e, za(e)), dh(wv, t);
   }
}
function Cv(e, t, n) {
   e === 'focusin' ? (Cc(), (Vr = t), (es = n), Vr.attachEvent('onpropertychange', Mh)) : e === 'focusout' && Cc();
}
function Pv(e) {
   if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Zi(es);
}
function jv(e, t) {
   if (e === 'click') return Zi(t);
}
function Ev(e, t) {
   if (e === 'input' || e === 'change') return Zi(t);
}
function kv(e, t) {
   return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var nt = typeof Object.is == 'function' ? Object.is : kv;
function ts(e, t) {
   if (nt(e, t)) return !0;
   if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
   var n = Object.keys(e),
      r = Object.keys(t);
   if (n.length !== r.length) return !1;
   for (r = 0; r < n.length; r++) {
      var s = n[r];
      if (!yl.call(t, s) || !nt(e[s], t[s])) return !1;
   }
   return !0;
}
function Pc(e) {
   for (; e && e.firstChild; ) e = e.firstChild;
   return e;
}
function jc(e, t) {
   var n = Pc(e);
   e = 0;
   for (var r; n; ) {
      if (n.nodeType === 3) {
         if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
         e = r;
      }
      e: {
         for (; n; ) {
            if (n.nextSibling) {
               n = n.nextSibling;
               break e;
            }
            n = n.parentNode;
         }
         n = void 0;
      }
      n = Pc(n);
   }
}
function Lh(e, t) {
   return e && t
      ? e === t
         ? !0
         : e && e.nodeType === 3
         ? !1
         : t && t.nodeType === 3
         ? Lh(e, t.parentNode)
         : 'contains' in e
         ? e.contains(t)
         : e.compareDocumentPosition
         ? !!(e.compareDocumentPosition(t) & 16)
         : !1
      : !1;
}
function Oh() {
   for (var e = window, t = hi(); t instanceof e.HTMLIFrameElement; ) {
      try {
         var n = typeof t.contentWindow.location.href == 'string';
      } catch {
         n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = hi(e.document);
   }
   return t;
}
function Ya(e) {
   var t = e && e.nodeName && e.nodeName.toLowerCase();
   return (
      t &&
      ((t === 'input' && (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
         t === 'textarea' ||
         e.contentEditable === 'true')
   );
}
function Av(e) {
   var t = Oh(),
      n = e.focusedElem,
      r = e.selectionRange;
   if (t !== n && n && n.ownerDocument && Lh(n.ownerDocument.documentElement, n)) {
      if (r !== null && Ya(n)) {
         if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
            (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
         else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
            e = e.getSelection();
            var s = n.textContent.length,
               i = Math.min(r.start, s);
            (r = r.end === void 0 ? i : Math.min(r.end, s)), !e.extend && i > r && ((s = r), (r = i), (i = s)), (s = jc(n, i));
            var o = jc(n, r);
            s &&
               o &&
               (e.rangeCount !== 1 ||
                  e.anchorNode !== s.node ||
                  e.anchorOffset !== s.offset ||
                  e.focusNode !== o.node ||
                  e.focusOffset !== o.offset) &&
               ((t = t.createRange()),
               t.setStart(s.node, s.offset),
               e.removeAllRanges(),
               i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
         }
      }
      for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
         (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
   }
}
var Tv = wt && 'documentMode' in document && 11 >= document.documentMode,
   Ln = null,
   Ol = null,
   _r = null,
   bl = !1;
function Ec(e, t, n) {
   var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
   bl ||
      Ln == null ||
      Ln !== hi(r) ||
      ((r = Ln),
      'selectionStart' in r && Ya(r)
         ? (r = { start: r.selectionStart, end: r.selectionEnd })
         : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
           (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
      (_r && ts(_r, r)) ||
         ((_r = r),
         (r = wi(Ol, 'onSelect')),
         0 < r.length && ((t = new qa('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Ln))));
}
function _s(e, t) {
   var n = {};
   return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var On = {
      animationend: _s('Animation', 'AnimationEnd'),
      animationiteration: _s('Animation', 'AnimationIteration'),
      animationstart: _s('Animation', 'AnimationStart'),
      transitionend: _s('Transition', 'TransitionEnd'),
   },
   Bo = {},
   bh = {};
wt &&
   ((bh = document.createElement('div').style),
   'AnimationEvent' in window ||
      (delete On.animationend.animation, delete On.animationiteration.animation, delete On.animationstart.animation),
   'TransitionEvent' in window || delete On.transitionend.transition);
function eo(e) {
   if (Bo[e]) return Bo[e];
   if (!On[e]) return e;
   var t = On[e],
      n;
   for (n in t) if (t.hasOwnProperty(n) && n in bh) return (Bo[e] = t[n]);
   return e;
}
var Ih = eo('animationend'),
   Vh = eo('animationiteration'),
   _h = eo('animationstart'),
   Bh = eo('transitionend'),
   zh = new Map(),
   kc =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
         ' '
      );
function Jt(e, t) {
   zh.set(e, t), En(t, [e]);
}
for (var zo = 0; zo < kc.length; zo++) {
   var Uo = kc[zo],
      Nv = Uo.toLowerCase(),
      Rv = Uo[0].toUpperCase() + Uo.slice(1);
   Jt(Nv, 'on' + Rv);
}
Jt(Ih, 'onAnimationEnd');
Jt(Vh, 'onAnimationIteration');
Jt(_h, 'onAnimationStart');
Jt('dblclick', 'onDoubleClick');
Jt('focusin', 'onFocus');
Jt('focusout', 'onBlur');
Jt(Bh, 'onTransitionEnd');
er('onMouseEnter', ['mouseout', 'mouseover']);
er('onMouseLeave', ['mouseout', 'mouseover']);
er('onPointerEnter', ['pointerout', 'pointerover']);
er('onPointerLeave', ['pointerout', 'pointerover']);
En('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
En('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
En('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
En('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
En('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
En('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Fr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
         ' '
      ),
   Fv = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Fr));
function Ac(e, t, n) {
   var r = e.type || 'unknown-event';
   (e.currentTarget = n), Ng(r, t, void 0, e), (e.currentTarget = null);
}
function Uh(e, t) {
   t = (t & 4) !== 0;
   for (var n = 0; n < e.length; n++) {
      var r = e[n],
         s = r.event;
      r = r.listeners;
      e: {
         var i = void 0;
         if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
               var l = r[o],
                  a = l.instance,
                  u = l.currentTarget;
               if (((l = l.listener), a !== i && s.isPropagationStopped())) break e;
               Ac(s, l, u), (i = a);
            }
         else
            for (o = 0; o < r.length; o++) {
               if (((l = r[o]), (a = l.instance), (u = l.currentTarget), (l = l.listener), a !== i && s.isPropagationStopped())) break e;
               Ac(s, l, u), (i = a);
            }
      }
   }
   if (mi) throw ((e = Fl), (mi = !1), (Fl = null), e);
}
function z(e, t) {
   var n = t[zl];
   n === void 0 && (n = t[zl] = new Set());
   var r = e + '__bubble';
   n.has(r) || ($h(t, e, 2, !1), n.add(r));
}
function $o(e, t, n) {
   var r = 0;
   t && (r |= 4), $h(n, e, r, t);
}
var Bs = '_reactListening' + Math.random().toString(36).slice(2);
function ns(e) {
   if (!e[Bs]) {
      (e[Bs] = !0),
         Yd.forEach(function (n) {
            n !== 'selectionchange' && (Fv.has(n) || $o(n, !1, e), $o(n, !0, e));
         });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Bs] || ((t[Bs] = !0), $o('selectionchange', !1, t));
   }
}
function $h(e, t, n, r) {
   switch (kh(t)) {
      case 1:
         var s = Wg;
         break;
      case 4:
         s = Kg;
         break;
      default:
         s = Wa;
   }
   (n = s.bind(null, t, n, e)),
      (s = void 0),
      !Rl || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (s = !0),
      r
         ? s !== void 0
            ? e.addEventListener(t, n, { capture: !0, passive: s })
            : e.addEventListener(t, n, !0)
         : s !== void 0
         ? e.addEventListener(t, n, { passive: s })
         : e.addEventListener(t, n, !1);
}
function Qo(e, t, n, r, s) {
   var i = r;
   if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
         if (r === null) return;
         var o = r.tag;
         if (o === 3 || o === 4) {
            var l = r.stateNode.containerInfo;
            if (l === s || (l.nodeType === 8 && l.parentNode === s)) break;
            if (o === 4)
               for (o = r.return; o !== null; ) {
                  var a = o.tag;
                  if ((a === 3 || a === 4) && ((a = o.stateNode.containerInfo), a === s || (a.nodeType === 8 && a.parentNode === s)))
                     return;
                  o = o.return;
               }
            for (; l !== null; ) {
               if (((o = dn(l)), o === null)) return;
               if (((a = o.tag), a === 5 || a === 6)) {
                  r = i = o;
                  continue e;
               }
               l = l.parentNode;
            }
         }
         r = r.return;
      }
   dh(function () {
      var u = i,
         c = za(n),
         f = [];
      e: {
         var h = zh.get(e);
         if (h !== void 0) {
            var m = qa,
               v = e;
            switch (e) {
               case 'keypress':
                  if (ni(n) === 0) break e;
               case 'keydown':
               case 'keyup':
                  m = lv;
                  break;
               case 'focusin':
                  (v = 'focus'), (m = Io);
                  break;
               case 'focusout':
                  (v = 'blur'), (m = Io);
                  break;
               case 'beforeblur':
               case 'afterblur':
                  m = Io;
                  break;
               case 'click':
                  if (n.button === 2) break e;
               case 'auxclick':
               case 'dblclick':
               case 'mousedown':
               case 'mousemove':
               case 'mouseup':
               case 'mouseout':
               case 'mouseover':
               case 'contextmenu':
                  m = mc;
                  break;
               case 'drag':
               case 'dragend':
               case 'dragenter':
               case 'dragexit':
               case 'dragleave':
               case 'dragover':
               case 'dragstart':
               case 'drop':
                  m = Gg;
                  break;
               case 'touchcancel':
               case 'touchend':
               case 'touchmove':
               case 'touchstart':
                  m = cv;
                  break;
               case Ih:
               case Vh:
               case _h:
                  m = Jg;
                  break;
               case Bh:
                  m = dv;
                  break;
               case 'scroll':
                  m = qg;
                  break;
               case 'wheel':
                  m = pv;
                  break;
               case 'copy':
               case 'cut':
               case 'paste':
                  m = ev;
                  break;
               case 'gotpointercapture':
               case 'lostpointercapture':
               case 'pointercancel':
               case 'pointerdown':
               case 'pointermove':
               case 'pointerout':
               case 'pointerover':
               case 'pointerup':
                  m = gc;
            }
            var x = (t & 4) !== 0,
               C = !x && e === 'scroll',
               y = x ? (h !== null ? h + 'Capture' : null) : h;
            x = [];
            for (var p = u, g; p !== null; ) {
               g = p;
               var S = g.stateNode;
               if ((g.tag === 5 && S !== null && ((g = S), y !== null && ((S = Yr(p, y)), S != null && x.push(rs(p, S, g)))), C)) break;
               p = p.return;
            }
            0 < x.length && ((h = new m(h, v, null, n, c)), f.push({ event: h, listeners: x }));
         }
      }
      if (!(t & 7)) {
         e: {
            if (
               ((h = e === 'mouseover' || e === 'pointerover'),
               (m = e === 'mouseout' || e === 'pointerout'),
               h && n !== Tl && (v = n.relatedTarget || n.fromElement) && (dn(v) || v[St]))
            )
               break e;
            if (
               (m || h) &&
               ((h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window),
               m
                  ? ((v = n.relatedTarget || n.toElement),
                    (m = u),
                    (v = v ? dn(v) : null),
                    v !== null && ((C = kn(v)), v !== C || (v.tag !== 5 && v.tag !== 6)) && (v = null))
                  : ((m = null), (v = u)),
               m !== v)
            ) {
               if (
                  ((x = mc),
                  (S = 'onMouseLeave'),
                  (y = 'onMouseEnter'),
                  (p = 'mouse'),
                  (e === 'pointerout' || e === 'pointerover') &&
                     ((x = gc), (S = 'onPointerLeave'), (y = 'onPointerEnter'), (p = 'pointer')),
                  (C = m == null ? h : bn(m)),
                  (g = v == null ? h : bn(v)),
                  (h = new x(S, p + 'leave', m, n, c)),
                  (h.target = C),
                  (h.relatedTarget = g),
                  (S = null),
                  dn(c) === u && ((x = new x(y, p + 'enter', v, n, c)), (x.target = g), (x.relatedTarget = C), (S = x)),
                  (C = S),
                  m && v)
               )
                  t: {
                     for (x = m, y = v, p = 0, g = x; g; g = Rn(g)) p++;
                     for (g = 0, S = y; S; S = Rn(S)) g++;
                     for (; 0 < p - g; ) (x = Rn(x)), p--;
                     for (; 0 < g - p; ) (y = Rn(y)), g--;
                     for (; p--; ) {
                        if (x === y || (y !== null && x === y.alternate)) break t;
                        (x = Rn(x)), (y = Rn(y));
                     }
                     x = null;
                  }
               else x = null;
               m !== null && Tc(f, h, m, x, !1), v !== null && C !== null && Tc(f, C, v, x, !0);
            }
         }
         e: {
            if (
               ((h = u ? bn(u) : window),
               (m = h.nodeName && h.nodeName.toLowerCase()),
               m === 'select' || (m === 'input' && h.type === 'file'))
            )
               var j = Sv;
            else if (wc(h))
               if (Dh) j = Ev;
               else {
                  j = Pv;
                  var k = Cv;
               }
            else (m = h.nodeName) && m.toLowerCase() === 'input' && (h.type === 'checkbox' || h.type === 'radio') && (j = jv);
            if (j && (j = j(e, u))) {
               Fh(f, j, n, c);
               break e;
            }
            k && k(e, h, u), e === 'focusout' && (k = h._wrapperState) && k.controlled && h.type === 'number' && Pl(h, 'number', h.value);
         }
         switch (((k = u ? bn(u) : window), e)) {
            case 'focusin':
               (wc(k) || k.contentEditable === 'true') && ((Ln = k), (Ol = u), (_r = null));
               break;
            case 'focusout':
               _r = Ol = Ln = null;
               break;
            case 'mousedown':
               bl = !0;
               break;
            case 'contextmenu':
            case 'mouseup':
            case 'dragend':
               (bl = !1), Ec(f, n, c);
               break;
            case 'selectionchange':
               if (Tv) break;
            case 'keydown':
            case 'keyup':
               Ec(f, n, c);
         }
         var E;
         if (Ga)
            e: {
               switch (e) {
                  case 'compositionstart':
                     var P = 'onCompositionStart';
                     break e;
                  case 'compositionend':
                     P = 'onCompositionEnd';
                     break e;
                  case 'compositionupdate':
                     P = 'onCompositionUpdate';
                     break e;
               }
               P = void 0;
            }
         else Mn ? Nh(e, n) && (P = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart');
         P &&
            (Th &&
               n.locale !== 'ko' &&
               (Mn || P !== 'onCompositionStart'
                  ? P === 'onCompositionEnd' && Mn && (E = Ah())
                  : ((Ot = c), (Ka = 'value' in Ot ? Ot.value : Ot.textContent), (Mn = !0))),
            (k = wi(u, P)),
            0 < k.length &&
               ((P = new yc(P, e, null, n, c)),
               f.push({ event: P, listeners: k }),
               E ? (P.data = E) : ((E = Rh(n)), E !== null && (P.data = E)))),
            (E = yv ? gv(e, n) : vv(e, n)) &&
               ((u = wi(u, 'onBeforeInput')),
               0 < u.length &&
                  ((c = new yc('onBeforeInput', 'beforeinput', null, n, c)), f.push({ event: c, listeners: u }), (c.data = E)));
      }
      Uh(f, t);
   });
}
function rs(e, t, n) {
   return { instance: e, listener: t, currentTarget: n };
}
function wi(e, t) {
   for (var n = t + 'Capture', r = []; e !== null; ) {
      var s = e,
         i = s.stateNode;
      s.tag === 5 &&
         i !== null &&
         ((s = i), (i = Yr(e, n)), i != null && r.unshift(rs(e, i, s)), (i = Yr(e, t)), i != null && r.push(rs(e, i, s))),
         (e = e.return);
   }
   return r;
}
function Rn(e) {
   if (e === null) return null;
   do e = e.return;
   while (e && e.tag !== 5);
   return e || null;
}
function Tc(e, t, n, r, s) {
   for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var l = n,
         a = l.alternate,
         u = l.stateNode;
      if (a !== null && a === r) break;
      l.tag === 5 &&
         u !== null &&
         ((l = u), s ? ((a = Yr(n, i)), a != null && o.unshift(rs(n, a, l))) : s || ((a = Yr(n, i)), a != null && o.push(rs(n, a, l)))),
         (n = n.return);
   }
   o.length !== 0 && e.push({ event: t, listeners: o });
}
var Dv = /\r\n?/g,
   Mv = /\u0000|\uFFFD/g;
function Nc(e) {
   return (typeof e == 'string' ? e : '' + e)
      .replace(
         Dv,
         `
`
      )
      .replace(Mv, '');
}
function zs(e, t, n) {
   if (((t = Nc(t)), Nc(e) !== t && n)) throw Error(A(425));
}
function Si() {}
var Il = null,
   Vl = null;
function _l(e, t) {
   return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
   );
}
var Bl = typeof setTimeout == 'function' ? setTimeout : void 0,
   Lv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
   Rc = typeof Promise == 'function' ? Promise : void 0,
   Ov =
      typeof queueMicrotask == 'function'
         ? queueMicrotask
         : typeof Rc < 'u'
         ? function (e) {
              return Rc.resolve(null).then(e).catch(bv);
           }
         : Bl;
function bv(e) {
   setTimeout(function () {
      throw e;
   });
}
function Wo(e, t) {
   var n = t,
      r = 0;
   do {
      var s = n.nextSibling;
      if ((e.removeChild(n), s && s.nodeType === 8))
         if (((n = s.data), n === '/$')) {
            if (r === 0) {
               e.removeChild(s), Zr(t);
               return;
            }
            r--;
         } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
      n = s;
   } while (n);
   Zr(t);
}
function zt(e) {
   for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
         if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
         if (t === '/$') return null;
      }
   }
   return e;
}
function Fc(e) {
   e = e.previousSibling;
   for (var t = 0; e; ) {
      if (e.nodeType === 8) {
         var n = e.data;
         if (n === '$' || n === '$!' || n === '$?') {
            if (t === 0) return e;
            t--;
         } else n === '/$' && t++;
      }
      e = e.previousSibling;
   }
   return null;
}
var fr = Math.random().toString(36).slice(2),
   at = '__reactFiber$' + fr,
   ss = '__reactProps$' + fr,
   St = '__reactContainer$' + fr,
   zl = '__reactEvents$' + fr,
   Iv = '__reactListeners$' + fr,
   Vv = '__reactHandles$' + fr;
function dn(e) {
   var t = e[at];
   if (t) return t;
   for (var n = e.parentNode; n; ) {
      if ((t = n[St] || n[at])) {
         if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
            for (e = Fc(e); e !== null; ) {
               if ((n = e[at])) return n;
               e = Fc(e);
            }
         return t;
      }
      (e = n), (n = e.parentNode);
   }
   return null;
}
function Ss(e) {
   return (e = e[at] || e[St]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function bn(e) {
   if (e.tag === 5 || e.tag === 6) return e.stateNode;
   throw Error(A(33));
}
function to(e) {
   return e[ss] || null;
}
var Ul = [],
   In = -1;
function Zt(e) {
   return { current: e };
}
function U(e) {
   0 > In || ((e.current = Ul[In]), (Ul[In] = null), In--);
}
function _(e, t) {
   In++, (Ul[In] = e.current), (e.current = t);
}
var Gt = {},
   ge = Zt(Gt),
   Ae = Zt(!1),
   wn = Gt;
function tr(e, t) {
   var n = e.type.contextTypes;
   if (!n) return Gt;
   var r = e.stateNode;
   if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
   var s = {},
      i;
   for (i in n) s[i] = t[i];
   return (
      r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = s)), s
   );
}
function Te(e) {
   return (e = e.childContextTypes), e != null;
}
function Ci() {
   U(Ae), U(ge);
}
function Dc(e, t, n) {
   if (ge.current !== Gt) throw Error(A(168));
   _(ge, t), _(Ae, n);
}
function Qh(e, t, n) {
   var r = e.stateNode;
   if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
   r = r.getChildContext();
   for (var s in r) if (!(s in t)) throw Error(A(108, Cg(e) || 'Unknown', s));
   return X({}, n, r);
}
function Pi(e) {
   return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Gt), (wn = ge.current), _(ge, e), _(Ae, Ae.current), !0
   );
}
function Mc(e, t, n) {
   var r = e.stateNode;
   if (!r) throw Error(A(169));
   n ? ((e = Qh(e, t, wn)), (r.__reactInternalMemoizedMergedChildContext = e), U(Ae), U(ge), _(ge, e)) : U(Ae), _(Ae, n);
}
var ht = null,
   no = !1,
   Ko = !1;
function Wh(e) {
   ht === null ? (ht = [e]) : ht.push(e);
}
function _v(e) {
   (no = !0), Wh(e);
}
function en() {
   if (!Ko && ht !== null) {
      Ko = !0;
      var e = 0,
         t = V;
      try {
         var n = ht;
         for (V = 1; e < n.length; e++) {
            var r = n[e];
            do r = r(!0);
            while (r !== null);
         }
         (ht = null), (no = !1);
      } catch (s) {
         throw (ht !== null && (ht = ht.slice(e + 1)), yh(Ua, en), s);
      } finally {
         (V = t), (Ko = !1);
      }
   }
   return null;
}
var Vn = [],
   _n = 0,
   ji = null,
   Ei = 0,
   Ue = [],
   $e = 0,
   Sn = null,
   pt = 1,
   mt = '';
function an(e, t) {
   (Vn[_n++] = Ei), (Vn[_n++] = ji), (ji = e), (Ei = t);
}
function Kh(e, t, n) {
   (Ue[$e++] = pt), (Ue[$e++] = mt), (Ue[$e++] = Sn), (Sn = e);
   var r = pt;
   e = mt;
   var s = 32 - et(r) - 1;
   (r &= ~(1 << s)), (n += 1);
   var i = 32 - et(t) + s;
   if (30 < i) {
      var o = s - (s % 5);
      (i = (r & ((1 << o) - 1)).toString(32)), (r >>= o), (s -= o), (pt = (1 << (32 - et(t) + s)) | (n << s) | r), (mt = i + e);
   } else (pt = (1 << i) | (n << s) | r), (mt = e);
}
function Xa(e) {
   e.return !== null && (an(e, 1), Kh(e, 1, 0));
}
function Ja(e) {
   for (; e === ji; ) (ji = Vn[--_n]), (Vn[_n] = null), (Ei = Vn[--_n]), (Vn[_n] = null);
   for (; e === Sn; ) (Sn = Ue[--$e]), (Ue[$e] = null), (mt = Ue[--$e]), (Ue[$e] = null), (pt = Ue[--$e]), (Ue[$e] = null);
}
var Le = null,
   Me = null,
   $ = !1,
   Ze = null;
function qh(e, t) {
   var n = Qe(5, null, null, 0);
   (n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Lc(e, t) {
   switch (e.tag) {
      case 5:
         var n = e.type;
         return (
            (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
            t !== null ? ((e.stateNode = t), (Le = e), (Me = zt(t.firstChild)), !0) : !1
         );
      case 6:
         return (
            (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (Le = e), (Me = null), !0) : !1
         );
      case 13:
         return (
            (t = t.nodeType !== 8 ? null : t),
            t !== null
               ? ((n = Sn !== null ? { id: pt, overflow: mt } : null),
                 (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                 (n = Qe(18, null, null, 0)),
                 (n.stateNode = t),
                 (n.return = e),
                 (e.child = n),
                 (Le = e),
                 (Me = null),
                 !0)
               : !1
         );
      default:
         return !1;
   }
}
function $l(e) {
   return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ql(e) {
   if ($) {
      var t = Me;
      if (t) {
         var n = t;
         if (!Lc(e, t)) {
            if ($l(e)) throw Error(A(418));
            t = zt(n.nextSibling);
            var r = Le;
            t && Lc(e, t) ? qh(r, n) : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (Le = e));
         }
      } else {
         if ($l(e)) throw Error(A(418));
         (e.flags = (e.flags & -4097) | 2), ($ = !1), (Le = e);
      }
   }
}
function Oc(e) {
   for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
   Le = e;
}
function Us(e) {
   if (e !== Le) return !1;
   if (!$) return Oc(e), ($ = !0), !1;
   var t;
   if (
      ((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== 'head' && t !== 'body' && !_l(e.type, e.memoizedProps))),
      t && (t = Me))
   ) {
      if ($l(e)) throw (Hh(), Error(A(418)));
      for (; t; ) qh(e, t), (t = zt(t.nextSibling));
   }
   if ((Oc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(A(317));
      e: {
         for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
               var n = e.data;
               if (n === '/$') {
                  if (t === 0) {
                     Me = zt(e.nextSibling);
                     break e;
                  }
                  t--;
               } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
            }
            e = e.nextSibling;
         }
         Me = null;
      }
   } else Me = Le ? zt(e.stateNode.nextSibling) : null;
   return !0;
}
function Hh() {
   for (var e = Me; e; ) e = zt(e.nextSibling);
}
function nr() {
   (Me = Le = null), ($ = !1);
}
function Za(e) {
   Ze === null ? (Ze = [e]) : Ze.push(e);
}
var Bv = kt.ReactCurrentBatchConfig;
function Xe(e, t) {
   if (e && e.defaultProps) {
      (t = X({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
   }
   return t;
}
var ki = Zt(null),
   Ai = null,
   Bn = null,
   eu = null;
function tu() {
   eu = Bn = Ai = null;
}
function nu(e) {
   var t = ki.current;
   U(ki), (e._currentValue = t);
}
function Wl(e, t, n) {
   for (; e !== null; ) {
      var r = e.alternate;
      if (
         ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
            : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
         e === n)
      )
         break;
      e = e.return;
   }
}
function Xn(e, t) {
   (Ai = e),
      (eu = Bn = null),
      (e = e.dependencies),
      e !== null && e.firstContext !== null && (e.lanes & t && (ke = !0), (e.firstContext = null));
}
function Ke(e) {
   var t = e._currentValue;
   if (eu !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Bn === null)) {
         if (Ai === null) throw Error(A(308));
         (Bn = e), (Ai.dependencies = { lanes: 0, firstContext: e });
      } else Bn = Bn.next = e;
   return t;
}
var hn = null;
function ru(e) {
   hn === null ? (hn = [e]) : hn.push(e);
}
function Gh(e, t, n, r) {
   var s = t.interleaved;
   return s === null ? ((n.next = n), ru(t)) : ((n.next = s.next), (s.next = n)), (t.interleaved = n), Ct(e, r);
}
function Ct(e, t) {
   e.lanes |= t;
   var n = e.alternate;
   for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
   return n.tag === 3 ? n.stateNode : null;
}
var Rt = !1;
function su(e) {
   e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
   };
}
function Yh(e, t) {
   (e = e.updateQueue),
      t.updateQueue === e &&
         (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
         });
}
function gt(e, t) {
   return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ut(e, t, n) {
   var r = e.updateQueue;
   if (r === null) return null;
   if (((r = r.shared), I & 2)) {
      var s = r.pending;
      return s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)), (r.pending = t), Ct(e, n);
   }
   return (s = r.interleaved), s === null ? ((t.next = t), ru(r)) : ((t.next = s.next), (s.next = t)), (r.interleaved = t), Ct(e, n);
}
function ri(e, t, n) {
   if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), $a(e, n);
   }
}
function bc(e, t) {
   var n = e.updateQueue,
      r = e.alternate;
   if (r !== null && ((r = r.updateQueue), n === r)) {
      var s = null,
         i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
         do {
            var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
            i === null ? (s = i = o) : (i = i.next = o), (n = n.next);
         } while (n !== null);
         i === null ? (s = i = t) : (i = i.next = t);
      } else s = i = t;
      (n = { baseState: r.baseState, firstBaseUpdate: s, lastBaseUpdate: i, shared: r.shared, effects: r.effects }), (e.updateQueue = n);
      return;
   }
   (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Ti(e, t, n, r) {
   var s = e.updateQueue;
   Rt = !1;
   var i = s.firstBaseUpdate,
      o = s.lastBaseUpdate,
      l = s.shared.pending;
   if (l !== null) {
      s.shared.pending = null;
      var a = l,
         u = a.next;
      (a.next = null), o === null ? (i = u) : (o.next = u), (o = a);
      var c = e.alternate;
      c !== null &&
         ((c = c.updateQueue),
         (l = c.lastBaseUpdate),
         l !== o && (l === null ? (c.firstBaseUpdate = u) : (l.next = u), (c.lastBaseUpdate = a)));
   }
   if (i !== null) {
      var f = s.baseState;
      (o = 0), (c = u = a = null), (l = i);
      do {
         var h = l.lane,
            m = l.eventTime;
         if ((r & h) === h) {
            c !== null && (c = c.next = { eventTime: m, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
            e: {
               var v = e,
                  x = l;
               switch (((h = t), (m = n), x.tag)) {
                  case 1:
                     if (((v = x.payload), typeof v == 'function')) {
                        f = v.call(m, f, h);
                        break e;
                     }
                     f = v;
                     break e;
                  case 3:
                     v.flags = (v.flags & -65537) | 128;
                  case 0:
                     if (((v = x.payload), (h = typeof v == 'function' ? v.call(m, f, h) : v), h == null)) break e;
                     f = X({}, f, h);
                     break e;
                  case 2:
                     Rt = !0;
               }
            }
            l.callback !== null && l.lane !== 0 && ((e.flags |= 64), (h = s.effects), h === null ? (s.effects = [l]) : h.push(l));
         } else
            (m = { eventTime: m, lane: h, tag: l.tag, payload: l.payload, callback: l.callback, next: null }),
               c === null ? ((u = c = m), (a = f)) : (c = c.next = m),
               (o |= h);
         if (((l = l.next), l === null)) {
            if (((l = s.shared.pending), l === null)) break;
            (h = l), (l = h.next), (h.next = null), (s.lastBaseUpdate = h), (s.shared.pending = null);
         }
      } while (1);
      if (
         (c === null && (a = f), (s.baseState = a), (s.firstBaseUpdate = u), (s.lastBaseUpdate = c), (t = s.shared.interleaved), t !== null)
      ) {
         s = t;
         do (o |= s.lane), (s = s.next);
         while (s !== t);
      } else i === null && (s.shared.lanes = 0);
      (Pn |= o), (e.lanes = o), (e.memoizedState = f);
   }
}
function Ic(e, t, n) {
   if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
         var r = e[t],
            s = r.callback;
         if (s !== null) {
            if (((r.callback = null), (r = n), typeof s != 'function')) throw Error(A(191, s));
            s.call(r);
         }
      }
}
var Xh = new Gd.Component().refs;
function Kl(e, t, n, r) {
   (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : X({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ro = {
   isMounted: function (e) {
      return (e = e._reactInternals) ? kn(e) === e : !1;
   },
   enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Se(),
         s = Qt(e),
         i = gt(r, s);
      (i.payload = t), n != null && (i.callback = n), (t = Ut(e, i, s)), t !== null && (tt(t, e, s, r), ri(t, e, s));
   },
   enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Se(),
         s = Qt(e),
         i = gt(r, s);
      (i.tag = 1), (i.payload = t), n != null && (i.callback = n), (t = Ut(e, i, s)), t !== null && (tt(t, e, s, r), ri(t, e, s));
   },
   enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Se(),
         r = Qt(e),
         s = gt(n, r);
      (s.tag = 2), t != null && (s.callback = t), (t = Ut(e, s, r)), t !== null && (tt(t, e, r, n), ri(t, e, r));
   },
};
function Vc(e, t, n, r, s, i, o) {
   return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
         ? e.shouldComponentUpdate(r, i, o)
         : t.prototype && t.prototype.isPureReactComponent
         ? !ts(n, r) || !ts(s, i)
         : !0
   );
}
function Jh(e, t, n) {
   var r = !1,
      s = Gt,
      i = t.contextType;
   return (
      typeof i == 'object' && i !== null
         ? (i = Ke(i))
         : ((s = Te(t) ? wn : ge.current), (r = t.contextTypes), (i = (r = r != null) ? tr(e, s) : Gt)),
      (t = new t(n, i)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ro),
      (e.stateNode = t),
      (t._reactInternals = e),
      r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = s), (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
   );
}
function _c(e, t, n, r) {
   (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && ro.enqueueReplaceState(t, t.state, null);
}
function ql(e, t, n, r) {
   var s = e.stateNode;
   (s.props = n), (s.state = e.memoizedState), (s.refs = Xh), su(e);
   var i = t.contextType;
   typeof i == 'object' && i !== null ? (s.context = Ke(i)) : ((i = Te(t) ? wn : ge.current), (s.context = tr(e, i))),
      (s.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == 'function' && (Kl(e, t, i, n), (s.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
         typeof s.getSnapshotBeforeUpdate == 'function' ||
         (typeof s.UNSAFE_componentWillMount != 'function' && typeof s.componentWillMount != 'function') ||
         ((t = s.state),
         typeof s.componentWillMount == 'function' && s.componentWillMount(),
         typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount(),
         t !== s.state && ro.enqueueReplaceState(s, s.state, null),
         Ti(e, n, s, r),
         (s.state = e.memoizedState)),
      typeof s.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Pr(e, t, n) {
   if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (n._owner) {
         if (((n = n._owner), n)) {
            if (n.tag !== 1) throw Error(A(309));
            var r = n.stateNode;
         }
         if (!r) throw Error(A(147, e));
         var s = r,
            i = '' + e;
         return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
            ? t.ref
            : ((t = function (o) {
                 var l = s.refs;
                 l === Xh && (l = s.refs = {}), o === null ? delete l[i] : (l[i] = o);
              }),
              (t._stringRef = i),
              t);
      }
      if (typeof e != 'string') throw Error(A(284));
      if (!n._owner) throw Error(A(290, e));
   }
   return e;
}
function $s(e, t) {
   throw (
      ((e = Object.prototype.toString.call(t)),
      Error(A(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
   );
}
function Bc(e) {
   var t = e._init;
   return t(e._payload);
}
function Zh(e) {
   function t(y, p) {
      if (e) {
         var g = y.deletions;
         g === null ? ((y.deletions = [p]), (y.flags |= 16)) : g.push(p);
      }
   }
   function n(y, p) {
      if (!e) return null;
      for (; p !== null; ) t(y, p), (p = p.sibling);
      return null;
   }
   function r(y, p) {
      for (y = new Map(); p !== null; ) p.key !== null ? y.set(p.key, p) : y.set(p.index, p), (p = p.sibling);
      return y;
   }
   function s(y, p) {
      return (y = Wt(y, p)), (y.index = 0), (y.sibling = null), y;
   }
   function i(y, p, g) {
      return (
         (y.index = g),
         e
            ? ((g = y.alternate), g !== null ? ((g = g.index), g < p ? ((y.flags |= 2), p) : g) : ((y.flags |= 2), p))
            : ((y.flags |= 1048576), p)
      );
   }
   function o(y) {
      return e && y.alternate === null && (y.flags |= 2), y;
   }
   function l(y, p, g, S) {
      return p === null || p.tag !== 6 ? ((p = Zo(g, y.mode, S)), (p.return = y), p) : ((p = s(p, g)), (p.return = y), p);
   }
   function a(y, p, g, S) {
      var j = g.type;
      return j === Dn
         ? c(y, p, g.props.children, S, g.key)
         : p !== null && (p.elementType === j || (typeof j == 'object' && j !== null && j.$$typeof === Nt && Bc(j) === p.type))
         ? ((S = s(p, g.props)), (S.ref = Pr(y, p, g)), (S.return = y), S)
         : ((S = ui(g.type, g.key, g.props, null, y.mode, S)), (S.ref = Pr(y, p, g)), (S.return = y), S);
   }
   function u(y, p, g, S) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation
         ? ((p = el(g, y.mode, S)), (p.return = y), p)
         : ((p = s(p, g.children || [])), (p.return = y), p);
   }
   function c(y, p, g, S, j) {
      return p === null || p.tag !== 7 ? ((p = vn(g, y.mode, S, j)), (p.return = y), p) : ((p = s(p, g)), (p.return = y), p);
   }
   function f(y, p, g) {
      if ((typeof p == 'string' && p !== '') || typeof p == 'number') return (p = Zo('' + p, y.mode, g)), (p.return = y), p;
      if (typeof p == 'object' && p !== null) {
         switch (p.$$typeof) {
            case Ds:
               return (g = ui(p.type, p.key, p.props, null, y.mode, g)), (g.ref = Pr(y, null, p)), (g.return = y), g;
            case Fn:
               return (p = el(p, y.mode, g)), (p.return = y), p;
            case Nt:
               var S = p._init;
               return f(y, S(p._payload), g);
         }
         if (Nr(p) || vr(p)) return (p = vn(p, y.mode, g, null)), (p.return = y), p;
         $s(y, p);
      }
      return null;
   }
   function h(y, p, g, S) {
      var j = p !== null ? p.key : null;
      if ((typeof g == 'string' && g !== '') || typeof g == 'number') return j !== null ? null : l(y, p, '' + g, S);
      if (typeof g == 'object' && g !== null) {
         switch (g.$$typeof) {
            case Ds:
               return g.key === j ? a(y, p, g, S) : null;
            case Fn:
               return g.key === j ? u(y, p, g, S) : null;
            case Nt:
               return (j = g._init), h(y, p, j(g._payload), S);
         }
         if (Nr(g) || vr(g)) return j !== null ? null : c(y, p, g, S, null);
         $s(y, g);
      }
      return null;
   }
   function m(y, p, g, S, j) {
      if ((typeof S == 'string' && S !== '') || typeof S == 'number') return (y = y.get(g) || null), l(p, y, '' + S, j);
      if (typeof S == 'object' && S !== null) {
         switch (S.$$typeof) {
            case Ds:
               return (y = y.get(S.key === null ? g : S.key) || null), a(p, y, S, j);
            case Fn:
               return (y = y.get(S.key === null ? g : S.key) || null), u(p, y, S, j);
            case Nt:
               var k = S._init;
               return m(y, p, g, k(S._payload), j);
         }
         if (Nr(S) || vr(S)) return (y = y.get(g) || null), c(p, y, S, j, null);
         $s(p, S);
      }
      return null;
   }
   function v(y, p, g, S) {
      for (var j = null, k = null, E = p, P = (p = 0), R = null; E !== null && P < g.length; P++) {
         E.index > P ? ((R = E), (E = null)) : (R = E.sibling);
         var F = h(y, E, g[P], S);
         if (F === null) {
            E === null && (E = R);
            break;
         }
         e && E && F.alternate === null && t(y, E), (p = i(F, p, P)), k === null ? (j = F) : (k.sibling = F), (k = F), (E = R);
      }
      if (P === g.length) return n(y, E), $ && an(y, P), j;
      if (E === null) {
         for (; P < g.length; P++) (E = f(y, g[P], S)), E !== null && ((p = i(E, p, P)), k === null ? (j = E) : (k.sibling = E), (k = E));
         return $ && an(y, P), j;
      }
      for (E = r(y, E); P < g.length; P++)
         (R = m(E, y, P, g[P], S)),
            R !== null &&
               (e && R.alternate !== null && E.delete(R.key === null ? P : R.key),
               (p = i(R, p, P)),
               k === null ? (j = R) : (k.sibling = R),
               (k = R));
      return (
         e &&
            E.forEach(function (B) {
               return t(y, B);
            }),
         $ && an(y, P),
         j
      );
   }
   function x(y, p, g, S) {
      var j = vr(g);
      if (typeof j != 'function') throw Error(A(150));
      if (((g = j.call(g)), g == null)) throw Error(A(151));
      for (var k = (j = null), E = p, P = (p = 0), R = null, F = g.next(); E !== null && !F.done; P++, F = g.next()) {
         E.index > P ? ((R = E), (E = null)) : (R = E.sibling);
         var B = h(y, E, F.value, S);
         if (B === null) {
            E === null && (E = R);
            break;
         }
         e && E && B.alternate === null && t(y, E), (p = i(B, p, P)), k === null ? (j = B) : (k.sibling = B), (k = B), (E = R);
      }
      if (F.done) return n(y, E), $ && an(y, P), j;
      if (E === null) {
         for (; !F.done; P++, F = g.next())
            (F = f(y, F.value, S)), F !== null && ((p = i(F, p, P)), k === null ? (j = F) : (k.sibling = F), (k = F));
         return $ && an(y, P), j;
      }
      for (E = r(y, E); !F.done; P++, F = g.next())
         (F = m(E, y, P, F.value, S)),
            F !== null &&
               (e && F.alternate !== null && E.delete(F.key === null ? P : F.key),
               (p = i(F, p, P)),
               k === null ? (j = F) : (k.sibling = F),
               (k = F));
      return (
         e &&
            E.forEach(function (ve) {
               return t(y, ve);
            }),
         $ && an(y, P),
         j
      );
   }
   function C(y, p, g, S) {
      if (
         (typeof g == 'object' && g !== null && g.type === Dn && g.key === null && (g = g.props.children),
         typeof g == 'object' && g !== null)
      ) {
         switch (g.$$typeof) {
            case Ds:
               e: {
                  for (var j = g.key, k = p; k !== null; ) {
                     if (k.key === j) {
                        if (((j = g.type), j === Dn)) {
                           if (k.tag === 7) {
                              n(y, k.sibling), (p = s(k, g.props.children)), (p.return = y), (y = p);
                              break e;
                           }
                        } else if (k.elementType === j || (typeof j == 'object' && j !== null && j.$$typeof === Nt && Bc(j) === k.type)) {
                           n(y, k.sibling), (p = s(k, g.props)), (p.ref = Pr(y, k, g)), (p.return = y), (y = p);
                           break e;
                        }
                        n(y, k);
                        break;
                     } else t(y, k);
                     k = k.sibling;
                  }
                  g.type === Dn
                     ? ((p = vn(g.props.children, y.mode, S, g.key)), (p.return = y), (y = p))
                     : ((S = ui(g.type, g.key, g.props, null, y.mode, S)), (S.ref = Pr(y, p, g)), (S.return = y), (y = S));
               }
               return o(y);
            case Fn:
               e: {
                  for (k = g.key; p !== null; ) {
                     if (p.key === k)
                        if (
                           p.tag === 4 &&
                           p.stateNode.containerInfo === g.containerInfo &&
                           p.stateNode.implementation === g.implementation
                        ) {
                           n(y, p.sibling), (p = s(p, g.children || [])), (p.return = y), (y = p);
                           break e;
                        } else {
                           n(y, p);
                           break;
                        }
                     else t(y, p);
                     p = p.sibling;
                  }
                  (p = el(g, y.mode, S)), (p.return = y), (y = p);
               }
               return o(y);
            case Nt:
               return (k = g._init), C(y, p, k(g._payload), S);
         }
         if (Nr(g)) return v(y, p, g, S);
         if (vr(g)) return x(y, p, g, S);
         $s(y, g);
      }
      return (typeof g == 'string' && g !== '') || typeof g == 'number'
         ? ((g = '' + g),
           p !== null && p.tag === 6
              ? (n(y, p.sibling), (p = s(p, g)), (p.return = y), (y = p))
              : (n(y, p), (p = Zo(g, y.mode, S)), (p.return = y), (y = p)),
           o(y))
         : n(y, p);
   }
   return C;
}
var rr = Zh(!0),
   ep = Zh(!1),
   Cs = {},
   ct = Zt(Cs),
   is = Zt(Cs),
   os = Zt(Cs);
function pn(e) {
   if (e === Cs) throw Error(A(174));
   return e;
}
function iu(e, t) {
   switch ((_(os, t), _(is, e), _(ct, Cs), (e = t.nodeType), e)) {
      case 9:
      case 11:
         t = (t = t.documentElement) ? t.namespaceURI : El(null, '');
         break;
      default:
         (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = El(t, e));
   }
   U(ct), _(ct, t);
}
function sr() {
   U(ct), U(is), U(os);
}
function tp(e) {
   pn(os.current);
   var t = pn(ct.current),
      n = El(t, e.type);
   t !== n && (_(is, e), _(ct, n));
}
function ou(e) {
   is.current === e && (U(ct), U(is));
}
var q = Zt(0);
function Ni(e) {
   for (var t = e; t !== null; ) {
      if (t.tag === 13) {
         var n = t.memoizedState;
         if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
         if (t.flags & 128) return t;
      } else if (t.child !== null) {
         (t.child.return = t), (t = t.child);
         continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
         if (t.return === null || t.return === e) return null;
         t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
   }
   return null;
}
var qo = [];
function lu() {
   for (var e = 0; e < qo.length; e++) qo[e]._workInProgressVersionPrimary = null;
   qo.length = 0;
}
var si = kt.ReactCurrentDispatcher,
   Ho = kt.ReactCurrentBatchConfig,
   Cn = 0,
   Y = null,
   ie = null,
   ue = null,
   Ri = !1,
   Br = !1,
   ls = 0,
   zv = 0;
function pe() {
   throw Error(A(321));
}
function au(e, t) {
   if (t === null) return !1;
   for (var n = 0; n < t.length && n < e.length; n++) if (!nt(e[n], t[n])) return !1;
   return !0;
}
function uu(e, t, n, r, s, i) {
   if (
      ((Cn = i),
      (Y = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (si.current = e === null || e.memoizedState === null ? Wv : Kv),
      (e = n(r, s)),
      Br)
   ) {
      i = 0;
      do {
         if (((Br = !1), (ls = 0), 25 <= i)) throw Error(A(301));
         (i += 1), (ue = ie = null), (t.updateQueue = null), (si.current = qv), (e = n(r, s));
      } while (Br);
   }
   if (((si.current = Fi), (t = ie !== null && ie.next !== null), (Cn = 0), (ue = ie = Y = null), (Ri = !1), t)) throw Error(A(300));
   return e;
}
function cu() {
   var e = ls !== 0;
   return (ls = 0), e;
}
function ot() {
   var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
   return ue === null ? (Y.memoizedState = ue = e) : (ue = ue.next = e), ue;
}
function qe() {
   if (ie === null) {
      var e = Y.alternate;
      e = e !== null ? e.memoizedState : null;
   } else e = ie.next;
   var t = ue === null ? Y.memoizedState : ue.next;
   if (t !== null) (ue = t), (ie = e);
   else {
      if (e === null) throw Error(A(310));
      (ie = e),
         (e = { memoizedState: ie.memoizedState, baseState: ie.baseState, baseQueue: ie.baseQueue, queue: ie.queue, next: null }),
         ue === null ? (Y.memoizedState = ue = e) : (ue = ue.next = e);
   }
   return ue;
}
function as(e, t) {
   return typeof t == 'function' ? t(e) : t;
}
function Go(e) {
   var t = qe(),
      n = t.queue;
   if (n === null) throw Error(A(311));
   n.lastRenderedReducer = e;
   var r = ie,
      s = r.baseQueue,
      i = n.pending;
   if (i !== null) {
      if (s !== null) {
         var o = s.next;
         (s.next = i.next), (i.next = o);
      }
      (r.baseQueue = s = i), (n.pending = null);
   }
   if (s !== null) {
      (i = s.next), (r = r.baseState);
      var l = (o = null),
         a = null,
         u = i;
      do {
         var c = u.lane;
         if ((Cn & c) === c)
            a !== null &&
               (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
               (r = u.hasEagerState ? u.eagerState : e(r, u.action));
         else {
            var f = { lane: c, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
            a === null ? ((l = a = f), (o = r)) : (a = a.next = f), (Y.lanes |= c), (Pn |= c);
         }
         u = u.next;
      } while (u !== null && u !== i);
      a === null ? (o = r) : (a.next = l),
         nt(r, t.memoizedState) || (ke = !0),
         (t.memoizedState = r),
         (t.baseState = o),
         (t.baseQueue = a),
         (n.lastRenderedState = r);
   }
   if (((e = n.interleaved), e !== null)) {
      s = e;
      do (i = s.lane), (Y.lanes |= i), (Pn |= i), (s = s.next);
      while (s !== e);
   } else s === null && (n.lanes = 0);
   return [t.memoizedState, n.dispatch];
}
function Yo(e) {
   var t = qe(),
      n = t.queue;
   if (n === null) throw Error(A(311));
   n.lastRenderedReducer = e;
   var r = n.dispatch,
      s = n.pending,
      i = t.memoizedState;
   if (s !== null) {
      n.pending = null;
      var o = (s = s.next);
      do (i = e(i, o.action)), (o = o.next);
      while (o !== s);
      nt(i, t.memoizedState) || (ke = !0), (t.memoizedState = i), t.baseQueue === null && (t.baseState = i), (n.lastRenderedState = i);
   }
   return [i, r];
}
function np() {}
function rp(e, t) {
   var n = Y,
      r = qe(),
      s = t(),
      i = !nt(r.memoizedState, s);
   if (
      (i && ((r.memoizedState = s), (ke = !0)),
      (r = r.queue),
      fu(op.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (ue !== null && ue.memoizedState.tag & 1))
   ) {
      if (((n.flags |= 2048), us(9, ip.bind(null, n, r, s, t), void 0, null), ce === null)) throw Error(A(349));
      Cn & 30 || sp(n, t, s);
   }
   return s;
}
function sp(e, t, n) {
   (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Y.updateQueue),
      t === null
         ? ((t = { lastEffect: null, stores: null }), (Y.updateQueue = t), (t.stores = [e]))
         : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ip(e, t, n, r) {
   (t.value = n), (t.getSnapshot = r), lp(t) && ap(e);
}
function op(e, t, n) {
   return n(function () {
      lp(t) && ap(e);
   });
}
function lp(e) {
   var t = e.getSnapshot;
   e = e.value;
   try {
      var n = t();
      return !nt(e, n);
   } catch {
      return !0;
   }
}
function ap(e) {
   var t = Ct(e, 1);
   t !== null && tt(t, e, 1, -1);
}
function zc(e) {
   var t = ot();
   return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: as, lastRenderedState: e }),
      (t.queue = e),
      (e = e.dispatch = Qv.bind(null, Y, e)),
      [t.memoizedState, e]
   );
}
function us(e, t, n, r) {
   return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Y.updateQueue),
      t === null
         ? ((t = { lastEffect: null, stores: null }), (Y.updateQueue = t), (t.lastEffect = e.next = e))
         : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
   );
}
function up() {
   return qe().memoizedState;
}
function ii(e, t, n, r) {
   var s = ot();
   (Y.flags |= e), (s.memoizedState = us(1 | t, n, void 0, r === void 0 ? null : r));
}
function so(e, t, n, r) {
   var s = qe();
   r = r === void 0 ? null : r;
   var i = void 0;
   if (ie !== null) {
      var o = ie.memoizedState;
      if (((i = o.destroy), r !== null && au(r, o.deps))) {
         s.memoizedState = us(t, n, i, r);
         return;
      }
   }
   (Y.flags |= e), (s.memoizedState = us(1 | t, n, i, r));
}
function Uc(e, t) {
   return ii(8390656, 8, e, t);
}
function fu(e, t) {
   return so(2048, 8, e, t);
}
function cp(e, t) {
   return so(4, 2, e, t);
}
function fp(e, t) {
   return so(4, 4, e, t);
}
function dp(e, t) {
   if (typeof t == 'function')
      return (
         (e = e()),
         t(e),
         function () {
            t(null);
         }
      );
   if (t != null)
      return (
         (e = e()),
         (t.current = e),
         function () {
            t.current = null;
         }
      );
}
function hp(e, t, n) {
   return (n = n != null ? n.concat([e]) : null), so(4, 4, dp.bind(null, t, e), n);
}
function du() {}
function pp(e, t) {
   var n = qe();
   t = t === void 0 ? null : t;
   var r = n.memoizedState;
   return r !== null && t !== null && au(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function mp(e, t) {
   var n = qe();
   t = t === void 0 ? null : t;
   var r = n.memoizedState;
   return r !== null && t !== null && au(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function yp(e, t, n) {
   return Cn & 21
      ? (nt(n, t) || ((n = xh()), (Y.lanes |= n), (Pn |= n), (e.baseState = !0)), t)
      : (e.baseState && ((e.baseState = !1), (ke = !0)), (e.memoizedState = n));
}
function Uv(e, t) {
   var n = V;
   (V = n !== 0 && 4 > n ? n : 4), e(!0);
   var r = Ho.transition;
   Ho.transition = {};
   try {
      e(!1), t();
   } finally {
      (V = n), (Ho.transition = r);
   }
}
function gp() {
   return qe().memoizedState;
}
function $v(e, t, n) {
   var r = Qt(e);
   if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), vp(e))) xp(t, n);
   else if (((n = Gh(e, t, n, r)), n !== null)) {
      var s = Se();
      tt(n, e, r, s), wp(n, t, r);
   }
}
function Qv(e, t, n) {
   var r = Qt(e),
      s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
   if (vp(e)) xp(t, s);
   else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
         try {
            var o = t.lastRenderedState,
               l = i(o, n);
            if (((s.hasEagerState = !0), (s.eagerState = l), nt(l, o))) {
               var a = t.interleaved;
               a === null ? ((s.next = s), ru(t)) : ((s.next = a.next), (a.next = s)), (t.interleaved = s);
               return;
            }
         } catch {
         } finally {
         }
      (n = Gh(e, t, s, r)), n !== null && ((s = Se()), tt(n, e, r, s), wp(n, t, r));
   }
}
function vp(e) {
   var t = e.alternate;
   return e === Y || (t !== null && t === Y);
}
function xp(e, t) {
   Br = Ri = !0;
   var n = e.pending;
   n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function wp(e, t, n) {
   if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), $a(e, n);
   }
}
var Fi = {
      readContext: Ke,
      useCallback: pe,
      useContext: pe,
      useEffect: pe,
      useImperativeHandle: pe,
      useInsertionEffect: pe,
      useLayoutEffect: pe,
      useMemo: pe,
      useReducer: pe,
      useRef: pe,
      useState: pe,
      useDebugValue: pe,
      useDeferredValue: pe,
      useTransition: pe,
      useMutableSource: pe,
      useSyncExternalStore: pe,
      useId: pe,
      unstable_isNewReconciler: !1,
   },
   Wv = {
      readContext: Ke,
      useCallback: function (e, t) {
         return (ot().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Ke,
      useEffect: Uc,
      useImperativeHandle: function (e, t, n) {
         return (n = n != null ? n.concat([e]) : null), ii(4194308, 4, dp.bind(null, t, e), n);
      },
      useLayoutEffect: function (e, t) {
         return ii(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
         return ii(4, 2, e, t);
      },
      useMemo: function (e, t) {
         var n = ot();
         return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
      },
      useReducer: function (e, t, n) {
         var r = ot();
         return (
            (t = n !== void 0 ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
            (r.queue = e),
            (e = e.dispatch = $v.bind(null, Y, e)),
            [r.memoizedState, e]
         );
      },
      useRef: function (e) {
         var t = ot();
         return (e = { current: e }), (t.memoizedState = e);
      },
      useState: zc,
      useDebugValue: du,
      useDeferredValue: function (e) {
         return (ot().memoizedState = e);
      },
      useTransition: function () {
         var e = zc(!1),
            t = e[0];
         return (e = Uv.bind(null, e[1])), (ot().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
         var r = Y,
            s = ot();
         if ($) {
            if (n === void 0) throw Error(A(407));
            n = n();
         } else {
            if (((n = t()), ce === null)) throw Error(A(349));
            Cn & 30 || sp(r, t, n);
         }
         s.memoizedState = n;
         var i = { value: n, getSnapshot: t };
         return (s.queue = i), Uc(op.bind(null, r, i, e), [e]), (r.flags |= 2048), us(9, ip.bind(null, r, i, n, t), void 0, null), n;
      },
      useId: function () {
         var e = ot(),
            t = ce.identifierPrefix;
         if ($) {
            var n = mt,
               r = pt;
            (n = (r & ~(1 << (32 - et(r) - 1))).toString(32) + n),
               (t = ':' + t + 'R' + n),
               (n = ls++),
               0 < n && (t += 'H' + n.toString(32)),
               (t += ':');
         } else (n = zv++), (t = ':' + t + 'r' + n.toString(32) + ':');
         return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
   },
   Kv = {
      readContext: Ke,
      useCallback: pp,
      useContext: Ke,
      useEffect: fu,
      useImperativeHandle: hp,
      useInsertionEffect: cp,
      useLayoutEffect: fp,
      useMemo: mp,
      useReducer: Go,
      useRef: up,
      useState: function () {
         return Go(as);
      },
      useDebugValue: du,
      useDeferredValue: function (e) {
         var t = qe();
         return yp(t, ie.memoizedState, e);
      },
      useTransition: function () {
         var e = Go(as)[0],
            t = qe().memoizedState;
         return [e, t];
      },
      useMutableSource: np,
      useSyncExternalStore: rp,
      useId: gp,
      unstable_isNewReconciler: !1,
   },
   qv = {
      readContext: Ke,
      useCallback: pp,
      useContext: Ke,
      useEffect: fu,
      useImperativeHandle: hp,
      useInsertionEffect: cp,
      useLayoutEffect: fp,
      useMemo: mp,
      useReducer: Yo,
      useRef: up,
      useState: function () {
         return Yo(as);
      },
      useDebugValue: du,
      useDeferredValue: function (e) {
         var t = qe();
         return ie === null ? (t.memoizedState = e) : yp(t, ie.memoizedState, e);
      },
      useTransition: function () {
         var e = Yo(as)[0],
            t = qe().memoizedState;
         return [e, t];
      },
      useMutableSource: np,
      useSyncExternalStore: rp,
      useId: gp,
      unstable_isNewReconciler: !1,
   };
function ir(e, t) {
   try {
      var n = '',
         r = t;
      do (n += Sg(r)), (r = r.return);
      while (r);
      var s = n;
   } catch (i) {
      s =
         `
Error generating stack: ` +
         i.message +
         `
` +
         i.stack;
   }
   return { value: e, source: t, stack: s, digest: null };
}
function Xo(e, t, n) {
   return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Hl(e, t) {
   try {
      console.error(t.value);
   } catch (n) {
      setTimeout(function () {
         throw n;
      });
   }
}
var Hv = typeof WeakMap == 'function' ? WeakMap : Map;
function Sp(e, t, n) {
   (n = gt(-1, n)), (n.tag = 3), (n.payload = { element: null });
   var r = t.value;
   return (
      (n.callback = function () {
         Mi || ((Mi = !0), (sa = r)), Hl(e, t);
      }),
      n
   );
}
function Cp(e, t, n) {
   (n = gt(-1, n)), (n.tag = 3);
   var r = e.type.getDerivedStateFromError;
   if (typeof r == 'function') {
      var s = t.value;
      (n.payload = function () {
         return r(s);
      }),
         (n.callback = function () {
            Hl(e, t);
         });
   }
   var i = e.stateNode;
   return (
      i !== null &&
         typeof i.componentDidCatch == 'function' &&
         (n.callback = function () {
            Hl(e, t), typeof r != 'function' && ($t === null ? ($t = new Set([this])) : $t.add(this));
            var o = t.stack;
            this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' });
         }),
      n
   );
}
function $c(e, t, n) {
   var r = e.pingCache;
   if (r === null) {
      r = e.pingCache = new Hv();
      var s = new Set();
      r.set(t, s);
   } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
   s.has(n) || (s.add(n), (e = a0.bind(null, e, t, n)), t.then(e, e));
}
function Qc(e) {
   do {
      var t;
      if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
      e = e.return;
   } while (e !== null);
   return null;
}
function Wc(e, t, n, r, s) {
   return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = s), e)
      : (e === t
           ? (e.flags |= 65536)
           : ((e.flags |= 128),
             (n.flags |= 131072),
             (n.flags &= -52805),
             n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = gt(-1, 1)), (t.tag = 2), Ut(n, t, 1))),
             (n.lanes |= 1)),
        e);
}
var Gv = kt.ReactCurrentOwner,
   ke = !1;
function we(e, t, n, r) {
   t.child = e === null ? ep(t, null, n, r) : rr(t, e.child, n, r);
}
function Kc(e, t, n, r, s) {
   n = n.render;
   var i = t.ref;
   return (
      Xn(t, s),
      (r = uu(e, t, n, r, i, s)),
      (n = cu()),
      e !== null && !ke
         ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~s), Pt(e, t, s))
         : ($ && n && Xa(t), (t.flags |= 1), we(e, t, r, s), t.child)
   );
}
function qc(e, t, n, r, s) {
   if (e === null) {
      var i = n.type;
      return typeof i == 'function' && !wu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
         ? ((t.tag = 15), (t.type = i), Pp(e, t, i, r, s))
         : ((e = ui(n.type, null, r, t, t.mode, s)), (e.ref = t.ref), (e.return = t), (t.child = e));
   }
   if (((i = e.child), !(e.lanes & s))) {
      var o = i.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : ts), n(o, r) && e.ref === t.ref)) return Pt(e, t, s);
   }
   return (t.flags |= 1), (e = Wt(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Pp(e, t, n, r, s) {
   if (e !== null) {
      var i = e.memoizedProps;
      if (ts(i, r) && e.ref === t.ref)
         if (((ke = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0)) e.flags & 131072 && (ke = !0);
         else return (t.lanes = e.lanes), Pt(e, t, s);
   }
   return Gl(e, t, n, r, s);
}
function jp(e, t, n) {
   var r = t.pendingProps,
      s = r.children,
      i = e !== null ? e.memoizedState : null;
   if (r.mode === 'hidden')
      if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), _(Un, De), (De |= n);
      else {
         if (!(n & 1073741824))
            return (
               (e = i !== null ? i.baseLanes | n : n),
               (t.lanes = t.childLanes = 1073741824),
               (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
               (t.updateQueue = null),
               _(Un, De),
               (De |= e),
               null
            );
         (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = i !== null ? i.baseLanes : n), _(Un, De), (De |= r);
      }
   else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), _(Un, De), (De |= r);
   return we(e, t, s, n), t.child;
}
function Ep(e, t) {
   var n = t.ref;
   ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Gl(e, t, n, r, s) {
   var i = Te(n) ? wn : ge.current;
   return (
      (i = tr(t, i)),
      Xn(t, s),
      (n = uu(e, t, n, r, i, s)),
      (r = cu()),
      e !== null && !ke
         ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~s), Pt(e, t, s))
         : ($ && r && Xa(t), (t.flags |= 1), we(e, t, n, s), t.child)
   );
}
function Hc(e, t, n, r, s) {
   if (Te(n)) {
      var i = !0;
      Pi(t);
   } else i = !1;
   if ((Xn(t, s), t.stateNode === null)) oi(e, t), Jh(t, n, r), ql(t, n, r, s), (r = !0);
   else if (e === null) {
      var o = t.stateNode,
         l = t.memoizedProps;
      o.props = l;
      var a = o.context,
         u = n.contextType;
      typeof u == 'object' && u !== null ? (u = Ke(u)) : ((u = Te(n) ? wn : ge.current), (u = tr(t, u)));
      var c = n.getDerivedStateFromProps,
         f = typeof c == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
      f ||
         (typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') ||
         ((l !== r || a !== u) && _c(t, o, r, u)),
         (Rt = !1);
      var h = t.memoizedState;
      (o.state = h),
         Ti(t, r, o, s),
         (a = t.memoizedState),
         l !== r || h !== a || Ae.current || Rt
            ? (typeof c == 'function' && (Kl(t, n, c, r), (a = t.memoizedState)),
              (l = Rt || Vc(t, n, l, r, h, a, u))
                 ? (f ||
                      (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
                      (typeof o.componentWillMount == 'function' && o.componentWillMount(),
                      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount()),
                   typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
                 : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = a)),
              (o.props = r),
              (o.state = a),
              (o.context = u),
              (r = l))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
   } else {
      (o = t.stateNode),
         Yh(e, t),
         (l = t.memoizedProps),
         (u = t.type === t.elementType ? l : Xe(t.type, l)),
         (o.props = u),
         (f = t.pendingProps),
         (h = o.context),
         (a = n.contextType),
         typeof a == 'object' && a !== null ? (a = Ke(a)) : ((a = Te(n) ? wn : ge.current), (a = tr(t, a)));
      var m = n.getDerivedStateFromProps;
      (c = typeof m == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
         (typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') ||
         ((l !== f || h !== a) && _c(t, o, r, a)),
         (Rt = !1),
         (h = t.memoizedState),
         (o.state = h),
         Ti(t, r, o, s);
      var v = t.memoizedState;
      l !== f || h !== v || Ae.current || Rt
         ? (typeof m == 'function' && (Kl(t, n, m, r), (v = t.memoizedState)),
           (u = Rt || Vc(t, n, u, r, h, v, a) || !1)
              ? (c ||
                   (typeof o.UNSAFE_componentWillUpdate != 'function' && typeof o.componentWillUpdate != 'function') ||
                   (typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(r, v, a),
                   typeof o.UNSAFE_componentWillUpdate == 'function' && o.UNSAFE_componentWillUpdate(r, v, a)),
                typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
              : (typeof o.componentDidUpdate != 'function' || (l === e.memoizedProps && h === e.memoizedState) || (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate != 'function' || (l === e.memoizedProps && h === e.memoizedState) || (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = v)),
           (o.props = r),
           (o.state = v),
           (o.context = a),
           (r = u))
         : (typeof o.componentDidUpdate != 'function' || (l === e.memoizedProps && h === e.memoizedState) || (t.flags |= 4),
           typeof o.getSnapshotBeforeUpdate != 'function' || (l === e.memoizedProps && h === e.memoizedState) || (t.flags |= 1024),
           (r = !1));
   }
   return Yl(e, t, n, r, i, s);
}
function Yl(e, t, n, r, s, i) {
   Ep(e, t);
   var o = (t.flags & 128) !== 0;
   if (!r && !o) return s && Mc(t, n, !1), Pt(e, t, i);
   (r = t.stateNode), (Gv.current = t);
   var l = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
   return (
      (t.flags |= 1),
      e !== null && o ? ((t.child = rr(t, e.child, null, i)), (t.child = rr(t, null, l, i))) : we(e, t, l, i),
      (t.memoizedState = r.state),
      s && Mc(t, n, !0),
      t.child
   );
}
function kp(e) {
   var t = e.stateNode;
   t.pendingContext ? Dc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Dc(e, t.context, !1), iu(e, t.containerInfo);
}
function Gc(e, t, n, r, s) {
   return nr(), Za(s), (t.flags |= 256), we(e, t, n, r), t.child;
}
var Xl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Jl(e) {
   return { baseLanes: e, cachePool: null, transitions: null };
}
function Ap(e, t, n) {
   var r = t.pendingProps,
      s = q.current,
      i = !1,
      o = (t.flags & 128) !== 0,
      l;
   if (
      ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
      l ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (s |= 1),
      _(q, s & 1),
      e === null)
   )
      return (
         Ql(t),
         (e = t.memoizedState),
         e !== null && ((e = e.dehydrated), e !== null)
            ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
            : ((o = r.children),
              (e = r.fallback),
              i
                 ? ((r = t.mode),
                   (i = t.child),
                   (o = { mode: 'hidden', children: o }),
                   !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = o)) : (i = lo(o, r, 0, null)),
                   (e = vn(e, r, n, null)),
                   (i.return = t),
                   (e.return = t),
                   (i.sibling = e),
                   (t.child = i),
                   (t.child.memoizedState = Jl(n)),
                   (t.memoizedState = Xl),
                   e)
                 : hu(t, o))
      );
   if (((s = e.memoizedState), s !== null && ((l = s.dehydrated), l !== null))) return Yv(e, t, o, r, l, s, n);
   if (i) {
      (i = r.fallback), (o = t.mode), (s = e.child), (l = s.sibling);
      var a = { mode: 'hidden', children: r.children };
      return (
         !(o & 1) && t.child !== s
            ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
            : ((r = Wt(s, a)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
         l !== null ? (i = Wt(l, i)) : ((i = vn(i, o, n, null)), (i.flags |= 2)),
         (i.return = t),
         (r.return = t),
         (r.sibling = i),
         (t.child = r),
         (r = i),
         (i = t.child),
         (o = e.child.memoizedState),
         (o = o === null ? Jl(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
         (i.memoizedState = o),
         (i.childLanes = e.childLanes & ~n),
         (t.memoizedState = Xl),
         r
      );
   }
   return (
      (i = e.child),
      (e = i.sibling),
      (r = Wt(i, { mode: 'visible', children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
   );
}
function hu(e, t) {
   return (t = lo({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Qs(e, t, n, r) {
   return r !== null && Za(r), rr(t, e.child, null, n), (e = hu(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function Yv(e, t, n, r, s, i, o) {
   if (n)
      return t.flags & 256
         ? ((t.flags &= -257), (r = Xo(Error(A(422)))), Qs(e, t, o, r))
         : t.memoizedState !== null
         ? ((t.child = e.child), (t.flags |= 128), null)
         : ((i = r.fallback),
           (s = t.mode),
           (r = lo({ mode: 'visible', children: r.children }, s, 0, null)),
           (i = vn(i, s, o, null)),
           (i.flags |= 2),
           (r.return = t),
           (i.return = t),
           (r.sibling = i),
           (t.child = r),
           t.mode & 1 && rr(t, e.child, null, o),
           (t.child.memoizedState = Jl(o)),
           (t.memoizedState = Xl),
           i);
   if (!(t.mode & 1)) return Qs(e, t, o, null);
   if (s.data === '$!') {
      if (((r = s.nextSibling && s.nextSibling.dataset), r)) var l = r.dgst;
      return (r = l), (i = Error(A(419))), (r = Xo(i, r, void 0)), Qs(e, t, o, r);
   }
   if (((l = (o & e.childLanes) !== 0), ke || l)) {
      if (((r = ce), r !== null)) {
         switch (o & -o) {
            case 4:
               s = 2;
               break;
            case 16:
               s = 8;
               break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
               s = 32;
               break;
            case 536870912:
               s = 268435456;
               break;
            default:
               s = 0;
         }
         (s = s & (r.suspendedLanes | o) ? 0 : s), s !== 0 && s !== i.retryLane && ((i.retryLane = s), Ct(e, s), tt(r, e, s, -1));
      }
      return xu(), (r = Xo(Error(A(421)))), Qs(e, t, o, r);
   }
   return s.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = u0.bind(null, e)), (s._reactRetry = t), null)
      : ((e = i.treeContext),
        (Me = zt(s.nextSibling)),
        (Le = t),
        ($ = !0),
        (Ze = null),
        e !== null && ((Ue[$e++] = pt), (Ue[$e++] = mt), (Ue[$e++] = Sn), (pt = e.id), (mt = e.overflow), (Sn = t)),
        (t = hu(t, r.children)),
        (t.flags |= 4096),
        t);
}
function Yc(e, t, n) {
   e.lanes |= t;
   var r = e.alternate;
   r !== null && (r.lanes |= t), Wl(e.return, t, n);
}
function Jo(e, t, n, r, s) {
   var i = e.memoizedState;
   i === null
      ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s })
      : ((i.isBackwards = t), (i.rendering = null), (i.renderingStartTime = 0), (i.last = r), (i.tail = n), (i.tailMode = s));
}
function Tp(e, t, n) {
   var r = t.pendingProps,
      s = r.revealOrder,
      i = r.tail;
   if ((we(e, t, r.children, n), (r = q.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
   else {
      if (e !== null && e.flags & 128)
         e: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && Yc(e, n, t);
            else if (e.tag === 19) Yc(e, n, t);
            else if (e.child !== null) {
               (e.child.return = e), (e = e.child);
               continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
               if (e.return === null || e.return === t) break e;
               e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
         }
      r &= 1;
   }
   if ((_(q, r), !(t.mode & 1))) t.memoizedState = null;
   else
      switch (s) {
         case 'forwards':
            for (n = t.child, s = null; n !== null; ) (e = n.alternate), e !== null && Ni(e) === null && (s = n), (n = n.sibling);
            (n = s), n === null ? ((s = t.child), (t.child = null)) : ((s = n.sibling), (n.sibling = null)), Jo(t, !1, s, n, i);
            break;
         case 'backwards':
            for (n = null, s = t.child, t.child = null; s !== null; ) {
               if (((e = s.alternate), e !== null && Ni(e) === null)) {
                  t.child = s;
                  break;
               }
               (e = s.sibling), (s.sibling = n), (n = s), (s = e);
            }
            Jo(t, !0, n, null, i);
            break;
         case 'together':
            Jo(t, !1, null, null, void 0);
            break;
         default:
            t.memoizedState = null;
      }
   return t.child;
}
function oi(e, t) {
   !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Pt(e, t, n) {
   if ((e !== null && (t.dependencies = e.dependencies), (Pn |= t.lanes), !(n & t.childLanes))) return null;
   if (e !== null && t.child !== e.child) throw Error(A(153));
   if (t.child !== null) {
      for (e = t.child, n = Wt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
         (e = e.sibling), (n = n.sibling = Wt(e, e.pendingProps)), (n.return = t);
      n.sibling = null;
   }
   return t.child;
}
function Xv(e, t, n) {
   switch (t.tag) {
      case 3:
         kp(t), nr();
         break;
      case 5:
         tp(t);
         break;
      case 1:
         Te(t.type) && Pi(t);
         break;
      case 4:
         iu(t, t.stateNode.containerInfo);
         break;
      case 10:
         var r = t.type._context,
            s = t.memoizedProps.value;
         _(ki, r._currentValue), (r._currentValue = s);
         break;
      case 13:
         if (((r = t.memoizedState), r !== null))
            return r.dehydrated !== null
               ? (_(q, q.current & 1), (t.flags |= 128), null)
               : n & t.child.childLanes
               ? Ap(e, t, n)
               : (_(q, q.current & 1), (e = Pt(e, t, n)), e !== null ? e.sibling : null);
         _(q, q.current & 1);
         break;
      case 19:
         if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
            if (r) return Tp(e, t, n);
            t.flags |= 128;
         }
         if (((s = t.memoizedState), s !== null && ((s.rendering = null), (s.tail = null), (s.lastEffect = null)), _(q, q.current), r))
            break;
         return null;
      case 22:
      case 23:
         return (t.lanes = 0), jp(e, t, n);
   }
   return Pt(e, t, n);
}
var Np, Zl, Rp, Fp;
Np = function (e, t) {
   for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
         (n.child.return = n), (n = n.child);
         continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
         if (n.return === null || n.return === t) return;
         n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
   }
};
Zl = function () {};
Rp = function (e, t, n, r) {
   var s = e.memoizedProps;
   if (s !== r) {
      (e = t.stateNode), pn(ct.current);
      var i = null;
      switch (n) {
         case 'input':
            (s = Sl(e, s)), (r = Sl(e, r)), (i = []);
            break;
         case 'select':
            (s = X({}, s, { value: void 0 })), (r = X({}, r, { value: void 0 })), (i = []);
            break;
         case 'textarea':
            (s = jl(e, s)), (r = jl(e, r)), (i = []);
            break;
         default:
            typeof s.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Si);
      }
      kl(n, r);
      var o;
      n = null;
      for (u in s)
         if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
            if (u === 'style') {
               var l = s[u];
               for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
            } else
               u !== 'dangerouslySetInnerHTML' &&
                  u !== 'children' &&
                  u !== 'suppressContentEditableWarning' &&
                  u !== 'suppressHydrationWarning' &&
                  u !== 'autoFocus' &&
                  (Hr.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
      for (u in r) {
         var a = r[u];
         if (((l = s != null ? s[u] : void 0), r.hasOwnProperty(u) && a !== l && (a != null || l != null)))
            if (u === 'style')
               if (l) {
                  for (o in l) !l.hasOwnProperty(o) || (a && a.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ''));
                  for (o in a) a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}), (n[o] = a[o]));
               } else n || (i || (i = []), i.push(u, n)), (n = a);
            else
               u === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), (l = l ? l.__html : void 0), a != null && l !== a && (i = i || []).push(u, a))
                  : u === 'children'
                  ? (typeof a != 'string' && typeof a != 'number') || (i = i || []).push(u, '' + a)
                  : u !== 'suppressContentEditableWarning' &&
                    u !== 'suppressHydrationWarning' &&
                    (Hr.hasOwnProperty(u)
                       ? (a != null && u === 'onScroll' && z('scroll', e), i || l === a || (i = []))
                       : (i = i || []).push(u, a));
      }
      n && (i = i || []).push('style', n);
      var u = i;
      (t.updateQueue = u) && (t.flags |= 4);
   }
};
Fp = function (e, t, n, r) {
   n !== r && (t.flags |= 4);
};
function jr(e, t) {
   if (!$)
      switch (e.tailMode) {
         case 'hidden':
            t = e.tail;
            for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
         case 'collapsed':
            n = e.tail;
            for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
            r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
      }
}
function me(e) {
   var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
   if (t)
      for (var s = e.child; s !== null; )
         (n |= s.lanes | s.childLanes), (r |= s.subtreeFlags & 14680064), (r |= s.flags & 14680064), (s.return = e), (s = s.sibling);
   else
      for (s = e.child; s !== null; ) (n |= s.lanes | s.childLanes), (r |= s.subtreeFlags), (r |= s.flags), (s.return = e), (s = s.sibling);
   return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Jv(e, t, n) {
   var r = t.pendingProps;
   switch ((Ja(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
         return me(t), null;
      case 1:
         return Te(t.type) && Ci(), me(t), null;
      case 3:
         return (
            (r = t.stateNode),
            sr(),
            U(Ae),
            U(ge),
            lu(),
            r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
            (e === null || e.child === null) &&
               (Us(t)
                  ? (t.flags |= 4)
                  : e === null ||
                    (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                    ((t.flags |= 1024), Ze !== null && (la(Ze), (Ze = null)))),
            Zl(e, t),
            me(t),
            null
         );
      case 5:
         ou(t);
         var s = pn(os.current);
         if (((n = t.type), e !== null && t.stateNode != null))
            Rp(e, t, n, r, s), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
         else {
            if (!r) {
               if (t.stateNode === null) throw Error(A(166));
               return me(t), null;
            }
            if (((e = pn(ct.current)), Us(t))) {
               (r = t.stateNode), (n = t.type);
               var i = t.memoizedProps;
               switch (((r[at] = t), (r[ss] = i), (e = (t.mode & 1) !== 0), n)) {
                  case 'dialog':
                     z('cancel', r), z('close', r);
                     break;
                  case 'iframe':
                  case 'object':
                  case 'embed':
                     z('load', r);
                     break;
                  case 'video':
                  case 'audio':
                     for (s = 0; s < Fr.length; s++) z(Fr[s], r);
                     break;
                  case 'source':
                     z('error', r);
                     break;
                  case 'img':
                  case 'image':
                  case 'link':
                     z('error', r), z('load', r);
                     break;
                  case 'details':
                     z('toggle', r);
                     break;
                  case 'input':
                     ic(r, i), z('invalid', r);
                     break;
                  case 'select':
                     (r._wrapperState = { wasMultiple: !!i.multiple }), z('invalid', r);
                     break;
                  case 'textarea':
                     lc(r, i), z('invalid', r);
               }
               kl(n, i), (s = null);
               for (var o in i)
                  if (i.hasOwnProperty(o)) {
                     var l = i[o];
                     o === 'children'
                        ? typeof l == 'string'
                           ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && zs(r.textContent, l, e), (s = ['children', l]))
                           : typeof l == 'number' &&
                             r.textContent !== '' + l &&
                             (i.suppressHydrationWarning !== !0 && zs(r.textContent, l, e), (s = ['children', '' + l]))
                        : Hr.hasOwnProperty(o) && l != null && o === 'onScroll' && z('scroll', r);
                  }
               switch (n) {
                  case 'input':
                     Ms(r), oc(r, i, !0);
                     break;
                  case 'textarea':
                     Ms(r), ac(r);
                     break;
                  case 'select':
                  case 'option':
                     break;
                  default:
                     typeof i.onClick == 'function' && (r.onclick = Si);
               }
               (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
            } else {
               (o = s.nodeType === 9 ? s : s.ownerDocument),
                  e === 'http://www.w3.org/1999/xhtml' && (e = sh(n)),
                  e === 'http://www.w3.org/1999/xhtml'
                     ? n === 'script'
                        ? ((e = o.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
                        : typeof r.is == 'string'
                        ? (e = o.createElement(n, { is: r.is }))
                        : ((e = o.createElement(n)),
                          n === 'select' && ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
                     : (e = o.createElementNS(e, n)),
                  (e[at] = t),
                  (e[ss] = r),
                  Np(e, t, !1, !1),
                  (t.stateNode = e);
               e: {
                  switch (((o = Al(n, r)), n)) {
                     case 'dialog':
                        z('cancel', e), z('close', e), (s = r);
                        break;
                     case 'iframe':
                     case 'object':
                     case 'embed':
                        z('load', e), (s = r);
                        break;
                     case 'video':
                     case 'audio':
                        for (s = 0; s < Fr.length; s++) z(Fr[s], e);
                        s = r;
                        break;
                     case 'source':
                        z('error', e), (s = r);
                        break;
                     case 'img':
                     case 'image':
                     case 'link':
                        z('error', e), z('load', e), (s = r);
                        break;
                     case 'details':
                        z('toggle', e), (s = r);
                        break;
                     case 'input':
                        ic(e, r), (s = Sl(e, r)), z('invalid', e);
                        break;
                     case 'option':
                        s = r;
                        break;
                     case 'select':
                        (e._wrapperState = { wasMultiple: !!r.multiple }), (s = X({}, r, { value: void 0 })), z('invalid', e);
                        break;
                     case 'textarea':
                        lc(e, r), (s = jl(e, r)), z('invalid', e);
                        break;
                     default:
                        s = r;
                  }
                  kl(n, s), (l = s);
                  for (i in l)
                     if (l.hasOwnProperty(i)) {
                        var a = l[i];
                        i === 'style'
                           ? lh(e, a)
                           : i === 'dangerouslySetInnerHTML'
                           ? ((a = a ? a.__html : void 0), a != null && ih(e, a))
                           : i === 'children'
                           ? typeof a == 'string'
                              ? (n !== 'textarea' || a !== '') && Gr(e, a)
                              : typeof a == 'number' && Gr(e, '' + a)
                           : i !== 'suppressContentEditableWarning' &&
                             i !== 'suppressHydrationWarning' &&
                             i !== 'autoFocus' &&
                             (Hr.hasOwnProperty(i) ? a != null && i === 'onScroll' && z('scroll', e) : a != null && Ia(e, i, a, o));
                     }
                  switch (n) {
                     case 'input':
                        Ms(e), oc(e, r, !1);
                        break;
                     case 'textarea':
                        Ms(e), ac(e);
                        break;
                     case 'option':
                        r.value != null && e.setAttribute('value', '' + Ht(r.value));
                        break;
                     case 'select':
                        (e.multiple = !!r.multiple),
                           (i = r.value),
                           i != null ? qn(e, !!r.multiple, i, !1) : r.defaultValue != null && qn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                     default:
                        typeof s.onClick == 'function' && (e.onclick = Si);
                  }
                  switch (n) {
                     case 'button':
                     case 'input':
                     case 'select':
                     case 'textarea':
                        r = !!r.autoFocus;
                        break e;
                     case 'img':
                        r = !0;
                        break e;
                     default:
                        r = !1;
                  }
               }
               r && (t.flags |= 4);
            }
            t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
         }
         return me(t), null;
      case 6:
         if (e && t.stateNode != null) Fp(e, t, e.memoizedProps, r);
         else {
            if (typeof r != 'string' && t.stateNode === null) throw Error(A(166));
            if (((n = pn(os.current)), pn(ct.current), Us(t))) {
               if (((r = t.stateNode), (n = t.memoizedProps), (r[at] = t), (i = r.nodeValue !== n) && ((e = Le), e !== null)))
                  switch (e.tag) {
                     case 3:
                        zs(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                     case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && zs(r.nodeValue, n, (e.mode & 1) !== 0);
                  }
               i && (t.flags |= 4);
            } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[at] = t), (t.stateNode = r);
         }
         return me(t), null;
      case 13:
         if ((U(q), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
            if ($ && Me !== null && t.mode & 1 && !(t.flags & 128)) Hh(), nr(), (t.flags |= 98560), (i = !1);
            else if (((i = Us(t)), r !== null && r.dehydrated !== null)) {
               if (e === null) {
                  if (!i) throw Error(A(318));
                  if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(A(317));
                  i[at] = t;
               } else nr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
               me(t), (i = !1);
            } else Ze !== null && (la(Ze), (Ze = null)), (i = !0);
            if (!i) return t.flags & 65536 ? t : null;
         }
         return t.flags & 128
            ? ((t.lanes = n), t)
            : ((r = r !== null),
              r !== (e !== null && e.memoizedState !== null) &&
                 r &&
                 ((t.child.flags |= 8192), t.mode & 1 && (e === null || q.current & 1 ? le === 0 && (le = 3) : xu())),
              t.updateQueue !== null && (t.flags |= 4),
              me(t),
              null);
      case 4:
         return sr(), Zl(e, t), e === null && ns(t.stateNode.containerInfo), me(t), null;
      case 10:
         return nu(t.type._context), me(t), null;
      case 17:
         return Te(t.type) && Ci(), me(t), null;
      case 19:
         if ((U(q), (i = t.memoizedState), i === null)) return me(t), null;
         if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
            if (r) jr(i, !1);
            else {
               if (le !== 0 || (e !== null && e.flags & 128))
                  for (e = t.child; e !== null; ) {
                     if (((o = Ni(e)), o !== null)) {
                        for (
                           t.flags |= 128,
                              jr(i, !1),
                              r = o.updateQueue,
                              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                              t.subtreeFlags = 0,
                              r = n,
                              n = t.child;
                           n !== null;

                        )
                           (i = n),
                              (e = r),
                              (i.flags &= 14680066),
                              (o = i.alternate),
                              o === null
                                 ? ((i.childLanes = 0),
                                   (i.lanes = e),
                                   (i.child = null),
                                   (i.subtreeFlags = 0),
                                   (i.memoizedProps = null),
                                   (i.memoizedState = null),
                                   (i.updateQueue = null),
                                   (i.dependencies = null),
                                   (i.stateNode = null))
                                 : ((i.childLanes = o.childLanes),
                                   (i.lanes = o.lanes),
                                   (i.child = o.child),
                                   (i.subtreeFlags = 0),
                                   (i.deletions = null),
                                   (i.memoizedProps = o.memoizedProps),
                                   (i.memoizedState = o.memoizedState),
                                   (i.updateQueue = o.updateQueue),
                                   (i.type = o.type),
                                   (e = o.dependencies),
                                   (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                              (n = n.sibling);
                        return _(q, (q.current & 1) | 2), t.child;
                     }
                     e = e.sibling;
                  }
               i.tail !== null && ne() > or && ((t.flags |= 128), (r = !0), jr(i, !1), (t.lanes = 4194304));
            }
         else {
            if (!r)
               if (((e = Ni(o)), e !== null)) {
                  if (
                     ((t.flags |= 128),
                     (r = !0),
                     (n = e.updateQueue),
                     n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                     jr(i, !0),
                     i.tail === null && i.tailMode === 'hidden' && !o.alternate && !$)
                  )
                     return me(t), null;
               } else
                  2 * ne() - i.renderingStartTime > or && n !== 1073741824 && ((t.flags |= 128), (r = !0), jr(i, !1), (t.lanes = 4194304));
            i.isBackwards
               ? ((o.sibling = t.child), (t.child = o))
               : ((n = i.last), n !== null ? (n.sibling = o) : (t.child = o), (i.last = o));
         }
         return i.tail !== null
            ? ((t = i.tail),
              (i.rendering = t),
              (i.tail = t.sibling),
              (i.renderingStartTime = ne()),
              (t.sibling = null),
              (n = q.current),
              _(q, r ? (n & 1) | 2 : n & 1),
              t)
            : (me(t), null);
      case 22:
      case 23:
         return (
            vu(),
            (r = t.memoizedState !== null),
            e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r && t.mode & 1 ? De & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t),
            null
         );
      case 24:
         return null;
      case 25:
         return null;
   }
   throw Error(A(156, t.tag));
}
function Zv(e, t) {
   switch ((Ja(t), t.tag)) {
      case 1:
         return Te(t.type) && Ci(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 3:
         return sr(), U(Ae), U(ge), lu(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
      case 5:
         return ou(t), null;
      case 13:
         if ((U(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
            if (t.alternate === null) throw Error(A(340));
            nr();
         }
         return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
         return U(q), null;
      case 4:
         return sr(), null;
      case 10:
         return nu(t.type._context), null;
      case 22:
      case 23:
         return vu(), null;
      case 24:
         return null;
      default:
         return null;
   }
}
var Ws = !1,
   ye = !1,
   e0 = typeof WeakSet == 'function' ? WeakSet : Set,
   N = null;
function zn(e, t) {
   var n = e.ref;
   if (n !== null)
      if (typeof n == 'function')
         try {
            n(null);
         } catch (r) {
            J(e, t, r);
         }
      else n.current = null;
}
function ea(e, t, n) {
   try {
      n();
   } catch (r) {
      J(e, t, r);
   }
}
var Xc = !1;
function t0(e, t) {
   if (((Il = vi), (e = Oh()), Ya(e))) {
      if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
         e: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
               n = r.anchorNode;
               var s = r.anchorOffset,
                  i = r.focusNode;
               r = r.focusOffset;
               try {
                  n.nodeType, i.nodeType;
               } catch {
                  n = null;
                  break e;
               }
               var o = 0,
                  l = -1,
                  a = -1,
                  u = 0,
                  c = 0,
                  f = e,
                  h = null;
               t: for (;;) {
                  for (
                     var m;
                     f !== n || (s !== 0 && f.nodeType !== 3) || (l = o + s),
                        f !== i || (r !== 0 && f.nodeType !== 3) || (a = o + r),
                        f.nodeType === 3 && (o += f.nodeValue.length),
                        (m = f.firstChild) !== null;

                  )
                     (h = f), (f = m);
                  for (;;) {
                     if (f === e) break t;
                     if ((h === n && ++u === s && (l = o), h === i && ++c === r && (a = o), (m = f.nextSibling) !== null)) break;
                     (f = h), (h = f.parentNode);
                  }
                  f = m;
               }
               n = l === -1 || a === -1 ? null : { start: l, end: a };
            } else n = null;
         }
      n = n || { start: 0, end: 0 };
   } else n = null;
   for (Vl = { focusedElem: e, selectionRange: n }, vi = !1, N = t; N !== null; )
      if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (N = e);
      else
         for (; N !== null; ) {
            t = N;
            try {
               var v = t.alternate;
               if (t.flags & 1024)
                  switch (t.tag) {
                     case 0:
                     case 11:
                     case 15:
                        break;
                     case 1:
                        if (v !== null) {
                           var x = v.memoizedProps,
                              C = v.memoizedState,
                              y = t.stateNode,
                              p = y.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Xe(t.type, x), C);
                           y.__reactInternalSnapshotBeforeUpdate = p;
                        }
                        break;
                     case 3:
                        var g = t.stateNode.containerInfo;
                        g.nodeType === 1 ? (g.textContent = '') : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                        break;
                     case 5:
                     case 6:
                     case 4:
                     case 17:
                        break;
                     default:
                        throw Error(A(163));
                  }
            } catch (S) {
               J(t, t.return, S);
            }
            if (((e = t.sibling), e !== null)) {
               (e.return = t.return), (N = e);
               break;
            }
            N = t.return;
         }
   return (v = Xc), (Xc = !1), v;
}
function zr(e, t, n) {
   var r = t.updateQueue;
   if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var s = (r = r.next);
      do {
         if ((s.tag & e) === e) {
            var i = s.destroy;
            (s.destroy = void 0), i !== void 0 && ea(t, n, i);
         }
         s = s.next;
      } while (s !== r);
   }
}
function io(e, t) {
   if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var n = (t = t.next);
      do {
         if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
         }
         n = n.next;
      } while (n !== t);
   }
}
function ta(e) {
   var t = e.ref;
   if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
         case 5:
            e = n;
            break;
         default:
            e = n;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
   }
}
function Dp(e) {
   var t = e.alternate;
   t !== null && ((e.alternate = null), Dp(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[at], delete t[ss], delete t[zl], delete t[Iv], delete t[Vv])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
}
function Mp(e) {
   return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Jc(e) {
   e: for (;;) {
      for (; e.sibling === null; ) {
         if (e.return === null || Mp(e.return)) return null;
         e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
         if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
         (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
   }
}
function na(e, t, n) {
   var r = e.tag;
   if (r === 5 || r === 6)
      (e = e.stateNode),
         t
            ? n.nodeType === 8
               ? n.parentNode.insertBefore(e, t)
               : n.insertBefore(e, t)
            : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = Si));
   else if (r !== 4 && ((e = e.child), e !== null)) for (na(e, t, n), e = e.sibling; e !== null; ) na(e, t, n), (e = e.sibling);
}
function ra(e, t, n) {
   var r = e.tag;
   if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
   else if (r !== 4 && ((e = e.child), e !== null)) for (ra(e, t, n), e = e.sibling; e !== null; ) ra(e, t, n), (e = e.sibling);
}
var fe = null,
   Je = !1;
function At(e, t, n) {
   for (n = n.child; n !== null; ) Lp(e, t, n), (n = n.sibling);
}
function Lp(e, t, n) {
   if (ut && typeof ut.onCommitFiberUnmount == 'function')
      try {
         ut.onCommitFiberUnmount(Xi, n);
      } catch {}
   switch (n.tag) {
      case 5:
         ye || zn(n, t);
      case 6:
         var r = fe,
            s = Je;
         (fe = null),
            At(e, t, n),
            (fe = r),
            (Je = s),
            fe !== null &&
               (Je
                  ? ((e = fe), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
                  : fe.removeChild(n.stateNode));
         break;
      case 18:
         fe !== null &&
            (Je
               ? ((e = fe), (n = n.stateNode), e.nodeType === 8 ? Wo(e.parentNode, n) : e.nodeType === 1 && Wo(e, n), Zr(e))
               : Wo(fe, n.stateNode));
         break;
      case 4:
         (r = fe), (s = Je), (fe = n.stateNode.containerInfo), (Je = !0), At(e, t, n), (fe = r), (Je = s);
         break;
      case 0:
      case 11:
      case 14:
      case 15:
         if (!ye && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
            s = r = r.next;
            do {
               var i = s,
                  o = i.destroy;
               (i = i.tag), o !== void 0 && (i & 2 || i & 4) && ea(n, t, o), (s = s.next);
            } while (s !== r);
         }
         At(e, t, n);
         break;
      case 1:
         if (!ye && (zn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
            try {
               (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
            } catch (l) {
               J(n, t, l);
            }
         At(e, t, n);
         break;
      case 21:
         At(e, t, n);
         break;
      case 22:
         n.mode & 1 ? ((ye = (r = ye) || n.memoizedState !== null), At(e, t, n), (ye = r)) : At(e, t, n);
         break;
      default:
         At(e, t, n);
   }
}
function Zc(e) {
   var t = e.updateQueue;
   if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new e0()),
         t.forEach(function (r) {
            var s = c0.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(s, s));
         });
   }
}
function Ye(e, t) {
   var n = t.deletions;
   if (n !== null)
      for (var r = 0; r < n.length; r++) {
         var s = n[r];
         try {
            var i = e,
               o = t,
               l = o;
            e: for (; l !== null; ) {
               switch (l.tag) {
                  case 5:
                     (fe = l.stateNode), (Je = !1);
                     break e;
                  case 3:
                     (fe = l.stateNode.containerInfo), (Je = !0);
                     break e;
                  case 4:
                     (fe = l.stateNode.containerInfo), (Je = !0);
                     break e;
               }
               l = l.return;
            }
            if (fe === null) throw Error(A(160));
            Lp(i, o, s), (fe = null), (Je = !1);
            var a = s.alternate;
            a !== null && (a.return = null), (s.return = null);
         } catch (u) {
            J(s, t, u);
         }
      }
   if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Op(t, e), (t = t.sibling);
}
function Op(e, t) {
   var n = e.alternate,
      r = e.flags;
   switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
         if ((Ye(t, e), it(e), r & 4)) {
            try {
               zr(3, e, e.return), io(3, e);
            } catch (x) {
               J(e, e.return, x);
            }
            try {
               zr(5, e, e.return);
            } catch (x) {
               J(e, e.return, x);
            }
         }
         break;
      case 1:
         Ye(t, e), it(e), r & 512 && n !== null && zn(n, n.return);
         break;
      case 5:
         if ((Ye(t, e), it(e), r & 512 && n !== null && zn(n, n.return), e.flags & 32)) {
            var s = e.stateNode;
            try {
               Gr(s, '');
            } catch (x) {
               J(e, e.return, x);
            }
         }
         if (r & 4 && ((s = e.stateNode), s != null)) {
            var i = e.memoizedProps,
               o = n !== null ? n.memoizedProps : i,
               l = e.type,
               a = e.updateQueue;
            if (((e.updateQueue = null), a !== null))
               try {
                  l === 'input' && i.type === 'radio' && i.name != null && nh(s, i), Al(l, o);
                  var u = Al(l, i);
                  for (o = 0; o < a.length; o += 2) {
                     var c = a[o],
                        f = a[o + 1];
                     c === 'style' ? lh(s, f) : c === 'dangerouslySetInnerHTML' ? ih(s, f) : c === 'children' ? Gr(s, f) : Ia(s, c, f, u);
                  }
                  switch (l) {
                     case 'input':
                        Cl(s, i);
                        break;
                     case 'textarea':
                        rh(s, i);
                        break;
                     case 'select':
                        var h = s._wrapperState.wasMultiple;
                        s._wrapperState.wasMultiple = !!i.multiple;
                        var m = i.value;
                        m != null
                           ? qn(s, !!i.multiple, m, !1)
                           : h !== !!i.multiple &&
                             (i.defaultValue != null
                                ? qn(s, !!i.multiple, i.defaultValue, !0)
                                : qn(s, !!i.multiple, i.multiple ? [] : '', !1));
                  }
                  s[ss] = i;
               } catch (x) {
                  J(e, e.return, x);
               }
         }
         break;
      case 6:
         if ((Ye(t, e), it(e), r & 4)) {
            if (e.stateNode === null) throw Error(A(162));
            (s = e.stateNode), (i = e.memoizedProps);
            try {
               s.nodeValue = i;
            } catch (x) {
               J(e, e.return, x);
            }
         }
         break;
      case 3:
         if ((Ye(t, e), it(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
            try {
               Zr(t.containerInfo);
            } catch (x) {
               J(e, e.return, x);
            }
         break;
      case 4:
         Ye(t, e), it(e);
         break;
      case 13:
         Ye(t, e),
            it(e),
            (s = e.child),
            s.flags & 8192 &&
               ((i = s.memoizedState !== null),
               (s.stateNode.isHidden = i),
               !i || (s.alternate !== null && s.alternate.memoizedState !== null) || (yu = ne())),
            r & 4 && Zc(e);
         break;
      case 22:
         if (
            ((c = n !== null && n.memoizedState !== null),
            e.mode & 1 ? ((ye = (u = ye) || c), Ye(t, e), (ye = u)) : Ye(t, e),
            it(e),
            r & 8192)
         ) {
            if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
               for (N = e, c = e.child; c !== null; ) {
                  for (f = N = c; N !== null; ) {
                     switch (((h = N), (m = h.child), h.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                           zr(4, h, h.return);
                           break;
                        case 1:
                           zn(h, h.return);
                           var v = h.stateNode;
                           if (typeof v.componentWillUnmount == 'function') {
                              (r = h), (n = h.return);
                              try {
                                 (t = r), (v.props = t.memoizedProps), (v.state = t.memoizedState), v.componentWillUnmount();
                              } catch (x) {
                                 J(r, n, x);
                              }
                           }
                           break;
                        case 5:
                           zn(h, h.return);
                           break;
                        case 22:
                           if (h.memoizedState !== null) {
                              tf(f);
                              continue;
                           }
                     }
                     m !== null ? ((m.return = h), (N = m)) : tf(f);
                  }
                  c = c.sibling;
               }
            e: for (c = null, f = e; ; ) {
               if (f.tag === 5) {
                  if (c === null) {
                     c = f;
                     try {
                        (s = f.stateNode),
                           u
                              ? ((i = s.style),
                                typeof i.setProperty == 'function' ? i.setProperty('display', 'none', 'important') : (i.display = 'none'))
                              : ((l = f.stateNode),
                                (a = f.memoizedProps.style),
                                (o = a != null && a.hasOwnProperty('display') ? a.display : null),
                                (l.style.display = oh('display', o)));
                     } catch (x) {
                        J(e, e.return, x);
                     }
                  }
               } else if (f.tag === 6) {
                  if (c === null)
                     try {
                        f.stateNode.nodeValue = u ? '' : f.memoizedProps;
                     } catch (x) {
                        J(e, e.return, x);
                     }
               } else if (((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) && f.child !== null) {
                  (f.child.return = f), (f = f.child);
                  continue;
               }
               if (f === e) break e;
               for (; f.sibling === null; ) {
                  if (f.return === null || f.return === e) break e;
                  c === f && (c = null), (f = f.return);
               }
               c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
            }
         }
         break;
      case 19:
         Ye(t, e), it(e), r & 4 && Zc(e);
         break;
      case 21:
         break;
      default:
         Ye(t, e), it(e);
   }
}
function it(e) {
   var t = e.flags;
   if (t & 2) {
      try {
         e: {
            for (var n = e.return; n !== null; ) {
               if (Mp(n)) {
                  var r = n;
                  break e;
               }
               n = n.return;
            }
            throw Error(A(160));
         }
         switch (r.tag) {
            case 5:
               var s = r.stateNode;
               r.flags & 32 && (Gr(s, ''), (r.flags &= -33));
               var i = Jc(e);
               ra(e, i, s);
               break;
            case 3:
            case 4:
               var o = r.stateNode.containerInfo,
                  l = Jc(e);
               na(e, l, o);
               break;
            default:
               throw Error(A(161));
         }
      } catch (a) {
         J(e, e.return, a);
      }
      e.flags &= -3;
   }
   t & 4096 && (e.flags &= -4097);
}
function n0(e, t, n) {
   (N = e), bp(e);
}
function bp(e, t, n) {
   for (var r = (e.mode & 1) !== 0; N !== null; ) {
      var s = N,
         i = s.child;
      if (s.tag === 22 && r) {
         var o = s.memoizedState !== null || Ws;
         if (!o) {
            var l = s.alternate,
               a = (l !== null && l.memoizedState !== null) || ye;
            l = Ws;
            var u = ye;
            if (((Ws = o), (ye = a) && !u))
               for (N = s; N !== null; )
                  (o = N), (a = o.child), o.tag === 22 && o.memoizedState !== null ? nf(s) : a !== null ? ((a.return = o), (N = a)) : nf(s);
            for (; i !== null; ) (N = i), bp(i), (i = i.sibling);
            (N = s), (Ws = l), (ye = u);
         }
         ef(e);
      } else s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (N = i)) : ef(e);
   }
}
function ef(e) {
   for (; N !== null; ) {
      var t = N;
      if (t.flags & 8772) {
         var n = t.alternate;
         try {
            if (t.flags & 8772)
               switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                     ye || io(5, t);
                     break;
                  case 1:
                     var r = t.stateNode;
                     if (t.flags & 4 && !ye)
                        if (n === null) r.componentDidMount();
                        else {
                           var s = t.elementType === t.type ? n.memoizedProps : Xe(t.type, n.memoizedProps);
                           r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                        }
                     var i = t.updateQueue;
                     i !== null && Ic(t, i, r);
                     break;
                  case 3:
                     var o = t.updateQueue;
                     if (o !== null) {
                        if (((n = null), t.child !== null))
                           switch (t.child.tag) {
                              case 5:
                                 n = t.child.stateNode;
                                 break;
                              case 1:
                                 n = t.child.stateNode;
                           }
                        Ic(t, o, n);
                     }
                     break;
                  case 5:
                     var l = t.stateNode;
                     if (n === null && t.flags & 4) {
                        n = l;
                        var a = t.memoizedProps;
                        switch (t.type) {
                           case 'button':
                           case 'input':
                           case 'select':
                           case 'textarea':
                              a.autoFocus && n.focus();
                              break;
                           case 'img':
                              a.src && (n.src = a.src);
                        }
                     }
                     break;
                  case 6:
                     break;
                  case 4:
                     break;
                  case 12:
                     break;
                  case 13:
                     if (t.memoizedState === null) {
                        var u = t.alternate;
                        if (u !== null) {
                           var c = u.memoizedState;
                           if (c !== null) {
                              var f = c.dehydrated;
                              f !== null && Zr(f);
                           }
                        }
                     }
                     break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                     break;
                  default:
                     throw Error(A(163));
               }
            ye || (t.flags & 512 && ta(t));
         } catch (h) {
            J(t, t.return, h);
         }
      }
      if (t === e) {
         N = null;
         break;
      }
      if (((n = t.sibling), n !== null)) {
         (n.return = t.return), (N = n);
         break;
      }
      N = t.return;
   }
}
function tf(e) {
   for (; N !== null; ) {
      var t = N;
      if (t === e) {
         N = null;
         break;
      }
      var n = t.sibling;
      if (n !== null) {
         (n.return = t.return), (N = n);
         break;
      }
      N = t.return;
   }
}
function nf(e) {
   for (; N !== null; ) {
      var t = N;
      try {
         switch (t.tag) {
            case 0:
            case 11:
            case 15:
               var n = t.return;
               try {
                  io(4, t);
               } catch (a) {
                  J(t, n, a);
               }
               break;
            case 1:
               var r = t.stateNode;
               if (typeof r.componentDidMount == 'function') {
                  var s = t.return;
                  try {
                     r.componentDidMount();
                  } catch (a) {
                     J(t, s, a);
                  }
               }
               var i = t.return;
               try {
                  ta(t);
               } catch (a) {
                  J(t, i, a);
               }
               break;
            case 5:
               var o = t.return;
               try {
                  ta(t);
               } catch (a) {
                  J(t, o, a);
               }
         }
      } catch (a) {
         J(t, t.return, a);
      }
      if (t === e) {
         N = null;
         break;
      }
      var l = t.sibling;
      if (l !== null) {
         (l.return = t.return), (N = l);
         break;
      }
      N = t.return;
   }
}
var r0 = Math.ceil,
   Di = kt.ReactCurrentDispatcher,
   pu = kt.ReactCurrentOwner,
   We = kt.ReactCurrentBatchConfig,
   I = 0,
   ce = null,
   se = null,
   de = 0,
   De = 0,
   Un = Zt(0),
   le = 0,
   cs = null,
   Pn = 0,
   oo = 0,
   mu = 0,
   Ur = null,
   Ee = null,
   yu = 0,
   or = 1 / 0,
   dt = null,
   Mi = !1,
   sa = null,
   $t = null,
   Ks = !1,
   bt = null,
   Li = 0,
   $r = 0,
   ia = null,
   li = -1,
   ai = 0;
function Se() {
   return I & 6 ? ne() : li !== -1 ? li : (li = ne());
}
function Qt(e) {
   return e.mode & 1
      ? I & 2 && de !== 0
         ? de & -de
         : Bv.transition !== null
         ? (ai === 0 && (ai = xh()), ai)
         : ((e = V), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : kh(e.type))), e)
      : 1;
}
function tt(e, t, n, r) {
   if (50 < $r) throw (($r = 0), (ia = null), Error(A(185)));
   xs(e, n, r),
      (!(I & 2) || e !== ce) &&
         (e === ce && (!(I & 2) && (oo |= n), le === 4 && Lt(e, de)),
         Ne(e, r),
         n === 1 && I === 0 && !(t.mode & 1) && ((or = ne() + 500), no && en()));
}
function Ne(e, t) {
   var n = e.callbackNode;
   Bg(e, t);
   var r = gi(e, e === ce ? de : 0);
   if (r === 0) n !== null && fc(n), (e.callbackNode = null), (e.callbackPriority = 0);
   else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && fc(n), t === 1))
         e.tag === 0 ? _v(rf.bind(null, e)) : Wh(rf.bind(null, e)),
            Ov(function () {
               !(I & 6) && en();
            }),
            (n = null);
      else {
         switch (wh(r)) {
            case 1:
               n = Ua;
               break;
            case 4:
               n = gh;
               break;
            case 16:
               n = yi;
               break;
            case 536870912:
               n = vh;
               break;
            default:
               n = yi;
         }
         n = Qp(n, Ip.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
   }
}
function Ip(e, t) {
   if (((li = -1), (ai = 0), I & 6)) throw Error(A(327));
   var n = e.callbackNode;
   if (Jn() && e.callbackNode !== n) return null;
   var r = gi(e, e === ce ? de : 0);
   if (r === 0) return null;
   if (r & 30 || r & e.expiredLanes || t) t = Oi(e, r);
   else {
      t = r;
      var s = I;
      I |= 2;
      var i = _p();
      (ce !== e || de !== t) && ((dt = null), (or = ne() + 500), gn(e, t));
      do
         try {
            o0();
            break;
         } catch (l) {
            Vp(e, l);
         }
      while (1);
      tu(), (Di.current = i), (I = s), se !== null ? (t = 0) : ((ce = null), (de = 0), (t = le));
   }
   if (t !== 0) {
      if ((t === 2 && ((s = Dl(e)), s !== 0 && ((r = s), (t = oa(e, s)))), t === 1)) throw ((n = cs), gn(e, 0), Lt(e, r), Ne(e, ne()), n);
      if (t === 6) Lt(e, r);
      else {
         if (
            ((s = e.current.alternate),
            !(r & 30) && !s0(s) && ((t = Oi(e, r)), t === 2 && ((i = Dl(e)), i !== 0 && ((r = i), (t = oa(e, i)))), t === 1))
         )
            throw ((n = cs), gn(e, 0), Lt(e, r), Ne(e, ne()), n);
         switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
            case 0:
            case 1:
               throw Error(A(345));
            case 2:
               un(e, Ee, dt);
               break;
            case 3:
               if ((Lt(e, r), (r & 130023424) === r && ((t = yu + 500 - ne()), 10 < t))) {
                  if (gi(e, 0) !== 0) break;
                  if (((s = e.suspendedLanes), (s & r) !== r)) {
                     Se(), (e.pingedLanes |= e.suspendedLanes & s);
                     break;
                  }
                  e.timeoutHandle = Bl(un.bind(null, e, Ee, dt), t);
                  break;
               }
               un(e, Ee, dt);
               break;
            case 4:
               if ((Lt(e, r), (r & 4194240) === r)) break;
               for (t = e.eventTimes, s = -1; 0 < r; ) {
                  var o = 31 - et(r);
                  (i = 1 << o), (o = t[o]), o > s && (s = o), (r &= ~i);
               }
               if (
                  ((r = s),
                  (r = ne() - r),
                  (r =
                     (120 > r
                        ? 120
                        : 480 > r
                        ? 480
                        : 1080 > r
                        ? 1080
                        : 1920 > r
                        ? 1920
                        : 3e3 > r
                        ? 3e3
                        : 4320 > r
                        ? 4320
                        : 1960 * r0(r / 1960)) - r),
                  10 < r)
               ) {
                  e.timeoutHandle = Bl(un.bind(null, e, Ee, dt), r);
                  break;
               }
               un(e, Ee, dt);
               break;
            case 5:
               un(e, Ee, dt);
               break;
            default:
               throw Error(A(329));
         }
      }
   }
   return Ne(e, ne()), e.callbackNode === n ? Ip.bind(null, e) : null;
}
function oa(e, t) {
   var n = Ur;
   return (
      e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256),
      (e = Oi(e, t)),
      e !== 2 && ((t = Ee), (Ee = n), t !== null && la(t)),
      e
   );
}
function la(e) {
   Ee === null ? (Ee = e) : Ee.push.apply(Ee, e);
}
function s0(e) {
   for (var t = e; ; ) {
      if (t.flags & 16384) {
         var n = t.updateQueue;
         if (n !== null && ((n = n.stores), n !== null))
            for (var r = 0; r < n.length; r++) {
               var s = n[r],
                  i = s.getSnapshot;
               s = s.value;
               try {
                  if (!nt(i(), s)) return !1;
               } catch {
                  return !1;
               }
            }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
      else {
         if (t === e) break;
         for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
         }
         (t.sibling.return = t.return), (t = t.sibling);
      }
   }
   return !0;
}
function Lt(e, t) {
   for (t &= ~mu, t &= ~oo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - et(t),
         r = 1 << n;
      (e[n] = -1), (t &= ~r);
   }
}
function rf(e) {
   if (I & 6) throw Error(A(327));
   Jn();
   var t = gi(e, 0);
   if (!(t & 1)) return Ne(e, ne()), null;
   var n = Oi(e, t);
   if (e.tag !== 0 && n === 2) {
      var r = Dl(e);
      r !== 0 && ((t = r), (n = oa(e, r)));
   }
   if (n === 1) throw ((n = cs), gn(e, 0), Lt(e, t), Ne(e, ne()), n);
   if (n === 6) throw Error(A(345));
   return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), un(e, Ee, dt), Ne(e, ne()), null;
}
function gu(e, t) {
   var n = I;
   I |= 1;
   try {
      return e(t);
   } finally {
      (I = n), I === 0 && ((or = ne() + 500), no && en());
   }
}
function jn(e) {
   bt !== null && bt.tag === 0 && !(I & 6) && Jn();
   var t = I;
   I |= 1;
   var n = We.transition,
      r = V;
   try {
      if (((We.transition = null), (V = 1), e)) return e();
   } finally {
      (V = r), (We.transition = n), (I = t), !(I & 6) && en();
   }
}
function vu() {
   (De = Un.current), U(Un);
}
function gn(e, t) {
   (e.finishedWork = null), (e.finishedLanes = 0);
   var n = e.timeoutHandle;
   if ((n !== -1 && ((e.timeoutHandle = -1), Lv(n)), se !== null))
      for (n = se.return; n !== null; ) {
         var r = n;
         switch ((Ja(r), r.tag)) {
            case 1:
               (r = r.type.childContextTypes), r != null && Ci();
               break;
            case 3:
               sr(), U(Ae), U(ge), lu();
               break;
            case 5:
               ou(r);
               break;
            case 4:
               sr();
               break;
            case 13:
               U(q);
               break;
            case 19:
               U(q);
               break;
            case 10:
               nu(r.type._context);
               break;
            case 22:
            case 23:
               vu();
         }
         n = n.return;
      }
   if (
      ((ce = e), (se = e = Wt(e.current, null)), (de = De = t), (le = 0), (cs = null), (mu = oo = Pn = 0), (Ee = Ur = null), hn !== null)
   ) {
      for (t = 0; t < hn.length; t++)
         if (((n = hn[t]), (r = n.interleaved), r !== null)) {
            n.interleaved = null;
            var s = r.next,
               i = n.pending;
            if (i !== null) {
               var o = i.next;
               (i.next = s), (r.next = o);
            }
            n.pending = r;
         }
      hn = null;
   }
   return e;
}
function Vp(e, t) {
   do {
      var n = se;
      try {
         if ((tu(), (si.current = Fi), Ri)) {
            for (var r = Y.memoizedState; r !== null; ) {
               var s = r.queue;
               s !== null && (s.pending = null), (r = r.next);
            }
            Ri = !1;
         }
         if (((Cn = 0), (ue = ie = Y = null), (Br = !1), (ls = 0), (pu.current = null), n === null || n.return === null)) {
            (le = 1), (cs = t), (se = null);
            break;
         }
         e: {
            var i = e,
               o = n.return,
               l = n,
               a = t;
            if (((t = de), (l.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
               var u = a,
                  c = l,
                  f = c.tag;
               if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                  var h = c.alternate;
                  h
                     ? ((c.updateQueue = h.updateQueue), (c.memoizedState = h.memoizedState), (c.lanes = h.lanes))
                     : ((c.updateQueue = null), (c.memoizedState = null));
               }
               var m = Qc(o);
               if (m !== null) {
                  (m.flags &= -257), Wc(m, o, l, i, t), m.mode & 1 && $c(i, u, t), (t = m), (a = u);
                  var v = t.updateQueue;
                  if (v === null) {
                     var x = new Set();
                     x.add(a), (t.updateQueue = x);
                  } else v.add(a);
                  break e;
               } else {
                  if (!(t & 1)) {
                     $c(i, u, t), xu();
                     break e;
                  }
                  a = Error(A(426));
               }
            } else if ($ && l.mode & 1) {
               var C = Qc(o);
               if (C !== null) {
                  !(C.flags & 65536) && (C.flags |= 256), Wc(C, o, l, i, t), Za(ir(a, l));
                  break e;
               }
            }
            (i = a = ir(a, l)), le !== 4 && (le = 2), Ur === null ? (Ur = [i]) : Ur.push(i), (i = o);
            do {
               switch (i.tag) {
                  case 3:
                     (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                     var y = Sp(i, a, t);
                     bc(i, y);
                     break e;
                  case 1:
                     l = a;
                     var p = i.type,
                        g = i.stateNode;
                     if (
                        !(i.flags & 128) &&
                        (typeof p.getDerivedStateFromError == 'function' ||
                           (g !== null && typeof g.componentDidCatch == 'function' && ($t === null || !$t.has(g))))
                     ) {
                        (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                        var S = Cp(i, l, t);
                        bc(i, S);
                        break e;
                     }
               }
               i = i.return;
            } while (i !== null);
         }
         zp(n);
      } catch (j) {
         (t = j), se === n && n !== null && (se = n = n.return);
         continue;
      }
      break;
   } while (1);
}
function _p() {
   var e = Di.current;
   return (Di.current = Fi), e === null ? Fi : e;
}
function xu() {
   (le === 0 || le === 3 || le === 2) && (le = 4), ce === null || (!(Pn & 268435455) && !(oo & 268435455)) || Lt(ce, de);
}
function Oi(e, t) {
   var n = I;
   I |= 2;
   var r = _p();
   (ce !== e || de !== t) && ((dt = null), gn(e, t));
   do
      try {
         i0();
         break;
      } catch (s) {
         Vp(e, s);
      }
   while (1);
   if ((tu(), (I = n), (Di.current = r), se !== null)) throw Error(A(261));
   return (ce = null), (de = 0), le;
}
function i0() {
   for (; se !== null; ) Bp(se);
}
function o0() {
   for (; se !== null && !Fg(); ) Bp(se);
}
function Bp(e) {
   var t = $p(e.alternate, e, De);
   (e.memoizedProps = e.pendingProps), t === null ? zp(e) : (se = t), (pu.current = null);
}
function zp(e) {
   var t = e;
   do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
         if (((n = Zv(n, t)), n !== null)) {
            (n.flags &= 32767), (se = n);
            return;
         }
         if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
         else {
            (le = 6), (se = null);
            return;
         }
      } else if (((n = Jv(n, t, De)), n !== null)) {
         se = n;
         return;
      }
      if (((t = t.sibling), t !== null)) {
         se = t;
         return;
      }
      se = t = e;
   } while (t !== null);
   le === 0 && (le = 5);
}
function un(e, t, n) {
   var r = V,
      s = We.transition;
   try {
      (We.transition = null), (V = 1), l0(e, t, n, r);
   } finally {
      (We.transition = s), (V = r);
   }
   return null;
}
function l0(e, t, n, r) {
   do Jn();
   while (bt !== null);
   if (I & 6) throw Error(A(327));
   n = e.finishedWork;
   var s = e.finishedLanes;
   if (n === null) return null;
   if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(A(177));
   (e.callbackNode = null), (e.callbackPriority = 0);
   var i = n.lanes | n.childLanes;
   if (
      (zg(e, i),
      e === ce && ((se = ce = null), (de = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
         Ks ||
         ((Ks = !0),
         Qp(yi, function () {
            return Jn(), null;
         })),
      (i = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || i)
   ) {
      (i = We.transition), (We.transition = null);
      var o = V;
      V = 1;
      var l = I;
      (I |= 4),
         (pu.current = null),
         t0(e, n),
         Op(n, e),
         Av(Vl),
         (vi = !!Il),
         (Vl = Il = null),
         (e.current = n),
         n0(n),
         Dg(),
         (I = l),
         (V = o),
         (We.transition = i);
   } else e.current = n;
   if ((Ks && ((Ks = !1), (bt = e), (Li = s)), (i = e.pendingLanes), i === 0 && ($t = null), Og(n.stateNode), Ne(e, ne()), t !== null))
      for (r = e.onRecoverableError, n = 0; n < t.length; n++) (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
   if (Mi) throw ((Mi = !1), (e = sa), (sa = null), e);
   return Li & 1 && e.tag !== 0 && Jn(), (i = e.pendingLanes), i & 1 ? (e === ia ? $r++ : (($r = 0), (ia = e))) : ($r = 0), en(), null;
}
function Jn() {
   if (bt !== null) {
      var e = wh(Li),
         t = We.transition,
         n = V;
      try {
         if (((We.transition = null), (V = 16 > e ? 16 : e), bt === null)) var r = !1;
         else {
            if (((e = bt), (bt = null), (Li = 0), I & 6)) throw Error(A(331));
            var s = I;
            for (I |= 4, N = e.current; N !== null; ) {
               var i = N,
                  o = i.child;
               if (N.flags & 16) {
                  var l = i.deletions;
                  if (l !== null) {
                     for (var a = 0; a < l.length; a++) {
                        var u = l[a];
                        for (N = u; N !== null; ) {
                           var c = N;
                           switch (c.tag) {
                              case 0:
                              case 11:
                              case 15:
                                 zr(8, c, i);
                           }
                           var f = c.child;
                           if (f !== null) (f.return = c), (N = f);
                           else
                              for (; N !== null; ) {
                                 c = N;
                                 var h = c.sibling,
                                    m = c.return;
                                 if ((Dp(c), c === u)) {
                                    N = null;
                                    break;
                                 }
                                 if (h !== null) {
                                    (h.return = m), (N = h);
                                    break;
                                 }
                                 N = m;
                              }
                        }
                     }
                     var v = i.alternate;
                     if (v !== null) {
                        var x = v.child;
                        if (x !== null) {
                           v.child = null;
                           do {
                              var C = x.sibling;
                              (x.sibling = null), (x = C);
                           } while (x !== null);
                        }
                     }
                     N = i;
                  }
               }
               if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (N = o);
               else
                  e: for (; N !== null; ) {
                     if (((i = N), i.flags & 2048))
                        switch (i.tag) {
                           case 0:
                           case 11:
                           case 15:
                              zr(9, i, i.return);
                        }
                     var y = i.sibling;
                     if (y !== null) {
                        (y.return = i.return), (N = y);
                        break e;
                     }
                     N = i.return;
                  }
            }
            var p = e.current;
            for (N = p; N !== null; ) {
               o = N;
               var g = o.child;
               if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (N = g);
               else
                  e: for (o = p; N !== null; ) {
                     if (((l = N), l.flags & 2048))
                        try {
                           switch (l.tag) {
                              case 0:
                              case 11:
                              case 15:
                                 io(9, l);
                           }
                        } catch (j) {
                           J(l, l.return, j);
                        }
                     if (l === o) {
                        N = null;
                        break e;
                     }
                     var S = l.sibling;
                     if (S !== null) {
                        (S.return = l.return), (N = S);
                        break e;
                     }
                     N = l.return;
                  }
            }
            if (((I = s), en(), ut && typeof ut.onPostCommitFiberRoot == 'function'))
               try {
                  ut.onPostCommitFiberRoot(Xi, e);
               } catch {}
            r = !0;
         }
         return r;
      } finally {
         (V = n), (We.transition = t);
      }
   }
   return !1;
}
function sf(e, t, n) {
   (t = ir(n, t)), (t = Sp(e, t, 1)), (e = Ut(e, t, 1)), (t = Se()), e !== null && (xs(e, 1, t), Ne(e, t));
}
function J(e, t, n) {
   if (e.tag === 3) sf(e, e, n);
   else
      for (; t !== null; ) {
         if (t.tag === 3) {
            sf(t, e, n);
            break;
         } else if (t.tag === 1) {
            var r = t.stateNode;
            if (
               typeof t.type.getDerivedStateFromError == 'function' ||
               (typeof r.componentDidCatch == 'function' && ($t === null || !$t.has(r)))
            ) {
               (e = ir(n, e)), (e = Cp(t, e, 1)), (t = Ut(t, e, 1)), (e = Se()), t !== null && (xs(t, 1, e), Ne(t, e));
               break;
            }
         }
         t = t.return;
      }
}
function a0(e, t, n) {
   var r = e.pingCache;
   r !== null && r.delete(t),
      (t = Se()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ce === e && (de & n) === n && (le === 4 || (le === 3 && (de & 130023424) === de && 500 > ne() - yu) ? gn(e, 0) : (mu |= n)),
      Ne(e, t);
}
function Up(e, t) {
   t === 0 && (e.mode & 1 ? ((t = bs), (bs <<= 1), !(bs & 130023424) && (bs = 4194304)) : (t = 1));
   var n = Se();
   (e = Ct(e, t)), e !== null && (xs(e, t, n), Ne(e, n));
}
function u0(e) {
   var t = e.memoizedState,
      n = 0;
   t !== null && (n = t.retryLane), Up(e, n);
}
function c0(e, t) {
   var n = 0;
   switch (e.tag) {
      case 13:
         var r = e.stateNode,
            s = e.memoizedState;
         s !== null && (n = s.retryLane);
         break;
      case 19:
         r = e.stateNode;
         break;
      default:
         throw Error(A(314));
   }
   r !== null && r.delete(t), Up(e, n);
}
var $p;
$p = function (e, t, n) {
   if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ae.current) ke = !0;
      else {
         if (!(e.lanes & n) && !(t.flags & 128)) return (ke = !1), Xv(e, t, n);
         ke = !!(e.flags & 131072);
      }
   else (ke = !1), $ && t.flags & 1048576 && Kh(t, Ei, t.index);
   switch (((t.lanes = 0), t.tag)) {
      case 2:
         var r = t.type;
         oi(e, t), (e = t.pendingProps);
         var s = tr(t, ge.current);
         Xn(t, n), (s = uu(null, t, r, e, s, n));
         var i = cu();
         return (
            (t.flags |= 1),
            typeof s == 'object' && s !== null && typeof s.render == 'function' && s.$$typeof === void 0
               ? ((t.tag = 1),
                 (t.memoizedState = null),
                 (t.updateQueue = null),
                 Te(r) ? ((i = !0), Pi(t)) : (i = !1),
                 (t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null),
                 su(t),
                 (s.updater = ro),
                 (t.stateNode = s),
                 (s._reactInternals = t),
                 ql(t, r, e, n),
                 (t = Yl(null, t, r, !0, i, n)))
               : ((t.tag = 0), $ && i && Xa(t), we(null, t, s, n), (t = t.child)),
            t
         );
      case 16:
         r = t.elementType;
         e: {
            switch (
               (oi(e, t), (e = t.pendingProps), (s = r._init), (r = s(r._payload)), (t.type = r), (s = t.tag = d0(r)), (e = Xe(r, e)), s)
            ) {
               case 0:
                  t = Gl(null, t, r, e, n);
                  break e;
               case 1:
                  t = Hc(null, t, r, e, n);
                  break e;
               case 11:
                  t = Kc(null, t, r, e, n);
                  break e;
               case 14:
                  t = qc(null, t, r, Xe(r.type, e), n);
                  break e;
            }
            throw Error(A(306, r, ''));
         }
         return t;
      case 0:
         return (r = t.type), (s = t.pendingProps), (s = t.elementType === r ? s : Xe(r, s)), Gl(e, t, r, s, n);
      case 1:
         return (r = t.type), (s = t.pendingProps), (s = t.elementType === r ? s : Xe(r, s)), Hc(e, t, r, s, n);
      case 3:
         e: {
            if ((kp(t), e === null)) throw Error(A(387));
            (r = t.pendingProps), (i = t.memoizedState), (s = i.element), Yh(e, t), Ti(t, r, null, n);
            var o = t.memoizedState;
            if (((r = o.element), i.isDehydrated))
               if (
                  ((i = {
                     element: r,
                     isDehydrated: !1,
                     cache: o.cache,
                     pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                     transitions: o.transitions,
                  }),
                  (t.updateQueue.baseState = i),
                  (t.memoizedState = i),
                  t.flags & 256)
               ) {
                  (s = ir(Error(A(423)), t)), (t = Gc(e, t, r, n, s));
                  break e;
               } else if (r !== s) {
                  (s = ir(Error(A(424)), t)), (t = Gc(e, t, r, n, s));
                  break e;
               } else
                  for (Me = zt(t.stateNode.containerInfo.firstChild), Le = t, $ = !0, Ze = null, n = ep(t, null, r, n), t.child = n; n; )
                     (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            else {
               if ((nr(), r === s)) {
                  t = Pt(e, t, n);
                  break e;
               }
               we(e, t, r, n);
            }
            t = t.child;
         }
         return t;
      case 5:
         return (
            tp(t),
            e === null && Ql(t),
            (r = t.type),
            (s = t.pendingProps),
            (i = e !== null ? e.memoizedProps : null),
            (o = s.children),
            _l(r, s) ? (o = null) : i !== null && _l(r, i) && (t.flags |= 32),
            Ep(e, t),
            we(e, t, o, n),
            t.child
         );
      case 6:
         return e === null && Ql(t), null;
      case 13:
         return Ap(e, t, n);
      case 4:
         return (
            iu(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = rr(t, null, r, n)) : we(e, t, r, n), t.child
         );
      case 11:
         return (r = t.type), (s = t.pendingProps), (s = t.elementType === r ? s : Xe(r, s)), Kc(e, t, r, s, n);
      case 7:
         return we(e, t, t.pendingProps, n), t.child;
      case 8:
         return we(e, t, t.pendingProps.children, n), t.child;
      case 12:
         return we(e, t, t.pendingProps.children, n), t.child;
      case 10:
         e: {
            if (
               ((r = t.type._context),
               (s = t.pendingProps),
               (i = t.memoizedProps),
               (o = s.value),
               _(ki, r._currentValue),
               (r._currentValue = o),
               i !== null)
            )
               if (nt(i.value, o)) {
                  if (i.children === s.children && !Ae.current) {
                     t = Pt(e, t, n);
                     break e;
                  }
               } else
                  for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                     var l = i.dependencies;
                     if (l !== null) {
                        o = i.child;
                        for (var a = l.firstContext; a !== null; ) {
                           if (a.context === r) {
                              if (i.tag === 1) {
                                 (a = gt(-1, n & -n)), (a.tag = 2);
                                 var u = i.updateQueue;
                                 if (u !== null) {
                                    u = u.shared;
                                    var c = u.pending;
                                    c === null ? (a.next = a) : ((a.next = c.next), (c.next = a)), (u.pending = a);
                                 }
                              }
                              (i.lanes |= n), (a = i.alternate), a !== null && (a.lanes |= n), Wl(i.return, n, t), (l.lanes |= n);
                              break;
                           }
                           a = a.next;
                        }
                     } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                     else if (i.tag === 18) {
                        if (((o = i.return), o === null)) throw Error(A(341));
                        (o.lanes |= n), (l = o.alternate), l !== null && (l.lanes |= n), Wl(o, n, t), (o = i.sibling);
                     } else o = i.child;
                     if (o !== null) o.return = i;
                     else
                        for (o = i; o !== null; ) {
                           if (o === t) {
                              o = null;
                              break;
                           }
                           if (((i = o.sibling), i !== null)) {
                              (i.return = o.return), (o = i);
                              break;
                           }
                           o = o.return;
                        }
                     i = o;
                  }
            we(e, t, s.children, n), (t = t.child);
         }
         return t;
      case 9:
         return (s = t.type), (r = t.pendingProps.children), Xn(t, n), (s = Ke(s)), (r = r(s)), (t.flags |= 1), we(e, t, r, n), t.child;
      case 14:
         return (r = t.type), (s = Xe(r, t.pendingProps)), (s = Xe(r.type, s)), qc(e, t, r, s, n);
      case 15:
         return Pp(e, t, t.type, t.pendingProps, n);
      case 17:
         return (
            (r = t.type),
            (s = t.pendingProps),
            (s = t.elementType === r ? s : Xe(r, s)),
            oi(e, t),
            (t.tag = 1),
            Te(r) ? ((e = !0), Pi(t)) : (e = !1),
            Xn(t, n),
            Jh(t, r, s),
            ql(t, r, s, n),
            Yl(null, t, r, !0, e, n)
         );
      case 19:
         return Tp(e, t, n);
      case 22:
         return jp(e, t, n);
   }
   throw Error(A(156, t.tag));
};
function Qp(e, t) {
   return yh(e, t);
}
function f0(e, t, n, r) {
   (this.tag = e),
      (this.key = n),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
}
function Qe(e, t, n, r) {
   return new f0(e, t, n, r);
}
function wu(e) {
   return (e = e.prototype), !(!e || !e.isReactComponent);
}
function d0(e) {
   if (typeof e == 'function') return wu(e) ? 1 : 0;
   if (e != null) {
      if (((e = e.$$typeof), e === _a)) return 11;
      if (e === Ba) return 14;
   }
   return 2;
}
function Wt(e, t) {
   var n = e.alternate;
   return (
      n === null
         ? ((n = Qe(e.tag, t, e.key, e.mode)),
           (n.elementType = e.elementType),
           (n.type = e.type),
           (n.stateNode = e.stateNode),
           (n.alternate = e),
           (e.alternate = n))
         : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
   );
}
function ui(e, t, n, r, s, i) {
   var o = 2;
   if (((r = e), typeof e == 'function')) wu(e) && (o = 1);
   else if (typeof e == 'string') o = 5;
   else
      e: switch (e) {
         case Dn:
            return vn(n.children, s, i, t);
         case Va:
            (o = 8), (s |= 8);
            break;
         case gl:
            return (e = Qe(12, n, t, s | 2)), (e.elementType = gl), (e.lanes = i), e;
         case vl:
            return (e = Qe(13, n, t, s)), (e.elementType = vl), (e.lanes = i), e;
         case xl:
            return (e = Qe(19, n, t, s)), (e.elementType = xl), (e.lanes = i), e;
         case Zd:
            return lo(n, s, i, t);
         default:
            if (typeof e == 'object' && e !== null)
               switch (e.$$typeof) {
                  case Xd:
                     o = 10;
                     break e;
                  case Jd:
                     o = 9;
                     break e;
                  case _a:
                     o = 11;
                     break e;
                  case Ba:
                     o = 14;
                     break e;
                  case Nt:
                     (o = 16), (r = null);
                     break e;
               }
            throw Error(A(130, e == null ? e : typeof e, ''));
      }
   return (t = Qe(o, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function vn(e, t, n, r) {
   return (e = Qe(7, e, r, t)), (e.lanes = n), e;
}
function lo(e, t, n, r) {
   return (e = Qe(22, e, r, t)), (e.elementType = Zd), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Zo(e, t, n) {
   return (e = Qe(6, e, null, t)), (e.lanes = n), e;
}
function el(e, t, n) {
   return (
      (t = Qe(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
      t
   );
}
function h0(e, t, n, r, s) {
   (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Lo(0)),
      (this.expirationTimes = Lo(-1)),
      (this.entangledLanes =
         this.finishedLanes =
         this.mutableReadLanes =
         this.expiredLanes =
         this.pingedLanes =
         this.suspendedLanes =
         this.pendingLanes =
            0),
      (this.entanglements = Lo(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = s),
      (this.mutableSourceEagerHydrationData = null);
}
function Su(e, t, n, r, s, i, o, l, a) {
   return (
      (e = new h0(e, t, n, l, a)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = Qe(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
      su(i),
      e
   );
}
function p0(e, t, n) {
   var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
   return { $$typeof: Fn, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n };
}
function Wp(e) {
   if (!e) return Gt;
   e = e._reactInternals;
   e: {
      if (kn(e) !== e || e.tag !== 1) throw Error(A(170));
      var t = e;
      do {
         switch (t.tag) {
            case 3:
               t = t.stateNode.context;
               break e;
            case 1:
               if (Te(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e;
               }
         }
         t = t.return;
      } while (t !== null);
      throw Error(A(171));
   }
   if (e.tag === 1) {
      var n = e.type;
      if (Te(n)) return Qh(e, n, t);
   }
   return t;
}
function Kp(e, t, n, r, s, i, o, l, a) {
   return (
      (e = Su(n, r, !0, e, s, i, o, l, a)),
      (e.context = Wp(null)),
      (n = e.current),
      (r = Se()),
      (s = Qt(n)),
      (i = gt(r, s)),
      (i.callback = t ?? null),
      Ut(n, i, s),
      (e.current.lanes = s),
      xs(e, s, r),
      Ne(e, r),
      e
   );
}
function ao(e, t, n, r) {
   var s = t.current,
      i = Se(),
      o = Qt(s);
   return (
      (n = Wp(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = gt(i, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Ut(s, t, o)),
      e !== null && (tt(e, s, o, i), ri(e, s, o)),
      o
   );
}
function bi(e) {
   if (((e = e.current), !e.child)) return null;
   switch (e.child.tag) {
      case 5:
         return e.child.stateNode;
      default:
         return e.child.stateNode;
   }
}
function of(e, t) {
   if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
   }
}
function Cu(e, t) {
   of(e, t), (e = e.alternate) && of(e, t);
}
function m0() {
   return null;
}
var qp =
   typeof reportError == 'function'
      ? reportError
      : function (e) {
           console.error(e);
        };
function Pu(e) {
   this._internalRoot = e;
}
uo.prototype.render = Pu.prototype.render = function (e) {
   var t = this._internalRoot;
   if (t === null) throw Error(A(409));
   ao(e, t, null, null);
};
uo.prototype.unmount = Pu.prototype.unmount = function () {
   var e = this._internalRoot;
   if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      jn(function () {
         ao(null, e, null, null);
      }),
         (t[St] = null);
   }
};
function uo(e) {
   this._internalRoot = e;
}
uo.prototype.unstable_scheduleHydration = function (e) {
   if (e) {
      var t = Ph();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Mt.length && t !== 0 && t < Mt[n].priority; n++);
      Mt.splice(n, 0, e), n === 0 && Eh(e);
   }
};
function ju(e) {
   return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function co(e) {
   return !(
      !e ||
      (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
   );
}
function lf() {}
function y0(e, t, n, r, s) {
   if (s) {
      if (typeof r == 'function') {
         var i = r;
         r = function () {
            var u = bi(o);
            i.call(u);
         };
      }
      var o = Kp(t, r, e, 0, null, !1, !1, '', lf);
      return (e._reactRootContainer = o), (e[St] = o.current), ns(e.nodeType === 8 ? e.parentNode : e), jn(), o;
   }
   for (; (s = e.lastChild); ) e.removeChild(s);
   if (typeof r == 'function') {
      var l = r;
      r = function () {
         var u = bi(a);
         l.call(u);
      };
   }
   var a = Su(e, 0, !1, null, null, !1, !1, '', lf);
   return (
      (e._reactRootContainer = a),
      (e[St] = a.current),
      ns(e.nodeType === 8 ? e.parentNode : e),
      jn(function () {
         ao(t, a, n, r);
      }),
      a
   );
}
function fo(e, t, n, r, s) {
   var i = n._reactRootContainer;
   if (i) {
      var o = i;
      if (typeof s == 'function') {
         var l = s;
         s = function () {
            var a = bi(o);
            l.call(a);
         };
      }
      ao(t, o, e, s);
   } else o = y0(n, t, e, s, r);
   return bi(o);
}
Sh = function (e) {
   switch (e.tag) {
      case 3:
         var t = e.stateNode;
         if (t.current.memoizedState.isDehydrated) {
            var n = Rr(t.pendingLanes);
            n !== 0 && ($a(t, n | 1), Ne(t, ne()), !(I & 6) && ((or = ne() + 500), en()));
         }
         break;
      case 13:
         jn(function () {
            var r = Ct(e, 1);
            if (r !== null) {
               var s = Se();
               tt(r, e, 1, s);
            }
         }),
            Cu(e, 1);
   }
};
Qa = function (e) {
   if (e.tag === 13) {
      var t = Ct(e, 134217728);
      if (t !== null) {
         var n = Se();
         tt(t, e, 134217728, n);
      }
      Cu(e, 134217728);
   }
};
Ch = function (e) {
   if (e.tag === 13) {
      var t = Qt(e),
         n = Ct(e, t);
      if (n !== null) {
         var r = Se();
         tt(n, e, t, r);
      }
      Cu(e, t);
   }
};
Ph = function () {
   return V;
};
jh = function (e, t) {
   var n = V;
   try {
      return (V = e), t();
   } finally {
      V = n;
   }
};
Nl = function (e, t, n) {
   switch (t) {
      case 'input':
         if ((Cl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
               var r = n[t];
               if (r !== e && r.form === e.form) {
                  var s = to(r);
                  if (!s) throw Error(A(90));
                  th(r), Cl(r, s);
               }
            }
         }
         break;
      case 'textarea':
         rh(e, n);
         break;
      case 'select':
         (t = n.value), t != null && qn(e, !!n.multiple, t, !1);
   }
};
ch = gu;
fh = jn;
var g0 = { usingClientEntryPoint: !1, Events: [Ss, bn, to, ah, uh, gu] },
   Er = { findFiberByHostInstance: dn, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom' },
   v0 = {
      bundleType: Er.bundleType,
      version: Er.version,
      rendererPackageName: Er.rendererPackageName,
      rendererConfig: Er.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: kt.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
         return (e = ph(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Er.findFiberByHostInstance || m0,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
   };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
   var qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
   if (!qs.isDisabled && qs.supportsFiber)
      try {
         (Xi = qs.inject(v0)), (ut = qs);
      } catch {}
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = g0;
Ie.createPortal = function (e, t) {
   var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
   if (!ju(t)) throw Error(A(200));
   return p0(e, t, null, n);
};
Ie.createRoot = function (e, t) {
   if (!ju(e)) throw Error(A(299));
   var n = !1,
      r = '',
      s = qp;
   return (
      t != null &&
         (t.unstable_strictMode === !0 && (n = !0),
         t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
         t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
      (t = Su(e, 1, !1, null, null, n, !1, r, s)),
      (e[St] = t.current),
      ns(e.nodeType === 8 ? e.parentNode : e),
      new Pu(t)
   );
};
Ie.findDOMNode = function (e) {
   if (e == null) return null;
   if (e.nodeType === 1) return e;
   var t = e._reactInternals;
   if (t === void 0) throw typeof e.render == 'function' ? Error(A(188)) : ((e = Object.keys(e).join(',')), Error(A(268, e)));
   return (e = ph(t)), (e = e === null ? null : e.stateNode), e;
};
Ie.flushSync = function (e) {
   return jn(e);
};
Ie.hydrate = function (e, t, n) {
   if (!co(t)) throw Error(A(200));
   return fo(null, e, t, !0, n);
};
Ie.hydrateRoot = function (e, t, n) {
   if (!ju(e)) throw Error(A(405));
   var r = (n != null && n.hydratedSources) || null,
      s = !1,
      i = '',
      o = qp;
   if (
      (n != null &&
         (n.unstable_strictMode === !0 && (s = !0),
         n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
         n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
      (t = Kp(t, null, e, 1, n ?? null, s, !1, i, o)),
      (e[St] = t.current),
      ns(e),
      r)
   )
      for (e = 0; e < r.length; e++)
         (n = r[e]),
            (s = n._getVersion),
            (s = s(n._source)),
            t.mutableSourceEagerHydrationData == null
               ? (t.mutableSourceEagerHydrationData = [n, s])
               : t.mutableSourceEagerHydrationData.push(n, s);
   return new uo(t);
};
Ie.render = function (e, t, n) {
   if (!co(t)) throw Error(A(200));
   return fo(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function (e) {
   if (!co(e)) throw Error(A(40));
   return e._reactRootContainer
      ? (jn(function () {
           fo(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[St] = null);
           });
        }),
        !0)
      : !1;
};
Ie.unstable_batchedUpdates = gu;
Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
   if (!co(n)) throw Error(A(200));
   if (e == null || e._reactInternals === void 0) throw Error(A(38));
   return fo(e, t, n, !1, r);
};
Ie.version = '18.2.0-next-9e3b772b8-20220608';
function Hp() {
   if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
         __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hp);
      } catch (e) {
         console.error(e);
      }
}
Hp(), (Kd.exports = Ie);
var x0 = Kd.exports,
   af = x0;
(ml.createRoot = af.createRoot), (ml.hydrateRoot = af.hydrateRoot);
/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fs() {
   return (
      (fs = Object.assign
         ? Object.assign.bind()
         : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                 var n = arguments[t];
                 for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
           }),
      fs.apply(this, arguments)
   );
}
var It;
(function (e) {
   (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(It || (It = {}));
const uf = 'popstate';
function w0(e) {
   e === void 0 && (e = {});
   function t(r, s) {
      let { pathname: i, search: o, hash: l } = r.location;
      return aa('', { pathname: i, search: o, hash: l }, (s.state && s.state.usr) || null, (s.state && s.state.key) || 'default');
   }
   function n(r, s) {
      return typeof s == 'string' ? s : Gp(s);
   }
   return C0(t, n, null, e);
}
function ae(e, t) {
   if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Eu(e, t) {
   if (!e) {
      typeof console < 'u' && console.warn(t);
      try {
         throw new Error(t);
      } catch {}
   }
}
function S0() {
   return Math.random().toString(36).substr(2, 8);
}
function cf(e, t) {
   return { usr: e.state, key: e.key, idx: t };
}
function aa(e, t, n, r) {
   return (
      n === void 0 && (n = null),
      fs({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? dr(t) : t, {
         state: n,
         key: (t && t.key) || r || S0(),
      })
   );
}
function Gp(e) {
   let { pathname: t = '/', search: n = '', hash: r = '' } = e;
   return n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n), r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r), t;
}
function dr(e) {
   let t = {};
   if (e) {
      let n = e.indexOf('#');
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
      let r = e.indexOf('?');
      r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
   }
   return t;
}
function C0(e, t, n, r) {
   r === void 0 && (r = {});
   let { window: s = document.defaultView, v5Compat: i = !1 } = r,
      o = s.history,
      l = It.Pop,
      a = null,
      u = c();
   u == null && ((u = 0), o.replaceState(fs({}, o.state, { idx: u }), ''));
   function c() {
      return (o.state || { idx: null }).idx;
   }
   function f() {
      l = It.Pop;
      let C = c(),
         y = C == null ? null : C - u;
      (u = C), a && a({ action: l, location: x.location, delta: y });
   }
   function h(C, y) {
      l = It.Push;
      let p = aa(x.location, C, y);
      n && n(p, C), (u = c() + 1);
      let g = cf(p, u),
         S = x.createHref(p);
      try {
         o.pushState(g, '', S);
      } catch (j) {
         if (j instanceof DOMException && j.name === 'DataCloneError') throw j;
         s.location.assign(S);
      }
      i && a && a({ action: l, location: x.location, delta: 1 });
   }
   function m(C, y) {
      l = It.Replace;
      let p = aa(x.location, C, y);
      n && n(p, C), (u = c());
      let g = cf(p, u),
         S = x.createHref(p);
      o.replaceState(g, '', S), i && a && a({ action: l, location: x.location, delta: 0 });
   }
   function v(C) {
      let y = s.location.origin !== 'null' ? s.location.origin : s.location.href,
         p = typeof C == 'string' ? C : Gp(C);
      return ae(y, 'No window.location.(origin|href) available to create URL for href: ' + p), new URL(p, y);
   }
   let x = {
      get action() {
         return l;
      },
      get location() {
         return e(s, o);
      },
      listen(C) {
         if (a) throw new Error('A history only accepts one active listener');
         return (
            s.addEventListener(uf, f),
            (a = C),
            () => {
               s.removeEventListener(uf, f), (a = null);
            }
         );
      },
      createHref(C) {
         return t(s, C);
      },
      createURL: v,
      encodeLocation(C) {
         let y = v(C);
         return { pathname: y.pathname, search: y.search, hash: y.hash };
      },
      push: h,
      replace: m,
      go(C) {
         return o.go(C);
      },
   };
   return x;
}
var ff;
(function (e) {
   (e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
})(ff || (ff = {}));
function P0(e, t, n) {
   n === void 0 && (n = '/');
   let r = typeof t == 'string' ? dr(t) : t,
      s = Jp(r.pathname || '/', n);
   if (s == null) return null;
   let i = Yp(e);
   j0(i);
   let o = null;
   for (let l = 0; o == null && l < i.length; ++l) o = M0(i[l], b0(s));
   return o;
}
function Yp(e, t, n, r) {
   t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
   let s = (i, o, l) => {
      let a = { relativePath: l === void 0 ? i.path || '' : l, caseSensitive: i.caseSensitive === !0, childrenIndex: o, route: i };
      a.relativePath.startsWith('/') &&
         (ae(
            a.relativePath.startsWith(r),
            'Absolute route path "' +
               a.relativePath +
               '" nested under path ' +
               ('"' + r + '" is not valid. An absolute child route path ') +
               'must start with the combined path of all its parent routes.'
         ),
         (a.relativePath = a.relativePath.slice(r.length)));
      let u = xn([r, a.relativePath]),
         c = n.concat(a);
      i.children &&
         i.children.length > 0 &&
         (ae(i.index !== !0, 'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + u + '".')),
         Yp(i.children, t, c, u)),
         !(i.path == null && !i.index) && t.push({ path: u, score: F0(u, i.index), routesMeta: c });
   };
   return (
      e.forEach((i, o) => {
         var l;
         if (i.path === '' || !((l = i.path) != null && l.includes('?'))) s(i, o);
         else for (let a of Xp(i.path)) s(i, o, a);
      }),
      t
   );
}
function Xp(e) {
   let t = e.split('/');
   if (t.length === 0) return [];
   let [n, ...r] = t,
      s = n.endsWith('?'),
      i = n.replace(/\?$/, '');
   if (r.length === 0) return s ? [i, ''] : [i];
   let o = Xp(r.join('/')),
      l = [];
   return (
      l.push(...o.map((a) => (a === '' ? i : [i, a].join('/')))), s && l.push(...o), l.map((a) => (e.startsWith('/') && a === '' ? '/' : a))
   );
}
function j0(e) {
   e.sort((t, n) =>
      t.score !== n.score
         ? n.score - t.score
         : D0(
              t.routesMeta.map((r) => r.childrenIndex),
              n.routesMeta.map((r) => r.childrenIndex)
           )
   );
}
const E0 = /^:\w+$/,
   k0 = 3,
   A0 = 2,
   T0 = 1,
   N0 = 10,
   R0 = -2,
   df = (e) => e === '*';
function F0(e, t) {
   let n = e.split('/'),
      r = n.length;
   return n.some(df) && (r += R0), t && (r += A0), n.filter((s) => !df(s)).reduce((s, i) => s + (E0.test(i) ? k0 : i === '' ? T0 : N0), r);
}
function D0(e, t) {
   return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function M0(e, t) {
   let { routesMeta: n } = e,
      r = {},
      s = '/',
      i = [];
   for (let o = 0; o < n.length; ++o) {
      let l = n[o],
         a = o === n.length - 1,
         u = s === '/' ? t : t.slice(s.length) || '/',
         c = L0({ path: l.relativePath, caseSensitive: l.caseSensitive, end: a }, u);
      if (!c) return null;
      Object.assign(r, c.params);
      let f = l.route;
      i.push({ params: r, pathname: xn([s, c.pathname]), pathnameBase: U0(xn([s, c.pathnameBase])), route: f }),
         c.pathnameBase !== '/' && (s = xn([s, c.pathnameBase]));
   }
   return i;
}
function L0(e, t) {
   typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
   let [n, r] = O0(e.path, e.caseSensitive, e.end),
      s = t.match(n);
   if (!s) return null;
   let i = s[0],
      o = i.replace(/(.)\/+$/, '$1'),
      l = s.slice(1);
   return {
      params: r.reduce((u, c, f) => {
         if (c === '*') {
            let h = l[f] || '';
            o = i.slice(0, i.length - h.length).replace(/(.)\/+$/, '$1');
         }
         return (u[c] = I0(l[f] || '', c)), u;
      }, {}),
      pathname: i,
      pathnameBase: o,
      pattern: e,
   };
}
function O0(e, t, n) {
   t === void 0 && (t = !1),
      n === void 0 && (n = !0),
      Eu(
         e === '*' || !e.endsWith('*') || e.endsWith('/*'),
         'Route path "' +
            e +
            '" will be treated as if it were ' +
            ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
            'always follow a `/` in the pattern. To get rid of this warning, ' +
            ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
      );
   let r = [],
      s =
         '^' +
         e
            .replace(/\/*\*?$/, '')
            .replace(/^\/*/, '/')
            .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
            .replace(/\/:(\w+)/g, (o, l) => (r.push(l), '/([^\\/]+)'));
   return (
      e.endsWith('*')
         ? (r.push('*'), (s += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
         : n
         ? (s += '\\/*$')
         : e !== '' && e !== '/' && (s += '(?:(?=\\/|$))'),
      [new RegExp(s, t ? void 0 : 'i'), r]
   );
}
function b0(e) {
   try {
      return decodeURI(e);
   } catch (t) {
      return (
         Eu(
            !1,
            'The URL path "' +
               e +
               '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
               ('encoding (' + t + ').')
         ),
         e
      );
   }
}
function I0(e, t) {
   try {
      return decodeURIComponent(e);
   } catch (n) {
      return (
         Eu(
            !1,
            'The value for the URL param "' +
               t +
               '" will not be decoded because' +
               (' the string "' + e + '" is a malformed URL segment. This is probably') +
               (' due to a bad percent encoding (' + n + ').')
         ),
         e
      );
   }
}
function Jp(e, t) {
   if (t === '/') return e;
   if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
   let n = t.endsWith('/') ? t.length - 1 : t.length,
      r = e.charAt(n);
   return r && r !== '/' ? null : e.slice(n) || '/';
}
function V0(e, t) {
   t === void 0 && (t = '/');
   let { pathname: n, search: r = '', hash: s = '' } = typeof e == 'string' ? dr(e) : e;
   return { pathname: n ? (n.startsWith('/') ? n : _0(n, t)) : t, search: $0(r), hash: Q0(s) };
}
function _0(e, t) {
   let n = t.replace(/\/+$/, '').split('/');
   return (
      e.split('/').forEach((s) => {
         s === '..' ? n.length > 1 && n.pop() : s !== '.' && n.push(s);
      }),
      n.length > 1 ? n.join('/') : '/'
   );
}
function tl(e, t, n, r) {
   return (
      "Cannot include a '" +
      e +
      "' character in a manually specified " +
      ('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
      ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
      'a string in <Link to="..."> and the router will parse it for you.'
   );
}
function B0(e) {
   return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function z0(e, t, n, r) {
   r === void 0 && (r = !1);
   let s;
   typeof e == 'string'
      ? (s = dr(e))
      : ((s = fs({}, e)),
        ae(!s.pathname || !s.pathname.includes('?'), tl('?', 'pathname', 'search', s)),
        ae(!s.pathname || !s.pathname.includes('#'), tl('#', 'pathname', 'hash', s)),
        ae(!s.search || !s.search.includes('#'), tl('#', 'search', 'hash', s)));
   let i = e === '' || s.pathname === '',
      o = i ? '/' : s.pathname,
      l;
   if (r || o == null) l = n;
   else {
      let f = t.length - 1;
      if (o.startsWith('..')) {
         let h = o.split('/');
         for (; h[0] === '..'; ) h.shift(), (f -= 1);
         s.pathname = h.join('/');
      }
      l = f >= 0 ? t[f] : '/';
   }
   let a = V0(s, l),
      u = o && o !== '/' && o.endsWith('/'),
      c = (i || o === '.') && n.endsWith('/');
   return !a.pathname.endsWith('/') && (u || c) && (a.pathname += '/'), a;
}
const xn = (e) => e.join('/').replace(/\/\/+/g, '/'),
   U0 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
   $0 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
   Q0 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function W0(e) {
   return e != null && typeof e.status == 'number' && typeof e.statusText == 'string' && typeof e.internal == 'boolean' && 'data' in e;
}
const Zp = ['post', 'put', 'patch', 'delete'];
new Set(Zp);
const K0 = ['get', ...Zp];
new Set(K0);
/**
 * React Router v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ii() {
   return (
      (Ii = Object.assign
         ? Object.assign.bind()
         : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                 var n = arguments[t];
                 for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
           }),
      Ii.apply(this, arguments)
   );
}
const q0 = 'startTransition';
var hf = ug[q0];
const ku = w.createContext(null),
   H0 = w.createContext(null),
   ho = w.createContext(null),
   po = w.createContext(null),
   hr = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
   em = w.createContext(null);
function mo() {
   return w.useContext(po) != null;
}
function tm() {
   return mo() || ae(!1), w.useContext(po).location;
}
function nm(e) {
   w.useContext(ho).static || w.useLayoutEffect(e);
}
function pr() {
   let { isDataRoute: e } = w.useContext(hr);
   return e ? lx() : G0();
}
function G0() {
   mo() || ae(!1);
   let e = w.useContext(ku),
      { basename: t, navigator: n } = w.useContext(ho),
      { matches: r } = w.useContext(hr),
      { pathname: s } = tm(),
      i = JSON.stringify(B0(r).map((a) => a.pathnameBase)),
      o = w.useRef(!1);
   return (
      nm(() => {
         o.current = !0;
      }),
      w.useCallback(
         function (a, u) {
            if ((u === void 0 && (u = {}), !o.current)) return;
            if (typeof a == 'number') {
               n.go(a);
               return;
            }
            let c = z0(a, JSON.parse(i), s, u.relative === 'path');
            e == null && t !== '/' && (c.pathname = c.pathname === '/' ? t : xn([t, c.pathname])),
               (u.replace ? n.replace : n.push)(c, u.state, u);
         },
         [t, n, i, s, e]
      )
   );
}
function Y0(e, t) {
   return X0(e, t);
}
function X0(e, t, n) {
   mo() || ae(!1);
   let { navigator: r } = w.useContext(ho),
      { matches: s } = w.useContext(hr),
      i = s[s.length - 1],
      o = i ? i.params : {};
   i && i.pathname;
   let l = i ? i.pathnameBase : '/';
   i && i.route;
   let a = tm(),
      u;
   if (t) {
      var c;
      let x = typeof t == 'string' ? dr(t) : t;
      l === '/' || ((c = x.pathname) != null && c.startsWith(l)) || ae(!1), (u = x);
   } else u = a;
   let f = u.pathname || '/',
      h = l === '/' ? f : f.slice(l.length) || '/',
      m = P0(e, { pathname: h }),
      v = nx(
         m &&
            m.map((x) =>
               Object.assign({}, x, {
                  params: Object.assign({}, o, x.params),
                  pathname: xn([l, r.encodeLocation ? r.encodeLocation(x.pathname).pathname : x.pathname]),
                  pathnameBase:
                     x.pathnameBase === '/' ? l : xn([l, r.encodeLocation ? r.encodeLocation(x.pathnameBase).pathname : x.pathnameBase]),
               })
            ),
         s,
         n
      );
   return t && v
      ? w.createElement(
           po.Provider,
           { value: { location: Ii({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, u), navigationType: It.Pop } },
           v
        )
      : v;
}
function J0() {
   let e = ox(),
      t = W0(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      s = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
      i = null;
   return w.createElement(
      w.Fragment,
      null,
      w.createElement('h2', null, 'Unexpected Application Error!'),
      w.createElement('h3', { style: { fontStyle: 'italic' } }, t),
      n ? w.createElement('pre', { style: s }, n) : null,
      i
   );
}
const Z0 = w.createElement(J0, null);
class ex extends w.Component {
   constructor(t) {
      super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
   }
   static getDerivedStateFromError(t) {
      return { error: t };
   }
   static getDerivedStateFromProps(t, n) {
      return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
         ? { error: t.error, location: t.location, revalidation: t.revalidation }
         : { error: t.error || n.error, location: n.location, revalidation: t.revalidation || n.revalidation };
   }
   componentDidCatch(t, n) {
      console.error('React Router caught the following error during render', t, n);
   }
   render() {
      return this.state.error
         ? w.createElement(
              hr.Provider,
              { value: this.props.routeContext },
              w.createElement(em.Provider, { value: this.state.error, children: this.props.component })
           )
         : this.props.children;
   }
}
function tx(e) {
   let { routeContext: t, match: n, children: r } = e,
      s = w.useContext(ku);
   return (
      s &&
         s.static &&
         s.staticContext &&
         (n.route.errorElement || n.route.ErrorBoundary) &&
         (s.staticContext._deepestRenderedBoundaryId = n.route.id),
      w.createElement(hr.Provider, { value: t }, r)
   );
}
function nx(e, t, n) {
   var r;
   if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
      var s;
      if ((s = n) != null && s.errors) e = n.matches;
      else return null;
   }
   let i = e,
      o = (r = n) == null ? void 0 : r.errors;
   if (o != null) {
      let l = i.findIndex((a) => a.route.id && (o == null ? void 0 : o[a.route.id]));
      l >= 0 || ae(!1), (i = i.slice(0, Math.min(i.length, l + 1)));
   }
   return i.reduceRight((l, a, u) => {
      let c = a.route.id ? (o == null ? void 0 : o[a.route.id]) : null,
         f = null;
      n && (f = a.route.errorElement || Z0);
      let h = t.concat(i.slice(0, u + 1)),
         m = () => {
            let v;
            return (
               c
                  ? (v = f)
                  : a.route.Component
                  ? (v = w.createElement(a.route.Component, null))
                  : a.route.element
                  ? (v = a.route.element)
                  : (v = l),
               w.createElement(tx, { match: a, routeContext: { outlet: l, matches: h, isDataRoute: n != null }, children: v })
            );
         };
      return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0)
         ? w.createElement(ex, {
              location: n.location,
              revalidation: n.revalidation,
              component: f,
              error: c,
              children: m(),
              routeContext: { outlet: null, matches: h, isDataRoute: !0 },
           })
         : m();
   }, null);
}
var ua;
(function (e) {
   (e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator'), (e.UseNavigateStable = 'useNavigate');
})(ua || (ua = {}));
var ds;
(function (e) {
   (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId');
})(ds || (ds = {}));
function rx(e) {
   let t = w.useContext(ku);
   return t || ae(!1), t;
}
function sx(e) {
   let t = w.useContext(H0);
   return t || ae(!1), t;
}
function ix(e) {
   let t = w.useContext(hr);
   return t || ae(!1), t;
}
function rm(e) {
   let t = ix(),
      n = t.matches[t.matches.length - 1];
   return n.route.id || ae(!1), n.route.id;
}
function ox() {
   var e;
   let t = w.useContext(em),
      n = sx(ds.UseRouteError),
      r = rm(ds.UseRouteError);
   return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function lx() {
   let { router: e } = rx(ua.UseNavigateStable),
      t = rm(ds.UseNavigateStable),
      n = w.useRef(!1);
   return (
      nm(() => {
         n.current = !0;
      }),
      w.useCallback(
         function (s, i) {
            i === void 0 && (i = {}), n.current && (typeof s == 'number' ? e.navigate(s) : e.navigate(s, Ii({ fromRouteId: t }, i)));
         },
         [e, t]
      )
   );
}
function Dr(e) {
   ae(!1);
}
function ax(e) {
   let { basename: t = '/', children: n = null, location: r, navigationType: s = It.Pop, navigator: i, static: o = !1 } = e;
   mo() && ae(!1);
   let l = t.replace(/^\/*/, '/'),
      a = w.useMemo(() => ({ basename: l, navigator: i, static: o }), [l, i, o]);
   typeof r == 'string' && (r = dr(r));
   let { pathname: u = '/', search: c = '', hash: f = '', state: h = null, key: m = 'default' } = r,
      v = w.useMemo(() => {
         let x = Jp(u, l);
         return x == null ? null : { location: { pathname: x, search: c, hash: f, state: h, key: m }, navigationType: s };
      }, [l, u, c, f, h, m, s]);
   return v == null ? null : w.createElement(ho.Provider, { value: a }, w.createElement(po.Provider, { children: n, value: v }));
}
function ux(e) {
   let { children: t, location: n } = e;
   return Y0(ca(t), n);
}
var pf;
(function (e) {
   (e[(e.pending = 0)] = 'pending'), (e[(e.success = 1)] = 'success'), (e[(e.error = 2)] = 'error');
})(pf || (pf = {}));
new Promise(() => {});
function ca(e, t) {
   t === void 0 && (t = []);
   let n = [];
   return (
      w.Children.forEach(e, (r, s) => {
         if (!w.isValidElement(r)) return;
         let i = [...t, s];
         if (r.type === w.Fragment) {
            n.push.apply(n, ca(r.props.children, i));
            return;
         }
         r.type !== Dr && ae(!1), !r.props.index || !r.props.children || ae(!1);
         let o = {
            id: r.props.id || i.join('-'),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy,
         };
         r.props.children && (o.children = ca(r.props.children, i)), n.push(o);
      }),
      n
   );
}
/**
 * React Router DOM v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function cx(e) {
   let { basename: t, children: n, future: r, window: s } = e,
      i = w.useRef();
   i.current == null && (i.current = w0({ window: s, v5Compat: !0 }));
   let o = i.current,
      [l, a] = w.useState({ action: o.action, location: o.location }),
      { v7_startTransition: u } = r || {},
      c = w.useCallback(
         (f) => {
            u && hf ? hf(() => a(f)) : a(f);
         },
         [a, u]
      );
   return (
      w.useLayoutEffect(() => o.listen(c), [o, c]),
      w.createElement(ax, { basename: t, children: n, location: l.location, navigationType: l.action, navigator: o })
   );
}
var mf;
(function (e) {
   (e.UseScrollRestoration = 'useScrollRestoration'), (e.UseSubmitImpl = 'useSubmitImpl'), (e.UseFetcher = 'useFetcher');
})(mf || (mf = {}));
var yf;
(function (e) {
   (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration');
})(yf || (yf = {}));
const yo = w.createContext(void 0),
   fx = ({ children: e }) => {
      let [t, n] = w.useState({ currentPage: d.jsx(Sm, {}) });
      return d.jsx(yo.Provider, { value: { authPage: t, setAuthPage: n }, children: e });
   },
   dx = () => {
      let { authPage: e } = w.useContext(yo);
      const t = gf.login.map((r, s) =>
            d.jsxs(
               'div',
               {
                  className: 'flex flex-row items-center w-full ml-10 mb-2',
                  children: [
                     d.jsx('span', {
                        className: 'h-4 w-4 rounded-full bg-black flex justify-center mr-2',
                        children: d.jsx('span', { className: 'text-white font-open self-center text-[8px]', children: s + 1 }),
                     }),
                     d.jsx('p', { className: 'text-xs font-open font-medium text-white', children: r }),
                  ],
               },
               s
            )
         ),
         n = gf.signup.map((r, s) =>
            d.jsxs(
               'div',
               {
                  className: 'flex flex-row items-center w-full ml-10 mb-2',
                  children: [
                     d.jsx('span', {
                        className: 'h-4 w-4 rounded-full bg-black flex justify-center mr-2',
                        children: d.jsx('span', { className: 'text-white font-open self-center text-[8px]', children: s + 1 }),
                     }),
                     d.jsx('p', { className: 'text-xs font-open font-medium text-white', children: r }),
                  ],
               },
               s
            )
         );
      return d.jsx('main', {
         className: 'flex justify-center w-full h-screen bg-[#101010]',
         children: d.jsxs('section', {
            className: 'sm:w-[72%] w-[90%] mx-auto h-[70%] flex sm:flex-row self-center items-center',
            children: [
               d.jsxs('div', {
                  className: 'relative w-[45%] h-full sm:flex hidden justify-center',
                  children: [
                     d.jsx('img', { src: hx, className: 'absolute object-cover w-full h-full z-10', alt: 'authImg' }),
                     d.jsx('div', { className: 'w-full h-full bg-[#2B2B2B] bg-opacity-90 z-20 absolute' }),
                     d.jsxs('div', {
                        className: 'flex flex-col items-start w-3/4 mx-auto h-[79%] justify-between z-50 self-center',
                        children: [
                           d.jsx('h1', { className: 'text-3xl text-left font-open text-white', children: 'Authentication' }),
                           d.jsxs('div', {
                              className: 'flex flex-col items-center w-[95%] mr-0 h-[72%] my-auto justify-center',
                              children: [
                                 d.jsxs('section', {
                                    className: 'flex flex-col items-start w-full',
                                    children: [
                                       d.jsx('div', {
                                          className: 'w-auto h-auto py-1 px-3 bg-black bg-opacity-60 rounded shadow',
                                          children: d.jsx('h1', {
                                             className: 'text-sm text-left font-open text-white animate-pulse',
                                             children: 'Sign Up',
                                          }),
                                       }),
                                       d.jsx('div', { className: 'flex flex-col items-center w-full mt-3', children: n }),
                                    ],
                                 }),
                                 d.jsxs('section', {
                                    className: 'flex flex-col items-start w-full mt-5',
                                    children: [
                                       d.jsx('div', {
                                          className: 'w-auto h-auto py-1 px-3 bg-black bg-opacity-60 rounded shadow',
                                          children: d.jsx('h1', {
                                             className: 'text-sm text-left font-open text-white animate-pulse',
                                             children: 'Log in',
                                          }),
                                       }),
                                       d.jsx('div', { className: 'flex flex-col items-center w-full mt-3', children: t }),
                                    ],
                                 }),
                              ],
                           }),
                           d.jsxs('div', {
                              className: 'flex flex-row items-center',
                              children: [
                                 d.jsx('i', { className: 'fa text-3xl self-center text-center place-self-center', children: '' }),
                                 d.jsx('p', { className: 'text-base font-open text-white uppercase', children: 'Twilight' }),
                              ],
                           }),
                        ],
                     }),
                  ],
               }),
               d.jsxs('div', {
                  className: 'sm:w-[55%] w-full bg-white h-full flex flex-col justify-center relative',
                  children: [
                     d.jsx('div', { className: 'w-full h-full z-10 absolute left-0 top-0' }),
                     d.jsxs('div', {
                        className: 'flex flex-col items-center mt-2',
                        children: [
                           d.jsx('div', {
                              className: 'w-[40px] h-[40px] p-0.5 bg-[#F2F2F2] rounded-full shadow-md flex justify-center',
                              children: d.jsx('i', { className: 'fa text-3xl self-center text-center place-self-center', children: '' }),
                           }),
                           d.jsx('p', { className: 'text-base font-open font-semibold text-black uppercase', children: 'Twilight' }),
                        ],
                     }),
                     d.jsx('div', { className: 'w-full h-3/4 my-auto z-30', children: e.currentPage }),
                  ],
               }),
            ],
         }),
      });
   },
   hx = '/assets/greenhouse-02361f01.jpg',
   px = '/assets/B015-bb1d6919.jpg',
   mr =
      'data:image/webp;base64,UklGRi4CAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSNwBAAABkEPbtqk9596PsZ3eRmc76Wwn5Yc4pfFp/NXfW1XSZqS0bdvJb66fD/eL00TEBMh/rWrMilBoxWiVLr2Tr2jxVaJXOqgdpVgsiSrjgrkAb3Jj8dw3ADlBw1QucHGmFhHRsy4DOcqsHUDcI616k0DEqJ7fISaWU1DS26QkXPRY816GuEHqFcwUm7PhpTJnLLzWdvRbGG3OcsgV2/mw1JwoHLN3HCLmROC4vRiEzVkGufbyYak5Y+CNtqPfwShz1CuYbWcuvFDmSAIue615r0JMDO75HZLWMqCkl0kSBVLe1rwZQEiMVjnA5dm6mZ57FchSZkkwB+BtXjye/w4gOyimq0gJFr+HlKRhr/jLll7EekqaqlHLQqFlo5T8rvvHLd68c+fmxeP8aTHswIUqWq06v3+oYb71N7F9Y63XoJWPaF5/tzjz8OHM4nv1NH+43JS+JwFKshZ0klY7LcwuATjRx4gZn4EPO9uLzfa7PgCfphmwphrqEu3FwQ6pOqha5dq2eng2QRye9ALqt7g0rwau9xfH+1yG2kWuDC+FMx3ExY7noHSYC96L8KinuNr9Plz1ObcPygaIy4PKYZ9jugxC4noYSrVTcolT2j3PaS6J4+3HB8VA/6QOzv2bCVZQOCAsAAAAcAMAnQEqQABAAD4pFIlDIaEhEQQAGAKEtIAACBupqAK8QtyAAP7+0BwAAAA=',
   yr =
      'data:image/webp;base64,UklGRoICAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSNsBAAABkLNt2zE5z/vNNxPb+gF2OttJZzspB3HSGaNjq+2tKulT2ma1to1r+eGdOE1ETID816oW7vX79y5QiTIxVkCfBdEJiaDO1mOxLqS0G5gOUJQejqQXAaQN1EylA8/WGSIixvoXQJrS6ywQ8Ui/ZgwIajW+FsJiOQ51E3WKwTOPNfMFRDRSBbBObG6AfKXPIig07BjFsECfPZAutjNhlz4huGPvLgT1CcJde2EI6LMb0u1lwi59FkKRYccogfn6qALYYGcT5Cl9JAovTGvmKwiLxuNrIWYtCeom6CQhIG72ZyYBftFapQEvNhi9jE2vgBSllwxMAyjOiEQySwBSB4ruKliHxVq/kgScEMnvKy88XhJUzd/t9++er+R33bd4x4lz507sWOxLiNnXnrbQb8uTq7M08x55h+23h0yN9n2nd+en3OSbN5NzP3fS+9seXSbfB6hL2TpC+h2xLbUO4N4kLdZWAmXnhorNoefLgIrVGhxshY74UHFwWLwDWva7droT8paLw8vzoPOkS5vb4N00cXzSC2jf7sqceng6Qlwc/hjqZ7tgPoP8qeLq2C/wyuvcZWieIy5Pb4TLjhkNcEVcD0C94ZQ85qHXPc8Dnorjg5cMFg19y4c5928mAFZQOCCAAAAAkAYAnQEqQABAAD4hDIRCIwc8DACBLSAAF5YDx5otzQp3DNsp3qJIGhm7L/W28cOcGi3chbJVIJklLL+AAAD+/w1t3//4H0Akv+3kzfQAABL3ldCVHf//gfYZzzMJjsCCU/AnxR1jxl+A87IAVQQYAAF+En///8FpbIsAAAgAAAA=',
   mx =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADr0lEQVR4nO2dy2pTURSGj068i06kqOhT6MhrJ0p9Bq11pDMn3n0BFUeCcx/AWtQH0GG12LTn/09sECpBx1EqXuhgy4JTUKlJlOSsvU/+D34INMnKXv/al/Ts7JNlQgghhBBCCCGEEEL8I4uLi7sBTAGYAfCW5BeSoSb6Ym0C8MTaaG2NpkDa7fYWADcAfIogUaEidQBcX15e3uya/GazuZfkqwgSEpw0D+CAZ/LbESQhOKttuah82CH5OoLGh0g0W+lwRPJWBI0OMQnAtSpXO6M04YY+1alkdUTyQgSNDTEKwPmhG2BrYe+GMl49rsKAVgQNDTHKvqwN3QCSK94NZbxaqcIA70aGmCUDKAPcq5DqAf6JoIYg/2TQQZoDKAPcq5DqAf6JoIYg/2TQQZoDKAPcq5DqAf6JoIYg/2TQQcnNAQBmiqI43mg0tpnyPD9B8mmqcZIyAF2uo5K8mVqcpAywisx6x3qWSpzkDLDhIOtBnucnU4mTnAEAtveK1Ww2d6QSp5YGtFqtnanESc4AW4VkPQAwnkqc5AywJWDWOzHPE4qTnAHBloBd4txOME5yBgRbAtoqxMbqUuODrMiq46RoQKiTZABlgHsVUj3APxHUEOSfDDpIcwBlwMCrCsASgEckLwI4Yr9MXPs1Sghhgz0medD+RvKSPddrG32deoBxdWlpad//flZ7rb0HyUIG9F/tL0geHULhHAPwUj3g78l/l+f5qWzIADhtsTQE/Z78B3Nzc1uzirBrwgAejvwcAOA7ybOZEwAmy88wepNw2fCJfmKGEDbavFAeCmInlhgfAXwtZY+NaTtEw55rr+nnvYuiODNIE7KEDLjWzyoGwF0AH/7j/T8AuNPPOQ72WUbRgLEuCdlO8j6AbwOI8w3APRv3u8QbkwElAA4DeD+ohPxixHKe54eydRhJA9a7SkVyYhBV3603rDfv2Nwyigas2uXAhYWF/abyBJbVYSX/F/0oiuKyxWw0GntIXhlk3JQMCHWUDKAMcK9Cqgf4J4IagvyTQQdpDqAMcK9Cqgf4J4IagvyTwZrOATqyjOsnH8DnoRtgOxS8q4zxqlmFATq2kr7HVk5FUGkhRhVFcW7oBpSboDrejWV86szPz+/KqmCQ/z9nfXQlqwo7qn3Eb9wQXI+vN3QDB/rdwOEPE2YjqMDgIQBv3G5hsoZ1vXJbxyhNzB3b9NtqtTZlsWArgHKn2bR9IanZN+YVa1O58WuystWOEEIIIYQQQgghhMjqxE9EyUDmrGokmQAAAABJRU5ErkJggg==';
let gf = {
   signup: [
      'Fill all input fields with correct informations',
      'Make sure all input box are greened!',
      'Click button and get authenticated ✅',
   ],
   login: ['Fill all input fields with your login informations', 'Make sure all input box are greened!', 'Login successfully ✅'],
};
class gr {
   constructor() {
      (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
   }
   subscribe(t) {
      const n = { listener: t };
      return (
         this.listeners.add(n),
         this.onSubscribe(),
         () => {
            this.listeners.delete(n), this.onUnsubscribe();
         }
      );
   }
   hasListeners() {
      return this.listeners.size > 0;
   }
   onSubscribe() {}
   onUnsubscribe() {}
}
const hs = typeof window > 'u' || 'Deno' in window;
function ze() {}
function yx(e, t) {
   return typeof e == 'function' ? e(t) : e;
}
function fa(e) {
   return typeof e == 'number' && e >= 0 && e !== 1 / 0;
}
function sm(e, t) {
   return Math.max(e + (t || 0) - Date.now(), 0);
}
function Mr(e, t, n) {
   return Ps(e) ? (typeof t == 'function' ? { ...n, queryKey: e, queryFn: t } : { ...t, queryKey: e }) : e;
}
function gx(e, t, n) {
   return Ps(e)
      ? typeof t == 'function'
         ? { ...n, mutationKey: e, mutationFn: t }
         : { ...t, mutationKey: e }
      : typeof e == 'function'
      ? { ...t, mutationFn: e }
      : { ...e };
}
function Ft(e, t, n) {
   return Ps(e) ? [{ ...t, queryKey: e }, n] : [e || {}, t];
}
function vf(e, t) {
   const { type: n = 'all', exact: r, fetchStatus: s, predicate: i, queryKey: o, stale: l } = e;
   if (Ps(o)) {
      if (r) {
         if (t.queryHash !== Au(o, t.options)) return !1;
      } else if (!Vi(t.queryKey, o)) return !1;
   }
   if (n !== 'all') {
      const a = t.isActive();
      if ((n === 'active' && !a) || (n === 'inactive' && a)) return !1;
   }
   return !((typeof l == 'boolean' && t.isStale() !== l) || (typeof s < 'u' && s !== t.state.fetchStatus) || (i && !i(t)));
}
function xf(e, t) {
   const { exact: n, fetching: r, predicate: s, mutationKey: i } = e;
   if (Ps(i)) {
      if (!t.options.mutationKey) return !1;
      if (n) {
         if (mn(t.options.mutationKey) !== mn(i)) return !1;
      } else if (!Vi(t.options.mutationKey, i)) return !1;
   }
   return !((typeof r == 'boolean' && (t.state.status === 'loading') !== r) || (s && !s(t)));
}
function Au(e, t) {
   return ((t == null ? void 0 : t.queryKeyHashFn) || mn)(e);
}
function mn(e) {
   return JSON.stringify(e, (t, n) =>
      ha(n)
         ? Object.keys(n)
              .sort()
              .reduce((r, s) => ((r[s] = n[s]), r), {})
         : n
   );
}
function Vi(e, t) {
   return im(e, t);
}
function im(e, t) {
   return e === t
      ? !0
      : typeof e != typeof t
      ? !1
      : e && t && typeof e == 'object' && typeof t == 'object'
      ? !Object.keys(t).some((n) => !im(e[n], t[n]))
      : !1;
}
function om(e, t) {
   if (e === t) return e;
   const n = wf(e) && wf(t);
   if (n || (ha(e) && ha(t))) {
      const r = n ? e.length : Object.keys(e).length,
         s = n ? t : Object.keys(t),
         i = s.length,
         o = n ? [] : {};
      let l = 0;
      for (let a = 0; a < i; a++) {
         const u = n ? a : s[a];
         (o[u] = om(e[u], t[u])), o[u] === e[u] && l++;
      }
      return r === i && l === r ? e : o;
   }
   return t;
}
function da(e, t) {
   if ((e && !t) || (t && !e)) return !1;
   for (const n in e) if (e[n] !== t[n]) return !1;
   return !0;
}
function wf(e) {
   return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ha(e) {
   if (!Sf(e)) return !1;
   const t = e.constructor;
   if (typeof t > 'u') return !0;
   const n = t.prototype;
   return !(!Sf(n) || !n.hasOwnProperty('isPrototypeOf'));
}
function Sf(e) {
   return Object.prototype.toString.call(e) === '[object Object]';
}
function Ps(e) {
   return Array.isArray(e);
}
function lm(e) {
   return new Promise((t) => {
      setTimeout(t, e);
   });
}
function Cf(e) {
   lm(0).then(e);
}
function vx() {
   if (typeof AbortController == 'function') return new AbortController();
}
function pa(e, t, n) {
   return n.isDataEqual != null && n.isDataEqual(e, t)
      ? e
      : typeof n.structuralSharing == 'function'
      ? n.structuralSharing(e, t)
      : n.structuralSharing !== !1
      ? om(e, t)
      : t;
}
class xx extends gr {
   constructor() {
      super(),
         (this.setup = (t) => {
            if (!hs && window.addEventListener) {
               const n = () => t();
               return (
                  window.addEventListener('visibilitychange', n, !1),
                  window.addEventListener('focus', n, !1),
                  () => {
                     window.removeEventListener('visibilitychange', n), window.removeEventListener('focus', n);
                  }
               );
            }
         });
   }
   onSubscribe() {
      this.cleanup || this.setEventListener(this.setup);
   }
   onUnsubscribe() {
      if (!this.hasListeners()) {
         var t;
         (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
      }
   }
   setEventListener(t) {
      var n;
      (this.setup = t),
         (n = this.cleanup) == null || n.call(this),
         (this.cleanup = t((r) => {
            typeof r == 'boolean' ? this.setFocused(r) : this.onFocus();
         }));
   }
   setFocused(t) {
      (this.focused = t), t && this.onFocus();
   }
   onFocus() {
      this.listeners.forEach(({ listener: t }) => {
         t();
      });
   }
   isFocused() {
      return typeof this.focused == 'boolean'
         ? this.focused
         : typeof document > 'u'
         ? !0
         : [void 0, 'visible', 'prerender'].includes(document.visibilityState);
   }
}
const _i = new xx(),
   Pf = ['online', 'offline'];
class wx extends gr {
   constructor() {
      super(),
         (this.setup = (t) => {
            if (!hs && window.addEventListener) {
               const n = () => t();
               return (
                  Pf.forEach((r) => {
                     window.addEventListener(r, n, !1);
                  }),
                  () => {
                     Pf.forEach((r) => {
                        window.removeEventListener(r, n);
                     });
                  }
               );
            }
         });
   }
   onSubscribe() {
      this.cleanup || this.setEventListener(this.setup);
   }
   onUnsubscribe() {
      if (!this.hasListeners()) {
         var t;
         (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
      }
   }
   setEventListener(t) {
      var n;
      (this.setup = t),
         (n = this.cleanup) == null || n.call(this),
         (this.cleanup = t((r) => {
            typeof r == 'boolean' ? this.setOnline(r) : this.onOnline();
         }));
   }
   setOnline(t) {
      (this.online = t), t && this.onOnline();
   }
   onOnline() {
      this.listeners.forEach(({ listener: t }) => {
         t();
      });
   }
   isOnline() {
      return typeof this.online == 'boolean'
         ? this.online
         : typeof navigator > 'u' || typeof navigator.onLine > 'u'
         ? !0
         : navigator.onLine;
   }
}
const Bi = new wx();
function Sx(e) {
   return Math.min(1e3 * 2 ** e, 3e4);
}
function go(e) {
   return (e ?? 'online') === 'online' ? Bi.isOnline() : !0;
}
class am {
   constructor(t) {
      (this.revert = t == null ? void 0 : t.revert), (this.silent = t == null ? void 0 : t.silent);
   }
}
function ci(e) {
   return e instanceof am;
}
function um(e) {
   let t = !1,
      n = 0,
      r = !1,
      s,
      i,
      o;
   const l = new Promise((C, y) => {
         (i = C), (o = y);
      }),
      a = (C) => {
         r || (m(new am(C)), e.abort == null || e.abort());
      },
      u = () => {
         t = !0;
      },
      c = () => {
         t = !1;
      },
      f = () => !_i.isFocused() || (e.networkMode !== 'always' && !Bi.isOnline()),
      h = (C) => {
         r || ((r = !0), e.onSuccess == null || e.onSuccess(C), s == null || s(), i(C));
      },
      m = (C) => {
         r || ((r = !0), e.onError == null || e.onError(C), s == null || s(), o(C));
      },
      v = () =>
         new Promise((C) => {
            (s = (y) => {
               const p = r || !f();
               return p && C(y), p;
            }),
               e.onPause == null || e.onPause();
         }).then(() => {
            (s = void 0), r || e.onContinue == null || e.onContinue();
         }),
      x = () => {
         if (r) return;
         let C;
         try {
            C = e.fn();
         } catch (y) {
            C = Promise.reject(y);
         }
         Promise.resolve(C)
            .then(h)
            .catch((y) => {
               var p, g;
               if (r) return;
               const S = (p = e.retry) != null ? p : 3,
                  j = (g = e.retryDelay) != null ? g : Sx,
                  k = typeof j == 'function' ? j(n, y) : j,
                  E = S === !0 || (typeof S == 'number' && n < S) || (typeof S == 'function' && S(n, y));
               if (t || !E) {
                  m(y);
                  return;
               }
               n++,
                  e.onFail == null || e.onFail(n, y),
                  lm(k)
                     .then(() => {
                        if (f()) return v();
                     })
                     .then(() => {
                        t ? m(y) : x();
                     });
            });
      };
   return (
      go(e.networkMode) ? x() : v().then(x),
      { promise: l, cancel: a, continue: () => ((s == null ? void 0 : s()) ? l : Promise.resolve()), cancelRetry: u, continueRetry: c }
   );
}
const Tu = console;
function Cx() {
   let e = [],
      t = 0,
      n = (c) => {
         c();
      },
      r = (c) => {
         c();
      };
   const s = (c) => {
         let f;
         t++;
         try {
            f = c();
         } finally {
            t--, t || l();
         }
         return f;
      },
      i = (c) => {
         t
            ? e.push(c)
            : Cf(() => {
                 n(c);
              });
      },
      o =
         (c) =>
         (...f) => {
            i(() => {
               c(...f);
            });
         },
      l = () => {
         const c = e;
         (e = []),
            c.length &&
               Cf(() => {
                  r(() => {
                     c.forEach((f) => {
                        n(f);
                     });
                  });
               });
      };
   return {
      batch: s,
      batchCalls: o,
      schedule: i,
      setNotifyFunction: (c) => {
         n = c;
      },
      setBatchNotifyFunction: (c) => {
         r = c;
      },
   };
}
const Z = Cx();
class cm {
   destroy() {
      this.clearGcTimeout();
   }
   scheduleGc() {
      this.clearGcTimeout(),
         fa(this.cacheTime) &&
            (this.gcTimeout = setTimeout(() => {
               this.optionalRemove();
            }, this.cacheTime));
   }
   updateCacheTime(t) {
      this.cacheTime = Math.max(this.cacheTime || 0, t ?? (hs ? 1 / 0 : 5 * 60 * 1e3));
   }
   clearGcTimeout() {
      this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
   }
}
class Px extends cm {
   constructor(t) {
      super(),
         (this.abortSignalConsumed = !1),
         (this.defaultOptions = t.defaultOptions),
         this.setOptions(t.options),
         (this.observers = []),
         (this.cache = t.cache),
         (this.logger = t.logger || Tu),
         (this.queryKey = t.queryKey),
         (this.queryHash = t.queryHash),
         (this.initialState = t.state || jx(this.options)),
         (this.state = this.initialState),
         this.scheduleGc();
   }
   get meta() {
      return this.options.meta;
   }
   setOptions(t) {
      (this.options = { ...this.defaultOptions, ...t }), this.updateCacheTime(this.options.cacheTime);
   }
   optionalRemove() {
      !this.observers.length && this.state.fetchStatus === 'idle' && this.cache.remove(this);
   }
   setData(t, n) {
      const r = pa(this.state.data, t, this.options);
      return (
         this.dispatch({
            data: r,
            type: 'success',
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
         }),
         r
      );
   }
   setState(t, n) {
      this.dispatch({ type: 'setState', state: t, setStateOptions: n });
   }
   cancel(t) {
      var n;
      const r = this.promise;
      return (n = this.retryer) == null || n.cancel(t), r ? r.then(ze).catch(ze) : Promise.resolve();
   }
   destroy() {
      super.destroy(), this.cancel({ silent: !0 });
   }
   reset() {
      this.destroy(), this.setState(this.initialState);
   }
   isActive() {
      return this.observers.some((t) => t.options.enabled !== !1);
   }
   isDisabled() {
      return this.getObserversCount() > 0 && !this.isActive();
   }
   isStale() {
      return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((t) => t.getCurrentResult().isStale);
   }
   isStaleByTime(t = 0) {
      return this.state.isInvalidated || !this.state.dataUpdatedAt || !sm(this.state.dataUpdatedAt, t);
   }
   onFocus() {
      var t;
      const n = this.observers.find((r) => r.shouldFetchOnWindowFocus());
      n && n.refetch({ cancelRefetch: !1 }), (t = this.retryer) == null || t.continue();
   }
   onOnline() {
      var t;
      const n = this.observers.find((r) => r.shouldFetchOnReconnect());
      n && n.refetch({ cancelRefetch: !1 }), (t = this.retryer) == null || t.continue();
   }
   addObserver(t) {
      this.observers.includes(t) ||
         (this.observers.push(t), this.clearGcTimeout(), this.cache.notify({ type: 'observerAdded', query: this, observer: t }));
   }
   removeObserver(t) {
      this.observers.includes(t) &&
         ((this.observers = this.observers.filter((n) => n !== t)),
         this.observers.length ||
            (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({ revert: !0 }) : this.retryer.cancelRetry()),
            this.scheduleGc()),
         this.cache.notify({ type: 'observerRemoved', query: this, observer: t }));
   }
   getObserversCount() {
      return this.observers.length;
   }
   invalidate() {
      this.state.isInvalidated || this.dispatch({ type: 'invalidate' });
   }
   fetch(t, n) {
      var r, s;
      if (this.state.fetchStatus !== 'idle') {
         if (this.state.dataUpdatedAt && n != null && n.cancelRefetch) this.cancel({ silent: !0 });
         else if (this.promise) {
            var i;
            return (i = this.retryer) == null || i.continueRetry(), this.promise;
         }
      }
      if ((t && this.setOptions(t), !this.options.queryFn)) {
         const m = this.observers.find((v) => v.options.queryFn);
         m && this.setOptions(m.options);
      }
      Array.isArray(this.options.queryKey);
      const o = vx(),
         l = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
         a = (m) => {
            Object.defineProperty(m, 'signal', {
               enumerable: !0,
               get: () => {
                  if (o) return (this.abortSignalConsumed = !0), o.signal;
               },
            });
         };
      a(l);
      const u = () =>
            this.options.queryFn
               ? ((this.abortSignalConsumed = !1), this.options.queryFn(l))
               : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"),
         c = { fetchOptions: n, options: this.options, queryKey: this.queryKey, state: this.state, fetchFn: u };
      if (
         (a(c),
         (r = this.options.behavior) == null || r.onFetch(c),
         (this.revertState = this.state),
         this.state.fetchStatus === 'idle' || this.state.fetchMeta !== ((s = c.fetchOptions) == null ? void 0 : s.meta))
      ) {
         var f;
         this.dispatch({ type: 'fetch', meta: (f = c.fetchOptions) == null ? void 0 : f.meta });
      }
      const h = (m) => {
         if (((ci(m) && m.silent) || this.dispatch({ type: 'error', error: m }), !ci(m))) {
            var v, x, C, y;
            (v = (x = this.cache.config).onError) == null || v.call(x, m, this),
               (C = (y = this.cache.config).onSettled) == null || C.call(y, this.state.data, m, this);
         }
         this.isFetchingOptimistic || this.scheduleGc(), (this.isFetchingOptimistic = !1);
      };
      return (
         (this.retryer = um({
            fn: c.fetchFn,
            abort: o == null ? void 0 : o.abort.bind(o),
            onSuccess: (m) => {
               var v, x, C, y;
               if (typeof m > 'u') {
                  h(new Error(this.queryHash + ' data is undefined'));
                  return;
               }
               this.setData(m),
                  (v = (x = this.cache.config).onSuccess) == null || v.call(x, m, this),
                  (C = (y = this.cache.config).onSettled) == null || C.call(y, m, this.state.error, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
            },
            onError: h,
            onFail: (m, v) => {
               this.dispatch({ type: 'failed', failureCount: m, error: v });
            },
            onPause: () => {
               this.dispatch({ type: 'pause' });
            },
            onContinue: () => {
               this.dispatch({ type: 'continue' });
            },
            retry: c.options.retry,
            retryDelay: c.options.retryDelay,
            networkMode: c.options.networkMode,
         })),
         (this.promise = this.retryer.promise),
         this.promise
      );
   }
   dispatch(t) {
      const n = (r) => {
         var s, i;
         switch (t.type) {
            case 'failed':
               return { ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
            case 'pause':
               return { ...r, fetchStatus: 'paused' };
            case 'continue':
               return { ...r, fetchStatus: 'fetching' };
            case 'fetch':
               return {
                  ...r,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: (s = t.meta) != null ? s : null,
                  fetchStatus: go(this.options.networkMode) ? 'fetching' : 'paused',
                  ...(!r.dataUpdatedAt && { error: null, status: 'loading' }),
               };
            case 'success':
               return {
                  ...r,
                  data: t.data,
                  dataUpdateCount: r.dataUpdateCount + 1,
                  dataUpdatedAt: (i = t.dataUpdatedAt) != null ? i : Date.now(),
                  error: null,
                  isInvalidated: !1,
                  status: 'success',
                  ...(!t.manual && { fetchStatus: 'idle', fetchFailureCount: 0, fetchFailureReason: null }),
               };
            case 'error':
               const o = t.error;
               return ci(o) && o.revert && this.revertState
                  ? { ...this.revertState }
                  : {
                       ...r,
                       error: o,
                       errorUpdateCount: r.errorUpdateCount + 1,
                       errorUpdatedAt: Date.now(),
                       fetchFailureCount: r.fetchFailureCount + 1,
                       fetchFailureReason: o,
                       fetchStatus: 'idle',
                       status: 'error',
                    };
            case 'invalidate':
               return { ...r, isInvalidated: !0 };
            case 'setState':
               return { ...r, ...t.state };
         }
      };
      (this.state = n(this.state)),
         Z.batch(() => {
            this.observers.forEach((r) => {
               r.onQueryUpdate(t);
            }),
               this.cache.notify({ query: this, type: 'updated', action: t });
         });
   }
}
function jx(e) {
   const t = typeof e.initialData == 'function' ? e.initialData() : e.initialData,
      n = typeof t < 'u',
      r = n ? (typeof e.initialDataUpdatedAt == 'function' ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt) : 0;
   return {
      data: t,
      dataUpdateCount: 0,
      dataUpdatedAt: n ? r ?? Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchMeta: null,
      isInvalidated: !1,
      status: n ? 'success' : 'loading',
      fetchStatus: 'idle',
   };
}
class Ex extends gr {
   constructor(t) {
      super(), (this.config = t || {}), (this.queries = []), (this.queriesMap = {});
   }
   build(t, n, r) {
      var s;
      const i = n.queryKey,
         o = (s = n.queryHash) != null ? s : Au(i, n);
      let l = this.get(o);
      return (
         l ||
            ((l = new Px({
               cache: this,
               logger: t.getLogger(),
               queryKey: i,
               queryHash: o,
               options: t.defaultQueryOptions(n),
               state: r,
               defaultOptions: t.getQueryDefaults(i),
            })),
            this.add(l)),
         l
      );
   }
   add(t) {
      this.queriesMap[t.queryHash] || ((this.queriesMap[t.queryHash] = t), this.queries.push(t), this.notify({ type: 'added', query: t }));
   }
   remove(t) {
      const n = this.queriesMap[t.queryHash];
      n &&
         (t.destroy(),
         (this.queries = this.queries.filter((r) => r !== t)),
         n === t && delete this.queriesMap[t.queryHash],
         this.notify({ type: 'removed', query: t }));
   }
   clear() {
      Z.batch(() => {
         this.queries.forEach((t) => {
            this.remove(t);
         });
      });
   }
   get(t) {
      return this.queriesMap[t];
   }
   getAll() {
      return this.queries;
   }
   find(t, n) {
      const [r] = Ft(t, n);
      return typeof r.exact > 'u' && (r.exact = !0), this.queries.find((s) => vf(r, s));
   }
   findAll(t, n) {
      const [r] = Ft(t, n);
      return Object.keys(r).length > 0 ? this.queries.filter((s) => vf(r, s)) : this.queries;
   }
   notify(t) {
      Z.batch(() => {
         this.listeners.forEach(({ listener: n }) => {
            n(t);
         });
      });
   }
   onFocus() {
      Z.batch(() => {
         this.queries.forEach((t) => {
            t.onFocus();
         });
      });
   }
   onOnline() {
      Z.batch(() => {
         this.queries.forEach((t) => {
            t.onOnline();
         });
      });
   }
}
class kx extends cm {
   constructor(t) {
      super(),
         (this.defaultOptions = t.defaultOptions),
         (this.mutationId = t.mutationId),
         (this.mutationCache = t.mutationCache),
         (this.logger = t.logger || Tu),
         (this.observers = []),
         (this.state = t.state || fm()),
         this.setOptions(t.options),
         this.scheduleGc();
   }
   setOptions(t) {
      (this.options = { ...this.defaultOptions, ...t }), this.updateCacheTime(this.options.cacheTime);
   }
   get meta() {
      return this.options.meta;
   }
   setState(t) {
      this.dispatch({ type: 'setState', state: t });
   }
   addObserver(t) {
      this.observers.includes(t) ||
         (this.observers.push(t), this.clearGcTimeout(), this.mutationCache.notify({ type: 'observerAdded', mutation: this, observer: t }));
   }
   removeObserver(t) {
      (this.observers = this.observers.filter((n) => n !== t)),
         this.scheduleGc(),
         this.mutationCache.notify({ type: 'observerRemoved', mutation: this, observer: t });
   }
   optionalRemove() {
      this.observers.length || (this.state.status === 'loading' ? this.scheduleGc() : this.mutationCache.remove(this));
   }
   continue() {
      var t, n;
      return (t = (n = this.retryer) == null ? void 0 : n.continue()) != null ? t : this.execute();
   }
   async execute() {
      const t = () => {
            var E;
            return (
               (this.retryer = um({
                  fn: () =>
                     this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject('No mutationFn found'),
                  onFail: (P, R) => {
                     this.dispatch({ type: 'failed', failureCount: P, error: R });
                  },
                  onPause: () => {
                     this.dispatch({ type: 'pause' });
                  },
                  onContinue: () => {
                     this.dispatch({ type: 'continue' });
                  },
                  retry: (E = this.options.retry) != null ? E : 0,
                  retryDelay: this.options.retryDelay,
                  networkMode: this.options.networkMode,
               })),
               this.retryer.promise
            );
         },
         n = this.state.status === 'loading';
      try {
         var r, s, i, o, l, a, u, c;
         if (!n) {
            var f, h, m, v;
            this.dispatch({ type: 'loading', variables: this.options.variables }),
               await ((f = (h = this.mutationCache.config).onMutate) == null ? void 0 : f.call(h, this.state.variables, this));
            const P = await ((m = (v = this.options).onMutate) == null ? void 0 : m.call(v, this.state.variables));
            P !== this.state.context && this.dispatch({ type: 'loading', context: P, variables: this.state.variables });
         }
         const E = await t();
         return (
            await ((r = (s = this.mutationCache.config).onSuccess) == null
               ? void 0
               : r.call(s, E, this.state.variables, this.state.context, this)),
            await ((i = (o = this.options).onSuccess) == null ? void 0 : i.call(o, E, this.state.variables, this.state.context)),
            await ((l = (a = this.mutationCache.config).onSettled) == null
               ? void 0
               : l.call(a, E, null, this.state.variables, this.state.context, this)),
            await ((u = (c = this.options).onSettled) == null ? void 0 : u.call(c, E, null, this.state.variables, this.state.context)),
            this.dispatch({ type: 'success', data: E }),
            E
         );
      } catch (E) {
         try {
            var x, C, y, p, g, S, j, k;
            throw (
               (await ((x = (C = this.mutationCache.config).onError) == null
                  ? void 0
                  : x.call(C, E, this.state.variables, this.state.context, this)),
               await ((y = (p = this.options).onError) == null ? void 0 : y.call(p, E, this.state.variables, this.state.context)),
               await ((g = (S = this.mutationCache.config).onSettled) == null
                  ? void 0
                  : g.call(S, void 0, E, this.state.variables, this.state.context, this)),
               await ((j = (k = this.options).onSettled) == null ? void 0 : j.call(k, void 0, E, this.state.variables, this.state.context)),
               E)
            );
         } finally {
            this.dispatch({ type: 'error', error: E });
         }
      }
   }
   dispatch(t) {
      const n = (r) => {
         switch (t.type) {
            case 'failed':
               return { ...r, failureCount: t.failureCount, failureReason: t.error };
            case 'pause':
               return { ...r, isPaused: !0 };
            case 'continue':
               return { ...r, isPaused: !1 };
            case 'loading':
               return {
                  ...r,
                  context: t.context,
                  data: void 0,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  isPaused: !go(this.options.networkMode),
                  status: 'loading',
                  variables: t.variables,
               };
            case 'success':
               return { ...r, data: t.data, failureCount: 0, failureReason: null, error: null, status: 'success', isPaused: !1 };
            case 'error':
               return {
                  ...r,
                  data: void 0,
                  error: t.error,
                  failureCount: r.failureCount + 1,
                  failureReason: t.error,
                  isPaused: !1,
                  status: 'error',
               };
            case 'setState':
               return { ...r, ...t.state };
         }
      };
      (this.state = n(this.state)),
         Z.batch(() => {
            this.observers.forEach((r) => {
               r.onMutationUpdate(t);
            }),
               this.mutationCache.notify({ mutation: this, type: 'updated', action: t });
         });
   }
}
function fm() {
   return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: !1,
      status: 'idle',
      variables: void 0,
   };
}
class Ax extends gr {
   constructor(t) {
      super(), (this.config = t || {}), (this.mutations = []), (this.mutationId = 0);
   }
   build(t, n, r) {
      const s = new kx({
         mutationCache: this,
         logger: t.getLogger(),
         mutationId: ++this.mutationId,
         options: t.defaultMutationOptions(n),
         state: r,
         defaultOptions: n.mutationKey ? t.getMutationDefaults(n.mutationKey) : void 0,
      });
      return this.add(s), s;
   }
   add(t) {
      this.mutations.push(t), this.notify({ type: 'added', mutation: t });
   }
   remove(t) {
      (this.mutations = this.mutations.filter((n) => n !== t)), this.notify({ type: 'removed', mutation: t });
   }
   clear() {
      Z.batch(() => {
         this.mutations.forEach((t) => {
            this.remove(t);
         });
      });
   }
   getAll() {
      return this.mutations;
   }
   find(t) {
      return typeof t.exact > 'u' && (t.exact = !0), this.mutations.find((n) => xf(t, n));
   }
   findAll(t) {
      return this.mutations.filter((n) => xf(t, n));
   }
   notify(t) {
      Z.batch(() => {
         this.listeners.forEach(({ listener: n }) => {
            n(t);
         });
      });
   }
   resumePausedMutations() {
      var t;
      return (
         (this.resuming = ((t = this.resuming) != null ? t : Promise.resolve())
            .then(() => {
               const n = this.mutations.filter((r) => r.state.isPaused);
               return Z.batch(() => n.reduce((r, s) => r.then(() => s.continue().catch(ze)), Promise.resolve()));
            })
            .then(() => {
               this.resuming = void 0;
            })),
         this.resuming
      );
   }
}
function Tx() {
   return {
      onFetch: (e) => {
         e.fetchFn = () => {
            var t, n, r, s, i, o;
            const l = (t = e.fetchOptions) == null || (n = t.meta) == null ? void 0 : n.refetchPage,
               a = (r = e.fetchOptions) == null || (s = r.meta) == null ? void 0 : s.fetchMore,
               u = a == null ? void 0 : a.pageParam,
               c = (a == null ? void 0 : a.direction) === 'forward',
               f = (a == null ? void 0 : a.direction) === 'backward',
               h = ((i = e.state.data) == null ? void 0 : i.pages) || [],
               m = ((o = e.state.data) == null ? void 0 : o.pageParams) || [];
            let v = m,
               x = !1;
            const C = (k) => {
                  Object.defineProperty(k, 'signal', {
                     enumerable: !0,
                     get: () => {
                        var E;
                        if ((E = e.signal) != null && E.aborted) x = !0;
                        else {
                           var P;
                           (P = e.signal) == null ||
                              P.addEventListener('abort', () => {
                                 x = !0;
                              });
                        }
                        return e.signal;
                     },
                  });
               },
               y = e.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + e.options.queryHash + "'")),
               p = (k, E, P, R) => ((v = R ? [E, ...v] : [...v, E]), R ? [P, ...k] : [...k, P]),
               g = (k, E, P, R) => {
                  if (x) return Promise.reject('Cancelled');
                  if (typeof P > 'u' && !E && k.length) return Promise.resolve(k);
                  const F = { queryKey: e.queryKey, pageParam: P, meta: e.options.meta };
                  C(F);
                  const B = y(F);
                  return Promise.resolve(B).then((je) => p(k, P, je, R));
               };
            let S;
            if (!h.length) S = g([]);
            else if (c) {
               const k = typeof u < 'u',
                  E = k ? u : jf(e.options, h);
               S = g(h, k, E);
            } else if (f) {
               const k = typeof u < 'u',
                  E = k ? u : Nx(e.options, h);
               S = g(h, k, E, !0);
            } else {
               v = [];
               const k = typeof e.options.getNextPageParam > 'u';
               S = (l && h[0] ? l(h[0], 0, h) : !0) ? g([], k, m[0]) : Promise.resolve(p([], m[0], h[0]));
               for (let P = 1; P < h.length; P++)
                  S = S.then((R) => {
                     if (l && h[P] ? l(h[P], P, h) : !0) {
                        const B = k ? m[P] : jf(e.options, R);
                        return g(R, k, B);
                     }
                     return Promise.resolve(p(R, m[P], h[P]));
                  });
            }
            return S.then((k) => ({ pages: k, pageParams: v }));
         };
      },
   };
}
function jf(e, t) {
   return e.getNextPageParam == null ? void 0 : e.getNextPageParam(t[t.length - 1], t);
}
function Nx(e, t) {
   return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(t[0], t);
}
class Rx {
   constructor(t = {}) {
      (this.queryCache = t.queryCache || new Ex()),
         (this.mutationCache = t.mutationCache || new Ax()),
         (this.logger = t.logger || Tu),
         (this.defaultOptions = t.defaultOptions || {}),
         (this.queryDefaults = []),
         (this.mutationDefaults = []),
         (this.mountCount = 0);
   }
   mount() {
      this.mountCount++,
         this.mountCount === 1 &&
            ((this.unsubscribeFocus = _i.subscribe(() => {
               _i.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
            })),
            (this.unsubscribeOnline = Bi.subscribe(() => {
               Bi.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
            })));
   }
   unmount() {
      var t, n;
      this.mountCount--,
         this.mountCount === 0 &&
            ((t = this.unsubscribeFocus) == null || t.call(this),
            (this.unsubscribeFocus = void 0),
            (n = this.unsubscribeOnline) == null || n.call(this),
            (this.unsubscribeOnline = void 0));
   }
   isFetching(t, n) {
      const [r] = Ft(t, n);
      return (r.fetchStatus = 'fetching'), this.queryCache.findAll(r).length;
   }
   isMutating(t) {
      return this.mutationCache.findAll({ ...t, fetching: !0 }).length;
   }
   getQueryData(t, n) {
      var r;
      return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state.data;
   }
   ensureQueryData(t, n, r) {
      const s = Mr(t, n, r),
         i = this.getQueryData(s.queryKey);
      return i ? Promise.resolve(i) : this.fetchQuery(s);
   }
   getQueriesData(t) {
      return this.getQueryCache()
         .findAll(t)
         .map(({ queryKey: n, state: r }) => {
            const s = r.data;
            return [n, s];
         });
   }
   setQueryData(t, n, r) {
      const s = this.queryCache.find(t),
         i = s == null ? void 0 : s.state.data,
         o = yx(n, i);
      if (typeof o > 'u') return;
      const l = Mr(t),
         a = this.defaultQueryOptions(l);
      return this.queryCache.build(this, a).setData(o, { ...r, manual: !0 });
   }
   setQueriesData(t, n, r) {
      return Z.batch(() =>
         this.getQueryCache()
            .findAll(t)
            .map(({ queryKey: s }) => [s, this.setQueryData(s, n, r)])
      );
   }
   getQueryState(t, n) {
      var r;
      return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state;
   }
   removeQueries(t, n) {
      const [r] = Ft(t, n),
         s = this.queryCache;
      Z.batch(() => {
         s.findAll(r).forEach((i) => {
            s.remove(i);
         });
      });
   }
   resetQueries(t, n, r) {
      const [s, i] = Ft(t, n, r),
         o = this.queryCache,
         l = { type: 'active', ...s };
      return Z.batch(
         () => (
            o.findAll(s).forEach((a) => {
               a.reset();
            }),
            this.refetchQueries(l, i)
         )
      );
   }
   cancelQueries(t, n, r) {
      const [s, i = {}] = Ft(t, n, r);
      typeof i.revert > 'u' && (i.revert = !0);
      const o = Z.batch(() => this.queryCache.findAll(s).map((l) => l.cancel(i)));
      return Promise.all(o).then(ze).catch(ze);
   }
   invalidateQueries(t, n, r) {
      const [s, i] = Ft(t, n, r);
      return Z.batch(() => {
         var o, l;
         if (
            (this.queryCache.findAll(s).forEach((u) => {
               u.invalidate();
            }),
            s.refetchType === 'none')
         )
            return Promise.resolve();
         const a = { ...s, type: (o = (l = s.refetchType) != null ? l : s.type) != null ? o : 'active' };
         return this.refetchQueries(a, i);
      });
   }
   refetchQueries(t, n, r) {
      const [s, i] = Ft(t, n, r),
         o = Z.batch(() =>
            this.queryCache
               .findAll(s)
               .filter((a) => !a.isDisabled())
               .map((a) => {
                  var u;
                  return a.fetch(void 0, {
                     ...i,
                     cancelRefetch: (u = i == null ? void 0 : i.cancelRefetch) != null ? u : !0,
                     meta: { refetchPage: s.refetchPage },
                  });
               })
         );
      let l = Promise.all(o).then(ze);
      return (i != null && i.throwOnError) || (l = l.catch(ze)), l;
   }
   fetchQuery(t, n, r) {
      const s = Mr(t, n, r),
         i = this.defaultQueryOptions(s);
      typeof i.retry > 'u' && (i.retry = !1);
      const o = this.queryCache.build(this, i);
      return o.isStaleByTime(i.staleTime) ? o.fetch(i) : Promise.resolve(o.state.data);
   }
   prefetchQuery(t, n, r) {
      return this.fetchQuery(t, n, r).then(ze).catch(ze);
   }
   fetchInfiniteQuery(t, n, r) {
      const s = Mr(t, n, r);
      return (s.behavior = Tx()), this.fetchQuery(s);
   }
   prefetchInfiniteQuery(t, n, r) {
      return this.fetchInfiniteQuery(t, n, r).then(ze).catch(ze);
   }
   resumePausedMutations() {
      return this.mutationCache.resumePausedMutations();
   }
   getQueryCache() {
      return this.queryCache;
   }
   getMutationCache() {
      return this.mutationCache;
   }
   getLogger() {
      return this.logger;
   }
   getDefaultOptions() {
      return this.defaultOptions;
   }
   setDefaultOptions(t) {
      this.defaultOptions = t;
   }
   setQueryDefaults(t, n) {
      const r = this.queryDefaults.find((s) => mn(t) === mn(s.queryKey));
      r ? (r.defaultOptions = n) : this.queryDefaults.push({ queryKey: t, defaultOptions: n });
   }
   getQueryDefaults(t) {
      if (!t) return;
      const n = this.queryDefaults.find((r) => Vi(t, r.queryKey));
      return n == null ? void 0 : n.defaultOptions;
   }
   setMutationDefaults(t, n) {
      const r = this.mutationDefaults.find((s) => mn(t) === mn(s.mutationKey));
      r ? (r.defaultOptions = n) : this.mutationDefaults.push({ mutationKey: t, defaultOptions: n });
   }
   getMutationDefaults(t) {
      if (!t) return;
      const n = this.mutationDefaults.find((r) => Vi(t, r.mutationKey));
      return n == null ? void 0 : n.defaultOptions;
   }
   defaultQueryOptions(t) {
      if (t != null && t._defaulted) return t;
      const n = { ...this.defaultOptions.queries, ...this.getQueryDefaults(t == null ? void 0 : t.queryKey), ...t, _defaulted: !0 };
      return (
         !n.queryHash && n.queryKey && (n.queryHash = Au(n.queryKey, n)),
         typeof n.refetchOnReconnect > 'u' && (n.refetchOnReconnect = n.networkMode !== 'always'),
         typeof n.useErrorBoundary > 'u' && (n.useErrorBoundary = !!n.suspense),
         n
      );
   }
   defaultMutationOptions(t) {
      return t != null && t._defaulted
         ? t
         : { ...this.defaultOptions.mutations, ...this.getMutationDefaults(t == null ? void 0 : t.mutationKey), ...t, _defaulted: !0 };
   }
   clear() {
      this.queryCache.clear(), this.mutationCache.clear();
   }
}
class Fx extends gr {
   constructor(t, n) {
      super(),
         (this.client = t),
         (this.options = n),
         (this.trackedProps = new Set()),
         (this.selectError = null),
         this.bindMethods(),
         this.setOptions(n);
   }
   bindMethods() {
      (this.remove = this.remove.bind(this)), (this.refetch = this.refetch.bind(this));
   }
   onSubscribe() {
      this.listeners.size === 1 &&
         (this.currentQuery.addObserver(this), Ef(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
   }
   onUnsubscribe() {
      this.hasListeners() || this.destroy();
   }
   shouldFetchOnReconnect() {
      return ma(this.currentQuery, this.options, this.options.refetchOnReconnect);
   }
   shouldFetchOnWindowFocus() {
      return ma(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
   }
   destroy() {
      (this.listeners = new Set()), this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
   }
   setOptions(t, n) {
      const r = this.options,
         s = this.currentQuery;
      if (
         ((this.options = this.client.defaultQueryOptions(t)),
         da(r, this.options) ||
            this.client.getQueryCache().notify({ type: 'observerOptionsUpdated', query: this.currentQuery, observer: this }),
         typeof this.options.enabled < 'u' && typeof this.options.enabled != 'boolean')
      )
         throw new Error('Expected enabled to be a boolean');
      this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
      const i = this.hasListeners();
      i && kf(this.currentQuery, s, this.options, r) && this.executeFetch(),
         this.updateResult(n),
         i &&
            (this.currentQuery !== s || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) &&
            this.updateStaleTimeout();
      const o = this.computeRefetchInterval();
      i &&
         (this.currentQuery !== s || this.options.enabled !== r.enabled || o !== this.currentRefetchInterval) &&
         this.updateRefetchInterval(o);
   }
   getOptimisticResult(t) {
      const n = this.client.getQueryCache().build(this.client, t);
      return this.createResult(n, t);
   }
   getCurrentResult() {
      return this.currentResult;
   }
   trackResult(t) {
      const n = {};
      return (
         Object.keys(t).forEach((r) => {
            Object.defineProperty(n, r, { configurable: !1, enumerable: !0, get: () => (this.trackedProps.add(r), t[r]) });
         }),
         n
      );
   }
   getCurrentQuery() {
      return this.currentQuery;
   }
   remove() {
      this.client.getQueryCache().remove(this.currentQuery);
   }
   refetch({ refetchPage: t, ...n } = {}) {
      return this.fetch({ ...n, meta: { refetchPage: t } });
   }
   fetchOptimistic(t) {
      const n = this.client.defaultQueryOptions(t),
         r = this.client.getQueryCache().build(this.client, n);
      return (r.isFetchingOptimistic = !0), r.fetch().then(() => this.createResult(r, n));
   }
   fetch(t) {
      var n;
      return this.executeFetch({ ...t, cancelRefetch: (n = t.cancelRefetch) != null ? n : !0 }).then(
         () => (this.updateResult(), this.currentResult)
      );
   }
   executeFetch(t) {
      this.updateQuery();
      let n = this.currentQuery.fetch(this.options, t);
      return (t != null && t.throwOnError) || (n = n.catch(ze)), n;
   }
   updateStaleTimeout() {
      if ((this.clearStaleTimeout(), hs || this.currentResult.isStale || !fa(this.options.staleTime))) return;
      const n = sm(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
      this.staleTimeoutId = setTimeout(() => {
         this.currentResult.isStale || this.updateResult();
      }, n);
   }
   computeRefetchInterval() {
      var t;
      return typeof this.options.refetchInterval == 'function'
         ? this.options.refetchInterval(this.currentResult.data, this.currentQuery)
         : (t = this.options.refetchInterval) != null
         ? t
         : !1;
   }
   updateRefetchInterval(t) {
      this.clearRefetchInterval(),
         (this.currentRefetchInterval = t),
         !(hs || this.options.enabled === !1 || !fa(this.currentRefetchInterval) || this.currentRefetchInterval === 0) &&
            (this.refetchIntervalId = setInterval(() => {
               (this.options.refetchIntervalInBackground || _i.isFocused()) && this.executeFetch();
            }, this.currentRefetchInterval));
   }
   updateTimers() {
      this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval());
   }
   clearStaleTimeout() {
      this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
   }
   clearRefetchInterval() {
      this.refetchIntervalId && (clearInterval(this.refetchIntervalId), (this.refetchIntervalId = void 0));
   }
   createResult(t, n) {
      const r = this.currentQuery,
         s = this.options,
         i = this.currentResult,
         o = this.currentResultState,
         l = this.currentResultOptions,
         a = t !== r,
         u = a ? t.state : this.currentQueryInitialState,
         c = a ? this.currentResult : this.previousQueryResult,
         { state: f } = t;
      let { dataUpdatedAt: h, error: m, errorUpdatedAt: v, fetchStatus: x, status: C } = f,
         y = !1,
         p = !1,
         g;
      if (n._optimisticResults) {
         const P = this.hasListeners(),
            R = !P && Ef(t, n),
            F = P && kf(t, r, n, s);
         (R || F) && ((x = go(t.options.networkMode) ? 'fetching' : 'paused'), h || (C = 'loading')),
            n._optimisticResults === 'isRestoring' && (x = 'idle');
      }
      if (n.keepPreviousData && !f.dataUpdatedAt && c != null && c.isSuccess && C !== 'error')
         (g = c.data), (h = c.dataUpdatedAt), (C = c.status), (y = !0);
      else if (n.select && typeof f.data < 'u')
         if (i && f.data === (o == null ? void 0 : o.data) && n.select === this.selectFn) g = this.selectResult;
         else
            try {
               (this.selectFn = n.select),
                  (g = n.select(f.data)),
                  (g = pa(i == null ? void 0 : i.data, g, n)),
                  (this.selectResult = g),
                  (this.selectError = null);
            } catch (P) {
               this.selectError = P;
            }
      else g = f.data;
      if (typeof n.placeholderData < 'u' && typeof g > 'u' && C === 'loading') {
         let P;
         if (i != null && i.isPlaceholderData && n.placeholderData === (l == null ? void 0 : l.placeholderData)) P = i.data;
         else if (((P = typeof n.placeholderData == 'function' ? n.placeholderData() : n.placeholderData), n.select && typeof P < 'u'))
            try {
               (P = n.select(P)), (this.selectError = null);
            } catch (R) {
               this.selectError = R;
            }
         typeof P < 'u' && ((C = 'success'), (g = pa(i == null ? void 0 : i.data, P, n)), (p = !0));
      }
      this.selectError && ((m = this.selectError), (g = this.selectResult), (v = Date.now()), (C = 'error'));
      const S = x === 'fetching',
         j = C === 'loading',
         k = C === 'error';
      return {
         status: C,
         fetchStatus: x,
         isLoading: j,
         isSuccess: C === 'success',
         isError: k,
         isInitialLoading: j && S,
         data: g,
         dataUpdatedAt: h,
         error: m,
         errorUpdatedAt: v,
         failureCount: f.fetchFailureCount,
         failureReason: f.fetchFailureReason,
         errorUpdateCount: f.errorUpdateCount,
         isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
         isFetchedAfterMount: f.dataUpdateCount > u.dataUpdateCount || f.errorUpdateCount > u.errorUpdateCount,
         isFetching: S,
         isRefetching: S && !j,
         isLoadingError: k && f.dataUpdatedAt === 0,
         isPaused: x === 'paused',
         isPlaceholderData: p,
         isPreviousData: y,
         isRefetchError: k && f.dataUpdatedAt !== 0,
         isStale: Nu(t, n),
         refetch: this.refetch,
         remove: this.remove,
      };
   }
   updateResult(t) {
      const n = this.currentResult,
         r = this.createResult(this.currentQuery, this.options);
      if (((this.currentResultState = this.currentQuery.state), (this.currentResultOptions = this.options), da(r, n))) return;
      this.currentResult = r;
      const s = { cache: !0 },
         i = () => {
            if (!n) return !0;
            const { notifyOnChangeProps: o } = this.options;
            if (o === 'all' || (!o && !this.trackedProps.size)) return !0;
            const l = new Set(o ?? this.trackedProps);
            return (
               this.options.useErrorBoundary && l.add('error'),
               Object.keys(this.currentResult).some((a) => {
                  const u = a;
                  return this.currentResult[u] !== n[u] && l.has(u);
               })
            );
         };
      (t == null ? void 0 : t.listeners) !== !1 && i() && (s.listeners = !0), this.notify({ ...s, ...t });
   }
   updateQuery() {
      const t = this.client.getQueryCache().build(this.client, this.options);
      if (t === this.currentQuery) return;
      const n = this.currentQuery;
      (this.currentQuery = t),
         (this.currentQueryInitialState = t.state),
         (this.previousQueryResult = this.currentResult),
         this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
   }
   onQueryUpdate(t) {
      const n = {};
      t.type === 'success' ? (n.onSuccess = !t.manual) : t.type === 'error' && !ci(t.error) && (n.onError = !0),
         this.updateResult(n),
         this.hasListeners() && this.updateTimers();
   }
   notify(t) {
      Z.batch(() => {
         if (t.onSuccess) {
            var n, r, s, i;
            (n = (r = this.options).onSuccess) == null || n.call(r, this.currentResult.data),
               (s = (i = this.options).onSettled) == null || s.call(i, this.currentResult.data, null);
         } else if (t.onError) {
            var o, l, a, u;
            (o = (l = this.options).onError) == null || o.call(l, this.currentResult.error),
               (a = (u = this.options).onSettled) == null || a.call(u, void 0, this.currentResult.error);
         }
         t.listeners &&
            this.listeners.forEach(({ listener: c }) => {
               c(this.currentResult);
            }),
            t.cache && this.client.getQueryCache().notify({ query: this.currentQuery, type: 'observerResultsUpdated' });
      });
   }
}
function Dx(e, t) {
   return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === 'error' && t.retryOnMount === !1);
}
function Ef(e, t) {
   return Dx(e, t) || (e.state.dataUpdatedAt > 0 && ma(e, t, t.refetchOnMount));
}
function ma(e, t, n) {
   if (t.enabled !== !1) {
      const r = typeof n == 'function' ? n(e) : n;
      return r === 'always' || (r !== !1 && Nu(e, t));
   }
   return !1;
}
function kf(e, t, n, r) {
   return n.enabled !== !1 && (e !== t || r.enabled === !1) && (!n.suspense || e.state.status !== 'error') && Nu(e, n);
}
function Nu(e, t) {
   return e.isStaleByTime(t.staleTime);
}
let Mx = class extends gr {
   constructor(t, n) {
      super(), (this.client = t), this.setOptions(n), this.bindMethods(), this.updateResult();
   }
   bindMethods() {
      (this.mutate = this.mutate.bind(this)), (this.reset = this.reset.bind(this));
   }
   setOptions(t) {
      var n;
      const r = this.options;
      (this.options = this.client.defaultMutationOptions(t)),
         da(r, this.options) ||
            this.client.getMutationCache().notify({ type: 'observerOptionsUpdated', mutation: this.currentMutation, observer: this }),
         (n = this.currentMutation) == null || n.setOptions(this.options);
   }
   onUnsubscribe() {
      if (!this.hasListeners()) {
         var t;
         (t = this.currentMutation) == null || t.removeObserver(this);
      }
   }
   onMutationUpdate(t) {
      this.updateResult();
      const n = { listeners: !0 };
      t.type === 'success' ? (n.onSuccess = !0) : t.type === 'error' && (n.onError = !0), this.notify(n);
   }
   getCurrentResult() {
      return this.currentResult;
   }
   reset() {
      (this.currentMutation = void 0), this.updateResult(), this.notify({ listeners: !0 });
   }
   mutate(t, n) {
      return (
         (this.mutateOptions = n),
         this.currentMutation && this.currentMutation.removeObserver(this),
         (this.currentMutation = this.client
            .getMutationCache()
            .build(this.client, { ...this.options, variables: typeof t < 'u' ? t : this.options.variables })),
         this.currentMutation.addObserver(this),
         this.currentMutation.execute()
      );
   }
   updateResult() {
      const t = this.currentMutation ? this.currentMutation.state : fm(),
         n = {
            ...t,
            isLoading: t.status === 'loading',
            isSuccess: t.status === 'success',
            isError: t.status === 'error',
            isIdle: t.status === 'idle',
            mutate: this.mutate,
            reset: this.reset,
         };
      this.currentResult = n;
   }
   notify(t) {
      Z.batch(() => {
         if (this.mutateOptions && this.hasListeners()) {
            if (t.onSuccess) {
               var n, r, s, i;
               (n = (r = this.mutateOptions).onSuccess) == null ||
                  n.call(r, this.currentResult.data, this.currentResult.variables, this.currentResult.context),
                  (s = (i = this.mutateOptions).onSettled) == null ||
                     s.call(i, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context);
            } else if (t.onError) {
               var o, l, a, u;
               (o = (l = this.mutateOptions).onError) == null ||
                  o.call(l, this.currentResult.error, this.currentResult.variables, this.currentResult.context),
                  (a = (u = this.mutateOptions).onSettled) == null ||
                     a.call(u, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context);
            }
         }
         t.listeners &&
            this.listeners.forEach(({ listener: c }) => {
               c(this.currentResult);
            });
      });
   }
};
var dm = { exports: {} },
   hm = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lr = w;
function Lx(e, t) {
   return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ox = typeof Object.is == 'function' ? Object.is : Lx,
   bx = lr.useState,
   Ix = lr.useEffect,
   Vx = lr.useLayoutEffect,
   _x = lr.useDebugValue;
function Bx(e, t) {
   var n = t(),
      r = bx({ inst: { value: n, getSnapshot: t } }),
      s = r[0].inst,
      i = r[1];
   return (
      Vx(
         function () {
            (s.value = n), (s.getSnapshot = t), nl(s) && i({ inst: s });
         },
         [e, n, t]
      ),
      Ix(
         function () {
            return (
               nl(s) && i({ inst: s }),
               e(function () {
                  nl(s) && i({ inst: s });
               })
            );
         },
         [e]
      ),
      _x(n),
      n
   );
}
function nl(e) {
   var t = e.getSnapshot;
   e = e.value;
   try {
      var n = t();
      return !Ox(e, n);
   } catch {
      return !0;
   }
}
function zx(e, t) {
   return t();
}
var Ux = typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u' ? zx : Bx;
hm.useSyncExternalStore = lr.useSyncExternalStore !== void 0 ? lr.useSyncExternalStore : Ux;
dm.exports = hm;
var $x = dm.exports;
const pm = $x.useSyncExternalStore,
   Af = w.createContext(void 0),
   mm = w.createContext(!1);
function ym(e, t) {
   return (
      e ||
      (t && typeof window < 'u'
         ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Af), window.ReactQueryClientContext)
         : Af)
   );
}
const gm = ({ context: e } = {}) => {
      const t = w.useContext(ym(e, w.useContext(mm)));
      if (!t) throw new Error('No QueryClient set, use QueryClientProvider to set one');
      return t;
   },
   Qx = ({ client: e, children: t, context: n, contextSharing: r = !1 }) => {
      w.useEffect(
         () => (
            e.mount(),
            () => {
               e.unmount();
            }
         ),
         [e]
      );
      const s = ym(n, r);
      return w.createElement(mm.Provider, { value: !n && r }, w.createElement(s.Provider, { value: e }, t));
   },
   vm = w.createContext(!1),
   Wx = () => w.useContext(vm);
vm.Provider;
function Kx() {
   let e = !1;
   return {
      clearReset: () => {
         e = !1;
      },
      reset: () => {
         e = !0;
      },
      isReset: () => e,
   };
}
const qx = w.createContext(Kx()),
   Hx = () => w.useContext(qx);
function xm(e, t) {
   return typeof e == 'function' ? e(...t) : !!e;
}
const Gx = (e, t) => {
      (e.suspense || e.useErrorBoundary) && (t.isReset() || (e.retryOnMount = !1));
   },
   Yx = (e) => {
      w.useEffect(() => {
         e.clearReset();
      }, [e]);
   },
   Xx = ({ result: e, errorResetBoundary: t, useErrorBoundary: n, query: r }) =>
      e.isError && !t.isReset() && !e.isFetching && xm(n, [e.error, r]),
   Jx = (e) => {
      e.suspense && typeof e.staleTime != 'number' && (e.staleTime = 1e3);
   },
   Zx = (e, t) => e.isLoading && e.isFetching && !t,
   e1 = (e, t, n) => (e == null ? void 0 : e.suspense) && Zx(t, n),
   t1 = (e, t, n) =>
      t
         .fetchOptimistic(e)
         .then(({ data: r }) => {
            e.onSuccess == null || e.onSuccess(r), e.onSettled == null || e.onSettled(r, null);
         })
         .catch((r) => {
            n.clearReset(), e.onError == null || e.onError(r), e.onSettled == null || e.onSettled(void 0, r);
         });
function n1(e, t) {
   const n = gm({ context: e.context }),
      r = Wx(),
      s = Hx(),
      i = n.defaultQueryOptions(e);
   (i._optimisticResults = r ? 'isRestoring' : 'optimistic'),
      i.onError && (i.onError = Z.batchCalls(i.onError)),
      i.onSuccess && (i.onSuccess = Z.batchCalls(i.onSuccess)),
      i.onSettled && (i.onSettled = Z.batchCalls(i.onSettled)),
      Jx(i),
      Gx(i, s),
      Yx(s);
   const [o] = w.useState(() => new t(n, i)),
      l = o.getOptimisticResult(i);
   if (
      (pm(
         w.useCallback(
            (a) => {
               const u = r ? () => {} : o.subscribe(Z.batchCalls(a));
               return o.updateResult(), u;
            },
            [o, r]
         ),
         () => o.getCurrentResult(),
         () => o.getCurrentResult()
      ),
      w.useEffect(() => {
         o.setOptions(i, { listeners: !1 });
      }, [i, o]),
      e1(i, l, r))
   )
      throw t1(i, o, s);
   if (Xx({ result: l, errorResetBoundary: s, useErrorBoundary: i.useErrorBoundary, query: o.getCurrentQuery() })) throw l.error;
   return i.notifyOnChangeProps ? l : o.trackResult(l);
}
function jt(e, t, n) {
   const r = Mr(e, t, n);
   return n1(r, Fx);
}
function He(e, t, n) {
   const r = gx(e, t, n),
      s = gm({ context: r.context }),
      [i] = w.useState(() => new Mx(s, r));
   w.useEffect(() => {
      i.setOptions(r);
   }, [i, r]);
   const o = pm(
         w.useCallback((a) => i.subscribe(Z.batchCalls(a)), [i]),
         () => i.getCurrentResult(),
         () => i.getCurrentResult()
      ),
      l = w.useCallback(
         (a, u) => {
            i.mutate(a, u).catch(r1);
         },
         [i]
      );
   if (o.error && xm(i.options.useErrorBoundary, [o.error])) throw o.error;
   return { ...o, mutate: l, mutateAsync: o.mutate };
}
function r1() {}
async function wm(e, t) {
   return await (await fetch(e, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(t) })).json();
}
let Q = 'http://localhost:8503';
const Sm = () => {
      let { setAuthPage: e } = w.useContext(yo),
         [t, n] = w.useState({ name: '', email: '', password: '' });
      const r = (i) => {
            let { name: o, value: l } = i.target;
            n((a) => ({ ...a, [o]: l }));
         },
         s = He({
            mutationFn: () => wm(Q + '/auth/signup', t),
            mutationKey: ['signup', 'auth'],
            onSuccess: () => e({ currentPage: d.jsx(Tf, {}) }),
            onError: (i) => console.log(i),
         });
      return s.status == 'loading'
         ? d.jsx(Es, { on: s.isLoading })
         : d.jsxs('form', {
              className: 'w-[78%] flex flex-col items-center gap-3 justify-evenly h-[90%] mx-auto ',
              children: [
                 d.jsx('div', {
                    className: 'flex flex-col items-start justify-between gap-1 w-full',
                    children: d.jsx('input', {
                       type: 'text',
                       className: 'sm:p-3 p-2 block w-full outline-none rounded bg-[#FAFAFA] border border-zinc-100',
                       placeholder: 'name',
                       onChange: r,
                       name: 'name',
                    }),
                 }),
                 d.jsx('div', {
                    className: 'flex flex-col items-start justify-between gap-1 w-full',
                    children: d.jsx('input', {
                       type: 'email',
                       className: 'sm:p-3 p-2 block w-full outline-none rounded bg-[#FAFAFA] border border-zinc-100',
                       placeholder: 'email',
                       onChange: r,
                       name: 'email',
                    }),
                 }),
                 d.jsx('div', {
                    className: 'flex flex-col items-startjustify-between gap-1 w-full',
                    children: d.jsx('input', {
                       type: 'password',
                       className: 'sm:p-3 p-2 block w-full outline-none rounded bg-[#FAFAFA] border border-zinc-100',
                       placeholder: 'password',
                       name: 'password',
                       onChange: r,
                    }),
                 }),
                 d.jsx('button', {
                    className: 'sm:p-3 p-2 rounded-sm bg-zinc-800 text-white block w-full text-center font-slab text-lg font-normal',
                    type: 'button',
                    onClick: () => {
                       console.log(t), s.mutate();
                    },
                    children: 'Signup',
                 }),
                 d.jsx('div', {
                    className: 'flex justify-start w-full cursor-pointer',
                    onClick: () => e({ currentPage: d.jsx(Tf, {}) }),
                    children: d.jsx('p', { className: 'font-open text-sm font-medium', children: 'Already have an account? Log in' }),
                 }),
              ],
           });
   },
   Tf = () => {
      let { setAuthPage: e } = w.useContext(yo),
         [t, n] = w.useState({ email: '', password: '' }),
         r = pr();
      const s = (o) => {
            let { name: l, value: a } = o.target,
               u = l === 'tag' ? (a === 'farmer' ? 1 : 0) : a;
            n((c) => ({ ...c, [l]: u }));
         },
         i = He({ mutationFn: () => wm(Q + '/auth/login', t), mutationKey: ['login', 'auth'] });
      return (
         w.useEffect(() => {
            i.status == 'loading' && console.log('loading...'),
               i.status == 'error' && console.log(i.error),
               i.status == 'success' && (console.log(i.data), localStorage.setItem('-jwtKey-', i.data.token), i.data.done && r('/home'));
         }, [i.status]),
         d.jsxs('form', {
            className: 'w-[75%] flex flex-col items-start gap-3 justify-evenly h-[70%] mx-auto',
            children: [
               d.jsx('div', {
                  className: 'flex flex-col items-start justify-between gap-1 w-full',
                  children: d.jsx('input', {
                     type: 'email',
                     className: 'sm:p-3 p-2 block w-full outline-none rounded bg-[#FAFAFA] border border-zinc-100',
                     placeholder: 'email',
                     onChange: s,
                     name: 'email',
                  }),
               }),
               d.jsx('div', {
                  className: 'flex flex-col items-start justify-between gap-1 w-full',
                  children: d.jsx('input', {
                     type: 'password',
                     className: 'sm:p-3 p-2 block w-full outline-none rounded bg-[#FAFAFA] border border-zinc-100',
                     placeholder: 'password',
                     onChange: s,
                     name: 'password',
                  }),
               }),
               d.jsx('button', {
                  className: 'p-2 rounded-sm bg-zinc-800 text-white block w-full text-center font-slab text-lg font-normal',
                  type: 'button',
                  onClick: () => {
                     console.log(t), i.mutate();
                  },
                  children: 'Login',
               }),
               d.jsx('div', {
                  className: 'flex justify-center w-full cursor-pointer',
                  onClick: () => e({ currentPage: d.jsx(Sm, {}) }),
                  children: d.jsxs('p', {
                     className: 'font-open text-sm font-medium',
                     children: ["Don't have an account? ", d.jsx('span', { className: 'font-semibold', children: 'sign up' })],
                  }),
               }),
            ],
         })
      );
   },
   vo = w.createContext(void 0),
   s1 = ({ children: e }) => {
      let [t, n] = w.useState(!1);
      return d.jsx(vo.Provider, { value: { flag: t, setflag: n }, children: e });
   },
   Ge = w.createContext({ mode: !1, setmode: Function }),
   i1 = ({ children: e }) => {
      let [t, n] = w.useState(!1);
      return d.jsx(Ge.Provider, { value: { mode: t, setmode: n }, children: e });
   },
   o1 = () => {
      let { flag: e, setflag: t } = w.useContext(vo),
         { mode: n } = w.useContext(Ge);
      return d.jsx('div', {
         className: 'border-b border-[#f1f1f1]',
         children: d.jsxs('main', {
            className: 'w-full flex flex-row items-center justify-between px-4 py-1',
            children: [
               d.jsxs('div', {
                  className: 'flex flex-row items-center w-[55%]',
                  children: [
                     d.jsx('i', { className: `fa text-2xl mr-2 ${n ? 'text-[#FAFAF9]' : 'text-[#111111]'}`, children: '' }),
                     d.jsx('p', {
                        className: `text-xl font-play font-semibold ${n ? 'text-[#FAFAF9]' : 'text-[#111111]'} uppercase`,
                        children: 'Twilight',
                     }),
                  ],
               }),
               d.jsxs('div', {
                  className: 'flex flex-row items-center justify-between w-auto',
                  children: [
                     d.jsxs('div', {
                        className: 'w-auto h-auto flex flex-row items-center mr-5',
                        children: [
                           d.jsx('div', { className: 'h-2 w-2 rounded-full bg-orange-700 animate-bounce' }),
                           d.jsx('div', { className: 'h-2 w-2 rounded-full bg-yellow-700 mx-2 animate-bounce' }),
                           d.jsx('div', { className: 'h-2 w-2 rounded-full bg-green-700 animate-bounce' }),
                        ],
                     }),
                     d.jsx('div', {
                        className: 'flex justify-center',
                        onClick: () => t(!e),
                        children: d.jsx('i', {
                           className: `material-icons-outlined text-4xl ${n ? 'text-[#FAFAF9]' : 'text-[#111111]'}`,
                           children: 'menu',
                        }),
                     }),
                  ],
               }),
            ],
         }),
      });
   },
   l1 = () => {
      let { mode: e } = w.useContext(Ge);
      return d.jsx('div', {
         className: 'border-b border-[#f1f1f1] w-full',
         children: d.jsxs('nav', {
            className: 'w-full flex flex-row items-center px-5 py-1 justify-between',
            children: [
               d.jsxs('div', {
                  className: 'flex flex-row items-center w-full',
                  children: [
                     d.jsx('i', { className: `fa text-3xl mr-2 ${e ? 'text-[#FAFAF9]' : 'text-[#111111]'}`, children: '' }),
                     d.jsx('p', {
                        className: `text-xl font-play font-semibold text-black uppercase ${e ? 'text-[#FAFAF9]' : 'text-[#111111]'}`,
                        children: 'Twilight',
                     }),
                  ],
               }),
               d.jsxs('div', {
                  className: 'flex flex-row items-center justify-between w-[15%]',
                  children: [
                     d.jsx('div', {
                        className: 'flex flex-row items-center justify-center relative',
                        children: d.jsx('i', {
                           className: `material-icons-outlined text-2xl ${e ? 'text-[#FAFAF9]' : 'text-[#111111]'}`,
                           title: 'notification',
                           children: 'notifications',
                        }),
                     }),
                     d.jsx('div', {
                        className: 'flex justify-center relative',
                        children: d.jsx('i', {
                           className: `material-icons-outlined text-2xl ${e ? 'text-[#FAFAF9]' : 'text-[#111111]'}`,
                           title: 'mode',
                           children: 'chats',
                        }),
                     }),
                     d.jsxs('div', {
                        className: 'w-auto h-auto flex flex-row items-center',
                        children: [
                           d.jsx('div', { className: 'h-2 w-2 rounded-full bg-orange-700 animate-bounce' }),
                           d.jsx('div', { className: 'h-2 w-2 rounded-full bg-yellow-700 mx-2 animate-bounce' }),
                           d.jsx('div', { className: 'h-2 w-2 rounded-full bg-green-700 animate-bounce' }),
                        ],
                     }),
                  ],
               }),
            ],
         }),
      });
   },
   Cm = () =>
      d.jsx('header', {
         className: 'flex flex-row items-center justify-between w-full',
         children: d.jsxs('div', {
            className: 'w-full',
            children: [
               d.jsx('div', { className: 'sm:hidden w-full flex flex-col', children: d.jsx(o1, {}) }),
               d.jsx('div', { className: 'sm:flex w-full hidden flex-col', children: d.jsx(l1, {}) }),
            ],
         }),
      });
let Nf = [
   { name: 'Dark mode', icon: 'nightlight_round', index: '0x0' },
   { name: 'Feed', icon: 'feed', index: '0x1' },
   { name: 'Explore', icon: 'explore', index: '0x2' },
   { name: 'Friends', icon: 'diversity_3', index: '0x3' },
   ,
   { name: 'Notifications', icon: 'notifications', index: '0x4' },
   { name: 'Settings', icon: 'settings', index: '0x5' },
];
const js = w.createContext(void 0),
   a1 = ({ children: e }) => {
      let t = { '0x1': d.jsx(S1, {}), '0x2': d.jsx(C1, {}), '0x3': d.jsx(P1, {}), '0x4': d.jsx(E1, {}), '0x5': d.jsx(IP, {}) },
         [n, r] = w.useState(t['0x1']),
         [s, i] = w.useState('');
      const o = (l) => {
         r(t[l]), i(l);
      };
      return d.jsx(js.Provider, { value: { page: n, setPage: o, key: s }, children: e });
   },
   u1 = () => {
      let e = pr(),
         t = localStorage.getItem('-jwtKey-'),
         { flag: n, setflag: r } = w.useContext(vo),
         [s, i] = [Nf.slice(0, 4), Nf.slice(4)],
         { mode: o } = w.useContext(Ge),
         l = w.useMemo(() => o === !0, [o]),
         { setPage: a } = w.useContext(js),
         {
            isSuccess: u,
            data: c,
            isError: f,
            refetch: h,
         } = jt({
            queryFn: async () =>
               (
                  await fetch(`${Q}/getUser`, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `${t}` } })
               ).json(),
            queryKey: ['getUser', 'common'],
         }),
         m = w.useMemo(() => (o ? yr : mr), [o]);
      return (
         u && c && localStorage.setItem('profileImg', c.user.profileImg),
         w.useEffect(() => {
            f && h();
         }, [u]),
         d.jsxs('section', {
            className: `${l ? 'bg-[#242424]' : 'bg-white'} flex flex-col items-center w-full shadow-xl`,
            children: [
               d.jsxs('header', {
                  className: 'sm:hidden flex flex-row items-center w-full justify-between p-5',
                  children: [
                     d.jsx('i', {
                        onClick: () => r(!n),
                        className: `${l ? 'text-[#FAFAF9]' : 'text-[#111111]'} material-icons-outlined text-2xl`,
                        children: 'chevron_left',
                     }),
                     d.jsx('i', {
                        className: `${l ? 'text-[#FAFAF9]' : 'text-[#111111]'} material-icons-outlined text-2xl`,
                        onClick: () => e('/'),
                        children: 'power_settings_new',
                     }),
                  ],
               }),
               d.jsxs('section', {
                  className: 'flex flex-col items-center justify-center w-full',
                  children: [
                     d.jsx('div', {
                        className: 'w-auto h-auto py-5',
                        children: d.jsx('img', {
                           src: (c == null ? void 0 : c.user.profileImg) || m,
                           className: 'object-cover sm:w-[70px] sm:h-[70px] w-[40px] h-[40px] rounded-full object-center',
                           alt: 'profileImg',
                        }),
                     }),
                     d.jsxs('div', {
                        className: 'flex flex-col justify-center w-full',
                        children: [
                           d.jsx('p', {
                              className: `${l ? 'text-[#FAFAF9]' : 'text-[#111111]'} text-sm font-play font-medium text-center`,
                              children: c == null ? void 0 : c.user.name,
                           }),
                           d.jsx('small', {
                              className: `${l ? 'text-[#FAFAF9]' : 'text-[#111111]'} font-play font-medium text-center`,
                              children: 'User',
                           }),
                        ],
                     }),
                     d.jsxs('section', {
                        className: 'flex flex-col items-start w-full mt-10',
                        children: [d.jsx(f1, { arr: s, setPage: a, isdark: l }), d.jsx(c1, { arr: i, setPage: a, isdark: l })],
                     }),
                  ],
               }),
            ],
         })
      );
   };
function c1({ arr: e, setPage: t, isdark: n }) {
   return d.jsx(d.Fragment, {
      children:
         e == null
            ? void 0
            : e.map((r, s) =>
                 d.jsxs(
                    'div',
                    {
                       className: `flex flex-row items-center w-full justify-between mb-5\r
                hover:bg-transparent hover:bg-opacity-50 px-5 py-1 cursor-pointer`,
                       onClick: () => t(r == null ? void 0 : r.index),
                       children: [
                          d.jsxs('div', {
                             className: 'flex flex-row items-center',
                             children: [
                                d.jsx('i', {
                                   className: `${n ? 'text-[#FAFAF9]' : 'text-[#111111]'} material-icons-outlined text-xl mr-5`,
                                   children: r == null ? void 0 : r.icon,
                                }),
                                d.jsx('span', {
                                   className: `${n ? 'text-[#FAFAF9]' : 'text-[#111111]'} text-base font-play font-medium`,
                                   children: r == null ? void 0 : r.name,
                                }),
                             ],
                          }),
                          d.jsx('div', {
                             className: `flex justify-center ${(r == null ? void 0 : r.name) === 'Dark mode' ? '' : 'hidden'}`,
                             children: d.jsx(Pm, {}),
                          }),
                       ],
                    },
                    s + 1
                 )
              ),
   });
}
function f1({ arr: e, setPage: t, isdark: n }) {
   return d.jsx(d.Fragment, {
      children: e.map((r, s) =>
         d.jsxs(
            'div',
            {
               className: `flex flex-row items-center w-full justify-between mb-5
                hover:bg- hover:bg-opacity-50 px-5 py-1 cursor-pointer`,
               onClick: () => ((r == null ? void 0 : r.name) !== 'Dark mode' ? t(r == null ? void 0 : r.index) : console.log('Icon')),
               children: [
                  d.jsxs('div', {
                     className: 'flex flex-row items-center',
                     children: [
                        d.jsx('i', {
                           className: `${n ? 'text-[#FAFAF9]' : 'text-[#111111]'} material-icons-outlined text-xl mr-5`,
                           children: r == null ? void 0 : r.icon,
                        }),
                        d.jsx('span', {
                           className: `${n ? 'text-[#FAFAF9]' : 'text-[#111111]'} text-base font-play font-medium`,
                           children: r == null ? void 0 : r.name,
                        }),
                     ],
                  }),
                  d.jsx('div', {
                     className: `flex justify-center ${(r == null ? void 0 : r.name) === 'Dark mode' ? '' : 'hidden'}`,
                     children: d.jsx(Pm, {}),
                  }),
               ],
            },
            s + 1
         )
      ),
   });
}
const d1 = ({ SideBar: e, flag: t, navigate: n, mode: r, profileImg: s }) => {
      let { key: i, page: o } = w.useContext(js),
         [l, a] = w.useState(!0);
      return (
         w.useEffect(() => {
            a(i === '0x1' || i === '');
         }, [i, o]),
         d.jsxs('div', {
            className: 'flex sm:flex-row items-stretch w-full relative',
            children: [
               d.jsxs('div', {
                  className: 'lg:w-[20%] md:w-[24%] sm:w-[30%]',
                  children: [
                     d.jsx('div', { className: 'w-full sm:inline hidden', children: d.jsx(e, {}) }),
                     d.jsx('div', {
                        className: `w-[75%] sm:hidden flex absolute z-50 ${t ? 'left-0' : '-left-full'} duration-500 bg-[#FAFAF9]`,
                        children: d.jsx(e, {}),
                     }),
                  ],
               }),
               d.jsxs('div', {
                  className: 'sm:w-[73%] w-full mx-auto h-screen bg-transparent flex flex-col items-center',
                  children: [
                     d.jsx('section', {
                        onClick: () => n('/post'),
                        className: `${r ? 'bg-[#2C2C2C] border-[#2b2b2b]' : 'border-gray-200'} sm:w-full w-[97%] mx-auto rounded border  ${
                           l ? 'flex' : 'hidden'
                        } flex-col items-center p-2 mt-2`,
                        children: d.jsxs('div', {
                           className: 'flex flex-row items-center w-full',
                           children: [
                              d.jsx('div', {
                                 className: 'sm:w-auto h-auto mr-4 w-[10%]',
                                 children: d.jsx('img', {
                                    src: s,
                                    className: 'object-cover rounded-full sm:w-[40px] sm:h-[40px] h-[25px] w-[25px]',
                                    alt: 'profile_img',
                                 }),
                              }),
                              d.jsx('input', {
                                 type: 'search',
                                 placeholder: "What's on your mind",
                                 className: 'outline-none bg-transparent w-[95%] text-sm font-medium font-play',
                              }),
                              d.jsx('div', {
                                 className: 'flex justify-center w-[10%]',
                                 children: d.jsx('i', {
                                    className: `${r ? 'text-[#FAFAF9]' : 'text-[#111111]'} material-icons-outlined text-2xl`,
                                    children: 'collections',
                                 }),
                              }),
                           ],
                        }),
                     }),
                     o,
                  ],
               }),
            ],
         })
      );
   },
   h1 = () => {
      let { flag: e } = w.useContext(vo),
         { page: t } = w.useContext(js),
         { mode: n } = w.useContext(Ge),
         r = pr(),
         [s] = [localStorage.getItem('profileImg')],
         i = w.useMemo(() => (n ? yr : mr), [n]);
      return d.jsxs('main', {
         className: 'flex flex-col items-center w-full',
         children: [d.jsx(Cm, {}), d.jsx(d1, { SideBar: u1, flag: e, mode: n, page: t, navigate: r, profileImg: s || i })],
      });
   },
   Pm = () => {
      const [e, t] = w.useState(!1);
      let { mode: n, setmode: r } = w.useContext(Ge);
      const s = () => {
         t(!e), r(!e);
      };
      return (
         w.useEffect(() => {
            const i = document.querySelector('body');
            i.className = n ? 'bg-[hsl(0,3%,10%)]' : 'bg-[hsl(0,0%,100%)]';
         }, [n, e]),
         d.jsx(d.Fragment, {
            children: d.jsxs('label', {
               className: 'themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center',
               children: [
                  d.jsx('input', { type: 'checkbox', checked: e, onChange: s, className: 'sr-only' }),
                  d.jsx('span', {
                     className: `slider mx-4 flex h-6 w-[45px] items-center rounded-full p-1 duration-200 ${
                        n ? 'bg-[#ad2828]' : 'bg-stone-500'
                     }`,
                     children: d.jsx('span', {
                        className: `dot h-4 w-4 rounded-full bg-white duration-200 ${e ? 'translate-x-[28px]' : ''}`,
                     }),
                  }),
               ],
            }),
         })
      );
   },
   Rf = ({ text: e, color: t, bg: n }) =>
      d.jsx('button', { className: `rounded shadow ${t} font-play text-sm font-semibold px-3 py-1.5 ${n}`, children: e }),
   Ru = ({ text: e, size: t }) =>
      d.jsx('section', {
         className: ' w-full h-full flex justify-center mt-10',
         children: d.jsxs('section', {
            className: `flex flex-col items-center self-center mx-auto p-3 border border-[#dfdede] ${t}`,
            children: [
               d.jsxs('p', { className: 'font-open text-lg font-semibold text-[#bdbdbd]', children: [e, ' is empty!'] }),
               d.jsx('img', { src: mx, className: 'object-cover h-[20] w-[20] text-center place-self-center', alt: 'empty' }),
            ],
         }),
      }),
   Es = ({ on: e }) =>
      d.jsx('section', {
         className: `${e ? 'flex' : 'hidden'} w-screen h-screen bg-black bg-opacity-30 justify-center fixed top-0 left-0 z-50`,
         children: d.jsx('main', {
            className: 'flex justify-center self-center w-auto h-auto',
            children: d.jsx('i', { className: 'text-[60px] animate-spin text-center material-icons-outlined', children: 'autorenew' }),
         }),
      }),
   xo = w.createContext(void 0),
   p1 = ({ children: e }) => {
      let [t, n] = w.useState('');
      return d.jsx(xo.Provider, { value: { commentMod: t, setCommentMod: n }, children: e });
   };
function m1({ likes: e, comment: t, mode: n, userId: r, id: s, query: i, isLiked: o }) {
   let l = localStorage.getItem('-jwtKey-');
   const a = He({
      mutationFn: async ({ id: f }) =>
         (
            await fetch(`${Q}/function/post/like/inc/${f}`, {
               method: 'PUT',
               headers: { 'Content-Type': 'application/json', Authorization: `${l}` },
            })
         ).json(),
      mutationKey: ['like', 'postlike'],
      onSuccess: () => {
         i.refetch();
      },
   });
   let { commentMod: u, setCommentMod: c } = w.useContext(xo);
   return d.jsx('div', {
      className: 'flex flex-row items-center w-full justify-start my-2',
      'data-user': r,
      'data-post': s,
      children: [
         { i: o ? 'favorite' : 'favorite_border', val: e },
         { i: 'chat_bubble', val: t ? t.length : 0 },
      ].map(({ i: f, val: h }, m) =>
         d.jsxs(
            'div',
            {
               className: 'flex justify-start cursor-pointer mr-5',
               children: [
                  d.jsx('i', {
                     className: `${n ? 'text-[hsl(0,0%,70%)]' : 'text-[hsl(0,0%,20%)]'} text-xl material-icons-outlined`,
                     onClick: () => {
                        m === 0 ? (a.mutate({ id: s }), Qy.refetchQueries()) : (i.refetch(['getComment', 'getPost']), c(s === u ? '' : s));
                     },
                     children: f,
                  }),
                  d.jsx('span', {
                     className: `${n ? 'text-slate-100' : 'text-[#191919]'} text-sm text-left ml-0.5 self-center font-medium`,
                     children: h,
                  }),
               ],
            },
            m
         )
      ),
   });
}
const tn = w.createContext(void 0),
   y1 = ({ children: e }) => {
      let [t, n] = w.useState(''),
         [r, s] = w.useState('');
      const i = () => n(`${Math.random() * 292}`);
      return d.jsx(tn.Provider, { value: { reft: t, setreft: n, updateRef: i, post: r, setpost: s }, children: e });
   },
   g1 = ({ mode: e, query: t, postId: n }) => {
      let [r, s] = w.useState(''),
         { updateRef: i } = w.useContext(tn),
         { setCommentMod: o } = w.useContext(xo),
         l = localStorage.getItem('-jwtKey-'),
         a = He({
            mutationFn: async () =>
               (
                  await fetch(`${Q}/function/post/comment/post`, {
                     method: 'POST',
                     headers: { 'Content-Type': 'application/json', Authorization: `${l}` },
                     body: JSON.stringify({ comment: r, postId: n }),
                  })
               ).json(),
            mutationKey: ['sendComment', 'post'],
            onSuccess: () => {
               t.refetch({ queryKey: ['post', 'getpost'] }), i();
            },
         }),
         u = w.useRef();
      return d.jsxs('div', {
         className: 'flex flex-row items-stretch w-full rounded sticky bottom-0 justify-between',
         children: [
            d.jsx('input', {
               type: 'text',
               className: `p-2 font-open text-sm w-[89%] outline-none ${
                  e ? 'bg-[hsl(0,0%,20%)] text-[hsl(0,0%,90%)] placeholder:text-[hsl(0,0%,80%)]' : 'bg-[hsl(0,0%,96%)] text-[hsl(0,0%,15%)]'
               } rounded-l`,
               alt: 'input',
               ref: u,
               onChange: (c) => s(c.target.value),
               placeholder: 'Write a comment',
            }),
            d.jsx('div', {
               className: `flex flex-row items-center gap-3 justify-center w-[11%] rounded ml-2 ${
                  e ? 'bg-[hsl(0,0%,20%)]' : 'bg-[hsl(0,0%,70%)]'
               }`,
               children: d.jsx('i', {
                  className: `${
                     e ? 'text-[hsl(0,0%,90%)]' : 'text-[hsl(0,0%,10%)]'
                  } text-2xl material-icons-outlined cursor-pointer self-center`,
                  onClick: () => {
                     a.mutate(), (u.current.value = ''), o(n);
                  },
                  children: 'send',
               }),
            }),
         ],
      });
   };
function Ff(e, t) {
   return t === 'd'
      ? ['Mon', 'Teu', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'][e]
      : ['Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'][e];
}
function Hs(e, t, n) {
   return parseInt((Math.round(e.getTime() - t.getTime()) / n).toFixed(0));
}
const v1 = function (e) {
      if (e instanceof Date) {
         let t = new Date(),
            [n, r, s, i] = [Hs(t, e, 1e3), Hs(t, e, 1e3 * 60), Hs(t, e, 1e3 * 60 * 60), Hs(t, e, 1e3 * 3600 * 24)],
            o = '';
         return (
            i > 7
               ? (o += `${Ff(e.getDay(), 'd')}, ${Ff(e.getMonth(), 'm')} ${e.getFullYear()}`)
               : i > 0
               ? (o += i >= 2 ? `${Math.round(i).toFixed(0)}days ago` : `${Math.round(i).toFixed(0)}day ago`)
               : s > 0
               ? (o += s >= 2 ? `${Math.round(s).toFixed(0)}hrs ago` : `${Math.round(s).toFixed(0)}hr ago`)
               : r > 0
               ? (o += o += r >= 2 ? `${Math.round(r).toFixed(0)}mins ago` : `${Math.round(r).toFixed(0)}min ago`)
               : n > 0 && (o += n >= 2 ? `${Math.round(n).toFixed(0)}secs ago` : `${Math.round(n).toFixed(0)}sec ago`),
            o
         );
      }
   },
   x1 = ({ userId: e, mode: t, date: n, tag: r, name: s, id: i, setEllipse: o, query: l, ellipse: a }) => {
      let [u, c] = [localStorage.getItem('-jwtKey-'), localStorage.getItem('profileImg')],
         { updateRef: f, reft: h, setreft: m } = w.useContext(tn),
         v = w.useMemo(() => (t ? yr : mr), [t]);
      const x = He({
         mutationFn: async (p) =>
            (
               await fetch(`${Q}/function/post/delete/${p}`, {
                  method: 'DELETE',
                  headers: { 'Content-Type': 'application/json', Authorization: `${u}` },
               })
            ).json(),
         mutationKey: ['delete', 'post', 'deletepost'],
         onSuccess: () => {
            l.refetch({ queryKey: ['getpost'] }), f(`${Math.random() * 292}`);
         },
         onMutate() {
            l.refetch({ queryKey: ['getpost'] });
         },
      });
      let { data: C } = jt({
         queryFn: async () =>
            (await fetch(`${Q}/getUser`, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `${u}` } })).json(),
         queryKey: ['getUser', 'common', h],
      });
      const y = He({
         mutationFn: async (p) =>
            (
               await fetch(`${Q}/friend/remove`, {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json', Authorization: `${u}` },
                  body: JSON.stringify({ unFriendId: p }),
               })
            ).json(),
         mutationKey: ['deleteFriend', 'unFriend'],
         onSuccess() {
            f();
         },
      });
      return d.jsxs('div', {
         className: 'flex flex-row items-center justify-between w-full relative mb-2',
         children: [
            d.jsxs('div', {
               className: 'flex flex-row items-center w-full justify-start',
               children: [
                  d.jsx('div', {
                     className: 'w-auto h-auto mr-2 self-center',
                     children: d.jsx('img', {
                        src: c ?? v,
                        className: `object-cover w-12 h-12 rounded-full border-2 ${
                           t ? 'border-[hsl(0,0%,70%)]' : 'border-[hsl(0,0%,20%)]'
                        }`,
                        alt: 'profileImg',
                     }),
                  }),
                  d.jsxs('div', {
                     className: 'flex flex-col items-start place-self-start self-center',
                     children: [
                        d.jsxs('div', {
                           className: 'flex flex-row items-center',
                           children: [
                              d.jsx('p', {
                                 className: `${t ? 'text-slate-100' : 'text-[#191919]'} font-play text-base font-semibold`,
                                 children: s,
                              }),
                              d.jsx('p', {
                                 className: `font-play text-xs font-normal ml-3 ${t ? 'text-slate-100' : 'text-[#191919]'} font-semibold `,
                                 children: v1(new Date(n)),
                              }),
                           ],
                        }),
                        d.jsx('small', {
                           className: `${t ? 'text-slate-100' : 'text-[#191919]'} font-play text-sm text-opacity-50 font-semibold`,
                           children: r,
                        }),
                     ],
                  }),
               ],
            }),
            d.jsxs('div', {
               className: `${t ? 'bg-[#202020]' : 'bg-[#ffffff]'} ${a === i ? 'grid' : 'hidden'}  grid-cols-1 rounded-lg h-auto py-2
          rounded-tr-none shadow-lg p-3 absolute z-50 right-2 top-7 w-[50%]`,
               children: [
                  d.jsxs('div', {
                     className: `flex flex-row items-center cursor-pointer ${C && e === (C == null ? void 0 : C.user._id) ? 'hidden' : ''}`,
                     'data-user': e,
                     'data-post': i,
                     onClick: () => {
                        y.mutate(e),
                           setTimeout(() => {
                              m('10000'), f();
                           }, 1e3);
                     },
                     children: [
                        d.jsx('i', {
                           className: `${t ? 'text-white' : 'text-black'} material-icons-outlined
             text-3l`,
                           children: 'block',
                        }),
                        d.jsx('p', {
                           className: `${t ? 'text-white' : 'text-black'} font-play text-base font-medium ml-3`,
                           children: 'Unfollow',
                        }),
                     ],
                  }),
                  d.jsxs('div', {
                     className: `flex-row items-center cursor-pointer ${C && e === C.user._id ? 'flex' : 'hidden'}`,
                     'data-user': e,
                     'data-post': i,
                     onClick: () => x.mutate(i),
                     children: [
                        d.jsx('i', {
                           className: `${t ? 'text-white' : 'text-black'}
             material-icons-outlined text-3xl`,
                           children: 'delete_forever',
                        }),
                        d.jsx('p', {
                           className: `${t ? 'text-white' : 'text-black'} font-play text-base font-medium ml-3`,
                           children: 'Delete',
                        }),
                     ],
                  }),
               ],
            }),
            d.jsx('div', {
               className: 'flex justify-end text-center self-start w-[10%] mr-0 cursor-pointer',
               onClick: () => {
                  o(a === i ? '' : i);
               },
               children: d.jsx('i', {
                  className: `material-icons-outlined text-2xl text-center ${t ? 'text-white' : 'text-black'}`,
                  children: 'more_vert',
               }),
            }),
         ],
      });
   };
function w1({
   img: e,
   name: t,
   text: n,
   date: r,
   tag: s,
   likes: i,
   comment: o,
   userId: l,
   id: a,
   mode: u,
   ellipse: c,
   setEllipse: f,
   query: h,
   isLiked: m,
}) {
   let [v] = [localStorage.getItem('-jwtKey-')],
      [x, C] = w.useState(!1),
      { commentMod: y } = w.useContext(xo),
      { reft: p } = w.useContext(tn),
      { status: g, data: S } = jt({
         queryKey: ['getComment', 'comment', y, p],
         queryFn: async () =>
            (
               await fetch(`${Q}/function/post/comment/get/${y}`, {
                  method: 'GET',
                  headers: { 'Content-Type': 'application/json', Authorization: `${v}` },
               })
            ).json(),
         enabled: !!y,
      });
   return (
      w.useEffect(() => {
         g === 'success' && C(!0);
      }, [g]),
      d.jsxs(d.Fragment, {
         children: [
            d.jsxs('section', {
               className: `${u ? 'bg-[hsl(0,0%,15%)] sm:rounded-lg sm:shadow-lg' : 'bg-[hsl(0,0%,100%)]'} ${
                  x ? 'overflow-y-scroll' : ''
               } flex flex-col items-center w-full sm:shadow sm:border-none p-3 sm:rounded max-h-[400px] relative`,
               'data-user': l,
               'data-post': a,
               children: [
                  d.jsx('div', { className: `${c === a ? 'flex' : 'hidden'} absolute w-full h-full top-0 bg-black bg-opacity-30` }),
                  d.jsx(x1, { name: t, date: r, tag: s, userId: l, setEllipse: f, ellipse: c, query: h, mode: u, id: a }),
                  d.jsx('div', {
                     className: 'w-full flex justify-start my-0.5 ml-5 max-h-[30%] overflow-scroll',
                     id: 'post_scroll',
                     children: d.jsx('p', {
                        className: `${u ? 'text-slate-100' : 'text-[#191919]'} text-sm text-left font-play font-medium h-auto`,
                        children: n,
                     }),
                  }),
                  d.jsx('div', {
                     className: 'w-full h-auto',
                     children: e
                        ? d.jsx('img', { src: e, className: 'object-cover w-full max-h-[150px] rounded shadow', alt: 'post_image' })
                        : d.jsx(d.Fragment, {}),
                  }),
                  d.jsx(m1, { mode: u, likes: i, comment: o, userId: l, id: a, query: h, isLiked: m }),
                  d.jsx('div', {
                     className: `flex flex-col w-full gap-4 shadow-inner justify-center ${u ? 'bg-[#181717]' : ''} mb-2 ${
                        x && y === a ? 'w-full flex min-h-[250px] sticky top-0 overflow-scroll' : 'hidden'
                     }`,
                     children:
                        S && S.comments.length > 0
                           ? S.comments.map((j, k) =>
                                d.jsxs(
                                   'div',
                                   {
                                      className: 'flex flex-row items-start w-full p-2 px-4 border-y',
                                      children: [
                                         d.jsx('div', {
                                            className: `${u ? 'border-green-200' : 'border-black'} w-10 h-10 rounded-full shadow border`,
                                         }),
                                         d.jsxs('div', {
                                            className: 'flex flex-col items-start ml-3',
                                            children: [
                                               d.jsx('p', {
                                                  className: `${
                                                     u ? 'text-[hsl(0,0%,90%)]' : 'text-[hsl(0,0%,20%)]'
                                                  } font-play text-sm text-left ml-3 font-semibold`,
                                                  children: j.name,
                                               }),
                                               d.jsx('p', {
                                                  className: `${
                                                     u ? 'text-[hsl(0,0%,90%)]' : 'text-[hsl(0,0%,10%)]'
                                                  } font-play text-xs text-left ml-3 font-medium`,
                                                  children: j.text,
                                               }),
                                            ],
                                         }),
                                      ],
                                   },
                                   k
                                )
                             )
                           : g === 'loading'
                           ? d.jsx('div', {
                                className: 'w-full flex justify-center h-full',
                                children: d.jsx('i', {
                                   className: 'text-xl self-center material-icons-outlined animate-spin',
                                   children: 'autorenew',
                                }),
                             })
                           : d.jsx(Ru, { text: 'Comment section', size: 'w-full' }),
                  }),
                  d.jsx(g1, { mode: u, query: h, postId: a }),
               ],
            }),
            d.jsx('div', { className: 'h-[1px] sm:hidden flex w-full bg-[hsl(0,0%,80%)]' }),
         ],
      })
   );
}
const S1 = () => {
      let e = localStorage.getItem('-jwtKey-'),
         { mode: t } = w.useContext(Ge),
         [n, r] = w.useState('');
      const s = jt({
         queryFn: async () =>
            (
               await fetch(`${Q}/function/post/get`, {
                  method: 'GET',
                  headers: { 'Content-Type': 'application/json', Authorization: `${e}` },
               })
            ).json(),
         queryKey: ['post', 'getpost'],
         enabled: !!Q,
      });
      let {
         isSuccess: i,
         data: o,
         isError: l,
         refetch: a,
      } = jt({
         queryFn: async () =>
            (await fetch(`${Q}/getUser`, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `${e}` } })).json(),
         queryKey: ['getUser', 'common'],
      });
      if ((l && a(), s.status === 'error' && s.refetch({ queryKey: ['post', 'getpost'] }), s.status === 'loading'))
         return d.jsx(Es, { on: s.status === 'loading' });
      if (s.status === 'success' && s.data) {
         let u = s.data.data;
         return d.jsx('main', {
            className: 'grid sm:grid-cols-2 grid-cols-1 items-start sm:mt-10 mt-2 w-full mx-auto sm:gap-4',
            children: u.map((c, f) => {
               var h;
               return d.jsx(
                  'div',
                  {
                     children: d.jsx(w1, {
                        img: (c.img || '') ?? px,
                        name: c.name,
                        text: c.text,
                        date: c.createdAt,
                        tag: c.tag,
                        likes: c.likes,
                        comment: c.comment,
                        userId: c.userId,
                        id: c._id,
                        mode: t,
                        ellipse: n,
                        setEllipse: r,
                        query: s,
                        isLiked: i && o ? ((h = c.likeUserId) == null ? void 0 : h.includes(o.user._id)) : !1,
                     }),
                  },
                  f
               );
            }),
         });
      }
   },
   C1 = () => {
      let e = localStorage.getItem('-jwtKey-'),
         { reft: t } = w.useContext(tn),
         { mode: n } = w.useContext(Ge),
         [r, s] = w.useState(1),
         i = w.useMemo(() => (n ? yr : mr), [n]);
      const {
            data: o,
            isLoading: l,
            isSuccess: a,
         } = jt({
            queryFn: async () =>
               (
                  await fetch(`${Q}/explore/get`, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `${e}` } })
               ).json(),
            queryKey: ['explore', 'getExplore', t, r],
            enabled: !!Q,
         }),
         u = He({
            mutationFn: async (c) =>
               (
                  await fetch(`${Q}/friend/add`, {
                     method: 'PUT',
                     headers: { 'Content-Type': 'application/json', Authorization: `${e}` },
                     body: JSON.stringify({ id: c }),
                  })
               ).json(),
            mutationKey: ['updateExplore'],
            onSuccess() {
               s(Math.floor(Math.random() * 1e3));
            },
         });
      if (l) return d.jsx(Es, { on: l });
      if (a && o)
         return d.jsxs('main', {
            className: 'flex flex-col items-center w-full justify-center',
            children: [
               d.jsx('header', {
                  className: 'w-full flex justify-center mb-2 border-b border-gray-200',
                  children: d.jsx('h1', {
                     className: `${n ? 'text-[hsl(0,0%,90%)]' : 'text-[hsl(0,0%,10%)]'} font-play text-xl`,
                     children: 'Explore users',
                  }),
               }),
               ' ',
               d.jsx('section', {
                  className: 'sm:w-[90%] w-[97%] mx-auto grid grid-cols-1 gap-4',
                  children:
                     a && o && o.explore.length > 0
                        ? o == null
                           ? void 0
                           : o.explore.map((c, f) =>
                                d.jsxs(
                                   'div',
                                   {
                                      className: `flex flex-row items-center w-full p-3 justify-between border ${
                                         n ? 'bg-[hsl(0,0%,10%)] border-[hsl(0,0%,20%)] text-white' : 'bg-white border border-[#c4c4c4]'
                                      } rounded-lg`,
                                      children: [
                                         d.jsxs('div', {
                                            className: 'flex flex-row items-center',
                                            children: [
                                               d.jsx('img', {
                                                  src: c.profileImg || i,
                                                  alt: 'explore user image',
                                                  className: 'w-10 h-10 rounded-full border border-[#c4c4c4] object-cover',
                                               }),
                                               d.jsx('p', {
                                                  className: 'flex justify-start ml-3 font-open capitalize text-base font-semibold',
                                                  children: c.name,
                                               }),
                                            ],
                                         }),
                                         d.jsx('button', {
                                            className: `${
                                               n ? 'bg-[hsl(0,0%,30%)]' : 'bg-[hsl(0,0%,20%)]'
                                            } rounded-lg px-8 flex justify-center`,
                                            onClick: () => u.mutate(c._id),
                                            children: d.jsx('i', {
                                               className: 'text-white font-thin text-xl self-center material-icons-outlined',
                                               children: 'person_add',
                                            }),
                                         }),
                                      ],
                                   },
                                   f
                                )
                             )
                        : d.jsx(Ru, { text: 'Friend List', size: 'w-1/2' }),
               }),
            ],
         });
   },
   P1 = () => {
      let e = localStorage.getItem('-jwtKey-'),
         { reft: t, updateRef: n } = w.useContext(tn),
         { mode: r } = w.useContext(Ge),
         s = w.useMemo(() => (r ? yr : mr), [r]);
      const {
            data: i,
            isLoading: o,
            isSuccess: l,
         } = jt({
            queryFn: async () =>
               (
                  await fetch(`${Q}/friend/get`, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `${e}` } })
               ).json(),
            queryKey: ['explore', 'getExplore', t],
            enabled: !!Q,
         }),
         a = He({
            mutationFn: async (u) =>
               (
                  await fetch(`${Q}/friend/remove`, {
                     method: 'PUT',
                     headers: { 'Content-Type': 'application/json', Authorization: `${e}` },
                     body: JSON.stringify({ unFriendId: u }),
                  })
               ).json(),
            mutationKey: ['deleteFriend', 'unFriend'],
            onSuccess() {
               n();
            },
         });
      if (o) return d.jsx(Es, { on: o });
      if (l && i)
         return d.jsxs('main', {
            className: 'flex flex-col items-center w-full justify-center',
            children: [
               d.jsx('header', {
                  className: 'w-full flex justify-center mb-2 border-b border-gray-200',
                  children: d.jsx('h1', {
                     className: `${r ? 'text-[hsl(0,0%,90%)]' : 'text-[hsl(0,0%,10%)]'} font-play text-xl`,
                     children: 'Followings',
                  }),
               }),
               d.jsx('section', {
                  className: 'sm:w-[90%] w-[97%] mx-auto grid grid-cols-1 gap-4',
                  children:
                     l && i && i.friends.length > 0
                        ? i == null
                           ? void 0
                           : i.friends.map((u, c) =>
                                d.jsxs(
                                   'div',
                                   {
                                      'data-user': u.frndId,
                                      className: `flex flex-row items-center w-full p-3 justify-between border ${
                                         r ? 'bg-[hsl(0,0%,10%)] border-[hsl(0,0%,20%)] text-white' : 'bg-white border border-[#c4c4c4]'
                                      } rounded-lg`,
                                      children: [
                                         d.jsxs('div', {
                                            className: 'flex flex-row items-center',
                                            children: [
                                               d.jsx('img', {
                                                  src: u.profileImg || s,
                                                  alt: 'explore user image',
                                                  className: 'w-10 h-10 rounded-full border border-[#c4c4c4] object-cover',
                                               }),
                                               d.jsx('p', {
                                                  className: 'flex justify-start ml-3 font-play capitalize text-base font-semibold',
                                                  children: u.frndName,
                                               }),
                                            ],
                                         }),
                                         d.jsxs('div', {
                                            className: 'flex flex-row items-center w-auto',
                                            children: [
                                               d.jsx('button', {
                                                  className: `${
                                                     r ? 'bg-[hsl(0,0%,30%)]' : 'bg-[hsl(0,0%,20%)]'
                                                  } rounded-lg px-8 flex justify-center`,
                                                  children: d.jsx('i', {
                                                     className: 'text-white font-thin text-xl self-center material-icons-outlined',
                                                     children: 'check_circle',
                                                  }),
                                               }),
                                               d.jsx('button', {
                                                  className: `${
                                                     r ? 'bg-[hsl(0,0%,30%)]' : 'bg-[hsl(0,0%,20%)]'
                                                  } rounded-lg px-5 flex justify-center ml-3 py-1`,
                                                  onClick: () => a.mutate(u.frndId),
                                                  children: d.jsx('p', {
                                                     className: 'text-white font-normal text-sm self-center',
                                                     children: 'unfollow',
                                                  }),
                                               }),
                                            ],
                                         }),
                                      ],
                                   },
                                   c
                                )
                             )
                        : d.jsx(Ru, { text: 'Friend List', size: 'w-1/2' }),
               }),
            ],
         });
   },
   j1 = () => {
      let { mode: e } = w.useContext(Ge),
         t = pr(),
         [n, r] = w.useState({ text: '', img: '', likes: 0, comment: [], postId: '' }),
         s = localStorage.getItem('-jwtKey-');
      const i = (l) => {
         let a;
         l.target.files !== null && (a = l.target.files[0]);
         let u = new FileReader();
         (u.onload = () => {
            r((c) => ({ ...c, img: u.result }));
         }),
            u.readAsDataURL(a || new Blob());
      };
      let o = He({
         mutationFn: async () =>
            await (
               await fetch(`${Q}/function/post/post`, {
                  method: 'POST',
                  headers: { Authorization: `${s}`, 'Content-Type': 'application/json' },
                  body: JSON.stringify(n),
               })
            ).json(),
         mutationKey: ['post'],
         onSuccess(l) {
            console.log(l), t(-1);
         },
      });
      return d.jsxs('section', {
         children: [
            d.jsx(Cm, {}),
            d.jsxs('section', {
               className: `flex flex-col items-center sm:w-1/2 mx-auto w-full p-4
      ${e ? 'bg-[#4b4b4bfd]' : 'bg-[#ffffff] shadow-2xl'}`,
               children: [
                  d.jsx('div', {
                     className: 'sm:w-[45%] ml-2 h-auto',
                     children: n.img
                        ? d.jsx('img', { src: `${n.img}`, className: 'object-cover rounded-lg shadow w-full', alt: 'post' })
                        : d.jsx(d.Fragment, {}),
                  }),
                  d.jsx('textarea', {
                     onChange: (l) => r((a) => ({ ...a, text: l.target.value })),
                     className: `font-play font-semibold text-left p-3 text-base border w-full outline-none ${
                        e ? 'border-[#2b2b2b] bg-[#464646] text-[#F7F7F9]' : 'text-[#2B2B2B] border-gray-200 bg-[#FAFAF9]'
                     }`,
                  }),
                  d.jsxs('div', {
                     className: 'flex flex-row items-center w-full justify-between',
                     children: [
                        d.jsx('div', {
                           className: 'w-auto h-auto',
                           children: d.jsx('input', {
                              type: 'file',
                              className: 'font-play text-base font-medium',
                              placeholder: 'Image',
                              onChange: (l) => i(l),
                           }),
                        }),
                        d.jsxs('div', {
                           className: 'flex flex-row items-center mt-3',
                           children: [
                              d.jsx('div', {
                                 className: 'mr-5 w-auto h-auto',
                                 onClick: () => t(-1),
                                 children: d.jsx(Rf, { text: 'Go back', color: e ? 'text-gray-50' : 'text-[#191919]', bg: 'bg-green-200' }),
                              }),
                              d.jsx('div', {
                                 className: 'w-auto h-auto',
                                 onClick: () => {
                                    (n.text || n.img) && o.mutate();
                                 },
                                 children: d.jsx(Rf, { text: 'Post', color: e ? 'text-gray-50' : 'text-[#191919]', bg: 'bg-orange-200' }),
                              }),
                           ],
                        }),
                     ],
                  }),
               ],
            }),
         ],
      });
   },
   E1 = () => {
      let e = localStorage.getItem('-jwtKey-'),
         { reft: t, updateRef: n } = w.useContext(tn),
         { mode: r } = w.useContext(Ge);
      const { data: s, isLoading: i } = jt({
            queryFn: async () =>
               (
                  await fetch(`${Q}/notification/get`, {
                     method: 'GET',
                     headers: { 'Content-Type': 'application/json', Authorization: `${e}` },
                  })
               ).json(),
            queryKey: ['getNotifications', t],
         }),
         o = He({
            mutationFn: async (l) =>
               (
                  await fetch(`${Q}/notification/delete`, {
                     method: 'DELETE',
                     headers: { 'Content-Type': 'application/json', Authorization: `${e}` },
                     body: JSON.stringify({ id: l }),
                  })
               ).json(),
            mutationKey: ['removeNotification', t],
            onSuccess() {
               n();
            },
         });
      return i
         ? d.jsx(Es, { on: i })
         : d.jsxs('section', {
              className: 'flex flex-col items-center w-full px-3',
              children: [
                 d.jsx('header', {
                    className: 'w-full flex justify-center mb-2 border-b border-gray-200',
                    children: d.jsx('h1', {
                       className: `${r ? 'text-[hsl(0,0%,90%)]' : 'text-[hsl(0,0%,10%)]'} font-play text-xl`,
                       children: 'Notifications',
                    }),
                 }),
                 d.jsx('section', {
                    className: 'grid grid-cols-1 w-full gap-3',
                    children: s.list.map((l) =>
                       l.type == 'success'
                          ? d.jsxs('div', {
                               className: `border-green-700 border flex flex-row items-center w-full justify-between p-3 rounded ${
                                  r ? 'bg-[hsl(127,14%,26%)]' : 'bg-green-100'
                               }`,
                               children: [
                                  d.jsxs('div', {
                                     className: 'flex flex-row items-center',
                                     children: [
                                        d.jsx('i', { className: 'font-thin text-xl fa text-green-700 mr-4', children: '' }),
                                        d.jsx('p', {
                                           className: `${
                                              r ? 'text-[hsl(0,0%,90%)]' : 'text-[hsl(0,0%,20%)]'
                                           } font-open text-sm text-left font-semibold`,
                                           children: l.text,
                                        }),
                                     ],
                                  }),
                                  d.jsx('div', {
                                     className: 'flex justify-center cursor-pointer',
                                     onClick: () => o.mutate(l._id),
                                     children: d.jsx('i', { className: 'text-xl self-center material-icons-outlined', children: 'close' }),
                                  }),
                               ],
                            })
                          : d.jsxs('div', {
                               className: `border-red-700 border flex flex-row items-center w-full justify-between p-3 rounded ${
                                  r ? 'bg-[hsl(0,36%,31%)]' : 'bg-red-100'
                               }`,
                               children: [
                                  d.jsxs('div', {
                                     className: 'flex flex-row items-center',
                                     children: [
                                        d.jsx('i', { className: 'font-thin text-xl fa text-red-600 mr-4', children: '' }),
                                        d.jsx('p', {
                                           className: `${
                                              r ? 'text-[hsl(0,0%,90%)]' : 'text-[hsl(0,0%,20%)]'
                                           } font-open text-sm text-left font-semibold`,
                                           children: l.text,
                                        }),
                                     ],
                                  }),
                                  d.jsx('div', {
                                     className: 'flex justify-center cursor-pointer',
                                     onClick: () => o.mutate(l._id),
                                     children: d.jsx('i', { className: 'text-xl self-center material-icons-outlined', children: 'close' }),
                                  }),
                               ],
                            })
                    ),
                 }),
              ],
           });
   },
   jm = w.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: 'never' }),
   wo = w.createContext({}),
   Fu = w.createContext(null),
   So = typeof document < 'u',
   Df = So ? w.useLayoutEffect : w.useEffect,
   Em = w.createContext({ strict: !1 });
function k1(e, t, n, r) {
   const { visualElement: s } = w.useContext(wo),
      i = w.useContext(Em),
      o = w.useContext(Fu),
      l = w.useContext(jm).reducedMotion,
      a = w.useRef();
   (r = r || i.renderer),
      !a.current &&
         r &&
         (a.current = r(e, {
            visualState: t,
            parent: s,
            props: n,
            presenceContext: o,
            blockInitialAnimation: o ? o.initial === !1 : !1,
            reducedMotionConfig: l,
         }));
   const u = a.current;
   return (
      w.useInsertionEffect(() => {
         u && u.update(n, o);
      }),
      Df(() => {
         u && u.render();
      }),
      w.useEffect(() => {
         u && u.updateFeatures();
      }),
      (window.HandoffAppearAnimations ? Df : w.useEffect)(() => {
         u && u.animationState && u.animationState.animateChanges();
      }),
      u
   );
}
function $n(e) {
   return typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current');
}
function A1(e, t, n) {
   return w.useCallback(
      (r) => {
         r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == 'function' ? n(r) : $n(n) && (n.current = r));
      },
      [t]
   );
}
function ps(e) {
   return typeof e == 'string' || Array.isArray(e);
}
function Co(e) {
   return typeof e == 'object' && typeof e.start == 'function';
}
const Du = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
   Mu = ['initial', ...Du];
function Po(e) {
   return Co(e.animate) || Mu.some((t) => ps(e[t]));
}
function km(e) {
   return !!(Po(e) || e.variants);
}
function T1(e, t) {
   if (Po(e)) {
      const { initial: n, animate: r } = e;
      return { initial: n === !1 || ps(n) ? n : void 0, animate: ps(r) ? r : void 0 };
   }
   return e.inherit !== !1 ? t : {};
}
function N1(e) {
   const { initial: t, animate: n } = T1(e, w.useContext(wo));
   return w.useMemo(() => ({ initial: t, animate: n }), [Mf(t), Mf(n)]);
}
function Mf(e) {
   return Array.isArray(e) ? e.join(' ') : e;
}
const Lf = {
      animation: ['animate', 'variants', 'whileHover', 'whileTap', 'exit', 'whileInView', 'whileFocus', 'whileDrag'],
      exit: ['exit'],
      drag: ['drag', 'dragControls'],
      focus: ['whileFocus'],
      hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
      tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
      pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
      inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
      layout: ['layout', 'layoutId'],
   },
   ms = {};
for (const e in Lf) ms[e] = { isEnabled: (t) => Lf[e].some((n) => !!t[n]) };
function R1(e) {
   for (const t in e) ms[t] = { ...ms[t], ...e[t] };
}
const Am = w.createContext({}),
   Tm = w.createContext({}),
   F1 = Symbol.for('motionComponentSymbol');
function D1({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: s }) {
   e && R1(e);
   function i(l, a) {
      let u;
      const c = { ...w.useContext(jm), ...l, layoutId: M1(l) },
         { isStatic: f } = c,
         h = N1(l),
         m = r(l, f);
      if (!f && So) {
         h.visualElement = k1(s, m, c, t);
         const v = w.useContext(Tm),
            x = w.useContext(Em).strict;
         h.visualElement && (u = h.visualElement.loadFeatures(c, x, e, v));
      }
      return w.createElement(
         wo.Provider,
         { value: h },
         u && h.visualElement ? w.createElement(u, { visualElement: h.visualElement, ...c }) : null,
         n(s, l, A1(m, h.visualElement, a), m, f, h.visualElement)
      );
   }
   const o = w.forwardRef(i);
   return (o[F1] = s), o;
}
function M1({ layoutId: e }) {
   const t = w.useContext(Am).id;
   return t && e !== void 0 ? t + '-' + e : e;
}
function L1(e) {
   function t(r, s = {}) {
      return D1(e(r, s));
   }
   if (typeof Proxy > 'u') return t;
   const n = new Map();
   return new Proxy(t, { get: (r, s) => (n.has(s) || n.set(s, t(s)), n.get(s)) });
}
const O1 = [
   'animate',
   'circle',
   'defs',
   'desc',
   'ellipse',
   'g',
   'image',
   'line',
   'filter',
   'marker',
   'mask',
   'metadata',
   'path',
   'pattern',
   'polygon',
   'polyline',
   'rect',
   'stop',
   'switch',
   'symbol',
   'svg',
   'text',
   'tspan',
   'use',
   'view',
];
function Lu(e) {
   return typeof e != 'string' || e.includes('-') ? !1 : !!(O1.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const zi = {};
function b1(e) {
   Object.assign(zi, e);
}
const ks = [
      'transformPerspective',
      'x',
      'y',
      'z',
      'translateX',
      'translateY',
      'translateZ',
      'scale',
      'scaleX',
      'scaleY',
      'rotate',
      'rotateX',
      'rotateY',
      'rotateZ',
      'skew',
      'skewX',
      'skewY',
   ],
   An = new Set(ks);
function Nm(e, { layout: t, layoutId: n }) {
   return An.has(e) || e.startsWith('origin') || ((t || n !== void 0) && (!!zi[e] || e === 'opacity'));
}
const Re = (e) => !!(e && e.getVelocity),
   I1 = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' },
   V1 = ks.length;
function _1(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, s) {
   let i = '';
   for (let o = 0; o < V1; o++) {
      const l = ks[o];
      if (e[l] !== void 0) {
         const a = I1[l] || l;
         i += `${a}(${e[l]}) `;
      }
   }
   return t && !e.z && (i += 'translateZ(0)'), (i = i.trim()), s ? (i = s(e, r ? '' : i)) : n && r && (i = 'none'), i;
}
const Rm = (e) => (t) => typeof t == 'string' && t.startsWith(e),
   Fm = Rm('--'),
   ya = Rm('var(--'),
   B1 = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
   z1 = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
   Yt = (e, t, n) => Math.min(Math.max(n, e), t),
   Tn = { test: (e) => typeof e == 'number', parse: parseFloat, transform: (e) => e },
   Qr = { ...Tn, transform: (e) => Yt(0, 1, e) },
   Gs = { ...Tn, default: 1 },
   Wr = (e) => Math.round(e * 1e5) / 1e5,
   jo = /(-)?([\d]*\.?[\d])+/g,
   Dm = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
   U1 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function As(e) {
   return typeof e == 'string';
}
const Ts = (e) => ({ test: (t) => As(t) && t.endsWith(e) && t.split(' ').length === 1, parse: parseFloat, transform: (t) => `${t}${e}` }),
   Tt = Ts('deg'),
   ft = Ts('%'),
   D = Ts('px'),
   $1 = Ts('vh'),
   Q1 = Ts('vw'),
   Of = { ...ft, parse: (e) => ft.parse(e) / 100, transform: (e) => ft.transform(e * 100) },
   bf = { ...Tn, transform: Math.round },
   Mm = {
      borderWidth: D,
      borderTopWidth: D,
      borderRightWidth: D,
      borderBottomWidth: D,
      borderLeftWidth: D,
      borderRadius: D,
      radius: D,
      borderTopLeftRadius: D,
      borderTopRightRadius: D,
      borderBottomRightRadius: D,
      borderBottomLeftRadius: D,
      width: D,
      maxWidth: D,
      height: D,
      maxHeight: D,
      size: D,
      top: D,
      right: D,
      bottom: D,
      left: D,
      padding: D,
      paddingTop: D,
      paddingRight: D,
      paddingBottom: D,
      paddingLeft: D,
      margin: D,
      marginTop: D,
      marginRight: D,
      marginBottom: D,
      marginLeft: D,
      rotate: Tt,
      rotateX: Tt,
      rotateY: Tt,
      rotateZ: Tt,
      scale: Gs,
      scaleX: Gs,
      scaleY: Gs,
      scaleZ: Gs,
      skew: Tt,
      skewX: Tt,
      skewY: Tt,
      distance: D,
      translateX: D,
      translateY: D,
      translateZ: D,
      x: D,
      y: D,
      z: D,
      perspective: D,
      transformPerspective: D,
      opacity: Qr,
      originX: Of,
      originY: Of,
      originZ: D,
      zIndex: bf,
      fillOpacity: Qr,
      strokeOpacity: Qr,
      numOctaves: bf,
   };
function Ou(e, t, n, r) {
   const { style: s, vars: i, transform: o, transformOrigin: l } = e;
   let a = !1,
      u = !1,
      c = !0;
   for (const f in t) {
      const h = t[f];
      if (Fm(f)) {
         i[f] = h;
         continue;
      }
      const m = Mm[f],
         v = z1(h, m);
      if (An.has(f)) {
         if (((a = !0), (o[f] = v), !c)) continue;
         h !== (m.default || 0) && (c = !1);
      } else f.startsWith('origin') ? ((u = !0), (l[f] = v)) : (s[f] = v);
   }
   if ((t.transform || (a || r ? (s.transform = _1(e.transform, n, c, r)) : s.transform && (s.transform = 'none')), u)) {
      const { originX: f = '50%', originY: h = '50%', originZ: m = 0 } = l;
      s.transformOrigin = `${f} ${h} ${m}`;
   }
}
const bu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Lm(e, t, n) {
   for (const r in t) !Re(t[r]) && !Nm(r, n) && (e[r] = t[r]);
}
function W1({ transformTemplate: e }, t, n) {
   return w.useMemo(() => {
      const r = bu();
      return Ou(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
   }, [t]);
}
function K1(e, t, n) {
   const r = e.style || {},
      s = {};
   return Lm(s, r, e), Object.assign(s, W1(e, t, n)), e.transformValues ? e.transformValues(s) : s;
}
function q1(e, t, n) {
   const r = {},
      s = K1(e, t, n);
   return (
      e.drag &&
         e.dragListener !== !1 &&
         ((r.draggable = !1),
         (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = 'none'),
         (s.touchAction = e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
      e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
      (r.style = s),
      r
   );
}
const H1 = new Set([
   'animate',
   'exit',
   'variants',
   'initial',
   'style',
   'values',
   'variants',
   'transition',
   'transformTemplate',
   'transformValues',
   'custom',
   'inherit',
   'onLayoutAnimationStart',
   'onLayoutAnimationComplete',
   'onLayoutMeasure',
   'onBeforeLayoutMeasure',
   'onAnimationStart',
   'onAnimationComplete',
   'onUpdate',
   'onDragStart',
   'onDrag',
   'onDragEnd',
   'onMeasureDragConstraints',
   'onDirectionLock',
   'onDragTransitionEnd',
   '_dragX',
   '_dragY',
   'onHoverStart',
   'onHoverEnd',
   'onViewportEnter',
   'onViewportLeave',
   'ignoreStrict',
   'viewport',
]);
function Ui(e) {
   return (
      e.startsWith('while') ||
      (e.startsWith('drag') && e !== 'draggable') ||
      e.startsWith('layout') ||
      e.startsWith('onTap') ||
      e.startsWith('onPan') ||
      H1.has(e)
   );
}
let Om = (e) => !Ui(e);
function G1(e) {
   e && (Om = (t) => (t.startsWith('on') ? !Ui(t) : e(t)));
}
try {
   G1(require('@emotion/is-prop-valid').default);
} catch {}
function Y1(e, t, n) {
   const r = {};
   for (const s in e)
      (s === 'values' && typeof e.values == 'object') ||
         ((Om(s) || (n === !0 && Ui(s)) || (!t && !Ui(s)) || (e.draggable && s.startsWith('onDrag'))) && (r[s] = e[s]));
   return r;
}
function If(e, t, n) {
   return typeof e == 'string' ? e : D.transform(t + n * e);
}
function X1(e, t, n) {
   const r = If(t, e.x, e.width),
      s = If(n, e.y, e.height);
   return `${r} ${s}`;
}
const J1 = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
   Z1 = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function ew(e, t, n = 1, r = 0, s = !0) {
   e.pathLength = 1;
   const i = s ? J1 : Z1;
   e[i.offset] = D.transform(-r);
   const o = D.transform(t),
      l = D.transform(n);
   e[i.array] = `${o} ${l}`;
}
function Iu(
   e,
   { attrX: t, attrY: n, attrScale: r, originX: s, originY: i, pathLength: o, pathSpacing: l = 1, pathOffset: a = 0, ...u },
   c,
   f,
   h
) {
   if ((Ou(e, u, c, h), f)) {
      e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
      return;
   }
   (e.attrs = e.style), (e.style = {});
   const { attrs: m, style: v, dimensions: x } = e;
   m.transform && (x && (v.transform = m.transform), delete m.transform),
      x && (s !== void 0 || i !== void 0 || v.transform) && (v.transformOrigin = X1(x, s !== void 0 ? s : 0.5, i !== void 0 ? i : 0.5)),
      t !== void 0 && (m.x = t),
      n !== void 0 && (m.y = n),
      r !== void 0 && (m.scale = r),
      o !== void 0 && ew(m, o, l, a, !1);
}
const bm = () => ({ ...bu(), attrs: {} }),
   Vu = (e) => typeof e == 'string' && e.toLowerCase() === 'svg';
function tw(e, t, n, r) {
   const s = w.useMemo(() => {
      const i = bm();
      return Iu(i, t, { enableHardwareAcceleration: !1 }, Vu(r), e.transformTemplate), { ...i.attrs, style: { ...i.style } };
   }, [t]);
   if (e.style) {
      const i = {};
      Lm(i, e.style, e), (s.style = { ...i, ...s.style });
   }
   return s;
}
function nw(e = !1) {
   return (n, r, s, { latestValues: i }, o) => {
      const a = (Lu(n) ? tw : q1)(r, i, o, n),
         c = { ...Y1(r, typeof n == 'string', e), ...a, ref: s },
         { children: f } = r,
         h = w.useMemo(() => (Re(f) ? f.get() : f), [f]);
      return w.createElement(n, { ...c, children: h });
   };
}
const _u = (e) => e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
function Im(e, { style: t, vars: n }, r, s) {
   Object.assign(e.style, t, s && s.getProjectionStyles(r));
   for (const i in n) e.style.setProperty(i, n[i]);
}
const Vm = new Set([
   'baseFrequency',
   'diffuseConstant',
   'kernelMatrix',
   'kernelUnitLength',
   'keySplines',
   'keyTimes',
   'limitingConeAngle',
   'markerHeight',
   'markerWidth',
   'numOctaves',
   'targetX',
   'targetY',
   'surfaceScale',
   'specularConstant',
   'specularExponent',
   'stdDeviation',
   'tableValues',
   'viewBox',
   'gradientTransform',
   'pathLength',
   'startOffset',
   'textLength',
   'lengthAdjust',
]);
function _m(e, t, n, r) {
   Im(e, t, void 0, r);
   for (const s in t.attrs) e.setAttribute(Vm.has(s) ? s : _u(s), t.attrs[s]);
}
function Bu(e, t) {
   const { style: n } = e,
      r = {};
   for (const s in n) (Re(n[s]) || (t.style && Re(t.style[s])) || Nm(s, e)) && (r[s] = n[s]);
   return r;
}
function Bm(e, t) {
   const n = Bu(e, t);
   for (const r in e)
      if (Re(e[r]) || Re(t[r])) {
         const s = ks.indexOf(r) !== -1 ? 'attr' + r.charAt(0).toUpperCase() + r.substring(1) : r;
         n[s] = e[r];
      }
   return n;
}
function zu(e, t, n, r = {}, s = {}) {
   return (
      typeof t == 'function' && (t = t(n !== void 0 ? n : e.custom, r, s)),
      typeof t == 'string' && (t = e.variants && e.variants[t]),
      typeof t == 'function' && (t = t(n !== void 0 ? n : e.custom, r, s)),
      t
   );
}
function rw(e) {
   const t = w.useRef(null);
   return t.current === null && (t.current = e()), t.current;
}
const $i = (e) => Array.isArray(e),
   sw = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
   iw = (e) => ($i(e) ? e[e.length - 1] || 0 : e);
function fi(e) {
   const t = Re(e) ? e.get() : e;
   return sw(t) ? t.toValue() : t;
}
function ow({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, s, i) {
   const o = { latestValues: lw(r, s, i, e), renderState: t() };
   return n && (o.mount = (l) => n(r, l, o)), o;
}
const zm = (e) => (t, n) => {
   const r = w.useContext(wo),
      s = w.useContext(Fu),
      i = () => ow(e, t, r, s);
   return n ? i() : rw(i);
};
function lw(e, t, n, r) {
   const s = {},
      i = r(e, {});
   for (const h in i) s[h] = fi(i[h]);
   let { initial: o, animate: l } = e;
   const a = Po(e),
      u = km(e);
   t && u && !a && e.inherit !== !1 && (o === void 0 && (o = t.initial), l === void 0 && (l = t.animate));
   let c = n ? n.initial === !1 : !1;
   c = c || o === !1;
   const f = c ? l : o;
   return (
      f &&
         typeof f != 'boolean' &&
         !Co(f) &&
         (Array.isArray(f) ? f : [f]).forEach((m) => {
            const v = zu(e, m);
            if (!v) return;
            const { transitionEnd: x, transition: C, ...y } = v;
            for (const p in y) {
               let g = y[p];
               if (Array.isArray(g)) {
                  const S = c ? g.length - 1 : 0;
                  g = g[S];
               }
               g !== null && (s[p] = g);
            }
            for (const p in x) s[p] = x[p];
         }),
      s
   );
}
const aw = {
      useVisualState: zm({
         scrapeMotionValuesFromProps: Bm,
         createRenderState: bm,
         onMount: (e, t, { renderState: n, latestValues: r }) => {
            try {
               n.dimensions = typeof t.getBBox == 'function' ? t.getBBox() : t.getBoundingClientRect();
            } catch {
               n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
            }
            Iu(n, r, { enableHardwareAcceleration: !1 }, Vu(t.tagName), e.transformTemplate), _m(t, n);
         },
      }),
   },
   uw = { useVisualState: zm({ scrapeMotionValuesFromProps: Bu, createRenderState: bu }) };
function cw(e, { forwardMotionProps: t = !1 }, n, r) {
   return { ...(Lu(e) ? aw : uw), preloadedFeatures: n, useRender: nw(t), createVisualElement: r, Component: e };
}
function yt(e, t, n, r = { passive: !0 }) {
   return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Um = (e) => (e.pointerType === 'mouse' ? typeof e.button != 'number' || e.button <= 0 : e.isPrimary !== !1);
function Eo(e, t = 'page') {
   return { point: { x: e[t + 'X'], y: e[t + 'Y'] } };
}
const fw = (e) => (t) => Um(t) && e(t, Eo(t));
function vt(e, t, n, r) {
   return yt(e, t, fw(n), r);
}
const dw = (e, t) => (n) => t(e(n)),
   Kt = (...e) => e.reduce(dw);
function $m(e) {
   let t = null;
   return () => {
      const n = () => {
         t = null;
      };
      return t === null ? ((t = e), n) : !1;
   };
}
const Vf = $m('dragHorizontal'),
   _f = $m('dragVertical');
function Qm(e) {
   let t = !1;
   if (e === 'y') t = _f();
   else if (e === 'x') t = Vf();
   else {
      const n = Vf(),
         r = _f();
      n && r
         ? (t = () => {
              n(), r();
           })
         : (n && n(), r && r());
   }
   return t;
}
function Wm() {
   const e = Qm(!0);
   return e ? (e(), !1) : !0;
}
class nn {
   constructor(t) {
      (this.isMounted = !1), (this.node = t);
   }
   update() {}
}
function hw(e) {
   let t = [],
      n = [],
      r = 0,
      s = !1,
      i = !1;
   const o = new WeakSet(),
      l = {
         schedule: (a, u = !1, c = !1) => {
            const f = c && s,
               h = f ? t : n;
            return u && o.add(a), h.indexOf(a) === -1 && (h.push(a), f && s && (r = t.length)), a;
         },
         cancel: (a) => {
            const u = n.indexOf(a);
            u !== -1 && n.splice(u, 1), o.delete(a);
         },
         process: (a) => {
            if (s) {
               i = !0;
               return;
            }
            if (((s = !0), ([t, n] = [n, t]), (n.length = 0), (r = t.length), r))
               for (let u = 0; u < r; u++) {
                  const c = t[u];
                  c(a), o.has(c) && (l.schedule(c), e());
               }
            (s = !1), i && ((i = !1), l.process(a));
         },
      };
   return l;
}
const K = { delta: 0, timestamp: 0, isProcessing: !1 },
   pw = 40;
let ga = !0,
   ys = !1;
const ko = ['read', 'update', 'preRender', 'render', 'postRender'],
   Zn = ko.reduce((e, t) => ((e[t] = hw(() => (ys = !0))), e), {}),
   mw = (e) => Zn[e].process(K),
   Km = (e) => {
      (ys = !1),
         (K.delta = ga ? 1e3 / 60 : Math.max(Math.min(e - K.timestamp, pw), 1)),
         (K.timestamp = e),
         (K.isProcessing = !0),
         ko.forEach(mw),
         (K.isProcessing = !1),
         ys && ((ga = !1), requestAnimationFrame(Km));
   },
   yw = () => {
      (ys = !0), (ga = !0), K.isProcessing || requestAnimationFrame(Km);
   },
   G = ko.reduce((e, t) => {
      const n = Zn[t];
      return (e[t] = (r, s = !1, i = !1) => (ys || yw(), n.schedule(r, s, i))), e;
   }, {});
function Et(e) {
   ko.forEach((t) => Zn[t].cancel(e));
}
function Bf(e, t) {
   const n = 'pointer' + (t ? 'enter' : 'leave'),
      r = 'onHover' + (t ? 'Start' : 'End'),
      s = (i, o) => {
         if (i.type === 'touch' || Wm()) return;
         const l = e.getProps();
         e.animationState && l.whileHover && e.animationState.setActive('whileHover', t), l[r] && G.update(() => l[r](i, o));
      };
   return vt(e.current, n, s, { passive: !e.getProps()[r] });
}
class gw extends nn {
   mount() {
      this.unmount = Kt(Bf(this.node, !0), Bf(this.node, !1));
   }
   unmount() {}
}
class vw extends nn {
   constructor() {
      super(...arguments), (this.isActive = !1);
   }
   onFocus() {
      let t = !1;
      try {
         t = this.node.current.matches(':focus-visible');
      } catch {
         t = !0;
      }
      !t || !this.node.animationState || (this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0));
   }
   onBlur() {
      !this.isActive || !this.node.animationState || (this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1));
   }
   mount() {
      this.unmount = Kt(
         yt(this.node.current, 'focus', () => this.onFocus()),
         yt(this.node.current, 'blur', () => this.onBlur())
      );
   }
   unmount() {}
}
const qm = (e, t) => (t ? (e === t ? !0 : qm(e, t.parentElement)) : !1),
   oe = (e) => e;
function rl(e, t) {
   if (!t) return;
   const n = new PointerEvent('pointer' + e);
   t(n, Eo(n));
}
class xw extends nn {
   constructor() {
      super(...arguments),
         (this.removeStartListeners = oe),
         (this.removeEndListeners = oe),
         (this.removeAccessibleListeners = oe),
         (this.startPointerPress = (t, n) => {
            if ((this.removeEndListeners(), this.isPressing)) return;
            const r = this.node.getProps(),
               i = vt(
                  window,
                  'pointerup',
                  (l, a) => {
                     if (!this.checkPressEnd()) return;
                     const { onTap: u, onTapCancel: c } = this.node.getProps();
                     G.update(() => {
                        qm(this.node.current, l.target) ? u && u(l, a) : c && c(l, a);
                     });
                  },
                  { passive: !(r.onTap || r.onPointerUp) }
               ),
               o = vt(window, 'pointercancel', (l, a) => this.cancelPress(l, a), { passive: !(r.onTapCancel || r.onPointerCancel) });
            (this.removeEndListeners = Kt(i, o)), this.startPress(t, n);
         }),
         (this.startAccessiblePress = () => {
            const t = (i) => {
                  if (i.key !== 'Enter' || this.isPressing) return;
                  const o = (l) => {
                     l.key !== 'Enter' ||
                        !this.checkPressEnd() ||
                        rl('up', (a, u) => {
                           const { onTap: c } = this.node.getProps();
                           c && G.update(() => c(a, u));
                        });
                  };
                  this.removeEndListeners(),
                     (this.removeEndListeners = yt(this.node.current, 'keyup', o)),
                     rl('down', (l, a) => {
                        this.startPress(l, a);
                     });
               },
               n = yt(this.node.current, 'keydown', t),
               r = () => {
                  this.isPressing && rl('cancel', (i, o) => this.cancelPress(i, o));
               },
               s = yt(this.node.current, 'blur', r);
            this.removeAccessibleListeners = Kt(n, s);
         });
   }
   startPress(t, n) {
      this.isPressing = !0;
      const { onTapStart: r, whileTap: s } = this.node.getProps();
      s && this.node.animationState && this.node.animationState.setActive('whileTap', !0), r && G.update(() => r(t, n));
   }
   checkPressEnd() {
      return (
         this.removeEndListeners(),
         (this.isPressing = !1),
         this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive('whileTap', !1),
         !Wm()
      );
   }
   cancelPress(t, n) {
      if (!this.checkPressEnd()) return;
      const { onTapCancel: r } = this.node.getProps();
      r && G.update(() => r(t, n));
   }
   mount() {
      const t = this.node.getProps(),
         n = vt(this.node.current, 'pointerdown', this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }),
         r = yt(this.node.current, 'focus', this.startAccessiblePress);
      this.removeStartListeners = Kt(n, r);
   }
   unmount() {
      this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
   }
}
const va = new WeakMap(),
   sl = new WeakMap(),
   ww = (e) => {
      const t = va.get(e.target);
      t && t(e);
   },
   Sw = (e) => {
      e.forEach(ww);
   };
function Cw({ root: e, ...t }) {
   const n = e || document;
   sl.has(n) || sl.set(n, {});
   const r = sl.get(n),
      s = JSON.stringify(t);
   return r[s] || (r[s] = new IntersectionObserver(Sw, { root: e, ...t })), r[s];
}
function Pw(e, t, n) {
   const r = Cw(t);
   return (
      va.set(e, n),
      r.observe(e),
      () => {
         va.delete(e), r.unobserve(e);
      }
   );
}
const jw = { some: 0, all: 1 };
class Ew extends nn {
   constructor() {
      super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
   }
   startObserver() {
      this.unmount();
      const { viewport: t = {} } = this.node.getProps(),
         { root: n, margin: r, amount: s = 'some', once: i } = t,
         o = { root: n ? n.current : void 0, rootMargin: r, threshold: typeof s == 'number' ? s : jw[s] },
         l = (a) => {
            const { isIntersecting: u } = a;
            if (this.isInView === u || ((this.isInView = u), i && !u && this.hasEnteredView)) return;
            u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive('whileInView', u);
            const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
               h = u ? c : f;
            h && h(a);
         };
      return Pw(this.node.current, o, l);
   }
   mount() {
      this.startObserver();
   }
   update() {
      if (typeof IntersectionObserver > 'u') return;
      const { props: t, prevProps: n } = this.node;
      ['amount', 'margin', 'root'].some(kw(t, n)) && this.startObserver();
   }
   unmount() {}
}
function kw({ viewport: e = {} }, { viewport: t = {} } = {}) {
   return (n) => e[n] !== t[n];
}
const Aw = { inView: { Feature: Ew }, tap: { Feature: xw }, focus: { Feature: vw }, hover: { Feature: gw } };
function Hm(e, t) {
   if (!Array.isArray(t)) return !1;
   const n = t.length;
   if (n !== e.length) return !1;
   for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
   return !0;
}
function Tw(e) {
   const t = {};
   return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function Nw(e) {
   const t = {};
   return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Ao(e, t, n) {
   const r = e.getProps();
   return zu(r, t, n !== void 0 ? n : r.custom, Tw(e), Nw(e));
}
const Rw = 'framerAppearId',
   Fw = 'data-' + _u(Rw);
let Dw = oe,
   Uu = oe;
const qt = (e) => e * 1e3,
   xt = (e) => e / 1e3,
   Mw = { current: !1 },
   Gm = (e) => Array.isArray(e) && typeof e[0] == 'number';
function Ym(e) {
   return !!(!e || (typeof e == 'string' && Xm[e]) || Gm(e) || (Array.isArray(e) && e.every(Ym)));
}
const Lr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
   Xm = {
      linear: 'linear',
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      circIn: Lr([0, 0.65, 0.55, 1]),
      circOut: Lr([0.55, 0, 1, 0.45]),
      backIn: Lr([0.31, 0.01, 0.66, -0.59]),
      backOut: Lr([0.33, 1.53, 0.69, 0.99]),
   };
function Jm(e) {
   if (e) return Gm(e) ? Lr(e) : Array.isArray(e) ? e.map(Jm) : Xm[e];
}
function Lw(e, t, n, { delay: r = 0, duration: s, repeat: i = 0, repeatType: o = 'loop', ease: l, times: a } = {}) {
   const u = { [t]: n };
   a && (u.offset = a);
   const c = Jm(l);
   return (
      Array.isArray(c) && (u.easing = c),
      e.animate(u, {
         delay: r,
         duration: s,
         easing: Array.isArray(c) ? 'linear' : c,
         fill: 'both',
         iterations: i + 1,
         direction: o === 'reverse' ? 'alternate' : 'normal',
      })
   );
}
const zf = { waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate') },
   il = {},
   Zm = {};
for (const e in zf) Zm[e] = () => (il[e] === void 0 && (il[e] = zf[e]()), il[e]);
function Ow(e, { repeat: t, repeatType: n = 'loop' }) {
   const r = t && n !== 'loop' && t % 2 === 1 ? 0 : e.length - 1;
   return e[r];
}
const ey = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
   bw = 1e-7,
   Iw = 12;
function Vw(e, t, n, r, s) {
   let i,
      o,
      l = 0;
   do (o = t + (n - t) / 2), (i = ey(o, r, s) - e), i > 0 ? (n = o) : (t = o);
   while (Math.abs(i) > bw && ++l < Iw);
   return o;
}
function Ns(e, t, n, r) {
   if (e === t && n === r) return oe;
   const s = (i) => Vw(i, 0, 1, e, n);
   return (i) => (i === 0 || i === 1 ? i : ey(s(i), t, r));
}
const _w = Ns(0.42, 0, 1, 1),
   Bw = Ns(0, 0, 0.58, 1),
   ty = Ns(0.42, 0, 0.58, 1),
   zw = (e) => Array.isArray(e) && typeof e[0] != 'number',
   ny = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
   ry = (e) => (t) => 1 - e(1 - t),
   sy = (e) => 1 - Math.sin(Math.acos(e)),
   $u = ry(sy),
   Uw = ny($u),
   iy = Ns(0.33, 1.53, 0.69, 0.99),
   Qu = ry(iy),
   $w = ny(Qu),
   Qw = (e) => ((e *= 2) < 1 ? 0.5 * Qu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
   Ww = {
      linear: oe,
      easeIn: _w,
      easeInOut: ty,
      easeOut: Bw,
      circIn: sy,
      circInOut: Uw,
      circOut: $u,
      backIn: Qu,
      backInOut: $w,
      backOut: iy,
      anticipate: Qw,
   },
   Uf = (e) => {
      if (Array.isArray(e)) {
         Uu(e.length === 4);
         const [t, n, r, s] = e;
         return Ns(t, n, r, s);
      } else if (typeof e == 'string') return Ww[e];
      return e;
   },
   Wu = (e, t) => (n) => !!((As(n) && U1.test(n) && n.startsWith(e)) || (t && Object.prototype.hasOwnProperty.call(n, t))),
   oy = (e, t, n) => (r) => {
      if (!As(r)) return r;
      const [s, i, o, l] = r.match(jo);
      return { [e]: parseFloat(s), [t]: parseFloat(i), [n]: parseFloat(o), alpha: l !== void 0 ? parseFloat(l) : 1 };
   },
   Kw = (e) => Yt(0, 255, e),
   ol = { ...Tn, transform: (e) => Math.round(Kw(e)) },
   yn = {
      test: Wu('rgb', 'red'),
      parse: oy('red', 'green', 'blue'),
      transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
         'rgba(' + ol.transform(e) + ', ' + ol.transform(t) + ', ' + ol.transform(n) + ', ' + Wr(Qr.transform(r)) + ')',
   };
function qw(e) {
   let t = '',
      n = '',
      r = '',
      s = '';
   return (
      e.length > 5
         ? ((t = e.substring(1, 3)), (n = e.substring(3, 5)), (r = e.substring(5, 7)), (s = e.substring(7, 9)))
         : ((t = e.substring(1, 2)),
           (n = e.substring(2, 3)),
           (r = e.substring(3, 4)),
           (s = e.substring(4, 5)),
           (t += t),
           (n += n),
           (r += r),
           (s += s)),
      { red: parseInt(t, 16), green: parseInt(n, 16), blue: parseInt(r, 16), alpha: s ? parseInt(s, 16) / 255 : 1 }
   );
}
const xa = { test: Wu('#'), parse: qw, transform: yn.transform },
   Qn = {
      test: Wu('hsl', 'hue'),
      parse: oy('hue', 'saturation', 'lightness'),
      transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
         'hsla(' + Math.round(e) + ', ' + ft.transform(Wr(t)) + ', ' + ft.transform(Wr(n)) + ', ' + Wr(Qr.transform(r)) + ')',
   },
   xe = {
      test: (e) => yn.test(e) || xa.test(e) || Qn.test(e),
      parse: (e) => (yn.test(e) ? yn.parse(e) : Qn.test(e) ? Qn.parse(e) : xa.parse(e)),
      transform: (e) => (As(e) ? e : e.hasOwnProperty('red') ? yn.transform(e) : Qn.transform(e)),
   },
   H = (e, t, n) => -n * e + n * t + e;
function ll(e, t, n) {
   return (
      n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
   );
}
function Hw({ hue: e, saturation: t, lightness: n, alpha: r }) {
   (e /= 360), (t /= 100), (n /= 100);
   let s = 0,
      i = 0,
      o = 0;
   if (!t) s = i = o = n;
   else {
      const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
         a = 2 * n - l;
      (s = ll(a, l, e + 1 / 3)), (i = ll(a, l, e)), (o = ll(a, l, e - 1 / 3));
   }
   return { red: Math.round(s * 255), green: Math.round(i * 255), blue: Math.round(o * 255), alpha: r };
}
const al = (e, t, n) => {
      const r = e * e;
      return Math.sqrt(Math.max(0, n * (t * t - r) + r));
   },
   Gw = [xa, yn, Qn],
   Yw = (e) => Gw.find((t) => t.test(e));
function $f(e) {
   const t = Yw(e);
   let n = t.parse(e);
   return t === Qn && (n = Hw(n)), n;
}
const ly = (e, t) => {
   const n = $f(e),
      r = $f(t),
      s = { ...n };
   return (i) => (
      (s.red = al(n.red, r.red, i)),
      (s.green = al(n.green, r.green, i)),
      (s.blue = al(n.blue, r.blue, i)),
      (s.alpha = H(n.alpha, r.alpha, i)),
      yn.transform(s)
   );
};
function Xw(e) {
   var t, n;
   return (
      isNaN(e) &&
      As(e) &&
      (((t = e.match(jo)) === null || t === void 0 ? void 0 : t.length) || 0) +
         (((n = e.match(Dm)) === null || n === void 0 ? void 0 : n.length) || 0) >
         0
   );
}
const ay = { regex: B1, countKey: 'Vars', token: '${v}', parse: oe },
   uy = { regex: Dm, countKey: 'Colors', token: '${c}', parse: xe.parse },
   cy = { regex: jo, countKey: 'Numbers', token: '${n}', parse: Tn.parse };
function ul(e, { regex: t, countKey: n, token: r, parse: s }) {
   const i = e.tokenised.match(t);
   i && ((e['num' + n] = i.length), (e.tokenised = e.tokenised.replace(t, r)), e.values.push(...i.map(s)));
}
function Qi(e) {
   const t = e.toString(),
      n = { value: t, tokenised: t, values: [], numVars: 0, numColors: 0, numNumbers: 0 };
   return n.value.includes('var(--') && ul(n, ay), ul(n, uy), ul(n, cy), n;
}
function fy(e) {
   return Qi(e).values;
}
function dy(e) {
   const { values: t, numColors: n, numVars: r, tokenised: s } = Qi(e),
      i = t.length;
   return (o) => {
      let l = s;
      for (let a = 0; a < i; a++)
         a < r
            ? (l = l.replace(ay.token, o[a]))
            : a < r + n
            ? (l = l.replace(uy.token, xe.transform(o[a])))
            : (l = l.replace(cy.token, Wr(o[a])));
      return l;
   };
}
const Jw = (e) => (typeof e == 'number' ? 0 : e);
function Zw(e) {
   const t = fy(e);
   return dy(e)(t.map(Jw));
}
const Xt = { test: Xw, parse: fy, createTransformer: dy, getAnimatableNone: Zw },
   hy = (e, t) => (n) => `${n > 0 ? t : e}`;
function py(e, t) {
   return typeof e == 'number' ? (n) => H(e, t, n) : xe.test(e) ? ly(e, t) : e.startsWith('var(') ? hy(e, t) : yy(e, t);
}
const my = (e, t) => {
      const n = [...e],
         r = n.length,
         s = e.map((i, o) => py(i, t[o]));
      return (i) => {
         for (let o = 0; o < r; o++) n[o] = s[o](i);
         return n;
      };
   },
   eS = (e, t) => {
      const n = { ...e, ...t },
         r = {};
      for (const s in n) e[s] !== void 0 && t[s] !== void 0 && (r[s] = py(e[s], t[s]));
      return (s) => {
         for (const i in r) n[i] = r[i](s);
         return n;
      };
   },
   yy = (e, t) => {
      const n = Xt.createTransformer(t),
         r = Qi(e),
         s = Qi(t);
      return r.numVars === s.numVars && r.numColors === s.numColors && r.numNumbers >= s.numNumbers
         ? Kt(my(r.values, s.values), n)
         : hy(e, t);
   },
   gs = (e, t, n) => {
      const r = t - e;
      return r === 0 ? 1 : (n - e) / r;
   },
   Qf = (e, t) => (n) => H(e, t, n);
function tS(e) {
   return typeof e == 'number'
      ? Qf
      : typeof e == 'string'
      ? xe.test(e)
         ? ly
         : yy
      : Array.isArray(e)
      ? my
      : typeof e == 'object'
      ? eS
      : Qf;
}
function nS(e, t, n) {
   const r = [],
      s = n || tS(e[0]),
      i = e.length - 1;
   for (let o = 0; o < i; o++) {
      let l = s(e[o], e[o + 1]);
      if (t) {
         const a = Array.isArray(t) ? t[o] || oe : t;
         l = Kt(a, l);
      }
      r.push(l);
   }
   return r;
}
function gy(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
   const i = e.length;
   if ((Uu(i === t.length), i === 1)) return () => t[0];
   e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
   const o = nS(t, r, s),
      l = o.length,
      a = (u) => {
         let c = 0;
         if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
         const f = gs(e[c], e[c + 1], u);
         return o[c](f);
      };
   return n ? (u) => a(Yt(e[0], e[i - 1], u)) : a;
}
function rS(e, t) {
   const n = e[e.length - 1];
   for (let r = 1; r <= t; r++) {
      const s = gs(0, t, r);
      e.push(H(n, 1, s));
   }
}
function sS(e) {
   const t = [0];
   return rS(t, e.length - 1), t;
}
function iS(e, t) {
   return e.map((n) => n * t);
}
function oS(e, t) {
   return e.map(() => t || ty).splice(0, e.length - 1);
}
function Wi({ duration: e = 300, keyframes: t, times: n, ease: r = 'easeInOut' }) {
   const s = zw(r) ? r.map(Uf) : Uf(r),
      i = { done: !1, value: t[0] },
      o = iS(n && n.length === t.length ? n : sS(t), e),
      l = gy(o, t, { ease: Array.isArray(s) ? s : oS(t, s) });
   return { calculatedDuration: e, next: (a) => ((i.value = l(a)), (i.done = a >= e), i) };
}
function vy(e, t) {
   return t ? e * (1e3 / t) : 0;
}
const lS = 5;
function xy(e, t, n) {
   const r = Math.max(t - lS, 0);
   return vy(n - e(r), t - r);
}
const cl = 0.001,
   aS = 0.01,
   Wf = 10,
   uS = 0.05,
   cS = 1;
function fS({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
   let s, i;
   Dw(e <= qt(Wf));
   let o = 1 - t;
   (o = Yt(uS, cS, o)),
      (e = Yt(aS, Wf, xt(e))),
      o < 1
         ? ((s = (u) => {
              const c = u * o,
                 f = c * e,
                 h = c - n,
                 m = wa(u, o),
                 v = Math.exp(-f);
              return cl - (h / m) * v;
           }),
           (i = (u) => {
              const f = u * o * e,
                 h = f * n + n,
                 m = Math.pow(o, 2) * Math.pow(u, 2) * e,
                 v = Math.exp(-f),
                 x = wa(Math.pow(u, 2), o);
              return ((-s(u) + cl > 0 ? -1 : 1) * ((h - m) * v)) / x;
           }))
         : ((s = (u) => {
              const c = Math.exp(-u * e),
                 f = (u - n) * e + 1;
              return -cl + c * f;
           }),
           (i = (u) => {
              const c = Math.exp(-u * e),
                 f = (n - u) * (e * e);
              return c * f;
           }));
   const l = 5 / e,
      a = hS(s, i, l);
   if (((e = qt(e)), isNaN(a))) return { stiffness: 100, damping: 10, duration: e };
   {
      const u = Math.pow(a, 2) * r;
      return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
   }
}
const dS = 12;
function hS(e, t, n) {
   let r = n;
   for (let s = 1; s < dS; s++) r = r - e(r) / t(r);
   return r;
}
function wa(e, t) {
   return e * Math.sqrt(1 - t * t);
}
const pS = ['duration', 'bounce'],
   mS = ['stiffness', 'damping', 'mass'];
function Kf(e, t) {
   return t.some((n) => e[n] !== void 0);
}
function yS(e) {
   let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };
   if (!Kf(e, mS) && Kf(e, pS)) {
      const n = fS(e);
      (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
   }
   return t;
}
function wy({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
   const s = e[0],
      i = e[e.length - 1],
      o = { done: !1, value: s },
      { stiffness: l, damping: a, mass: u, velocity: c, duration: f, isResolvedFromDuration: h } = yS(r),
      m = c ? -xt(c) : 0,
      v = a / (2 * Math.sqrt(l * u)),
      x = i - s,
      C = xt(Math.sqrt(l / u)),
      y = Math.abs(x) < 5;
   n || (n = y ? 0.01 : 2), t || (t = y ? 0.005 : 0.5);
   let p;
   if (v < 1) {
      const g = wa(C, v);
      p = (S) => {
         const j = Math.exp(-v * C * S);
         return i - j * (((m + v * C * x) / g) * Math.sin(g * S) + x * Math.cos(g * S));
      };
   } else if (v === 1) p = (g) => i - Math.exp(-C * g) * (x + (m + C * x) * g);
   else {
      const g = C * Math.sqrt(v * v - 1);
      p = (S) => {
         const j = Math.exp(-v * C * S),
            k = Math.min(g * S, 300);
         return i - (j * ((m + v * C * x) * Math.sinh(k) + g * x * Math.cosh(k))) / g;
      };
   }
   return {
      calculatedDuration: (h && f) || null,
      next: (g) => {
         const S = p(g);
         if (h) o.done = g >= f;
         else {
            let j = m;
            g !== 0 && (v < 1 ? (j = xy(p, g, S)) : (j = 0));
            const k = Math.abs(j) <= n,
               E = Math.abs(i - S) <= t;
            o.done = k && E;
         }
         return (o.value = o.done ? i : S), o;
      },
   };
}
function qf({
   keyframes: e,
   velocity: t = 0,
   power: n = 0.8,
   timeConstant: r = 325,
   bounceDamping: s = 10,
   bounceStiffness: i = 500,
   modifyTarget: o,
   min: l,
   max: a,
   restDelta: u = 0.5,
   restSpeed: c,
}) {
   const f = e[0],
      h = { done: !1, value: f },
      m = (P) => (l !== void 0 && P < l) || (a !== void 0 && P > a),
      v = (P) => (l === void 0 ? a : a === void 0 || Math.abs(l - P) < Math.abs(a - P) ? l : a);
   let x = n * t;
   const C = f + x,
      y = o === void 0 ? C : o(C);
   y !== C && (x = y - f);
   const p = (P) => -x * Math.exp(-P / r),
      g = (P) => y + p(P),
      S = (P) => {
         const R = p(P),
            F = g(P);
         (h.done = Math.abs(R) <= u), (h.value = h.done ? y : F);
      };
   let j, k;
   const E = (P) => {
      m(h.value) &&
         ((j = P),
         (k = wy({ keyframes: [h.value, v(h.value)], velocity: xy(g, P, h.value), damping: s, stiffness: i, restDelta: u, restSpeed: c })));
   };
   return (
      E(0),
      {
         calculatedDuration: null,
         next: (P) => {
            let R = !1;
            return !k && j === void 0 && ((R = !0), S(P), E(P)), j !== void 0 && P > j ? k.next(P - j) : (!R && S(P), h);
         },
      }
   );
}
const gS = (e) => {
      const t = ({ timestamp: n }) => e(n);
      return { start: () => G.update(t, !0), stop: () => Et(t), now: () => (K.isProcessing ? K.timestamp : performance.now()) };
   },
   Hf = 2e4;
function Gf(e) {
   let t = 0;
   const n = 50;
   let r = e.next(t);
   for (; !r.done && t < Hf; ) (t += n), (r = e.next(t));
   return t >= Hf ? 1 / 0 : t;
}
const vS = { decay: qf, inertia: qf, tween: Wi, keyframes: Wi, spring: wy };
function Ki({
   autoplay: e = !0,
   delay: t = 0,
   driver: n = gS,
   keyframes: r,
   type: s = 'keyframes',
   repeat: i = 0,
   repeatDelay: o = 0,
   repeatType: l = 'loop',
   onPlay: a,
   onStop: u,
   onComplete: c,
   onUpdate: f,
   ...h
}) {
   let m = 1,
      v = !1,
      x,
      C;
   const y = () => {
      x && x(),
         (C = new Promise((L) => {
            x = L;
         }));
   };
   y();
   let p;
   const g = vS[s] || Wi;
   let S;
   g !== Wi && typeof r[0] != 'number' && ((S = gy([0, 100], r, { clamp: !1 })), (r = [0, 100]));
   const j = g({ ...h, keyframes: r });
   let k;
   l === 'mirror' && (k = g({ ...h, keyframes: [...r].reverse(), velocity: -(h.velocity || 0) }));
   let E = 'idle',
      P = null,
      R = null,
      F = null;
   j.calculatedDuration === null && i && (j.calculatedDuration = Gf(j));
   const { calculatedDuration: B } = j;
   let ve = 1 / 0,
      je = 1 / 0;
   B !== null && ((ve = B + o), (je = ve * (i + 1) - o));
   let ee = 0;
   const te = (L) => {
         if (R === null) return;
         m > 0 && (R = Math.min(R, L)), P !== null ? (ee = P) : (ee = (L - R) * m);
         const W = ee - t,
            rn = W < 0;
         (ee = Math.max(W, 0)), E === 'finished' && P === null && (ee = je);
         let st = ee,
            Nn = j;
         if (i) {
            const To = ee / ve;
            let Rs = Math.floor(To),
               on = To % 1;
            !on && To >= 1 && (on = 1), on === 1 && Rs--, (Rs = Math.min(Rs, i + 1));
            const Xu = !!(Rs % 2);
            Xu && (l === 'reverse' ? ((on = 1 - on), o && (on -= o / ve)) : l === 'mirror' && (Nn = k));
            let Ju = Yt(0, 1, on);
            ee > je && (Ju = l === 'reverse' && Xu ? 1 : 0), (st = Ju * ve);
         }
         const Fe = rn ? { done: !1, value: r[0] } : Nn.next(st);
         S && (Fe.value = S(Fe.value));
         let { done: sn } = Fe;
         !rn && B !== null && (sn = ee >= je);
         const Wy = P === null && (E === 'finished' || (E === 'running' && sn) || (m < 0 && ee <= 0));
         return f && f(Fe.value), Wy && T(), Fe;
      },
      _e = () => {
         p && p.stop(), (p = void 0);
      },
      rt = () => {
         (E = 'idle'), _e(), y(), (R = F = null);
      },
      T = () => {
         (E = 'finished'), c && c(), _e(), y();
      },
      M = () => {
         if (v) return;
         p || (p = n(te));
         const L = p.now();
         a && a(), P !== null ? (R = L - P) : (!R || E === 'finished') && (R = L), (F = R), (P = null), (E = 'running'), p.start();
      };
   e && M();
   const O = {
      then(L, W) {
         return C.then(L, W);
      },
      get time() {
         return xt(ee);
      },
      set time(L) {
         (L = qt(L)), (ee = L), P !== null || !p || m === 0 ? (P = L) : (R = p.now() - L / m);
      },
      get duration() {
         const L = j.calculatedDuration === null ? Gf(j) : j.calculatedDuration;
         return xt(L);
      },
      get speed() {
         return m;
      },
      set speed(L) {
         L === m || !p || ((m = L), (O.time = xt(ee)));
      },
      get state() {
         return E;
      },
      play: M,
      pause: () => {
         (E = 'paused'), (P = ee);
      },
      stop: () => {
         (v = !0), E !== 'idle' && ((E = 'idle'), u && u(), rt());
      },
      cancel: () => {
         F !== null && te(F), rt();
      },
      complete: () => {
         E = 'finished';
      },
      sample: (L) => ((R = 0), te(L)),
   };
   return O;
}
const xS = new Set(['opacity', 'clipPath', 'filter', 'transform', 'backgroundColor']),
   Ys = 10,
   wS = 2e4,
   SS = (e, t) => t.type === 'spring' || e === 'backgroundColor' || !Ym(t.ease);
function CS(e, t, { onUpdate: n, onComplete: r, ...s }) {
   if (!(Zm.waapi() && xS.has(t) && !s.repeatDelay && s.repeatType !== 'mirror' && s.damping !== 0 && s.type !== 'inertia')) return !1;
   let o = !1,
      l,
      a;
   const u = () => {
      a = new Promise((y) => {
         l = y;
      });
   };
   u();
   let { keyframes: c, duration: f = 300, ease: h, times: m } = s;
   if (SS(t, s)) {
      const y = Ki({ ...s, repeat: 0, delay: 0 });
      let p = { done: !1, value: c[0] };
      const g = [];
      let S = 0;
      for (; !p.done && S < wS; ) (p = y.sample(S)), g.push(p.value), (S += Ys);
      (m = void 0), (c = g), (f = S - Ys), (h = 'linear');
   }
   const v = Lw(e.owner.current, t, c, { ...s, duration: f, ease: h, times: m }),
      x = () => v.cancel(),
      C = () => {
         G.update(x), l(), u();
      };
   return (
      (v.onfinish = () => {
         e.set(Ow(c, s)), r && r(), C();
      }),
      {
         then(y, p) {
            return a.then(y, p);
         },
         get time() {
            return xt(v.currentTime || 0);
         },
         set time(y) {
            v.currentTime = qt(y);
         },
         get speed() {
            return v.playbackRate;
         },
         set speed(y) {
            v.playbackRate = y;
         },
         get duration() {
            return xt(f);
         },
         play: () => {
            o || (v.play(), Et(x));
         },
         pause: () => v.pause(),
         stop: () => {
            if (((o = !0), v.playState === 'idle')) return;
            const { currentTime: y } = v;
            if (y) {
               const p = Ki({ ...s, autoplay: !1 });
               e.setWithVelocity(p.sample(y - Ys).value, p.sample(y).value, Ys);
            }
            C();
         },
         complete: () => v.finish(),
         cancel: C,
      }
   );
}
function PS({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
   const s = () => (
      n && n(e[e.length - 1]),
      r && r(),
      { time: 0, speed: 1, duration: 0, play: oe, pause: oe, stop: oe, then: (i) => (i(), Promise.resolve()), cancel: oe, complete: oe }
   );
   return t ? Ki({ keyframes: [0, 1], duration: 0, delay: t, onComplete: s }) : s();
}
const jS = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
   ES = (e) => ({ type: 'spring', stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }),
   kS = { type: 'keyframes', duration: 0.8 },
   AS = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
   TS = (e, { keyframes: t }) => (t.length > 2 ? kS : An.has(e) ? (e.startsWith('scale') ? ES(t[1]) : jS) : AS),
   Sa = (e, t) =>
      e === 'zIndex'
         ? !1
         : !!(typeof t == 'number' || Array.isArray(t) || (typeof t == 'string' && (Xt.test(t) || t === '0') && !t.startsWith('url('))),
   NS = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function RS(e) {
   const [t, n] = e.slice(0, -1).split('(');
   if (t === 'drop-shadow') return e;
   const [r] = n.match(jo) || [];
   if (!r) return e;
   const s = n.replace(r, '');
   let i = NS.has(t) ? 1 : 0;
   return r !== n && (i *= 100), t + '(' + i + s + ')';
}
const FS = /([a-z-]*)\(.*?\)/g,
   Ca = {
      ...Xt,
      getAnimatableNone: (e) => {
         const t = e.match(FS);
         return t ? t.map(RS).join(' ') : e;
      },
   },
   DS = {
      ...Mm,
      color: xe,
      backgroundColor: xe,
      outlineColor: xe,
      fill: xe,
      stroke: xe,
      borderColor: xe,
      borderTopColor: xe,
      borderRightColor: xe,
      borderBottomColor: xe,
      borderLeftColor: xe,
      filter: Ca,
      WebkitFilter: Ca,
   },
   Ku = (e) => DS[e];
function Sy(e, t) {
   let n = Ku(e);
   return n !== Ca && (n = Xt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Cy = (e) => /^0[^.\s]+$/.test(e);
function MS(e) {
   if (typeof e == 'number') return e === 0;
   if (e !== null) return e === 'none' || e === '0' || Cy(e);
}
function LS(e, t, n, r) {
   const s = Sa(t, n);
   let i;
   Array.isArray(n) ? (i = [...n]) : (i = [null, n]);
   const o = r.from !== void 0 ? r.from : e.get();
   let l;
   const a = [];
   for (let u = 0; u < i.length; u++)
      i[u] === null && (i[u] = u === 0 ? o : i[u - 1]),
         MS(i[u]) && a.push(u),
         typeof i[u] == 'string' && i[u] !== 'none' && i[u] !== '0' && (l = i[u]);
   if (s && a.length && l)
      for (let u = 0; u < a.length; u++) {
         const c = a[u];
         i[c] = Sy(t, l);
      }
   return i;
}
function OS({
   when: e,
   delay: t,
   delayChildren: n,
   staggerChildren: r,
   staggerDirection: s,
   repeat: i,
   repeatType: o,
   repeatDelay: l,
   from: a,
   elapsed: u,
   ...c
}) {
   return !!Object.keys(c).length;
}
function Py(e, t) {
   return e[t] || e.default || e;
}
const qu =
   (e, t, n, r = {}) =>
   (s) => {
      const i = Py(r, e) || {},
         o = i.delay || r.delay || 0;
      let { elapsed: l = 0 } = r;
      l = l - qt(o);
      const a = LS(t, e, n, i),
         u = a[0],
         c = a[a.length - 1],
         f = Sa(e, u),
         h = Sa(e, c);
      let m = {
         keyframes: a,
         velocity: t.getVelocity(),
         ease: 'easeOut',
         ...i,
         delay: -l,
         onUpdate: (v) => {
            t.set(v), i.onUpdate && i.onUpdate(v);
         },
         onComplete: () => {
            s(), i.onComplete && i.onComplete();
         },
      };
      if (
         (OS(i) || (m = { ...m, ...TS(e, m) }),
         m.duration && (m.duration = qt(m.duration)),
         m.repeatDelay && (m.repeatDelay = qt(m.repeatDelay)),
         !f || !h || Mw.current || i.type === !1)
      )
         return PS(m);
      if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
         const v = CS(t, e, m);
         if (v) return v;
      }
      return Ki(m);
   };
function qi(e) {
   return !!(Re(e) && e.add);
}
const bS = (e) => /^\-?\d*\.?\d+$/.test(e);
function Hu(e, t) {
   e.indexOf(t) === -1 && e.push(t);
}
function Gu(e, t) {
   const n = e.indexOf(t);
   n > -1 && e.splice(n, 1);
}
class Yu {
   constructor() {
      this.subscriptions = [];
   }
   add(t) {
      return Hu(this.subscriptions, t), () => Gu(this.subscriptions, t);
   }
   notify(t, n, r) {
      const s = this.subscriptions.length;
      if (s)
         if (s === 1) this.subscriptions[0](t, n, r);
         else
            for (let i = 0; i < s; i++) {
               const o = this.subscriptions[i];
               o && o(t, n, r);
            }
   }
   getSize() {
      return this.subscriptions.length;
   }
   clear() {
      this.subscriptions.length = 0;
   }
}
const IS = (e) => !isNaN(parseFloat(e));
class VS {
   constructor(t, n = {}) {
      (this.version = '10.12.16'),
         (this.timeDelta = 0),
         (this.lastUpdated = 0),
         (this.canTrackVelocity = !1),
         (this.events = {}),
         (this.updateAndNotify = (r, s = !0) => {
            (this.prev = this.current), (this.current = r);
            const { delta: i, timestamp: o } = K;
            this.lastUpdated !== o && ((this.timeDelta = i), (this.lastUpdated = o), G.postRender(this.scheduleVelocityCheck)),
               this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
               this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
               s && this.events.renderRequest && this.events.renderRequest.notify(this.current);
         }),
         (this.scheduleVelocityCheck = () => G.postRender(this.velocityCheck)),
         (this.velocityCheck = ({ timestamp: r }) => {
            r !== this.lastUpdated &&
               ((this.prev = this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
         }),
         (this.hasAnimated = !1),
         (this.prev = this.current = t),
         (this.canTrackVelocity = IS(this.current)),
         (this.owner = n.owner);
   }
   onChange(t) {
      return this.on('change', t);
   }
   on(t, n) {
      this.events[t] || (this.events[t] = new Yu());
      const r = this.events[t].add(n);
      return t === 'change'
         ? () => {
              r(),
                 G.read(() => {
                    this.events.change.getSize() || this.stop();
                 });
           }
         : r;
   }
   clearListeners() {
      for (const t in this.events) this.events[t].clear();
   }
   attach(t, n) {
      (this.passiveEffect = t), (this.stopPassiveEffect = n);
   }
   set(t, n = !0) {
      !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
   }
   setWithVelocity(t, n, r) {
      this.set(n), (this.prev = t), (this.timeDelta = r);
   }
   jump(t) {
      this.updateAndNotify(t), (this.prev = t), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
   }
   get() {
      return this.current;
   }
   getPrevious() {
      return this.prev;
   }
   getVelocity() {
      return this.canTrackVelocity ? vy(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
   }
   start(t) {
      return (
         this.stop(),
         new Promise((n) => {
            (this.hasAnimated = !0), (this.animation = t(n)), this.events.animationStart && this.events.animationStart.notify();
         }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
         })
      );
   }
   stop() {
      this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
   }
   isAnimating() {
      return !!this.animation;
   }
   clearAnimation() {
      delete this.animation;
   }
   destroy() {
      this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
   }
}
function ar(e, t) {
   return new VS(e, t);
}
const jy = (e) => (t) => t.test(e),
   _S = { test: (e) => e === 'auto', parse: (e) => e },
   Ey = [Tn, D, ft, Tt, Q1, $1, _S],
   kr = (e) => Ey.find(jy(e)),
   BS = [...Ey, xe, Xt],
   zS = (e) => BS.find(jy(e));
function US(e, t, n) {
   e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ar(n));
}
function $S(e, t) {
   const n = Ao(e, t);
   let { transitionEnd: r = {}, transition: s = {}, ...i } = n ? e.makeTargetAnimatable(n, !1) : {};
   i = { ...i, ...r };
   for (const o in i) {
      const l = iw(i[o]);
      US(e, o, l);
   }
}
function QS(e, t, n) {
   var r, s;
   const i = Object.keys(t).filter((l) => !e.hasValue(l)),
      o = i.length;
   if (o)
      for (let l = 0; l < o; l++) {
         const a = i[l],
            u = t[a];
         let c = null;
         Array.isArray(u) && (c = u[0]),
            c === null && (c = (s = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !== null && s !== void 0 ? s : t[a]),
            c != null &&
               (typeof c == 'string' && (bS(c) || Cy(c)) ? (c = parseFloat(c)) : !zS(c) && Xt.test(u) && (c = Sy(a, u)),
               e.addValue(a, ar(c, { owner: e })),
               n[a] === void 0 && (n[a] = c),
               c !== null && e.setBaseTarget(a, c));
      }
}
function WS(e, t) {
   return t ? (t[e] || t.default || t).from : void 0;
}
function KS(e, t, n) {
   const r = {};
   for (const s in e) {
      const i = WS(s, t);
      if (i !== void 0) r[s] = i;
      else {
         const o = n.getValue(s);
         o && (r[s] = o.get());
      }
   }
   return r;
}
function qS({ protectedKeys: e, needsAnimating: t }, n) {
   const r = e.hasOwnProperty(n) && t[n] !== !0;
   return (t[n] = !1), r;
}
function ky(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
   let { transition: i = e.getDefaultTransition(), transitionEnd: o, ...l } = e.makeTargetAnimatable(t);
   const a = e.getValue('willChange');
   r && (i = r);
   const u = [],
      c = s && e.animationState && e.animationState.getState()[s];
   for (const f in l) {
      const h = e.getValue(f),
         m = l[f];
      if (!h || m === void 0 || (c && qS(c, f))) continue;
      const v = { delay: n, elapsed: 0, ...i };
      if (window.HandoffAppearAnimations && !h.hasAnimated) {
         const C = e.getProps()[Fw];
         C && (v.elapsed = window.HandoffAppearAnimations(C, f, h, G));
      }
      h.start(qu(f, h, m, e.shouldReduceMotion && An.has(f) ? { type: !1 } : v));
      const x = h.animation;
      qi(a) && (a.add(f), x.then(() => a.remove(f))), u.push(x);
   }
   return (
      o &&
         Promise.all(u).then(() => {
            o && $S(e, o);
         }),
      u
   );
}
function Pa(e, t, n = {}) {
   const r = Ao(e, t, n.custom);
   let { transition: s = e.getDefaultTransition() || {} } = r || {};
   n.transitionOverride && (s = n.transitionOverride);
   const i = r ? () => Promise.all(ky(e, r, n)) : () => Promise.resolve(),
      o =
         e.variantChildren && e.variantChildren.size
            ? (a = 0) => {
                 const { delayChildren: u = 0, staggerChildren: c, staggerDirection: f } = s;
                 return HS(e, t, u + a, c, f, n);
              }
            : () => Promise.resolve(),
      { when: l } = s;
   if (l) {
      const [a, u] = l === 'beforeChildren' ? [i, o] : [o, i];
      return a().then(() => u());
   } else return Promise.all([i(), o(n.delay)]);
}
function HS(e, t, n = 0, r = 0, s = 1, i) {
   const o = [],
      l = (e.variantChildren.size - 1) * r,
      a = s === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
   return (
      Array.from(e.variantChildren)
         .sort(GS)
         .forEach((u, c) => {
            u.notify('AnimationStart', t), o.push(Pa(u, t, { ...i, delay: n + a(c) }).then(() => u.notify('AnimationComplete', t)));
         }),
      Promise.all(o)
   );
}
function GS(e, t) {
   return e.sortNodePosition(t);
}
function YS(e, t, n = {}) {
   e.notify('AnimationStart', t);
   let r;
   if (Array.isArray(t)) {
      const s = t.map((i) => Pa(e, i, n));
      r = Promise.all(s);
   } else if (typeof t == 'string') r = Pa(e, t, n);
   else {
      const s = typeof t == 'function' ? Ao(e, t, n.custom) : t;
      r = Promise.all(ky(e, s, n));
   }
   return r.then(() => e.notify('AnimationComplete', t));
}
const XS = [...Du].reverse(),
   JS = Du.length;
function ZS(e) {
   return (t) => Promise.all(t.map(({ animation: n, options: r }) => YS(e, n, r)));
}
function eC(e) {
   let t = ZS(e);
   const n = nC();
   let r = !0;
   const s = (a, u) => {
      const c = Ao(e, u);
      if (c) {
         const { transition: f, transitionEnd: h, ...m } = c;
         a = { ...a, ...m, ...h };
      }
      return a;
   };
   function i(a) {
      t = a(e);
   }
   function o(a, u) {
      const c = e.getProps(),
         f = e.getVariantContext(!0) || {},
         h = [],
         m = new Set();
      let v = {},
         x = 1 / 0;
      for (let y = 0; y < JS; y++) {
         const p = XS[y],
            g = n[p],
            S = c[p] !== void 0 ? c[p] : f[p],
            j = ps(S),
            k = p === u ? g.isActive : null;
         k === !1 && (x = y);
         let E = S === f[p] && S !== c[p] && j;
         if (
            (E && r && e.manuallyAnimateOnMount && (E = !1),
            (g.protectedKeys = { ...v }),
            (!g.isActive && k === null) || (!S && !g.prevProp) || Co(S) || typeof S == 'boolean')
         )
            continue;
         const P = tC(g.prevProp, S);
         let R = P || (p === u && g.isActive && !E && j) || (y > x && j);
         const F = Array.isArray(S) ? S : [S];
         let B = F.reduce(s, {});
         k === !1 && (B = {});
         const { prevResolvedValues: ve = {} } = g,
            je = { ...ve, ...B },
            ee = (te) => {
               (R = !0), m.delete(te), (g.needsAnimating[te] = !0);
            };
         for (const te in je) {
            const _e = B[te],
               rt = ve[te];
            v.hasOwnProperty(te) ||
               (_e !== rt
                  ? $i(_e) && $i(rt)
                     ? !Hm(_e, rt) || P
                        ? ee(te)
                        : (g.protectedKeys[te] = !0)
                     : _e !== void 0
                     ? ee(te)
                     : m.add(te)
                  : _e !== void 0 && m.has(te)
                  ? ee(te)
                  : (g.protectedKeys[te] = !0));
         }
         (g.prevProp = S),
            (g.prevResolvedValues = B),
            g.isActive && (v = { ...v, ...B }),
            r && e.blockInitialAnimation && (R = !1),
            R && !E && h.push(...F.map((te) => ({ animation: te, options: { type: p, ...a } })));
      }
      if (m.size) {
         const y = {};
         m.forEach((p) => {
            const g = e.getBaseTarget(p);
            g !== void 0 && (y[p] = g);
         }),
            h.push({ animation: y });
      }
      let C = !!h.length;
      return r && c.initial === !1 && !e.manuallyAnimateOnMount && (C = !1), (r = !1), C ? t(h) : Promise.resolve();
   }
   function l(a, u, c) {
      var f;
      if (n[a].isActive === u) return Promise.resolve();
      (f = e.variantChildren) === null ||
         f === void 0 ||
         f.forEach((m) => {
            var v;
            return (v = m.animationState) === null || v === void 0 ? void 0 : v.setActive(a, u);
         }),
         (n[a].isActive = u);
      const h = o(c, a);
      for (const m in n) n[m].protectedKeys = {};
      return h;
   }
   return { animateChanges: o, setActive: l, setAnimateFunction: i, getState: () => n };
}
function tC(e, t) {
   return typeof t == 'string' ? t !== e : Array.isArray(t) ? !Hm(t, e) : !1;
}
function ln(e = !1) {
   return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function nC() {
   return { animate: ln(!0), whileInView: ln(), whileHover: ln(), whileTap: ln(), whileDrag: ln(), whileFocus: ln(), exit: ln() };
}
class rC extends nn {
   constructor(t) {
      super(t), t.animationState || (t.animationState = eC(t));
   }
   updateAnimationControlsSubscription() {
      const { animate: t } = this.node.getProps();
      this.unmount(), Co(t) && (this.unmount = t.subscribe(this.node));
   }
   mount() {
      this.updateAnimationControlsSubscription();
   }
   update() {
      const { animate: t } = this.node.getProps(),
         { animate: n } = this.node.prevProps || {};
      t !== n && this.updateAnimationControlsSubscription();
   }
   unmount() {}
}
let sC = 0;
class iC extends nn {
   constructor() {
      super(...arguments), (this.id = sC++);
   }
   update() {
      if (!this.node.presenceContext) return;
      const { isPresent: t, onExitComplete: n, custom: r } = this.node.presenceContext,
         { isPresent: s } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || t === s) return;
      const i = this.node.animationState.setActive('exit', !t, { custom: r ?? this.node.getProps().custom });
      n && !t && i.then(() => n(this.id));
   }
   mount() {
      const { register: t } = this.node.presenceContext || {};
      t && (this.unmount = t(this.id));
   }
   unmount() {}
}
const oC = { animation: { Feature: rC }, exit: { Feature: iC } },
   Yf = (e, t) => Math.abs(e - t);
function lC(e, t) {
   const n = Yf(e.x, t.x),
      r = Yf(e.y, t.y);
   return Math.sqrt(n ** 2 + r ** 2);
}
class Ay {
   constructor(t, n, { transformPagePoint: r } = {}) {
      if (
         ((this.startEvent = null),
         (this.lastMoveEvent = null),
         (this.lastMoveEventInfo = null),
         (this.handlers = {}),
         (this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            const u = dl(this.lastMoveEventInfo, this.history),
               c = this.startEvent !== null,
               f = lC(u.offset, { x: 0, y: 0 }) >= 3;
            if (!c && !f) return;
            const { point: h } = u,
               { timestamp: m } = K;
            this.history.push({ ...h, timestamp: m });
            const { onStart: v, onMove: x } = this.handlers;
            c || (v && v(this.lastMoveEvent, u), (this.startEvent = this.lastMoveEvent)), x && x(this.lastMoveEvent, u);
         }),
         (this.handlePointerMove = (u, c) => {
            (this.lastMoveEvent = u), (this.lastMoveEventInfo = fl(c, this.transformPagePoint)), G.update(this.updatePoint, !0);
         }),
         (this.handlePointerUp = (u, c) => {
            if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return;
            const { onEnd: f, onSessionEnd: h } = this.handlers,
               m = dl(u.type === 'pointercancel' ? this.lastMoveEventInfo : fl(c, this.transformPagePoint), this.history);
            this.startEvent && f && f(u, m), h && h(u, m);
         }),
         !Um(t))
      )
         return;
      (this.handlers = n), (this.transformPagePoint = r);
      const s = Eo(t),
         i = fl(s, this.transformPagePoint),
         { point: o } = i,
         { timestamp: l } = K;
      this.history = [{ ...o, timestamp: l }];
      const { onSessionStart: a } = n;
      a && a(t, dl(i, this.history)),
         (this.removeListeners = Kt(
            vt(window, 'pointermove', this.handlePointerMove),
            vt(window, 'pointerup', this.handlePointerUp),
            vt(window, 'pointercancel', this.handlePointerUp)
         ));
   }
   updateHandlers(t) {
      this.handlers = t;
   }
   end() {
      this.removeListeners && this.removeListeners(), Et(this.updatePoint);
   }
}
function fl(e, t) {
   return t ? { point: t(e.point) } : e;
}
function Xf(e, t) {
   return { x: e.x - t.x, y: e.y - t.y };
}
function dl({ point: e }, t) {
   return { point: e, delta: Xf(e, Ty(t)), offset: Xf(e, aC(t)), velocity: uC(t, 0.1) };
}
function aC(e) {
   return e[0];
}
function Ty(e) {
   return e[e.length - 1];
}
function uC(e, t) {
   if (e.length < 2) return { x: 0, y: 0 };
   let n = e.length - 1,
      r = null;
   const s = Ty(e);
   for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > qt(t))); ) n--;
   if (!r) return { x: 0, y: 0 };
   const i = xt(s.timestamp - r.timestamp);
   if (i === 0) return { x: 0, y: 0 };
   const o = { x: (s.x - r.x) / i, y: (s.y - r.y) / i };
   return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function be(e) {
   return e.max - e.min;
}
function ja(e, t = 0, n = 0.01) {
   return Math.abs(e - t) <= n;
}
function Jf(e, t, n, r = 0.5) {
   (e.origin = r),
      (e.originPoint = H(t.min, t.max, e.origin)),
      (e.scale = be(n) / be(t)),
      (ja(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
      (e.translate = H(n.min, n.max, e.origin) - e.originPoint),
      (ja(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Kr(e, t, n, r) {
   Jf(e.x, t.x, n.x, r ? r.originX : void 0), Jf(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Zf(e, t, n) {
   (e.min = n.min + t.min), (e.max = e.min + be(t));
}
function cC(e, t, n) {
   Zf(e.x, t.x, n.x), Zf(e.y, t.y, n.y);
}
function ed(e, t, n) {
   (e.min = t.min - n.min), (e.max = e.min + be(t));
}
function qr(e, t, n) {
   ed(e.x, t.x, n.x), ed(e.y, t.y, n.y);
}
function fC(e, { min: t, max: n }, r) {
   return (
      t !== void 0 && e < t
         ? (e = r ? H(t, e, r.min) : Math.max(e, t))
         : n !== void 0 && e > n && (e = r ? H(n, e, r.max) : Math.min(e, n)),
      e
   );
}
function td(e, t, n) {
   return { min: t !== void 0 ? e.min + t : void 0, max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0 };
}
function dC(e, { top: t, left: n, bottom: r, right: s }) {
   return { x: td(e.x, n, s), y: td(e.y, t, r) };
}
function nd(e, t) {
   let n = t.min - e.min,
      r = t.max - e.max;
   return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function hC(e, t) {
   return { x: nd(e.x, t.x), y: nd(e.y, t.y) };
}
function pC(e, t) {
   let n = 0.5;
   const r = be(e),
      s = be(t);
   return s > r ? (n = gs(t.min, t.max - r, e.min)) : r > s && (n = gs(e.min, e.max - s, t.min)), Yt(0, 1, n);
}
function mC(e, t) {
   const n = {};
   return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Ea = 0.35;
function yC(e = Ea) {
   return e === !1 ? (e = 0) : e === !0 && (e = Ea), { x: rd(e, 'left', 'right'), y: rd(e, 'top', 'bottom') };
}
function rd(e, t, n) {
   return { min: sd(e, t), max: sd(e, n) };
}
function sd(e, t) {
   return typeof e == 'number' ? e : e[t] || 0;
}
const id = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
   Wn = () => ({ x: id(), y: id() }),
   od = () => ({ min: 0, max: 0 }),
   re = () => ({ x: od(), y: od() });
function lt(e) {
   return [e('x'), e('y')];
}
function Ny({ top: e, left: t, right: n, bottom: r }) {
   return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function gC({ x: e, y: t }) {
   return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function vC(e, t) {
   if (!t) return e;
   const n = t({ x: e.left, y: e.top }),
      r = t({ x: e.right, y: e.bottom });
   return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function hl(e) {
   return e === void 0 || e === 1;
}
function ka({ scale: e, scaleX: t, scaleY: n }) {
   return !hl(e) || !hl(t) || !hl(n);
}
function cn(e) {
   return ka(e) || Ry(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Ry(e) {
   return ld(e.x) || ld(e.y);
}
function ld(e) {
   return e && e !== '0%';
}
function Hi(e, t, n) {
   const r = e - n,
      s = t * r;
   return n + s;
}
function ad(e, t, n, r, s) {
   return s !== void 0 && (e = Hi(e, s, r)), Hi(e, n, r) + t;
}
function Aa(e, t = 0, n = 1, r, s) {
   (e.min = ad(e.min, t, n, r, s)), (e.max = ad(e.max, t, n, r, s));
}
function Fy(e, { x: t, y: n }) {
   Aa(e.x, t.translate, t.scale, t.originPoint), Aa(e.y, n.translate, n.scale, n.originPoint);
}
function xC(e, t, n, r = !1) {
   const s = n.length;
   if (!s) return;
   t.x = t.y = 1;
   let i, o;
   for (let l = 0; l < s; l++) {
      (i = n[l]), (o = i.projectionDelta);
      const a = i.instance;
      (a && a.style && a.style.display === 'contents') ||
         (r && i.options.layoutScroll && i.scroll && i !== i.root && Kn(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
         o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Fy(e, o)),
         r && cn(i.latestValues) && Kn(e, i.latestValues));
   }
   (t.x = ud(t.x)), (t.y = ud(t.y));
}
function ud(e) {
   return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Dt(e, t) {
   (e.min = e.min + t), (e.max = e.max + t);
}
function cd(e, t, [n, r, s]) {
   const i = t[s] !== void 0 ? t[s] : 0.5,
      o = H(e.min, e.max, i);
   Aa(e, t[n], t[r], o, t.scale);
}
const wC = ['x', 'scaleX', 'originX'],
   SC = ['y', 'scaleY', 'originY'];
function Kn(e, t) {
   cd(e.x, t, wC), cd(e.y, t, SC);
}
function Dy(e, t) {
   return Ny(vC(e.getBoundingClientRect(), t));
}
function CC(e, t, n) {
   const r = Dy(e, n),
      { scroll: s } = t;
   return s && (Dt(r.x, s.offset.x), Dt(r.y, s.offset.y)), r;
}
const PC = new WeakMap();
class jC {
   constructor(t) {
      (this.openGlobalLock = null),
         (this.isDragging = !1),
         (this.currentDirection = null),
         (this.originPoint = { x: 0, y: 0 }),
         (this.constraints = !1),
         (this.hasMutatedConstraints = !1),
         (this.elastic = re()),
         (this.visualElement = t);
   }
   start(t, { snapToCursor: n = !1 } = {}) {
      const { presenceContext: r } = this.visualElement;
      if (r && r.isPresent === !1) return;
      const s = (a) => {
            this.stopAnimation(), n && this.snapToCursor(Eo(a, 'page').point);
         },
         i = (a, u) => {
            const { drag: c, dragPropagation: f, onDragStart: h } = this.getProps();
            if (c && !f && (this.openGlobalLock && this.openGlobalLock(), (this.openGlobalLock = Qm(c)), !this.openGlobalLock)) return;
            (this.isDragging = !0),
               (this.currentDirection = null),
               this.resolveConstraints(),
               this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0), (this.visualElement.projection.target = void 0)),
               lt((v) => {
                  let x = this.getAxisMotionValue(v).get() || 0;
                  if (ft.test(x)) {
                     const { projection: C } = this.visualElement;
                     if (C && C.layout) {
                        const y = C.layout.layoutBox[v];
                        y && (x = be(y) * (parseFloat(x) / 100));
                     }
                  }
                  this.originPoint[v] = x;
               }),
               h && G.update(() => h(a, u), !1, !0);
            const { animationState: m } = this.visualElement;
            m && m.setActive('whileDrag', !0);
         },
         o = (a, u) => {
            const { dragPropagation: c, dragDirectionLock: f, onDirectionLock: h, onDrag: m } = this.getProps();
            if (!c && !this.openGlobalLock) return;
            const { offset: v } = u;
            if (f && this.currentDirection === null) {
               (this.currentDirection = EC(v)), this.currentDirection !== null && h && h(this.currentDirection);
               return;
            }
            this.updateAxis('x', u.point, v), this.updateAxis('y', u.point, v), this.visualElement.render(), m && m(a, u);
         },
         l = (a, u) => this.stop(a, u);
      this.panSession = new Ay(
         t,
         { onSessionStart: s, onStart: i, onMove: o, onSessionEnd: l },
         { transformPagePoint: this.visualElement.getTransformPagePoint() }
      );
   }
   stop(t, n) {
      const r = this.isDragging;
      if ((this.cancel(), !r)) return;
      const { velocity: s } = n;
      this.startAnimation(s);
      const { onDragEnd: i } = this.getProps();
      i && G.update(() => i(t, n));
   }
   cancel() {
      this.isDragging = !1;
      const { projection: t, animationState: n } = this.visualElement;
      t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), (this.panSession = void 0);
      const { dragPropagation: r } = this.getProps();
      !r && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)), n && n.setActive('whileDrag', !1);
   }
   updateAxis(t, n, r) {
      const { drag: s } = this.getProps();
      if (!r || !Xs(t, s, this.currentDirection)) return;
      const i = this.getAxisMotionValue(t);
      let o = this.originPoint[t] + r[t];
      this.constraints && this.constraints[t] && (o = fC(o, this.constraints[t], this.elastic[t])), i.set(o);
   }
   resolveConstraints() {
      const { dragConstraints: t, dragElastic: n } = this.getProps(),
         { layout: r } = this.visualElement.projection || {},
         s = this.constraints;
      t && $n(t)
         ? this.constraints || (this.constraints = this.resolveRefConstraints())
         : t && r
         ? (this.constraints = dC(r.layoutBox, t))
         : (this.constraints = !1),
         (this.elastic = yC(n)),
         s !== this.constraints &&
            r &&
            this.constraints &&
            !this.hasMutatedConstraints &&
            lt((i) => {
               this.getAxisMotionValue(i) && (this.constraints[i] = mC(r.layoutBox[i], this.constraints[i]));
            });
   }
   resolveRefConstraints() {
      const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
      if (!t || !$n(t)) return !1;
      const r = t.current,
         { projection: s } = this.visualElement;
      if (!s || !s.layout) return !1;
      const i = CC(r, s.root, this.visualElement.getTransformPagePoint());
      let o = hC(s.layout.layoutBox, i);
      if (n) {
         const l = n(gC(o));
         (this.hasMutatedConstraints = !!l), l && (o = Ny(l));
      }
      return o;
   }
   startAnimation(t) {
      const { drag: n, dragMomentum: r, dragElastic: s, dragTransition: i, dragSnapToOrigin: o, onDragTransitionEnd: l } = this.getProps(),
         a = this.constraints || {},
         u = lt((c) => {
            if (!Xs(c, n, this.currentDirection)) return;
            let f = (a && a[c]) || {};
            o && (f = { min: 0, max: 0 });
            const h = s ? 200 : 1e6,
               m = s ? 40 : 1e7,
               v = {
                  type: 'inertia',
                  velocity: r ? t[c] : 0,
                  bounceStiffness: h,
                  bounceDamping: m,
                  timeConstant: 750,
                  restDelta: 1,
                  restSpeed: 10,
                  ...i,
                  ...f,
               };
            return this.startAxisValueAnimation(c, v);
         });
      return Promise.all(u).then(l);
   }
   startAxisValueAnimation(t, n) {
      const r = this.getAxisMotionValue(t);
      return r.start(qu(t, r, 0, n));
   }
   stopAnimation() {
      lt((t) => this.getAxisMotionValue(t).stop());
   }
   getAxisMotionValue(t) {
      const n = '_drag' + t.toUpperCase(),
         r = this.visualElement.getProps(),
         s = r[n];
      return s || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
   }
   snapToCursor(t) {
      lt((n) => {
         const { drag: r } = this.getProps();
         if (!Xs(n, r, this.currentDirection)) return;
         const { projection: s } = this.visualElement,
            i = this.getAxisMotionValue(n);
         if (s && s.layout) {
            const { min: o, max: l } = s.layout.layoutBox[n];
            i.set(t[n] - H(o, l, 0.5));
         }
      });
   }
   scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      const { drag: t, dragConstraints: n } = this.getProps(),
         { projection: r } = this.visualElement;
      if (!$n(n) || !r || !this.constraints) return;
      this.stopAnimation();
      const s = { x: 0, y: 0 };
      lt((o) => {
         const l = this.getAxisMotionValue(o);
         if (l) {
            const a = l.get();
            s[o] = pC({ min: a, max: a }, this.constraints[o]);
         }
      });
      const { transformTemplate: i } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = i ? i({}, '') : 'none'),
         r.root && r.root.updateScroll(),
         r.updateLayout(),
         this.resolveConstraints(),
         lt((o) => {
            if (!Xs(o, t, null)) return;
            const l = this.getAxisMotionValue(o),
               { min: a, max: u } = this.constraints[o];
            l.set(H(a, u, s[o]));
         });
   }
   addListeners() {
      if (!this.visualElement.current) return;
      PC.set(this.visualElement, this);
      const t = this.visualElement.current,
         n = vt(t, 'pointerdown', (a) => {
            const { drag: u, dragListener: c = !0 } = this.getProps();
            u && c && this.start(a);
         }),
         r = () => {
            const { dragConstraints: a } = this.getProps();
            $n(a) && (this.constraints = this.resolveRefConstraints());
         },
         { projection: s } = this.visualElement,
         i = s.addEventListener('measure', r);
      s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), r();
      const o = yt(window, 'resize', () => this.scalePositionWithinConstraints()),
         l = s.addEventListener('didUpdate', ({ delta: a, hasLayoutChanged: u }) => {
            this.isDragging &&
               u &&
               (lt((c) => {
                  const f = this.getAxisMotionValue(c);
                  f && ((this.originPoint[c] += a[c].translate), f.set(f.get() + a[c].translate));
               }),
               this.visualElement.render());
         });
      return () => {
         o(), n(), i(), l && l();
      };
   }
   getProps() {
      const t = this.visualElement.getProps(),
         {
            drag: n = !1,
            dragDirectionLock: r = !1,
            dragPropagation: s = !1,
            dragConstraints: i = !1,
            dragElastic: o = Ea,
            dragMomentum: l = !0,
         } = t;
      return { ...t, drag: n, dragDirectionLock: r, dragPropagation: s, dragConstraints: i, dragElastic: o, dragMomentum: l };
   }
}
function Xs(e, t, n) {
   return (t === !0 || t === e) && (n === null || n === e);
}
function EC(e, t = 10) {
   let n = null;
   return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n;
}
class kC extends nn {
   constructor(t) {
      super(t), (this.removeGroupControls = oe), (this.removeListeners = oe), (this.controls = new jC(t));
   }
   mount() {
      const { dragControls: t } = this.node.getProps();
      t && (this.removeGroupControls = t.subscribe(this.controls)), (this.removeListeners = this.controls.addListeners() || oe);
   }
   unmount() {
      this.removeGroupControls(), this.removeListeners();
   }
}
const fd = (e) => (t, n) => {
   e && G.update(() => e(t, n));
};
class AC extends nn {
   constructor() {
      super(...arguments), (this.removePointerDownListener = oe);
   }
   onPointerDown(t) {
      this.session = new Ay(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
   }
   createPanHandlers() {
      const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: s } = this.node.getProps();
      return {
         onSessionStart: fd(t),
         onStart: fd(n),
         onMove: r,
         onEnd: (i, o) => {
            delete this.session, s && G.update(() => s(i, o));
         },
      };
   }
   mount() {
      this.removePointerDownListener = vt(this.node.current, 'pointerdown', (t) => this.onPointerDown(t));
   }
   update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
   }
   unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
   }
}
function TC() {
   const e = w.useContext(Fu);
   if (e === null) return [!0, null];
   const { isPresent: t, onExitComplete: n, register: r } = e,
      s = w.useId();
   return w.useEffect(() => r(s), []), !t && n ? [!1, () => n && n(s)] : [!0];
}
const di = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function dd(e, t) {
   return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Ar = {
      correct: (e, t) => {
         if (!t.target) return e;
         if (typeof e == 'string')
            if (D.test(e)) e = parseFloat(e);
            else return e;
         const n = dd(e, t.target.x),
            r = dd(e, t.target.y);
         return `${n}% ${r}%`;
      },
   },
   NC = {
      correct: (e, { treeScale: t, projectionDelta: n }) => {
         const r = e,
            s = Xt.parse(e);
         if (s.length > 5) return r;
         const i = Xt.createTransformer(e),
            o = typeof s[0] != 'number' ? 1 : 0,
            l = n.x.scale * t.x,
            a = n.y.scale * t.y;
         (s[0 + o] /= l), (s[1 + o] /= a);
         const u = H(l, a, 0.5);
         return typeof s[2 + o] == 'number' && (s[2 + o] /= u), typeof s[3 + o] == 'number' && (s[3 + o] /= u), i(s);
      },
   };
class RC extends Yi.Component {
   componentDidMount() {
      const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: s } = this.props,
         { projection: i } = t;
      b1(FC),
         i &&
            (n.group && n.group.add(i),
            r && r.register && s && r.register(i),
            i.root.didUpdate(),
            i.addEventListener('animationComplete', () => {
               this.safeToRemove();
            }),
            i.setOptions({ ...i.options, onExitComplete: () => this.safeToRemove() })),
         (di.hasEverUpdated = !0);
   }
   getSnapshotBeforeUpdate(t) {
      const { layoutDependency: n, visualElement: r, drag: s, isPresent: i } = this.props,
         o = r.projection;
      return (
         o &&
            ((o.isPresent = i),
            s || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(),
            t.isPresent !== i &&
               (i
                  ? o.promote()
                  : o.relegate() ||
                    G.postRender(() => {
                       const l = o.getStack();
                       (!l || !l.members.length) && this.safeToRemove();
                    }))),
         null
      );
   }
   componentDidUpdate() {
      const { projection: t } = this.props.visualElement;
      t &&
         (t.root.didUpdate(),
         queueMicrotask(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove();
         }));
   }
   componentWillUnmount() {
      const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props,
         { projection: s } = t;
      s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), r && r.deregister && r.deregister(s));
   }
   safeToRemove() {
      const { safeToRemove: t } = this.props;
      t && t();
   }
   render() {
      return null;
   }
}
function My(e) {
   const [t, n] = TC(),
      r = w.useContext(Am);
   return Yi.createElement(RC, { ...e, layoutGroup: r, switchLayoutGroup: w.useContext(Tm), isPresent: t, safeToRemove: n });
}
const FC = {
      borderRadius: {
         ...Ar,
         applyTo: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius'],
      },
      borderTopLeftRadius: Ar,
      borderTopRightRadius: Ar,
      borderBottomLeftRadius: Ar,
      borderBottomRightRadius: Ar,
      boxShadow: NC,
   },
   Ly = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
   DC = Ly.length,
   hd = (e) => (typeof e == 'string' ? parseFloat(e) : e),
   pd = (e) => typeof e == 'number' || D.test(e);
function MC(e, t, n, r, s, i) {
   s
      ? ((e.opacity = H(0, n.opacity !== void 0 ? n.opacity : 1, LC(r))),
        (e.opacityExit = H(t.opacity !== void 0 ? t.opacity : 1, 0, OC(r))))
      : i && (e.opacity = H(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
   for (let o = 0; o < DC; o++) {
      const l = `border${Ly[o]}Radius`;
      let a = md(t, l),
         u = md(n, l);
      if (a === void 0 && u === void 0) continue;
      a || (a = 0),
         u || (u = 0),
         a === 0 || u === 0 || pd(a) === pd(u)
            ? ((e[l] = Math.max(H(hd(a), hd(u), r), 0)), (ft.test(u) || ft.test(a)) && (e[l] += '%'))
            : (e[l] = u);
   }
   (t.rotate || n.rotate) && (e.rotate = H(t.rotate || 0, n.rotate || 0, r));
}
function md(e, t) {
   return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const LC = Oy(0, 0.5, $u),
   OC = Oy(0.5, 0.95, oe);
function Oy(e, t, n) {
   return (r) => (r < e ? 0 : r > t ? 1 : n(gs(e, t, r)));
}
function yd(e, t) {
   (e.min = t.min), (e.max = t.max);
}
function Be(e, t) {
   yd(e.x, t.x), yd(e.y, t.y);
}
function gd(e, t, n, r, s) {
   return (e -= t), (e = Hi(e, 1 / n, r)), s !== void 0 && (e = Hi(e, 1 / s, r)), e;
}
function bC(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
   if ((ft.test(t) && ((t = parseFloat(t)), (t = H(o.min, o.max, t / 100) - o.min)), typeof t != 'number')) return;
   let l = H(i.min, i.max, r);
   e === i && (l -= t), (e.min = gd(e.min, t, n, l, s)), (e.max = gd(e.max, t, n, l, s));
}
function vd(e, t, [n, r, s], i, o) {
   bC(e, t[n], t[r], t[s], t.scale, i, o);
}
const IC = ['x', 'scaleX', 'originX'],
   VC = ['y', 'scaleY', 'originY'];
function xd(e, t, n, r) {
   vd(e.x, t, IC, n ? n.x : void 0, r ? r.x : void 0), vd(e.y, t, VC, n ? n.y : void 0, r ? r.y : void 0);
}
function wd(e) {
   return e.translate === 0 && e.scale === 1;
}
function by(e) {
   return wd(e.x) && wd(e.y);
}
function Ta(e, t) {
   return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function Sd(e) {
   return be(e.x) / be(e.y);
}
class _C {
   constructor() {
      this.members = [];
   }
   add(t) {
      Hu(this.members, t), t.scheduleRender();
   }
   remove(t) {
      if ((Gu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
         const n = this.members[this.members.length - 1];
         n && this.promote(n);
      }
   }
   relegate(t) {
      const n = this.members.findIndex((s) => t === s);
      if (n === 0) return !1;
      let r;
      for (let s = n; s >= 0; s--) {
         const i = this.members[s];
         if (i.isPresent !== !1) {
            r = i;
            break;
         }
      }
      return r ? (this.promote(r), !0) : !1;
   }
   promote(t, n) {
      const r = this.lead;
      if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
         r.instance && r.scheduleRender(),
            t.scheduleRender(),
            (t.resumeFrom = r),
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && ((t.snapshot = r.snapshot), (t.snapshot.latestValues = r.animationValues || r.latestValues)),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
         const { crossfade: s } = t.options;
         s === !1 && r.hide();
      }
   }
   exitAnimationComplete() {
      this.members.forEach((t) => {
         const { options: n, resumingFrom: r } = t;
         n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
      });
   }
   scheduleRender() {
      this.members.forEach((t) => {
         t.instance && t.scheduleRender(!1);
      });
   }
   removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
   }
}
function Cd(e, t, n) {
   let r = '';
   const s = e.x.translate / t.x,
      i = e.y.translate / t.y;
   if (((s || i) && (r = `translate3d(${s}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n)) {
      const { rotate: a, rotateX: u, rotateY: c } = n;
      a && (r += `rotate(${a}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `);
   }
   const o = e.x.scale * t.x,
      l = e.y.scale * t.y;
   return (o !== 1 || l !== 1) && (r += `scale(${o}, ${l})`), r || 'none';
}
const BC = (e, t) => e.depth - t.depth;
class zC {
   constructor() {
      (this.children = []), (this.isDirty = !1);
   }
   add(t) {
      Hu(this.children, t), (this.isDirty = !0);
   }
   remove(t) {
      Gu(this.children, t), (this.isDirty = !0);
   }
   forEach(t) {
      this.isDirty && this.children.sort(BC), (this.isDirty = !1), this.children.forEach(t);
   }
}
function UC(e, t) {
   const n = performance.now(),
      r = ({ timestamp: s }) => {
         const i = s - n;
         i >= t && (Et(r), e(i - t));
      };
   return G.read(r, !0), () => Et(r);
}
function $C(e) {
   window.MotionDebug && window.MotionDebug.record(e);
}
function QC(e) {
   return e instanceof SVGElement && e.tagName !== 'svg';
}
function WC(e, t, n) {
   const r = Re(e) ? e : ar(e);
   return r.start(qu('', r, t, n)), r.animation;
}
const Pd = ['', 'X', 'Y', 'Z'],
   jd = 1e3;
let KC = 0;
const fn = { type: 'projectionFrame', totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 };
function Iy({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: s }) {
   return class {
      constructor(o = {}, l = t == null ? void 0 : t()) {
         (this.id = KC++),
            (this.animationId = 0),
            (this.children = new Set()),
            (this.options = {}),
            (this.isTreeAnimating = !1),
            (this.isAnimationBlocked = !1),
            (this.isLayoutDirty = !1),
            (this.isProjectionDirty = !1),
            (this.isSharedProjectionDirty = !1),
            (this.isTransformDirty = !1),
            (this.updateManuallyBlocked = !1),
            (this.updateBlockedByResize = !1),
            (this.isUpdating = !1),
            (this.isSVG = !1),
            (this.needsReset = !1),
            (this.shouldResetTransform = !1),
            (this.treeScale = { x: 1, y: 1 }),
            (this.eventHandlers = new Map()),
            (this.hasTreeAnimated = !1),
            (this.updateScheduled = !1),
            (this.checkUpdateFailed = () => {
               this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
            }),
            (this.updateProjection = () => {
               (fn.totalNodes = fn.resolvedTargetDeltas = fn.recalculatedProjection = 0),
                  this.nodes.forEach(GC),
                  this.nodes.forEach(eP),
                  this.nodes.forEach(tP),
                  this.nodes.forEach(YC),
                  $C(fn);
            }),
            (this.hasProjected = !1),
            (this.isVisible = !0),
            (this.animationProgress = 0),
            (this.sharedNodes = new Map()),
            (this.latestValues = o),
            (this.root = l ? l.root || l : this),
            (this.path = l ? [...l.path, l] : []),
            (this.parent = l),
            (this.depth = l ? l.depth + 1 : 0);
         for (let a = 0; a < this.path.length; a++) this.path[a].shouldResetTransform = !0;
         this.root === this && (this.nodes = new zC());
      }
      addEventListener(o, l) {
         return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Yu()), this.eventHandlers.get(o).add(l);
      }
      notifyListeners(o, ...l) {
         const a = this.eventHandlers.get(o);
         a && a.notify(...l);
      }
      hasListeners(o) {
         return this.eventHandlers.has(o);
      }
      mount(o, l = this.root.hasTreeAnimated) {
         if (this.instance) return;
         (this.isSVG = QC(o)), (this.instance = o);
         const { layoutId: a, layout: u, visualElement: c } = this.options;
         if (
            (c && !c.current && c.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            l && (u || a) && (this.isLayoutDirty = !0),
            e)
         ) {
            let f;
            const h = () => (this.root.updateBlockedByResize = !1);
            e(o, () => {
               (this.root.updateBlockedByResize = !0),
                  f && f(),
                  (f = UC(h, 250)),
                  di.hasAnimatedSinceResize && ((di.hasAnimatedSinceResize = !1), this.nodes.forEach(kd));
            });
         }
         a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 &&
               c &&
               (a || u) &&
               this.addEventListener('didUpdate', ({ delta: f, hasLayoutChanged: h, hasRelativeTargetChanged: m, layout: v }) => {
                  if (this.isTreeAnimationBlocked()) {
                     (this.target = void 0), (this.relativeTarget = void 0);
                     return;
                  }
                  const x = this.options.transition || c.getDefaultTransition() || oP,
                     { onLayoutAnimationStart: C, onLayoutAnimationComplete: y } = c.getProps(),
                     p = !this.targetLayout || !Ta(this.targetLayout, v) || m,
                     g = !h && m;
                  if (
                     this.options.layoutRoot ||
                     (this.resumeFrom && this.resumeFrom.instance) ||
                     g ||
                     (h && (p || !this.currentAnimation))
                  ) {
                     this.resumeFrom && ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(f, g);
                     const S = { ...Py(x, 'layout'), onPlay: C, onComplete: y };
                     (c.shouldReduceMotion || this.options.layoutRoot) && ((S.delay = 0), (S.type = !1)), this.startAnimation(S);
                  } else h || kd(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                  this.targetLayout = v;
               });
      }
      unmount() {
         this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
         const o = this.getStack();
         o && o.remove(this), this.parent && this.parent.children.delete(this), (this.instance = void 0), Et(this.updateProjection);
      }
      blockUpdate() {
         this.updateManuallyBlocked = !0;
      }
      unblockUpdate() {
         this.updateManuallyBlocked = !1;
      }
      isUpdateBlocked() {
         return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
         return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
      }
      startUpdate() {
         this.isUpdateBlocked() || ((this.isUpdating = !0), this.nodes && this.nodes.forEach(nP), this.animationId++);
      }
      getTransformTemplate() {
         const { visualElement: o } = this.options;
         return o && o.getProps().transformTemplate;
      }
      willUpdate(o = !0) {
         if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
            this.options.onExitComplete && this.options.onExitComplete();
            return;
         }
         if ((!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return;
         this.isLayoutDirty = !0;
         for (let c = 0; c < this.path.length; c++) {
            const f = this.path[c];
            (f.shouldResetTransform = !0), f.updateScroll('snapshot'), f.options.layoutRoot && f.willUpdate(!1);
         }
         const { layoutId: l, layout: a } = this.options;
         if (l === void 0 && !a) return;
         const u = this.getTransformTemplate();
         (this.prevTransformTemplateValue = u ? u(this.latestValues, '') : void 0),
            this.updateSnapshot(),
            o && this.notifyListeners('willUpdate');
      }
      update() {
         if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ed);
            return;
         }
         this.isUpdating || this.nodes.forEach(JC),
            (this.isUpdating = !1),
            this.nodes.forEach(ZC),
            this.nodes.forEach(qC),
            this.nodes.forEach(HC),
            this.clearAllSnapshots();
         const l = performance.now();
         (K.delta = Yt(0, 1e3 / 60, l - K.timestamp)),
            (K.timestamp = l),
            (K.isProcessing = !0),
            Zn.update.process(K),
            Zn.preRender.process(K),
            Zn.render.process(K),
            (K.isProcessing = !1);
      }
      didUpdate() {
         this.updateScheduled || ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
      }
      clearAllSnapshots() {
         this.nodes.forEach(XC), this.sharedNodes.forEach(rP);
      }
      scheduleUpdateProjection() {
         G.preRender(this.updateProjection, !1, !0);
      }
      scheduleCheckAfterUnmount() {
         G.postRender(() => {
            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
         });
      }
      updateSnapshot() {
         this.snapshot || !this.instance || (this.snapshot = this.measure());
      }
      updateLayout() {
         if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
         if (this.resumeFrom && !this.resumeFrom.instance) for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
         const o = this.layout;
         (this.layout = this.measure(!1)),
            (this.layoutCorrected = re()),
            (this.isLayoutDirty = !1),
            (this.projectionDelta = void 0),
            this.notifyListeners('measure', this.layout.layoutBox);
         const { visualElement: l } = this.options;
         l && l.notify('LayoutMeasure', this.layout.layoutBox, o ? o.layoutBox : void 0);
      }
      updateScroll(o = 'measure') {
         let l = !!(this.options.layoutScroll && this.instance);
         this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (l = !1),
            l && (this.scroll = { animationId: this.root.animationId, phase: o, isRoot: r(this.instance), offset: n(this.instance) });
      }
      resetTransform() {
         if (!s) return;
         const o = this.isLayoutDirty || this.shouldResetTransform,
            l = this.projectionDelta && !by(this.projectionDelta),
            a = this.getTransformTemplate(),
            u = a ? a(this.latestValues, '') : void 0,
            c = u !== this.prevTransformTemplateValue;
         o && (l || cn(this.latestValues) || c) && (s(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender());
      }
      measure(o = !0) {
         const l = this.measurePageBox();
         let a = this.removeElementScroll(l);
         return (
            o && (a = this.removeTransform(a)),
            lP(a),
            { animationId: this.root.animationId, measuredBox: l, layoutBox: a, latestValues: {}, source: this.id }
         );
      }
      measurePageBox() {
         const { visualElement: o } = this.options;
         if (!o) return re();
         const l = o.measureViewportBox(),
            { scroll: a } = this.root;
         return a && (Dt(l.x, a.offset.x), Dt(l.y, a.offset.y)), l;
      }
      removeElementScroll(o) {
         const l = re();
         Be(l, o);
         for (let a = 0; a < this.path.length; a++) {
            const u = this.path[a],
               { scroll: c, options: f } = u;
            if (u !== this.root && c && f.layoutScroll) {
               if (c.isRoot) {
                  Be(l, o);
                  const { scroll: h } = this.root;
                  h && (Dt(l.x, -h.offset.x), Dt(l.y, -h.offset.y));
               }
               Dt(l.x, c.offset.x), Dt(l.y, c.offset.y);
            }
         }
         return l;
      }
      applyTransform(o, l = !1) {
         const a = re();
         Be(a, o);
         for (let u = 0; u < this.path.length; u++) {
            const c = this.path[u];
            !l && c.options.layoutScroll && c.scroll && c !== c.root && Kn(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
               cn(c.latestValues) && Kn(a, c.latestValues);
         }
         return cn(this.latestValues) && Kn(a, this.latestValues), a;
      }
      removeTransform(o) {
         const l = re();
         Be(l, o);
         for (let a = 0; a < this.path.length; a++) {
            const u = this.path[a];
            if (!u.instance || !cn(u.latestValues)) continue;
            ka(u.latestValues) && u.updateSnapshot();
            const c = re(),
               f = u.measurePageBox();
            Be(c, f), xd(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
         }
         return cn(this.latestValues) && xd(l, this.latestValues), l;
      }
      setTargetDelta(o) {
         (this.targetDelta = o), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0);
      }
      setOptions(o) {
         this.options = { ...this.options, ...o, crossfade: o.crossfade !== void 0 ? o.crossfade : !0 };
      }
      clearMeasurements() {
         (this.scroll = void 0),
            (this.layout = void 0),
            (this.snapshot = void 0),
            (this.prevTransformTemplateValue = void 0),
            (this.targetDelta = void 0),
            (this.target = void 0),
            (this.isLayoutDirty = !1);
      }
      forceRelativeParentToResolveTarget() {
         this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== K.timestamp && this.relativeParent.resolveTargetDelta(!0);
      }
      resolveTargetDelta(o = !1) {
         var l;
         const a = this.getLead();
         this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
         const u = !!this.resumingFrom || this !== a;
         if (
            !(
               o ||
               (u && this.isSharedProjectionDirty) ||
               this.isProjectionDirty ||
               (!((l = this.parent) === null || l === void 0) && l.isProjectionDirty) ||
               this.attemptToResolveRelativeTarget
            )
         )
            return;
         const { layout: f, layoutId: h } = this.options;
         if (!(!this.layout || !(f || h))) {
            if (((this.resolvedRelativeTargetAt = K.timestamp), !this.targetDelta && !this.relativeTarget)) {
               const m = this.getClosestProjectingParent();
               m && m.layout && this.animationProgress !== 1
                  ? ((this.relativeParent = m),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = re()),
                    (this.relativeTargetOrigin = re()),
                    qr(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox),
                    Be(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
            }
            if (!(!this.relativeTarget && !this.targetDelta)) {
               if (
                  (this.target || ((this.target = re()), (this.targetWithTransforms = re())),
                  this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target
                     ? (this.forceRelativeParentToResolveTarget(), cC(this.target, this.relativeTarget, this.relativeParent.target))
                     : this.targetDelta
                     ? (this.resumingFrom
                          ? (this.target = this.applyTransform(this.layout.layoutBox))
                          : Be(this.target, this.layout.layoutBox),
                       Fy(this.target, this.targetDelta))
                     : Be(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
               ) {
                  this.attemptToResolveRelativeTarget = !1;
                  const m = this.getClosestProjectingParent();
                  m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1
                     ? ((this.relativeParent = m),
                       this.forceRelativeParentToResolveTarget(),
                       (this.relativeTarget = re()),
                       (this.relativeTargetOrigin = re()),
                       qr(this.relativeTargetOrigin, this.target, m.target),
                       Be(this.relativeTarget, this.relativeTargetOrigin))
                     : (this.relativeParent = this.relativeTarget = void 0);
               }
               fn.resolvedTargetDeltas++;
            }
         }
      }
      getClosestProjectingParent() {
         if (!(!this.parent || ka(this.parent.latestValues) || Ry(this.parent.latestValues)))
            return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
         return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      calcProjection() {
         var o;
         const l = this.getLead(),
            a = !!this.resumingFrom || this !== l;
         let u = !0;
         if (
            ((this.isProjectionDirty || (!((o = this.parent) === null || o === void 0) && o.isProjectionDirty)) && (u = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
            this.resolvedRelativeTargetAt === K.timestamp && (u = !1),
            u)
         )
            return;
         const { layout: c, layoutId: f } = this.options;
         if (
            ((this.isTreeAnimating = !!((this.parent && this.parent.isTreeAnimating) || this.currentAnimation || this.pendingAnimation)),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(c || f))
         )
            return;
         Be(this.layoutCorrected, this.layout.layoutBox);
         const h = this.treeScale.x,
            m = this.treeScale.y;
         xC(this.layoutCorrected, this.treeScale, this.path, a),
            l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox);
         const { target: v } = l;
         if (!v) {
            this.projectionTransform && ((this.projectionDelta = Wn()), (this.projectionTransform = 'none'), this.scheduleRender());
            return;
         }
         this.projectionDelta || ((this.projectionDelta = Wn()), (this.projectionDeltaWithTransform = Wn()));
         const x = this.projectionTransform;
         Kr(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
            (this.projectionTransform = Cd(this.projectionDelta, this.treeScale)),
            (this.projectionTransform !== x || this.treeScale.x !== h || this.treeScale.y !== m) &&
               ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners('projectionUpdate', v)),
            fn.recalculatedProjection++;
      }
      hide() {
         this.isVisible = !1;
      }
      show() {
         this.isVisible = !0;
      }
      scheduleRender(o = !0) {
         if ((this.options.scheduleRender && this.options.scheduleRender(), o)) {
            const l = this.getStack();
            l && l.scheduleRender();
         }
         this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
      }
      setAnimationOrigin(o, l = !1) {
         const a = this.snapshot,
            u = a ? a.latestValues : {},
            c = { ...this.latestValues },
            f = Wn();
         (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            (this.attemptToResolveRelativeTarget = !l);
         const h = re(),
            m = a ? a.source : void 0,
            v = this.layout ? this.layout.source : void 0,
            x = m !== v,
            C = this.getStack(),
            y = !C || C.members.length <= 1,
            p = !!(x && !y && this.options.crossfade === !0 && !this.path.some(iP));
         this.animationProgress = 0;
         let g;
         (this.mixTargetDelta = (S) => {
            const j = S / 1e3;
            Ad(f.x, o.x, j),
               Ad(f.y, o.y, j),
               this.setTargetDelta(f),
               this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.layout &&
                  this.relativeParent &&
                  this.relativeParent.layout &&
                  (qr(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                  sP(this.relativeTarget, this.relativeTargetOrigin, h, j),
                  g && Ta(this.relativeTarget, g) && (this.isProjectionDirty = !1),
                  g || (g = re()),
                  Be(g, this.relativeTarget)),
               x && ((this.animationValues = c), MC(c, u, this.latestValues, j, p, y)),
               this.root.scheduleUpdateProjection(),
               this.scheduleRender(),
               (this.animationProgress = j);
         }),
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(o) {
         this.notifyListeners('animationStart'),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Et(this.pendingAnimation), (this.pendingAnimation = void 0)),
            (this.pendingAnimation = G.update(() => {
               (di.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = WC(0, jd, {
                     ...o,
                     onUpdate: (l) => {
                        this.mixTargetDelta(l), o.onUpdate && o.onUpdate(l);
                     },
                     onComplete: () => {
                        o.onComplete && o.onComplete(), this.completeAnimation();
                     },
                  })),
                  this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                  (this.pendingAnimation = void 0);
            }));
      }
      completeAnimation() {
         this.resumingFrom && ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
         const o = this.getStack();
         o && o.exitAnimationComplete(),
            (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
            this.notifyListeners('animationComplete');
      }
      finishAnimation() {
         this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(jd), this.currentAnimation.stop()), this.completeAnimation();
      }
      applyTransformsToTarget() {
         const o = this.getLead();
         let { targetWithTransforms: l, target: a, layout: u, latestValues: c } = o;
         if (!(!l || !a || !u)) {
            if (this !== o && this.layout && u && Vy(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
               a = this.target || re();
               const f = be(this.layout.layoutBox.x);
               (a.x.min = o.target.x.min), (a.x.max = a.x.min + f);
               const h = be(this.layout.layoutBox.y);
               (a.y.min = o.target.y.min), (a.y.max = a.y.min + h);
            }
            Be(l, a), Kn(l, c), Kr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
         }
      }
      registerSharedNode(o, l) {
         this.sharedNodes.has(o) || this.sharedNodes.set(o, new _C()), this.sharedNodes.get(o).add(l);
         const u = l.options.initialPromotionConfig;
         l.promote({
            transition: u ? u.transition : void 0,
            preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0,
         });
      }
      isLead() {
         const o = this.getStack();
         return o ? o.lead === this : !0;
      }
      getLead() {
         var o;
         const { layoutId: l } = this.options;
         return l ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this;
      }
      getPrevLead() {
         var o;
         const { layoutId: l } = this.options;
         return l ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead) : void 0;
      }
      getStack() {
         const { layoutId: o } = this.options;
         if (o) return this.root.sharedNodes.get(o);
      }
      promote({ needsReset: o, transition: l, preserveFollowOpacity: a } = {}) {
         const u = this.getStack();
         u && u.promote(this, a), o && ((this.projectionDelta = void 0), (this.needsReset = !0)), l && this.setOptions({ transition: l });
      }
      relegate() {
         const o = this.getStack();
         return o ? o.relegate(this) : !1;
      }
      resetRotation() {
         const { visualElement: o } = this.options;
         if (!o) return;
         let l = !1;
         const { latestValues: a } = o;
         if (((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0), !l)) return;
         const u = {};
         for (let c = 0; c < Pd.length; c++) {
            const f = 'rotate' + Pd[c];
            a[f] && ((u[f] = a[f]), o.setStaticValue(f, 0));
         }
         o.render();
         for (const c in u) o.setStaticValue(c, u[c]);
         o.scheduleRender();
      }
      getProjectionStyles(o = {}) {
         var l, a;
         const u = {};
         if (!this.instance || this.isSVG) return u;
         if (this.isVisible) u.visibility = '';
         else return { visibility: 'hidden' };
         const c = this.getTransformTemplate();
         if (this.needsReset)
            return (
               (this.needsReset = !1),
               (u.opacity = ''),
               (u.pointerEvents = fi(o.pointerEvents) || ''),
               (u.transform = c ? c(this.latestValues, '') : 'none'),
               u
            );
         const f = this.getLead();
         if (!this.projectionDelta || !this.layout || !f.target) {
            const x = {};
            return (
               this.options.layoutId &&
                  ((x.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
                  (x.pointerEvents = fi(o.pointerEvents) || '')),
               this.hasProjected && !cn(this.latestValues) && ((x.transform = c ? c({}, '') : 'none'), (this.hasProjected = !1)),
               x
            );
         }
         const h = f.animationValues || f.latestValues;
         this.applyTransformsToTarget(),
            (u.transform = Cd(this.projectionDeltaWithTransform, this.treeScale, h)),
            c && (u.transform = c(h, u.transform));
         const { x: m, y: v } = this.projectionDelta;
         (u.transformOrigin = `${m.origin * 100}% ${v.origin * 100}% 0`),
            f.animationValues
               ? (u.opacity =
                    f === this
                       ? (a = (l = h.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0
                          ? a
                          : 1
                       : this.preserveOpacity
                       ? this.latestValues.opacity
                       : h.opacityExit)
               : (u.opacity = f === this ? (h.opacity !== void 0 ? h.opacity : '') : h.opacityExit !== void 0 ? h.opacityExit : 0);
         for (const x in zi) {
            if (h[x] === void 0) continue;
            const { correct: C, applyTo: y } = zi[x],
               p = u.transform === 'none' ? h[x] : C(h[x], f);
            if (y) {
               const g = y.length;
               for (let S = 0; S < g; S++) u[y[S]] = p;
            } else u[x] = p;
         }
         return this.options.layoutId && (u.pointerEvents = f === this ? fi(o.pointerEvents) || '' : 'none'), u;
      }
      clearSnapshot() {
         this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
         this.root.nodes.forEach((o) => {
            var l;
            return (l = o.currentAnimation) === null || l === void 0 ? void 0 : l.stop();
         }),
            this.root.nodes.forEach(Ed),
            this.root.sharedNodes.clear();
      }
   };
}
function qC(e) {
   e.updateLayout();
}
function HC(e) {
   var t;
   const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
   if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
      const { layoutBox: r, measuredBox: s } = e.layout,
         { animationType: i } = e.options,
         o = n.source !== e.layout.source;
      i === 'size'
         ? lt((f) => {
              const h = o ? n.measuredBox[f] : n.layoutBox[f],
                 m = be(h);
              (h.min = r[f].min), (h.max = h.min + m);
           })
         : Vy(i, n.layoutBox, r) &&
           lt((f) => {
              const h = o ? n.measuredBox[f] : n.layoutBox[f],
                 m = be(r[f]);
              (h.max = h.min + m),
                 e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0), (e.relativeTarget[f].max = e.relativeTarget[f].min + m));
           });
      const l = Wn();
      Kr(l, r, n.layoutBox);
      const a = Wn();
      o ? Kr(a, e.applyTransform(s, !0), n.measuredBox) : Kr(a, r, n.layoutBox);
      const u = !by(l);
      let c = !1;
      if (!e.resumeFrom) {
         const f = e.getClosestProjectingParent();
         if (f && !f.resumeFrom) {
            const { snapshot: h, layout: m } = f;
            if (h && m) {
               const v = re();
               qr(v, n.layoutBox, h.layoutBox);
               const x = re();
               qr(x, r, m.layoutBox),
                  Ta(v, x) || (c = !0),
                  f.options.layoutRoot && ((e.relativeTarget = x), (e.relativeTargetOrigin = v), (e.relativeParent = f));
            }
         }
      }
      e.notifyListeners('didUpdate', {
         layout: r,
         snapshot: n,
         delta: a,
         layoutDelta: l,
         hasLayoutChanged: u,
         hasRelativeTargetChanged: c,
      });
   } else if (e.isLead()) {
      const { onExitComplete: r } = e.options;
      r && r();
   }
   e.options.transition = void 0;
}
function GC(e) {
   fn.totalNodes++,
      e.parent &&
         (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
         e.isSharedProjectionDirty ||
            (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
         e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function YC(e) {
   e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function XC(e) {
   e.clearSnapshot();
}
function Ed(e) {
   e.clearMeasurements();
}
function JC(e) {
   e.isLayoutDirty = !1;
}
function ZC(e) {
   const { visualElement: t } = e.options;
   t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'), e.resetTransform();
}
function kd(e) {
   e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0), (e.isProjectionDirty = !0);
}
function eP(e) {
   e.resolveTargetDelta();
}
function tP(e) {
   e.calcProjection();
}
function nP(e) {
   e.resetRotation();
}
function rP(e) {
   e.removeLeadSnapshot();
}
function Ad(e, t, n) {
   (e.translate = H(t.translate, 0, n)), (e.scale = H(t.scale, 1, n)), (e.origin = t.origin), (e.originPoint = t.originPoint);
}
function Td(e, t, n, r) {
   (e.min = H(t.min, n.min, r)), (e.max = H(t.max, n.max, r));
}
function sP(e, t, n, r) {
   Td(e.x, t.x, n.x, r), Td(e.y, t.y, n.y, r);
}
function iP(e) {
   return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const oP = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function Nd(e) {
   (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function lP(e) {
   Nd(e.x), Nd(e.y);
}
function Vy(e, t, n) {
   return e === 'position' || (e === 'preserve-aspect' && !ja(Sd(t), Sd(n), 0.2));
}
const aP = Iy({
      attachResizeListener: (e, t) => yt(e, 'resize', t),
      measureScroll: () => ({
         x: document.documentElement.scrollLeft || document.body.scrollLeft,
         y: document.documentElement.scrollTop || document.body.scrollTop,
      }),
      checkIsScrollRoot: () => !0,
   }),
   pl = { current: void 0 },
   _y = Iy({
      measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
      defaultParent: () => {
         if (!pl.current) {
            const e = new aP({});
            e.mount(window), e.setOptions({ layoutScroll: !0 }), (pl.current = e);
         }
         return pl.current;
      },
      resetTransform: (e, t) => {
         e.style.transform = t !== void 0 ? t : 'none';
      },
      checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed',
   }),
   uP = { pan: { Feature: AC }, drag: { Feature: kC, ProjectionNode: _y, MeasureLayout: My } },
   cP = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function fP(e) {
   const t = cP.exec(e);
   if (!t) return [,];
   const [, n, r] = t;
   return [n, r];
}
function Na(e, t, n = 1) {
   const [r, s] = fP(e);
   if (!r) return;
   const i = window.getComputedStyle(t).getPropertyValue(r);
   return i ? i.trim() : ya(s) ? Na(s, t, n + 1) : s;
}
function dP(e, { ...t }, n) {
   const r = e.current;
   if (!(r instanceof Element)) return { target: t, transitionEnd: n };
   n && (n = { ...n }),
      e.values.forEach((s) => {
         const i = s.get();
         if (!ya(i)) return;
         const o = Na(i, r);
         o && s.set(o);
      });
   for (const s in t) {
      const i = t[s];
      if (!ya(i)) continue;
      const o = Na(i, r);
      o && ((t[s] = o), n || (n = {}), n[s] === void 0 && (n[s] = i));
   }
   return { target: t, transitionEnd: n };
}
const hP = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', 'x', 'y', 'translateX', 'translateY']),
   By = (e) => hP.has(e),
   pP = (e) => Object.keys(e).some(By),
   Rd = (e) => e === Tn || e === D,
   Fd = (e, t) => parseFloat(e.split(', ')[t]),
   Dd =
      (e, t) =>
      (n, { transform: r }) => {
         if (r === 'none' || !r) return 0;
         const s = r.match(/^matrix3d\((.+)\)$/);
         if (s) return Fd(s[1], t);
         {
            const i = r.match(/^matrix\((.+)\)$/);
            return i ? Fd(i[1], e) : 0;
         }
      },
   mP = new Set(['x', 'y', 'z']),
   yP = ks.filter((e) => !mP.has(e));
function gP(e) {
   const t = [];
   return (
      yP.forEach((n) => {
         const r = e.getValue(n);
         r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0));
      }),
      t.length && e.render(),
      t
   );
}
const Md = {
      width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) => e.max - e.min - parseFloat(t) - parseFloat(n),
      height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) => e.max - e.min - parseFloat(t) - parseFloat(n),
      top: (e, { top: t }) => parseFloat(t),
      left: (e, { left: t }) => parseFloat(t),
      bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
      right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
      x: Dd(4, 13),
      y: Dd(5, 14),
   },
   vP = (e, t, n) => {
      const r = t.measureViewportBox(),
         s = t.current,
         i = getComputedStyle(s),
         { display: o } = i,
         l = {};
      o === 'none' && t.setStaticValue('display', e.display || 'block'),
         n.forEach((u) => {
            l[u] = Md[u](r, i);
         }),
         t.render();
      const a = t.measureViewportBox();
      return (
         n.forEach((u) => {
            const c = t.getValue(u);
            c && c.jump(l[u]), (e[u] = Md[u](a, i));
         }),
         e
      );
   },
   xP = (e, t, n = {}, r = {}) => {
      (t = { ...t }), (r = { ...r });
      const s = Object.keys(t).filter(By);
      let i = [],
         o = !1;
      const l = [];
      if (
         (s.forEach((a) => {
            const u = e.getValue(a);
            if (!e.hasValue(a)) return;
            let c = n[a],
               f = kr(c);
            const h = t[a];
            let m;
            if ($i(h)) {
               const v = h.length,
                  x = h[0] === null ? 1 : 0;
               (c = h[x]), (f = kr(c));
               for (let C = x; C < v && h[C] !== null; C++) m ? Uu(kr(h[C]) === m) : (m = kr(h[C]));
            } else m = kr(h);
            if (f !== m)
               if (Rd(f) && Rd(m)) {
                  const v = u.get();
                  typeof v == 'string' && u.set(parseFloat(v)),
                     typeof h == 'string' ? (t[a] = parseFloat(h)) : Array.isArray(h) && m === D && (t[a] = h.map(parseFloat));
               } else
                  f != null && f.transform && m != null && m.transform && (c === 0 || h === 0)
                     ? c === 0
                        ? u.set(m.transform(c))
                        : (t[a] = f.transform(h))
                     : (o || ((i = gP(e)), (o = !0)), l.push(a), (r[a] = r[a] !== void 0 ? r[a] : t[a]), u.jump(h));
         }),
         l.length)
      ) {
         const a = l.indexOf('height') >= 0 ? window.pageYOffset : null,
            u = vP(t, e, l);
         return (
            i.length &&
               i.forEach(([c, f]) => {
                  e.getValue(c).set(f);
               }),
            e.render(),
            So && a !== null && window.scrollTo({ top: a }),
            { target: u, transitionEnd: r }
         );
      } else return { target: t, transitionEnd: r };
   };
function wP(e, t, n, r) {
   return pP(t) ? xP(e, t, n, r) : { target: t, transitionEnd: r };
}
const SP = (e, t, n, r) => {
      const s = dP(e, t, r);
      return (t = s.target), (r = s.transitionEnd), wP(e, t, n, r);
   },
   Ra = { current: null },
   zy = { current: !1 };
function CP() {
   if (((zy.current = !0), !!So))
      if (window.matchMedia) {
         const e = window.matchMedia('(prefers-reduced-motion)'),
            t = () => (Ra.current = e.matches);
         e.addListener(t), t();
      } else Ra.current = !1;
}
function PP(e, t, n) {
   const { willChange: r } = t;
   for (const s in t) {
      const i = t[s],
         o = n[s];
      if (Re(i)) e.addValue(s, i), qi(r) && r.add(s);
      else if (Re(o)) e.addValue(s, ar(i, { owner: e })), qi(r) && r.remove(s);
      else if (o !== i)
         if (e.hasValue(s)) {
            const l = e.getValue(s);
            !l.hasAnimated && l.set(i);
         } else {
            const l = e.getStaticValue(s);
            e.addValue(s, ar(l !== void 0 ? l : i, { owner: e }));
         }
   }
   for (const s in n) t[s] === void 0 && e.removeValue(s);
   return t;
}
const Ld = new WeakMap(),
   Uy = Object.keys(ms),
   jP = Uy.length,
   Od = [
      'AnimationStart',
      'AnimationComplete',
      'Update',
      'BeforeLayoutMeasure',
      'LayoutMeasure',
      'LayoutAnimationStart',
      'LayoutAnimationComplete',
   ],
   EP = Mu.length;
class kP {
   constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: s, visualState: i }, o = {}) {
      (this.current = null),
         (this.children = new Set()),
         (this.isVariantNode = !1),
         (this.isControllingVariants = !1),
         (this.shouldReduceMotion = null),
         (this.values = new Map()),
         (this.features = {}),
         (this.valueSubscriptions = new Map()),
         (this.prevMotionValues = {}),
         (this.events = {}),
         (this.propEventSubscriptions = {}),
         (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
         (this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
         }),
         (this.scheduleRender = () => G.render(this.render, !1, !0));
      const { latestValues: l, renderState: a } = i;
      (this.latestValues = l),
         (this.baseTarget = { ...l }),
         (this.initialValues = n.initial ? { ...l } : {}),
         (this.renderState = a),
         (this.parent = t),
         (this.props = n),
         (this.presenceContext = r),
         (this.depth = t ? t.depth + 1 : 0),
         (this.reducedMotionConfig = s),
         (this.options = o),
         (this.isControllingVariants = Po(n)),
         (this.isVariantNode = km(n)),
         this.isVariantNode && (this.variantChildren = new Set()),
         (this.manuallyAnimateOnMount = !!(t && t.current));
      const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
      for (const f in c) {
         const h = c[f];
         l[f] !== void 0 && Re(h) && (h.set(l[f], !1), qi(u) && u.add(f));
      }
   }
   scrapeMotionValuesFromProps(t, n) {
      return {};
   }
   mount(t) {
      (this.current = t),
         Ld.set(t, this),
         this.projection && !this.projection.instance && this.projection.mount(t),
         this.parent &&
            this.isVariantNode &&
            !this.isControllingVariants &&
            (this.removeFromVariantTree = this.parent.addVariantChild(this)),
         this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
         zy.current || CP(),
         (this.shouldReduceMotion = this.reducedMotionConfig === 'never' ? !1 : this.reducedMotionConfig === 'always' ? !0 : Ra.current),
         this.parent && this.parent.children.add(this),
         this.update(this.props, this.presenceContext);
   }
   unmount() {
      Ld.delete(this.current),
         this.projection && this.projection.unmount(),
         Et(this.notifyUpdate),
         Et(this.render),
         this.valueSubscriptions.forEach((t) => t()),
         this.removeFromVariantTree && this.removeFromVariantTree(),
         this.parent && this.parent.children.delete(this);
      for (const t in this.events) this.events[t].clear();
      for (const t in this.features) this.features[t].unmount();
      this.current = null;
   }
   bindToMotionValue(t, n) {
      const r = An.has(t),
         s = n.on('change', (o) => {
            (this.latestValues[t] = o),
               this.props.onUpdate && G.update(this.notifyUpdate, !1, !0),
               r && this.projection && (this.projection.isTransformDirty = !0);
         }),
         i = n.on('renderRequest', this.scheduleRender);
      this.valueSubscriptions.set(t, () => {
         s(), i();
      });
   }
   sortNodePosition(t) {
      return !this.current || !this.sortInstanceNodePosition || this.type !== t.type
         ? 0
         : this.sortInstanceNodePosition(this.current, t.current);
   }
   loadFeatures({ children: t, ...n }, r, s, i) {
      let o, l;
      for (let a = 0; a < jP; a++) {
         const u = Uy[a],
            { isEnabled: c, Feature: f, ProjectionNode: h, MeasureLayout: m } = ms[u];
         h && (o = h), c(n) && (!this.features[u] && f && (this.features[u] = new f(this)), m && (l = m));
      }
      if (!this.projection && o) {
         this.projection = new o(this.latestValues, this.parent && this.parent.projection);
         const { layoutId: a, layout: u, drag: c, dragConstraints: f, layoutScroll: h, layoutRoot: m } = n;
         this.projection.setOptions({
            layoutId: a,
            layout: u,
            alwaysMeasureLayout: !!c || (f && $n(f)),
            visualElement: this,
            scheduleRender: () => this.scheduleRender(),
            animationType: typeof u == 'string' ? u : 'both',
            initialPromotionConfig: i,
            layoutScroll: h,
            layoutRoot: m,
         });
      }
      return l;
   }
   updateFeatures() {
      for (const t in this.features) {
         const n = this.features[t];
         n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
      }
   }
   triggerBuild() {
      this.build(this.renderState, this.latestValues, this.options, this.props);
   }
   measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : re();
   }
   getStaticValue(t) {
      return this.latestValues[t];
   }
   setStaticValue(t, n) {
      this.latestValues[t] = n;
   }
   makeTargetAnimatable(t, n = !0) {
      return this.makeTargetAnimatableFromInstance(t, this.props, n);
   }
   update(t, n) {
      (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
         (this.prevProps = this.props),
         (this.props = t),
         (this.prevPresenceContext = this.presenceContext),
         (this.presenceContext = n);
      for (let r = 0; r < Od.length; r++) {
         const s = Od[r];
         this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
         const i = t['on' + s];
         i && (this.propEventSubscriptions[s] = this.on(s, i));
      }
      (this.prevMotionValues = PP(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues)),
         this.handleChildMotionValue && this.handleChildMotionValue();
   }
   getProps() {
      return this.props;
   }
   getVariant(t) {
      return this.props.variants ? this.props.variants[t] : void 0;
   }
   getDefaultTransition() {
      return this.props.transition;
   }
   getTransformPagePoint() {
      return this.props.transformPagePoint;
   }
   getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
   }
   getVariantContext(t = !1) {
      if (t) return this.parent ? this.parent.getVariantContext() : void 0;
      if (!this.isControllingVariants) {
         const r = this.parent ? this.parent.getVariantContext() || {} : {};
         return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
      }
      const n = {};
      for (let r = 0; r < EP; r++) {
         const s = Mu[r],
            i = this.props[s];
         (ps(i) || i === !1) && (n[s] = i);
      }
      return n;
   }
   addVariantChild(t) {
      const n = this.getClosestVariantNode();
      if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
   }
   addValue(t, n) {
      n !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, n)),
         this.values.set(t, n),
         (this.latestValues[t] = n.get());
   }
   removeValue(t) {
      this.values.delete(t);
      const n = this.valueSubscriptions.get(t);
      n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
   }
   hasValue(t) {
      return this.values.has(t);
   }
   getValue(t, n) {
      if (this.props.values && this.props.values[t]) return this.props.values[t];
      let r = this.values.get(t);
      return r === void 0 && n !== void 0 && ((r = ar(n, { owner: this })), this.addValue(t, r)), r;
   }
   readValue(t) {
      return this.latestValues[t] !== void 0 || !this.current
         ? this.latestValues[t]
         : this.readValueFromInstance(this.current, t, this.options);
   }
   setBaseTarget(t, n) {
      this.baseTarget[t] = n;
   }
   getBaseTarget(t) {
      var n;
      const { initial: r } = this.props,
         s = typeof r == 'string' || typeof r == 'object' ? ((n = zu(this.props, r)) === null || n === void 0 ? void 0 : n[t]) : void 0;
      if (r && s !== void 0) return s;
      const i = this.getBaseTargetFromProps(this.props, t);
      return i !== void 0 && !Re(i) ? i : this.initialValues[t] !== void 0 && s === void 0 ? void 0 : this.baseTarget[t];
   }
   on(t, n) {
      return this.events[t] || (this.events[t] = new Yu()), this.events[t].add(n);
   }
   notify(t, ...n) {
      this.events[t] && this.events[t].notify(...n);
   }
}
class $y extends kP {
   sortInstanceNodePosition(t, n) {
      return t.compareDocumentPosition(n) & 2 ? 1 : -1;
   }
   getBaseTargetFromProps(t, n) {
      return t.style ? t.style[n] : void 0;
   }
   removeValueFromRenderState(t, { vars: n, style: r }) {
      delete n[t], delete r[t];
   }
   makeTargetAnimatableFromInstance({ transition: t, transitionEnd: n, ...r }, { transformValues: s }, i) {
      let o = KS(r, t || {}, this);
      if ((s && (n && (n = s(n)), r && (r = s(r)), o && (o = s(o))), i)) {
         QS(this, r, o);
         const l = SP(this, r, o, n);
         (n = l.transitionEnd), (r = l.target);
      }
      return { transition: t, transitionEnd: n, ...r };
   }
}
function AP(e) {
   return window.getComputedStyle(e);
}
class TP extends $y {
   readValueFromInstance(t, n) {
      if (An.has(n)) {
         const r = Ku(n);
         return (r && r.default) || 0;
      } else {
         const r = AP(t),
            s = (Fm(n) ? r.getPropertyValue(n) : r[n]) || 0;
         return typeof s == 'string' ? s.trim() : s;
      }
   }
   measureInstanceViewportBox(t, { transformPagePoint: n }) {
      return Dy(t, n);
   }
   build(t, n, r, s) {
      Ou(t, n, r, s.transformTemplate);
   }
   scrapeMotionValuesFromProps(t, n) {
      return Bu(t, n);
   }
   handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      const { children: t } = this.props;
      Re(t) &&
         (this.childSubscription = t.on('change', (n) => {
            this.current && (this.current.textContent = `${n}`);
         }));
   }
   renderInstance(t, n, r, s) {
      Im(t, n, r, s);
   }
}
class NP extends $y {
   constructor() {
      super(...arguments), (this.isSVGTag = !1);
   }
   getBaseTargetFromProps(t, n) {
      return t[n];
   }
   readValueFromInstance(t, n) {
      if (An.has(n)) {
         const r = Ku(n);
         return (r && r.default) || 0;
      }
      return (n = Vm.has(n) ? n : _u(n)), t.getAttribute(n);
   }
   measureInstanceViewportBox() {
      return re();
   }
   scrapeMotionValuesFromProps(t, n) {
      return Bm(t, n);
   }
   build(t, n, r, s) {
      Iu(t, n, r, this.isSVGTag, s.transformTemplate);
   }
   renderInstance(t, n, r, s) {
      _m(t, n, r, s);
   }
   mount(t) {
      (this.isSVGTag = Vu(t.tagName)), super.mount(t);
   }
}
const RP = (e, t) => (Lu(e) ? new NP(t, { enableHardwareAcceleration: !1 }) : new TP(t, { enableHardwareAcceleration: !0 })),
   FP = { layout: { ProjectionNode: _y, MeasureLayout: My } },
   DP = { ...oC, ...Aw, ...uP, ...FP },
   MP = L1((e, t) => cw(e, t, DP, RP)),
   LP = () => {
      let e = pr();
      const t = () => setTimeout(() => e('/index'), 4300);
      return (
         w.useEffect(() => {
            t();
         }),
         d.jsx('section', {
            className: 'w-screen h-screen bg-[#53b463] flex justify-center',
            children: d.jsxs('section', {
               className: 'flex flex-col items-center self-center',
               children: [
                  d.jsxs('p', {
                     className: 'font-open font-semibold text-3xl text-center',
                     children: ['Twil', d.jsx('span', { className: 'text-[#8dffb8]', children: 'i' }), 'ght'],
                  }),
                  d.jsx('div', {
                     className: 'flex flex-row items-center self-center relative',
                     children: d.jsx(MP.div, {
                        initial: { width: '0' },
                        whileInView: { width: '100px', transition: { duration: 4 } },
                        className: 'w-4 h-1 rounded-full mt-3 bg-[#2fff7f]',
                     }),
                  }),
               ],
            }),
         })
      );
   },
   OP = async (e, t) =>
      (
         await fetch(`${Q}/put/profile`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', Authorization: `${e}` },
            body: JSON.stringify(t),
         })
      ).json(),
   bP = async (e, t) =>
      (
         await fetch(`${Q}/delete/profile`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', Authorization: `${e}` },
            body: JSON.stringify(t),
         })
      ).json(),
   IP = () => {
      let { mode: e } = w.useContext(Ge),
         [t, n] = w.useState(''),
         r = pr(),
         { setPage: s } = w.useContext(js),
         [i, o] = w.useState({ name: '', email: '', oldPassword: '', newPassword: '', img: '' }),
         l = localStorage.getItem('-jwtKey-'),
         { updateRef: a } = w.useContext(tn);
      const u = (p) => {
            let { name: g, value: S } = p.target;
            o((j) => ({ ...j, [g]: S }));
         },
         c = He({
            mutationFn: () => OP(l || '', i),
            mutationKey: ['profile', 'update'],
            onSuccess: () => {
               a(), s('0x1');
            },
         }),
         f = He({
            mutationFn: () => bP(l || '', { password: t }),
            mutationKey: ['profile', 'delete'],
            onSuccess(p) {
               console.log(p), a(), r('/'), localStorage.removeItem('profileImg');
            },
         }),
         h = (p) => {
            let g;
            p.target.files !== null && (g = p.target.files[0]);
            let S = new FileReader();
            (S.onload = () => {
               o((j) => ({ ...j, img: S.result }));
            }),
               S.readAsDataURL(g || new Blob());
         };
      let {
         data: m,
         isError: v,
         refetch: x,
      } = jt({
         queryFn: async () =>
            (await fetch(`${Q}/getUser`, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `${l}` } })).json(),
         queryKey: ['getUser', 'common'],
      });
      v && x();
      let C = w.useMemo(() => (e ? yr : mr), [e]),
         y = `rounded shadow p-3 outline-none font-play w-full ${
            e ? 'text-[hsl(0,0%,90%)] bg-[hsl(0,0%,20%)]' : 'text-[hsl(0,0%,20%)] bg-[hsl(0,0%,90%)]'
         }`;
      return d.jsxs('section', {
         className: 'flex flex-col items-start w-full justify-start',
         children: [
            d.jsx('header', {
               className: 'w-full flex justify-center mb-3 border-b border-gray-200',
               children: d.jsx('h1', {
                  className: `${e ? 'text-[hsl(0,0%,90%)]' : 'text-[hsl(0,0%,10%)]'} font-play text-xl`,
                  children: 'Settings',
               }),
            }),
            d.jsx('p', {
               className: `${e ? 'text-[hsl(0,0%,90%)]' : 'text-[hsl(0,0%,20%)]'} text-xl text-left font-medium font-play mb-3 px-4`,
               children: 'Public Profile',
            }),
            d.jsxs('div', {
               className: 'flex flex-row items-start w-auto px-4',
               children: [
                  d.jsx('img', {
                     src: (m == null ? void 0 : m.user.profileImg) || C,
                     className: `${
                        e ? 'border-[hsl(0,0%,90%)]' : 'border-[hsl(0,0%,20%)]'
                     } border h-[70px] w-[70px] rounded-full shadow mr-5`,
                     alt: 'profileImg',
                  }),
                  d.jsxs('div', {
                     className: 'flex flex-col items-start',
                     children: [
                        d.jsx('button', {
                           type: 'button',
                           disabled: !0,
                           className: `p-2 px-8 font-play text-sm border rounded ${
                              e ? 'border-[hsl(0,0%,15%)] text-[hsl(0,0%,90%)]' : 'border-[hsl(0,0%,90%)] text-[hsl(0,0%,10%)]'
                           }`,
                           children: 'Change Picture',
                        }),
                        d.jsx('input', {
                           onChange: (p) => h(p),
                           type: 'file',
                           className: `p-2 px-7 font-play text-sm rounded mb-3 ${
                              e ? 'bg-[hsl(0,0%,15%)] text-[hsl(0,0%,90%)]' : 'bg-[hsl(0,0%,90%)] text-[hsl(0,0%,10%)]'
                           }`,
                        }),
                     ],
                  }),
               ],
            }),
            d.jsxs('form', {
               className: 'sm:w-[75%] sm:mx-0 mx-auto w-[93%] flex flex-col mt-5',
               children: [
                  d.jsxs('div', {
                     className: 'grid sm:grid-cols-2 grid-cols-1 w-full gap-3',
                     children: [
                        d.jsxs('div', {
                           className: 'flex flex-col items-start justify-start',
                           children: [
                              d.jsx('label', {
                                 htmlFor: 'Name',
                                 className: `${e ? 'text-[hsl(0,0%,90%)]' : 'text-[hsl(0,0%,20%)]'} font-thin font-play`,
                                 children: 'First Name',
                              }),
                              d.jsx('input', {
                                 onChange: (p) => u(p),
                                 type: 'text',
                                 name: 'name',
                                 placeholder: (m == null ? void 0 : m.user.name) || 'john doe',
                                 className: y,
                              }),
                           ],
                        }),
                        d.jsxs('div', {
                           className: 'flex flex-col items-start justify-start',
                           children: [
                              d.jsx('label', {
                                 htmlFor: 'email',
                                 className: `${e ? 'text-[hsl(0,0%,90%)]' : 'text-[hsl(0,0%,20%)]'} font-thin font-play`,
                                 children: 'Email',
                              }),
                              d.jsx('input', {
                                 onChange: (p) => u(p),
                                 type: 'email',
                                 id: 'email',
                                 name: 'email',
                                 placeholder: (m == null ? void 0 : m.user.email) || 'John@gmail.com',
                                 className: y,
                              }),
                           ],
                        }),
                     ],
                  }),
                  d.jsxs('div', {
                     className: 'flex flex-col items-start justify-start mt-2',
                     children: [
                        d.jsx('label', {
                           htmlFor: 'password',
                           className: `${e ? 'text-[hsl(0,0%,90%)]' : 'text-[hsl(0,0%,20%)]'} font-thin font-play`,
                           children: 'Old Password',
                        }),
                        d.jsx('input', {
                           onChange: (p) => u(p),
                           type: 'password',
                           id: 'oldPassword',
                           name: 'oldPassword',
                           placeholder: 'xxxxxxxxxxxxx',
                           className: y,
                        }),
                     ],
                  }),
                  d.jsxs('div', {
                     className: 'flex flex-col items-start justify-start mt-3',
                     children: [
                        d.jsx('label', {
                           htmlFor: 'password',
                           className: `${e ? 'text-[hsl(0,0%,90%)]' : 'text-[hsl(0,0%,20%)]'} font-thin font-play`,
                           children: 'New password',
                        }),
                        d.jsx('input', {
                           onChange: (p) => u(p),
                           type: 'password',
                           id: 'newPassword',
                           name: 'newPassword',
                           placeholder: 'xxxxxxxxxxxxx',
                           className: y,
                        }),
                     ],
                  }),
                  d.jsx('div', {
                     className: 'flex justify-center w-full my-2',
                     children: d.jsx('button', {
                        type: 'button',
                        onClick: () => {
                           c.mutate(), console.log(i);
                        },
                        className: `w-full p-3 text-center font-play text-sm font-semibold rounded ${
                           e ? 'text-[hsl(0,0%,90%)] bg-[hsl(129,17%,25%)]' : 'text-[hsl(0,0%,100%)] bg-[hsl(130,20%,40%)]'
                        }`,
                        children: 'Save',
                     }),
                  }),
                  d.jsx('button', {
                     className: `mt-10 mb-2 text-base font-play p-1 border border-[red]  text-[red]
               `,
                     children: 'Danger',
                  }),
                  d.jsxs('div', {
                     className: 'flex flex-col items-start w-full justify-start mt-3',
                     children: [
                        d.jsx('label', {
                           htmlFor: 'delete_account',
                           className: `${e ? 'text-[hsl(0,0%,90%)]' : 'text-[hsl(0,0%,20%)]'} font-thin font-play text-left`,
                           children: 'Delete Account',
                        }),
                        d.jsxs('div', {
                           className: 'flex sm:flex-row flex-col items-center w-full',
                           children: [
                              d.jsx('input', {
                                 type: 'password',
                                 id: 'account_password',
                                 onChange: (p) => n(p.target.value),
                                 placeholder: 'Account Password - xxxxxxxxxxxxx',
                                 className: y,
                              }),
                              d.jsx('button', {
                                 type: 'button',
                                 onClick: () => f.mutate(),
                                 className: `p-4 px-7 font-play text-sm rounded w-full sm:w-[35%] sm:ml-5 sm:mt-0 mt-2 ${
                                    e ? 'bg-[hsl(0,36%,25%)] text-[hsl(0,0%,90%)]' : 'bg-[hsl(0,41%,79%)] text-[hsl(0,0%,10%)]'
                                 }`,
                                 children: 'Delete Account',
                              }),
                           ],
                        }),
                     ],
                  }),
               ],
            }),
         ],
      });
   },
   VP = () =>
      d.jsx(i1, {
         children: d.jsx(s1, {
            children: d.jsx(fx, {
               children: d.jsx(a1, {
                  children: d.jsx(p1, {
                     children: d.jsx(y1, {
                        children: d.jsxs(ux, {
                           children: [
                              d.jsx(Dr, { element: d.jsx(LP, {}), path: '/' }),
                              d.jsx(Dr, { element: d.jsx(dx, {}), path: '/index' }),
                              d.jsx(Dr, { element: d.jsx(h1, {}), path: '/home' }),
                              d.jsx(Dr, { element: d.jsx(j1, {}), path: '/post' }),
                           ],
                        }),
                     }),
                  }),
               }),
            }),
         }),
      });
const Qy = new Rx();
ml.createRoot(document.getElementById('root')).render(
   d.jsx(Yi.StrictMode, { children: d.jsx(Qx, { client: Qy, children: d.jsx(cx, { children: d.jsx(VP, {}) }) }) })
);
