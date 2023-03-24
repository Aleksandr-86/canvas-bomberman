var Fh = Object.defineProperty
var Uh = (e, t, n) =>
  t in e
    ? Fh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n)
var T = (e, t, n) => (Uh(e, typeof t != 'symbol' ? t + '' : t, n), n)
function Mh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o)
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  )
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
  new MutationObserver(o => {
    for (const i of o)
      if (i.type === 'childList')
        for (const u of i.addedNodes)
          u.tagName === 'LINK' && u.rel === 'modulepreload' && r(u)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(o) {
    const i = {}
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
      o.crossorigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossorigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    )
  }
  function r(o) {
    if (o.ep) return
    o.ep = !0
    const i = n(o)
    fetch(o.href, i)
  }
})()
function jh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var tu = {},
  Fa = { exports: {} },
  Ze = {},
  N = { exports: {} },
  U = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wo = Symbol.for('react.element'),
  zh = Symbol.for('react.portal'),
  Qh = Symbol.for('react.fragment'),
  $h = Symbol.for('react.strict_mode'),
  Hh = Symbol.for('react.profiler'),
  Wh = Symbol.for('react.provider'),
  qh = Symbol.for('react.context'),
  Kh = Symbol.for('react.forward_ref'),
  Gh = Symbol.for('react.suspense'),
  Yh = Symbol.for('react.memo'),
  Xh = Symbol.for('react.lazy'),
  od = Symbol.iterator
function Jh(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (od && e[od]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var hp = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Vp = Object.assign,
  gp = {}
function Mr(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = gp),
    (this.updater = n || hp)
}
Mr.prototype.isReactComponent = {}
Mr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Mr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function yp() {}
yp.prototype = Mr.prototype
function Ua(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = gp),
    (this.updater = n || hp)
}
var Ma = (Ua.prototype = new yp())
Ma.constructor = Ua
Vp(Ma, Mr.prototype)
Ma.isPureReactComponent = !0
var id = Array.isArray,
  Ap = Object.prototype.hasOwnProperty,
  ja = { current: null },
  vp = { key: !0, ref: !0, __self: !0, __source: !0 }
function wp(e, t, n) {
  var r,
    o = {},
    i = null,
    u = null
  if (t != null)
    for (r in (t.ref !== void 0 && (u = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Ap.call(t, r) && !vp.hasOwnProperty(r) && (o[r] = t[r])
  var s = arguments.length - 2
  if (s === 1) o.children = n
  else if (1 < s) {
    for (var l = Array(s), a = 0; a < s; a++) l[a] = arguments[a + 2]
    o.children = l
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r])
  return { $$typeof: Wo, type: e, key: i, ref: u, props: o, _owner: ja.current }
}
function Zh(e, t) {
  return {
    $$typeof: Wo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function za(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Wo
}
function e4(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var ud = /\/+/g
function _s(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? e4('' + e.key)
    : t.toString(36)
}
function Ci(e, t, n, r, o) {
  var i = typeof e
  ;(i === 'undefined' || i === 'boolean') && (e = null)
  var u = !1
  if (e === null) u = !0
  else
    switch (i) {
      case 'string':
      case 'number':
        u = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Wo:
          case zh:
            u = !0
        }
    }
  if (u)
    return (
      (u = e),
      (o = o(u)),
      (e = r === '' ? '.' + _s(u, 0) : r),
      id(o)
        ? ((n = ''),
          e != null && (n = e.replace(ud, '$&/') + '/'),
          Ci(o, t, n, '', function (a) {
            return a
          }))
        : o != null &&
          (za(o) &&
            (o = Zh(
              o,
              n +
                (!o.key || (u && u.key === o.key)
                  ? ''
                  : ('' + o.key).replace(ud, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    )
  if (((u = 0), (r = r === '' ? '.' : r + ':'), id(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s]
      var l = r + _s(i, s)
      u += Ci(i, t, n, l, o)
    }
  else if (((l = Jh(e)), typeof l == 'function'))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + _s(i, s++)), (u += Ci(i, t, n, l, o))
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return u
}
function ii(e, t, n) {
  if (e == null) return e
  var r = [],
    o = 0
  return (
    Ci(e, r, '', '', function (i) {
      return t.call(n, i, o++)
    }),
    r
  )
}
function t4(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var Te = { current: null },
  ki = { transition: null },
  n4 = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: ki,
    ReactCurrentOwner: ja,
  }
U.Children = {
  map: ii,
  forEach: function (e, t, n) {
    ii(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      ii(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      ii(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!za(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  },
}
U.Component = Mr
U.Fragment = Qh
U.Profiler = Hh
U.PureComponent = Ua
U.StrictMode = $h
U.Suspense = Gh
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = n4
U.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = Vp({}, e.props),
    o = e.key,
    i = e.ref,
    u = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (u = ja.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps
    for (l in t)
      Ap.call(t, l) &&
        !vp.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
  }
  var l = arguments.length - 2
  if (l === 1) r.children = n
  else if (1 < l) {
    s = Array(l)
    for (var a = 0; a < l; a++) s[a] = arguments[a + 2]
    r.children = s
  }
  return { $$typeof: Wo, type: e.type, key: o, ref: i, props: r, _owner: u }
}
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: qh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Wh, _context: e }),
    (e.Consumer = e)
  )
}
U.createElement = wp
U.createFactory = function (e) {
  var t = wp.bind(null, e)
  return (t.type = e), t
}
U.createRef = function () {
  return { current: null }
}
U.forwardRef = function (e) {
  return { $$typeof: Kh, render: e }
}
U.isValidElement = za
U.lazy = function (e) {
  return { $$typeof: Xh, _payload: { _status: -1, _result: e }, _init: t4 }
}
U.memo = function (e, t) {
  return { $$typeof: Yh, type: e, compare: t === void 0 ? null : t }
}
U.startTransition = function (e) {
  var t = ki.transition
  ki.transition = {}
  try {
    e()
  } finally {
    ki.transition = t
  }
}
U.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
U.useCallback = function (e, t) {
  return Te.current.useCallback(e, t)
}
U.useContext = function (e) {
  return Te.current.useContext(e)
}
U.useDebugValue = function () {}
U.useDeferredValue = function (e) {
  return Te.current.useDeferredValue(e)
}
U.useEffect = function (e, t) {
  return Te.current.useEffect(e, t)
}
U.useId = function () {
  return Te.current.useId()
}
U.useImperativeHandle = function (e, t, n) {
  return Te.current.useImperativeHandle(e, t, n)
}
U.useInsertionEffect = function (e, t) {
  return Te.current.useInsertionEffect(e, t)
}
U.useLayoutEffect = function (e, t) {
  return Te.current.useLayoutEffect(e, t)
}
U.useMemo = function (e, t) {
  return Te.current.useMemo(e, t)
}
U.useReducer = function (e, t, n) {
  return Te.current.useReducer(e, t, n)
}
U.useRef = function (e) {
  return Te.current.useRef(e)
}
U.useState = function (e) {
  return Te.current.useState(e)
}
U.useSyncExternalStore = function (e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n)
}
U.useTransition = function () {
  return Te.current.useTransition()
}
U.version = '18.2.0'
;(function (e) {
  e.exports = U
})(N)
const Ep = jh(N.exports),
  Cl = Mh({ __proto__: null, default: Ep }, [N.exports])
var Sp = { exports: {} },
  xp = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(P, I) {
    var O = P.length
    P.push(I)
    e: for (; 0 < O; ) {
      var ie = (O - 1) >>> 1,
        me = P[ie]
      if (0 < o(me, I)) (P[ie] = I), (P[O] = me), (O = ie)
      else break e
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0]
  }
  function r(P) {
    if (P.length === 0) return null
    var I = P[0],
      O = P.pop()
    if (O !== I) {
      P[0] = O
      e: for (var ie = 0, me = P.length, ri = me >>> 1; ie < ri; ) {
        var Cn = 2 * (ie + 1) - 1,
          Ps = P[Cn],
          kn = Cn + 1,
          oi = P[kn]
        if (0 > o(Ps, O))
          kn < me && 0 > o(oi, Ps)
            ? ((P[ie] = oi), (P[kn] = O), (ie = kn))
            : ((P[ie] = Ps), (P[Cn] = O), (ie = Cn))
        else if (kn < me && 0 > o(oi, O)) (P[ie] = oi), (P[kn] = O), (ie = kn)
        else break e
      }
    }
    return I
  }
  function o(P, I) {
    var O = P.sortIndex - I.sortIndex
    return O !== 0 ? O : P.id - I.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance
    e.unstable_now = function () {
      return i.now()
    }
  } else {
    var u = Date,
      s = u.now()
    e.unstable_now = function () {
      return u.now() - s
    }
  }
  var l = [],
    a = [],
    c = 1,
    f = null,
    d = 3,
    V = !1,
    h = !1,
    g = !1,
    k = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    p = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function A(P) {
    for (var I = n(a); I !== null; ) {
      if (I.callback === null) r(a)
      else if (I.startTime <= P) r(a), (I.sortIndex = I.expirationTime), t(l, I)
      else break
      I = n(a)
    }
  }
  function v(P) {
    if (((g = !1), A(P), !h))
      if (n(l) !== null) (h = !0), bt(w)
      else {
        var I = n(a)
        I !== null && Ee(v, I.startTime - P)
      }
  }
  function w(P, I) {
    ;(h = !1), g && ((g = !1), m(b), (b = -1)), (V = !0)
    var O = d
    try {
      for (
        A(I), f = n(l);
        f !== null && (!(f.expirationTime > I) || (P && !z()));

      ) {
        var ie = f.callback
        if (typeof ie == 'function') {
          ;(f.callback = null), (d = f.priorityLevel)
          var me = ie(f.expirationTime <= I)
          ;(I = e.unstable_now()),
            typeof me == 'function' ? (f.callback = me) : f === n(l) && r(l),
            A(I)
        } else r(l)
        f = n(l)
      }
      if (f !== null) var ri = !0
      else {
        var Cn = n(a)
        Cn !== null && Ee(v, Cn.startTime - I), (ri = !1)
      }
      return ri
    } finally {
      ;(f = null), (d = O), (V = !1)
    }
  }
  var S = !1,
    x = null,
    b = -1,
    F = 5,
    D = -1
  function z() {
    return !(e.unstable_now() - D < F)
  }
  function $e() {
    if (x !== null) {
      var P = e.unstable_now()
      D = P
      var I = !0
      try {
        I = x(!0, P)
      } finally {
        I ? Le() : ((S = !1), (x = null))
      }
    } else S = !1
  }
  var Le
  if (typeof p == 'function')
    Le = function () {
      p($e)
    }
  else if (typeof MessageChannel < 'u') {
    var Q = new MessageChannel(),
      ft = Q.port2
    ;(Q.port1.onmessage = $e),
      (Le = function () {
        ft.postMessage(null)
      })
  } else
    Le = function () {
      k($e, 0)
    }
  function bt(P) {
    ;(x = P), S || ((S = !0), Le())
  }
  function Ee(P, I) {
    b = k(function () {
      P(e.unstable_now())
    }, I)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null
    }),
    (e.unstable_continueExecution = function () {
      h || V || ((h = !0), bt(w))
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (F = 0 < P ? Math.floor(1e3 / P) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l)
    }),
    (e.unstable_next = function (P) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var I = 3
          break
        default:
          I = d
      }
      var O = d
      d = I
      try {
        return P()
      } finally {
        d = O
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, I) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          P = 3
      }
      var O = d
      d = P
      try {
        return I()
      } finally {
        d = O
      }
    }),
    (e.unstable_scheduleCallback = function (P, I, O) {
      var ie = e.unstable_now()
      switch (
        (typeof O == 'object' && O !== null
          ? ((O = O.delay), (O = typeof O == 'number' && 0 < O ? ie + O : ie))
          : (O = ie),
        P)
      ) {
        case 1:
          var me = -1
          break
        case 2:
          me = 250
          break
        case 5:
          me = 1073741823
          break
        case 4:
          me = 1e4
          break
        default:
          me = 5e3
      }
      return (
        (me = O + me),
        (P = {
          id: c++,
          callback: I,
          priorityLevel: P,
          startTime: O,
          expirationTime: me,
          sortIndex: -1,
        }),
        O > ie
          ? ((P.sortIndex = O),
            t(a, P),
            n(l) === null &&
              P === n(a) &&
              (g ? (m(b), (b = -1)) : (g = !0), Ee(v, O - ie)))
          : ((P.sortIndex = me), t(l, P), h || V || ((h = !0), bt(w))),
        P
      )
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (P) {
      var I = d
      return function () {
        var O = d
        d = I
        try {
          return P.apply(this, arguments)
        } finally {
          d = O
        }
      }
    })
})(xp)
;(function (e) {
  e.exports = xp
})(Sp)
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cp = N.exports,
  Xe = Sp.exports
function C(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var kp = new Set(),
  Co = {}
function Xn(e, t) {
  _r(e, t), _r(e + 'Capture', t)
}
function _r(e, t) {
  for (Co[e] = t, e = 0; e < t.length; e++) kp.add(t[e])
}
var Mt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  kl = Object.prototype.hasOwnProperty,
  r4 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  sd = {},
  ld = {}
function o4(e) {
  return kl.call(ld, e)
    ? !0
    : kl.call(sd, e)
    ? !1
    : r4.test(e)
    ? (ld[e] = !0)
    : ((sd[e] = !0), !1)
}
function i4(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function u4(e, t, n, r) {
  if (t === null || typeof t > 'u' || i4(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function De(e, t, n, r, o, i, u) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = u)
}
var we = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    we[e] = new De(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  we[t] = new De(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  we[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  we[e] = new De(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    we[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  we[e] = new De(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  we[e] = new De(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  we[e] = new De(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  we[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Qa = /[\-:]([a-z])/g
function $a(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Qa, $a)
    we[t] = new De(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Qa, $a)
    we[t] = new De(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Qa, $a)
  we[t] = new De(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  we[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
we.xlinkHref = new De(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  we[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Ha(e, t, n, r) {
  var o = we.hasOwnProperty(t) ? we[t] : null
  ;(o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (u4(t, n, o, r) && (n = null),
    r || o === null
      ? o4(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Ht = Cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ui = Symbol.for('react.element'),
  sr = Symbol.for('react.portal'),
  lr = Symbol.for('react.fragment'),
  Wa = Symbol.for('react.strict_mode'),
  Nl = Symbol.for('react.profiler'),
  Np = Symbol.for('react.provider'),
  Pp = Symbol.for('react.context'),
  qa = Symbol.for('react.forward_ref'),
  Pl = Symbol.for('react.suspense'),
  _l = Symbol.for('react.suspense_list'),
  Ka = Symbol.for('react.memo'),
  Yt = Symbol.for('react.lazy'),
  _p = Symbol.for('react.offscreen'),
  ad = Symbol.iterator
function Yr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ad && e[ad]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var ne = Object.assign,
  bs
function ao(e) {
  if (bs === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      bs = (t && t[1]) || ''
    }
  return (
    `
` +
    bs +
    e
  )
}
var Rs = !1
function Bs(e, t) {
  if (!e || Rs) return ''
  Rs = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (a) {
          var r = a
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (a) {
          r = a
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (a) {
        r = a
      }
      e()
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var o = a.stack.split(`
`),
          i = r.stack.split(`
`),
          u = o.length - 1,
          s = i.length - 1;
        1 <= u && 0 <= s && o[u] !== i[s];

      )
        s--
      for (; 1 <= u && 0 <= s; u--, s--)
        if (o[u] !== i[s]) {
          if (u !== 1 || s !== 1)
            do
              if ((u--, s--, 0 > s || o[u] !== i[s])) {
                var l =
                  `
` + o[u].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                )
              }
            while (1 <= u && 0 <= s)
          break
        }
    }
  } finally {
    ;(Rs = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? ao(e) : ''
}
function s4(e) {
  switch (e.tag) {
    case 5:
      return ao(e.type)
    case 16:
      return ao('Lazy')
    case 13:
      return ao('Suspense')
    case 19:
      return ao('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Bs(e.type, !1)), e
    case 11:
      return (e = Bs(e.type.render, !1)), e
    case 1:
      return (e = Bs(e.type, !0)), e
    default:
      return ''
  }
}
function bl(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case lr:
      return 'Fragment'
    case sr:
      return 'Portal'
    case Nl:
      return 'Profiler'
    case Wa:
      return 'StrictMode'
    case Pl:
      return 'Suspense'
    case _l:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Pp:
        return (e.displayName || 'Context') + '.Consumer'
      case Np:
        return (e._context.displayName || 'Context') + '.Provider'
      case qa:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Ka:
        return (
          (t = e.displayName || null), t !== null ? t : bl(e.type) || 'Memo'
        )
      case Yt:
        ;(t = e._payload), (e = e._init)
        try {
          return bl(e(t))
        } catch {}
    }
  return null
}
function l4(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return bl(t)
    case 8:
      return t === Wa ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function yn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function bp(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function a4(e) {
  var t = bp(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (u) {
          ;(r = '' + u), i.call(this, u)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (u) {
          r = '' + u
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function si(e) {
  e._valueTracker || (e._valueTracker = a4(e))
}
function Rp(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = bp(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function nu(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Rl(e, t) {
  var n = t.checked
  return ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  })
}
function cd(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = yn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function Bp(e, t) {
  ;(t = t.checked), t != null && Ha(e, 'checked', t, !1)
}
function Bl(e, t) {
  Bp(e, t)
  var n = yn(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? Tl(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Tl(e, t.type, yn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function dd(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function Tl(e, t, n) {
  ;(t !== 'number' || nu(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var co = Array.isArray
function Ar(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + yn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function Dl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91))
  return ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function fd(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92))
      if (co(n)) {
        if (1 < n.length) throw Error(C(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: yn(n) }
}
function Tp(e, t) {
  var n = yn(t.value),
    r = yn(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function pd(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Dp(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function Ol(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Dp(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var li,
  Op = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        li = li || document.createElement('div'),
          li.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = li.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function ko(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var ho = {
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
  c4 = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(ho).forEach(function (e) {
  c4.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ho[t] = ho[e])
  })
})
function Lp(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (ho.hasOwnProperty(e) && ho[e])
    ? ('' + t).trim()
    : t + 'px'
}
function Ip(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Lp(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
    }
}
var d4 = ne(
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
)
function Ll(e, t) {
  if (t) {
    if (d4[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(C(62))
  }
}
function Il(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var Fl = null
function Ga(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Ul = null,
  vr = null,
  wr = null
function md(e) {
  if ((e = Go(e))) {
    if (typeof Ul != 'function') throw Error(C(280))
    var t = e.stateNode
    t && ((t = Mu(t)), Ul(e.stateNode, e.type, t))
  }
}
function Fp(e) {
  vr ? (wr ? wr.push(e) : (wr = [e])) : (vr = e)
}
function Up() {
  if (vr) {
    var e = vr,
      t = wr
    if (((wr = vr = null), md(e), t)) for (e = 0; e < t.length; e++) md(t[e])
  }
}
function Mp(e, t) {
  return e(t)
}
function jp() {}
var Ts = !1
function zp(e, t, n) {
  if (Ts) return e(t, n)
  Ts = !0
  try {
    return Mp(e, t, n)
  } finally {
    ;(Ts = !1), (vr !== null || wr !== null) && (jp(), Up())
  }
}
function No(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = Mu(n)
  if (r === null) return null
  n = r[t]
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
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(C(231, t, typeof n))
  return n
}
var Ml = !1
if (Mt)
  try {
    var Xr = {}
    Object.defineProperty(Xr, 'passive', {
      get: function () {
        Ml = !0
      },
    }),
      window.addEventListener('test', Xr, Xr),
      window.removeEventListener('test', Xr, Xr)
  } catch {
    Ml = !1
  }
function f4(e, t, n, r, o, i, u, s, l) {
  var a = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, a)
  } catch (c) {
    this.onError(c)
  }
}
var Vo = !1,
  ru = null,
  ou = !1,
  jl = null,
  p4 = {
    onError: function (e) {
      ;(Vo = !0), (ru = e)
    },
  }
function m4(e, t, n, r, o, i, u, s, l) {
  ;(Vo = !1), (ru = null), f4.apply(p4, arguments)
}
function h4(e, t, n, r, o, i, u, s, l) {
  if ((m4.apply(this, arguments), Vo)) {
    if (Vo) {
      var a = ru
      ;(Vo = !1), (ru = null)
    } else throw Error(C(198))
    ou || ((ou = !0), (jl = a))
  }
}
function Jn(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function Qp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function hd(e) {
  if (Jn(e) !== e) throw Error(C(188))
}
function V4(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Jn(e)), t === null)) throw Error(C(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var o = n.return
    if (o === null) break
    var i = o.alternate
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return hd(o), e
        if (i === r) return hd(o), t
        i = i.sibling
      }
      throw Error(C(188))
    }
    if (n.return !== r.return) (n = o), (r = i)
    else {
      for (var u = !1, s = o.child; s; ) {
        if (s === n) {
          ;(u = !0), (n = o), (r = i)
          break
        }
        if (s === r) {
          ;(u = !0), (r = o), (n = i)
          break
        }
        s = s.sibling
      }
      if (!u) {
        for (s = i.child; s; ) {
          if (s === n) {
            ;(u = !0), (n = i), (r = o)
            break
          }
          if (s === r) {
            ;(u = !0), (r = i), (n = o)
            break
          }
          s = s.sibling
        }
        if (!u) throw Error(C(189))
      }
    }
    if (n.alternate !== r) throw Error(C(190))
  }
  if (n.tag !== 3) throw Error(C(188))
  return n.stateNode.current === n ? e : t
}
function $p(e) {
  return (e = V4(e)), e !== null ? Hp(e) : null
}
function Hp(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Hp(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var Wp = Xe.unstable_scheduleCallback,
  Vd = Xe.unstable_cancelCallback,
  g4 = Xe.unstable_shouldYield,
  y4 = Xe.unstable_requestPaint,
  ue = Xe.unstable_now,
  A4 = Xe.unstable_getCurrentPriorityLevel,
  Ya = Xe.unstable_ImmediatePriority,
  qp = Xe.unstable_UserBlockingPriority,
  iu = Xe.unstable_NormalPriority,
  v4 = Xe.unstable_LowPriority,
  Kp = Xe.unstable_IdlePriority,
  Lu = null,
  Ct = null
function w4(e) {
  if (Ct && typeof Ct.onCommitFiberRoot == 'function')
    try {
      Ct.onCommitFiberRoot(Lu, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var yt = Math.clz32 ? Math.clz32 : x4,
  E4 = Math.log,
  S4 = Math.LN2
function x4(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((E4(e) / S4) | 0)) | 0
}
var ai = 64,
  ci = 4194304
function fo(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
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
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function uu(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    u = n & 268435455
  if (u !== 0) {
    var s = u & ~o
    s !== 0 ? (r = fo(s)) : ((i &= u), i !== 0 && (r = fo(i)))
  } else (u = n & ~o), u !== 0 ? (r = fo(u)) : i !== 0 && (r = fo(i))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    (t & o) === 0 &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t
  if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - yt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
  return r
}
function C4(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
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
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function k4(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var u = 31 - yt(i),
      s = 1 << u,
      l = o[u]
    l === -1
      ? ((s & n) === 0 || (s & r) !== 0) && (o[u] = C4(s, t))
      : l <= t && (e.expiredLanes |= s),
      (i &= ~s)
  }
}
function zl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function Gp() {
  var e = ai
  return (ai <<= 1), (ai & 4194240) === 0 && (ai = 64), e
}
function Ds(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function qo(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - yt(t)),
    (e[t] = n)
}
function N4(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - yt(n),
      i = 1 << o
    ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i)
  }
}
function Xa(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - yt(n),
      o = 1 << r
    ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
  }
}
var $ = 0
function Yp(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  )
}
var Xp,
  Ja,
  Jp,
  Zp,
  e0,
  Ql = !1,
  di = [],
  sn = null,
  ln = null,
  an = null,
  Po = new Map(),
  _o = new Map(),
  Jt = [],
  P4 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function gd(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      sn = null
      break
    case 'dragenter':
    case 'dragleave':
      ln = null
      break
    case 'mouseover':
    case 'mouseout':
      an = null
      break
    case 'pointerover':
    case 'pointerout':
      Po.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      _o.delete(t.pointerId)
  }
}
function Jr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Go(t)), t !== null && Ja(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function _4(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (sn = Jr(sn, e, t, n, r, o)), !0
    case 'dragenter':
      return (ln = Jr(ln, e, t, n, r, o)), !0
    case 'mouseover':
      return (an = Jr(an, e, t, n, r, o)), !0
    case 'pointerover':
      var i = o.pointerId
      return Po.set(i, Jr(Po.get(i) || null, e, t, n, r, o)), !0
    case 'gotpointercapture':
      return (
        (i = o.pointerId), _o.set(i, Jr(_o.get(i) || null, e, t, n, r, o)), !0
      )
  }
  return !1
}
function t0(e) {
  var t = Ln(e.target)
  if (t !== null) {
    var n = Jn(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Qp(n)), t !== null)) {
          ;(e.blockedOn = t),
            e0(e.priority, function () {
              Jp(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Ni(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $l(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(Fl = r), n.target.dispatchEvent(r), (Fl = null)
    } else return (t = Go(n)), t !== null && Ja(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function yd(e, t, n) {
  Ni(e) && n.delete(t)
}
function b4() {
  ;(Ql = !1),
    sn !== null && Ni(sn) && (sn = null),
    ln !== null && Ni(ln) && (ln = null),
    an !== null && Ni(an) && (an = null),
    Po.forEach(yd),
    _o.forEach(yd)
}
function Zr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ql ||
      ((Ql = !0), Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, b4)))
}
function bo(e) {
  function t(o) {
    return Zr(o, e)
  }
  if (0 < di.length) {
    Zr(di[0], e)
    for (var n = 1; n < di.length; n++) {
      var r = di[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    sn !== null && Zr(sn, e),
      ln !== null && Zr(ln, e),
      an !== null && Zr(an, e),
      Po.forEach(t),
      _o.forEach(t),
      n = 0;
    n < Jt.length;
    n++
  )
    (r = Jt[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < Jt.length && ((n = Jt[0]), n.blockedOn === null); )
    t0(n), n.blockedOn === null && Jt.shift()
}
var Er = Ht.ReactCurrentBatchConfig,
  su = !0
function R4(e, t, n, r) {
  var o = $,
    i = Er.transition
  Er.transition = null
  try {
    ;($ = 1), Za(e, t, n, r)
  } finally {
    ;($ = o), (Er.transition = i)
  }
}
function B4(e, t, n, r) {
  var o = $,
    i = Er.transition
  Er.transition = null
  try {
    ;($ = 4), Za(e, t, n, r)
  } finally {
    ;($ = o), (Er.transition = i)
  }
}
function Za(e, t, n, r) {
  if (su) {
    var o = $l(e, t, n, r)
    if (o === null) $s(e, t, r, lu, n), gd(e, r)
    else if (_4(o, e, t, n, r)) r.stopPropagation()
    else if ((gd(e, r), t & 4 && -1 < P4.indexOf(e))) {
      for (; o !== null; ) {
        var i = Go(o)
        if (
          (i !== null && Xp(i),
          (i = $l(e, t, n, r)),
          i === null && $s(e, t, r, lu, n),
          i === o)
        )
          break
        o = i
      }
      o !== null && r.stopPropagation()
    } else $s(e, t, r, null, n)
  }
}
var lu = null
function $l(e, t, n, r) {
  if (((lu = null), (e = Ga(r)), (e = Ln(e)), e !== null))
    if (((t = Jn(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Qp(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (lu = e), null
}
function n0(e) {
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
      return 1
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
      return 4
    case 'message':
      switch (A4()) {
        case Ya:
          return 1
        case qp:
          return 4
        case iu:
        case v4:
          return 16
        case Kp:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var nn = null,
  ec = null,
  Pi = null
function r0() {
  if (Pi) return Pi
  var e,
    t = ec,
    n = t.length,
    r,
    o = 'value' in nn ? nn.value : nn.textContent,
    i = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var u = n - e
  for (r = 1; r <= u && t[n - r] === o[i - r]; r++);
  return (Pi = o.slice(e, 1 < r ? 1 - r : void 0))
}
function _i(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function fi() {
  return !0
}
function Ad() {
  return !1
}
function et(e) {
  function t(n, r, o, i, u) {
    ;(this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = u),
      (this.currentTarget = null)
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]))
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? fi
        : Ad),
      (this.isPropagationStopped = Ad),
      this
    )
  }
  return (
    ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = fi))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = fi))
      },
      persist: function () {},
      isPersistent: fi,
    }),
    t
  )
}
var jr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  tc = et(jr),
  Ko = ne({}, jr, { view: 0, detail: 0 }),
  T4 = et(Ko),
  Os,
  Ls,
  eo,
  Iu = ne({}, Ko, {
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
    getModifierState: nc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== eo &&
            (eo && e.type === 'mousemove'
              ? ((Os = e.screenX - eo.screenX), (Ls = e.screenY - eo.screenY))
              : (Ls = Os = 0),
            (eo = e)),
          Os)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ls
    },
  }),
  vd = et(Iu),
  D4 = ne({}, Iu, { dataTransfer: 0 }),
  O4 = et(D4),
  L4 = ne({}, Ko, { relatedTarget: 0 }),
  Is = et(L4),
  I4 = ne({}, jr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  F4 = et(I4),
  U4 = ne({}, jr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  M4 = et(U4),
  j4 = ne({}, jr, { data: 0 }),
  wd = et(j4),
  z4 = {
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
  Q4 = {
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
  $4 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function H4(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = $4[e]) ? !!t[e] : !1
}
function nc() {
  return H4
}
var W4 = ne({}, Ko, {
    key: function (e) {
      if (e.key) {
        var t = z4[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = _i(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Q4[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nc,
    charCode: function (e) {
      return e.type === 'keypress' ? _i(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? _i(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  q4 = et(W4),
  K4 = ne({}, Iu, {
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
  Ed = et(K4),
  G4 = ne({}, Ko, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nc,
  }),
  Y4 = et(G4),
  X4 = ne({}, jr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  J4 = et(X4),
  Z4 = ne({}, Iu, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  eV = et(Z4),
  tV = [9, 13, 27, 32],
  rc = Mt && 'CompositionEvent' in window,
  go = null
Mt && 'documentMode' in document && (go = document.documentMode)
var nV = Mt && 'TextEvent' in window && !go,
  o0 = Mt && (!rc || (go && 8 < go && 11 >= go)),
  Sd = String.fromCharCode(32),
  xd = !1
function i0(e, t) {
  switch (e) {
    case 'keyup':
      return tV.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function u0(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var ar = !1
function rV(e, t) {
  switch (e) {
    case 'compositionend':
      return u0(t)
    case 'keypress':
      return t.which !== 32 ? null : ((xd = !0), Sd)
    case 'textInput':
      return (e = t.data), e === Sd && xd ? null : e
    default:
      return null
  }
}
function oV(e, t) {
  if (ar)
    return e === 'compositionend' || (!rc && i0(e, t))
      ? ((e = r0()), (Pi = ec = nn = null), (ar = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return o0 && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var iV = {
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
}
function Cd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!iV[e.type] : t === 'textarea'
}
function s0(e, t, n, r) {
  Fp(r),
    (t = au(t, 'onChange')),
    0 < t.length &&
      ((n = new tc('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var yo = null,
  Ro = null
function uV(e) {
  y0(e, 0)
}
function Fu(e) {
  var t = fr(e)
  if (Rp(t)) return e
}
function sV(e, t) {
  if (e === 'change') return t
}
var l0 = !1
if (Mt) {
  var Fs
  if (Mt) {
    var Us = 'oninput' in document
    if (!Us) {
      var kd = document.createElement('div')
      kd.setAttribute('oninput', 'return;'),
        (Us = typeof kd.oninput == 'function')
    }
    Fs = Us
  } else Fs = !1
  l0 = Fs && (!document.documentMode || 9 < document.documentMode)
}
function Nd() {
  yo && (yo.detachEvent('onpropertychange', a0), (Ro = yo = null))
}
function a0(e) {
  if (e.propertyName === 'value' && Fu(Ro)) {
    var t = []
    s0(t, Ro, e, Ga(e)), zp(uV, t)
  }
}
function lV(e, t, n) {
  e === 'focusin'
    ? (Nd(), (yo = t), (Ro = n), yo.attachEvent('onpropertychange', a0))
    : e === 'focusout' && Nd()
}
function aV(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Fu(Ro)
}
function cV(e, t) {
  if (e === 'click') return Fu(t)
}
function dV(e, t) {
  if (e === 'input' || e === 'change') return Fu(t)
}
function fV(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var vt = typeof Object.is == 'function' ? Object.is : fV
function Bo(e, t) {
  if (vt(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var o = n[r]
    if (!kl.call(t, o) || !vt(e[o], t[o])) return !1
  }
  return !0
}
function Pd(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function _d(e, t) {
  var n = Pd(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Pd(n)
  }
}
function c0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? c0(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function d0() {
  for (var e = window, t = nu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = nu(e.document)
  }
  return t
}
function oc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function pV(e) {
  var t = d0(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    c0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && oc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var o = n.textContent.length,
          i = Math.min(r.start, o)
        ;(r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = _d(n, i))
        var u = _d(n, r)
        o &&
          u &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== u.node ||
            e.focusOffset !== u.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(u.node, u.offset))
            : (t.setEnd(u.node, u.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var mV = Mt && 'documentMode' in document && 11 >= document.documentMode,
  cr = null,
  Hl = null,
  Ao = null,
  Wl = !1
function bd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Wl ||
    cr == null ||
    cr !== nu(r) ||
    ((r = cr),
    'selectionStart' in r && oc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ao && Bo(Ao, r)) ||
      ((Ao = r),
      (r = au(Hl, 'onSelect')),
      0 < r.length &&
        ((t = new tc('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = cr))))
}
function pi(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var dr = {
    animationend: pi('Animation', 'AnimationEnd'),
    animationiteration: pi('Animation', 'AnimationIteration'),
    animationstart: pi('Animation', 'AnimationStart'),
    transitionend: pi('Transition', 'TransitionEnd'),
  },
  Ms = {},
  f0 = {}
Mt &&
  ((f0 = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete dr.animationend.animation,
    delete dr.animationiteration.animation,
    delete dr.animationstart.animation),
  'TransitionEvent' in window || delete dr.transitionend.transition)
function Uu(e) {
  if (Ms[e]) return Ms[e]
  if (!dr[e]) return e
  var t = dr[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in f0) return (Ms[e] = t[n])
  return e
}
var p0 = Uu('animationend'),
  m0 = Uu('animationiteration'),
  h0 = Uu('animationstart'),
  V0 = Uu('transitionend'),
  g0 = new Map(),
  Rd =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function En(e, t) {
  g0.set(e, t), Xn(t, [e])
}
for (var js = 0; js < Rd.length; js++) {
  var zs = Rd[js],
    hV = zs.toLowerCase(),
    VV = zs[0].toUpperCase() + zs.slice(1)
  En(hV, 'on' + VV)
}
En(p0, 'onAnimationEnd')
En(m0, 'onAnimationIteration')
En(h0, 'onAnimationStart')
En('dblclick', 'onDoubleClick')
En('focusin', 'onFocus')
En('focusout', 'onBlur')
En(V0, 'onTransitionEnd')
_r('onMouseEnter', ['mouseout', 'mouseover'])
_r('onMouseLeave', ['mouseout', 'mouseover'])
_r('onPointerEnter', ['pointerout', 'pointerover'])
_r('onPointerLeave', ['pointerout', 'pointerover'])
Xn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
Xn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
Xn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Xn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
Xn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
Xn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var po =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  gV = new Set('cancel close invalid load scroll toggle'.split(' ').concat(po))
function Bd(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), h4(r, t, void 0, e), (e.currentTarget = null)
}
function y0(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event
    r = r.listeners
    e: {
      var i = void 0
      if (t)
        for (var u = r.length - 1; 0 <= u; u--) {
          var s = r[u],
            l = s.instance,
            a = s.currentTarget
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e
          Bd(o, s, a), (i = l)
        }
      else
        for (u = 0; u < r.length; u++) {
          if (
            ((s = r[u]),
            (l = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e
          Bd(o, s, a), (i = l)
        }
    }
  }
  if (ou) throw ((e = jl), (ou = !1), (jl = null), e)
}
function K(e, t) {
  var n = t[Xl]
  n === void 0 && (n = t[Xl] = new Set())
  var r = e + '__bubble'
  n.has(r) || (A0(t, e, 2, !1), n.add(r))
}
function Qs(e, t, n) {
  var r = 0
  t && (r |= 4), A0(n, e, r, t)
}
var mi = '_reactListening' + Math.random().toString(36).slice(2)
function To(e) {
  if (!e[mi]) {
    ;(e[mi] = !0),
      kp.forEach(function (n) {
        n !== 'selectionchange' && (gV.has(n) || Qs(n, !1, e), Qs(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[mi] || ((t[mi] = !0), Qs('selectionchange', !1, t))
  }
}
function A0(e, t, n, r) {
  switch (n0(t)) {
    case 1:
      var o = R4
      break
    case 4:
      o = B4
      break
    default:
      o = Za
  }
  ;(n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ml ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1)
}
function $s(e, t, n, r, o) {
  var i = r
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return
      var u = r.tag
      if (u === 3 || u === 4) {
        var s = r.stateNode.containerInfo
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break
        if (u === 4)
          for (u = r.return; u !== null; ) {
            var l = u.tag
            if (
              (l === 3 || l === 4) &&
              ((l = u.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return
            u = u.return
          }
        for (; s !== null; ) {
          if (((u = Ln(s)), u === null)) return
          if (((l = u.tag), l === 5 || l === 6)) {
            r = i = u
            continue e
          }
          s = s.parentNode
        }
      }
      r = r.return
    }
  zp(function () {
    var a = i,
      c = Ga(n),
      f = []
    e: {
      var d = g0.get(e)
      if (d !== void 0) {
        var V = tc,
          h = e
        switch (e) {
          case 'keypress':
            if (_i(n) === 0) break e
          case 'keydown':
          case 'keyup':
            V = q4
            break
          case 'focusin':
            ;(h = 'focus'), (V = Is)
            break
          case 'focusout':
            ;(h = 'blur'), (V = Is)
            break
          case 'beforeblur':
          case 'afterblur':
            V = Is
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            V = vd
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            V = O4
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            V = Y4
            break
          case p0:
          case m0:
          case h0:
            V = F4
            break
          case V0:
            V = J4
            break
          case 'scroll':
            V = T4
            break
          case 'wheel':
            V = eV
            break
          case 'copy':
          case 'cut':
          case 'paste':
            V = M4
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            V = Ed
        }
        var g = (t & 4) !== 0,
          k = !g && e === 'scroll',
          m = g ? (d !== null ? d + 'Capture' : null) : d
        g = []
        for (var p = a, A; p !== null; ) {
          A = p
          var v = A.stateNode
          if (
            (A.tag === 5 &&
              v !== null &&
              ((A = v),
              m !== null && ((v = No(p, m)), v != null && g.push(Do(p, v, A)))),
            k)
          )
            break
          p = p.return
        }
        0 < g.length &&
          ((d = new V(d, h, null, n, c)), f.push({ event: d, listeners: g }))
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (V = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== Fl &&
            (h = n.relatedTarget || n.fromElement) &&
            (Ln(h) || h[jt]))
        )
          break e
        if (
          (V || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          V
            ? ((h = n.relatedTarget || n.toElement),
              (V = a),
              (h = h ? Ln(h) : null),
              h !== null &&
                ((k = Jn(h)), h !== k || (h.tag !== 5 && h.tag !== 6)) &&
                (h = null))
            : ((V = null), (h = a)),
          V !== h)
        ) {
          if (
            ((g = vd),
            (v = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((g = Ed),
              (v = 'onPointerLeave'),
              (m = 'onPointerEnter'),
              (p = 'pointer')),
            (k = V == null ? d : fr(V)),
            (A = h == null ? d : fr(h)),
            (d = new g(v, p + 'leave', V, n, c)),
            (d.target = k),
            (d.relatedTarget = A),
            (v = null),
            Ln(c) === a &&
              ((g = new g(m, p + 'enter', h, n, c)),
              (g.target = A),
              (g.relatedTarget = k),
              (v = g)),
            (k = v),
            V && h)
          )
            t: {
              for (g = V, m = h, p = 0, A = g; A; A = er(A)) p++
              for (A = 0, v = m; v; v = er(v)) A++
              for (; 0 < p - A; ) (g = er(g)), p--
              for (; 0 < A - p; ) (m = er(m)), A--
              for (; p--; ) {
                if (g === m || (m !== null && g === m.alternate)) break t
                ;(g = er(g)), (m = er(m))
              }
              g = null
            }
          else g = null
          V !== null && Td(f, d, V, g, !1),
            h !== null && k !== null && Td(f, k, h, g, !0)
        }
      }
      e: {
        if (
          ((d = a ? fr(a) : window),
          (V = d.nodeName && d.nodeName.toLowerCase()),
          V === 'select' || (V === 'input' && d.type === 'file'))
        )
          var w = sV
        else if (Cd(d))
          if (l0) w = dV
          else {
            w = aV
            var S = lV
          }
        else
          (V = d.nodeName) &&
            V.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (w = cV)
        if (w && (w = w(e, a))) {
          s0(f, w, n, c)
          break e
        }
        S && S(e, d, a),
          e === 'focusout' &&
            (S = d._wrapperState) &&
            S.controlled &&
            d.type === 'number' &&
            Tl(d, 'number', d.value)
      }
      switch (((S = a ? fr(a) : window), e)) {
        case 'focusin':
          ;(Cd(S) || S.contentEditable === 'true') &&
            ((cr = S), (Hl = a), (Ao = null))
          break
        case 'focusout':
          Ao = Hl = cr = null
          break
        case 'mousedown':
          Wl = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Wl = !1), bd(f, n, c)
          break
        case 'selectionchange':
          if (mV) break
        case 'keydown':
        case 'keyup':
          bd(f, n, c)
      }
      var x
      if (rc)
        e: {
          switch (e) {
            case 'compositionstart':
              var b = 'onCompositionStart'
              break e
            case 'compositionend':
              b = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              b = 'onCompositionUpdate'
              break e
          }
          b = void 0
        }
      else
        ar
          ? i0(e, n) && (b = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (b = 'onCompositionStart')
      b &&
        (o0 &&
          n.locale !== 'ko' &&
          (ar || b !== 'onCompositionStart'
            ? b === 'onCompositionEnd' && ar && (x = r0())
            : ((nn = c),
              (ec = 'value' in nn ? nn.value : nn.textContent),
              (ar = !0))),
        (S = au(a, b)),
        0 < S.length &&
          ((b = new wd(b, e, null, n, c)),
          f.push({ event: b, listeners: S }),
          x ? (b.data = x) : ((x = u0(n)), x !== null && (b.data = x)))),
        (x = nV ? rV(e, n) : oV(e, n)) &&
          ((a = au(a, 'onBeforeInput')),
          0 < a.length &&
            ((c = new wd('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: a }),
            (c.data = x)))
    }
    y0(f, t)
  })
}
function Do(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function au(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = No(e, n)),
      i != null && r.unshift(Do(e, i, o)),
      (i = No(e, t)),
      i != null && r.push(Do(e, i, o))),
      (e = e.return)
  }
  return r
}
function er(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Td(e, t, n, r, o) {
  for (var i = t._reactName, u = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      a = s.stateNode
    if (l !== null && l === r) break
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      o
        ? ((l = No(n, i)), l != null && u.unshift(Do(n, l, s)))
        : o || ((l = No(n, i)), l != null && u.push(Do(n, l, s)))),
      (n = n.return)
  }
  u.length !== 0 && e.push({ event: t, listeners: u })
}
var yV = /\r\n?/g,
  AV = /\u0000|\uFFFD/g
function Dd(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      yV,
      `
`
    )
    .replace(AV, '')
}
function hi(e, t, n) {
  if (((t = Dd(t)), Dd(e) !== t && n)) throw Error(C(425))
}
function cu() {}
var ql = null,
  Kl = null
function Gl(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Yl = typeof setTimeout == 'function' ? setTimeout : void 0,
  vV = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Od = typeof Promise == 'function' ? Promise : void 0,
  wV =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Od < 'u'
      ? function (e) {
          return Od.resolve(null).then(e).catch(EV)
        }
      : Yl
function EV(e) {
  setTimeout(function () {
    throw e
  })
}
function Hs(e, t) {
  var n = t,
    r = 0
  do {
    var o = n.nextSibling
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), bo(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = o
  } while (n)
  bo(t)
}
function cn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function Ld(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var zr = Math.random().toString(36).slice(2),
  St = '__reactFiber$' + zr,
  Oo = '__reactProps$' + zr,
  jt = '__reactContainer$' + zr,
  Xl = '__reactEvents$' + zr,
  SV = '__reactListeners$' + zr,
  xV = '__reactHandles$' + zr
function Ln(e) {
  var t = e[St]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[jt] || n[St])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ld(e); e !== null; ) {
          if ((n = e[St])) return n
          e = Ld(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function Go(e) {
  return (
    (e = e[St] || e[jt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function fr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(C(33))
}
function Mu(e) {
  return e[Oo] || null
}
var Jl = [],
  pr = -1
function Sn(e) {
  return { current: e }
}
function G(e) {
  0 > pr || ((e.current = Jl[pr]), (Jl[pr] = null), pr--)
}
function q(e, t) {
  pr++, (Jl[pr] = e.current), (e.current = t)
}
var An = {},
  Ne = Sn(An),
  Me = Sn(!1),
  Qn = An
function br(e, t) {
  var n = e.type.contextTypes
  if (!n) return An
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var o = {},
    i
  for (i in n) o[i] = t[i]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function je(e) {
  return (e = e.childContextTypes), e != null
}
function du() {
  G(Me), G(Ne)
}
function Id(e, t, n) {
  if (Ne.current !== An) throw Error(C(168))
  q(Ne, t), q(Me, n)
}
function v0(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var o in r) if (!(o in t)) throw Error(C(108, l4(e) || 'Unknown', o))
  return ne({}, n, r)
}
function fu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || An),
    (Qn = Ne.current),
    q(Ne, e),
    q(Me, Me.current),
    !0
  )
}
function Fd(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(C(169))
  n
    ? ((e = v0(e, t, Qn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      G(Me),
      G(Ne),
      q(Ne, e))
    : G(Me),
    q(Me, n)
}
var Tt = null,
  ju = !1,
  Ws = !1
function w0(e) {
  Tt === null ? (Tt = [e]) : Tt.push(e)
}
function CV(e) {
  ;(ju = !0), w0(e)
}
function xn() {
  if (!Ws && Tt !== null) {
    Ws = !0
    var e = 0,
      t = $
    try {
      var n = Tt
      for ($ = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(Tt = null), (ju = !1)
    } catch (o) {
      throw (Tt !== null && (Tt = Tt.slice(e + 1)), Wp(Ya, xn), o)
    } finally {
      ;($ = t), (Ws = !1)
    }
  }
  return null
}
var mr = [],
  hr = 0,
  pu = null,
  mu = 0,
  rt = [],
  ot = 0,
  $n = null,
  Dt = 1,
  Ot = ''
function Tn(e, t) {
  ;(mr[hr++] = mu), (mr[hr++] = pu), (pu = e), (mu = t)
}
function E0(e, t, n) {
  ;(rt[ot++] = Dt), (rt[ot++] = Ot), (rt[ot++] = $n), ($n = e)
  var r = Dt
  e = Ot
  var o = 32 - yt(r) - 1
  ;(r &= ~(1 << o)), (n += 1)
  var i = 32 - yt(t) + o
  if (30 < i) {
    var u = o - (o % 5)
    ;(i = (r & ((1 << u) - 1)).toString(32)),
      (r >>= u),
      (o -= u),
      (Dt = (1 << (32 - yt(t) + o)) | (n << o) | r),
      (Ot = i + e)
  } else (Dt = (1 << i) | (n << o) | r), (Ot = e)
}
function ic(e) {
  e.return !== null && (Tn(e, 1), E0(e, 1, 0))
}
function uc(e) {
  for (; e === pu; )
    (pu = mr[--hr]), (mr[hr] = null), (mu = mr[--hr]), (mr[hr] = null)
  for (; e === $n; )
    ($n = rt[--ot]),
      (rt[ot] = null),
      (Ot = rt[--ot]),
      (rt[ot] = null),
      (Dt = rt[--ot]),
      (rt[ot] = null)
}
var Ye = null,
  Ge = null,
  J = !1,
  Vt = null
function S0(e, t) {
  var n = it(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Ud(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ye = e), (Ge = cn(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ye = e), (Ge = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = $n !== null ? { id: Dt, overflow: Ot } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = it(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ye = e),
            (Ge = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Zl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ea(e) {
  if (J) {
    var t = Ge
    if (t) {
      var n = t
      if (!Ud(e, t)) {
        if (Zl(e)) throw Error(C(418))
        t = cn(n.nextSibling)
        var r = Ye
        t && Ud(e, t)
          ? S0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (J = !1), (Ye = e))
      }
    } else {
      if (Zl(e)) throw Error(C(418))
      ;(e.flags = (e.flags & -4097) | 2), (J = !1), (Ye = e)
    }
  }
}
function Md(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  Ye = e
}
function Vi(e) {
  if (e !== Ye) return !1
  if (!J) return Md(e), (J = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Gl(e.type, e.memoizedProps))),
    t && (t = Ge))
  ) {
    if (Zl(e)) throw (x0(), Error(C(418)))
    for (; t; ) S0(e, t), (t = cn(t.nextSibling))
  }
  if ((Md(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              Ge = cn(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      Ge = null
    }
  } else Ge = Ye ? cn(e.stateNode.nextSibling) : null
  return !0
}
function x0() {
  for (var e = Ge; e; ) e = cn(e.nextSibling)
}
function Rr() {
  ;(Ge = Ye = null), (J = !1)
}
function sc(e) {
  Vt === null ? (Vt = [e]) : Vt.push(e)
}
var kV = Ht.ReactCurrentBatchConfig
function mt(e, t) {
  if (e && e.defaultProps) {
    ;(t = ne({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var hu = Sn(null),
  Vu = null,
  Vr = null,
  lc = null
function ac() {
  lc = Vr = Vu = null
}
function cc(e) {
  var t = hu.current
  G(hu), (e._currentValue = t)
}
function ta(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Sr(e, t) {
  ;(Vu = e),
    (lc = Vr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (Ue = !0), (e.firstContext = null))
}
function st(e) {
  var t = e._currentValue
  if (lc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vr === null)) {
      if (Vu === null) throw Error(C(308))
      ;(Vr = e), (Vu.dependencies = { lanes: 0, firstContext: e })
    } else Vr = Vr.next = e
  return t
}
var In = null
function dc(e) {
  In === null ? (In = [e]) : In.push(e)
}
function C0(e, t, n, r) {
  var o = t.interleaved
  return (
    o === null ? ((n.next = n), dc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    zt(e, r)
  )
}
function zt(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var Xt = !1
function fc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function k0(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function It(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function dn(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), (j & 2) !== 0)) {
    var o = r.pending
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      zt(e, n)
    )
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), dc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    zt(e, n)
  )
}
function bi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Xa(e, n)
  }
}
function jd(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var u = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        i === null ? (o = i = u) : (i = i.next = u), (n = n.next)
      } while (n !== null)
      i === null ? (o = i = t) : (i = i.next = t)
    } else o = i = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function gu(e, t, n, r) {
  var o = e.updateQueue
  Xt = !1
  var i = o.firstBaseUpdate,
    u = o.lastBaseUpdate,
    s = o.shared.pending
  if (s !== null) {
    o.shared.pending = null
    var l = s,
      a = l.next
    ;(l.next = null), u === null ? (i = a) : (u.next = a), (u = l)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== u &&
        (s === null ? (c.firstBaseUpdate = a) : (s.next = a),
        (c.lastBaseUpdate = l)))
  }
  if (i !== null) {
    var f = o.baseState
    ;(u = 0), (c = a = l = null), (s = i)
    do {
      var d = s.lane,
        V = s.eventTime
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: V,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            })
        e: {
          var h = e,
            g = s
          switch (((d = t), (V = n), g.tag)) {
            case 1:
              if (((h = g.payload), typeof h == 'function')) {
                f = h.call(V, f, d)
                break e
              }
              f = h
              break e
            case 3:
              h.flags = (h.flags & -65537) | 128
            case 0:
              if (
                ((h = g.payload),
                (d = typeof h == 'function' ? h.call(V, f, d) : h),
                d == null)
              )
                break e
              f = ne({}, f, d)
              break e
            case 2:
              Xt = !0
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [s]) : d.push(s))
      } else
        (V = {
          eventTime: V,
          lane: d,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((a = c = V), (l = f)) : (c = c.next = V),
          (u |= d)
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break
        ;(d = s),
          (s = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null)
      }
    } while (1)
    if (
      (c === null && (l = f),
      (o.baseState = l),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do (u |= o.lane), (o = o.next)
      while (o !== t)
    } else i === null && (o.shared.lanes = 0)
    ;(Wn |= u), (e.lanes = u), (e.memoizedState = f)
  }
}
function zd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(C(191, o))
        o.call(r)
      }
    }
}
var N0 = new Cp.Component().refs
function na(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var zu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Jn(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = Re(),
      o = pn(e),
      i = It(r, o)
    ;(i.payload = t),
      n != null && (i.callback = n),
      (t = dn(e, i, o)),
      t !== null && (At(t, e, o, r), bi(t, e, o))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = Re(),
      o = pn(e),
      i = It(r, o)
    ;(i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = dn(e, i, o)),
      t !== null && (At(t, e, o, r), bi(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = Re(),
      r = pn(e),
      o = It(n, r)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = dn(e, o, r)),
      t !== null && (At(t, e, r, n), bi(t, e, r))
  },
}
function Qd(e, t, n, r, o, i, u) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, u)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Bo(n, r) || !Bo(o, i)
      : !0
  )
}
function P0(e, t, n) {
  var r = !1,
    o = An,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = st(i))
      : ((o = je(t) ? Qn : Ne.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? br(e, o) : An)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function $d(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zu.enqueueReplaceState(t, t.state, null)
}
function ra(e, t, n, r) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = N0), fc(e)
  var i = t.contextType
  typeof i == 'object' && i !== null
    ? (o.context = st(i))
    : ((i = je(t) ? Qn : Ne.current), (o.context = br(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (na(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && zu.enqueueReplaceState(o, o.state, null),
      gu(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function to(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309))
        var r = n.stateNode
      }
      if (!r) throw Error(C(147, e))
      var o = r,
        i = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (u) {
            var s = o.refs
            s === N0 && (s = o.refs = {}), u === null ? delete s[i] : (s[i] = u)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error(C(284))
    if (!n._owner) throw Error(C(290, e))
  }
  return e
}
function gi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  )
}
function Hd(e) {
  var t = e._init
  return t(e._payload)
}
function _0(e) {
  function t(m, p) {
    if (e) {
      var A = m.deletions
      A === null ? ((m.deletions = [p]), (m.flags |= 16)) : A.push(p)
    }
  }
  function n(m, p) {
    if (!e) return null
    for (; p !== null; ) t(m, p), (p = p.sibling)
    return null
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling)
    return m
  }
  function o(m, p) {
    return (m = mn(m, p)), (m.index = 0), (m.sibling = null), m
  }
  function i(m, p, A) {
    return (
      (m.index = A),
      e
        ? ((A = m.alternate),
          A !== null
            ? ((A = A.index), A < p ? ((m.flags |= 2), p) : A)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    )
  }
  function u(m) {
    return e && m.alternate === null && (m.flags |= 2), m
  }
  function s(m, p, A, v) {
    return p === null || p.tag !== 6
      ? ((p = Zs(A, m.mode, v)), (p.return = m), p)
      : ((p = o(p, A)), (p.return = m), p)
  }
  function l(m, p, A, v) {
    var w = A.type
    return w === lr
      ? c(m, p, A.props.children, v, A.key)
      : p !== null &&
        (p.elementType === w ||
          (typeof w == 'object' &&
            w !== null &&
            w.$$typeof === Yt &&
            Hd(w) === p.type))
      ? ((v = o(p, A.props)), (v.ref = to(m, p, A)), (v.return = m), v)
      : ((v = Li(A.type, A.key, A.props, null, m.mode, v)),
        (v.ref = to(m, p, A)),
        (v.return = m),
        v)
  }
  function a(m, p, A, v) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== A.containerInfo ||
      p.stateNode.implementation !== A.implementation
      ? ((p = el(A, m.mode, v)), (p.return = m), p)
      : ((p = o(p, A.children || [])), (p.return = m), p)
  }
  function c(m, p, A, v, w) {
    return p === null || p.tag !== 7
      ? ((p = jn(A, m.mode, v, w)), (p.return = m), p)
      : ((p = o(p, A)), (p.return = m), p)
  }
  function f(m, p, A) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = Zs('' + p, m.mode, A)), (p.return = m), p
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case ui:
          return (
            (A = Li(p.type, p.key, p.props, null, m.mode, A)),
            (A.ref = to(m, null, p)),
            (A.return = m),
            A
          )
        case sr:
          return (p = el(p, m.mode, A)), (p.return = m), p
        case Yt:
          var v = p._init
          return f(m, v(p._payload), A)
      }
      if (co(p) || Yr(p)) return (p = jn(p, m.mode, A, null)), (p.return = m), p
      gi(m, p)
    }
    return null
  }
  function d(m, p, A, v) {
    var w = p !== null ? p.key : null
    if ((typeof A == 'string' && A !== '') || typeof A == 'number')
      return w !== null ? null : s(m, p, '' + A, v)
    if (typeof A == 'object' && A !== null) {
      switch (A.$$typeof) {
        case ui:
          return A.key === w ? l(m, p, A, v) : null
        case sr:
          return A.key === w ? a(m, p, A, v) : null
        case Yt:
          return (w = A._init), d(m, p, w(A._payload), v)
      }
      if (co(A) || Yr(A)) return w !== null ? null : c(m, p, A, v, null)
      gi(m, A)
    }
    return null
  }
  function V(m, p, A, v, w) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return (m = m.get(A) || null), s(p, m, '' + v, w)
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case ui:
          return (m = m.get(v.key === null ? A : v.key) || null), l(p, m, v, w)
        case sr:
          return (m = m.get(v.key === null ? A : v.key) || null), a(p, m, v, w)
        case Yt:
          var S = v._init
          return V(m, p, A, S(v._payload), w)
      }
      if (co(v) || Yr(v)) return (m = m.get(A) || null), c(p, m, v, w, null)
      gi(p, v)
    }
    return null
  }
  function h(m, p, A, v) {
    for (
      var w = null, S = null, x = p, b = (p = 0), F = null;
      x !== null && b < A.length;
      b++
    ) {
      x.index > b ? ((F = x), (x = null)) : (F = x.sibling)
      var D = d(m, x, A[b], v)
      if (D === null) {
        x === null && (x = F)
        break
      }
      e && x && D.alternate === null && t(m, x),
        (p = i(D, p, b)),
        S === null ? (w = D) : (S.sibling = D),
        (S = D),
        (x = F)
    }
    if (b === A.length) return n(m, x), J && Tn(m, b), w
    if (x === null) {
      for (; b < A.length; b++)
        (x = f(m, A[b], v)),
          x !== null &&
            ((p = i(x, p, b)), S === null ? (w = x) : (S.sibling = x), (S = x))
      return J && Tn(m, b), w
    }
    for (x = r(m, x); b < A.length; b++)
      (F = V(x, m, b, A[b], v)),
        F !== null &&
          (e && F.alternate !== null && x.delete(F.key === null ? b : F.key),
          (p = i(F, p, b)),
          S === null ? (w = F) : (S.sibling = F),
          (S = F))
    return (
      e &&
        x.forEach(function (z) {
          return t(m, z)
        }),
      J && Tn(m, b),
      w
    )
  }
  function g(m, p, A, v) {
    var w = Yr(A)
    if (typeof w != 'function') throw Error(C(150))
    if (((A = w.call(A)), A == null)) throw Error(C(151))
    for (
      var S = (w = null), x = p, b = (p = 0), F = null, D = A.next();
      x !== null && !D.done;
      b++, D = A.next()
    ) {
      x.index > b ? ((F = x), (x = null)) : (F = x.sibling)
      var z = d(m, x, D.value, v)
      if (z === null) {
        x === null && (x = F)
        break
      }
      e && x && z.alternate === null && t(m, x),
        (p = i(z, p, b)),
        S === null ? (w = z) : (S.sibling = z),
        (S = z),
        (x = F)
    }
    if (D.done) return n(m, x), J && Tn(m, b), w
    if (x === null) {
      for (; !D.done; b++, D = A.next())
        (D = f(m, D.value, v)),
          D !== null &&
            ((p = i(D, p, b)), S === null ? (w = D) : (S.sibling = D), (S = D))
      return J && Tn(m, b), w
    }
    for (x = r(m, x); !D.done; b++, D = A.next())
      (D = V(x, m, b, D.value, v)),
        D !== null &&
          (e && D.alternate !== null && x.delete(D.key === null ? b : D.key),
          (p = i(D, p, b)),
          S === null ? (w = D) : (S.sibling = D),
          (S = D))
    return (
      e &&
        x.forEach(function ($e) {
          return t(m, $e)
        }),
      J && Tn(m, b),
      w
    )
  }
  function k(m, p, A, v) {
    if (
      (typeof A == 'object' &&
        A !== null &&
        A.type === lr &&
        A.key === null &&
        (A = A.props.children),
      typeof A == 'object' && A !== null)
    ) {
      switch (A.$$typeof) {
        case ui:
          e: {
            for (var w = A.key, S = p; S !== null; ) {
              if (S.key === w) {
                if (((w = A.type), w === lr)) {
                  if (S.tag === 7) {
                    n(m, S.sibling),
                      (p = o(S, A.props.children)),
                      (p.return = m),
                      (m = p)
                    break e
                  }
                } else if (
                  S.elementType === w ||
                  (typeof w == 'object' &&
                    w !== null &&
                    w.$$typeof === Yt &&
                    Hd(w) === S.type)
                ) {
                  n(m, S.sibling),
                    (p = o(S, A.props)),
                    (p.ref = to(m, S, A)),
                    (p.return = m),
                    (m = p)
                  break e
                }
                n(m, S)
                break
              } else t(m, S)
              S = S.sibling
            }
            A.type === lr
              ? ((p = jn(A.props.children, m.mode, v, A.key)),
                (p.return = m),
                (m = p))
              : ((v = Li(A.type, A.key, A.props, null, m.mode, v)),
                (v.ref = to(m, p, A)),
                (v.return = m),
                (m = v))
          }
          return u(m)
        case sr:
          e: {
            for (S = A.key; p !== null; ) {
              if (p.key === S)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === A.containerInfo &&
                  p.stateNode.implementation === A.implementation
                ) {
                  n(m, p.sibling),
                    (p = o(p, A.children || [])),
                    (p.return = m),
                    (m = p)
                  break e
                } else {
                  n(m, p)
                  break
                }
              else t(m, p)
              p = p.sibling
            }
            ;(p = el(A, m.mode, v)), (p.return = m), (m = p)
          }
          return u(m)
        case Yt:
          return (S = A._init), k(m, p, S(A._payload), v)
      }
      if (co(A)) return h(m, p, A, v)
      if (Yr(A)) return g(m, p, A, v)
      gi(m, A)
    }
    return (typeof A == 'string' && A !== '') || typeof A == 'number'
      ? ((A = '' + A),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = o(p, A)), (p.return = m), (m = p))
          : (n(m, p), (p = Zs(A, m.mode, v)), (p.return = m), (m = p)),
        u(m))
      : n(m, p)
  }
  return k
}
var Br = _0(!0),
  b0 = _0(!1),
  Yo = {},
  kt = Sn(Yo),
  Lo = Sn(Yo),
  Io = Sn(Yo)
function Fn(e) {
  if (e === Yo) throw Error(C(174))
  return e
}
function pc(e, t) {
  switch ((q(Io, t), q(Lo, e), q(kt, Yo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ol(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ol(t, e))
  }
  G(kt), q(kt, t)
}
function Tr() {
  G(kt), G(Lo), G(Io)
}
function R0(e) {
  Fn(Io.current)
  var t = Fn(kt.current),
    n = Ol(t, e.type)
  t !== n && (q(Lo, e), q(kt, n))
}
function mc(e) {
  Lo.current === e && (G(kt), G(Lo))
}
var ee = Sn(0)
function yu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var qs = []
function hc() {
  for (var e = 0; e < qs.length; e++) qs[e]._workInProgressVersionPrimary = null
  qs.length = 0
}
var Ri = Ht.ReactCurrentDispatcher,
  Ks = Ht.ReactCurrentBatchConfig,
  Hn = 0,
  te = null,
  ce = null,
  he = null,
  Au = !1,
  vo = !1,
  Fo = 0,
  NV = 0
function Se() {
  throw Error(C(321))
}
function Vc(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!vt(e[n], t[n])) return !1
  return !0
}
function gc(e, t, n, r, o, i) {
  if (
    ((Hn = i),
    (te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ri.current = e === null || e.memoizedState === null ? RV : BV),
    (e = n(r, o)),
    vo)
  ) {
    i = 0
    do {
      if (((vo = !1), (Fo = 0), 25 <= i)) throw Error(C(301))
      ;(i += 1),
        (he = ce = null),
        (t.updateQueue = null),
        (Ri.current = TV),
        (e = n(r, o))
    } while (vo)
  }
  if (
    ((Ri.current = vu),
    (t = ce !== null && ce.next !== null),
    (Hn = 0),
    (he = ce = te = null),
    (Au = !1),
    t)
  )
    throw Error(C(300))
  return e
}
function yc() {
  var e = Fo !== 0
  return (Fo = 0), e
}
function Et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return he === null ? (te.memoizedState = he = e) : (he = he.next = e), he
}
function lt() {
  if (ce === null) {
    var e = te.alternate
    e = e !== null ? e.memoizedState : null
  } else e = ce.next
  var t = he === null ? te.memoizedState : he.next
  if (t !== null) (he = t), (ce = e)
  else {
    if (e === null) throw Error(C(310))
    ;(ce = e),
      (e = {
        memoizedState: ce.memoizedState,
        baseState: ce.baseState,
        baseQueue: ce.baseQueue,
        queue: ce.queue,
        next: null,
      }),
      he === null ? (te.memoizedState = he = e) : (he = he.next = e)
  }
  return he
}
function Uo(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Gs(e) {
  var t = lt(),
    n = t.queue
  if (n === null) throw Error(C(311))
  n.lastRenderedReducer = e
  var r = ce,
    o = r.baseQueue,
    i = n.pending
  if (i !== null) {
    if (o !== null) {
      var u = o.next
      ;(o.next = i.next), (i.next = u)
    }
    ;(r.baseQueue = o = i), (n.pending = null)
  }
  if (o !== null) {
    ;(i = o.next), (r = r.baseState)
    var s = (u = null),
      l = null,
      a = i
    do {
      var c = a.lane
      if ((Hn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action))
      else {
        var f = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        }
        l === null ? ((s = l = f), (u = r)) : (l = l.next = f),
          (te.lanes |= c),
          (Wn |= c)
      }
      a = a.next
    } while (a !== null && a !== i)
    l === null ? (u = r) : (l.next = s),
      vt(r, t.memoizedState) || (Ue = !0),
      (t.memoizedState = r),
      (t.baseState = u),
      (t.baseQueue = l),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    o = e
    do (i = o.lane), (te.lanes |= i), (Wn |= i), (o = o.next)
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Ys(e) {
  var t = lt(),
    n = t.queue
  if (n === null) throw Error(C(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState
  if (o !== null) {
    n.pending = null
    var u = (o = o.next)
    do (i = e(i, u.action)), (u = u.next)
    while (u !== o)
    vt(i, t.memoizedState) || (Ue = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i)
  }
  return [i, r]
}
function B0() {}
function T0(e, t) {
  var n = te,
    r = lt(),
    o = t(),
    i = !vt(r.memoizedState, o)
  if (
    (i && ((r.memoizedState = o), (Ue = !0)),
    (r = r.queue),
    Ac(L0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (he !== null && he.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Mo(9, O0.bind(null, n, r, o, t), void 0, null),
      ge === null)
    )
      throw Error(C(349))
    ;(Hn & 30) !== 0 || D0(n, t, o)
  }
  return o
}
function D0(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function O0(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), I0(t) && F0(e)
}
function L0(e, t, n) {
  return n(function () {
    I0(t) && F0(e)
  })
}
function I0(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !vt(e, n)
  } catch {
    return !0
  }
}
function F0(e) {
  var t = zt(e, 1)
  t !== null && At(t, e, 1, -1)
}
function Wd(e) {
  var t = Et()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Uo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = bV.bind(null, te, e)),
    [t.memoizedState, e]
  )
}
function Mo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function U0() {
  return lt().memoizedState
}
function Bi(e, t, n, r) {
  var o = Et()
  ;(te.flags |= e),
    (o.memoizedState = Mo(1 | t, n, void 0, r === void 0 ? null : r))
}
function Qu(e, t, n, r) {
  var o = lt()
  r = r === void 0 ? null : r
  var i = void 0
  if (ce !== null) {
    var u = ce.memoizedState
    if (((i = u.destroy), r !== null && Vc(r, u.deps))) {
      o.memoizedState = Mo(t, n, i, r)
      return
    }
  }
  ;(te.flags |= e), (o.memoizedState = Mo(1 | t, n, i, r))
}
function qd(e, t) {
  return Bi(8390656, 8, e, t)
}
function Ac(e, t) {
  return Qu(2048, 8, e, t)
}
function M0(e, t) {
  return Qu(4, 2, e, t)
}
function j0(e, t) {
  return Qu(4, 4, e, t)
}
function z0(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function Q0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Qu(4, 4, z0.bind(null, t, e), n)
  )
}
function vc() {}
function $0(e, t) {
  var n = lt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Vc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function H0(e, t) {
  var n = lt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Vc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function W0(e, t, n) {
  return (Hn & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n))
    : (vt(n, t) || ((n = Gp()), (te.lanes |= n), (Wn |= n), (e.baseState = !0)),
      t)
}
function PV(e, t) {
  var n = $
  ;($ = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = Ks.transition
  Ks.transition = {}
  try {
    e(!1), t()
  } finally {
    ;($ = n), (Ks.transition = r)
  }
}
function q0() {
  return lt().memoizedState
}
function _V(e, t, n) {
  var r = pn(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    K0(e))
  )
    G0(t, n)
  else if (((n = C0(e, t, n, r)), n !== null)) {
    var o = Re()
    At(n, e, r, o), Y0(n, t, r)
  }
}
function bV(e, t, n) {
  var r = pn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (K0(e)) G0(t, o)
  else {
    var i = e.alternate
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var u = t.lastRenderedState,
          s = i(u, n)
        if (((o.hasEagerState = !0), (o.eagerState = s), vt(s, u))) {
          var l = t.interleaved
          l === null
            ? ((o.next = o), dc(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(n = C0(e, t, o, r)),
      n !== null && ((o = Re()), At(n, e, r, o), Y0(n, t, r))
  }
}
function K0(e) {
  var t = e.alternate
  return e === te || (t !== null && t === te)
}
function G0(e, t) {
  vo = Au = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function Y0(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Xa(e, n)
  }
}
var vu = {
    readContext: st,
    useCallback: Se,
    useContext: Se,
    useEffect: Se,
    useImperativeHandle: Se,
    useInsertionEffect: Se,
    useLayoutEffect: Se,
    useMemo: Se,
    useReducer: Se,
    useRef: Se,
    useState: Se,
    useDebugValue: Se,
    useDeferredValue: Se,
    useTransition: Se,
    useMutableSource: Se,
    useSyncExternalStore: Se,
    useId: Se,
    unstable_isNewReconciler: !1,
  },
  RV = {
    readContext: st,
    useCallback: function (e, t) {
      return (Et().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: st,
    useEffect: qd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Bi(4194308, 4, z0.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return Bi(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Bi(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Et()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = Et()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = _V.bind(null, te, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Et()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Wd,
    useDebugValue: vc,
    useDeferredValue: function (e) {
      return (Et().memoizedState = e)
    },
    useTransition: function () {
      var e = Wd(!1),
        t = e[0]
      return (e = PV.bind(null, e[1])), (Et().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = te,
        o = Et()
      if (J) {
        if (n === void 0) throw Error(C(407))
        n = n()
      } else {
        if (((n = t()), ge === null)) throw Error(C(349))
        ;(Hn & 30) !== 0 || D0(r, t, n)
      }
      o.memoizedState = n
      var i = { value: n, getSnapshot: t }
      return (
        (o.queue = i),
        qd(L0.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Mo(9, O0.bind(null, r, i, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = Et(),
        t = ge.identifierPrefix
      if (J) {
        var n = Ot,
          r = Dt
        ;(n = (r & ~(1 << (32 - yt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Fo++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = NV++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  BV = {
    readContext: st,
    useCallback: $0,
    useContext: st,
    useEffect: Ac,
    useImperativeHandle: Q0,
    useInsertionEffect: M0,
    useLayoutEffect: j0,
    useMemo: H0,
    useReducer: Gs,
    useRef: U0,
    useState: function () {
      return Gs(Uo)
    },
    useDebugValue: vc,
    useDeferredValue: function (e) {
      var t = lt()
      return W0(t, ce.memoizedState, e)
    },
    useTransition: function () {
      var e = Gs(Uo)[0],
        t = lt().memoizedState
      return [e, t]
    },
    useMutableSource: B0,
    useSyncExternalStore: T0,
    useId: q0,
    unstable_isNewReconciler: !1,
  },
  TV = {
    readContext: st,
    useCallback: $0,
    useContext: st,
    useEffect: Ac,
    useImperativeHandle: Q0,
    useInsertionEffect: M0,
    useLayoutEffect: j0,
    useMemo: H0,
    useReducer: Ys,
    useRef: U0,
    useState: function () {
      return Ys(Uo)
    },
    useDebugValue: vc,
    useDeferredValue: function (e) {
      var t = lt()
      return ce === null ? (t.memoizedState = e) : W0(t, ce.memoizedState, e)
    },
    useTransition: function () {
      var e = Ys(Uo)[0],
        t = lt().memoizedState
      return [e, t]
    },
    useMutableSource: B0,
    useSyncExternalStore: T0,
    useId: q0,
    unstable_isNewReconciler: !1,
  }
function Dr(e, t) {
  try {
    var n = '',
      r = t
    do (n += s4(r)), (r = r.return)
    while (r)
    var o = n
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack
  }
  return { value: e, source: t, stack: o, digest: null }
}
function Xs(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n != null ? n : null,
    digest: t != null ? t : null,
  }
}
function oa(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var DV = typeof WeakMap == 'function' ? WeakMap : Map
function X0(e, t, n) {
  ;(n = It(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      Eu || ((Eu = !0), (ma = r)), oa(e, t)
    }),
    n
  )
}
function J0(e, t, n) {
  ;(n = It(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var o = t.value
    ;(n.payload = function () {
      return r(o)
    }),
      (n.callback = function () {
        oa(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        oa(e, t),
          typeof r != 'function' &&
            (fn === null ? (fn = new Set([this])) : fn.add(this))
        var u = t.stack
        this.componentDidCatch(t.value, { componentStack: u !== null ? u : '' })
      }),
    n
  )
}
function Kd(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new DV()
    var o = new Set()
    r.set(t, o)
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
  o.has(n) || (o.add(n), (e = KV.bind(null, e, t, n)), t.then(e, e))
}
function Gd(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function Yd(e, t, n, r, o) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = It(-1, 1)), (t.tag = 2), dn(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = o), e)
}
var OV = Ht.ReactCurrentOwner,
  Ue = !1
function be(e, t, n, r) {
  t.child = e === null ? b0(t, null, n, r) : Br(t, e.child, n, r)
}
function Xd(e, t, n, r, o) {
  n = n.render
  var i = t.ref
  return (
    Sr(t, o),
    (r = gc(e, t, n, r, i, o)),
    (n = yc()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Qt(e, t, o))
      : (J && n && ic(t), (t.flags |= 1), be(e, t, r, o), t.child)
  )
}
function Jd(e, t, n, r, o) {
  if (e === null) {
    var i = n.type
    return typeof i == 'function' &&
      !Pc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Z0(e, t, i, r, o))
      : ((e = Li(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((i = e.child), (e.lanes & o) === 0)) {
    var u = i.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Bo), n(u, r) && e.ref === t.ref)
    )
      return Qt(e, t, o)
  }
  return (
    (t.flags |= 1),
    (e = mn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function Z0(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (Bo(i, r) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        (e.flags & 131072) !== 0 && (Ue = !0)
      else return (t.lanes = e.lanes), Qt(e, t, o)
  }
  return ia(e, t, n, r, o)
}
function em(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        q(yr, We),
        (We |= n)
    else {
      if ((n & 1073741824) === 0)
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          q(yr, We),
          (We |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        q(yr, We),
        (We |= r)
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      q(yr, We),
      (We |= r)
  return be(e, t, o, n), t.child
}
function tm(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function ia(e, t, n, r, o) {
  var i = je(n) ? Qn : Ne.current
  return (
    (i = br(t, i)),
    Sr(t, o),
    (n = gc(e, t, n, r, i, o)),
    (r = yc()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Qt(e, t, o))
      : (J && r && ic(t), (t.flags |= 1), be(e, t, n, o), t.child)
  )
}
function Zd(e, t, n, r, o) {
  if (je(n)) {
    var i = !0
    fu(t)
  } else i = !1
  if ((Sr(t, o), t.stateNode === null))
    Ti(e, t), P0(t, n, r), ra(t, n, r, o), (r = !0)
  else if (e === null) {
    var u = t.stateNode,
      s = t.memoizedProps
    u.props = s
    var l = u.context,
      a = n.contextType
    typeof a == 'object' && a !== null
      ? (a = st(a))
      : ((a = je(n) ? Qn : Ne.current), (a = br(t, a)))
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'
    f ||
      (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof u.componentWillReceiveProps != 'function') ||
      ((s !== r || l !== a) && $d(t, u, r, a)),
      (Xt = !1)
    var d = t.memoizedState
    ;(u.state = d),
      gu(t, r, u, o),
      (l = t.memoizedState),
      s !== r || d !== l || Me.current || Xt
        ? (typeof c == 'function' && (na(t, n, c, r), (l = t.memoizedState)),
          (s = Xt || Qd(t, n, s, r, d, l, a))
            ? (f ||
                (typeof u.UNSAFE_componentWillMount != 'function' &&
                  typeof u.componentWillMount != 'function') ||
                (typeof u.componentWillMount == 'function' &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == 'function' &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (u.props = r),
          (u.state = l),
          (u.context = a),
          (r = s))
        : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(u = t.stateNode),
      k0(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : mt(t.type, s)),
      (u.props = a),
      (f = t.pendingProps),
      (d = u.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = st(l))
        : ((l = je(n) ? Qn : Ne.current), (l = br(t, l)))
    var V = n.getDerivedStateFromProps
    ;(c =
      typeof V == 'function' ||
      typeof u.getSnapshotBeforeUpdate == 'function') ||
      (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof u.componentWillReceiveProps != 'function') ||
      ((s !== f || d !== l) && $d(t, u, r, l)),
      (Xt = !1),
      (d = t.memoizedState),
      (u.state = d),
      gu(t, r, u, o)
    var h = t.memoizedState
    s !== f || d !== h || Me.current || Xt
      ? (typeof V == 'function' && (na(t, n, V, r), (h = t.memoizedState)),
        (a = Xt || Qd(t, n, a, r, d, h, l) || !1)
          ? (c ||
              (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                typeof u.componentWillUpdate != 'function') ||
              (typeof u.componentWillUpdate == 'function' &&
                u.componentWillUpdate(r, h, l),
              typeof u.UNSAFE_componentWillUpdate == 'function' &&
                u.UNSAFE_componentWillUpdate(r, h, l)),
            typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof u.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = h)),
        (u.props = r),
        (u.state = h),
        (u.context = l),
        (r = a))
      : (typeof u.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return ua(e, t, n, r, i, o)
}
function ua(e, t, n, r, o, i) {
  tm(e, t)
  var u = (t.flags & 128) !== 0
  if (!r && !u) return o && Fd(t, n, !1), Qt(e, t, i)
  ;(r = t.stateNode), (OV.current = t)
  var s =
    u && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && u
      ? ((t.child = Br(t, e.child, null, i)), (t.child = Br(t, null, s, i)))
      : be(e, t, s, i),
    (t.memoizedState = r.state),
    o && Fd(t, n, !0),
    t.child
  )
}
function nm(e) {
  var t = e.stateNode
  t.pendingContext
    ? Id(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Id(e, t.context, !1),
    pc(e, t.containerInfo)
}
function ef(e, t, n, r, o) {
  return Rr(), sc(o), (t.flags |= 256), be(e, t, n, r), t.child
}
var sa = { dehydrated: null, treeContext: null, retryLane: 0 }
function la(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function rm(e, t, n) {
  var r = t.pendingProps,
    o = ee.current,
    i = !1,
    u = (t.flags & 128) !== 0,
    s
  if (
    ((s = u) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    q(ee, o & 1),
    e === null)
  )
    return (
      ea(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === '$!'
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((u = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (u = { mode: 'hidden', children: u }),
              (r & 1) === 0 && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = u))
                : (i = Wu(u, r, 0, null)),
              (e = jn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = la(n)),
              (t.memoizedState = sa),
              e)
            : wc(t, u))
    )
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return LV(e, t, u, r, s, o, n)
  if (i) {
    ;(i = r.fallback), (u = t.mode), (o = e.child), (s = o.sibling)
    var l = { mode: 'hidden', children: r.children }
    return (
      (u & 1) === 0 && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = mn(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = mn(s, i)) : ((i = jn(i, u, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (u = e.child.memoizedState),
      (u =
        u === null
          ? la(n)
          : {
              baseLanes: u.baseLanes | n,
              cachePool: null,
              transitions: u.transitions,
            }),
      (i.memoizedState = u),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = sa),
      r
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = mn(i, { mode: 'visible', children: r.children })),
    (t.mode & 1) === 0 && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function wc(e, t) {
  return (
    (t = Wu({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function yi(e, t, n, r) {
  return (
    r !== null && sc(r),
    Br(t, e.child, null, n),
    (e = wc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function LV(e, t, n, r, o, i, u) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Xs(Error(C(422)))), yi(e, t, u, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Wu({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = jn(i, o, u, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        (t.mode & 1) !== 0 && Br(t, e.child, null, u),
        (t.child.memoizedState = la(u)),
        (t.memoizedState = sa),
        i)
  if ((t.mode & 1) === 0) return yi(e, t, u, null)
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst
    return (r = s), (i = Error(C(419))), (r = Xs(i, r, void 0)), yi(e, t, u, r)
  }
  if (((s = (u & e.childLanes) !== 0), Ue || s)) {
    if (((r = ge), r !== null)) {
      switch (u & -u) {
        case 4:
          o = 2
          break
        case 16:
          o = 8
          break
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
          o = 32
          break
        case 536870912:
          o = 268435456
          break
        default:
          o = 0
      }
      ;(o = (o & (r.suspendedLanes | u)) !== 0 ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), zt(e, o), At(r, e, o, -1))
    }
    return Nc(), (r = Xs(Error(C(421)))), yi(e, t, u, r)
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = GV.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ge = cn(o.nextSibling)),
      (Ye = t),
      (J = !0),
      (Vt = null),
      e !== null &&
        ((rt[ot++] = Dt),
        (rt[ot++] = Ot),
        (rt[ot++] = $n),
        (Dt = e.id),
        (Ot = e.overflow),
        ($n = t)),
      (t = wc(t, r.children)),
      (t.flags |= 4096),
      t)
}
function tf(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), ta(e.return, t, n)
}
function Js(e, t, n, r, o) {
  var i = e.memoizedState
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o))
}
function om(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail
  if ((be(e, t, r.children, n), (r = ee.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && tf(e, n, t)
        else if (e.tag === 19) tf(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((q(ee, r), (t.mode & 1) === 0)) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && yu(e) === null && (o = n),
            (n = n.sibling)
        ;(n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Js(t, !1, o, n, i)
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && yu(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        Js(t, !0, n, null, i)
        break
      case 'together':
        Js(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Ti(e, t) {
  ;(t.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Qt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Wn |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(C(153))
  if (t.child !== null) {
    for (
      e = t.child, n = mn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = mn(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function IV(e, t, n) {
  switch (t.tag) {
    case 3:
      nm(t), Rr()
      break
    case 5:
      R0(t)
      break
    case 1:
      je(t.type) && fu(t)
      break
    case 4:
      pc(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value
      q(hu, r._currentValue), (r._currentValue = o)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (q(ee, ee.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? rm(e, t, n)
          : (q(ee, ee.current & 1),
            (e = Qt(e, t, n)),
            e !== null ? e.sibling : null)
      q(ee, ee.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return om(e, t, n)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        q(ee, ee.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), em(e, t, n)
  }
  return Qt(e, t, n)
}
var im, aa, um, sm
im = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
aa = function () {}
um = function (e, t, n, r) {
  var o = e.memoizedProps
  if (o !== r) {
    ;(e = t.stateNode), Fn(kt.current)
    var i = null
    switch (n) {
      case 'input':
        ;(o = Rl(e, o)), (r = Rl(e, r)), (i = [])
        break
      case 'select':
        ;(o = ne({}, o, { value: void 0 })),
          (r = ne({}, r, { value: void 0 })),
          (i = [])
        break
      case 'textarea':
        ;(o = Dl(e, o)), (r = Dl(e, r)), (i = [])
        break
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = cu)
    }
    Ll(n, r)
    var u
    n = null
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === 'style') {
          var s = o[a]
          for (u in s) s.hasOwnProperty(u) && (n || (n = {}), (n[u] = ''))
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (Co.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null))
    for (a in r) {
      var l = r[a]
      if (
        ((s = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && l !== s && (l != null || s != null))
      )
        if (a === 'style')
          if (s) {
            for (u in s)
              !s.hasOwnProperty(u) ||
                (l && l.hasOwnProperty(u)) ||
                (n || (n = {}), (n[u] = ''))
            for (u in l)
              l.hasOwnProperty(u) &&
                s[u] !== l[u] &&
                (n || (n = {}), (n[u] = l[u]))
          } else n || (i || (i = []), i.push(a, n)), (n = l)
        else
          a === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (i = i || []).push(a, l))
            : a === 'children'
            ? (typeof l != 'string' && typeof l != 'number') ||
              (i = i || []).push(a, '' + l)
            : a !== 'suppressContentEditableWarning' &&
              a !== 'suppressHydrationWarning' &&
              (Co.hasOwnProperty(a)
                ? (l != null && a === 'onScroll' && K('scroll', e),
                  i || s === l || (i = []))
                : (i = i || []).push(a, l))
    }
    n && (i = i || []).push('style', n)
    var a = i
    ;(t.updateQueue = a) && (t.flags |= 4)
  }
}
sm = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function no(e, t) {
  if (!J)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling)
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function FV(e, t, n) {
  var r = t.pendingProps
  switch ((uc(t), t.tag)) {
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
      return xe(t), null
    case 1:
      return je(t.type) && du(), xe(t), null
    case 3:
      return (
        (r = t.stateNode),
        Tr(),
        G(Me),
        G(Ne),
        hc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Vi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), Vt !== null && (ga(Vt), (Vt = null)))),
        aa(e, t),
        xe(t),
        null
      )
    case 5:
      mc(t)
      var o = Fn(Io.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        um(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166))
          return xe(t), null
        }
        if (((e = Fn(kt.current)), Vi(t))) {
          ;(r = t.stateNode), (n = t.type)
          var i = t.memoizedProps
          switch (((r[St] = t), (r[Oo] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              K('cancel', r), K('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              K('load', r)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < po.length; o++) K(po[o], r)
              break
            case 'source':
              K('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              K('error', r), K('load', r)
              break
            case 'details':
              K('toggle', r)
              break
            case 'input':
              cd(r, i), K('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!i.multiple }),
                K('invalid', r)
              break
            case 'textarea':
              fd(r, i), K('invalid', r)
          }
          Ll(n, i), (o = null)
          for (var u in i)
            if (i.hasOwnProperty(u)) {
              var s = i[u]
              u === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      hi(r.textContent, s, e),
                    (o = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      hi(r.textContent, s, e),
                    (o = ['children', '' + s]))
                : Co.hasOwnProperty(u) &&
                  s != null &&
                  u === 'onScroll' &&
                  K('scroll', r)
            }
          switch (n) {
            case 'input':
              si(r), dd(r, i, !0)
              break
            case 'textarea':
              si(r), pd(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (r.onclick = cu)
          }
          ;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(u = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Dp(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = u.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = u.createElement(n, { is: r.is }))
                : ((e = u.createElement(n)),
                  n === 'select' &&
                    ((u = e),
                    r.multiple
                      ? (u.multiple = !0)
                      : r.size && (u.size = r.size)))
              : (e = u.createElementNS(e, n)),
            (e[St] = t),
            (e[Oo] = r),
            im(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((u = Il(n, r)), n)) {
              case 'dialog':
                K('cancel', e), K('close', e), (o = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                K('load', e), (o = r)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < po.length; o++) K(po[o], e)
                o = r
                break
              case 'source':
                K('error', e), (o = r)
                break
              case 'img':
              case 'image':
              case 'link':
                K('error', e), K('load', e), (o = r)
                break
              case 'details':
                K('toggle', e), (o = r)
                break
              case 'input':
                cd(e, r), (o = Rl(e, r)), K('invalid', e)
                break
              case 'option':
                o = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ne({}, r, { value: void 0 })),
                  K('invalid', e)
                break
              case 'textarea':
                fd(e, r), (o = Dl(e, r)), K('invalid', e)
                break
              default:
                o = r
            }
            Ll(n, o), (s = o)
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i]
                i === 'style'
                  ? Ip(e, l)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && Op(e, l))
                  : i === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && ko(e, l)
                    : typeof l == 'number' && ko(e, '' + l)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Co.hasOwnProperty(i)
                      ? l != null && i === 'onScroll' && K('scroll', e)
                      : l != null && Ha(e, i, l, u))
              }
            switch (n) {
              case 'input':
                si(e), dd(e, r, !1)
                break
              case 'textarea':
                si(e), pd(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + yn(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Ar(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Ar(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = cu)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return xe(t), null
    case 6:
      if (e && t.stateNode != null) sm(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(C(166))
        if (((n = Fn(Io.current)), Fn(kt.current), Vi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[St] = t),
            (i = r.nodeValue !== n) && ((e = Ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                hi(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hi(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[St] = t),
            (t.stateNode = r)
      }
      return xe(t), null
    case 13:
      if (
        (G(ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (J && Ge !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          x0(), Rr(), (t.flags |= 98560), (i = !1)
        else if (((i = Vi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(C(318))
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(C(317))
            i[St] = t
          } else
            Rr(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4)
          xe(t), (i = !1)
        } else Vt !== null && (ga(Vt), (Vt = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            (t.mode & 1) !== 0 &&
              (e === null || (ee.current & 1) !== 0
                ? de === 0 && (de = 3)
                : Nc())),
          t.updateQueue !== null && (t.flags |= 4),
          xe(t),
          null)
    case 4:
      return (
        Tr(), aa(e, t), e === null && To(t.stateNode.containerInfo), xe(t), null
      )
    case 10:
      return cc(t.type._context), xe(t), null
    case 17:
      return je(t.type) && du(), xe(t), null
    case 19:
      if ((G(ee), (i = t.memoizedState), i === null)) return xe(t), null
      if (((r = (t.flags & 128) !== 0), (u = i.rendering), u === null))
        if (r) no(i, !1)
        else {
          if (de !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((u = yu(e)), u !== null)) {
                for (
                  t.flags |= 128,
                    no(i, !1),
                    r = u.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (u = i.alternate),
                    u === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = u.childLanes),
                        (i.lanes = u.lanes),
                        (i.child = u.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = u.memoizedProps),
                        (i.memoizedState = u.memoizedState),
                        (i.updateQueue = u.updateQueue),
                        (i.type = u.type),
                        (e = u.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return q(ee, (ee.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null &&
            ue() > Or &&
            ((t.flags |= 128), (r = !0), no(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = yu(u)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              no(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !u.alternate && !J)
            )
              return xe(t), null
          } else
            2 * ue() - i.renderingStartTime > Or &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), no(i, !1), (t.lanes = 4194304))
        i.isBackwards
          ? ((u.sibling = t.child), (t.child = u))
          : ((n = i.last),
            n !== null ? (n.sibling = u) : (t.child = u),
            (i.last = u))
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ue()),
          (t.sibling = null),
          (n = ee.current),
          q(ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (xe(t), null)
    case 22:
    case 23:
      return (
        kc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? (We & 1073741824) !== 0 &&
            (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : xe(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(C(156, t.tag))
}
function UV(e, t) {
  switch ((uc(t), t.tag)) {
    case 1:
      return (
        je(t.type) && du(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Tr(),
        G(Me),
        G(Ne),
        hc(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      )
    case 5:
      return mc(t), null
    case 13:
      if ((G(ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340))
        Rr()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return G(ee), null
    case 4:
      return Tr(), null
    case 10:
      return cc(t.type._context), null
    case 22:
    case 23:
      return kc(), null
    case 24:
      return null
    default:
      return null
  }
}
var Ai = !1,
  ke = !1,
  MV = typeof WeakSet == 'function' ? WeakSet : Set,
  R = null
function gr(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        re(e, t, r)
      }
    else n.current = null
}
function ca(e, t, n) {
  try {
    n()
  } catch (r) {
    re(e, t, r)
  }
}
var nf = !1
function jV(e, t) {
  if (((ql = su), (e = d0()), oc(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var o = r.anchorOffset,
            i = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, i.nodeType
          } catch {
            n = null
            break e
          }
          var u = 0,
            s = -1,
            l = -1,
            a = 0,
            c = 0,
            f = e,
            d = null
          t: for (;;) {
            for (
              var V;
              f !== n || (o !== 0 && f.nodeType !== 3) || (s = u + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (l = u + r),
                f.nodeType === 3 && (u += f.nodeValue.length),
                (V = f.firstChild) !== null;

            )
              (d = f), (f = V)
            for (;;) {
              if (f === e) break t
              if (
                (d === n && ++a === o && (s = u),
                d === i && ++c === r && (l = u),
                (V = f.nextSibling) !== null)
              )
                break
              ;(f = d), (d = f.parentNode)
            }
            f = V
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (Kl = { focusedElem: e, selectionRange: n }, su = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e)
    else
      for (; R !== null; ) {
        t = R
        try {
          var h = t.alternate
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (h !== null) {
                  var g = h.memoizedProps,
                    k = h.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : mt(t.type, g),
                      k
                    )
                  m.__reactInternalSnapshotBeforeUpdate = p
                }
                break
              case 3:
                var A = t.stateNode.containerInfo
                A.nodeType === 1
                  ? (A.textContent = '')
                  : A.nodeType === 9 &&
                    A.documentElement &&
                    A.removeChild(A.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(C(163))
            }
        } catch (v) {
          re(t, t.return, v)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (R = e)
          break
        }
        R = t.return
      }
  return (h = nf), (nf = !1), h
}
function wo(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;(o.destroy = void 0), i !== void 0 && ca(t, n, i)
      }
      o = o.next
    } while (o !== r)
  }
}
function $u(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function da(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function lm(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), lm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[St], delete t[Oo], delete t[Xl], delete t[SV], delete t[xV])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function am(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function rf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || am(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function fa(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = cu))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (fa(e, t, n), e = e.sibling; e !== null; ) fa(e, t, n), (e = e.sibling)
}
function pa(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (pa(e, t, n), e = e.sibling; e !== null; ) pa(e, t, n), (e = e.sibling)
}
var Ae = null,
  ht = !1
function Kt(e, t, n) {
  for (n = n.child; n !== null; ) cm(e, t, n), (n = n.sibling)
}
function cm(e, t, n) {
  if (Ct && typeof Ct.onCommitFiberUnmount == 'function')
    try {
      Ct.onCommitFiberUnmount(Lu, n)
    } catch {}
  switch (n.tag) {
    case 5:
      ke || gr(n, t)
    case 6:
      var r = Ae,
        o = ht
      ;(Ae = null),
        Kt(e, t, n),
        (Ae = r),
        (ht = o),
        Ae !== null &&
          (ht
            ? ((e = Ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ae.removeChild(n.stateNode))
      break
    case 18:
      Ae !== null &&
        (ht
          ? ((e = Ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? Hs(e.parentNode, n)
              : e.nodeType === 1 && Hs(e, n),
            bo(e))
          : Hs(Ae, n.stateNode))
      break
    case 4:
      ;(r = Ae),
        (o = ht),
        (Ae = n.stateNode.containerInfo),
        (ht = !0),
        Kt(e, t, n),
        (Ae = r),
        (ht = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ke &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next
        do {
          var i = o,
            u = i.destroy
          ;(i = i.tag),
            u !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && ca(n, t, u),
            (o = o.next)
        } while (o !== r)
      }
      Kt(e, t, n)
      break
    case 1:
      if (
        !ke &&
        (gr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (s) {
          re(n, t, s)
        }
      Kt(e, t, n)
      break
    case 21:
      Kt(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((ke = (r = ke) || n.memoizedState !== null), Kt(e, t, n), (ke = r))
        : Kt(e, t, n)
      break
    default:
      Kt(e, t, n)
  }
}
function of(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new MV()),
      t.forEach(function (r) {
        var o = YV.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(o, o))
      })
  }
}
function pt(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r]
      try {
        var i = e,
          u = t,
          s = u
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ;(Ae = s.stateNode), (ht = !1)
              break e
            case 3:
              ;(Ae = s.stateNode.containerInfo), (ht = !0)
              break e
            case 4:
              ;(Ae = s.stateNode.containerInfo), (ht = !0)
              break e
          }
          s = s.return
        }
        if (Ae === null) throw Error(C(160))
        cm(i, u, o), (Ae = null), (ht = !1)
        var l = o.alternate
        l !== null && (l.return = null), (o.return = null)
      } catch (a) {
        re(o, t, a)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) dm(t, e), (t = t.sibling)
}
function dm(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((pt(t, e), wt(e), r & 4)) {
        try {
          wo(3, e, e.return), $u(3, e)
        } catch (g) {
          re(e, e.return, g)
        }
        try {
          wo(5, e, e.return)
        } catch (g) {
          re(e, e.return, g)
        }
      }
      break
    case 1:
      pt(t, e), wt(e), r & 512 && n !== null && gr(n, n.return)
      break
    case 5:
      if (
        (pt(t, e),
        wt(e),
        r & 512 && n !== null && gr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode
        try {
          ko(o, '')
        } catch (g) {
          re(e, e.return, g)
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          u = n !== null ? n.memoizedProps : i,
          s = e.type,
          l = e.updateQueue
        if (((e.updateQueue = null), l !== null))
          try {
            s === 'input' && i.type === 'radio' && i.name != null && Bp(o, i),
              Il(s, u)
            var a = Il(s, i)
            for (u = 0; u < l.length; u += 2) {
              var c = l[u],
                f = l[u + 1]
              c === 'style'
                ? Ip(o, f)
                : c === 'dangerouslySetInnerHTML'
                ? Op(o, f)
                : c === 'children'
                ? ko(o, f)
                : Ha(o, c, f, a)
            }
            switch (s) {
              case 'input':
                Bl(o, i)
                break
              case 'textarea':
                Tp(o, i)
                break
              case 'select':
                var d = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!i.multiple
                var V = i.value
                V != null
                  ? Ar(o, !!i.multiple, V, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Ar(o, !!i.multiple, i.defaultValue, !0)
                      : Ar(o, !!i.multiple, i.multiple ? [] : '', !1))
            }
            o[Oo] = i
          } catch (g) {
            re(e, e.return, g)
          }
      }
      break
    case 6:
      if ((pt(t, e), wt(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162))
        ;(o = e.stateNode), (i = e.memoizedProps)
        try {
          o.nodeValue = i
        } catch (g) {
          re(e, e.return, g)
        }
      }
      break
    case 3:
      if (
        (pt(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          bo(t.containerInfo)
        } catch (g) {
          re(e, e.return, g)
        }
      break
    case 4:
      pt(t, e), wt(e)
      break
    case 13:
      pt(t, e),
        wt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (xc = ue())),
        r & 4 && of(e)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ke = (a = ke) || c), pt(t, e), (ke = a)) : pt(t, e),
        wt(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !c && (e.mode & 1) !== 0)
        )
          for (R = e, c = e.child; c !== null; ) {
            for (f = R = c; R !== null; ) {
              switch (((d = R), (V = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  wo(4, d, d.return)
                  break
                case 1:
                  gr(d, d.return)
                  var h = d.stateNode
                  if (typeof h.componentWillUnmount == 'function') {
                    ;(r = d), (n = d.return)
                    try {
                      ;(t = r),
                        (h.props = t.memoizedProps),
                        (h.state = t.memoizedState),
                        h.componentWillUnmount()
                    } catch (g) {
                      re(r, n, g)
                    }
                  }
                  break
                case 5:
                  gr(d, d.return)
                  break
                case 22:
                  if (d.memoizedState !== null) {
                    sf(f)
                    continue
                  }
              }
              V !== null ? ((V.return = d), (R = V)) : sf(f)
            }
            c = c.sibling
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f
              try {
                ;(o = f.stateNode),
                  a
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((s = f.stateNode),
                      (l = f.memoizedProps.style),
                      (u =
                        l != null && l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (s.style.display = Lp('display', u)))
              } catch (g) {
                re(e, e.return, g)
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = a ? '' : f.memoizedProps
              } catch (g) {
                re(e, e.return, g)
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ;(f.child.return = f), (f = f.child)
            continue
          }
          if (f === e) break e
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e
            c === f && (c = null), (f = f.return)
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling)
        }
      }
      break
    case 19:
      pt(t, e), wt(e), r & 4 && of(e)
      break
    case 21:
      break
    default:
      pt(t, e), wt(e)
  }
}
function wt(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (am(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(C(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode
          r.flags & 32 && (ko(o, ''), (r.flags &= -33))
          var i = rf(e)
          pa(e, i, o)
          break
        case 3:
        case 4:
          var u = r.stateNode.containerInfo,
            s = rf(e)
          fa(e, s, u)
          break
        default:
          throw Error(C(161))
      }
    } catch (l) {
      re(e, e.return, l)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function zV(e, t, n) {
  ;(R = e), fm(e)
}
function fm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var o = R,
      i = o.child
    if (o.tag === 22 && r) {
      var u = o.memoizedState !== null || Ai
      if (!u) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || ke
        s = Ai
        var a = ke
        if (((Ai = u), (ke = l) && !a))
          for (R = o; R !== null; )
            (u = R),
              (l = u.child),
              u.tag === 22 && u.memoizedState !== null
                ? lf(o)
                : l !== null
                ? ((l.return = u), (R = l))
                : lf(o)
        for (; i !== null; ) (R = i), fm(i), (i = i.sibling)
        ;(R = o), (Ai = s), (ke = a)
      }
      uf(e)
    } else
      (o.subtreeFlags & 8772) !== 0 && i !== null
        ? ((i.return = o), (R = i))
        : uf(e)
  }
}
function uf(e) {
  for (; R !== null; ) {
    var t = R
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ke || $u(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !ke)
                if (n === null) r.componentDidMount()
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : mt(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var i = t.updateQueue
              i !== null && zd(t, i, r)
              break
            case 3:
              var u = t.updateQueue
              if (u !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                zd(t, u, n)
              }
              break
            case 5:
              var s = t.stateNode
              if (n === null && t.flags & 4) {
                n = s
                var l = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus()
                    break
                  case 'img':
                    l.src && (n.src = l.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate
                if (a !== null) {
                  var c = a.memoizedState
                  if (c !== null) {
                    var f = c.dehydrated
                    f !== null && bo(f)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(C(163))
          }
        ke || (t.flags & 512 && da(t))
      } catch (d) {
        re(t, t.return, d)
      }
    }
    if (t === e) {
      R = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (R = n)
      break
    }
    R = t.return
  }
}
function sf(e) {
  for (; R !== null; ) {
    var t = R
    if (t === e) {
      R = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (R = n)
      break
    }
    R = t.return
  }
}
function lf(e) {
  for (; R !== null; ) {
    var t = R
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            $u(4, t)
          } catch (l) {
            re(t, n, l)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var o = t.return
            try {
              r.componentDidMount()
            } catch (l) {
              re(t, o, l)
            }
          }
          var i = t.return
          try {
            da(t)
          } catch (l) {
            re(t, i, l)
          }
          break
        case 5:
          var u = t.return
          try {
            da(t)
          } catch (l) {
            re(t, u, l)
          }
      }
    } catch (l) {
      re(t, t.return, l)
    }
    if (t === e) {
      R = null
      break
    }
    var s = t.sibling
    if (s !== null) {
      ;(s.return = t.return), (R = s)
      break
    }
    R = t.return
  }
}
var QV = Math.ceil,
  wu = Ht.ReactCurrentDispatcher,
  Ec = Ht.ReactCurrentOwner,
  ut = Ht.ReactCurrentBatchConfig,
  j = 0,
  ge = null,
  se = null,
  ve = 0,
  We = 0,
  yr = Sn(0),
  de = 0,
  jo = null,
  Wn = 0,
  Hu = 0,
  Sc = 0,
  Eo = null,
  Ie = null,
  xc = 0,
  Or = 1 / 0,
  Bt = null,
  Eu = !1,
  ma = null,
  fn = null,
  vi = !1,
  rn = null,
  Su = 0,
  So = 0,
  ha = null,
  Di = -1,
  Oi = 0
function Re() {
  return (j & 6) !== 0 ? ue() : Di !== -1 ? Di : (Di = ue())
}
function pn(e) {
  return (e.mode & 1) === 0
    ? 1
    : (j & 2) !== 0 && ve !== 0
    ? ve & -ve
    : kV.transition !== null
    ? (Oi === 0 && (Oi = Gp()), Oi)
    : ((e = $),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : n0(e.type))),
      e)
}
function At(e, t, n, r) {
  if (50 < So) throw ((So = 0), (ha = null), Error(C(185)))
  qo(e, n, r),
    ((j & 2) === 0 || e !== ge) &&
      (e === ge && ((j & 2) === 0 && (Hu |= n), de === 4 && Zt(e, ve)),
      ze(e, r),
      n === 1 &&
        j === 0 &&
        (t.mode & 1) === 0 &&
        ((Or = ue() + 500), ju && xn()))
}
function ze(e, t) {
  var n = e.callbackNode
  k4(e, t)
  var r = uu(e, e === ge ? ve : 0)
  if (r === 0)
    n !== null && Vd(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Vd(n), t === 1))
      e.tag === 0 ? CV(af.bind(null, e)) : w0(af.bind(null, e)),
        wV(function () {
          ;(j & 6) === 0 && xn()
        }),
        (n = null)
    else {
      switch (Yp(r)) {
        case 1:
          n = Ya
          break
        case 4:
          n = qp
          break
        case 16:
          n = iu
          break
        case 536870912:
          n = Kp
          break
        default:
          n = iu
      }
      n = vm(n, pm.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function pm(e, t) {
  if (((Di = -1), (Oi = 0), (j & 6) !== 0)) throw Error(C(327))
  var n = e.callbackNode
  if (xr() && e.callbackNode !== n) return null
  var r = uu(e, e === ge ? ve : 0)
  if (r === 0) return null
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = xu(e, r)
  else {
    t = r
    var o = j
    j |= 2
    var i = hm()
    ;(ge !== e || ve !== t) && ((Bt = null), (Or = ue() + 500), Mn(e, t))
    do
      try {
        WV()
        break
      } catch (s) {
        mm(e, s)
      }
    while (1)
    ac(),
      (wu.current = i),
      (j = o),
      se !== null ? (t = 0) : ((ge = null), (ve = 0), (t = de))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = zl(e)), o !== 0 && ((r = o), (t = Va(e, o)))), t === 1)
    )
      throw ((n = jo), Mn(e, 0), Zt(e, r), ze(e, ue()), n)
    if (t === 6) Zt(e, r)
    else {
      if (
        ((o = e.current.alternate),
        (r & 30) === 0 &&
          !$V(o) &&
          ((t = xu(e, r)),
          t === 2 && ((i = zl(e)), i !== 0 && ((r = i), (t = Va(e, i)))),
          t === 1))
      )
        throw ((n = jo), Mn(e, 0), Zt(e, r), ze(e, ue()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345))
        case 2:
          Dn(e, Ie, Bt)
          break
        case 3:
          if (
            (Zt(e, r), (r & 130023424) === r && ((t = xc + 500 - ue()), 10 < t))
          ) {
            if (uu(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Re(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = Yl(Dn.bind(null, e, Ie, Bt), t)
            break
          }
          Dn(e, Ie, Bt)
          break
        case 4:
          if ((Zt(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var u = 31 - yt(r)
            ;(i = 1 << u), (u = t[u]), u > o && (o = u), (r &= ~i)
          }
          if (
            ((r = o),
            (r = ue() - r),
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
                : 1960 * QV(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Yl(Dn.bind(null, e, Ie, Bt), r)
            break
          }
          Dn(e, Ie, Bt)
          break
        case 5:
          Dn(e, Ie, Bt)
          break
        default:
          throw Error(C(329))
      }
    }
  }
  return ze(e, ue()), e.callbackNode === n ? pm.bind(null, e) : null
}
function Va(e, t) {
  var n = Eo
  return (
    e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256),
    (e = xu(e, t)),
    e !== 2 && ((t = Ie), (Ie = n), t !== null && ga(t)),
    e
  )
}
function ga(e) {
  Ie === null ? (Ie = e) : Ie.push.apply(Ie, e)
}
function $V(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot
          o = o.value
          try {
            if (!vt(i(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function Zt(e, t) {
  for (
    t &= ~Sc,
      t &= ~Hu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - yt(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function af(e) {
  if ((j & 6) !== 0) throw Error(C(327))
  xr()
  var t = uu(e, 0)
  if ((t & 1) === 0) return ze(e, ue()), null
  var n = xu(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = zl(e)
    r !== 0 && ((t = r), (n = Va(e, r)))
  }
  if (n === 1) throw ((n = jo), Mn(e, 0), Zt(e, t), ze(e, ue()), n)
  if (n === 6) throw Error(C(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Dn(e, Ie, Bt),
    ze(e, ue()),
    null
  )
}
function Cc(e, t) {
  var n = j
  j |= 1
  try {
    return e(t)
  } finally {
    ;(j = n), j === 0 && ((Or = ue() + 500), ju && xn())
  }
}
function qn(e) {
  rn !== null && rn.tag === 0 && (j & 6) === 0 && xr()
  var t = j
  j |= 1
  var n = ut.transition,
    r = $
  try {
    if (((ut.transition = null), ($ = 1), e)) return e()
  } finally {
    ;($ = r), (ut.transition = n), (j = t), (j & 6) === 0 && xn()
  }
}
function kc() {
  ;(We = yr.current), G(yr)
}
function Mn(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), vV(n)), se !== null))
    for (n = se.return; n !== null; ) {
      var r = n
      switch ((uc(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && du()
          break
        case 3:
          Tr(), G(Me), G(Ne), hc()
          break
        case 5:
          mc(r)
          break
        case 4:
          Tr()
          break
        case 13:
          G(ee)
          break
        case 19:
          G(ee)
          break
        case 10:
          cc(r.type._context)
          break
        case 22:
        case 23:
          kc()
      }
      n = n.return
    }
  if (
    ((ge = e),
    (se = e = mn(e.current, null)),
    (ve = We = t),
    (de = 0),
    (jo = null),
    (Sc = Hu = Wn = 0),
    (Ie = Eo = null),
    In !== null)
  ) {
    for (t = 0; t < In.length; t++)
      if (((n = In[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var o = r.next,
          i = n.pending
        if (i !== null) {
          var u = i.next
          ;(i.next = o), (r.next = u)
        }
        n.pending = r
      }
    In = null
  }
  return e
}
function mm(e, t) {
  do {
    var n = se
    try {
      if ((ac(), (Ri.current = vu), Au)) {
        for (var r = te.memoizedState; r !== null; ) {
          var o = r.queue
          o !== null && (o.pending = null), (r = r.next)
        }
        Au = !1
      }
      if (
        ((Hn = 0),
        (he = ce = te = null),
        (vo = !1),
        (Fo = 0),
        (Ec.current = null),
        n === null || n.return === null)
      ) {
        ;(de = 1), (jo = t), (se = null)
        break
      }
      e: {
        var i = e,
          u = n.return,
          s = n,
          l = t
        if (
          ((t = ve),
          (s.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var a = l,
            c = s,
            f = c.tag
          if ((c.mode & 1) === 0 && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var V = Gd(u)
          if (V !== null) {
            ;(V.flags &= -257),
              Yd(V, u, s, i, t),
              V.mode & 1 && Kd(i, a, t),
              (t = V),
              (l = a)
            var h = t.updateQueue
            if (h === null) {
              var g = new Set()
              g.add(l), (t.updateQueue = g)
            } else h.add(l)
            break e
          } else {
            if ((t & 1) === 0) {
              Kd(i, a, t), Nc()
              break e
            }
            l = Error(C(426))
          }
        } else if (J && s.mode & 1) {
          var k = Gd(u)
          if (k !== null) {
            ;(k.flags & 65536) === 0 && (k.flags |= 256),
              Yd(k, u, s, i, t),
              sc(Dr(l, s))
            break e
          }
        }
        ;(i = l = Dr(l, s)),
          de !== 4 && (de = 2),
          Eo === null ? (Eo = [i]) : Eo.push(i),
          (i = u)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var m = X0(i, l, t)
              jd(i, m)
              break e
            case 1:
              s = l
              var p = i.type,
                A = i.stateNode
              if (
                (i.flags & 128) === 0 &&
                (typeof p.getDerivedStateFromError == 'function' ||
                  (A !== null &&
                    typeof A.componentDidCatch == 'function' &&
                    (fn === null || !fn.has(A))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var v = J0(i, s, t)
                jd(i, v)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      gm(n)
    } catch (w) {
      ;(t = w), se === n && n !== null && (se = n = n.return)
      continue
    }
    break
  } while (1)
}
function hm() {
  var e = wu.current
  return (wu.current = vu), e === null ? vu : e
}
function Nc() {
  ;(de === 0 || de === 3 || de === 2) && (de = 4),
    ge === null ||
      ((Wn & 268435455) === 0 && (Hu & 268435455) === 0) ||
      Zt(ge, ve)
}
function xu(e, t) {
  var n = j
  j |= 2
  var r = hm()
  ;(ge !== e || ve !== t) && ((Bt = null), Mn(e, t))
  do
    try {
      HV()
      break
    } catch (o) {
      mm(e, o)
    }
  while (1)
  if ((ac(), (j = n), (wu.current = r), se !== null)) throw Error(C(261))
  return (ge = null), (ve = 0), de
}
function HV() {
  for (; se !== null; ) Vm(se)
}
function WV() {
  for (; se !== null && !g4(); ) Vm(se)
}
function Vm(e) {
  var t = Am(e.alternate, e, We)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? gm(e) : (se = t),
    (Ec.current = null)
}
function gm(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = FV(n, t, We)), n !== null)) {
        se = n
        return
      }
    } else {
      if (((n = UV(n, t)), n !== null)) {
        ;(n.flags &= 32767), (se = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(de = 6), (se = null)
        return
      }
    }
    if (((t = t.sibling), t !== null)) {
      se = t
      return
    }
    se = t = e
  } while (t !== null)
  de === 0 && (de = 5)
}
function Dn(e, t, n) {
  var r = $,
    o = ut.transition
  try {
    ;(ut.transition = null), ($ = 1), qV(e, t, n, r)
  } finally {
    ;(ut.transition = o), ($ = r)
  }
  return null
}
function qV(e, t, n, r) {
  do xr()
  while (rn !== null)
  if ((j & 6) !== 0) throw Error(C(327))
  n = e.finishedWork
  var o = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = n.lanes | n.childLanes
  if (
    (N4(e, i),
    e === ge && ((se = ge = null), (ve = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      vi ||
      ((vi = !0),
      vm(iu, function () {
        return xr(), null
      })),
    (i = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || i)
  ) {
    ;(i = ut.transition), (ut.transition = null)
    var u = $
    $ = 1
    var s = j
    ;(j |= 4),
      (Ec.current = null),
      jV(e, n),
      dm(n, e),
      pV(Kl),
      (su = !!ql),
      (Kl = ql = null),
      (e.current = n),
      zV(n),
      y4(),
      (j = s),
      ($ = u),
      (ut.transition = i)
  } else e.current = n
  if (
    (vi && ((vi = !1), (rn = e), (Su = o)),
    (i = e.pendingLanes),
    i === 0 && (fn = null),
    w4(n.stateNode),
    ze(e, ue()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest })
  if (Eu) throw ((Eu = !1), (e = ma), (ma = null), e)
  return (
    (Su & 1) !== 0 && e.tag !== 0 && xr(),
    (i = e.pendingLanes),
    (i & 1) !== 0 ? (e === ha ? So++ : ((So = 0), (ha = e))) : (So = 0),
    xn(),
    null
  )
}
function xr() {
  if (rn !== null) {
    var e = Yp(Su),
      t = ut.transition,
      n = $
    try {
      if (((ut.transition = null), ($ = 16 > e ? 16 : e), rn === null))
        var r = !1
      else {
        if (((e = rn), (rn = null), (Su = 0), (j & 6) !== 0))
          throw Error(C(331))
        var o = j
        for (j |= 4, R = e.current; R !== null; ) {
          var i = R,
            u = i.child
          if ((R.flags & 16) !== 0) {
            var s = i.deletions
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var a = s[l]
                for (R = a; R !== null; ) {
                  var c = R
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wo(8, c, i)
                  }
                  var f = c.child
                  if (f !== null) (f.return = c), (R = f)
                  else
                    for (; R !== null; ) {
                      c = R
                      var d = c.sibling,
                        V = c.return
                      if ((lm(c), c === a)) {
                        R = null
                        break
                      }
                      if (d !== null) {
                        ;(d.return = V), (R = d)
                        break
                      }
                      R = V
                    }
                }
              }
              var h = i.alternate
              if (h !== null) {
                var g = h.child
                if (g !== null) {
                  h.child = null
                  do {
                    var k = g.sibling
                    ;(g.sibling = null), (g = k)
                  } while (g !== null)
                }
              }
              R = i
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && u !== null)
            (u.return = i), (R = u)
          else
            e: for (; R !== null; ) {
              if (((i = R), (i.flags & 2048) !== 0))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wo(9, i, i.return)
                }
              var m = i.sibling
              if (m !== null) {
                ;(m.return = i.return), (R = m)
                break e
              }
              R = i.return
            }
        }
        var p = e.current
        for (R = p; R !== null; ) {
          u = R
          var A = u.child
          if ((u.subtreeFlags & 2064) !== 0 && A !== null)
            (A.return = u), (R = A)
          else
            e: for (u = p; R !== null; ) {
              if (((s = R), (s.flags & 2048) !== 0))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $u(9, s)
                  }
                } catch (w) {
                  re(s, s.return, w)
                }
              if (s === u) {
                R = null
                break e
              }
              var v = s.sibling
              if (v !== null) {
                ;(v.return = s.return), (R = v)
                break e
              }
              R = s.return
            }
        }
        if (
          ((j = o), xn(), Ct && typeof Ct.onPostCommitFiberRoot == 'function')
        )
          try {
            Ct.onPostCommitFiberRoot(Lu, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;($ = n), (ut.transition = t)
    }
  }
  return !1
}
function cf(e, t, n) {
  ;(t = Dr(n, t)),
    (t = X0(e, t, 1)),
    (e = dn(e, t, 1)),
    (t = Re()),
    e !== null && (qo(e, 1, t), ze(e, t))
}
function re(e, t, n) {
  if (e.tag === 3) cf(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        cf(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (fn === null || !fn.has(r)))
        ) {
          ;(e = Dr(n, e)),
            (e = J0(t, e, 1)),
            (t = dn(t, e, 1)),
            (e = Re()),
            t !== null && (qo(t, 1, e), ze(t, e))
          break
        }
      }
      t = t.return
    }
}
function KV(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = Re()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ge === e &&
      (ve & n) === n &&
      (de === 4 || (de === 3 && (ve & 130023424) === ve && 500 > ue() - xc)
        ? Mn(e, 0)
        : (Sc |= n)),
    ze(e, t)
}
function ym(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = ci), (ci <<= 1), (ci & 130023424) === 0 && (ci = 4194304)))
  var n = Re()
  ;(e = zt(e, t)), e !== null && (qo(e, t, n), ze(e, n))
}
function GV(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), ym(e, n)
}
function YV(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState
      o !== null && (n = o.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(C(314))
  }
  r !== null && r.delete(t), ym(e, n)
}
var Am
Am = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Me.current) Ue = !0
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (Ue = !1), IV(e, t, n)
      Ue = (e.flags & 131072) !== 0
    }
  else (Ue = !1), J && (t.flags & 1048576) !== 0 && E0(t, mu, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      Ti(e, t), (e = t.pendingProps)
      var o = br(t, Ne.current)
      Sr(t, n), (o = gc(null, t, r, e, o, n))
      var i = yc()
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            je(r) ? ((i = !0), fu(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            fc(t),
            (o.updater = zu),
            (t.stateNode = o),
            (o._reactInternals = t),
            ra(t, r, e, n),
            (t = ua(null, t, r, !0, i, n)))
          : ((t.tag = 0), J && i && ic(t), be(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (Ti(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = JV(r)),
          (e = mt(r, e)),
          o)
        ) {
          case 0:
            t = ia(null, t, r, e, n)
            break e
          case 1:
            t = Zd(null, t, r, e, n)
            break e
          case 11:
            t = Xd(null, t, r, e, n)
            break e
          case 14:
            t = Jd(null, t, r, mt(r.type, e), n)
            break e
        }
        throw Error(C(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mt(r, o)),
        ia(e, t, r, o, n)
      )
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mt(r, o)),
        Zd(e, t, r, o, n)
      )
    case 3:
      e: {
        if ((nm(t), e === null)) throw Error(C(387))
        ;(r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          k0(e, t),
          gu(t, r, null, n)
        var u = t.memoizedState
        if (((r = u.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: u.cache,
              pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
              transitions: u.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ;(o = Dr(Error(C(423)), t)), (t = ef(e, t, r, n, o))
            break e
          } else if (r !== o) {
            ;(o = Dr(Error(C(424)), t)), (t = ef(e, t, r, n, o))
            break e
          } else
            for (
              Ge = cn(t.stateNode.containerInfo.firstChild),
                Ye = t,
                J = !0,
                Vt = null,
                n = b0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Rr(), r === o)) {
            t = Qt(e, t, n)
            break e
          }
          be(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        R0(t),
        e === null && ea(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (u = o.children),
        Gl(r, o) ? (u = null) : i !== null && Gl(r, i) && (t.flags |= 32),
        tm(e, t),
        be(e, t, u, n),
        t.child
      )
    case 6:
      return e === null && ea(t), null
    case 13:
      return rm(e, t, n)
    case 4:
      return (
        pc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Br(t, null, r, n)) : be(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mt(r, o)),
        Xd(e, t, r, o, n)
      )
    case 7:
      return be(e, t, t.pendingProps, n), t.child
    case 8:
      return be(e, t, t.pendingProps.children, n), t.child
    case 12:
      return be(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (u = o.value),
          q(hu, r._currentValue),
          (r._currentValue = u),
          i !== null)
        )
          if (vt(i.value, u)) {
            if (i.children === o.children && !Me.current) {
              t = Qt(e, t, n)
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies
              if (s !== null) {
                u = i.child
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      ;(l = It(-1, n & -n)), (l.tag = 2)
                      var a = i.updateQueue
                      if (a !== null) {
                        a = a.shared
                        var c = a.pending
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (a.pending = l)
                      }
                    }
                    ;(i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      ta(i.return, n, t),
                      (s.lanes |= n)
                    break
                  }
                  l = l.next
                }
              } else if (i.tag === 10) u = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((u = i.return), u === null)) throw Error(C(341))
                ;(u.lanes |= n),
                  (s = u.alternate),
                  s !== null && (s.lanes |= n),
                  ta(u, n, t),
                  (u = i.sibling)
              } else u = i.child
              if (u !== null) u.return = i
              else
                for (u = i; u !== null; ) {
                  if (u === t) {
                    u = null
                    break
                  }
                  if (((i = u.sibling), i !== null)) {
                    ;(i.return = u.return), (u = i)
                    break
                  }
                  u = u.return
                }
              i = u
            }
        be(e, t, o.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Sr(t, n),
        (o = st(o)),
        (r = r(o)),
        (t.flags |= 1),
        be(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (o = mt(r, t.pendingProps)),
        (o = mt(r.type, o)),
        Jd(e, t, r, o, n)
      )
    case 15:
      return Z0(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mt(r, o)),
        Ti(e, t),
        (t.tag = 1),
        je(r) ? ((e = !0), fu(t)) : (e = !1),
        Sr(t, n),
        P0(t, r, o),
        ra(t, r, o, n),
        ua(null, t, r, !0, e, n)
      )
    case 19:
      return om(e, t, n)
    case 22:
      return em(e, t, n)
  }
  throw Error(C(156, t.tag))
}
function vm(e, t) {
  return Wp(e, t)
}
function XV(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function it(e, t, n, r) {
  return new XV(e, t, n, r)
}
function Pc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function JV(e) {
  if (typeof e == 'function') return Pc(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === qa)) return 11
    if (e === Ka) return 14
  }
  return 2
}
function mn(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = it(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function Li(e, t, n, r, o, i) {
  var u = 2
  if (((r = e), typeof e == 'function')) Pc(e) && (u = 1)
  else if (typeof e == 'string') u = 5
  else
    e: switch (e) {
      case lr:
        return jn(n.children, o, i, t)
      case Wa:
        ;(u = 8), (o |= 8)
        break
      case Nl:
        return (e = it(12, n, t, o | 2)), (e.elementType = Nl), (e.lanes = i), e
      case Pl:
        return (e = it(13, n, t, o)), (e.elementType = Pl), (e.lanes = i), e
      case _l:
        return (e = it(19, n, t, o)), (e.elementType = _l), (e.lanes = i), e
      case _p:
        return Wu(n, o, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Np:
              u = 10
              break e
            case Pp:
              u = 9
              break e
            case qa:
              u = 11
              break e
            case Ka:
              u = 14
              break e
            case Yt:
              ;(u = 16), (r = null)
              break e
          }
        throw Error(C(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = it(u, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  )
}
function jn(e, t, n, r) {
  return (e = it(7, e, r, t)), (e.lanes = n), e
}
function Wu(e, t, n, r) {
  return (
    (e = it(22, e, r, t)),
    (e.elementType = _p),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Zs(e, t, n) {
  return (e = it(6, e, null, t)), (e.lanes = n), e
}
function el(e, t, n) {
  return (
    (t = it(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function ZV(e, t, n, r, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ds(0)),
    (this.expirationTimes = Ds(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ds(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function _c(e, t, n, r, o, i, u, s, l) {
  return (
    (e = new ZV(e, t, n, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = it(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fc(i),
    e
  )
}
function eg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: sr,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function wm(e) {
  if (!e) return An
  e = e._reactInternals
  e: {
    if (Jn(e) !== e || e.tag !== 1) throw Error(C(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(C(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (je(n)) return v0(e, n, t)
  }
  return t
}
function Em(e, t, n, r, o, i, u, s, l) {
  return (
    (e = _c(n, r, !0, e, o, i, u, s, l)),
    (e.context = wm(null)),
    (n = e.current),
    (r = Re()),
    (o = pn(n)),
    (i = It(r, o)),
    (i.callback = t != null ? t : null),
    dn(n, i, o),
    (e.current.lanes = o),
    qo(e, o, r),
    ze(e, r),
    e
  )
}
function qu(e, t, n, r) {
  var o = t.current,
    i = Re(),
    u = pn(o)
  return (
    (n = wm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = It(i, u)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dn(o, t, u)),
    e !== null && (At(e, o, u, i), bi(e, o, u)),
    u
  )
}
function Cu(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function df(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function bc(e, t) {
  df(e, t), (e = e.alternate) && df(e, t)
}
function tg() {
  return null
}
var Sm =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Rc(e) {
  this._internalRoot = e
}
Ku.prototype.render = Rc.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(C(409))
  qu(e, t, null, null)
}
Ku.prototype.unmount = Rc.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    qn(function () {
      qu(null, e, null, null)
    }),
      (t[jt] = null)
  }
}
function Ku(e) {
  this._internalRoot = e
}
Ku.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Zp()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < Jt.length && t !== 0 && t < Jt[n].priority; n++);
    Jt.splice(n, 0, e), n === 0 && t0(e)
  }
}
function Bc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Gu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function ff() {}
function ng(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r
      r = function () {
        var a = Cu(u)
        i.call(a)
      }
    }
    var u = Em(t, r, e, 0, null, !1, !1, '', ff)
    return (
      (e._reactRootContainer = u),
      (e[jt] = u.current),
      To(e.nodeType === 8 ? e.parentNode : e),
      qn(),
      u
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof r == 'function') {
    var s = r
    r = function () {
      var a = Cu(l)
      s.call(a)
    }
  }
  var l = _c(e, 0, !1, null, null, !1, !1, '', ff)
  return (
    (e._reactRootContainer = l),
    (e[jt] = l.current),
    To(e.nodeType === 8 ? e.parentNode : e),
    qn(function () {
      qu(t, l, n, r)
    }),
    l
  )
}
function Yu(e, t, n, r, o) {
  var i = n._reactRootContainer
  if (i) {
    var u = i
    if (typeof o == 'function') {
      var s = o
      o = function () {
        var l = Cu(u)
        s.call(l)
      }
    }
    qu(t, u, e, o)
  } else u = ng(n, t, e, o, r)
  return Cu(u)
}
Xp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = fo(t.pendingLanes)
        n !== 0 &&
          (Xa(t, n | 1),
          ze(t, ue()),
          (j & 6) === 0 && ((Or = ue() + 500), xn()))
      }
      break
    case 13:
      qn(function () {
        var r = zt(e, 1)
        if (r !== null) {
          var o = Re()
          At(r, e, 1, o)
        }
      }),
        bc(e, 1)
  }
}
Ja = function (e) {
  if (e.tag === 13) {
    var t = zt(e, 134217728)
    if (t !== null) {
      var n = Re()
      At(t, e, 134217728, n)
    }
    bc(e, 134217728)
  }
}
Jp = function (e) {
  if (e.tag === 13) {
    var t = pn(e),
      n = zt(e, t)
    if (n !== null) {
      var r = Re()
      At(n, e, t, r)
    }
    bc(e, t)
  }
}
Zp = function () {
  return $
}
e0 = function (e, t) {
  var n = $
  try {
    return ($ = e), t()
  } finally {
    $ = n
  }
}
Ul = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Bl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var o = Mu(r)
            if (!o) throw Error(C(90))
            Rp(r), Bl(r, o)
          }
        }
      }
      break
    case 'textarea':
      Tp(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Ar(e, !!n.multiple, t, !1)
  }
}
Mp = Cc
jp = qn
var rg = { usingClientEntryPoint: !1, Events: [Go, fr, Mu, Fp, Up, Cc] },
  ro = {
    findFiberByHostInstance: Ln,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  og = {
    bundleType: ro.bundleType,
    version: ro.version,
    rendererPackageName: ro.rendererPackageName,
    rendererConfig: ro.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ht.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = $p(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ro.findFiberByHostInstance || tg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var wi = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!wi.isDisabled && wi.supportsFiber)
    try {
      ;(Lu = wi.inject(og)), (Ct = wi)
    } catch {}
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rg
Ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Bc(t)) throw Error(C(200))
  return eg(e, t, null, n)
}
Ze.createRoot = function (e, t) {
  if (!Bc(e)) throw Error(C(299))
  var n = !1,
    r = '',
    o = Sm
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = _c(e, 1, !1, null, null, n, !1, r, o)),
    (e[jt] = t.current),
    To(e.nodeType === 8 ? e.parentNode : e),
    new Rc(t)
  )
}
Ze.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(C(188))
      : ((e = Object.keys(e).join(',')), Error(C(268, e)))
  return (e = $p(t)), (e = e === null ? null : e.stateNode), e
}
Ze.flushSync = function (e) {
  return qn(e)
}
Ze.hydrate = function (e, t, n) {
  if (!Gu(t)) throw Error(C(200))
  return Yu(null, e, t, !0, n)
}
Ze.hydrateRoot = function (e, t, n) {
  if (!Bc(e)) throw Error(C(405))
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    u = Sm
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
    (t = Em(t, null, e, 1, n != null ? n : null, o, !1, i, u)),
    (e[jt] = t.current),
    To(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o)
  return new Ku(t)
}
Ze.render = function (e, t, n) {
  if (!Gu(t)) throw Error(C(200))
  return Yu(null, e, t, !1, n)
}
Ze.unmountComponentAtNode = function (e) {
  if (!Gu(e)) throw Error(C(40))
  return e._reactRootContainer
    ? (qn(function () {
        Yu(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[jt] = null)
        })
      }),
      !0)
    : !1
}
Ze.unstable_batchedUpdates = Cc
Ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Gu(n)) throw Error(C(200))
  if (e == null || e._reactInternals === void 0) throw Error(C(38))
  return Yu(e, t, n, !1, r)
}
Ze.version = '18.2.0-next-9e3b772b8-20220608'
;(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
      } catch (n) {
        console.error(n)
      }
  }
  t(), (e.exports = Ze)
})(Fa)
var pf = Fa.exports
;(tu.createRoot = pf.createRoot), (tu.hydrateRoot = pf.hydrateRoot)
var xm = { exports: {} },
  Cm = {}
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lr = N.exports
function ig(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var ug = typeof Object.is == 'function' ? Object.is : ig,
  sg = Lr.useState,
  lg = Lr.useEffect,
  ag = Lr.useLayoutEffect,
  cg = Lr.useDebugValue
function dg(e, t) {
  var n = t(),
    r = sg({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1]
  return (
    ag(
      function () {
        ;(o.value = n), (o.getSnapshot = t), tl(o) && i({ inst: o })
      },
      [e, n, t]
    ),
    lg(
      function () {
        return (
          tl(o) && i({ inst: o }),
          e(function () {
            tl(o) && i({ inst: o })
          })
        )
      },
      [e]
    ),
    cg(n),
    n
  )
}
function tl(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !ug(e, n)
  } catch {
    return !0
  }
}
function fg(e, t) {
  return t()
}
var pg =
  typeof window > 'u' ||
  typeof window.document > 'u' ||
  typeof window.document.createElement > 'u'
    ? fg
    : dg
Cm.useSyncExternalStore =
  Lr.useSyncExternalStore !== void 0 ? Lr.useSyncExternalStore : pg
;(function (e) {
  e.exports = Cm
})(xm)
var km = { exports: {} },
  Nm = {}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xu = N.exports,
  mg = xm.exports
function hg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Vg = typeof Object.is == 'function' ? Object.is : hg,
  gg = mg.useSyncExternalStore,
  yg = Xu.useRef,
  Ag = Xu.useEffect,
  vg = Xu.useMemo,
  wg = Xu.useDebugValue
Nm.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = yg(null)
  if (i.current === null) {
    var u = { hasValue: !1, value: null }
    i.current = u
  } else u = i.current
  i = vg(
    function () {
      function l(V) {
        if (!a) {
          if (((a = !0), (c = V), (V = r(V)), o !== void 0 && u.hasValue)) {
            var h = u.value
            if (o(h, V)) return (f = h)
          }
          return (f = V)
        }
        if (((h = f), Vg(c, V))) return h
        var g = r(V)
        return o !== void 0 && o(h, g) ? h : ((c = V), (f = g))
      }
      var a = !1,
        c,
        f,
        d = n === void 0 ? null : n
      return [
        function () {
          return l(t())
        },
        d === null
          ? void 0
          : function () {
              return l(d())
            },
      ]
    },
    [t, n, r, o]
  )
  var s = gg(e, i[0], i[1])
  return (
    Ag(
      function () {
        ;(u.hasValue = !0), (u.value = s)
      },
      [s]
    ),
    wg(s),
    s
  )
}
;(function (e) {
  e.exports = Nm
})(km)
function Eg(e) {
  e()
}
let Pm = Eg
const Sg = e => (Pm = e),
  xg = () => Pm,
  vn = N.exports.createContext(null)
function _m() {
  return N.exports.useContext(vn)
}
const Cg = () => {
  throw new Error('uSES not initialized!')
}
let bm = Cg
const kg = e => {
    bm = e
  },
  Ng = (e, t) => e === t
function Pg(e = vn) {
  const t = e === vn ? _m : () => N.exports.useContext(e)
  return function (r, o = Ng) {
    const { store: i, subscription: u, getServerState: s } = t(),
      l = bm(u.addNestedSub, i.getState, s || i.getState, r, o)
    return N.exports.useDebugValue(l), l
  }
}
const _g = Pg()
var Rm = { exports: {} },
  H = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ye = typeof Symbol == 'function' && Symbol.for,
  Tc = ye ? Symbol.for('react.element') : 60103,
  Dc = ye ? Symbol.for('react.portal') : 60106,
  Ju = ye ? Symbol.for('react.fragment') : 60107,
  Zu = ye ? Symbol.for('react.strict_mode') : 60108,
  es = ye ? Symbol.for('react.profiler') : 60114,
  ts = ye ? Symbol.for('react.provider') : 60109,
  ns = ye ? Symbol.for('react.context') : 60110,
  Oc = ye ? Symbol.for('react.async_mode') : 60111,
  rs = ye ? Symbol.for('react.concurrent_mode') : 60111,
  os = ye ? Symbol.for('react.forward_ref') : 60112,
  is = ye ? Symbol.for('react.suspense') : 60113,
  bg = ye ? Symbol.for('react.suspense_list') : 60120,
  us = ye ? Symbol.for('react.memo') : 60115,
  ss = ye ? Symbol.for('react.lazy') : 60116,
  Rg = ye ? Symbol.for('react.block') : 60121,
  Bg = ye ? Symbol.for('react.fundamental') : 60117,
  Tg = ye ? Symbol.for('react.responder') : 60118,
  Dg = ye ? Symbol.for('react.scope') : 60119
function tt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case Tc:
        switch (((e = e.type), e)) {
          case Oc:
          case rs:
          case Ju:
          case es:
          case Zu:
          case is:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ns:
              case os:
              case ss:
              case us:
              case ts:
                return e
              default:
                return t
            }
        }
      case Dc:
        return t
    }
  }
}
function Bm(e) {
  return tt(e) === rs
}
H.AsyncMode = Oc
H.ConcurrentMode = rs
H.ContextConsumer = ns
H.ContextProvider = ts
H.Element = Tc
H.ForwardRef = os
H.Fragment = Ju
H.Lazy = ss
H.Memo = us
H.Portal = Dc
H.Profiler = es
H.StrictMode = Zu
H.Suspense = is
H.isAsyncMode = function (e) {
  return Bm(e) || tt(e) === Oc
}
H.isConcurrentMode = Bm
H.isContextConsumer = function (e) {
  return tt(e) === ns
}
H.isContextProvider = function (e) {
  return tt(e) === ts
}
H.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Tc
}
H.isForwardRef = function (e) {
  return tt(e) === os
}
H.isFragment = function (e) {
  return tt(e) === Ju
}
H.isLazy = function (e) {
  return tt(e) === ss
}
H.isMemo = function (e) {
  return tt(e) === us
}
H.isPortal = function (e) {
  return tt(e) === Dc
}
H.isProfiler = function (e) {
  return tt(e) === es
}
H.isStrictMode = function (e) {
  return tt(e) === Zu
}
H.isSuspense = function (e) {
  return tt(e) === is
}
H.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Ju ||
    e === rs ||
    e === es ||
    e === Zu ||
    e === is ||
    e === bg ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === ss ||
        e.$$typeof === us ||
        e.$$typeof === ts ||
        e.$$typeof === ns ||
        e.$$typeof === os ||
        e.$$typeof === Bg ||
        e.$$typeof === Tg ||
        e.$$typeof === Dg ||
        e.$$typeof === Rg))
  )
}
H.typeOf = tt
;(function (e) {
  e.exports = H
})(Rm)
var Tm = Rm.exports,
  Og = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Lg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Dm = {}
Dm[Tm.ForwardRef] = Og
Dm[Tm.Memo] = Lg
var Ig = { exports: {} },
  W = {}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lc = Symbol.for('react.element'),
  Ic = Symbol.for('react.portal'),
  ls = Symbol.for('react.fragment'),
  as = Symbol.for('react.strict_mode'),
  cs = Symbol.for('react.profiler'),
  ds = Symbol.for('react.provider'),
  fs = Symbol.for('react.context'),
  Fg = Symbol.for('react.server_context'),
  ps = Symbol.for('react.forward_ref'),
  ms = Symbol.for('react.suspense'),
  hs = Symbol.for('react.suspense_list'),
  Vs = Symbol.for('react.memo'),
  gs = Symbol.for('react.lazy'),
  Ug = Symbol.for('react.offscreen'),
  Om
Om = Symbol.for('react.module.reference')
function at(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case Lc:
        switch (((e = e.type), e)) {
          case ls:
          case cs:
          case as:
          case ms:
          case hs:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Fg:
              case fs:
              case ps:
              case gs:
              case Vs:
              case ds:
                return e
              default:
                return t
            }
        }
      case Ic:
        return t
    }
  }
}
W.ContextConsumer = fs
W.ContextProvider = ds
W.Element = Lc
W.ForwardRef = ps
W.Fragment = ls
W.Lazy = gs
W.Memo = Vs
W.Portal = Ic
W.Profiler = cs
W.StrictMode = as
W.Suspense = ms
W.SuspenseList = hs
W.isAsyncMode = function () {
  return !1
}
W.isConcurrentMode = function () {
  return !1
}
W.isContextConsumer = function (e) {
  return at(e) === fs
}
W.isContextProvider = function (e) {
  return at(e) === ds
}
W.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Lc
}
W.isForwardRef = function (e) {
  return at(e) === ps
}
W.isFragment = function (e) {
  return at(e) === ls
}
W.isLazy = function (e) {
  return at(e) === gs
}
W.isMemo = function (e) {
  return at(e) === Vs
}
W.isPortal = function (e) {
  return at(e) === Ic
}
W.isProfiler = function (e) {
  return at(e) === cs
}
W.isStrictMode = function (e) {
  return at(e) === as
}
W.isSuspense = function (e) {
  return at(e) === ms
}
W.isSuspenseList = function (e) {
  return at(e) === hs
}
W.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === ls ||
    e === cs ||
    e === as ||
    e === ms ||
    e === hs ||
    e === Ug ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === gs ||
        e.$$typeof === Vs ||
        e.$$typeof === ds ||
        e.$$typeof === fs ||
        e.$$typeof === ps ||
        e.$$typeof === Om ||
        e.getModuleId !== void 0))
  )
}
W.typeOf = at
;(function (e) {
  e.exports = W
})(Ig)
function Mg() {
  const e = xg()
  let t = null,
    n = null
  return {
    clear() {
      ;(t = null), (n = null)
    },
    notify() {
      e(() => {
        let r = t
        for (; r; ) r.callback(), (r = r.next)
      })
    },
    get() {
      let r = [],
        o = t
      for (; o; ) r.push(o), (o = o.next)
      return r
    },
    subscribe(r) {
      let o = !0,
        i = (n = { callback: r, next: null, prev: n })
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            i.next ? (i.next.prev = i.prev) : (n = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next))
        }
      )
    },
  }
}
const mf = { notify() {}, get: () => [] }
function jg(e, t) {
  let n,
    r = mf
  function o(f) {
    return l(), r.subscribe(f)
  }
  function i() {
    r.notify()
  }
  function u() {
    c.onStateChange && c.onStateChange()
  }
  function s() {
    return Boolean(n)
  }
  function l() {
    n || ((n = t ? t.addNestedSub(u) : e.subscribe(u)), (r = Mg()))
  }
  function a() {
    n && (n(), (n = void 0), r.clear(), (r = mf))
  }
  const c = {
    addNestedSub: o,
    notifyNestedSubs: i,
    handleChangeWrapper: u,
    isSubscribed: s,
    trySubscribe: l,
    tryUnsubscribe: a,
    getListeners: () => r,
  }
  return c
}
const zg =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Qg = zg ? N.exports.useLayoutEffect : N.exports.useEffect
var ys = { exports: {} },
  As = {}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $g = N.exports,
  Hg = Symbol.for('react.element'),
  Wg = Symbol.for('react.fragment'),
  qg = Object.prototype.hasOwnProperty,
  Kg = $g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Gg = { key: !0, ref: !0, __self: !0, __source: !0 }
function Lm(e, t, n) {
  var r,
    o = {},
    i = null,
    u = null
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (u = t.ref)
  for (r in t) qg.call(t, r) && !Gg.hasOwnProperty(r) && (o[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
  return { $$typeof: Hg, type: e, key: i, ref: u, props: o, _owner: Kg.current }
}
As.Fragment = Wg
As.jsx = Lm
As.jsxs = Lm
;(function (e) {
  e.exports = As
})(ys)
const Ft = ys.exports.Fragment,
  y = ys.exports.jsx,
  B = ys.exports.jsxs
function Yg({ store: e, context: t, children: n, serverState: r }) {
  const o = N.exports.useMemo(() => {
      const s = jg(e)
      return { store: e, subscription: s, getServerState: r ? () => r : void 0 }
    }, [e, r]),
    i = N.exports.useMemo(() => e.getState(), [e])
  return (
    Qg(() => {
      const { subscription: s } = o
      return (
        (s.onStateChange = s.notifyNestedSubs),
        s.trySubscribe(),
        i !== e.getState() && s.notifyNestedSubs(),
        () => {
          s.tryUnsubscribe(), (s.onStateChange = void 0)
        }
      )
    }, [o, i]),
    y((t || vn).Provider, { value: o, children: n })
  )
}
function Im(e = vn) {
  const t = e === vn ? _m : () => N.exports.useContext(e)
  return function () {
    const { store: r } = t()
    return r
  }
}
const Xg = Im()
function Jg(e = vn) {
  const t = e === vn ? Xg : Im(e)
  return function () {
    return t().dispatch
  }
}
const Zg = Jg()
kg(km.exports.useSyncExternalStoreWithSelector)
Sg(Fa.exports.unstable_batchedUpdates)
/**
 * @remix-run/router v1.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ku() {
  return (
    (ku = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    ku.apply(this, arguments)
  )
}
var on
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(on || (on = {}))
const hf = 'popstate'
function ey(e) {
  e === void 0 && (e = {})
  function t(r, o) {
    let { pathname: i, search: u, hash: s } = r.location
    return ya(
      '',
      { pathname: i, search: u, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    )
  }
  function n(r, o) {
    return typeof o == 'string' ? o : zo(o)
  }
  return ry(t, n, null, e)
}
function fe(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function ty() {
  return Math.random().toString(36).substr(2, 8)
}
function Vf(e) {
  return { usr: e.state, key: e.key }
}
function ya(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ku(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Qr(t) : t,
      { state: n, key: (t && t.key) || r || ty() }
    )
  )
}
function zo(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  )
}
function Qr(e) {
  let t = {}
  if (e) {
    let n = e.indexOf('#')
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
    let r = e.indexOf('?')
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e)
  }
  return t
}
function ny(e) {
  let t =
      typeof window < 'u' &&
      typeof window.location < 'u' &&
      window.location.origin !== 'null'
        ? window.location.origin
        : window.location.href,
    n = typeof e == 'string' ? e : zo(e)
  return (
    fe(
      t,
      'No window.location.(origin|href) available to create URL for href: ' + n
    ),
    new URL(n, t)
  )
}
function ry(e, t, n, r) {
  r === void 0 && (r = {})
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    u = o.history,
    s = on.Pop,
    l = null
  function a() {
    ;(s = on.Pop), l && l({ action: s, location: d.location })
  }
  function c(V, h) {
    s = on.Push
    let g = ya(d.location, V, h)
    n && n(g, V)
    let k = Vf(g),
      m = d.createHref(g)
    try {
      u.pushState(k, '', m)
    } catch {
      o.location.assign(m)
    }
    i && l && l({ action: s, location: d.location })
  }
  function f(V, h) {
    s = on.Replace
    let g = ya(d.location, V, h)
    n && n(g, V)
    let k = Vf(g),
      m = d.createHref(g)
    u.replaceState(k, '', m), i && l && l({ action: s, location: d.location })
  }
  let d = {
    get action() {
      return s
    },
    get location() {
      return e(o, u)
    },
    listen(V) {
      if (l) throw new Error('A history only accepts one active listener')
      return (
        o.addEventListener(hf, a),
        (l = V),
        () => {
          o.removeEventListener(hf, a), (l = null)
        }
      )
    },
    createHref(V) {
      return t(o, V)
    },
    encodeLocation(V) {
      let h = ny(typeof V == 'string' ? V : zo(V))
      return { pathname: h.pathname, search: h.search, hash: h.hash }
    },
    push: c,
    replace: f,
    go(V) {
      return u.go(V)
    },
  }
  return d
}
var gf
;(function (e) {
  ;(e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error')
})(gf || (gf = {}))
function oy(e, t, n) {
  n === void 0 && (n = '/')
  let r = typeof t == 'string' ? Qr(t) : t,
    o = Mm(r.pathname || '/', n)
  if (o == null) return null
  let i = Fm(e)
  iy(i)
  let u = null
  for (let s = 0; u == null && s < i.length; ++s) u = my(i[s], gy(o))
  return u
}
function Fm(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '')
  let o = (i, u, s) => {
    let l = {
      relativePath: s === void 0 ? i.path || '' : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: u,
      route: i,
    }
    l.relativePath.startsWith('/') &&
      (fe(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (l.relativePath = l.relativePath.slice(r.length)))
    let a = hn([r, l.relativePath]),
      c = n.concat(l)
    i.children &&
      i.children.length > 0 &&
      (fe(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + a + '".')
      ),
      Fm(i.children, t, c, a)),
      !(i.path == null && !i.index) &&
        t.push({ path: a, score: fy(a, i.index), routesMeta: c })
  }
  return (
    e.forEach((i, u) => {
      var s
      if (i.path === '' || !((s = i.path) != null && s.includes('?'))) o(i, u)
      else for (let l of Um(i.path)) o(i, u, l)
    }),
    t
  )
}
function Um(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [n, ...r] = t,
    o = n.endsWith('?'),
    i = n.replace(/\?$/, '')
  if (r.length === 0) return o ? [i, ''] : [i]
  let u = Um(r.join('/')),
    s = []
  return (
    s.push(...u.map(l => (l === '' ? i : [i, l].join('/')))),
    o && s.push(...u),
    s.map(l => (e.startsWith('/') && l === '' ? '/' : l))
  )
}
function iy(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : py(
          t.routesMeta.map(r => r.childrenIndex),
          n.routesMeta.map(r => r.childrenIndex)
        )
  )
}
const uy = /^:\w+$/,
  sy = 3,
  ly = 2,
  ay = 1,
  cy = 10,
  dy = -2,
  yf = e => e === '*'
function fy(e, t) {
  let n = e.split('/'),
    r = n.length
  return (
    n.some(yf) && (r += dy),
    t && (r += ly),
    n
      .filter(o => !yf(o))
      .reduce((o, i) => o + (uy.test(i) ? sy : i === '' ? ay : cy), r)
  )
}
function py(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function my(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    i = []
  for (let u = 0; u < n.length; ++u) {
    let s = n[u],
      l = u === n.length - 1,
      a = o === '/' ? t : t.slice(o.length) || '/',
      c = hy(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
        a
      )
    if (!c) return null
    Object.assign(r, c.params)
    let f = s.route
    i.push({
      params: r,
      pathname: hn([o, c.pathname]),
      pathnameBase: wy(hn([o, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== '/' && (o = hn([o, c.pathnameBase]))
  }
  return i
}
function hy(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [n, r] = Vy(e.path, e.caseSensitive, e.end),
    o = t.match(n)
  if (!o) return null
  let i = o[0],
    u = i.replace(/(.)\/+$/, '$1'),
    s = o.slice(1)
  return {
    params: r.reduce((a, c, f) => {
      if (c === '*') {
        let d = s[f] || ''
        u = i.slice(0, i.length - d.length).replace(/(.)\/+$/, '$1')
      }
      return (a[c] = yy(s[f] || '', c)), a
    }, {}),
    pathname: i,
    pathnameBase: u,
    pattern: e,
  }
}
function Vy(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Fc(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    )
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (u, s) => (r.push(s), '/([^\\/]+)'))
  return (
    e.endsWith('*')
      ? (r.push('*'),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (o += '\\/*$')
      : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  )
}
function gy(e) {
  try {
    return decodeURI(e)
  } catch (t) {
    return (
      Fc(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    )
  }
}
function yy(e, t) {
  try {
    return decodeURIComponent(e)
  } catch (n) {
    return (
      Fc(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    )
  }
}
function Mm(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n)
  return r && r !== '/' ? null : e.slice(n) || '/'
}
function Fc(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function Ay(e, t) {
  t === void 0 && (t = '/')
  let {
    pathname: n,
    search: r = '',
    hash: o = '',
  } = typeof e == 'string' ? Qr(e) : e
  return {
    pathname: n ? (n.startsWith('/') ? n : vy(n, t)) : t,
    search: Ey(r),
    hash: Sy(o),
  }
}
function vy(e, t) {
  let n = t.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach(o => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o)
    }),
    n.length > 1 ? n.join('/') : '/'
  )
}
function nl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function jm(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  )
}
function zm(e, t, n, r) {
  r === void 0 && (r = !1)
  let o
  typeof e == 'string'
    ? (o = Qr(e))
    : ((o = ku({}, e)),
      fe(
        !o.pathname || !o.pathname.includes('?'),
        nl('?', 'pathname', 'search', o)
      ),
      fe(
        !o.pathname || !o.pathname.includes('#'),
        nl('#', 'pathname', 'hash', o)
      ),
      fe(!o.search || !o.search.includes('#'), nl('#', 'search', 'hash', o)))
  let i = e === '' || o.pathname === '',
    u = i ? '/' : o.pathname,
    s
  if (r || u == null) s = n
  else {
    let f = t.length - 1
    if (u.startsWith('..')) {
      let d = u.split('/')
      for (; d[0] === '..'; ) d.shift(), (f -= 1)
      o.pathname = d.join('/')
    }
    s = f >= 0 ? t[f] : '/'
  }
  let l = Ay(o, s),
    a = u && u !== '/' && u.endsWith('/'),
    c = (i || u === '.') && n.endsWith('/')
  return !l.pathname.endsWith('/') && (a || c) && (l.pathname += '/'), l
}
const hn = e => e.join('/').replace(/\/\/+/g, '/'),
  wy = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Ey = e => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Sy = e => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
class xy {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r)
  }
}
function Cy(e) {
  return e instanceof xy
}
const ky = ['post', 'put', 'patch', 'delete']
;[...ky]
/**
 * React Router v6.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Aa() {
  return (
    (Aa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Aa.apply(this, arguments)
  )
}
function Ny(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
const Py = typeof Object.is == 'function' ? Object.is : Ny,
  { useState: _y, useEffect: by, useLayoutEffect: Ry, useDebugValue: By } = Cl
function Ty(e, t, n) {
  const r = t(),
    [{ inst: o }, i] = _y({ inst: { value: r, getSnapshot: t } })
  return (
    Ry(() => {
      ;(o.value = r), (o.getSnapshot = t), rl(o) && i({ inst: o })
    }, [e, r, t]),
    by(
      () => (
        rl(o) && i({ inst: o }),
        e(() => {
          rl(o) && i({ inst: o })
        })
      ),
      [e]
    ),
    By(r),
    r
  )
}
function rl(e) {
  const t = e.getSnapshot,
    n = e.value
  try {
    const r = t()
    return !Py(n, r)
  } catch {
    return !0
  }
}
function Dy(e, t, n) {
  return t()
}
const Oy =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Ly = !Oy,
  Iy = Ly ? Dy : Ty
'useSyncExternalStore' in Cl && (e => e.useSyncExternalStore)(Cl)
const Fy = N.exports.createContext(null),
  Uy = N.exports.createContext(null),
  Qm = N.exports.createContext(null),
  vs = N.exports.createContext(null),
  ws = N.exports.createContext(null),
  Zn = N.exports.createContext({ outlet: null, matches: [] }),
  $m = N.exports.createContext(null)
function My(e, t) {
  let { relative: n } = t === void 0 ? {} : t
  Xo() || fe(!1)
  let { basename: r, navigator: o } = N.exports.useContext(vs),
    { hash: i, pathname: u, search: s } = Wm(e, { relative: n }),
    l = u
  return (
    r !== '/' && (l = u === '/' ? r : hn([r, u])),
    o.createHref({ pathname: l, search: s, hash: i })
  )
}
function Xo() {
  return N.exports.useContext(ws) != null
}
function Jo() {
  return Xo() || fe(!1), N.exports.useContext(ws).location
}
function $r() {
  Xo() || fe(!1)
  let { basename: e, navigator: t } = N.exports.useContext(vs),
    { matches: n } = N.exports.useContext(Zn),
    { pathname: r } = Jo(),
    o = JSON.stringify(jm(n).map(s => s.pathnameBase)),
    i = N.exports.useRef(!1)
  return (
    N.exports.useEffect(() => {
      i.current = !0
    }),
    N.exports.useCallback(
      function (s, l) {
        if ((l === void 0 && (l = {}), !i.current)) return
        if (typeof s == 'number') {
          t.go(s)
          return
        }
        let a = zm(s, JSON.parse(o), r, l.relative === 'path')
        e !== '/' &&
          (a.pathname = a.pathname === '/' ? e : hn([e, a.pathname])),
          (l.replace ? t.replace : t.push)(a, l.state, l)
      },
      [e, t, o, r]
    )
  )
}
function Hm() {
  let { matches: e } = N.exports.useContext(Zn),
    t = e[e.length - 1]
  return t ? t.params : {}
}
function Wm(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = N.exports.useContext(Zn),
    { pathname: o } = Jo(),
    i = JSON.stringify(jm(r).map(u => u.pathnameBase))
  return N.exports.useMemo(
    () => zm(e, JSON.parse(i), o, n === 'path'),
    [e, i, o, n]
  )
}
function jy(e, t) {
  Xo() || fe(!1)
  let { navigator: n } = N.exports.useContext(vs),
    r = N.exports.useContext(Qm),
    { matches: o } = N.exports.useContext(Zn),
    i = o[o.length - 1],
    u = i ? i.params : {}
  i && i.pathname
  let s = i ? i.pathnameBase : '/'
  i && i.route
  let l = Jo(),
    a
  if (t) {
    var c
    let g = typeof t == 'string' ? Qr(t) : t
    s === '/' ||
      ((c = g.pathname) == null ? void 0 : c.startsWith(s)) ||
      fe(!1),
      (a = g)
  } else a = l
  let f = a.pathname || '/',
    d = s === '/' ? f : f.slice(s.length) || '/',
    V = oy(e, { pathname: d }),
    h = Hy(
      V &&
        V.map(g =>
          Object.assign({}, g, {
            params: Object.assign({}, u, g.params),
            pathname: hn([
              s,
              n.encodeLocation
                ? n.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === '/'
                ? s
                : hn([
                    s,
                    n.encodeLocation
                      ? n.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          })
        ),
      o,
      r || void 0
    )
  return t && h
    ? y(ws.Provider, {
        value: {
          location: Aa(
            {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
            },
            a
          ),
          navigationType: on.Pop,
        },
        children: h,
      })
    : h
}
function zy() {
  let e = Gy(),
    t = Cy(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = 'rgba(200,200,200, 0.5)',
    o = { padding: '0.5rem', backgroundColor: r },
    i = { padding: '2px 4px', backgroundColor: r }
  return B(Ft, {
    children: [
      y('h2', { children: 'Unhandled Thrown Error!' }),
      y('h3', { style: { fontStyle: 'italic' }, children: t }),
      n ? y('pre', { style: o, children: n }) : null,
      y('p', { children: '\u{1F4BF} Hey developer \u{1F44B}' }),
      B('p', {
        children: [
          'You can provide a way better UX than this when your app throws errors by providing your own\xA0',
          y('code', { style: i, children: 'errorElement' }),
          ' props on\xA0',
          y('code', { style: i, children: '<Route>' }),
        ],
      }),
    ],
  })
}
class Qy extends N.exports.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error })
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location }
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n)
  }
  render() {
    return this.state.error
      ? y(Zn.Provider, {
          value: this.props.routeContext,
          children: y($m.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        })
      : this.props.children
  }
}
function $y(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = N.exports.useContext(Fy)
  return (
    o && n.route.errorElement && (o._deepestRenderedBoundaryId = n.route.id),
    y(Zn.Provider, { value: t, children: r })
  )
}
function Hy(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches
    else return null
  let r = e,
    o = n == null ? void 0 : n.errors
  if (o != null) {
    let i = r.findIndex(u => u.route.id && (o == null ? void 0 : o[u.route.id]))
    i >= 0 || fe(!1), (r = r.slice(0, Math.min(r.length, i + 1)))
  }
  return r.reduceRight((i, u, s) => {
    let l = u.route.id ? (o == null ? void 0 : o[u.route.id]) : null,
      a = n ? u.route.errorElement || y(zy, {}) : null,
      c = t.concat(r.slice(0, s + 1)),
      f = () =>
        y($y, {
          match: u,
          routeContext: { outlet: i, matches: c },
          children: l ? a : u.route.element !== void 0 ? u.route.element : i,
        })
    return n && (u.route.errorElement || s === 0)
      ? y(Qy, {
          location: n.location,
          component: a,
          error: l,
          children: f(),
          routeContext: { outlet: null, matches: c },
        })
      : f()
  }, null)
}
var Af
;(function (e) {
  e.UseRevalidator = 'useRevalidator'
})(Af || (Af = {}))
var Nu
;(function (e) {
  ;(e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator')
})(Nu || (Nu = {}))
function Wy(e) {
  let t = N.exports.useContext(Qm)
  return t || fe(!1), t
}
function qy(e) {
  let t = N.exports.useContext(Zn)
  return t || fe(!1), t
}
function Ky(e) {
  let t = qy(),
    n = t.matches[t.matches.length - 1]
  return n.route.id || fe(!1), n.route.id
}
function Gy() {
  var e
  let t = N.exports.useContext($m),
    n = Wy(Nu.UseRouteError),
    r = Ky(Nu.UseRouteError)
  return t || ((e = n.errors) == null ? void 0 : e[r])
}
function qm(e) {
  fe(!1)
}
function Yy(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = on.Pop,
    navigator: i,
    static: u = !1,
  } = e
  Xo() && fe(!1)
  let s = t.replace(/^\/*/, '/'),
    l = N.exports.useMemo(
      () => ({ basename: s, navigator: i, static: u }),
      [s, i, u]
    )
  typeof r == 'string' && (r = Qr(r))
  let {
      pathname: a = '/',
      search: c = '',
      hash: f = '',
      state: d = null,
      key: V = 'default',
    } = r,
    h = N.exports.useMemo(() => {
      let g = Mm(a, s)
      return g == null
        ? null
        : { pathname: g, search: c, hash: f, state: d, key: V }
    }, [s, a, c, f, d, V])
  return h == null
    ? null
    : y(vs.Provider, {
        value: l,
        children: y(ws.Provider, {
          children: n,
          value: { location: h, navigationType: o },
        }),
      })
}
function Xy(e) {
  let { children: t, location: n } = e,
    r = N.exports.useContext(Uy),
    o = r && !t ? r.router.routes : va(t)
  return jy(o, n)
}
var vf
;(function (e) {
  ;(e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error')
})(vf || (vf = {}))
new Promise(() => {})
function va(e, t) {
  t === void 0 && (t = [])
  let n = []
  return (
    N.exports.Children.forEach(e, (r, o) => {
      if (!N.exports.isValidElement(r)) return
      if (r.type === N.exports.Fragment) {
        n.push.apply(n, va(r.props.children, t))
        return
      }
      r.type !== qm && fe(!1), !r.props.index || !r.props.children || fe(!1)
      let i = [...t, o],
        u = {
          id: r.props.id || i.join('-'),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        }
      r.props.children && (u.children = va(r.props.children, i)), n.push(u)
    }),
    n
  )
}
/**
 * React Router DOM v6.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Jy(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    i
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
function Zy(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function eA(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Zy(e)
}
function wa(e) {
  return (
    e === void 0 && (e = ''),
    new URLSearchParams(
      typeof e == 'string' || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n]
            return t.concat(Array.isArray(r) ? r.map(o => [n, o]) : [[n, r]])
          }, [])
    )
  )
}
function tA(e, t) {
  let n = wa(e)
  for (let r of t.keys())
    n.has(r) ||
      t.getAll(r).forEach(o => {
        n.append(r, o)
      })
  return n
}
const nA = [
  'onClick',
  'relative',
  'reloadDocument',
  'replace',
  'state',
  'target',
  'to',
  'preventScrollReset',
]
function rA(e) {
  let { basename: t, children: n, window: r } = e,
    o = N.exports.useRef()
  o.current == null && (o.current = ey({ window: r, v5Compat: !0 }))
  let i = o.current,
    [u, s] = N.exports.useState({ action: i.action, location: i.location })
  return (
    N.exports.useLayoutEffect(() => i.listen(s), [i]),
    y(Yy, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: i,
    })
  )
}
const Z = N.exports.forwardRef(function (t, n) {
  let {
      onClick: r,
      relative: o,
      reloadDocument: i,
      replace: u,
      state: s,
      target: l,
      to: a,
      preventScrollReset: c,
    } = t,
    f = Jy(t, nA),
    d = My(a, { relative: o }),
    V = oA(a, {
      replace: u,
      state: s,
      target: l,
      preventScrollReset: c,
      relative: o,
    })
  function h(g) {
    r && r(g), g.defaultPrevented || V(g)
  }
  return y('a', { ...f, href: d, onClick: i ? r : h, ref: n, target: l })
})
var wf
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmitImpl = 'useSubmitImpl'),
    (e.UseFetcher = 'useFetcher')
})(wf || (wf = {}))
var Ef
;(function (e) {
  ;(e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration')
})(Ef || (Ef = {}))
function oA(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: u,
    } = t === void 0 ? {} : t,
    s = $r(),
    l = Jo(),
    a = Wm(e, { relative: u })
  return N.exports.useCallback(
    c => {
      if (eA(c, n)) {
        c.preventDefault()
        let f = r !== void 0 ? r : zo(l) === zo(a)
        s(e, { replace: f, state: o, preventScrollReset: i, relative: u })
      }
    },
    [l, s, a, r, o, n, e, i, u]
  )
}
function iA(e) {
  let t = N.exports.useRef(wa(e)),
    n = Jo(),
    r = N.exports.useMemo(() => tA(n.search, t.current), [n.search]),
    o = $r(),
    i = N.exports.useCallback(
      (u, s) => {
        const l = wa(typeof u == 'function' ? u(r) : u)
        o('?' + l, s)
      },
      [o, r]
    )
  return [r, i]
}
const Oe = Zg,
  Ve = _g,
  uA = 3e3,
  sA = 3001,
  lA = 'https://ya-praktikum.tech/api/v2',
  Cr = `http://localhost:${sA}/api`,
  Hr = 'https://alt-f4-bomberman-21.ya-praktikum.tech/api',
  aA = ['localhost', '127.0.0.1'],
  Uc = 'alt+f4v4',
  Ii = 5,
  Ir = 'theme',
  _t = cA()
function cA() {
  if (typeof document < 'u') {
    const { hostname: e, port: t } = document.location
    if (t && Number(t) !== uA)
      return e === '127.0.0.1' ? Cr.replace('localhost', '127.0.0.1') : Cr
    if (aA.includes(e)) return lA
  }
  return Cr
}
const Kn = e => e.user,
  Km = e => e.game.status,
  dA = e => e.game.currentScore,
  fA = e => e.theme.current,
  pA = e => e.forum.posts,
  mA = e => e.forum.messages,
  hA = e => ({
    score: e.game.currentScore,
    inProgress: e.game.inProgress,
    buffs: {
      bombAmountUp: e.game.bombAmountUp,
      bombRangeUp: e.game.bombRangeUp,
      playerSpeedUp: e.game.playerSpeedUp,
      detonator: e.game.detonator,
      bombPass: e.game.bombPass,
      flamePass: e.game.flamePass,
    },
  }),
  VA = e =>
    e.leaderboard.stats.slice(
      e.leaderboard.page * Ii,
      e.leaderboard.page * Ii + Ii
    ),
  gA = e => e.leaderboard.page === 0,
  yA = e => {
    const t = e.leaderboard.stats.length
    return !((e.leaderboard.page + 1) * Ii < t)
  },
  AA = e => e.leaderboard.isLoading,
  vA = '_navigationBar_gbpyz_1',
  wA = '_link_gbpyz_31',
  ol = { navigationBar: vA, link: wA }
function gt(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r]
  throw Error(
    '[Immer] minified error nr: ' +
      e +
      (n.length
        ? ' ' +
          n
            .map(function (o) {
              return "'" + o + "'"
            })
            .join(',')
        : '') +
      '. Find the full error at: https://bit.ly/3cXEKWf'
  )
}
function wn(e) {
  return !!e && !!e[X]
}
function $t(e) {
  var t
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != 'object') return !1
      var r = Object.getPrototypeOf(n)
      if (r === null) return !0
      var o = Object.hasOwnProperty.call(r, 'constructor') && r.constructor
      return (
        o === Object ||
        (typeof o == 'function' && Function.toString.call(o) === bA)
      )
    })(e) ||
      Array.isArray(e) ||
      !!e[_f] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[_f]) ||
      Mc(e) ||
      jc(e))
  )
}
function Gn(e, t, n) {
  n === void 0 && (n = !1),
    Wr(e) === 0
      ? (n ? Object.keys : Nr)(e).forEach(function (r) {
          ;(n && typeof r == 'symbol') || t(r, e[r], e)
        })
      : e.forEach(function (r, o) {
          return t(o, r, e)
        })
}
function Wr(e) {
  var t = e[X]
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : Mc(e)
    ? 2
    : jc(e)
    ? 3
    : 0
}
function kr(e, t) {
  return Wr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function EA(e, t) {
  return Wr(e) === 2 ? e.get(t) : e[t]
}
function Gm(e, t, n) {
  var r = Wr(e)
  r === 2 ? e.set(t, n) : r === 3 ? (e.delete(t), e.add(n)) : (e[t] = n)
}
function Ym(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t
}
function Mc(e) {
  return PA && e instanceof Map
}
function jc(e) {
  return _A && e instanceof Set
}
function On(e) {
  return e.o || e.t
}
function zc(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e)
  var t = Jm(e)
  delete t[X]
  for (var n = Nr(t), r = 0; r < n.length; r++) {
    var o = n[r],
      i = t[o]
    i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
      (i.get || i.set) &&
        (t[o] = {
          configurable: !0,
          writable: !0,
          enumerable: i.enumerable,
          value: e[o],
        })
  }
  return Object.create(Object.getPrototypeOf(e), t)
}
function Qc(e, t) {
  return (
    t === void 0 && (t = !1),
    $c(e) ||
      wn(e) ||
      !$t(e) ||
      (Wr(e) > 1 && (e.set = e.add = e.clear = e.delete = SA),
      Object.freeze(e),
      t &&
        Gn(
          e,
          function (n, r) {
            return Qc(r, !0)
          },
          !0
        )),
    e
  )
}
function SA() {
  gt(2)
}
function $c(e) {
  return e == null || typeof e != 'object' || Object.isFrozen(e)
}
function Nt(e) {
  var t = Ca[e]
  return t || gt(18, e), t
}
function xA(e, t) {
  Ca[e] || (Ca[e] = t)
}
function Ea() {
  return Qo
}
function il(e, t) {
  t && (Nt('Patches'), (e.u = []), (e.s = []), (e.v = t))
}
function Pu(e) {
  Sa(e), e.p.forEach(CA), (e.p = null)
}
function Sa(e) {
  e === Qo && (Qo = e.l)
}
function Sf(e) {
  return (Qo = { p: [], l: Qo, h: e, m: !0, _: 0 })
}
function CA(e) {
  var t = e[X]
  t.i === 0 || t.i === 1 ? t.j() : (t.O = !0)
}
function ul(e, t) {
  t._ = t.p.length
  var n = t.p[0],
    r = e !== void 0 && e !== n
  return (
    t.h.g || Nt('ES5').S(t, e, r),
    r
      ? (n[X].P && (Pu(t), gt(4)),
        $t(e) && ((e = _u(t, e)), t.l || bu(t, e)),
        t.u && Nt('Patches').M(n[X].t, e, t.u, t.s))
      : (e = _u(t, n, [])),
    Pu(t),
    t.u && t.v(t.u, t.s),
    e !== Xm ? e : void 0
  )
}
function _u(e, t, n) {
  if ($c(t)) return t
  var r = t[X]
  if (!r)
    return (
      Gn(
        t,
        function (i, u) {
          return xf(e, r, t, i, u, n)
        },
        !0
      ),
      t
    )
  if (r.A !== e) return t
  if (!r.P) return bu(e, r.t, !0), r.t
  if (!r.I) {
    ;(r.I = !0), r.A._--
    var o = r.i === 4 || r.i === 5 ? (r.o = zc(r.k)) : r.o
    Gn(r.i === 3 ? new Set(o) : o, function (i, u) {
      return xf(e, r, o, i, u, n)
    }),
      bu(e, o, !1),
      n && e.u && Nt('Patches').R(r, n, e.u, e.s)
  }
  return r.o
}
function xf(e, t, n, r, o, i) {
  if (wn(o)) {
    var u = _u(e, o, i && t && t.i !== 3 && !kr(t.D, r) ? i.concat(r) : void 0)
    if ((Gm(n, r, u), !wn(u))) return
    e.m = !1
  }
  if ($t(o) && !$c(o)) {
    if (!e.h.F && e._ < 1) return
    _u(e, o), (t && t.A.l) || bu(e, o)
  }
}
function bu(e, t, n) {
  n === void 0 && (n = !1), e.h.F && e.m && Qc(t, n)
}
function sl(e, t) {
  var n = e[X]
  return (n ? On(n) : e)[t]
}
function Cf(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t)
      if (r) return r
      n = Object.getPrototypeOf(n)
    }
}
function en(e) {
  e.P || ((e.P = !0), e.l && en(e.l))
}
function ll(e) {
  e.o || (e.o = zc(e.t))
}
function xa(e, t, n) {
  var r = Mc(t)
    ? Nt('MapSet').N(t, n)
    : jc(t)
    ? Nt('MapSet').T(t, n)
    : e.g
    ? (function (o, i) {
        var u = Array.isArray(o),
          s = {
            i: u ? 1 : 0,
            A: i ? i.A : Ea(),
            P: !1,
            I: !1,
            D: {},
            l: i,
            t: o,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          l = s,
          a = $o
        u && ((l = [s]), (a = mo))
        var c = Proxy.revocable(l, a),
          f = c.revoke,
          d = c.proxy
        return (s.k = d), (s.j = f), d
      })(t, n)
    : Nt('ES5').J(t, n)
  return (n ? n.A : Ea()).p.push(r), r
}
function kA(e) {
  return (
    wn(e) || gt(22, e),
    (function t(n) {
      if (!$t(n)) return n
      var r,
        o = n[X],
        i = Wr(n)
      if (o) {
        if (!o.P && (o.i < 4 || !Nt('ES5').K(o))) return o.t
        ;(o.I = !0), (r = kf(n, i)), (o.I = !1)
      } else r = kf(n, i)
      return (
        Gn(r, function (u, s) {
          ;(o && EA(o.t, u) === s) || Gm(r, u, t(s))
        }),
        i === 3 ? new Set(r) : r
      )
    })(e)
  )
}
function kf(e, t) {
  switch (t) {
    case 2:
      return new Map(e)
    case 3:
      return Array.from(e)
  }
  return zc(e)
}
function NA() {
  function e(i, u) {
    var s = o[i]
    return (
      s
        ? (s.enumerable = u)
        : (o[i] = s =
            {
              configurable: !0,
              enumerable: u,
              get: function () {
                var l = this[X]
                return $o.get(l, i)
              },
              set: function (l) {
                var a = this[X]
                $o.set(a, i, l)
              },
            }),
      s
    )
  }
  function t(i) {
    for (var u = i.length - 1; u >= 0; u--) {
      var s = i[u][X]
      if (!s.P)
        switch (s.i) {
          case 5:
            r(s) && en(s)
            break
          case 4:
            n(s) && en(s)
        }
    }
  }
  function n(i) {
    for (var u = i.t, s = i.k, l = Nr(s), a = l.length - 1; a >= 0; a--) {
      var c = l[a]
      if (c !== X) {
        var f = u[c]
        if (f === void 0 && !kr(u, c)) return !0
        var d = s[c],
          V = d && d[X]
        if (V ? V.t !== f : !Ym(d, f)) return !0
      }
    }
    var h = !!u[X]
    return l.length !== Nr(u).length + (h ? 0 : 1)
  }
  function r(i) {
    var u = i.k
    if (u.length !== i.t.length) return !0
    var s = Object.getOwnPropertyDescriptor(u, u.length - 1)
    if (s && !s.get) return !0
    for (var l = 0; l < u.length; l++) if (!u.hasOwnProperty(l)) return !0
    return !1
  }
  var o = {}
  xA('ES5', {
    J: function (i, u) {
      var s = Array.isArray(i),
        l = (function (c, f) {
          if (c) {
            for (var d = Array(f.length), V = 0; V < f.length; V++)
              Object.defineProperty(d, '' + V, e(V, !0))
            return d
          }
          var h = Jm(f)
          delete h[X]
          for (var g = Nr(h), k = 0; k < g.length; k++) {
            var m = g[k]
            h[m] = e(m, c || !!h[m].enumerable)
          }
          return Object.create(Object.getPrototypeOf(f), h)
        })(s, i),
        a = {
          i: s ? 5 : 4,
          A: u ? u.A : Ea(),
          P: !1,
          I: !1,
          D: {},
          l: u,
          t: i,
          k: l,
          o: null,
          O: !1,
          C: !1,
        }
      return Object.defineProperty(l, X, { value: a, writable: !0 }), l
    },
    S: function (i, u, s) {
      s
        ? wn(u) && u[X].A === i && t(i.p)
        : (i.u &&
            (function l(a) {
              if (a && typeof a == 'object') {
                var c = a[X]
                if (c) {
                  var f = c.t,
                    d = c.k,
                    V = c.D,
                    h = c.i
                  if (h === 4)
                    Gn(d, function (A) {
                      A !== X &&
                        (f[A] !== void 0 || kr(f, A)
                          ? V[A] || l(d[A])
                          : ((V[A] = !0), en(c)))
                    }),
                      Gn(f, function (A) {
                        d[A] !== void 0 || kr(d, A) || ((V[A] = !1), en(c))
                      })
                  else if (h === 5) {
                    if ((r(c) && (en(c), (V.length = !0)), d.length < f.length))
                      for (var g = d.length; g < f.length; g++) V[g] = !1
                    else for (var k = f.length; k < d.length; k++) V[k] = !0
                    for (
                      var m = Math.min(d.length, f.length), p = 0;
                      p < m;
                      p++
                    )
                      d.hasOwnProperty(p) || (V[p] = !0),
                        V[p] === void 0 && l(d[p])
                  }
                }
              }
            })(i.p[0]),
          t(i.p))
    },
    K: function (i) {
      return i.i === 4 ? n(i) : r(i)
    },
  })
}
var Nf,
  Qo,
  Hc = typeof Symbol < 'u' && typeof Symbol('x') == 'symbol',
  PA = typeof Map < 'u',
  _A = typeof Set < 'u',
  Pf = typeof Proxy < 'u' && Proxy.revocable !== void 0 && typeof Reflect < 'u',
  Xm = Hc
    ? Symbol.for('immer-nothing')
    : (((Nf = {})['immer-nothing'] = !0), Nf),
  _f = Hc ? Symbol.for('immer-draftable') : '__$immer_draftable',
  X = Hc ? Symbol.for('immer-state') : '__$immer_state',
  bA = '' + Object.prototype.constructor,
  Nr =
    typeof Reflect < 'u' && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          )
        }
      : Object.getOwnPropertyNames,
  Jm =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {}
      return (
        Nr(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n)
        }),
        t
      )
    },
  Ca = {},
  $o = {
    get: function (e, t) {
      if (t === X) return e
      var n = On(e)
      if (!kr(n, t))
        return (function (o, i, u) {
          var s,
            l = Cf(i, u)
          return l
            ? 'value' in l
              ? l.value
              : (s = l.get) === null || s === void 0
              ? void 0
              : s.call(o.k)
            : void 0
        })(e, n, t)
      var r = n[t]
      return e.I || !$t(r)
        ? r
        : r === sl(e.t, t)
        ? (ll(e), (e.o[t] = xa(e.A.h, r, e)))
        : r
    },
    has: function (e, t) {
      return t in On(e)
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(On(e))
    },
    set: function (e, t, n) {
      var r = Cf(On(e), t)
      if (r != null && r.set) return r.set.call(e.k, n), !0
      if (!e.P) {
        var o = sl(On(e), t),
          i = o == null ? void 0 : o[X]
        if (i && i.t === n) return (e.o[t] = n), (e.D[t] = !1), !0
        if (Ym(n, o) && (n !== void 0 || kr(e.t, t))) return !0
        ll(e), en(e)
      }
      return (
        (e.o[t] === n && typeof n != 'number' && (n !== void 0 || t in e.o)) ||
        ((e.o[t] = n), (e.D[t] = !0), !0)
      )
    },
    deleteProperty: function (e, t) {
      return (
        sl(e.t, t) !== void 0 || t in e.t
          ? ((e.D[t] = !1), ll(e), en(e))
          : delete e.D[t],
        e.o && delete e.o[t],
        !0
      )
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = On(e),
        r = Reflect.getOwnPropertyDescriptor(n, t)
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== 'length',
          enumerable: r.enumerable,
          value: n[t],
        }
      )
    },
    defineProperty: function () {
      gt(11)
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t)
    },
    setPrototypeOf: function () {
      gt(12)
    },
  },
  mo = {}
Gn($o, function (e, t) {
  mo[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments)
  }
}),
  (mo.deleteProperty = function (e, t) {
    return mo.set.call(this, e, t, void 0)
  }),
  (mo.set = function (e, t, n) {
    return $o.set.call(this, e[0], t, n, e[0])
  })
var RA = (function () {
    function e(n) {
      var r = this
      ;(this.g = Pf),
        (this.F = !0),
        (this.produce = function (o, i, u) {
          if (typeof o == 'function' && typeof i != 'function') {
            var s = i
            i = o
            var l = r
            return function (g) {
              var k = this
              g === void 0 && (g = s)
              for (
                var m = arguments.length, p = Array(m > 1 ? m - 1 : 0), A = 1;
                A < m;
                A++
              )
                p[A - 1] = arguments[A]
              return l.produce(g, function (v) {
                var w
                return (w = i).call.apply(w, [k, v].concat(p))
              })
            }
          }
          var a
          if (
            (typeof i != 'function' && gt(6),
            u !== void 0 && typeof u != 'function' && gt(7),
            $t(o))
          ) {
            var c = Sf(r),
              f = xa(r, o, void 0),
              d = !0
            try {
              ;(a = i(f)), (d = !1)
            } finally {
              d ? Pu(c) : Sa(c)
            }
            return typeof Promise < 'u' && a instanceof Promise
              ? a.then(
                  function (g) {
                    return il(c, u), ul(g, c)
                  },
                  function (g) {
                    throw (Pu(c), g)
                  }
                )
              : (il(c, u), ul(a, c))
          }
          if (!o || typeof o != 'object') {
            if (
              ((a = i(o)) === void 0 && (a = o),
              a === Xm && (a = void 0),
              r.F && Qc(a, !0),
              u)
            ) {
              var V = [],
                h = []
              Nt('Patches').M(o, a, V, h), u(V, h)
            }
            return a
          }
          gt(21, o)
        }),
        (this.produceWithPatches = function (o, i) {
          if (typeof o == 'function')
            return function (a) {
              for (
                var c = arguments.length, f = Array(c > 1 ? c - 1 : 0), d = 1;
                d < c;
                d++
              )
                f[d - 1] = arguments[d]
              return r.produceWithPatches(a, function (V) {
                return o.apply(void 0, [V].concat(f))
              })
            }
          var u,
            s,
            l = r.produce(o, i, function (a, c) {
              ;(u = a), (s = c)
            })
          return typeof Promise < 'u' && l instanceof Promise
            ? l.then(function (a) {
                return [a, u, s]
              })
            : [l, u, s]
        }),
        typeof (n == null ? void 0 : n.useProxies) == 'boolean' &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == 'boolean' &&
          this.setAutoFreeze(n.autoFreeze)
    }
    var t = e.prototype
    return (
      (t.createDraft = function (n) {
        $t(n) || gt(8), wn(n) && (n = kA(n))
        var r = Sf(this),
          o = xa(this, n, void 0)
        return (o[X].C = !0), Sa(r), o
      }),
      (t.finishDraft = function (n, r) {
        var o = n && n[X],
          i = o.A
        return il(i, r), ul(void 0, i)
      }),
      (t.setAutoFreeze = function (n) {
        this.F = n
      }),
      (t.setUseProxies = function (n) {
        n && !Pf && gt(20), (this.g = n)
      }),
      (t.applyPatches = function (n, r) {
        var o
        for (o = r.length - 1; o >= 0; o--) {
          var i = r[o]
          if (i.path.length === 0 && i.op === 'replace') {
            n = i.value
            break
          }
        }
        o > -1 && (r = r.slice(o + 1))
        var u = Nt('Patches').$
        return wn(n)
          ? u(n, r)
          : this.produce(n, function (s) {
              return u(s, r)
            })
      }),
      e
    )
  })(),
  Je = new RA(),
  Zm = Je.produce
Je.produceWithPatches.bind(Je)
Je.setAutoFreeze.bind(Je)
Je.setUseProxies.bind(Je)
Je.applyPatches.bind(Je)
Je.createDraft.bind(Je)
Je.finishDraft.bind(Je)
function BA(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
function bf(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function Rf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? bf(Object(n), !0).forEach(function (r) {
          BA(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : bf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
  }
  return e
}
function Ce(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  )
}
var Bf = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable'
  })(),
  al = function () {
    return Math.random().toString(36).substring(7).split('').join('.')
  },
  Ru = {
    INIT: '@@redux/INIT' + al(),
    REPLACE: '@@redux/REPLACE' + al(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + al()
    },
  }
function TA(e) {
  if (typeof e != 'object' || e === null) return !1
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t)
  return Object.getPrototypeOf(e) === t
}
function eh(e, t, n) {
  var r
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(Ce(0))
  if (
    (typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)),
    typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(Ce(1))
    return n(eh)(e, t)
  }
  if (typeof e != 'function') throw new Error(Ce(2))
  var o = e,
    i = t,
    u = [],
    s = u,
    l = !1
  function a() {
    s === u && (s = u.slice())
  }
  function c() {
    if (l) throw new Error(Ce(3))
    return i
  }
  function f(g) {
    if (typeof g != 'function') throw new Error(Ce(4))
    if (l) throw new Error(Ce(5))
    var k = !0
    return (
      a(),
      s.push(g),
      function () {
        if (!!k) {
          if (l) throw new Error(Ce(6))
          ;(k = !1), a()
          var p = s.indexOf(g)
          s.splice(p, 1), (u = null)
        }
      }
    )
  }
  function d(g) {
    if (!TA(g)) throw new Error(Ce(7))
    if (typeof g.type > 'u') throw new Error(Ce(8))
    if (l) throw new Error(Ce(9))
    try {
      ;(l = !0), (i = o(i, g))
    } finally {
      l = !1
    }
    for (var k = (u = s), m = 0; m < k.length; m++) {
      var p = k[m]
      p()
    }
    return g
  }
  function V(g) {
    if (typeof g != 'function') throw new Error(Ce(10))
    ;(o = g), d({ type: Ru.REPLACE })
  }
  function h() {
    var g,
      k = f
    return (
      (g = {
        subscribe: function (p) {
          if (typeof p != 'object' || p === null) throw new Error(Ce(11))
          function A() {
            p.next && p.next(c())
          }
          A()
          var v = k(A)
          return { unsubscribe: v }
        },
      }),
      (g[Bf] = function () {
        return this
      }),
      g
    )
  }
  return (
    d({ type: Ru.INIT }),
    (r = { dispatch: d, subscribe: f, getState: c, replaceReducer: V }),
    (r[Bf] = h),
    r
  )
}
function DA(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Ru.INIT })
    if (typeof r > 'u') throw new Error(Ce(12))
    if (typeof n(void 0, { type: Ru.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(Ce(13))
  })
}
function OA(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var o = t[r]
    typeof e[o] == 'function' && (n[o] = e[o])
  }
  var i = Object.keys(n),
    u
  try {
    DA(n)
  } catch (s) {
    u = s
  }
  return function (l, a) {
    if ((l === void 0 && (l = {}), u)) throw u
    for (var c = !1, f = {}, d = 0; d < i.length; d++) {
      var V = i[d],
        h = n[V],
        g = l[V],
        k = h(g, a)
      if (typeof k > 'u') throw (a && a.type, new Error(Ce(14)))
      ;(f[V] = k), (c = c || k !== g)
    }
    return (c = c || i.length !== Object.keys(l).length), c ? f : l
  }
}
function Bu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  return t.length === 0
    ? function (r) {
        return r
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, o) {
        return function () {
          return r(o.apply(void 0, arguments))
        }
      })
}
function LA() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  return function (r) {
    return function () {
      var o = r.apply(void 0, arguments),
        i = function () {
          throw new Error(Ce(15))
        },
        u = {
          getState: o.getState,
          dispatch: function () {
            return i.apply(void 0, arguments)
          },
        },
        s = t.map(function (l) {
          return l(u)
        })
      return (
        (i = Bu.apply(void 0, s)(o.dispatch)),
        Rf(Rf({}, o), {}, { dispatch: i })
      )
    }
  }
}
function th(e) {
  var t = function (r) {
    var o = r.dispatch,
      i = r.getState
    return function (u) {
      return function (s) {
        return typeof s == 'function' ? s(o, i, e) : u(s)
      }
    }
  }
  return t
}
var nh = th()
nh.withExtraArgument = th
const Tf = nh
var IA =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, o) {
                r.__proto__ = o
              }) ||
            function (r, o) {
              for (var i in o)
                Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if (typeof n != 'function' && n !== null)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          )
        e(t, n)
        function r() {
          this.constructor = t
        }
        t.prototype =
          n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
      }
    })(),
  FA =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (i[0] & 1) throw i[1]
            return i[1]
          },
          trys: [],
          ops: [],
        },
        r,
        o,
        i,
        u
      return (
        (u = { next: s(0), throw: s(1), return: s(2) }),
        typeof Symbol == 'function' &&
          (u[Symbol.iterator] = function () {
            return this
          }),
        u
      )
      function s(a) {
        return function (c) {
          return l([a, c])
        }
      }
      function l(a) {
        if (r) throw new TypeError('Generator is already executing.')
        for (; n; )
          try {
            if (
              ((r = 1),
              o &&
                (i =
                  a[0] & 2
                    ? o.return
                    : a[0]
                    ? o.throw || ((i = o.return) && i.call(o), 0)
                    : o.next) &&
                !(i = i.call(o, a[1])).done)
            )
              return i
            switch (((o = 0), i && (a = [a[0] & 2, i.value]), a[0])) {
              case 0:
              case 1:
                i = a
                break
              case 4:
                return n.label++, { value: a[1], done: !1 }
              case 5:
                n.label++, (o = a[1]), (a = [0])
                continue
              case 7:
                ;(a = n.ops.pop()), n.trys.pop()
                continue
              default:
                if (
                  ((i = n.trys),
                  !(i = i.length > 0 && i[i.length - 1]) &&
                    (a[0] === 6 || a[0] === 2))
                ) {
                  n = 0
                  continue
                }
                if (a[0] === 3 && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                  n.label = a[1]
                  break
                }
                if (a[0] === 6 && n.label < i[1]) {
                  ;(n.label = i[1]), (i = a)
                  break
                }
                if (i && n.label < i[2]) {
                  ;(n.label = i[2]), n.ops.push(a)
                  break
                }
                i[2] && n.ops.pop(), n.trys.pop()
                continue
            }
            a = t.call(e, n)
          } catch (c) {
            ;(a = [6, c]), (o = 0)
          } finally {
            r = i = 0
          }
        if (a[0] & 5) throw a[1]
        return { value: a[0] ? a[1] : void 0, done: !0 }
      }
    },
  Tu =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n]
      return e
    },
  UA = Object.defineProperty,
  MA = Object.defineProperties,
  jA = Object.getOwnPropertyDescriptors,
  Df = Object.getOwnPropertySymbols,
  zA = Object.prototype.hasOwnProperty,
  QA = Object.prototype.propertyIsEnumerable,
  Of = function (e, t, n) {
    return t in e
      ? UA(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n)
  },
  Vn = function (e, t) {
    for (var n in t || (t = {})) zA.call(t, n) && Of(e, n, t[n])
    if (Df)
      for (var r = 0, o = Df(t); r < o.length; r++) {
        var n = o[r]
        QA.call(t, n) && Of(e, n, t[n])
      }
    return e
  },
  cl = function (e, t) {
    return MA(e, jA(t))
  },
  $A = function (e, t, n) {
    return new Promise(function (r, o) {
      var i = function (l) {
          try {
            s(n.next(l))
          } catch (a) {
            o(a)
          }
        },
        u = function (l) {
          try {
            s(n.throw(l))
          } catch (a) {
            o(a)
          }
        },
        s = function (l) {
          return l.done ? r(l.value) : Promise.resolve(l.value).then(i, u)
        }
      s((n = n.apply(e, t)).next())
    })
  },
  HA =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? Bu
              : Bu.apply(null, arguments)
        }
function WA(e) {
  if (typeof e != 'object' || e === null) return !1
  var t = Object.getPrototypeOf(e)
  if (t === null) return !0
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n)
  return t === n
}
var qA = (function (e) {
  IA(t, e)
  function t() {
    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
    var o = e.apply(this, n) || this
    return Object.setPrototypeOf(o, t.prototype), o
  }
  return (
    Object.defineProperty(t, Symbol.species, {
      get: function () {
        return t
      },
      enumerable: !1,
      configurable: !0,
    }),
    (t.prototype.concat = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
      return e.prototype.concat.apply(this, n)
    }),
    (t.prototype.prepend = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
      return n.length === 1 && Array.isArray(n[0])
        ? new (t.bind.apply(t, Tu([void 0], n[0].concat(this))))()
        : new (t.bind.apply(t, Tu([void 0], n.concat(this))))()
    }),
    t
  )
})(Array)
function ka(e) {
  return $t(e) ? Zm(e, function () {}) : e
}
function KA(e) {
  return typeof e == 'boolean'
}
function GA() {
  return function (t) {
    return YA(t)
  }
}
function YA(e) {
  e === void 0 && (e = {})
  var t = e.thunk,
    n = t === void 0 ? !0 : t
  e.immutableCheck, e.serializableCheck
  var r = new qA()
  return (
    n && (KA(n) ? r.push(Tf) : r.push(Tf.withExtraArgument(n.extraArgument))), r
  )
}
var XA = !0
function JA(e) {
  var t = GA(),
    n = e || {},
    r = n.reducer,
    o = r === void 0 ? void 0 : r,
    i = n.middleware,
    u = i === void 0 ? t() : i,
    s = n.devTools,
    l = s === void 0 ? !0 : s,
    a = n.preloadedState,
    c = a === void 0 ? void 0 : a,
    f = n.enhancers,
    d = f === void 0 ? void 0 : f,
    V
  if (typeof o == 'function') V = o
  else if (WA(o)) V = OA(o)
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    )
  var h = u
  typeof h == 'function' && (h = h(t))
  var g = LA.apply(void 0, h),
    k = Bu
  l && (k = HA(Vn({ trace: !XA }, typeof l == 'object' && l)))
  var m = [g]
  Array.isArray(d) ? (m = Tu([g], d)) : typeof d == 'function' && (m = d(m))
  var p = k.apply(void 0, m)
  return eh(V, c, p)
}
function gn(e, t) {
  function n() {
    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o]
    if (t) {
      var i = t.apply(void 0, r)
      if (!i) throw new Error('prepareAction did not return an object')
      return Vn(
        Vn({ type: e, payload: i.payload }, 'meta' in i && { meta: i.meta }),
        'error' in i && { error: i.error }
      )
    }
    return { type: e, payload: r[0] }
  }
  return (
    (n.toString = function () {
      return '' + e
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e
    }),
    n
  )
}
function rh(e) {
  var t = {},
    n = [],
    r,
    o = {
      addCase: function (i, u) {
        var s = typeof i == 'string' ? i : i.type
        if (s in t)
          throw new Error(
            'addCase cannot be called with two reducers for the same action type'
          )
        return (t[s] = u), o
      },
      addMatcher: function (i, u) {
        return n.push({ matcher: i, reducer: u }), o
      },
      addDefaultCase: function (i) {
        return (r = i), o
      },
    }
  return e(o), [t, n, r]
}
function ZA(e) {
  return typeof e == 'function'
}
function e1(e, t, n, r) {
  n === void 0 && (n = [])
  var o = typeof t == 'function' ? rh(t) : [t, n, r],
    i = o[0],
    u = o[1],
    s = o[2],
    l
  if (ZA(e))
    l = function () {
      return ka(e())
    }
  else {
    var a = ka(e)
    l = function () {
      return a
    }
  }
  function c(f, d) {
    f === void 0 && (f = l())
    var V = Tu(
      [i[d.type]],
      u
        .filter(function (h) {
          var g = h.matcher
          return g(d)
        })
        .map(function (h) {
          var g = h.reducer
          return g
        })
    )
    return (
      V.filter(function (h) {
        return !!h
      }).length === 0 && (V = [s]),
      V.reduce(function (h, g) {
        if (g)
          if (wn(h)) {
            var k = h,
              m = g(k, d)
            return m === void 0 ? h : m
          } else {
            if ($t(h))
              return Zm(h, function (p) {
                return g(p, d)
              })
            var m = g(h, d)
            if (m === void 0) {
              if (h === null) return h
              throw Error(
                'A case reducer on a non-draftable value must not return undefined'
              )
            }
            return m
          }
        return h
      }, f)
    )
  }
  return (c.getInitialState = l), c
}
function t1(e, t) {
  return e + '/' + t
}
function Zo(e) {
  var t = e.name
  if (!t) throw new Error('`name` is a required option for createSlice')
  typeof process < 'u'
  var n =
      typeof e.initialState == 'function' ? e.initialState : ka(e.initialState),
    r = e.reducers || {},
    o = Object.keys(r),
    i = {},
    u = {},
    s = {}
  o.forEach(function (c) {
    var f = r[c],
      d = t1(t, c),
      V,
      h
    'reducer' in f ? ((V = f.reducer), (h = f.prepare)) : (V = f),
      (i[c] = V),
      (u[d] = V),
      (s[c] = h ? gn(d, h) : gn(d))
  })
  function l() {
    var c =
        typeof e.extraReducers == 'function'
          ? rh(e.extraReducers)
          : [e.extraReducers],
      f = c[0],
      d = f === void 0 ? {} : f,
      V = c[1],
      h = V === void 0 ? [] : V,
      g = c[2],
      k = g === void 0 ? void 0 : g,
      m = Vn(Vn({}, d), u)
    return e1(n, function (p) {
      for (var A in m) p.addCase(A, m[A])
      for (var v = 0, w = h; v < w.length; v++) {
        var S = w[v]
        p.addMatcher(S.matcher, S.reducer)
      }
      k && p.addDefaultCase(k)
    })
  }
  var a
  return {
    name: t,
    reducer: function (c, f) {
      return a || (a = l()), a(c, f)
    },
    actions: s,
    caseReducers: i,
    getInitialState: function () {
      return a || (a = l()), a.getInitialState()
    },
  }
}
var n1 = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  r1 = function (e) {
    e === void 0 && (e = 21)
    for (var t = '', n = e; n--; ) t += n1[(Math.random() * 64) | 0]
    return t
  },
  o1 = ['name', 'message', 'stack', 'code'],
  dl = (function () {
    function e(t, n) {
      ;(this.payload = t), (this.meta = n)
    }
    return e
  })(),
  Lf = (function () {
    function e(t, n) {
      ;(this.payload = t), (this.meta = n)
    }
    return e
  })(),
  i1 = function (e) {
    if (typeof e == 'object' && e !== null) {
      for (var t = {}, n = 0, r = o1; n < r.length; n++) {
        var o = r[n]
        typeof e[o] == 'string' && (t[o] = e[o])
      }
      return t
    }
    return { message: String(e) }
  },
  le = (function () {
    function e(t, n, r) {
      var o = gn(t + '/fulfilled', function (a, c, f, d) {
          return {
            payload: a,
            meta: cl(Vn({}, d || {}), {
              arg: f,
              requestId: c,
              requestStatus: 'fulfilled',
            }),
          }
        }),
        i = gn(t + '/pending', function (a, c, f) {
          return {
            payload: void 0,
            meta: cl(Vn({}, f || {}), {
              arg: c,
              requestId: a,
              requestStatus: 'pending',
            }),
          }
        }),
        u = gn(t + '/rejected', function (a, c, f, d, V) {
          return {
            payload: d,
            error: ((r && r.serializeError) || i1)(a || 'Rejected'),
            meta: cl(Vn({}, V || {}), {
              arg: f,
              requestId: c,
              rejectedWithValue: !!d,
              requestStatus: 'rejected',
              aborted: (a == null ? void 0 : a.name) === 'AbortError',
              condition: (a == null ? void 0 : a.name) === 'ConditionError',
            }),
          }
        }),
        s =
          typeof AbortController < 'u'
            ? AbortController
            : (function () {
                function a() {
                  this.signal = {
                    aborted: !1,
                    addEventListener: function () {},
                    dispatchEvent: function () {
                      return !1
                    },
                    onabort: function () {},
                    removeEventListener: function () {},
                    reason: void 0,
                    throwIfAborted: function () {},
                  }
                }
                return (a.prototype.abort = function () {}), a
              })()
      function l(a) {
        return function (c, f, d) {
          var V = r != null && r.idGenerator ? r.idGenerator(a) : r1(),
            h = new s(),
            g
          function k(p) {
            ;(g = p), h.abort()
          }
          var m = (function () {
            return $A(this, null, function () {
              var p, A, v, w, S, x, b
              return FA(this, function (F) {
                switch (F.label) {
                  case 0:
                    return (
                      F.trys.push([0, 4, , 5]),
                      (w =
                        (p = r == null ? void 0 : r.condition) == null
                          ? void 0
                          : p.call(r, a, { getState: f, extra: d })),
                      s1(w) ? [4, w] : [3, 2]
                    )
                  case 1:
                    ;(w = F.sent()), (F.label = 2)
                  case 2:
                    if (w === !1 || h.signal.aborted)
                      throw {
                        name: 'ConditionError',
                        message:
                          'Aborted due to condition callback returning false.',
                      }
                    return (
                      (S = new Promise(function (D, z) {
                        return h.signal.addEventListener('abort', function () {
                          return z({
                            name: 'AbortError',
                            message: g || 'Aborted',
                          })
                        })
                      })),
                      c(
                        i(
                          V,
                          a,
                          (A = r == null ? void 0 : r.getPendingMeta) == null
                            ? void 0
                            : A.call(
                                r,
                                { requestId: V, arg: a },
                                { getState: f, extra: d }
                              )
                        )
                      ),
                      [
                        4,
                        Promise.race([
                          S,
                          Promise.resolve(
                            n(a, {
                              dispatch: c,
                              getState: f,
                              extra: d,
                              requestId: V,
                              signal: h.signal,
                              abort: k,
                              rejectWithValue: function (D, z) {
                                return new dl(D, z)
                              },
                              fulfillWithValue: function (D, z) {
                                return new Lf(D, z)
                              },
                            })
                          ).then(function (D) {
                            if (D instanceof dl) throw D
                            return D instanceof Lf
                              ? o(D.payload, V, a, D.meta)
                              : o(D, V, a)
                          }),
                        ]),
                      ]
                    )
                  case 3:
                    return (v = F.sent()), [3, 5]
                  case 4:
                    return (
                      (x = F.sent()),
                      (v =
                        x instanceof dl
                          ? u(null, V, a, x.payload, x.meta)
                          : u(x, V, a)),
                      [3, 5]
                    )
                  case 5:
                    return (
                      (b =
                        r &&
                        !r.dispatchConditionRejection &&
                        u.match(v) &&
                        v.meta.condition),
                      b || c(v),
                      [2, v]
                    )
                }
              })
            })
          })()
          return Object.assign(m, {
            abort: k,
            requestId: V,
            arg: a,
            unwrap: function () {
              return m.then(u1)
            },
          })
        }
      }
      return Object.assign(l, {
        pending: i,
        rejected: u,
        fulfilled: o,
        typePrefix: t,
      })
    }
    return (
      (e.withTypes = function () {
        return e
      }),
      e
    )
  })()
function u1(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload
  if (e.error) throw e.error
  return e.payload
}
function s1(e) {
  return e !== null && typeof e == 'object' && typeof e.then == 'function'
}
var Wc = 'listenerMiddleware'
gn(Wc + '/add')
gn(Wc + '/removeAll')
gn(Wc + '/remove')
var If
typeof queueMicrotask == 'function' &&
  queueMicrotask.bind(
    typeof window < 'u' ? window : typeof global < 'u' ? global : globalThis
  )
NA()
function oh(e, t) {
  return function () {
    return e.apply(t, arguments)
  }
}
const { toString: ih } = Object.prototype,
  { getPrototypeOf: qc } = Object,
  Kc = (e => t => {
    const n = ih.call(t)
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  Wt = e => ((e = e.toLowerCase()), t => Kc(t) === e),
  Es = e => t => typeof t === e,
  { isArray: qr } = Array,
  Ho = Es('undefined')
function l1(e) {
  return (
    e !== null &&
    !Ho(e) &&
    e.constructor !== null &&
    !Ho(e.constructor) &&
    Yn(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  )
}
const uh = Wt('ArrayBuffer')
function a1(e) {
  let t
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && uh(e.buffer)),
    t
  )
}
const c1 = Es('string'),
  Yn = Es('function'),
  sh = Es('number'),
  Gc = e => e !== null && typeof e == 'object',
  d1 = e => e === !0 || e === !1,
  Fi = e => {
    if (Kc(e) !== 'object') return !1
    const t = qc(e)
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    )
  },
  f1 = Wt('Date'),
  p1 = Wt('File'),
  m1 = Wt('Blob'),
  h1 = Wt('FileList'),
  V1 = e => Gc(e) && Yn(e.pipe),
  g1 = e => {
    const t = '[object FormData]'
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        ih.call(e) === t ||
        (Yn(e.toString) && e.toString() === t))
    )
  },
  y1 = Wt('URLSearchParams'),
  A1 = e =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
function ei(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return
  let r, o
  if ((typeof e != 'object' && (e = [e]), qr(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e)
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      u = i.length
    let s
    for (r = 0; r < u; r++) (s = i[r]), t.call(null, e[s], s, e)
  }
}
function lh(e, t) {
  t = t.toLowerCase()
  const n = Object.keys(e)
  let r = n.length,
    o
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o
  return null
}
const ah = (() =>
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global)(),
  ch = e => !Ho(e) && e !== ah
function Na() {
  const { caseless: e } = (ch(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && lh(t, o)) || o
      Fi(t[i]) && Fi(r)
        ? (t[i] = Na(t[i], r))
        : Fi(r)
        ? (t[i] = Na({}, r))
        : qr(r)
        ? (t[i] = r.slice())
        : (t[i] = r)
    }
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && ei(arguments[r], n)
  return t
}
const v1 = (e, t, n, { allOwnKeys: r } = {}) => (
    ei(
      t,
      (o, i) => {
        n && Yn(o) ? (e[i] = oh(o, n)) : (e[i] = o)
      },
      { allOwnKeys: r }
    ),
    e
  ),
  w1 = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  E1 = (e, t, n, r) => {
    ;(e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n)
  },
  S1 = (e, t, n, r) => {
    let o, i, u
    const s = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (u = o[i]), (!r || r(u, e, t)) && !s[u] && ((t[u] = e[u]), (s[u] = !0))
      e = n !== !1 && qc(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype)
    return t
  },
  x1 = (e, t, n) => {
    ;(e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length)
    const r = e.indexOf(t, n)
    return r !== -1 && r === n
  },
  C1 = e => {
    if (!e) return null
    if (qr(e)) return e
    let t = e.length
    if (!sh(t)) return null
    const n = new Array(t)
    for (; t-- > 0; ) n[t] = e[t]
    return n
  },
  k1 = (
    e => t =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && qc(Uint8Array)),
  N1 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e)
    let o
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value
      t.call(e, i[0], i[1])
    }
  },
  P1 = (e, t) => {
    let n
    const r = []
    for (; (n = e.exec(t)) !== null; ) r.push(n)
    return r
  },
  _1 = Wt('HTMLFormElement'),
  b1 = e =>
    e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o
    }),
  Ff = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  R1 = Wt('RegExp'),
  dh = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {}
    ei(n, (o, i) => {
      t(o, i, e) !== !1 && (r[i] = o)
    }),
      Object.defineProperties(e, r)
  },
  B1 = e => {
    dh(e, (t, n) => {
      if (Yn(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1
      const r = e[n]
      if (!!Yn(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1
          return
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'")
          })
      }
    })
  },
  T1 = (e, t) => {
    const n = {},
      r = o => {
        o.forEach(i => {
          n[i] = !0
        })
      }
    return qr(e) ? r(e) : r(String(e).split(t)), n
  },
  D1 = () => {},
  O1 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  L1 = e => {
    const t = new Array(10),
      n = (r, o) => {
        if (Gc(r)) {
          if (t.indexOf(r) >= 0) return
          if (!('toJSON' in r)) {
            t[o] = r
            const i = qr(r) ? [] : {}
            return (
              ei(r, (u, s) => {
                const l = n(u, o + 1)
                !Ho(l) && (i[s] = l)
              }),
              (t[o] = void 0),
              i
            )
          }
        }
        return r
      }
    return n(e, 0)
  },
  E = {
    isArray: qr,
    isArrayBuffer: uh,
    isBuffer: l1,
    isFormData: g1,
    isArrayBufferView: a1,
    isString: c1,
    isNumber: sh,
    isBoolean: d1,
    isObject: Gc,
    isPlainObject: Fi,
    isUndefined: Ho,
    isDate: f1,
    isFile: p1,
    isBlob: m1,
    isRegExp: R1,
    isFunction: Yn,
    isStream: V1,
    isURLSearchParams: y1,
    isTypedArray: k1,
    isFileList: h1,
    forEach: ei,
    merge: Na,
    extend: v1,
    trim: A1,
    stripBOM: w1,
    inherits: E1,
    toFlatObject: S1,
    kindOf: Kc,
    kindOfTest: Wt,
    endsWith: x1,
    toArray: C1,
    forEachEntry: N1,
    matchAll: P1,
    isHTMLForm: _1,
    hasOwnProperty: Ff,
    hasOwnProp: Ff,
    reduceDescriptors: dh,
    freezeMethods: B1,
    toObjectSet: T1,
    toCamelCase: b1,
    noop: D1,
    toFiniteNumber: O1,
    findKey: lh,
    global: ah,
    isContextDefined: ch,
    toJSONObject: L1,
  }
function M(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o)
}
E.inherits(M, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: E.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    }
  },
})
const fh = M.prototype,
  ph = {}
;[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach(e => {
  ph[e] = { value: e }
})
Object.defineProperties(M, ph)
Object.defineProperty(fh, 'isAxiosError', { value: !0 })
M.from = (e, t, n, r, o, i) => {
  const u = Object.create(fh)
  return (
    E.toFlatObject(
      e,
      u,
      function (l) {
        return l !== Error.prototype
      },
      s => s !== 'isAxiosError'
    ),
    M.call(u, e.message, t, n, r, o),
    (u.cause = e),
    (u.name = e.name),
    i && Object.assign(u, i),
    u
  )
}
var I1 = typeof self == 'object' ? self.FormData : window.FormData
const F1 = I1
function Pa(e) {
  return E.isPlainObject(e) || E.isArray(e)
}
function mh(e) {
  return E.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function Uf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = mh(o)), !n && i ? '[' + o + ']' : o
        })
        .join(n ? '.' : '')
    : t
}
function U1(e) {
  return E.isArray(e) && !e.some(Pa)
}
const M1 = E.toFlatObject(E, {}, null, function (t) {
  return /^is[A-Z]/.test(t)
})
function j1(e) {
  return (
    e &&
    E.isFunction(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  )
}
function Ss(e, t, n) {
  if (!E.isObject(e)) throw new TypeError('target must be an object')
  ;(t = t || new (F1 || FormData)()),
    (n = E.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, k) {
        return !E.isUndefined(k[g])
      }
    ))
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    u = n.indexes,
    l = (n.Blob || (typeof Blob < 'u' && Blob)) && j1(t)
  if (!E.isFunction(o)) throw new TypeError('visitor must be a function')
  function a(h) {
    if (h === null) return ''
    if (E.isDate(h)) return h.toISOString()
    if (!l && E.isBlob(h))
      throw new M('Blob is not supported. Use a Buffer instead.')
    return E.isArrayBuffer(h) || E.isTypedArray(h)
      ? l && typeof Blob == 'function'
        ? new Blob([h])
        : Buffer.from(h)
      : h
  }
  function c(h, g, k) {
    let m = h
    if (h && !k && typeof h == 'object') {
      if (E.endsWith(g, '{}'))
        (g = r ? g : g.slice(0, -2)), (h = JSON.stringify(h))
      else if (
        (E.isArray(h) && U1(h)) ||
        E.isFileList(h) ||
        (E.endsWith(g, '[]') && (m = E.toArray(h)))
      )
        return (
          (g = mh(g)),
          m.forEach(function (A, v) {
            !(E.isUndefined(A) || A === null) &&
              t.append(
                u === !0 ? Uf([g], v, i) : u === null ? g : g + '[]',
                a(A)
              )
          }),
          !1
        )
    }
    return Pa(h) ? !0 : (t.append(Uf(k, g, i), a(h)), !1)
  }
  const f = [],
    d = Object.assign(M1, {
      defaultVisitor: c,
      convertValue: a,
      isVisitable: Pa,
    })
  function V(h, g) {
    if (!E.isUndefined(h)) {
      if (f.indexOf(h) !== -1)
        throw Error('Circular reference detected in ' + g.join('.'))
      f.push(h),
        E.forEach(h, function (m, p) {
          ;(!(E.isUndefined(m) || m === null) &&
            o.call(t, m, E.isString(p) ? p.trim() : p, g, d)) === !0 &&
            V(m, g ? g.concat(p) : [p])
        }),
        f.pop()
    }
  }
  if (!E.isObject(e)) throw new TypeError('data must be an object')
  return V(e), t
}
function Mf(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  }
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r]
  })
}
function Yc(e, t) {
  ;(this._pairs = []), e && Ss(e, this, t)
}
const hh = Yc.prototype
hh.append = function (t, n) {
  this._pairs.push([t, n])
}
hh.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Mf)
      }
    : Mf
  return this._pairs
    .map(function (o) {
      return n(o[0]) + '=' + n(o[1])
    }, '')
    .join('&')
}
function z1(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function Vh(e, t, n) {
  if (!t) return e
  const r = (n && n.encode) || z1,
    o = n && n.serialize
  let i
  if (
    (o
      ? (i = o(t, n))
      : (i = E.isURLSearchParams(t) ? t.toString() : new Yc(t, n).toString(r)),
    i)
  ) {
    const u = e.indexOf('#')
    u !== -1 && (e = e.slice(0, u)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + i)
  }
  return e
}
class Q1 {
  constructor() {
    this.handlers = []
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    )
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(t) {
    E.forEach(this.handlers, function (r) {
      r !== null && t(r)
    })
  }
}
const jf = Q1,
  gh = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  $1 = typeof URLSearchParams < 'u' ? URLSearchParams : Yc,
  H1 = FormData,
  W1 = (() => {
    let e
    return typeof navigator < 'u' &&
      ((e = navigator.product) === 'ReactNative' ||
        e === 'NativeScript' ||
        e === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u'
  })(),
  q1 = (() =>
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function')(),
  xt = {
    isBrowser: !0,
    classes: { URLSearchParams: $1, FormData: H1, Blob },
    isStandardBrowserEnv: W1,
    isStandardBrowserWebWorkerEnv: q1,
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  }
function K1(e, t) {
  return Ss(
    e,
    new xt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return xt.isNode && E.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments)
        },
      },
      t
    )
  )
}
function G1(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map(t =>
    t[0] === '[]' ? '' : t[1] || t[0]
  )
}
function Y1(e) {
  const t = {},
    n = Object.keys(e)
  let r
  const o = n.length
  let i
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i])
  return t
}
function yh(e) {
  function t(n, r, o, i) {
    let u = n[i++]
    const s = Number.isFinite(+u),
      l = i >= n.length
    return (
      (u = !u && E.isArray(o) ? o.length : u),
      l
        ? (E.hasOwnProp(o, u) ? (o[u] = [o[u], r]) : (o[u] = r), !s)
        : ((!o[u] || !E.isObject(o[u])) && (o[u] = []),
          t(n, r, o[u], i) && E.isArray(o[u]) && (o[u] = Y1(o[u])),
          !s)
    )
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {}
    return (
      E.forEachEntry(e, (r, o) => {
        t(G1(r), o, n, 0)
      }),
      n
    )
  }
  return null
}
const X1 = { 'Content-Type': void 0 }
function J1(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e)
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r
    }
  return (n || JSON.stringify)(e)
}
const xs = {
  transitional: gh,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        i = E.isObject(t)
      if ((i && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t)))
        return o && o ? JSON.stringify(yh(t)) : t
      if (
        E.isArrayBuffer(t) ||
        E.isBuffer(t) ||
        E.isStream(t) ||
        E.isFile(t) ||
        E.isBlob(t)
      )
        return t
      if (E.isArrayBufferView(t)) return t.buffer
      if (E.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        )
      let s
      if (i) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return K1(t, this.formSerializer).toString()
        if ((s = E.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const l = this.env && this.env.FormData
          return Ss(s ? { 'files[]': t } : t, l && new l(), this.formSerializer)
        }
      }
      return i || o ? (n.setContentType('application/json', !1), J1(t)) : t
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || xs.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json'
      if (t && E.isString(t) && ((r && !this.responseType) || o)) {
        const u = !(n && n.silentJSONParsing) && o
        try {
          return JSON.parse(t)
        } catch (s) {
          if (u)
            throw s.name === 'SyntaxError'
              ? M.from(s, M.ERR_BAD_RESPONSE, this, null, this.response)
              : s
        }
      }
      return t
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: xt.classes.FormData, Blob: xt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: { common: { Accept: 'application/json, text/plain, */*' } },
}
E.forEach(['delete', 'get', 'head'], function (t) {
  xs.headers[t] = {}
})
E.forEach(['post', 'put', 'patch'], function (t) {
  xs.headers[t] = E.merge(X1)
})
const Xc = xs,
  Z1 = E.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  ev = e => {
    const t = {}
    let n, r, o
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (u) {
            ;(o = u.indexOf(':')),
              (n = u.substring(0, o).trim().toLowerCase()),
              (r = u.substring(o + 1).trim()),
              !(!n || (t[n] && Z1[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r))
          }),
      t
    )
  },
  zf = Symbol('internals')
function oo(e) {
  return e && String(e).trim().toLowerCase()
}
function Ui(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(Ui) : String(e)
}
function tv(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let r
  for (; (r = n.exec(e)); ) t[r[1]] = r[2]
  return t
}
function nv(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim())
}
function Qf(e, t, n, r) {
  if (E.isFunction(r)) return r.call(this, t, n)
  if (!!E.isString(t)) {
    if (E.isString(r)) return t.indexOf(r) !== -1
    if (E.isRegExp(r)) return r.test(t)
  }
}
function rv(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function ov(e, t) {
  const n = E.toCamelCase(' ' + t)
  ;['get', 'set', 'has'].forEach(r => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, u) {
        return this[r].call(this, t, o, i, u)
      },
      configurable: !0,
    })
  })
}
class Cs {
  constructor(t) {
    t && this.set(t)
  }
  set(t, n, r) {
    const o = this
    function i(s, l, a) {
      const c = oo(l)
      if (!c) throw new Error('header name must be a non-empty string')
      const f = E.findKey(o, c)
      ;(!f || o[f] === void 0 || a === !0 || (a === void 0 && o[f] !== !1)) &&
        (o[f || l] = Ui(s))
    }
    const u = (s, l) => E.forEach(s, (a, c) => i(a, c, l))
    return (
      E.isPlainObject(t) || t instanceof this.constructor
        ? u(t, n)
        : E.isString(t) && (t = t.trim()) && !nv(t)
        ? u(ev(t), n)
        : t != null && i(n, t, r),
      this
    )
  }
  get(t, n) {
    if (((t = oo(t)), t)) {
      const r = E.findKey(this, t)
      if (r) {
        const o = this[r]
        if (!n) return o
        if (n === !0) return tv(o)
        if (E.isFunction(n)) return n.call(this, o, r)
        if (E.isRegExp(n)) return n.exec(o)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(t, n) {
    if (((t = oo(t)), t)) {
      const r = E.findKey(this, t)
      return !!(r && (!n || Qf(this, this[r], r, n)))
    }
    return !1
  }
  delete(t, n) {
    const r = this
    let o = !1
    function i(u) {
      if (((u = oo(u)), u)) {
        const s = E.findKey(r, u)
        s && (!n || Qf(r, r[s], s, n)) && (delete r[s], (o = !0))
      }
    }
    return E.isArray(t) ? t.forEach(i) : i(t), o
  }
  clear() {
    return Object.keys(this).forEach(this.delete.bind(this))
  }
  normalize(t) {
    const n = this,
      r = {}
    return (
      E.forEach(this, (o, i) => {
        const u = E.findKey(r, i)
        if (u) {
          ;(n[u] = Ui(o)), delete n[i]
          return
        }
        const s = t ? rv(i) : String(i).trim()
        s !== i && delete n[i], (n[s] = Ui(o)), (r[s] = !0)
      }),
      this
    )
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const n = Object.create(null)
    return (
      E.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && E.isArray(r) ? r.join(', ') : r)
      }),
      n
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`)
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders'
  }
  static from(t) {
    return t instanceof this ? t : new this(t)
  }
  static concat(t, ...n) {
    const r = new this(t)
    return n.forEach(o => r.set(o)), r
  }
  static accessor(t) {
    const r = (this[zf] = this[zf] = { accessors: {} }).accessors,
      o = this.prototype
    function i(u) {
      const s = oo(u)
      r[s] || (ov(o, u), (r[s] = !0))
    }
    return E.isArray(t) ? t.forEach(i) : i(t), this
  }
}
Cs.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
])
E.freezeMethods(Cs.prototype)
E.freezeMethods(Cs)
const Ut = Cs
function fl(e, t) {
  const n = this || Xc,
    r = t || n,
    o = Ut.from(r.headers)
  let i = r.data
  return (
    E.forEach(e, function (s) {
      i = s.call(n, i, o.normalize(), t ? t.status : void 0)
    }),
    o.normalize(),
    i
  )
}
function Ah(e) {
  return !!(e && e.__CANCEL__)
}
function ti(e, t, n) {
  M.call(this, e == null ? 'canceled' : e, M.ERR_CANCELED, t, n),
    (this.name = 'CanceledError')
}
E.inherits(ti, M, { __CANCEL__: !0 })
const iv = null
function uv(e, t, n) {
  const r = n.config.validateStatus
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new M(
          'Request failed with status code ' + n.status,
          [M.ERR_BAD_REQUEST, M.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      )
}
const sv = xt.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, o, i, u, s) {
          const l = []
          l.push(n + '=' + encodeURIComponent(r)),
            E.isNumber(o) && l.push('expires=' + new Date(o).toGMTString()),
            E.isString(i) && l.push('path=' + i),
            E.isString(u) && l.push('domain=' + u),
            s === !0 && l.push('secure'),
            (document.cookie = l.join('; '))
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp('(^|;\\s*)(' + n + ')=([^;]*)')
          )
          return r ? decodeURIComponent(r[3]) : null
        },
        remove: function (n) {
          this.write(n, '', Date.now() - 864e5)
        },
      }
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null
        },
        remove: function () {},
      }
    })()
function lv(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function av(e, t) {
  return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function vh(e, t) {
  return e && !lv(t) ? av(e, t) : t
}
const cv = xt.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a')
      let r
      function o(i) {
        let u = i
        return (
          t && (n.setAttribute('href', u), (u = n.href)),
          n.setAttribute('href', u),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        )
      }
      return (
        (r = o(window.location.href)),
        function (u) {
          const s = E.isString(u) ? o(u) : u
          return s.protocol === r.protocol && s.host === r.host
        }
      )
    })()
  : (function () {
      return function () {
        return !0
      }
    })()
function dv(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ''
}
function fv(e, t) {
  e = e || 10
  const n = new Array(e),
    r = new Array(e)
  let o = 0,
    i = 0,
    u
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const a = Date.now(),
        c = r[i]
      u || (u = a), (n[o] = l), (r[o] = a)
      let f = i,
        d = 0
      for (; f !== o; ) (d += n[f++]), (f = f % e)
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), a - u < t)) return
      const V = c && a - c
      return V ? Math.round((d * 1e3) / V) : void 0
    }
  )
}
function $f(e, t) {
  let n = 0
  const r = fv(50, 250)
  return o => {
    const i = o.loaded,
      u = o.lengthComputable ? o.total : void 0,
      s = i - n,
      l = r(s),
      a = i <= u
    n = i
    const c = {
      loaded: i,
      total: u,
      progress: u ? i / u : void 0,
      bytes: s,
      rate: l || void 0,
      estimated: l && u && a ? (u - i) / l : void 0,
      event: o,
    }
    ;(c[t ? 'download' : 'upload'] = !0), e(c)
  }
}
const pv = typeof XMLHttpRequest < 'u',
  mv =
    pv &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data
        const i = Ut.from(e.headers).normalize(),
          u = e.responseType
        let s
        function l() {
          e.cancelToken && e.cancelToken.unsubscribe(s),
            e.signal && e.signal.removeEventListener('abort', s)
        }
        E.isFormData(o) &&
          (xt.isStandardBrowserEnv || xt.isStandardBrowserWebWorkerEnv) &&
          i.setContentType(!1)
        let a = new XMLHttpRequest()
        if (e.auth) {
          const V = e.auth.username || '',
            h = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : ''
          i.set('Authorization', 'Basic ' + btoa(V + ':' + h))
        }
        const c = vh(e.baseURL, e.url)
        a.open(e.method.toUpperCase(), Vh(c, e.params, e.paramsSerializer), !0),
          (a.timeout = e.timeout)
        function f() {
          if (!a) return
          const V = Ut.from(
              'getAllResponseHeaders' in a && a.getAllResponseHeaders()
            ),
            g = {
              data:
                !u || u === 'text' || u === 'json'
                  ? a.responseText
                  : a.response,
              status: a.status,
              statusText: a.statusText,
              headers: V,
              config: e,
              request: a,
            }
          uv(
            function (m) {
              n(m), l()
            },
            function (m) {
              r(m), l()
            },
            g
          ),
            (a = null)
        }
        if (
          ('onloadend' in a
            ? (a.onloadend = f)
            : (a.onreadystatechange = function () {
                !a ||
                  a.readyState !== 4 ||
                  (a.status === 0 &&
                    !(a.responseURL && a.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(f)
              }),
          (a.onabort = function () {
            !a ||
              (r(new M('Request aborted', M.ECONNABORTED, e, a)), (a = null))
          }),
          (a.onerror = function () {
            r(new M('Network Error', M.ERR_NETWORK, e, a)), (a = null)
          }),
          (a.ontimeout = function () {
            let h = e.timeout
              ? 'timeout of ' + e.timeout + 'ms exceeded'
              : 'timeout exceeded'
            const g = e.transitional || gh
            e.timeoutErrorMessage && (h = e.timeoutErrorMessage),
              r(
                new M(
                  h,
                  g.clarifyTimeoutError ? M.ETIMEDOUT : M.ECONNABORTED,
                  e,
                  a
                )
              ),
              (a = null)
          }),
          xt.isStandardBrowserEnv)
        ) {
          const V =
            (e.withCredentials || cv(c)) &&
            e.xsrfCookieName &&
            sv.read(e.xsrfCookieName)
          V && i.set(e.xsrfHeaderName, V)
        }
        o === void 0 && i.setContentType(null),
          'setRequestHeader' in a &&
            E.forEach(i.toJSON(), function (h, g) {
              a.setRequestHeader(g, h)
            }),
          E.isUndefined(e.withCredentials) ||
            (a.withCredentials = !!e.withCredentials),
          u && u !== 'json' && (a.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            a.addEventListener('progress', $f(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            a.upload &&
            a.upload.addEventListener('progress', $f(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((s = V => {
              !a ||
                (r(!V || V.type ? new ti(null, e, a) : V),
                a.abort(),
                (a = null))
            }),
            e.cancelToken && e.cancelToken.subscribe(s),
            e.signal &&
              (e.signal.aborted ? s() : e.signal.addEventListener('abort', s)))
        const d = dv(c)
        if (d && xt.protocols.indexOf(d) === -1) {
          r(new M('Unsupported protocol ' + d + ':', M.ERR_BAD_REQUEST, e))
          return
        }
        a.send(o || null)
      })
    },
  Mi = { http: iv, xhr: mv }
E.forEach(Mi, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t })
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t })
  }
})
const hv = {
  getAdapter: e => {
    e = E.isArray(e) ? e : [e]
    const { length: t } = e
    let n, r
    for (
      let o = 0;
      o < t && ((n = e[o]), !(r = E.isString(n) ? Mi[n.toLowerCase()] : n));
      o++
    );
    if (!r)
      throw r === !1
        ? new M(
            `Adapter ${n} is not supported by the environment`,
            'ERR_NOT_SUPPORT'
          )
        : new Error(
            E.hasOwnProp(Mi, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          )
    if (!E.isFunction(r)) throw new TypeError('adapter is not a function')
    return r
  },
  adapters: Mi,
}
function pl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new ti(null, e)
}
function Hf(e) {
  return (
    pl(e),
    (e.headers = Ut.from(e.headers)),
    (e.data = fl.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    hv
      .getAdapter(e.adapter || Xc.adapter)(e)
      .then(
        function (r) {
          return (
            pl(e),
            (r.data = fl.call(e, e.transformResponse, r)),
            (r.headers = Ut.from(r.headers)),
            r
          )
        },
        function (r) {
          return (
            Ah(r) ||
              (pl(e),
              r &&
                r.response &&
                ((r.response.data = fl.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = Ut.from(r.response.headers)))),
            Promise.reject(r)
          )
        }
      )
  )
}
const Wf = e => (e instanceof Ut ? e.toJSON() : e)
function Fr(e, t) {
  t = t || {}
  const n = {}
  function r(a, c, f) {
    return E.isPlainObject(a) && E.isPlainObject(c)
      ? E.merge.call({ caseless: f }, a, c)
      : E.isPlainObject(c)
      ? E.merge({}, c)
      : E.isArray(c)
      ? c.slice()
      : c
  }
  function o(a, c, f) {
    if (E.isUndefined(c)) {
      if (!E.isUndefined(a)) return r(void 0, a, f)
    } else return r(a, c, f)
  }
  function i(a, c) {
    if (!E.isUndefined(c)) return r(void 0, c)
  }
  function u(a, c) {
    if (E.isUndefined(c)) {
      if (!E.isUndefined(a)) return r(void 0, a)
    } else return r(void 0, c)
  }
  function s(a, c, f) {
    if (f in t) return r(a, c)
    if (f in e) return r(void 0, a)
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: u,
    transformRequest: u,
    transformResponse: u,
    paramsSerializer: u,
    timeout: u,
    timeoutMessage: u,
    withCredentials: u,
    adapter: u,
    responseType: u,
    xsrfCookieName: u,
    xsrfHeaderName: u,
    onUploadProgress: u,
    onDownloadProgress: u,
    decompress: u,
    maxContentLength: u,
    maxBodyLength: u,
    beforeRedirect: u,
    transport: u,
    httpAgent: u,
    httpsAgent: u,
    cancelToken: u,
    socketPath: u,
    responseEncoding: u,
    validateStatus: s,
    headers: (a, c) => o(Wf(a), Wf(c), !0),
  }
  return (
    E.forEach(Object.keys(e).concat(Object.keys(t)), function (c) {
      const f = l[c] || o,
        d = f(e[c], t[c], c)
      ;(E.isUndefined(d) && f !== s) || (n[c] = d)
    }),
    n
  )
}
const wh = '1.2.3',
  Jc = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    Jc[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e
    }
  }
)
const qf = {}
Jc.transitional = function (t, n, r) {
  function o(i, u) {
    return (
      '[Axios v' +
      wh +
      "] Transitional option '" +
      i +
      "'" +
      u +
      (r ? '. ' + r : '')
    )
  }
  return (i, u, s) => {
    if (t === !1)
      throw new M(
        o(u, ' has been removed' + (n ? ' in ' + n : '')),
        M.ERR_DEPRECATED
      )
    return (
      n &&
        !qf[u] &&
        ((qf[u] = !0),
        console.warn(
          o(
            u,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(i, u, s) : !0
    )
  }
}
function Vv(e, t, n) {
  if (typeof e != 'object')
    throw new M('options must be an object', M.ERR_BAD_OPTION_VALUE)
  const r = Object.keys(e)
  let o = r.length
  for (; o-- > 0; ) {
    const i = r[o],
      u = t[i]
    if (u) {
      const s = e[i],
        l = s === void 0 || u(s, i, e)
      if (l !== !0)
        throw new M('option ' + i + ' must be ' + l, M.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (n !== !0) throw new M('Unknown option ' + i, M.ERR_BAD_OPTION)
  }
}
const _a = { assertOptions: Vv, validators: Jc },
  Gt = _a.validators
class Du {
  constructor(t) {
    ;(this.defaults = t),
      (this.interceptors = { request: new jf(), response: new jf() })
  }
  request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Fr(this.defaults, n))
    const { transitional: r, paramsSerializer: o, headers: i } = n
    r !== void 0 &&
      _a.assertOptions(
        r,
        {
          silentJSONParsing: Gt.transitional(Gt.boolean),
          forcedJSONParsing: Gt.transitional(Gt.boolean),
          clarifyTimeoutError: Gt.transitional(Gt.boolean),
        },
        !1
      ),
      o !== void 0 &&
        _a.assertOptions(
          o,
          { encode: Gt.function, serialize: Gt.function },
          !0
        ),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase())
    let u
    ;(u = i && E.merge(i.common, i[n.method])),
      u &&
        E.forEach(
          ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
          h => {
            delete i[h]
          }
        ),
      (n.headers = Ut.concat(u, i))
    const s = []
    let l = !0
    this.interceptors.request.forEach(function (g) {
      ;(typeof g.runWhen == 'function' && g.runWhen(n) === !1) ||
        ((l = l && g.synchronous), s.unshift(g.fulfilled, g.rejected))
    })
    const a = []
    this.interceptors.response.forEach(function (g) {
      a.push(g.fulfilled, g.rejected)
    })
    let c,
      f = 0,
      d
    if (!l) {
      const h = [Hf.bind(this), void 0]
      for (
        h.unshift.apply(h, s),
          h.push.apply(h, a),
          d = h.length,
          c = Promise.resolve(n);
        f < d;

      )
        c = c.then(h[f++], h[f++])
      return c
    }
    d = s.length
    let V = n
    for (f = 0; f < d; ) {
      const h = s[f++],
        g = s[f++]
      try {
        V = h(V)
      } catch (k) {
        g.call(this, k)
        break
      }
    }
    try {
      c = Hf.call(this, V)
    } catch (h) {
      return Promise.reject(h)
    }
    for (f = 0, d = a.length; f < d; ) c = c.then(a[f++], a[f++])
    return c
  }
  getUri(t) {
    t = Fr(this.defaults, t)
    const n = vh(t.baseURL, t.url)
    return Vh(n, t.params, t.paramsSerializer)
  }
}
E.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Du.prototype[t] = function (n, r) {
    return this.request(
      Fr(r || {}, { method: t, url: n, data: (r || {}).data })
    )
  }
})
E.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (i, u, s) {
      return this.request(
        Fr(s || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: i,
          data: u,
        })
      )
    }
  }
  ;(Du.prototype[t] = n()), (Du.prototype[t + 'Form'] = n(!0))
})
const ji = Du
class Zc {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.')
    let n
    this.promise = new Promise(function (i) {
      n = i
    })
    const r = this
    this.promise.then(o => {
      if (!r._listeners) return
      let i = r._listeners.length
      for (; i-- > 0; ) r._listeners[i](o)
      r._listeners = null
    }),
      (this.promise.then = o => {
        let i
        const u = new Promise(s => {
          r.subscribe(s), (i = s)
        }).then(o)
        return (
          (u.cancel = function () {
            r.unsubscribe(i)
          }),
          u
        )
      }),
      t(function (i, u, s) {
        r.reason || ((r.reason = new ti(i, u, s)), n(r.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason)
      return
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t])
  }
  unsubscribe(t) {
    if (!this._listeners) return
    const n = this._listeners.indexOf(t)
    n !== -1 && this._listeners.splice(n, 1)
  }
  static source() {
    let t
    return {
      token: new Zc(function (o) {
        t = o
      }),
      cancel: t,
    }
  }
}
const gv = Zc
function yv(e) {
  return function (n) {
    return e.apply(null, n)
  }
}
function Av(e) {
  return E.isObject(e) && e.isAxiosError === !0
}
const ba = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
}
Object.entries(ba).forEach(([e, t]) => {
  ba[t] = e
})
const vv = ba
function Eh(e) {
  const t = new ji(e),
    n = oh(ji.prototype.request, t)
  return (
    E.extend(n, ji.prototype, t, { allOwnKeys: !0 }),
    E.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Eh(Fr(e, o))
    }),
    n
  )
}
const pe = Eh(Xc)
pe.Axios = ji
pe.CanceledError = ti
pe.CancelToken = gv
pe.isCancel = Ah
pe.VERSION = wh
pe.toFormData = Ss
pe.AxiosError = M
pe.Cancel = pe.CanceledError
pe.all = function (t) {
  return Promise.all(t)
}
pe.spread = yv
pe.isAxiosError = Av
pe.mergeConfig = Fr
pe.AxiosHeaders = Ut
pe.formToJSON = e => yh(E.isHTMLForm(e) ? new FormData(e) : e)
pe.HttpStatusCode = vv
pe.default = pe
const oe = pe,
  {
    Axios: Ox,
    AxiosError: Lx,
    CanceledError: Ix,
    isCancel: Fx,
    CancelToken: Ux,
    VERSION: Mx,
    all: jx,
    Cancel: zx,
    isAxiosError: ct,
    spread: Qx,
    toFormData: $x,
    AxiosHeaders: Hx,
    HttpStatusCode: Wx,
    formToJSON: qx,
    mergeConfig: Kx,
  } = oe,
  wv = '/assets/avatar.69de09cd.png',
  ed = e => {
    const t = e.avatar !== null ? `${_t}/resources${e.avatar}` : wv
    return {
      id: e.id,
      login: e.login,
      firstName: e.first_name,
      secondName: e.second_name,
      displayName: e.display_name,
      avatar: t,
      phone: e.phone,
      email: e.email,
    }
  },
  Ev = e => ({
    first_name: e.firstName,
    second_name: e.secondName,
    login: e.login,
    phone: e.phone,
    password: e.password,
    email: e.email,
  }),
  Sv = e =>
    e.length === 0
      ? [
          {
            id: 0,
            place: 0,
            name: `\u041A\u043E\u043C\u0430\u043D\u0434\u0430 "${Uc}" \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438 \u0438\u0433\u0440\u043E\u043A\u043E\u0432`,
            score: 0,
            games: 0,
          },
        ]
      : e
          .filter(t => t.data.id && t.data.name && t.data.score && t.data.games)
          .map((t, n) => ({
            id: t.data.id,
            place: n + 1,
            name: t.data.name,
            score: t.data.score,
            games: t.data.games,
          })),
  td = { withCredentials: !0, headers: { 'content-type': 'application/json' } },
  xv = async e => {
    const t = await oe.put(_t + '/user/profile', e, { ...td })
    return ed(t.data)
  },
  Cv = async e => (await oe.put(_t + '/user/password', e, { ...td })).data,
  kv = async e => {
    const t = await oe.put(_t + '/user/profile/avatar', e, {
      ...td,
      headers: {},
    })
    return ed(t.data)
  },
  nd = { editData: xv, editPassword: Cv, uploadAvatar: kv },
  Ra = 'http://localhost:3000',
  Sh = 'https://ya-praktikum.tech/api/v2/oauth/yandex',
  Nv = async () => {
    const {
      data: { service_id: e },
    } = await oe.get(`${Sh}/service-id?redirect_uri=${Ra}`)
    window.location.replace(
      `https://oauth.yandex.ru/authorize?response_type=code&client_id=${e}&redirect_uri=${Ra}`
    )
  },
  ni = { withCredentials: !0, headers: { 'content-type': 'application/json' } },
  Pv = async e => (await oe.post(_t + '/auth/signin', e, { ...ni })).data,
  _v = async e => (await oe.post(Sh, e, { ...ni })).data,
  bv = async e => (await oe.post(_t + '/auth/signup', e, { ...ni })).data,
  Rv = async () => {
    const e = await oe.get(_t + '/auth/user', { ...ni })
    return ed(e.data)
  },
  Bv = async () => (await oe.post(_t + '/auth/logout', void 0, { ...ni })).data,
  Kr = { login: Pv, logout: Bv, me: Rv, register: bv, oauth: _v },
  dt = e => {
    const { request: t, response: n } = e
    return n
      ? { reason: n.data.reason, status: n.status }
      : t
      ? 'server time out'
      : 'bad setting up request'
  },
  xh = { headers: { 'content-type': 'application/json' } },
  Tv = async e => await oe.get(`${Cr}/theme/${e}`),
  Dv = async ({ id: e, theme: t }) =>
    await oe.post(`${Cr}/theme/`, { user_id: e, value: t }, { ...xh }),
  Ov = async ({ id: e, theme: t }) =>
    await oe.put(`${Cr}/theme/`, { user_id: e, value: t }, { ...xh }),
  Ou = { getCurrentTheme: Tv, sendCurrentTheme: Dv, updateCurrentTheme: Ov },
  Ur = le(
    'theme/getCurrentTheme',
    async (e, { dispatch: t, rejectWithValue: n }) => {
      try {
        const {
            data: { theme: r },
          } = await Ou.getCurrentTheme(e),
          o = localStorage.getItem(Ir)
        if (o && o !== r) {
          const {
            data: { theme: i },
          } = await Ou.updateCurrentTheme({ id: e, theme: o })
          return (document.documentElement.dataset.theme = i), i
        }
        return (document.documentElement.dataset.theme = r), r
      } catch {
        const o = localStorage.getItem(Ir)
        o && t(Ba({ id: e, theme: o }))
      }
    }
  ),
  Ba = le(
    'theme/sendCurrentTheme',
    async ({ id: e, theme: t }, { rejectWithValue: n }) => {
      try {
        const {
          data: { theme: r },
        } = await Ou.sendCurrentTheme({ id: e, theme: t })
        return (document.documentElement.dataset.theme = r), r
      } catch (r) {
        return ct(r) ? n(dt(r)) : n(r)
      }
    }
  ),
  Ta = le(
    'theme/updateCurrentTheme',
    async ({ id: e, theme: t }, { rejectWithValue: n }) => {
      try {
        if (e) {
          const {
            data: { theme: r },
          } = await Ou.updateCurrentTheme({ id: e, theme: t })
          return (
            (document.documentElement.dataset.theme = r),
            localStorage.setItem(Ir, r),
            r
          )
        } else
          return (
            (document.documentElement.dataset.theme = t),
            localStorage.setItem(Ir, t),
            t
          )
      } catch (r) {
        return ct(r) ? n(dt(r)) : n(r)
      }
    }
  ),
  zi = le('user/editData', async (e, { rejectWithValue: t }) => {
    try {
      return await nd.editData(e)
    } catch (n) {
      return ct(n) ? t(dt(n)) : t(n)
    }
  }),
  Qi = le('user/editPassword', async (e, { rejectWithValue: t }) => {
    try {
      return await nd.editPassword(e)
    } catch (n) {
      return ct(n) ? t(dt(n)) : t(n)
    }
  }),
  $i = le('user/uploadAvatar', async (e, { rejectWithValue: t }) => {
    try {
      return (await nd.uploadAvatar(e)).avatar
    } catch (n) {
      return ct(n) ? t(dt(n)) : t(n)
    }
  }),
  Hi = le('user/login', async (e, { dispatch: t, rejectWithValue: n }) => {
    try {
      await Kr.login(e),
        await t(zn())
          .unwrap()
          .then(async ({ id: r }) => {
            t(Ur(r))
          })
    } catch (r) {
      return ct(r) ? n(dt(r)) : n(r)
    }
  }),
  Lv = le('user/register', async (e, { dispatch: t, rejectWithValue: n }) => {
    try {
      await Kr.register(e),
        await t(zn())
          .unwrap()
          .then(async ({ id: r }) => {
            t(Ur(r))
          })
    } catch (r) {
      return ct(r) ? n(dt(r)) : n(r)
    }
  }),
  zn = le('user/me', async (e, { dispatch: t, rejectWithValue: n }) => {
    try {
      return await Kr.me()
    } catch (r) {
      return t(Pr()), ct(r) ? n(dt(r)) : n(r)
    }
  }),
  Pr = le('user/logout', async (e, { rejectWithValue: t }) => {
    try {
      return await Kr.logout()
    } catch (n) {
      return ct(n) ? t(dt(n)) : t(n)
    }
  }),
  Wi = le('user/oauth', async (e, { dispatch: t, rejectWithValue: n }) => {
    try {
      await Kr.oauth(e)
    } catch (r) {
      return ct(r) ? n(dt(r)) : n(r)
    }
  }),
  Iv = '_profileImgSmall_q1nvn_1',
  Fv = '_profileImgMedium_q1nvn_11',
  Uv = '_profileImgLarge_q1nvn_21',
  Mv = '_profileImgGargantuan_q1nvn_31',
  jv = '_profileImg_q1nvn_1',
  zv = '_clickable_q1nvn_49',
  io = {
    profileImgSmall: Iv,
    profileImgMedium: Fv,
    profileImgLarge: Uv,
    profileImgGargantuan: Mv,
    profileImg: jv,
    clickable: zv,
  },
  Ch = e => {
    const {
        src: t,
        size: n = 'Medium',
        disabled: r = !0,
        onAvatarClick: o,
      } = e,
      i = () => {
        !r && (o == null || o())
      }
    return y('div', {
      className: r ? io.profilePicture : `${io.profilePicture} ${io.clickable}`,
      children: y('img', {
        src: t,
        className: `${io.profileImg} ${io['profileImg' + n]}`,
        alt: 'profile picture',
        onClick: i,
      }),
    })
  },
  kh = () => {
    const e = Oe(),
      { user: t } = Ve(Kn),
      { login: n, displayName: r } = Ve(Kn).user
    return B('nav', {
      className: ol.navigationBar,
      children: [
        y(Ch, { size: 'Large', src: t.avatar }),
        y(Z, { className: ol.link, to: '/profile', children: r || n }),
        y(Z, {
          className: ol.link,
          to: '/',
          onClick: () => e(Pr()),
          children: '\u0412\u044B\u0439\u0442\u0438',
        }),
      ],
    })
  },
  Qv = '_button_4u3q8_1',
  Kf = { button: Qv },
  Qe = e => {
    const {
        children: t = '\u041A\u043D\u043E\u043F\u043A\u0430',
        className: n,
      } = e,
      r = n ? `${Kf.button} ${n}` : Kf.button
    return y('button', { ...e, className: r, children: t })
  },
  $v = '/assets/bombermanLogo.0c239d72.png',
  Nh = '/assets/hero.732cc581.png',
  Hv =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABIFBMVEUAAAD8Phz/QiL9Pxz8Pxz8Ph38Px38Phz8Ph3+Phv+Pxr/NSf8Phz7Px/9Ph39Px38Pxz8Ph39Pxz8Ph38PRz9Phz9Ph38Pxz7Pxz8Px39Px38Ph30PRz8Phz8Ph39Pxz8Ph38Ph39Ph38Phv8Px78PR38PR3+QBz+Phv8Oxz/QB3/QBn8Pxz8Px37Px39Px3+QB78Px3////9inX9gWv/9vT8Ti78Ti///f38RiX/+vn/7+z+xrz9cVj8QyL/39n/2tT+sKP8Syv8SSj8QB7+1s/9mIX9UTL+q5z+nYz9YEP8Vzn/8/H/5uL+zsX/ysD+wbb+t6r9kH39h3H9e2T9Wz3+6OT/4t3+vbL+rZ/9dV3/+Pb+pZX8bFL8alD9ZktuQNsNAAAAMXRSTlMA/QTcz/7TRzkWEwbMCOnVlIuIYiLi3rbb9/Tv78mvopeSaWZeXFNLQTsaDbe3enm0rnAqPgAAA5xJREFUWMOtmWdbIjEQgIdlYZcucIC9N8ByI4JUaSoo6tnbtf//Lw6VsOuahAne+9E88z6ZZybZOMAIfOZqdEtPhGdmwsng9lLc9MP4hDaj3ml0MKXHjOxYuvSE24VcXJMTpvLm4hGU4ZlbCSnoAsuTOJLIWoCo0zZ0JOE1NIrPt+hCIq4F32jfehIVSBggJ7DrQSU8MWna/hQqM58R+74FcQyCfqHPi2Ph/ibI141j4uUaM6R86VkH5lHCUbtVOLBx6FhPfa51TOQ6PDu5ajxUzvN2btHBjtNnePg7+32d3+OQ+9SP647zluD6asdFSyIVYvLDKdQWeLpSl+2OIMRFzZ4w7z7oNFg4SejasFWY19EHzEcUom7dj2u8fH/Y4ouV+mW1T0MmxOXhBnnX/Y2lqzRrBXxjXyp0sy2ucBbbleHunjuISBFifCCc46ydsND8PiJVGHn3mR5OQ9dZ6A3ShZh+E05wVnrlQWSjpCKcePVlebdWjkXeoopwMiRq6i6ryL2S0LUpumaeBoHnLSUhRvtCnbdQZS1YUhN6AfxT/1M47QOTu3DFUi6oCdGEOPJoqhaFsQpLiLKDcqcojMIW8vjDIq8UhSngfzxbFZZzR02og+CxVWWhT2rCBIT5CzUWWt5XEoZhVrBSt4wqwlmhsFYcGnNKwrBoqWt9kpsthZSTwieI7St1fEYVJkFHEZ1jy5j/dUQTBkHyCO7V9ywueyThNkRRTLtqM5ZPKcIlWEUJhabN+NAmCONgopTcT+Yo1mjXl29aKjwcVuYZCcIpP4AXGdJ7rF6iCHUAaVWwV2GKGlKEsb5w0yX2lS6ZoUn7jBp9YcgtFt6w43dxQPvQZ9lThM9ZmR2UF4WnCKRHn+brI5LQMxhFRATCUxZ+Qbxt5uCdON93zxIu3iFNuDIQ8stSGrZ0F2nCyHBQsixt6Qvqk3gNGAHOpfiXdUz5BWlCr23ssuH6VOG61dIEIWtqhrYorPBjmyhc0MCGzy1o6WINacKEzzGu8XxIuGG1NE3oMcDBzoeE8wMeS2jnTvgPeAycaN/RolUY0Hb0Jvt7yTm80ThDka8MMTKUsQ0dt18wCJLcjPSxzdezDjIfh8y8ui8lnRtrMdVx364GcoyEUjnWCSPTBfrIdNEHBDSD2D/6hkYdO69FCNkuMx1JuTInr04kHgJFTNnoPg3jkDVi+pTTNu2NboZgfPxmfGlLT77+/JHQU9FVc1Rd/wHkEcaYNJrvugAAAABJRU5ErkJggg==',
  Wv = '_linkButton_1n2tr_111',
  Be = { linkButton: Wv },
  qv = '_landing_wyfjp_1',
  Kv = '_wrapper_wyfjp_23',
  Gv = '_logo_wyfjp_39',
  Yv = '_descriptionTop_wyfjp_51',
  Xv = '_descriptionBottom_wyfjp_53',
  Jv = '_link_wyfjp_85',
  Zv = '_buttonWrapper_wyfjp_95',
  e3 = '_heroImg_wyfjp_109',
  t3 = '_buttonYandex_wyfjp_125',
  Fe = {
    landing: qv,
    wrapper: Kv,
    logo: Gv,
    descriptionTop: Yv,
    descriptionBottom: Xv,
    link: Jv,
    buttonWrapper: Zv,
    heroImg: e3,
    buttonYandex: t3,
  }
var un = (e => ((e.LIGHT = 'light'), (e.DARK = 'dark'), e))(un || {})
const n3 = { isLoading: !1, error: null, current: 'light' },
  Ph = Zo({
    name: 'theme',
    initialState: n3,
    reducers: {
      setTheme(e, t) {
        e.current = t.payload
      },
    },
    extraReducers: e => {
      e.addCase(Ur.pending, t => {
        t.isLoading = !0
      })
        .addCase(Ur.fulfilled, (t, n) => {
          ;(t.isLoading = !1), (t.current = n.payload)
        })
        .addCase(Ba.pending, t => {
          t.isLoading = !0
        })
        .addCase(Ba.fulfilled, (t, n) => {
          ;(t.isLoading = !1), (t.current = n.payload)
        })
        .addCase(Ta.pending, t => {
          t.isLoading = !0
        })
        .addCase(Ta.fulfilled, (t, n) => {
          ;(t.isLoading = !1), (t.current = n.payload)
        })
    },
  }),
  r3 = Ph.reducer,
  { setTheme: o3 } = Ph.actions,
  i3 = '_slider_1eelz_31',
  u3 = '_round_1eelz_115',
  ml = { switch: '_switch_1eelz_1', slider: i3, round: u3 },
  s3 = () => {
    const e = Oe(),
      t = Ve(fA),
      {
        user: { id: n },
      } = Ve(Kn)
    return B('label', {
      className: ml.switch,
      children: [
        y('input', {
          type: 'checkbox',
          checked: t === un.DARK,
          onChange: () =>
            e(Ta({ id: n, theme: t === un.LIGHT ? un.DARK : un.LIGHT })),
        }),
        y('span', { className: `${ml.slider} ${ml.round}` }),
      ],
    })
  },
  l3 = () => {
    const { displayName: e, login: t } = Ve(Kn).user
    return B(Ft, {
      children: [
        B('div', {
          className: Fe.descriptionTop,
          children: [
            '\u041F\u0440\u0438\u0432\u0435\u0442 ',
            e || t,
            '! ',
            y('br', {}),
            '\u0421\u043F\u0435\u0448\u0438\u043C \u043D\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C, \u0447\u0442\u043E \u0442\u044B \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043C\u043E\u0436\u0435\u0448\u044C \u043E\u0441\u0432\u0435\u0436\u0438\u0442\u044C \u0441\u0432\u043E\u0438 \u0437\u043D\u0430\u043D\u0438\u044F \u043F\u043E \u0438\u0433\u0440\u0435, \u043F\u0435\u0440\u0435\u0447\u0438\u0442\u0430\u0432',
            ' ',
            y(Z, {
              className: Fe.link,
              to: '/rules',
              children: '\u043F\u0440\u0430\u0432\u0438\u043B\u0430',
            }),
            ' ',
            '\u0438 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C',
            ' ',
            y(Z, {
              className: Fe.link,
              to: '/leaderboard',
              children:
                '\u0442\u0430\u0431\u043B\u0438\u0446\u0443 \u043B\u0438\u0434\u0435\u0440\u043E\u0432!',
            }),
          ],
        }),
        y(Z, {
          className: Be.linkButton,
          to: '/game',
          children: '\u041F\u043E\u0433\u043D\u0430\u043B\u0438',
        }),
      ],
    })
  },
  a3 = () =>
    B(Ft, {
      children: [
        B('div', {
          className: Fe.descriptionTop,
          children: [
            '\u041F\u0440\u0438\u0432\u0435\u0442, \u043C\u044B \u0440\u0430\u0434\u044B \u043F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u0431\u044F! ',
            y('br', {}),
            '\u041F\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043C \u0442\u044B \u043D\u0430\u0447\u043D\u0451\u0448\u044C \u0432\u0437\u0440\u044B\u0432\u0430\u0442\u044C \u0432\u0441\u0451 \u0432\u043E\u043A\u0440\u0443\u0433, \u0437\u0430\u0433\u043B\u044F\u043D\u0438 \u0432',
            ' ',
            y(Z, {
              className: Fe.link,
              to: '/rules',
              children: '\u043F\u0440\u0430\u0432\u0438\u043B\u0430',
            }),
            '. \u0423\u0432\u0435\u0440\u0435\u043D\u044B, \u044D\u0442\u043E \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0442\u0435\u0431\u0435 \u0432\u043E\u0437\u0433\u043B\u0430\u0432\u0438\u0442\u044C \u043D\u0430\u0448\u0443',
            ' ',
            y(Z, {
              className: Fe.link,
              to: '/leaderboard',
              children:
                '\u0442\u0430\u0431\u043B\u0438\u0446\u0443 \u043B\u0438\u0434\u0435\u0440\u043E\u0432!',
            }),
          ],
        }),
        B('div', {
          className: Fe.buttonWrapper,
          children: [
            y(Z, {
              className: Be.linkButton,
              to: '/sign-in',
              children: '\u0412\u043E\u0439\u0442\u0438',
            }),
            B(Qe, {
              className: Fe.buttonYandex,
              onClick: Nv,
              children: [
                y('img', {
                  src: Hv,
                  alt: '\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u042F\u043D\u0434\u0435\u043A\u0441\u0430',
                  width: 40,
                }),
                'ID',
              ],
            }),
            y(Z, {
              className: Be.linkButton,
              to: '/sign-up',
              children:
                '\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F',
            }),
          ],
        }),
      ],
    }),
  c3 = () => {
    const { isAuth: e } = Ve(Kn),
      t = e ? y(kh, {}) : null,
      n = e ? y(l3, {}) : y(a3, {})
    return B('div', {
      className: Fe.landing,
      children: [
        t,
        B('div', {
          className: Fe.wrapper,
          children: [
            y(s3, {}),
            y('img', {
              className: Fe.logo,
              src: $v,
              alt: 'bomberman-logo',
              draggable: 'false',
            }),
            n,
            B('div', {
              className: Fe.descriptionBottom,
              children: [
                '\u0415\u0441\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B? \u0421\u043A\u043E\u0440\u0435\u0435 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438 \u043A \u043D\u0430\u043C \u043D\u0430',
                ' ',
                y(Z, {
                  className: Fe.link,
                  to: '/forum',
                  children: '\u0444\u043E\u0440\u0443\u043C',
                }),
              ],
            }),
          ],
        }),
        y('img', {
          className: Fe.heroImg,
          src: Nh,
          alt: 'hero-img',
          draggable: 'false',
        }),
      ],
    })
  },
  d3 = '_field_18tzy_1',
  f3 = '_label_18tzy_9',
  p3 = '_input_18tzy_19',
  m3 = '_error_18tzy_47',
  Un = { field: d3, label: f3, input: p3, error: m3 },
  Y = e => {
    const {
      children: t,
      label: n,
      placeholder: r,
      name: o,
      value: i,
      error: u,
      onChange: s,
      onBlur: l,
      type: a,
      disabled: c,
    } = e
    return B('div', {
      className: Un.field,
      children: [
        y('label', { className: Un.label, children: n }),
        B('div', {
          children: [
            y('input', {
              className: Un.input,
              placeholder: r,
              name: o,
              type: a,
              value: i,
              onChange: s,
              onBlur: l,
              disabled: c,
            }),
            t,
          ],
        }),
        y('p', { className: Un.error, children: c ? '' : u }),
      ],
    })
  },
  ks = ({ validations: e = {}, initialValues: t = {} }) => {
    if (typeof e != 'object')
      throw new Error('the `validations` should be an object')
    if (typeof t != 'object')
      throw new Error('the `initialValues` should be an object')
    const [n, r] = N.exports.useState(t),
      [o, i] = N.exports.useState({}),
      [u, s] = N.exports.useState({}),
      l = (d, V) => {
        const h = e[d]
        if (h) {
          if (h.pattern && !RegExp(h.pattern.value).test(V))
            return h.pattern.message || 'invalid'
          if (
            h.custom &&
            typeof h.custom.validation == 'function' &&
            !h.custom.validation(V)
          )
            return h.custom.message || 'invalid'
        }
        return ''
      }
    return {
      values: n,
      errors: o,
      watch: d => {
        if (!d) throw new Error('The field name parameter is required')
        if (d && typeof d != 'string')
          throw new Error('The field name should be a string')
        return n[d]
      },
      validateField: l,
      register: d => {
        if (!d) throw new Error('The field name parameter is required')
        if (d && typeof d != 'string')
          throw new Error('The field name should be a string')
        return {
          value: n[d] || '',
          error: o[d] || '',
          onChange: V => {
            const { value: h } = V.target
            r(g => ({ ...g, [d]: h })), u[d] && i(g => ({ ...g, [d]: l(d, h) }))
          },
          onBlur: V => {
            const { value: h } = V.target
            s(g => ({ ...g, [d]: !0 })), i(g => ({ ...g, [d]: l(d, h) }))
          },
        }
      },
      isValid: () => {
        const d = Object.keys(e).reduce((V, h) => {
          const g = l(h, n[h] || '')
          return !g && u[h] && n[h]
            ? V
            : (s(k => ({ ...k, [h]: !0 })), { ...V, [h]: g })
        }, {})
        return i(d), !Object.keys(d).length
      },
    }
  },
  Gf = {
    displayName: {
      custom: {
        validation: e => e.length > 3,
        message:
          '\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0434\u043B\u0438\u043D\u0435\u0435 3 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432',
      },
    },
    firstName: {
      custom: {
        validation: e => e.length > 2,
        message:
          '\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0434\u043B\u0438\u043D\u0435\u0435 2 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432',
      },
    },
    secondName: {
      custom: {
        validation: e => e.length > 3,
        message:
          '\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0434\u043B\u0438\u043D\u0435\u0435 3 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432',
      },
    },
    login: {
      custom: {
        validation: e => e.length > 3,
        message:
          '\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0434\u043B\u0438\u043D\u0435\u0435 3 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432',
      },
    },
    email: {
      pattern: {
        value: '^([A-Za-z0-9_\\-.])+@([A-Za-z0-9_\\-.])+\\.([A-Za-z]{2,4})$',
        message:
          '\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u043F\u043E\u0447\u0442\u044B',
      },
    },
    phone: {
      pattern: {
        value: '^((8|\\+7)[- ]?)?(\\(?\\d{3}\\)?[- ]?)?[\\d\\- ]{7,10}$',
        message:
          '\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430',
      },
    },
    password: {
      custom: {
        validation: e => e.length > 6,
        message:
          '\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0434\u043B\u0438\u043D\u0435\u0435 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432',
      },
    },
    newPassword: {
      custom: {
        validation: e => e.length > 6,
        message:
          '\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0434\u043B\u0438\u043D\u0435\u0435 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432',
      },
    },
  },
  Ns = e => e.reduce((t, n) => (Gf[n] ? { ...t, [n]: Gf[n] } : t), {}),
  h3 = '_signIn_wft47_1',
  V3 = '_signInHeader_wft47_19',
  g3 = '_signInContent_wft47_27',
  y3 = '_signInAction_wft47_43',
  A3 = '_actionButton_wft47_59',
  tr = {
    signIn: h3,
    signInHeader: V3,
    signInContent: g3,
    signInAction: y3,
    actionButton: A3,
  }
function v3(e) {
  const [t, n] = N.exports.useState({
      isLoading: !1,
      isAuth: !1,
      error: null,
      user: {
        id: null,
        firstName: '',
        secondName: '',
        displayName: '',
        login: '',
        email: '',
        phone: '',
        avatar: '',
      },
    }),
    [r, o] = N.exports.useState(null)
  async function i() {
    try {
      const u = await oe.post(
        'https://alt-f4-bomberman-21.ya-praktikum.tech/user',
        { data: e }
      )
      n(u.data)
    } catch (u) {
      o(u.message)
    }
  }
  return (
    N.exports.useEffect(() => {
      i()
    }, []),
    { user: t, error: r }
  )
}
const qi = le('user/getAuth', async e => v3(e)),
  _h = {
    id: null,
    firstName: '',
    secondName: '',
    displayName: '',
    login: '',
    avatar: '',
    email: '',
    phone: '',
  },
  w3 = { error: null, isLoading: !1, isAuth: !1, user: _h },
  E3 = Zo({
    name: 'user',
    initialState: w3,
    reducers: {
      setAuthTrue(e) {
        e.isAuth = !0
      },
      setAuthFalse(e) {
        e.isAuth = !1
      },
      toggleAuth(e) {
        e.isAuth = !e.isAuth
      },
    },
    extraReducers: e => {
      e.addCase(zi.pending, (t, n) => {
        t.isLoading = !0
      })
        .addCase(zi.fulfilled, (t, n) => {
          const r = n.payload
          ;(t.isLoading = !1), r && (t.user = r)
        })
        .addCase(zi.rejected, (t, n) => {
          ;(t.isLoading = !1), (t.error = n.payload)
        })
        .addCase(Qi.pending, (t, n) => {
          t.isLoading = !0
        })
        .addCase(Qi.fulfilled, (t, n) => {
          t.isLoading = !1
        })
        .addCase(Qi.rejected, (t, n) => {
          ;(t.isLoading = !1), (t.error = n.payload)
        })
        .addCase($i.pending, (t, n) => {
          t.isLoading = !0
        })
        .addCase($i.fulfilled, (t, n) => {
          const r = n.payload
          ;(t.isLoading = !1), r && (t.user.avatar = r)
        })
        .addCase($i.rejected, (t, n) => {
          ;(t.isLoading = !1), (t.error = n.payload)
        })
        .addCase(Hi.pending, (t, n) => {
          t.isLoading = !0
        })
        .addCase(Hi.fulfilled, (t, n) => {
          ;(t.isLoading = !1), (t.isAuth = !0)
        })
        .addCase(Hi.rejected, (t, n) => {
          ;(t.isLoading = !1), (t.error = n.payload)
        })
        .addCase(zn.pending, (t, n) => {
          t.isLoading = !0
        })
        .addCase(zn.fulfilled, (t, n) => {
          const r = n.payload
          ;(t.isLoading = !1), r && ((t.isAuth = !0), (t.user = r))
        })
        .addCase(zn.rejected, (t, n) => {
          ;(t.isLoading = !1), (t.error = n.payload)
        })
        .addCase(Pr.pending, (t, n) => {
          t.isLoading = !0
        })
        .addCase(Pr.fulfilled, (t, n) => {
          const r = n.payload
          ;(t.isLoading = !1), r && ((t.isAuth = !1), (t.user = _h))
        })
        .addCase(Pr.rejected, (t, n) => {
          ;(t.isLoading = !1), (t.error = n.payload)
        })
        .addCase(qi.pending, t => {
          ;(t.error = null), (t.isAuth = !1), (t.isLoading = !0)
        })
        .addCase(qi.fulfilled, (t, n) => {
          const { user: r } = n.payload
          ;(t.isLoading = !1),
            (t.isAuth = r.isAuth),
            r.isAuth &&
              ((t.user.id = r.user.id),
              (t.user.firstName = r.user.firstName),
              (t.user.secondName = r.user.secondName),
              (t.user.displayName = r.user.displayName),
              (t.user.login = r.user.login),
              (t.user.email = r.user.email),
              (t.user.phone = r.user.phone))
        })
        .addCase(qi.rejected, (t, n) => {
          ;(t.isLoading = !1), (t.isAuth = !1), (t.error = n.payload)
        })
        .addCase(Wi.pending, (t, n) => {
          ;(t.isLoading = !0), (t.error = null)
        })
        .addCase(Wi.fulfilled, (t, n) => {
          t.isLoading = !1
        })
        .addCase(Wi.rejected, (t, n) => {
          ;(t.isLoading = !1), (t.error = n.payload)
        })
    },
  }),
  S3 = E3.reducer,
  x3 = () => {
    const e = Oe(),
      t = $r(),
      [n, r] = N.exports.useState()
    N.exports.useEffect(() => {
      r(Ns(['login', 'password']))
    }, [])
    const {
        values: o,
        errors: i,
        register: u,
        watch: s,
        isValid: l,
      } = ks({ validations: n }),
      a = c => {
        c.preventDefault(),
          e(qi({ name: '', password: '' })),
          l() && (e(Hi(o)), t('/'))
      }
    return y(Ft, {
      children: B('form', {
        className: tr.signIn,
        onSubmit: a,
        children: [
          y('div', {
            className: tr.signInHeader,
            children: '\u0412\u0445\u043E\u0434',
          }),
          B('div', {
            className: tr.signInContent,
            children: [
              y(Y, {
                label: '\u041B\u043E\u0433\u0438\u043D',
                name: 'name',
                type: 'text',
                ...u('login'),
              }),
              y(Y, {
                label: '\u041F\u0430\u0440\u043E\u043B\u044C',
                name: 'password',
                type: 'password',
                ...u('password'),
              }),
            ],
          }),
          B('div', {
            className: tr.signInAction,
            children: [
              y('div', {
                className: tr.actionButton,
                children: y(Qe, {
                  type: 'submit',
                  children:
                    '\u0412\u0441\u0451 \u0432\u0435\u0440\u043D\u043E!',
                }),
              }),
              y('div', {
                className: tr.actionButton,
                children: y(Z, {
                  className: Be.linkButton,
                  to: '/',
                  children:
                    '\u041D\u0430 \u0413\u043B\u0430\u0432\u043D\u0443\u044E',
                }),
              }),
            ],
          }),
        ],
      }),
    })
  },
  C3 = '_signUp_1bae0_1',
  k3 = '_signUpHeader_1bae0_19',
  N3 = '_signUpContent_1bae0_27',
  P3 = '_signUpAction_1bae0_43',
  _3 = '_actionButton_1bae0_59',
  nr = {
    signUp: C3,
    signUpHeader: k3,
    signUpContent: N3,
    signUpAction: P3,
    actionButton: _3,
  },
  b3 = () => {
    const e = $r(),
      t = Oe(),
      [n, r] = N.exports.useState()
    N.exports.useEffect(() => {
      r(Ns(['login', 'firstName', 'secondName', 'phone', 'email', 'password']))
    }, [])
    const {
        values: o,
        errors: i,
        register: u,
        watch: s,
        isValid: l,
      } = ks({
        validations: {
          ...n,
          repeatPassword: {
            custom: {
              validation: c => c === s('password'),
              message:
                '\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442',
            },
          },
        },
      }),
      a = c => {
        if ((c.preventDefault(), l())) {
          const { repeatPassword: f, ...d } = o
          t(Lv(Ev(d))), e('/')
        }
      }
    return y(Ft, {
      children: B('form', {
        className: nr.signUp,
        onSubmit: a,
        children: [
          y('div', {
            className: nr.signUpHeader,
            children:
              '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F',
          }),
          B('div', {
            className: nr.signUpContent,
            children: [
              y(Y, {
                label: '\u041B\u043E\u0433\u0438\u043D',
                name: 'name',
                type: 'text',
                ...u('login'),
              }),
              y(Y, {
                label: '\u0418\u043C\u044F',
                name: 'firstName',
                type: 'text',
                ...u('firstName'),
              }),
              y(Y, {
                label: '\u0424\u0430\u043C\u0438\u043B\u0438\u044F',
                name: 'secondName',
                type: 'text',
                ...u('secondName'),
              }),
              y(Y, {
                label: '\u041F\u043E\u0447\u0442\u0430',
                name: 'email',
                type: 'email',
                ...u('email'),
              }),
              y(Y, {
                label: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D',
                name: 'phone',
                type: 'tel',
                ...u('phone'),
              }),
              y(Y, {
                label: '\u041F\u0430\u0440\u043E\u043B\u044C',
                name: 'password',
                type: 'password',
                ...u('password'),
              }),
              y(Y, {
                label:
                  '\u041F\u0430\u0440\u043E\u043B\u044C \u0435\u0449\u0435 \u0440\u0430\u0437',
                name: 'repeatPassword',
                type: 'password',
                ...u('repeatPassword'),
              }),
            ],
          }),
          B('div', {
            className: nr.signUpAction,
            children: [
              y('div', {
                className: nr.actionButton,
                children: y(Qe, {
                  type: 'submit',
                  children:
                    '\u0412\u0441\u0451 \u0432\u0435\u0440\u043D\u043E!',
                }),
              }),
              y('div', {
                className: nr.actionButton,
                children: y(Z, {
                  className: Be.linkButton,
                  to: '/',
                  children:
                    '\u041D\u0430 \u0413\u043B\u0430\u0432\u043D\u0443\u044E',
                }),
              }),
            ],
          }),
        ],
      }),
    })
  },
  R3 = '_modal_1hqxq_1',
  B3 = '_modalActive_1hqxq_21',
  T3 = '_modalClose_1hqxq_33',
  D3 = '_modalContent_1hqxq_41',
  uo = { modal: R3, modalActive: B3, modalClose: T3, modalContent: D3 },
  O3 = e => {
    const { children: t, isActive: n, setActive: r } = e,
      o = () => {
        r(!1)
      }
    return y('div', {
      className: n
        ? `${uo.modal} ${uo.modalActive}`
        : `${uo.modal} ${uo.modalClose}`,
      onClick: o,
      children: y('div', {
        className: uo.modalContent,
        onClick: i => i.stopPropagation(),
        children: t,
      }),
    })
  },
  L3 = '_card_cgtmw_1',
  I3 = '_cardRow_cgtmw_21',
  F3 = '_cardColumn_cgtmw_35',
  U3 = '_cardHeader_cgtmw_47',
  M3 = '_cardContent_cgtmw_59',
  j3 = '_cardContentFile_cgtmw_71',
  z3 = '_cardForm_cgtmw_81',
  so = {
    card: L3,
    cardRow: I3,
    cardColumn: F3,
    cardHeader: U3,
    cardContent: M3,
    cardContentFile: j3,
    cardForm: z3,
  },
  Q3 = '_inputFile_1i493_1',
  $3 = '_buttonLink_1i493_13',
  Yf = { inputFile: Q3, buttonLink: $3 },
  H3 = e => {
    const t = Oe(),
      [n, r] = N.exports.useState(
        '\u0424\u0430\u0439\u043B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D'
      ),
      [o, i] = N.exports.useState({}),
      { isActive: u, setActive: s } = e,
      l = c => {
        const { files: f } = c.target
        if (!(f != null && f.length)) return
        const [d] = f
        i(d), r(d.name)
      }
    return y(O3, {
      isActive: u,
      setActive: s,
      children: y('form', {
        onSubmit: c => {
          if ((c.preventDefault(), !o || o === null)) return
          const f = new FormData()
          f.append('avatar', o),
            t($i(f)),
            i(null),
            r(
              '\u0424\u0430\u0439\u043B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D'
            )
        },
        children: B('div', {
          className: `${so.card} ${so.cardColumn}`,
          children: [
            y('h3', {
              className: so.cardHeader,
              children:
                '\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B',
            }),
            B('div', {
              className: so.cardContent,
              children: [
                y('div', { className: Un.label, children: n }),
                y('input', {
                  className: Yf.inputFile,
                  name: 'file',
                  type: 'file',
                  id: 'avatar',
                  onChange: l,
                }),
                y('label', {
                  className: Un.label,
                  htmlFor: 'avatar',
                  children: y('span', {
                    className: Yf.buttonLink,
                    children:
                      '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430',
                  }),
                }),
                y('p', { className: Un.error }),
              ],
            }),
            y('div', {
              className: so.cardAction,
              children: y(Qe, {
                type: 'submit',
                children:
                  '\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C',
              }),
            }),
          ],
        }),
      }),
    })
  },
  W3 = '_profile_vhtcv_1',
  q3 = '_profileContent_vhtcv_21',
  K3 = '_profileAction_vhtcv_35',
  G3 = '_actionButton_vhtcv_49',
  Y3 = '_buttonLink_vhtcv_57',
  X3 = '_buttonDanger_vhtcv_81',
  nt = {
    profile: W3,
    profileContent: q3,
    profileAction: K3,
    actionButton: G3,
    buttonLink: Y3,
    buttonDanger: X3,
  },
  J3 = () => {
    const { user: e } = Ve(Kn),
      t = Oe(),
      [n, r] = N.exports.useState(),
      [o, i] = N.exports.useState(!1),
      [u, s] = N.exports.useState(!1)
    N.exports.useEffect(() => {
      r(
        Ns([
          'displayName',
          'firstName',
          'secondName',
          'phone',
          'email',
          'login',
        ])
      )
    }, [])
    const {
        values: l,
        register: a,
        isValid: c,
      } = ks({ validations: n, initialValues: e }),
      f = g => {
        g.preventDefault(),
          c() &&
            t(
              zi({
                login: l.login,
                display_name: l.displayName,
                first_name: l.firstName,
                second_name: l.secondName,
                phone: l.phone,
                email: l.email,
              })
            )
      },
      d = () => {
        i(!o)
      },
      V = () => {
        t(Pr())
      },
      h = () => {
        s(!0)
      }
    return B(Ft, {
      children: [
        y(H3, { isActive: u, setActive: s }),
        B('form', {
          className: nt.profile,
          onSubmit: f,
          children: [
            y(Ch, {
              size: 'Gargantuan',
              src: e.avatar,
              disabled: !o,
              onAvatarClick: h,
            }),
            o
              ? B(Ft, {
                  children: [
                    B('div', {
                      className: nt.profileContent,
                      children: [
                        y(Y, {
                          label:
                            '\u041F\u0441\u0435\u0432\u0434\u043E\u043D\u0438\u043C',
                          name: 'name',
                          type: 'text',
                          ...a('displayName'),
                          disabled: !o,
                        }),
                        y(Y, {
                          label: '\u041B\u043E\u0433\u0438\u043D',
                          placeholder: 'Login',
                          name: 'login',
                          type: 'text',
                          ...a('login'),
                          disabled: !o,
                        }),
                        y(Y, {
                          label: '\u0418\u043C\u044F',
                          name: 'firstName',
                          type: 'text',
                          ...a('firstName'),
                          disabled: !o,
                        }),
                        y(Y, {
                          label: '\u0424\u0430\u043C\u0438\u043B\u0438\u044F',
                          name: 'secondName',
                          type: 'text',
                          ...a('secondName'),
                          disabled: !o,
                        }),
                        y(Y, {
                          label: '\u041F\u043E\u0447\u0442\u0430',
                          name: 'email',
                          type: 'email',
                          ...a('email'),
                          disabled: !o,
                        }),
                        y(Y, {
                          label: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D',
                          name: 'phone',
                          type: 'tel',
                          ...a('phone'),
                          disabled: !o,
                        }),
                      ],
                    }),
                    B('div', {
                      className: nt.profileAction,
                      children: [
                        y('div', {
                          className: nt.actionButton,
                          children: y(Qe, {
                            type: 'submit',
                            children:
                              '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C',
                          }),
                        }),
                        y('div', {
                          className: nt.actionButton,
                          children: y(Qe, {
                            onClick: d,
                            children: '\u041D\u0430\u0437\u0430\u0434',
                          }),
                        }),
                      ],
                    }),
                  ],
                })
              : B(Ft, {
                  children: [
                    B('div', {
                      className: nt.profileContent,
                      children: [
                        y(Y, {
                          label:
                            '\u041F\u0441\u0435\u0432\u0434\u043E\u043D\u0438\u043C',
                          name: 'name',
                          type: 'text',
                          value: e.displayName,
                          disabled: !o,
                        }),
                        y(Y, {
                          label: '\u041B\u043E\u0433\u0438\u043D',
                          placeholder: 'Login',
                          name: 'login',
                          type: 'text',
                          value: e.login,
                          disabled: !o,
                        }),
                        y(Y, {
                          label: '\u0418\u043C\u044F',
                          name: 'firstName',
                          type: 'text',
                          value: e.firstName,
                          disabled: !o,
                        }),
                        y(Y, {
                          label: '\u0424\u0430\u043C\u0438\u043B\u0438\u044F',
                          name: 'secondName',
                          type: 'text',
                          value: e.secondName,
                          disabled: !o,
                        }),
                        y(Y, {
                          label: '\u041F\u043E\u0447\u0442\u0430',
                          name: 'email',
                          type: 'email',
                          value: e.email,
                          disabled: !o,
                        }),
                        y(Y, {
                          label: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D',
                          name: 'phone',
                          type: 'tel',
                          value: e.phone,
                          disabled: !o,
                        }),
                      ],
                    }),
                    B('div', {
                      className: nt.profileAction,
                      children: [
                        y('div', {
                          className: nt.actionButton,
                          children: y(Qe, {
                            onClick: d,
                            children:
                              '\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435',
                          }),
                        }),
                        y('div', {
                          className: nt.actionButton,
                          children: y(Z, {
                            className: nt.buttonLink,
                            to: '/profile/password',
                            children:
                              '\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C',
                          }),
                        }),
                        y('div', {
                          className: nt.actionButton,
                          children: y(Z, {
                            className: nt.buttonDanger,
                            onClick: V,
                            to: '/',
                            children: '\u0412\u044B\u0445\u043E\u0434',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
          ],
        }),
      ],
    })
  },
  Z3 = '_changePassword_11kvz_1',
  ew = '_changePasswordHeader_11kvz_19',
  tw = '_changePasswordContent_11kvz_29',
  nw = '_changePasswordAction_11kvz_45',
  rw = '_actionButton_11kvz_61',
  rr = {
    changePassword: Z3,
    changePasswordHeader: ew,
    changePasswordContent: tw,
    changePasswordAction: nw,
    actionButton: rw,
  },
  ow = () => {
    const e = Oe(),
      t = $r(),
      [n, r] = N.exports.useState()
    N.exports.useEffect(() => {
      r(Ns(['password', 'newPassword']))
    }, [])
    const {
        values: o,
        errors: i,
        register: u,
        watch: s,
        isValid: l,
      } = ks({
        validations: {
          ...n,
          repeatPassword: {
            custom: {
              validation: c => c === s('newPassword'),
              message:
                '\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442',
            },
          },
        },
      }),
      a = c => {
        if ((c.preventDefault(), l())) {
          const { repeatPassword: f, password: d, newPassword: V } = o
          e(Qi({ oldpassword: d, newpassword: V })), t('/profile')
        }
      }
    return y(Ft, {
      children: B('form', {
        className: rr.changePassword,
        onSubmit: a,
        children: [
          y('div', {
            className: rr.changePasswordHeader,
            children:
              '\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C',
          }),
          B('div', {
            className: rr.changePasswordContent,
            children: [
              y(Y, {
                label:
                  '\u0421\u0442\u0430\u0440\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C',
                name: 'oldPassword',
                type: 'password',
                ...u('password'),
              }),
              y(Y, {
                label:
                  '\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C',
                name: 'newPssword',
                type: 'password',
                ...u('newPassword'),
              }),
              y(Y, {
                label:
                  '\u041F\u0430\u0440\u043E\u043B\u044C \u0435\u0449\u0435 \u0440\u0430\u0437',
                name: 'repeatPassword',
                type: 'password',
                ...u('repeatPassword'),
              }),
            ],
          }),
          B('div', {
            className: rr.changePasswordAction,
            children: [
              y('div', {
                className: rr.actionButton,
                children: y(Qe, {
                  type: 'submit',
                  children:
                    '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C',
                }),
              }),
              y('div', {
                className: rr.actionButton,
                children: y(Z, {
                  className: Be.linkButton,
                  to: '/profile',
                  children: '\u041D\u0430\u0437\u0430\u0434',
                }),
              }),
            ],
          }),
        ],
      }),
    })
  }
let Xf = !1
const iw = (e, t) => {
    const [n, r] = N.exports.useState(t)
    return {
      items: N.exports.useMemo(() => {
        const u = [...e]
        for (let s = 0; s < u.length; s++) {
          const l = u[s]
          !Xf &&
            !(n.key in l) &&
            (console.error(
              new Error(
                `\u041A\u043B\u044E\u0447 "${n.key}" \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u043A\u043B\u044E\u0447\u0430\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 tableRows`
              )
            ),
            (Xf = !0))
        }
        return (
          u.sort((s, l) =>
            s[n.key] < l[n.key]
              ? n.direction === 'ascending'
                ? -1
                : 1
              : s[n.key] > l[n.key]
              ? n.direction === 'ascending'
                ? 1
                : -1
              : 0
          ),
          u
        )
      }, [e, n]),
      requestSort: u => {
        let s = 'ascending'
        n.key === u && n.direction === 'ascending' && (s = 'descending'),
          r({ key: u, direction: s })
      },
      sortConfig: n,
    }
  },
  uw = '_table_12mmy_1',
  sw = '_caption_12mmy_13',
  lw = '_head_12mmy_25',
  aw = '_title_12mmy_37',
  cw = '_ascending_12mmy_47',
  dw = '_descending_12mmy_59',
  fw = '_paddingBorder_12mmy_71',
  pw = '_columnPlace_12mmy_81',
  mw = '_columnName_12mmy_91',
  hw = '_columnScore_12mmy_101',
  Vw = '_columnGames_12mmy_111',
  gw = '_body_12mmy_121',
  yw = '_row_12mmy_131',
  ae = {
    table: uw,
    caption: sw,
    head: lw,
    title: aw,
    ascending: cw,
    descending: dw,
    paddingBorder: fw,
    columnPlace: pw,
    columnName: mw,
    columnScore: hw,
    columnGames: Vw,
    body: gw,
    row: yw,
  },
  Aw = e => {
    const {
        items: t,
        requestSort: n,
        sortConfig: r,
      } = iw(e.state, { key: 'place', direction: 'ascending' }),
      o = i => {
        if (!r) return
        const { key: u, direction: s } = r
        return u === i ? `${ae.title} ${ae[s]}` : ae.title
      }
    return B('div', {
      className: ae.table,
      children: [
        B('div', {
          className: ae.head,
          children: [
            y('div', {
              onClick: () => n('place'),
              className: ae.columnPlace + ' ' + o('place'),
              children: '\u041C\u0435\u0441\u0442\u043E',
            }),
            y('div', {
              onClick: () => n('name'),
              className: ae.columnName + ' ' + o('name'),
              children:
                '\u0418\u043C\u044F \u0438\u0433\u0440\u043E\u043A\u0430',
            }),
            y('div', {
              onClick: () => n('score'),
              className: ae.columnScore + ' ' + o('score'),
              children: '\u041E\u0447\u043A\u0438',
            }),
            y('div', {
              onClick: () => n('games'),
              className: ae.columnGames + ' ' + o('games'),
              children:
                '\u0418\u0433\u0440 \u0441\u044B\u0433\u0440\u0430\u043D\u043E',
            }),
          ],
        }),
        y('div', {
          className: ae.body,
          children: t.map(i =>
            B(
              'div',
              {
                className: ae.row,
                children: [
                  y('div', {
                    className: ae.columnPlace + ' ' + ae.paddingBorder,
                    children: i.place,
                  }),
                  y('div', {
                    className: ae.columnName + ' ' + ae.paddingBorder,
                    children: i.name,
                  }),
                  y('div', {
                    className: ae.columnScore + ' ' + ae.paddingBorder,
                    children: i.score,
                  }),
                  y('div', {
                    className: ae.columnGames + ' ' + ae.paddingBorder,
                    children: i.games,
                  }),
                ],
              },
              i.id
            )
          ),
        }),
      ],
    })
  },
  vw = '_leaderboard_1gb41_1',
  ww = '_container_1gb41_23',
  Ew = '_tableCaption_1gb41_39',
  Sw = '_buttonWrapper_1gb41_49',
  xw = '_dimmed_1gb41_61',
  Cw = '_heroImg_1gb41_89',
  Nn = {
    leaderboard: vw,
    container: ww,
    tableCaption: Ew,
    buttonWrapper: Sw,
    dimmed: xw,
    heroImg: Cw,
  },
  bh = { withCredentials: !0, headers: { 'content-type': 'application/json' } },
  kw = async e => {
    const t = { ratingFieldName: 'games', teamName: Uc }
    return await oe.post(`${_t}/leaderboard`, { data: e, ...t }, { ...bh })
  },
  Nw = async () => {
    const e = { ratingFieldName: 'score', cursor: 0, limit: 50 },
      t = await oe.post(`${_t}/leaderboard/${Uc}`, e, { ...bh })
    return Sv(t.data)
  },
  Ki = { sendLeaderboardNewLeaderRequest: kw, getTeamLeaderboard: Nw },
  Pw = le('leaderboard/send', async (e, { rejectWithValue: t }) => {
    var n
    try {
      const r = await Kr.me(),
        o = r.id
      let i = (n = r.displayName) != null ? n : r.firstName + ' ' + r.secondName
      i.includes('\u0451') && (i = i.replaceAll('\u0451', 'e'))
      const u = await Ki.getTeamLeaderboard(),
        s = { id: o, name: i, score: e, games: 1 }
      for (const a of u.values())
        if (a.id === o)
          return (
            e < a.score && (s.score = a.score),
            (s.games += a.games),
            (await Ki.sendLeaderboardNewLeaderRequest(s)).status
          )
      return (await Ki.sendLeaderboardNewLeaderRequest(s)).status
    } catch (r) {
      return ct(r) ? t(dt(r)) : t(r)
    }
  }),
  _w = le('leaderboard/set', async (e, { rejectWithValue: t }) => {
    try {
      return await Ki.getTeamLeaderboard()
    } catch (n) {
      return ct(n) ? t(dt(n)) : t(n)
    }
  }),
  xo = { sendLeaderStats: Pw, setLeadersStatsState: _w },
  bw = { isLoading: !1, stats: [], page: 0 },
  Rh = Zo({
    name: 'leaderboard',
    initialState: bw,
    reducers: {
      setPlayersStats: (e, { payload: t }) => {
        e.stats = t
      },
      nextPage: e => {
        ;(e.page + 1) * 5 < e.stats.length && e.page++
      },
      previousPage: e => {
        e.page > 0 && e.page--
      },
    },
    extraReducers: e => {
      e.addCase(xo.setLeadersStatsState.pending, t => {
        t.isLoading = !0
      })
        .addCase(xo.setLeadersStatsState.fulfilled, (t, n) => {
          const r = n.payload
          r && (t.stats = r), (t.isLoading = !1)
        })
        .addCase(xo.setLeadersStatsState.rejected, t => {
          t.isLoading = !1
        })
    },
  }),
  { setPlayersStats: Gx, nextPage: Rw, previousPage: Bw } = Rh.actions,
  Tw = Rh.reducer,
  Dw = '_activityIndicator_rw0rh_25',
  Ow = '_roll_rw0rh_1',
  Lw = { activityIndicator: Dw, roll: Ow },
  Iw = () => y('div', { className: Lw.activityIndicator }),
  Fw = () => {
    const e = Ve(Kn),
      t = Ve(VA),
      n = Ve(AA),
      r = Ve(gA),
      o = Ve(yA),
      i = Oe()
    return (
      N.exports.useEffect(() => {
        i(xo.setLeadersStatsState())
      }, []),
      B('div', {
        className: Nn.leaderboard,
        children: [
          e.isAuth ? y(kh, {}) : null,
          n
            ? y(Iw, {})
            : B('div', {
                className: Nn.container,
                children: [
                  y('div', {
                    className: Nn.tableCaption,
                    children:
                      '\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u043B\u0438\u0434\u0435\u0440\u043E\u0432',
                  }),
                  y(Aw, { state: t }),
                  B('div', {
                    className: Nn.buttonWrapper,
                    children: [
                      B(Qe, {
                        onClick: () => i(Bw()),
                        className: r ? Nn.dimmed : '',
                        children: ['<', ' '],
                      }),
                      y(Qe, {
                        onClick: () => i(Rw()),
                        className: o ? Nn.dimmed : '',
                        children: '>',
                      }),
                      y(Z, {
                        className: Be.linkButton,
                        to: '/',
                        children:
                          '\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E',
                      }),
                    ],
                  }),
                  y('img', {
                    className: Nn.heroImg,
                    src: Nh,
                    alt: 'hero-img',
                    draggable: 'false',
                  }),
                ],
              }),
        ],
      })
    )
  },
  Uw = async () => {
    try {
      return (await oe.get(`${Hr}posts`)).data
    } catch (e) {
      return e
    }
  },
  Mw = async e => {
    try {
      return (await oe.put(`${Hr}/posts`, { data: e })).data
    } catch (t) {
      return t
    }
  },
  jw = async e => {
    try {
      return await oe.post(`${Hr}/comments/${e}/like`), e
    } catch (t) {
      return t
    }
  },
  zw = async e => {
    try {
      return await oe.post(`${Hr}/comments/${e}/dislike`), e
    } catch (t) {
      return t
    }
  },
  Qw = async e => {
    try {
      return (await oe.get(`${Hr}/posts/${e}`)).data
    } catch (t) {
      return t
    }
  },
  $w = async ({ text: e, topicId: t }) => {
    try {
      return (
        await oe.post(`${Hr}/comments`, { data: { body: e, topicId: t } })
      ).data
    } catch (n) {
      return n
    }
  },
  Gr = {
    getPosts: Uw,
    sendPost: Mw,
    sendLike: jw,
    sendDislike: zw,
    getMessages: Qw,
    sendMessage: $w,
  },
  Gi = le('forum/getPosts', Gr.getPosts),
  Yi = le('users/sendPost', Gr.sendPost),
  Xi = le('users/sendLike', Gr.sendLike),
  Ji = le('users/sendDislike', Gr.sendDislike),
  Zi = le('forum/getMessages', Gr.getMessages),
  eu = le('users/sendMessage', Gr.sendMessage),
  Hw = {
    headers: [
      '\u0410\u0432\u0442\u043E\u0440',
      '\u0422\u0435\u043C\u0430',
      '\u0414\u0430\u0442\u0430',
    ],
    rows: [
      {
        id: 1,
        author: 'Kan',
        body: '\u041A\u0430\u043A \u043F\u0440\u043E\u0439\u0442\u0438 \u043F\u0435\u0440\u0432\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C',
        date: '8.01.22',
      },
      {
        id: 2,
        author: '\u0421\u0430\u043D\u044F',
        body: '\u041A\u0430\u043A \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u0442\u0435\u043C\u0443',
        date: '8.01.22',
      },
    ],
    redirect: !0,
  },
  Ww = {
    headers: [
      '\u0410\u0432\u0442\u043E\u0440',
      '\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F',
      '\u0414\u0430\u0442\u0430',
      '\u041B\u0430\u0439\u043A\u0438',
      '\u0414\u0438\u0437\u043B\u0430\u0439\u043A\u0438',
    ],
    rows: [
      {
        id: 1,
        postid: 1,
        author: 'Kan88',
        body: '\u041A\u0430\u043A \u043F\u0440\u043E\u0439\u0442\u0438 \u043F\u0435\u0440\u0432\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C',
        date: '8.01.22',
        likes: 150,
        dislikes: 12,
      },
      {
        id: 2,
        postid: 1,
        author: '\u0421\u0430\u043D\u044F',
        body: '\u041F\u0440\u043E\u0449\u0435 \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E, \u043D\u0443\u0436\u043D\u043E \u043B\u0438\u0448\u044C \u0431\u044B\u0441\u0442\u0440\u043E \u0434\u0432\u0438\u0433\u0430\u0442\u044C \u043F\u0430\u043B\u044C\u0446\u0430\u043C\u0438',
        date: '8.01.22',
        likes: 2,
        dislikes: 12,
      },
    ],
  },
  qw = { posts: Hw, messages: Ww, error: null },
  Kw = Zo({
    name: 'users',
    initialState: qw,
    reducers: {},
    extraReducers: e => {
      e.addCase(Gi.pending, t => {
        t.error = null
      }),
        e.addCase(Yi.pending, t => {
          t.error = null
        }),
        e.addCase(Xi.pending, t => {
          t.error = null
        }),
        e.addCase(Ji.pending, t => {
          t.error = null
        }),
        e.addCase(Zi.pending, t => {
          t.error = null
        }),
        e.addCase(eu.pending, t => {
          t.error = null
        }),
        e.addCase(Gi.fulfilled, (t, n) => {
          t.posts = { ...n.payload }
        }),
        e.addCase(Yi.fulfilled, (t, n) => {
          t.posts.rows.push(n.payload)
        }),
        e.addCase(Xi.fulfilled, (t, n) => {
          t.messages.rows.map(r => {
            r.id === n.payload && r.likes++
          })
        }),
        e.addCase(Ji.fulfilled, (t, n) => {
          t.messages.rows.map(r => {
            r.id === n.payload && r.dislikes++
          })
        }),
        e.addCase(Zi.fulfilled, (t, n) => {
          t.messages = { ...n.payload }
        }),
        e.addCase(eu.fulfilled, (t, n) => {
          t.messages.rows.push(n.payload)
        }),
        e.addCase(Gi.rejected, (t, n) => {
          t.error = n.payload
        }),
        e.addCase(Yi.rejected, (t, n) => {
          t.error = n.payload
        }),
        e.addCase(Xi.rejected, (t, n) => {
          t.error = n.payload
        }),
        e.addCase(Ji.rejected, (t, n) => {
          t.error = n.payload
        }),
        e.addCase(Zi.rejected, (t, n) => {
          t.error = n.payload
        }),
        e.addCase(eu.rejected, (t, n) => {
          t.error = n.payload
        })
    },
  }),
  Gw = Kw.reducer,
  Yw = '_tableRow_1arsq_1',
  Xw = '_tableItem_1arsq_17',
  Jw = '_leftAlignment_1arsq_33',
  Pn = { tableRow: Yw, tableItem: Xw, leftAlignment: Jw },
  Zw = e => {
    const t = $r(),
      n = u => {
        t(`/forum/${u}`)
      },
      r = Oe(),
      o = u => {
        r(Xi(u))
      },
      i = u => {
        r(Ji(u))
      }
    return B('tr', {
      className: Pn.tableItem,
      onClick: e.redirect ? () => n(e.id) : void 0,
      children: [
        y('td', { className: Pn.tableRow, children: e.author }),
        y('td', {
          className: `${Pn.tableRow} ${Pn.leftAlignment}`,
          children: e.body,
        }),
        y('td', { className: Pn.tableRow, children: e.date }),
        e.likes &&
          y('td', {
            onClick: () => o(e.id),
            className: Pn.tableRow,
            children: e.likes,
          }),
        e.dislikes &&
          y('td', {
            onClick: () => i(e.id),
            className: Pn.tableRow,
            children: e.dislikes,
          }),
      ],
    })
  },
  eE = '_table_y56m2_1',
  tE = '_tableTitle_y56m2_11',
  hl = { table: eE, tableTitle: tE },
  Bh = e => {
    const { headers: t, rows: n } = e
    return n
      ? B('table', {
          className: hl.table,
          children: [
            y('thead', {
              children: y('tr', {
                children: t.map(r =>
                  y('th', { className: hl.tableTitle, children: r }, r)
                ),
              }),
            }),
            y('tbody', {
              className: hl.tableBody,
              children: n.map(r =>
                y(
                  Zw,
                  {
                    id: r.id,
                    author: r.author,
                    body: r.body,
                    date: r.date,
                    likes: r == null ? void 0 : r.likes,
                    dislikes: r == null ? void 0 : r.dislikes,
                    redirect: !!e.redirect,
                  },
                  r.id
                )
              ),
            }),
          ],
        })
      : y('h1', {
          children:
            '\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442',
        })
  },
  nE = '_forum_27fqq_1',
  rE = '_forumWrapper_27fqq_17',
  oE = '_buttonWrapper_27fqq_41',
  iE = '_forumTitle_27fqq_59',
  Ei = { forum: nE, forumWrapper: rE, buttonWrapper: oE, forumTitle: iE },
  uE = () => {
    const e = Oe()
    N.exports.useEffect(() => {
      e(Gi)
    }, [])
    const t = Ve(pA)
    return y('div', {
      className: Ei.forum,
      children: B('div', {
        className: Ei.forumWrapper,
        children: [
          y('h2', {
            className: Ei.forumTitle,
            children: '\u0424\u043E\u0440\u0443\u043C',
          }),
          y(Bh, { ...t }),
          B('div', {
            className: Ei.buttonWrapper,
            children: [
              y(Z, {
                to: '/forum-new-post',
                className: Be.linkButton,
                children:
                  '\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u0435\u043C\u0443',
              }),
              y(Z, {
                to: '/',
                className: Be.linkButton,
                children:
                  '\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E',
              }),
            ],
          }),
        ],
      }),
    })
  },
  sE = '_forum_mnpqt_1',
  lE = '_forumWrapper_mnpqt_17',
  aE = '_buttonWrapper_mnpqt_41',
  Vl = { forum: sE, forumWrapper: lE, buttonWrapper: aE },
  cE = () => {
    const { id: e } = Hm(),
      t = Oe()
    N.exports.useEffect(() => {
      t(Zi(Number(e)))
    }, [])
    const n = Ve(mA)
    return y('div', {
      className: Vl.forum,
      children: B('div', {
        className: Vl.forumWrapper,
        children: [
          y(Bh, { ...n }),
          B('div', {
            className: Vl.buttonWrapper,
            children: [
              y(Z, {
                to: `/forum-new-message/${e}`,
                className: Be.linkButton,
                children:
                  '\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435',
              }),
              y(Z, {
                to: '/',
                className: Be.linkButton,
                children: '\u043D\u0430\u0437\u0430\u0434',
              }),
            ],
          }),
        ],
      }),
    })
  },
  dE = '_formInput_1vnq0_1',
  Jf = { formInput: dE },
  Th = e => {
    const { placeholder: t = '\u041F\u043E\u043B\u0435' } = e,
      n = e.className ? `${Jf.formInput} ${e.className}` : Jf.formInput
    return y('label', {
      children: y('input', {
        className: n,
        type: e.type,
        placeholder: t,
        value: e.value,
        name: e.name,
      }),
    })
  },
  fE = '_forum_1dqtz_1',
  pE = '_forumWrapper_1dqtz_17',
  mE = '_forumTitle_1dqtz_39',
  hE = '_form_1dqtz_55',
  VE = '_input_1dqtz_67',
  gE = '_button_1dqtz_91',
  yE = '_marginTop_1dqtz_103',
  _n = {
    forum: fE,
    forumWrapper: pE,
    forumTitle: mE,
    form: hE,
    input: VE,
    button: gE,
    marginTop: yE,
  },
  AE = () => {
    const e = Oe(),
      t = n => {
        const r = new FormData(n.currentTarget)
        e(Yi(r))
      }
    return y('div', {
      className: _n.forum,
      children: B('div', {
        className: _n.forumWrapper,
        children: [
          y('h2', {
            className: _n.forumTitle,
            children: '\u041D\u043E\u0432\u0430\u044F \u0442\u0435\u043C\u0430',
          }),
          B('form', {
            className: _n.form,
            onSubmit: n => t(n),
            children: [
              y(Th, {
                className: _n.input,
                type: 'text',
                name: 'body',
                placeholder:
                  '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043C\u044B',
              }),
              y(Qe, {
                className: _n.button,
                type: 'submit',
                children:
                  '\u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u0435\u043C\u0443',
              }),
            ],
          }),
          y(Z, {
            to: '/forum',
            className: `${Be.linkButton} ${_n.button}`,
            children: '\u043D\u0430\u0437\u0430\u0434',
          }),
        ],
      }),
    })
  },
  vE = '_forum_n0r31_1',
  wE = '_forumWrapper_n0r31_17',
  EE = '_forumTitle_n0r31_39',
  SE = '_form_n0r31_55',
  xE = '_textArea_n0r31_67',
  CE = '_button_n0r31_93',
  bn = {
    forum: vE,
    forumWrapper: wE,
    forumTitle: EE,
    form: SE,
    textArea: xE,
    button: CE,
  },
  kE = () => {
    const { id: e } = Hm(),
      t = Oe(),
      n = r => {
        const i = new FormData(r.currentTarget).get('body')
        i && t(eu({ text: i, topicId: Number(e) }))
      }
    return y('div', {
      className: bn.forum,
      children: B('div', {
        className: bn.forumWrapper,
        children: [
          y('h2', {
            className: bn.forumTitle,
            children:
              '\u041D\u043E\u0432\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435',
          }),
          B('form', {
            className: bn.form,
            onSubmit: r => n(r),
            children: [
              y(Th, { name: e, value: e, type: 'hidden' }),
              y('textarea', { className: bn.textArea }),
              y(Qe, {
                className: bn.button,
                type: 'submit',
                children:
                  '\u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C',
              }),
            ],
          }),
          y(Z, {
            to: '/forum',
            className: `${Be.linkButton} ${bn.button}`,
            children: '\u043D\u0430\u0437\u0430\u0434',
          }),
        ],
      }),
    })
  },
  qe = 31,
  tn = 13,
  _ = 80,
  NE = 2080,
  PE = 1040,
  Da = { x: _, y: _ },
  _E = { x: _ * 1, y: _ * 1 },
  Zf = { x: Da.x * 3, y: Da.y * 3 },
  bE = { x: _ * 1, y: _ * 1 },
  ir = 300,
  ep = 600,
  Pe = ir,
  RE = 3e3,
  Dh = 60,
  BE = 200,
  tp = _ * 2.65,
  gl = _ * 3,
  TE = 40,
  DE = 30,
  yl = 2,
  Al = 20,
  OE = 55,
  LE = 15,
  IE = 10
var Pt = (e => (
  (e[(e.Ground = 1)] = 'Ground'),
  (e[(e.Door = 2)] = 'Door'),
  (e[(e.Buff = 4)] = 'Buff'),
  (e[(e.Bomb = 5)] = 'Bomb'),
  (e[(e.Enemy = 6)] = 'Enemy'),
  (e[(e.Destructable = 7)] = 'Destructable'),
  (e[(e.Player = 8)] = 'Player'),
  e
))(Pt || {})
class Oh {
  constructor() {
    T(this, 'shouldDestroy', !1)
    T(this, 'width', 0)
    T(this, 'height', 0)
    T(this, 'z', 0)
    T(this, 'x', 0)
    T(this, 'y', 0)
  }
  setPosition({ x: t = 0, y: n = 0 }) {
    ;(this.x = Math.round(t)), (this.y = Math.round(n))
  }
  destroy() {
    this.shouldDestroy = !0
  }
}
class Oa extends Oh {
  constructor(n, r, o, i = '__base', u = 0) {
    super()
    T(this, 'scaleX', 1)
    T(this, 'scaleY', 1)
    T(this, 'skewX', 0)
    T(this, 'skewY', 0)
    T(this, 'translateX', 0)
    T(this, 'translateY', 0)
    T(this, 'rotation', 0)
    T(this, 'width')
    T(this, 'height')
    T(this, 'opacity', 1)
    T(this, 'shouldDestroy', !1)
    T(this, 'animations', new Map())
    T(this, 'movementDir', '')
    T(this, 'totalMileAge', 0)
    T(this, 'randomMileAge', 0)
    T(this, 'changeDirPossibility', !1)
    ;(this.x = n),
      (this.y = r),
      (this.texture = o),
      (this.frame = i),
      (this.z = u)
    const { width: s, height: l } = o.frames[i]
    ;(this.width = s), (this.height = l)
  }
  addAnimation(n) {
    Object.entries(n).forEach(([r, o]) => {
      this.animations.set(r, o)
    })
  }
  destroy() {
    this.shouldDestroy = !0
  }
  exec(n) {
    const { texture: r, frame: o, x: i, y: u, width: s, height: l } = this,
      { x: a, y: c, width: f, height: d } = r.frames[o]
    n.save(),
      (n.globalAlpha = this.opacity),
      n.drawImage(r.source, a, c, f, d, i, u, s, l),
      n.restore()
  }
}
class FE extends Oh {
  constructor(t, n, r, o, i, u = 0) {
    super(),
      (this.x = t),
      (this.y = n),
      (this.width = r),
      (this.height = o),
      (this.color = i),
      (this.z = u)
  }
  exec(t) {
    ;(t.fillStyle = this.color),
      t.fillRect(this.x, this.y, this.width, this.height)
  }
}
class UE {
  constructor(t) {
    this.scene = t
  }
  rect(t, n, r, o, i, u = 0) {
    return new FE(t, n, r, o, i, u)
  }
  sprite(t, n, r, o = '__base', i, u, s = 0) {
    const l = this.scene.textures.get(r) || this.scene.textures.get('white'),
      a = new Oa(t, n, l, o, s)
    return i && (a.width = i), u && (a.height = u), a
  }
  tileGrid({ grid: t, gridWidth: n, cellSize: r, cells: o }) {
    const i = []
    for (let u = 0; u < qe; u++)
      for (let s = 0; s < tn; s++) {
        const l = u + s * qe,
          a = l % n,
          c = Math.trunc(l / n),
          f = t[u][s]
        let d
        f === 'wallHard' ? (d = o[1]) : (d = o[0])
        const [V, h, g] = d.split(':'),
          k = this.scene.textures.get(V)
        if (!k) continue
        const m = new Oa(a * r, c * r, k, h, Number(g))
        ;(m.width = r), (m.height = r), i.push(m)
      }
    return i
  }
}
class ME {
  constructor(t) {
    T(this, 'creator')
    ;(this.scene = t), (this.creator = new UE(t))
  }
  register(t) {
    this.scene.displayList = this.scene.displayList.concat(t)
  }
  rect(t, n, r, o, i, u = 0) {
    const s = this.creator.rect(t, n, r, o, i, u)
    return this.register([s]), s
  }
  tileGrid(t) {
    const n = this.creator.tileGrid(t)
    return this.register(n), n
  }
  sprite(t, n, r, o = '__base', i, u, s = 0) {
    const l = this.creator.sprite(t, n, r, o, i, u, s)
    return this.register([l]), l
  }
}
var La = (e => (
  (e[(e.Empty = 0)] = 'Empty'),
  (e[(e.WallHard = 1)] = 'WallHard'),
  (e[(e.WallSoft = 2)] = 'WallSoft'),
  (e[(e.Bomb = 3)] = 'Bomb'),
  (e[(e.Player = 4)] = 'Player'),
  e
))(La || {})
function lo(e) {
  return new Promise(t => setTimeout(t, e))
}
function np(e, t = 0, n = 1) {
  return Math.min(n, Math.max(t, e))
}
function rp(e, t, n) {
  return e + n * (t - e)
}
function jE(e) {
  const t = new Image()
  return (
    (t.src = e),
    new Promise((n, r) => {
      ;(t.onload = () => n(t)), (t.onerror = () => r('error loading image'))
    })
  )
}
function Rt(e, t) {
  return Math.floor(Math.random() * (t - e + e))
}
function zE(e, t) {
  const n = 10 ** t
  return Math.round(e * n) / n
}
function Ia(e) {
  return Math.random() * 101 < e
}
class L {
  constructor(t = 0, n = 0) {
    ;(this.x = t), (this.y = n)
  }
  dot(t) {
    return this.x * t.x + this.y + t.y
  }
  mag() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }
  mul(t) {
    return (this.x *= t.x), (this.y *= t.y), this
  }
  scale(t) {
    return this.mul({ x: t, y: t }), this
  }
  add(t) {
    return (this.x += t.x), (this.y += t.y), this
  }
  sub(t) {
    return (this.x -= t.x), (this.y -= t.y), this
  }
  normalized() {
    const t = this.mag()
    return t === 0 ? new L() : new L(this.x / t, this.y / t)
  }
  equals(t) {
    return this.x === t.x && this.y === t.y
  }
  copy() {
    return new L(this.x, this.y)
  }
  map(t) {
    return new L(t(this.x), t(this.y))
  }
  clamp(t, n) {
    return (
      this.x < t.x ? (this.x = t.x) : this.x > n.x && (this.x = n.x),
      this.y < t.y ? (this.y = t.y) : this.y > n.y && (this.y = n.y),
      this
    )
  }
  static linearInterpolation(t, n, r) {
    return r <= 0
      ? t.copy()
      : r >= 1
      ? n.copy()
      : new L(rp(t.x, n.x, r), rp(t.y, n.y, r))
  }
  static from(t) {
    return new L(t.x, t.y)
  }
  toString() {
    return `x:${this.x}|y:${this.y}`
  }
}
var Lt = (e => (
  (e.START = 'START'), (e.IN_PROGRESS = 'IN_PROGRESS'), (e.END = 'END'), e
))(Lt || {})
const QE = {
    status: 'START',
    currentScore: 0,
    inProgress: !0,
    bombAmountUp: 0,
    bombRangeUp: 0,
    playerSpeedUp: 0,
    detonator: 0,
    bombPass: 0,
    flamePass: 0,
  },
  Lh = Zo({
    name: 'game',
    initialState: QE,
    reducers: {
      setStatus: (e, t) => {
        e.status = t.payload
      },
      setCurrentScore: (e, t) => {
        e.currentScore = t.payload
      },
      scoreIncreased: (e, { payload: t }) => {
        e.currentScore += t
      },
      scoreClear: e => {
        e.currentScore = 0
      },
      setProgress: (e, { payload: t }) => {
        e.inProgress = t
      },
      incrementBuff: (e, { payload: t }) => {
        e[t]++
      },
      resetBuffs: e => {
        ;(e.bombAmountUp = 0),
          (e.bombRangeUp = 0),
          (e.playerSpeedUp = 0),
          (e.detonator = 0),
          (e.bombPass = 0),
          (e.flamePass = 0)
      },
    },
  }),
  $E = Lh.reducer,
  {
    setStatus: rd,
    setCurrentScore: Yx,
    scoreIncreased: HE,
    scoreClear: WE,
    setProgress: qE,
    incrementBuff: KE,
    resetBuffs: GE,
  } = Lh.actions,
  YE =
    typeof window < 'u'
      ? window.__PRELOADED_STATE__
      : {
          game: { status: 'start', currentScore: 0 },
          leaderboard: { stats: [], page: 0 },
          user: {
            error: null,
            isAuth: !1,
            isLoading: !1,
            user: {
              id: null,
              firstName: '',
              secondName: '',
              displayName: '',
              login: '',
              avatar: '',
              email: '',
              phone: '',
            },
          },
          theme: { current: un.LIGHT },
        },
  XE = e =>
    JA({
      reducer: { user: S3, leaderboard: Tw, game: $E, theme: r3, forum: Gw },
      preloadedState: e,
    }),
  qt = XE(YE)
function JE() {
  qt.dispatch(rd(Lt.IN_PROGRESS))
}
function vl(e) {
  qt.dispatch(HE(e))
}
function ZE() {
  qt.dispatch(WE())
}
function op(e) {
  qt.dispatch(xo.sendLeaderStats(e))
}
function wl(e) {
  qt.dispatch(qE(e))
}
function or(e) {
  qt.dispatch(KE(e))
}
function eS() {
  qt.dispatch(GE())
}
function Ih() {
  qt.dispatch(rd(Lt.END))
}
const tS = '/assets/nesBomberman5xTransparent.8708c063.png',
  nS = 80,
  rS = {
    bombermanLeft1: { x: 0, y: 0 },
    bombermanLeft2: { x: 1, y: 0 },
    bombermanLeft3: { x: 2, y: 0 },
    bombermanDown1: { x: 3, y: 0 },
    bombermanDown2: { x: 4, y: 0 },
    bombermanDown3: { x: 5, y: 0 },
    bombermanRight1: { x: 0, y: 1 },
    bombermanRight2: { x: 1, y: 1 },
    bombermanRight3: { x: 2, y: 1 },
    bombermanUp1: { x: 3, y: 1 },
    bombermanUp2: { x: 4, y: 1 },
    bombermanUp3: { x: 5, y: 1 },
    bombermanDead1: { x: 0, y: 2 },
    bombermanDead2: { x: 1, y: 2 },
    bombermanDead3: { x: 2, y: 2 },
    bombermanDead4: { x: 3, y: 2 },
    bombermanDead5: { x: 4, y: 2 },
    bombermanDead6: { x: 5, y: 2 },
    bombermanDead7: { x: 6, y: 2 },
    bomb1: { x: 0, y: 3 },
    bomb2: { x: 1, y: 3 },
    bomb3: { x: 2, y: 3 },
    wallHard: { x: 3, y: 3 },
    wallSoft: { x: 4, y: 3 },
    wallSoftHit1: { x: 5, y: 3 },
    wallSoftHit2: { x: 6, y: 3 },
    wallSoftHit3: { x: 7, y: 3 },
    wallSoftHit4: { x: 8, y: 3 },
    wallSoftHit5: { x: 9, y: 3 },
    wallSoftHit6: { x: 10, y: 3 },
    door: { x: 11, y: 3 },
    empty: { x: 0, y: 4 },
    transparent: { x: 1, y: 4 },
    explosionTipUp1: { x: 2, y: 4 },
    explosionUp1: { x: 2, y: 5 },
    explosionCenter1: { x: 2, y: 6 },
    explosionDown1: { x: 2, y: 7 },
    explosionTipDown1: { x: 2, y: 8 },
    explosionLeft1: { x: 1, y: 6 },
    explosionTipLeft1: { x: 0, y: 6 },
    explosionRight1: { x: 3, y: 6 },
    explosionTipRight1: { x: 4, y: 6 },
    explosionTipUp2: { x: 7, y: 4 },
    explosionUp2: { x: 7, y: 5 },
    explosionCenter2: { x: 7, y: 6 },
    explosionDown2: { x: 7, y: 7 },
    explosionTipDown2: { x: 7, y: 8 },
    explosionLeft2: { x: 6, y: 6 },
    explosionTipLeft2: { x: 5, y: 6 },
    explosionRight2: { x: 8, y: 6 },
    explosionTipRight2: { x: 9, y: 6 },
    explosionTipUp3: { x: 2, y: 9 },
    explosionUp3: { x: 2, y: 10 },
    explosionCenter3: { x: 2, y: 11 },
    explosionDown3: { x: 2, y: 12 },
    explosionTipDown3: { x: 2, y: 13 },
    explosionLeft3: { x: 1, y: 11 },
    explosionTipLeft3: { x: 0, y: 11 },
    explosionRight3: { x: 3, y: 11 },
    explosionTipRight3: { x: 4, y: 11 },
    explosionTipUp4: { x: 7, y: 9 },
    explosionUp4: { x: 7, y: 10 },
    explosionCenter4: { x: 7, y: 11 },
    explosionDown4: { x: 7, y: 12 },
    explosionTipDown4: { x: 7, y: 13 },
    explosionLeft4: { x: 6, y: 11 },
    explosionTipLeft4: { x: 5, y: 11 },
    explosionRight4: { x: 8, y: 11 },
    explosionTipRight4: { x: 9, y: 11 },
    bombAmountUp: { x: 0, y: 14 },
    bombRangeUp: { x: 1, y: 14 },
    playerSpeedUp: { x: 2, y: 14 },
    detonator: { x: 4, y: 14 },
    bombPass: { x: 5, y: 14 },
    flamePass: { x: 6, y: 14 },
    phaseThroughBricks: { x: 3, y: 14 },
    bombManualDetonation: { x: 4, y: 14 },
    phaseThroughBombs: { x: 5, y: 14 },
    ignoreBombDamage: { x: 6, y: 14 },
    randomPowerup: { x: 7, y: 14 },
    baloon1: { x: 0, y: 15 },
    baloon2: { x: 1, y: 15 },
    baloon3: { x: 2, y: 15 },
    baloon4: { x: 3, y: 15 },
    baloon5: { x: 4, y: 15 },
    baloon6: { x: 5, y: 15 },
    baloonHit: { x: 6, y: 15 },
    droplet1: { x: 0, y: 16 },
    droplet2: { x: 1, y: 16 },
    droplet3: { x: 2, y: 16 },
    droplet4: { x: 3, y: 16 },
    droplet5: { x: 4, y: 16 },
    droplet6: { x: 5, y: 16 },
    dropletHit: { x: 6, y: 16 },
    overtimeCoin1: { x: 0, y: 22 },
    overtimeCoin2: { x: 1, y: 22 },
    overtimeCoin3: { x: 2, y: 22 },
    overtimeCoin4: { x: 3, y: 22 },
    overtimeCoinHit: { x: 6, y: 22 },
    dieOrange1: { x: 7, y: 15 },
    dieOrange2: { x: 8, y: 15 },
    dieOrange3: { x: 9, y: 15 },
    dieOrange4: { x: 10, y: 15 },
    dieBlue1: { x: 7, y: 18 },
    dieBlue2: { x: 8, y: 18 },
    dieBlue3: { x: 9, y: 18 },
    dieBlue4: { x: 10, y: 18 },
  },
  oS = { cellSize: nS, entries: rS }
function iS(e, t) {
  const n = []
  for (let r = 0; r < qe; r++)
    for (let o = 0; o < tn; o++) {
      const i = r + o * qe
      if (e[r][o] === null && Ia(DE)) {
        const s = i % qe,
          l = Math.trunc(i / qe)
        s > t.x && l > t.y && n.push({ x: s, y: l })
      }
    }
  return n
}
const ip = ({ x: e, y: t }, n) => {
    const r = e / _,
      o = t / _
    return n[r][o] !== 'wallHard'
  },
  El = {
    left: new L(-1, 0).scale(_),
    right: new L(1, 0).scale(_),
    up: new L(0, -1).scale(_),
    down: new L(0, 1).scale(_),
  }
function up(e, t, n) {
  const r = { left: !1, right: !1, up: !1, down: !1 },
    o = { left: [], right: [], up: [], down: [] },
    i = L.from(e)
  for (const c of Object.keys(El)) {
    const f = c
    for (let d = 1; d <= t; ++d) {
      const V = i.copy().add(El[f].copy().scale(d))
      if (!r[f] && ip(V, n)) {
        const h = f[0].toUpperCase() + f.slice(1),
          g = d === t,
          k = ip(i.copy().add(El[f].copy().scale(d + 1)), n),
          m = g || !k ? `explosionTip${h}` : `explosion${h}`
        o[f].push({ point: V, orientation: m })
        const p = V.x / _,
          A = V.y / _,
          v = n[p][A]
        if (v === 'wallHard' || v === 'wallSoft') {
          n[p][A] = null
          break
        }
      } else r[f] = !0
    }
  }
  const u = Object.values(o)
      .filter(c => c.length > 0)
      .flat(),
    s = o.up.length === 0 && o.down.length === 0,
    l = o.left.length === 0 && o.right.length === 0,
    a = s ? 'Left' : l ? 'Up' : 'Center'
  return u.push({ point: i, orientation: `explosion${a}` }), u
}
function uS(e, t, n, r) {
  const o = L.from(n),
    i = L.from(e),
    u = i.copy().add(L.from(t)),
    l = o.copy().clamp(i, u).sub(o),
    a = r - l.mag()
  if (a > 0) {
    const c = l.normalized()
    o.sub(c.scale(a))
  }
  return o
}
function sS(e, t, n, r) {
  return (n.x - e.x) ** 2 + (n.y - e.y) ** 2 <= (t + r) ** 2
}
function ur(e) {
  return L.from(e).map(t => Math.round(t / _) * _)
}
function lS(e, t, n) {
  const r = ur(t),
    o = _ * n
  return e.filter(
    ({ x: i, y: u }) =>
      i >= r.x - o && i <= r.x + o && u >= r.y - o && u <= r.y + o
  )
}
function aS({ cellSize: e, entries: t }) {
  return Object.fromEntries(
    Object.entries(t).map(([n, { x: r, y: o }]) => [
      n,
      { x: r * e, y: o * e, width: e, height: e },
    ])
  )
}
class cS {
  constructor(t, n = 1e3, r = 0) {
    T(this, 'elapsed', 0)
    T(this, 'frameTime')
    ;(this.frames = t),
      (this.duration = n),
      (this.currentIndex = r),
      (this.frameTime = this.duration / this.frames.length - 1)
  }
  get lastIndex() {
    return this.frames.length - 1
  }
  get isFinished() {
    return this.currentIndex === this.lastIndex
  }
  advance(t) {
    const n =
      this.elapsed <= this.elapsed + this.frameTime &&
      this.elapsed > this.duration
    if (((this.elapsed += t * 1e3), this.isFinished && n))
      (this.currentIndex = 0), (this.elapsed = 0)
    else {
      const r = Math.min(
        Math.floor(this.elapsed / this.frameTime),
        this.lastIndex
      )
      this.currentIndex = r
    }
  }
  reset() {
    this.currentIndex = 0
  }
  get currentFrame() {
    return this.frames[this.currentIndex]
  }
}
const sp = {
  bombermanLeft: [['bombermanLeft1', 'bombermanLeft2', 'bombermanLeft3'], ir],
  bombermanRight: [
    ['bombermanRight1', 'bombermanRight2', 'bombermanRight3'],
    ir,
  ],
  bombermanDown: [['bombermanDown1', 'bombermanDown2', 'bombermanDown3'], ir],
  bombermanUp: [['bombermanUp1', 'bombermanUp2', 'bombermanUp3'], ir],
  bombermanDie: [
    [
      'bombermanDead1',
      'bombermanDead2',
      'bombermanDead3',
      'bombermanDead4',
      'bombermanDead5',
      'bombermanDead6',
      'bombermanDead7',
      'empty',
      'transparent',
    ],
    ir * 0.8,
  ],
  baloonLeft: [['baloon1', 'baloon2', 'baloon3'], Pe],
  baloonRight: [['baloon1', 'baloon2', 'baloon3'], Pe],
  baloonUp: [['baloon1', 'baloon2', 'baloon3'], Pe],
  baloonDown: [['baloon1', 'baloon2', 'baloon3'], Pe],
  baloonDie: [
    [
      'baloonHit',
      'dieOrange1',
      'dieOrange2',
      'dieOrange3',
      'dieOrange4',
      'empty',
    ],
    Pe * 2,
  ],
  dropletLeft: [['droplet1', 'droplet2', 'droplet3'], Pe],
  dropletRight: [['droplet1', 'droplet2', 'droplet3'], Pe],
  dropletUp: [['droplet1', 'droplet2', 'droplet3'], Pe],
  dropletDown: [['droplet1', 'droplet2', 'droplet3'], Pe],
  dropletDie: [
    ['dropletHit', 'dieBlue1', 'dieBlue2', 'dieBlue3', 'dieBlue4', 'empty'],
    Pe * 2,
  ],
  overtimeCoinLeft: [
    ['overtimeCoin1', 'overtimeCoin2', 'overtimeCoin3', 'overtimeCoin4'],
    Pe,
  ],
  overtimeCoinRight: [
    ['overtimeCoin1', 'overtimeCoin2', 'overtimeCoin3', 'overtimeCoin4'],
    Pe,
  ],
  overtimeCoinUp: [
    ['overtimeCoin1', 'overtimeCoin2', 'overtimeCoin3', 'overtimeCoin4'],
    Pe,
  ],
  overtimeCoinDown: [
    ['overtimeCoin1', 'overtimeCoin2', 'overtimeCoin3', 'overtimeCoin4'],
    Pe,
  ],
  overtimeCoinDie: [
    [
      'overtimeCoinHit',
      'dieOrange1',
      'dieOrange2',
      'dieOrange3',
      'dieOrange4',
      'empty',
    ],
    Pe * 2,
  ],
  bombPulse: [['bomb1', 'bomb2', 'bomb3'], 800],
  softWallDestroy: [
    [
      'wallSoft',
      'wallSoftHit1',
      'wallSoftHit2',
      'wallSoftHit3',
      'wallSoftHit4',
      'wallSoftHit5',
      'wallSoftHit6',
      'empty',
    ],
    800,
  ],
  explosionCenter: [
    [
      'explosionCenter4',
      'explosionCenter3',
      'explosionCenter2',
      'explosionCenter1',
      'explosionCenter2',
      'explosionCenter3',
      'explosionCenter4',
    ],
    800,
  ],
  explosionTipUp: [
    [
      'explosionTipUp4',
      'explosionTipUp3',
      'explosionTipUp2',
      'explosionTipUp1',
      'explosionTipUp2',
      'explosionTipUp3',
      'explosionTipUp4',
    ],
    800,
  ],
  explosionTipDown: [
    [
      'explosionTipDown4',
      'explosionTipDown3',
      'explosionTipDown2',
      'explosionTipDown1',
      'explosionTipDown2',
      'explosionTipDown3',
      'explosionTipDown4',
    ],
    800,
  ],
  explosionTipLeft: [
    [
      'explosionTipLeft4',
      'explosionTipLeft3',
      'explosionTipLeft2',
      'explosionTipLeft1',
      'explosionTipLeft2',
      'explosionTipLeft3',
      'explosionTipLeft4',
    ],
    800,
  ],
  explosionTipRight: [
    [
      'explosionTipRight4',
      'explosionTipRight3',
      'explosionTipRight2',
      'explosionTipRight1',
      'explosionTipRight2',
      'explosionTipRight3',
      'explosionTipRight4',
    ],
    800,
  ],
  explosionUp: [
    [
      'explosionUp4',
      'explosionUp3',
      'explosionUp2',
      'explosionUp1',
      'explosionUp2',
      'explosionUp3',
      'explosionUp4',
    ],
    800,
  ],
  explosionDown: [
    [
      'explosionDown4',
      'explosionDown3',
      'explosionDown2',
      'explosionDown1',
      'explosionDown2',
      'explosionDown3',
      'explosionDown4',
    ],
    800,
  ],
  explosionLeft: [
    [
      'explosionLeft4',
      'explosionLeft3',
      'explosionLeft2',
      'explosionLeft1',
      'explosionLeft2',
      'explosionLeft3',
      'explosionLeft4',
    ],
    800,
  ],
  explosionRight: [
    [
      'explosionRight4',
      'explosionRight3',
      'explosionRight2',
      'explosionRight1',
      'explosionRight2',
      'explosionRight3',
      'explosionRight4',
    ],
    800,
  ],
}
function Ke(e) {
  e in sp ||
    console.error(
      `\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F ${e} \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442!`
    )
  const [t, n] = sp[e]
  return new cS(Array.from(t), n)
}
function dS(e, t) {
  const n = e.add.sprite(
    t.x,
    t.y,
    'nesBomberman',
    'bombermanDown1',
    _,
    _,
    Pt.Player
  )
  return (
    n.addAnimation({
      left: Ke('bombermanLeft'),
      right: Ke('bombermanRight'),
      up: Ke('bombermanUp'),
      down: Ke('bombermanDown'),
      die: Ke('bombermanDie'),
    }),
    n
  )
}
function lp(e, t) {
  const n = e.add.sprite(
    t.x,
    t.y,
    'nesBomberman',
    'wallSoft',
    _,
    _,
    Pt.Destructable
  )
  return n.addAnimation({ destroy: Ke('softWallDestroy') }), n
}
function fS(e, t) {
  const n = e.add.sprite(t.x, t.y, 'nesBomberman', 'bomb1', _, _, Pt.Bomb)
  return n.addAnimation({ pulse: Ke('bombPulse') }), n
}
function pS(e, t, n) {
  const r = e.add.sprite(t.x, t.y, 'nesBomberman', `${n}1`, _, _, Pt.Enemy + 10)
  return (
    r.addAnimation({
      left: Ke(`${n}Left`),
      right: Ke(`${n}Right`),
      up: Ke(`${n}Up`),
      down: Ke(`${n}Down`),
      die: Ke(`${n}Die`),
    }),
    r
  )
}
function ap(e, t, n) {
  const r = e.add.sprite(t.x, t.y, 'nesBomberman', `${n}1`, _, _, Pt.Enemy)
  return r.addAnimation({ pulse: Ke(n) }), r
}
function mS(e, t, n) {
  let r = [
      'bombAmountUp',
      'bombRangeUp',
      'playerSpeedUp',
      'detonator',
      'bombPass',
      'flamePass',
    ],
    o = ''
  return (
    !n.bombRangeUp.spawned && n.bombRangeUp.amount === 0
      ? (o = 'bombRangeUp')
      : ((n.playerSpeedUp.spawned || n.playerSpeedUp.amount >= 2) &&
          (r = r.filter(u => u !== 'playerSpeedUp')),
        (n.detonator.spawned || n.detonator.amount > 0) &&
          ((r = r.filter(u => u !== 'detonator')),
          (r = r.filter(u => u !== 'flamePass'))),
        (n.bombPass.spawned || n.bombPass.amount > 0) &&
          (r = r.filter(u => u !== 'bombPass')),
        (n.flamePass.spawned || n.flamePass.amount > 0) &&
          ((r = r.filter(u => u !== 'flamePass')),
          (r = r.filter(u => u !== 'detonator'))),
        (o = r[Rt(0, r.length)])),
    o === 'bombRangeUp'
      ? (n.bombRangeUp.spawned = !0)
      : o === 'playerSpeedUp'
      ? (n.playerSpeedUp.spawned = !0)
      : o === 'detonator'
      ? (n.detonator.spawned = !0)
      : o === 'bombPass'
      ? (n.bombPass.spawned = !0)
      : o === 'flamePass' && (n.flamePass.spawned = !0),
    e.add.sprite(t.x, t.y, 'nesBomberman', o, _, _, Pt.Buff)
  )
}
function hS(e, t) {
  return e.add.sprite(t.x, t.y, 'nesBomberman', 'door', _, _, Pt.Door)
}
class Rn {
  constructor(t = []) {
    T(this, 'list')
    this.list = t
  }
  add(...t) {
    return (this.list = this.list.concat(t)), this.list
  }
  destroyByPoint(t) {
    const n = this.list.find(r => L.from(r).equals(t))
    return n && ((this.list = this.list.filter(r => r !== n)), n.destroy()), n
  }
  byPoint(t) {
    return this.list.find(n => L.from(n).equals(t))
  }
  destroyAll() {
    for (const t of this.list) t.destroy()
    this.list = []
  }
  destroyLast() {
    var t
    ;(t = this.list.pop()) == null || t.destroy()
  }
  unshift(t) {
    this.list.unshift(t)
  }
  toArray() {
    return Array.from(this.list)
  }
  get length() {
    return this.list.length
  }
  *[Symbol.iterator]() {
    yield* this.list
  }
}
const VS = (e, t) => {
  const n = L.from(e).sub(t).mag()
  return Math.abs(n) <= 10
}
class gS {
  constructor() {
    T(this, 'state', [])
  }
  addEnemies(t) {
    for (const n of t) {
      const r = n.frame.slice(0, n.frame.length - 1)
      let o = 0
      r === 'baloon'
        ? (o = gl)
        : r === 'droplet'
        ? (o = gl * 1.5)
        : r === 'overtimeCoin' && (o = gl * 2.5),
        this.state.push({
          ref: n,
          movementState: 1,
          destination: new L(),
          velocity: o,
        })
    }
  }
  possibleDirections(t, n, r, o) {
    const i = [],
      u = r[t][n - 1],
      s = r[t + 1][n],
      l = r[t][n + 1],
      a = r[t - 1][n]
    return (
      ((!o && !u) || (o && u !== 'wallHard' && u !== 'bomb')) &&
        i.push('\u0432\u0432\u0435\u0440\u0445'),
      ((!o && !s) || (o && s !== 'wallHard' && s !== 'bomb')) &&
        i.push('\u0432\u043F\u0440\u0430\u0432\u043E'),
      ((!o && !l) || (o && l !== 'wallHard' && l !== 'bomb')) &&
        i.push('\u0432\u043D\u0438\u0437'),
      ((!o && !a) || (o && a !== 'wallHard' && a !== 'bomb')) &&
        i.push('\u0432\u043B\u0435\u0432\u043E'),
      i
    )
  }
  playerHunting(t, n, r, o) {
    const i = [],
      u = r[t][n - 1],
      s = r[t + 1][n],
      l = r[t][n + 1],
      a = r[t - 1][n]
    return (
      t > o.x
        ? (a !== 'wallHard' &&
            a !== 'bomb' &&
            i.push('\u0432\u043B\u0435\u0432\u043E'),
          n > o.y
            ? u !== 'wallHard' &&
              u !== 'bomb' &&
              i.push('\u0432\u0432\u0435\u0440\u0445')
            : n < o.y &&
              l !== 'wallHard' &&
              l !== 'bomb' &&
              i.push('\u0432\u043D\u0438\u0437'))
        : t < o.x &&
          (s !== 'wallHard' &&
            s !== 'bomb' &&
            i.push('\u0432\u043F\u0440\u0430\u0432\u043E'),
          n > o.y
            ? u !== 'wallHard' &&
              u !== 'bomb' &&
              i.push('\u0432\u0432\u0435\u0440\u0445')
            : n < o.y &&
              l !== 'wallHard' &&
              l !== 'bomb' &&
              i.push('\u0432\u043D\u0438\u0437')),
      i
    )
  }
  chooseNextPoint(t, n, r) {
    const i = t.frame.slice(0, t.frame.length - 1) === 'overtimeCoin',
      u = Math.floor(t.x / _),
      s = Math.floor(t.y / _)
    if (
      u > qe - 2 ||
      u < 1 ||
      s > tn - 2 ||
      s < 1 ||
      t.x % _ !== 0 ||
      t.y % _ !== 0
    )
      return
    let l = new L(t.x, t.y)
    t.totalMileAge++
    const a = t.x / _,
      c = t.y / _
    if (t.movementDir === '') {
      let g = []
      i
        ? (g = this.possibleDirections(a, c, n, !0))
        : (g = this.possibleDirections(a, c, n, !1)),
        (t.movementDir = g[Rt(0, g.length - 1)]),
        i
          ? (t.randomMileAge = Rt(yl + 40, Al + 40))
          : (t.randomMileAge = Rt(yl, Al))
    }
    !t.changeDirPossibility &&
      t.totalMileAge > t.randomMileAge &&
      Rt(1, 100) <= OE &&
      (t.changeDirPossibility = !0)
    const f = n[a][c - 1],
      d = n[a + 1][c],
      V = n[a][c + 1],
      h = n[a - 1][c]
    if (t.changeDirPossibility) {
      let g = []
      i && Rt(1, 100) <= 75
        ? (g = this.playerHunting(a, c, n, r))
        : (g = this.possibleDirections(a, c, n, !1))
      let k = []
      if (
        (Rt(1, 100) <= LE
          ? (k = g.filter(m => m !== t.movementDir))
          : t.movementDir === '\u0432\u0432\u0435\u0440\u0445' ||
            t.movementDir === '\u0432\u043D\u0438\u0437'
          ? (k = g.filter(
              m =>
                m !== '\u0432\u0432\u0435\u0440\u0445' &&
                m !== '\u0432\u043D\u0438\u0437'
            ))
          : (k = g.filter(
              m =>
                m !== '\u0432\u043F\u0440\u0430\u0432\u043E' &&
                m !== '\u0432\u043B\u0435\u0432\u043E'
            )),
        k.length > 0)
      ) {
        const m = k[Rt(0, k.length - 1)]
        m === '\u0432\u0432\u0435\u0440\u0445'
          ? (l = L.from(t).add(new L(0, -_)))
          : m === '\u0432\u043F\u0440\u0430\u0432\u043E'
          ? (l = L.from(t).add(new L(_, 0)))
          : m === '\u0432\u043D\u0438\u0437'
          ? (l = L.from(t).add(new L(0, _)))
          : m === '\u0432\u043B\u0435\u0432\u043E' &&
            (l = L.from(t).add(new L(-_, 0))),
          (t.totalMileAge = 0),
          (t.randomMileAge = Rt(yl, Al)),
          (t.changeDirPossibility = !1),
          (t.movementDir = m)
      }
    }
    return (
      t.movementDir === '\u0432\u0432\u0435\u0440\u0445'
        ? !f || (i && f !== 'wallHard' && f !== 'bomb')
          ? (l = L.from(t).add(new L(0, -_)))
          : (t.movementDir = '\u0432\u043D\u0438\u0437')
        : t.movementDir === '\u0432\u043F\u0440\u0430\u0432\u043E'
        ? !d || (i && d !== 'wallHard' && d !== 'bomb')
          ? (l = L.from(t).add(new L(_, 0)))
          : (t.movementDir = '\u0432\u043B\u0435\u0432\u043E')
        : t.movementDir === '\u0432\u043D\u0438\u0437'
        ? !V || (i && V !== 'wallHard' && V !== 'bomb')
          ? (l = L.from(t).add(new L(0, _)))
          : (t.movementDir = '\u0432\u0432\u0435\u0440\u0445')
        : t.movementDir === '\u0432\u043B\u0435\u0432\u043E' &&
          (!h || (i && h !== 'wallHard' && h !== 'bomb')
            ? (l = L.from(t).add(new L(-_, 0)))
            : (t.movementDir = '\u0432\u043F\u0440\u0430\u0432\u043E')),
      l
    )
  }
  run(t, n, r) {
    for (const o of this.state) {
      if (o.movementState === 1) {
        const i = this.chooseNextPoint(o.ref, n, r)
        if (!i) continue
        ;(o.destination = L.from(i)), (o.movementState = 0)
      }
      if (o.movementState === 0) {
        const i = L.from(o.destination)
            .copy()
            .sub(o.ref)
            .scale(1 / _),
          u = L.from(o.ref).add(i.copy().scale(t * o.velocity))
        if (VS(o.destination, u)) {
          ;(o.movementState = 1), o.ref.setPosition(o.destination)
          continue
        } else o.ref.setPosition(u)
      }
    }
  }
}
const He = async (e, t) => {
    const n = e.createBufferSource(),
      r = await fetch(t)
        .then(o => o.arrayBuffer())
        .then(o => e.decodeAudioData(o))
    return (
      (n.buffer = r),
      n.connect(e.destination),
      n.start(),
      new Promise(o => {
        n.addEventListener('ended', () => o())
      })
    )
  },
  yS = '/assets/stageStart.58a8419b.mp3',
  AS = '/assets/mainTheme.243c1ebb.mp3',
  cp =
    'data:audio/mpeg;base64,SUQzBAAAAAAAb1RBTEIAAAALAAADQm9tYmVybWFuAFRDT1AAAAASAAADMTk4NSBIdWRzb24gU29mdABUUEUxAAAAEQAAA0F0c3VzaGkgQ2hpa3VtYQBUU1NFAAAADwAAA0xhdmY1OC4yMC4xMDAAAAAAAAAAAAAAAP/7UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhpbmcAAAAPAAAADQAADLkAQUFBQUFBQXt7e3t7e3t7k5OTk5OTk5O0tLS0tLS0vr6+vr6+vr7GxsbGxsbGxs7Ozs7Ozs7X19fX19fX19/f39/f39/f5+fn5+fn5+/v7+/v7+/v9/f39/f39/f/////////AAAAAExBTUUzLjk5cgAAAAAAAAAAAAAAACQAAAAAAAAAAAy5m7m5SgAAAAAAAAAAAAAAAAAAAAD/+7BkAAAAAABpBQAACAAADSCgAAEOAYUhuQkACAAANIMAAAADAYCgUCgUDgUCAQBADxbyr4zYyXjhEf+I3JH8XGMgv/jkitguo/8BtBKY5gXNjW//IgM4IShZWFmxCn/+eFwEeO8c8awjz//8PcFnkmKXHQOAcA+xk////ImTBoThTJ8rmBoaGf////7pqNGHv1Oktl13ez1m63NxlEhcKaMcwTMLgyPlQFMeSiHgKToKAIMKQtNbFCMtZ5KwILdmEIWGOAgC9dmb6ZpgMUMDwxM0WHNbY9NLffZszQ2vN0yxHUwDDYwc5A6jX8xnMR+GSSkxEBYyGD4wbGMx1Dk2OSkwuME2yN00tJ18b7ytcMWi2NLloNMiGBxEGHIknsYhHjbAmiGSnDrUmZSWUzOm2kk2Bg7KwpMGgOQ0M6S7MpyzNCwlMvmEMsSjMqISNAFwMHI5/dyIWI+Y8hmYFAkYMAUzR+TAEEzB8CTcErjEU2DQYNQUL5nkT5haGht4RU5GL+5degYxaEwxQFgxOBoxFCNCpqCchgoGxiADBhyQZoSCxl4BAAIpp5gyMJlCI5mWJxhmNb/O7bpN9p7NxHcwbC0wpAcDA4rOpMwLA8wTAtA9bxgMCwqOpmsOBkEPRi2KI4AhgoRRjWdpjmKZjeIpgUEhmuBk1PT+Ha01QY6zCAUYuFACEgAMGgIYpoWAAven2tNK+UKXx4xIAAwTAoOBgwTJkx2AEwdDMIEcw/L0SCswIAwvUYEA4Y5hOhqDgjzvZwBUnLb6zVJUpKPurDT5RYa5Oy+9K5e/GFj/////////+UmAoGF7F+NoWlbeQthb4v/7wGTvAA8uetpud62AAAANIMAAABc1lWPdlgAAAAA0g4AABIARtGV/9B252hmdEIBAAARAIYF4XHMwEUTMFMxBSItAQFBhkEgCRQZLDjcVoN+Ni3coLoglDlAL6gS17b6NmrqJctU2WRMHb7g+wE89MMSKKLMfjVO2uiUt6Z+Z3VvLGZMUKzf4ZL1B2eL05rbFlWVB9dubrTyNq9oDma2xq9IE7CFZ9H/Vm6hc3Z6Na1LS9y8NGo2Wp/JyruI3uy0tXmtoV7zu58CW1XrLFlLwbZ12e+0DlctvrY8KmXphJGAUMZIqloh4V0IUEAUAQABkyx5AiQMELZC3W6BxHABxVqq5XhaXmsWLMFcR3hshA0CrBmECWJtPnEasHqM2YiokkItZTHVIMcBWetECkomZetclJdiyISUkRPhRUFpRemdzzyLIo4ah4tyaHMCxBqTns6FGsa9By8mE2epOQPa3Yv0hpzL3C5xSVZGd4r5Ci86ezDP4pa7pvrKdqOPLzAh/FKkzUXDwqkQoIsEMh4KDQ9UBghkZVQSrV2EDKHIzMeV68rNG7vXKoEflzYJpYClzuxapT62eWhlGGoYlKVRiIo9k3XrVlyZMNqOW7S7FHUxR3ykCaFJvODkNHNIgFkaCuGdlzVrYZMFKX1BkKV2pOrQ3KsCqWHdHGTmpmxZmjbhCdBZBmE0BK1d3Go5CzaruvbqJqZh3UhqGRyagFMX6HvghIiYZxIRGQKDwESrCqZB194W010xUYpQbMsk23LfWuPmuP+hswfXjrWbGXoT7VaTEzvus0vLT30ZTUWtO13FrrK2KKsbqWt5eo7XXvax5q9Wtnnvo79t2HJdt9u+33r9r9vNWrn7M7ve1OfmM79um0/9Z2drn7bMvV29Pdytn+o9u3iryoZnW8dRf+M57jtTM6O6nCWRwJFEMB0HLCppIseIAmWjx3weBkY3/iKWM1cJMzVDGgVNE//twZPqA9PNiWXMJNEAAAA0gAAABEeWBZcyYdUgAADSAAAAExYNMTODGwowMIb2mPA1DhXLm5VTFBBigEqUgXNT5gqJXxgtj4iDLUsyLmqwvrWrdxQhMQMBKGkegEiTvQ80pxtWpTVsqpF6V6rpLWtgZVday4s1Kv///4CZCqiz9di555pUMzjhUtNarVtzVa/p22mLmaMhKUCb/Nkfw0/00/0PfWpv/f/v/9TVuafC34vIV/OzWbWDP+tKYdpccdbx/9a/X/r/QErBJDX6CD4tJIejUO4yiV3aWtTWpVLpVKYzLa1reWX/////////9zLOtVsYiAEBf+rLCWuoSMhFJlIABqmGJQmGVAQJv4dh3L0g7XAzuQNvHbvOJHYzf4o75Xf3gAiS/YUWH7kxBTUUzLjk5LjWqqv/7kGTuAATXYFf1YYACAAANIKAAASCtp0X5vICAAAA0gwAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqgAAAiDQVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5Lv/7IGTcB/E4BMVnYAAKAAANIOAAAQD4CREMCAAoAAA0gAAABDVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk4I/wLwFEKSAADgAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGTdj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZN2P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk3Y/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGTdj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZN2P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk3Y/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGTdj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV',
  dp =
    'data:audio/mpeg;base64,SUQzBAAAAAAAb1RBTEIAAAALAAADQm9tYmVybWFuAFRDT1AAAAASAAADMTk4NSBIdWRzb24gU29mdABUUEUxAAAAEQAAA0F0c3VzaGkgQ2hpa3VtYQBUU1NFAAAADwAAA0xhdmY1OC4yMC4xMDAAAAAAAAAAAAAAAP/7UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhpbmcAAAAPAAAADgAADYoAFxcXFxcXF1RUVFRUVFSKioqKioqKsbGxsbGxsbq6urq6urrCwsLCwsLCysrKysrKytHR0dHR0dHR2dnZ2dnZ2eHh4eHh4eHo6Ojo6Ojo8PDw8PDw8Pj4+Pj4+Pj/////////AAAAAExBTUUzLjk5cgAAAAAAAAAAAAAAACQAAAAAAAAAAA2KIHiSZAAAAAAAAAAAAAAAAAAAAAD/+xBkAA/wAABpAAAACAAADSAAAAEAAAH+FAAAIAAANIKAAATCAzV1cxdCC6+bscOuyc4paNxEjgjwyU9lHDZmQFMBhwAY6easHpkCpVYztJ5OZmuOVjMKD10xBQDtu5YLeARAoUM8cv/70GQiAAjziM8GbyAAAAANIMAAABo9e1c5p4AAAAA0gwAAAKCBYILMITJZv+dFwDJTDE0b2PprApcVFQfRP/9csbnGSF9wcWShhhbll5C6gYCxBYXuf//9UAEj1KGSV3/mExQaGhPbPRwI1399z1/P9DdRQIAVuQ0oWSZxhAxJhnjI3nYknW88u////5//8NKkkyYDoq7dVx8rlKpozhlTgO1tXbz43Mv5////////7vvKu+B2txaHKPGnicnhx74YjbDLzsw3SyCH69DFJTdsyz//////////////////4pUvdzqSygnM5yvn//////////MS/LWN2esXK2Vzgy0yzSyyqyyzQwaMyAKAxmAxh5Jnz5AXAIaVBUcPJlV1XryMgDBTcrDjIEKkWkFelRpmGI8pYRmEms2pNjHaSpLISZD0oD9bmt8X5liEiQ2gLUZ6wu2pRKNZV8OGxN5yxtVduCkM4usRX4amliT0FqZrSp1BLUrzcKZQqtkWJ1YyeDEmfK7G5ZT8P86XLN9YwnIDA4RWR1fbDFziNZ9vwY2lYpF3be9ZwyRXJgjw5ocesOatfh9u3+a/2rOqE+93vfpu0SI/HgcHxe0Gnkbv/8OH1UUFE2RiQjlyQ02m4645JdTfRDm2Cw4GYAJDl5EfzCTAATEgtUSSGVSFVmYVibAkZcKLCEOjT2EmYAtxAwcYCsqbGdsoBgYEDhhIhEFUKoDDjKWsrBoSyYQ7j+MCREeZ3WQ4tlf0DAXfTsgLUNQ6oOzWCqCGYzD0dt01hpLWnTXJVlrYlmXeteft3oejT9S9vpM23M9PA3BORqsigaHX2kUnryPKx+NR+IuzZgzZHjvX8mT1pLQxinkN/Gbxjk3KJJemKbUqquFYbI78lgadx1cg1x6CgtzkckFq5d7HolSwRlEZrcM3KWWzkpZXIn+ZLAjYYxnjZhqMwXBtE79LYy1AEmxy5OS/x//+Y3O/5EVQmRARaSFM0OJtN5PS13UxQBMZEjCtQwAGOBIzLlE09IDCA20fHB8xMgKxwzRCM8MDDxgYERCII/nTKKsnxKaJhUKd02CTGxBjZQqIAE20CRKDFUTi4Jf18VB1L0TgokwaLN//+8BkuQAIcmVV/mtAAAAADSDAAAAlNZdP+byAAAAANIMAAAA44kQoKWlak18yj28dWWQWxpiLDH9gyIx9nrdWqLQm4HlECsACBqZ5m/jtl3VwLGUGo5PIoJLeqWrzh1z16NJj05Bk3Fq96bdtobEGyMCm8KBmgjDMBoyiX/dymbNAcFuyyp4H+hmtSxR42k0r7u40R9Xlk03DMZgNzRGINHOBSS2Lx/sl7Lpq1M4TtS7ku2Lsra+6khpZVqWu0/2UDz0UuCAEvJAleRSu5STkpoUMnno4ejdLOzla9NXaObxqnMRX/6eV/9gjAwEiYxWYUiVqNOJwxqWY4xfMcFjFhMSeWABCcZAgGDBBeImJzFwNHQyILAI6s0aJzLQIVKRYaGLxCARgMiPBKFKE9bA2q4EAwEGLAUwSFvIdR+RncgOAOioLD1IQkBGbCglnyqiIqHNnCfSmqgUZZm98uR2S2UmyZ3oo0tXyVb8ZvRFYEf5kN1uUELpb6+UBFVoEZHHmRM6bs+F2m5Wl8oh1irZrtA5S3VF4PYHSLNeKGo1G6aC5mHN0/6fJ3M49Dz7vB2vLnYlzytlm4vWltaLRjsQlEXosaf/sWXRiNjbtQzM3/izZJEyS25rY47LpdL6GLPBPwi2/c490Sil3LeM7fsy2mgeegaSxeVtZv/BDxw7SakhKwepH+t9Lf+yzQyspwpsgMwsYtNW1ELBEEQe8Aj+KcIBmJhR1gWDjo2BTMWmCoBmCiRhASXNNTXTIkQtWYkMvbQmbYAqY6sLMxU+OT6IEQrVmAqCuFDVcQhywlLMQB2FbWmsyZk6U/BRKQSqshT/uoSUtkrscpq/zu5RBasLkJiFw91YdgyUuz//r/JSn3iMTi7bFoo47MgaVSxKHta///1b0fwEYh8X6QlMhqtJiTlP00pxpLTZ8//////XcxJjTmpjq9dZlVau5NXCGq1NfrRqvKpd////////7oGT4gAkNZlH+b0AAAAANIMAAAB3dYzn5vIBAAAA0gwAAAPv7Ui0OUVLDP/Wr2aKitVa2wkS4d/qJKLBswn+VW5qKvRSrgDpMMi7CYzEpHZ3zn5Y67/PqCtALPYOAtiwDE3XigCdOOBHkTEFNRTMuOTkuNaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoAAAGS1TEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5Lv/7IGTjB/EBC0THYGAIAAANIOAAAQDcBRMHgAAoAAA0gAAABDVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk4A/wIwDEqEAACgAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGTdj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZN2P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk3Y/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGTdj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZN2P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xBk3Y/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EGTdj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZN2P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=',
  vS = '/assets/bombPlanted.a0fcbe31.mp3',
  fp = '/assets/bombExplode.42c1712e.mp3',
  wS = '/assets/playerWasHit.054d2ce9.mp3',
  ES = '/assets/fail.bac241e4.mp3',
  SS = '/assets/buffTaken.cdce8dfa.mp3',
  xS = '/assets/stageClear.fc58ac15.mp3',
  CS = e => {
    let t = !0,
      n = !0,
      r,
      o = !1
    const i = {
      player: {
        ref: null,
        score: 0,
        direction: new L(),
        isDead: !1,
        lastFacing: 'down',
        lastPos: { x: 1, y: 1 },
        bombLimit: 1,
        bombRange: 1,
        speedScale: 1,
      },
      field: {
        obstacles: [],
        enemies: new Rn(),
        backgroundTiles: new Rn(),
        softWalls: new Rn(),
        bombs: new Rn(),
        bombsSet: new Set(),
        bombPlanted: [],
        explosions: new Rn(),
        buffs: new Rn(),
        buffStats: {
          bombAmountUp: { spawned: !1, amount: 0 },
          bombRangeUp: { spawned: !1, amount: 0 },
          playerSpeedUp: { spawned: !1, amount: 0 },
          detonator: { spawned: !1, amount: 0 },
          bombPass: { spawned: !1, amount: 0 },
          flamePass: { spawned: !1, amount: 0 },
        },
      },
    }
    ZE()
    let u = !0
    const s = new gS(),
      l = new L(400, 160)
    let a = performance.now()
    const c = new Rn(),
      f = (v, w) => {
        w
          ? (k(w),
            i.field.bombPlanted.shift(),
            i.field.bombsSet.forEach((S, x, b) => {
              S.x * _ === w.x && S.y * _ === w.y && b.delete(S)
            }),
            e && He(e, fp),
            i.field.explosions.add(
              ...up(w, i.player.bombRange, i.field.obstacles).map(
                ({ point: S, orientation: x }) => ap(v, S, x)
              )
            ),
            i.field.bombs.destroyLast())
          : (i.field.bombPlanted.forEach(S => {
              k(S),
                i.field.explosions.add(
                  ...up(S, i.player.bombRange, i.field.obstacles).map(
                    ({ point: x, orientation: b }) => ap(v, x, b)
                  )
                ),
                i.field.bombs.destroyLast()
            }),
            e && i.field.bombPlanted.length > 0 && He(e, fp),
            i.field.bombsSet.clear(),
            (i.field.bombPlanted = [])),
          lo(ep).then(() => {
            for (const S of i.field.softWalls) {
              const x = i.field.explosions.byPoint(S)
              if (x && Ia(TE)) {
                i.field.buffs.add(mS(v, x, i.field.buffStats))
                break
              }
            }
            i.field.explosions.destroyAll()
          })
      }
    function d(v, w, S) {
      if (!w.player.ref) return
      const x = L.from(w.player.ref).add(w.player.direction.scale(S)),
        b = w.field.softWalls
          .toArray()
          .concat(w.field.backgroundTiles.toArray())
          .filter(O => O.frame !== 'empty'),
        F = lS(b, x, 2),
        D = w.player.ref.x,
        z = w.player.ref.y,
        $e = Math.floor(D / _),
        Le = Math.floor(z / _),
        Q = w.player.lastPos,
        ft = tp / _ + 2,
        bt = D % _ >= 0 && D % _ <= ft,
        Ee = z % _ >= 0 && z % _ <= ft
      if (($e !== Q.x && bt) || (Le !== Q.y && Ee)) {
        if ($e * _ === l.x && Le * _ === l.y && w.field.enemies.length === 0) {
          e && e.close(), (o = !1), wl(!1)
          const O = new AudioContext()
          He(O, xS).then(() => {
            O.close(), window.clearInterval(r), op(w.player.score), v.stopGame()
          })
        }
        w.field.obstacles[Q.x][Q.y] && w.field.bombsSet.add({ x: Q.x, y: Q.y }),
          (w.player.lastPos = { x: $e, y: Le })
      }
      w.field.buffStats.bombPass.amount === 0 &&
        w.field.bombsSet.forEach(O => {
          F.push({ x: O.x * _, y: O.y * _ })
        })
      const P = new L(_ / 2, _ / 2),
        I = m(F, Da, x.copy().add(P), P.x).sub(P)
      w.player.ref.setPosition(I)
    }
    const V = () => {
        for (let v = 0; v < qe; v++) {
          const w = []
          for (let S = 0; S < tn; S++) w.push(null)
          i.field.obstacles.push(w)
        }
        for (let v = 0; v < qe; v++) i.field.obstacles[v][0] = 'wallHard'
        for (let v = 1; v < tn - 1; v++)
          i.field.obstacles[qe - 1][v] = 'wallHard'
        for (let v = 0; v < qe; v++) i.field.obstacles[v][tn - 1] = 'wallHard'
        for (let v = 1; v < tn - 1; v++) i.field.obstacles[0][v] = 'wallHard'
        for (let v = 2; v <= tn; v += 2)
          for (let w = 2; w <= qe; w += 2) i.field.obstacles[w][v] = 'wallHard'
      },
      h = v => {
        for (const w of v) {
          let { x: S, y: x } = w
          ;(S /= _), (x /= _), (i.field.obstacles[S][x] = 'wallSoft')
        }
      },
      g = v => {
        let { x: w, y: S } = v
        ;(w /= _), (S /= _), (i.field.obstacles[w][S] = 'bomb')
      },
      k = v => {
        let { x: w, y: S } = v
        ;(w /= _), (S /= _), (i.field.obstacles[w][S] = null)
      }
    return {
      preload: v => {
        v.image('nesBomberman', tS, w => {
          const S = aS(oS)
          w.addFrame(S)
        })
      },
      create: v => {
        wl(!0),
          V(),
          i.field.backgroundTiles.add(
            ...v.add.tileGrid({
              grid: i.field.obstacles,
              cellSize: _,
              gridWidth: qe,
              cells: {
                [La.Empty]: `nesBomberman:empty:${Pt.Ground}`,
                [La.WallHard]: `nesBomberman:wallHard:${Pt.Ground}`,
              },
            })
          ),
          (i.player.ref = dS(v, _E)),
          p(v, i, bE),
          A(v, i, Zf, [
            { enemyName: 'baloon', chance: 10 },
            { enemyName: 'droplet', chance: 4 },
          ]),
          eS()
        const w = () => {
          e && He(e, AS).then(w)
        }
        e &&
          He(e, yS).then(() => {
            lo(Dh * 1e3).then(() => {
              i.field.enemies.destroyAll(),
                A(v, i, Zf, [{ enemyName: 'overtimeCoin', chance: 10 }]),
                s.addEnemies(i.field.enemies.toArray())
            }),
              (o = !0),
              w()
          }),
          v.camera.bind(i.player.ref),
          c.add(
            ...v.displayList.filter(
              x =>
                x instanceof Oa &&
                (x.frame === 'wallSoft' || x.frame === 'wallHard')
            )
          ),
          hS(v, l),
          i.field.softWalls.add(lp(v, l))
        const S = v.displayList.filter(x => x.frame === 'wallSoft')
        h(S), s.addEnemies(i.field.enemies.toArray()), JE()
      },
      update: (v, w, S) => {
        var Le
        if (!o) return
        const x = i.player.ref
        if (((i.player.direction = new L()), i.player.isDead))
          v.anims.run(x, 'die', w.delta, !0),
            u &&
              e &&
              (window.clearInterval(r),
              wl(!1),
              (u = !1),
              He(e, wS).then(() => {
                ;(o = !1), e.close()
                const Q = new AudioContext()
                He(Q, ES)
                  .then(() => Q.close())
                  .finally(() => {
                    op(i.player.score), v.stopGame()
                  })
              }))
        else {
          if (
            (S.left &&
              ((i.player.direction.x -= 1),
              v.anims.run(x, 'left', w.delta),
              t && n && ((t = !1), e && He(e, cp).then(() => (t = !0)))),
            S.right &&
              ((i.player.direction.x += 1),
              v.anims.run(x, 'right', w.delta),
              t && n && ((t = !1), e && He(e, cp).then(() => (t = !0)))),
            S.up &&
              ((i.player.direction.y -= 1),
              v.anims.run(x, 'up', w.delta),
              n && t && ((n = !1), e && He(e, dp).then(() => (n = !0)))),
            S.down &&
              ((i.player.direction.y += 1),
              v.anims.run(x, 'down', w.delta),
              n && t && ((n = !1), e && He(e, dp).then(() => (n = !0)))),
            S.plant && i.field.buffStats.detonator.amount === 1 && f(v, null),
            i.player.direction.x !== 0 && i.player.direction.y !== 0)
          ) {
            const Ee = Math.sqrt(0.5)
            i.player.direction.map(P => Math.sign(P) * Ee)
          }
          const ft = i.field.bombs.length < i.player.bombLimit,
            bt = w.now - a > BE
          if (S.explode && ft && bt) {
            a = w.now
            const Ee = ur(x).copy(),
              P = Ee.x / _,
              I = Ee.y / _
            if (
              i.field.obstacles[P][I] ||
              (g(Ee),
              i.field.bombPlanted.push(Ee),
              e && He(e, vS),
              i.field.bombs.unshift(fS(v, Ee)),
              i.field.buffStats.detonator.amount === 1)
            )
              return
            lo(RE).then(() => {
              f(v, Ee)
            })
          }
        }
        for (const Q of i.field.explosions) {
          const ft = i.field.softWalls.byPoint(Q)
          ft &&
            (v.anims.run(ft, 'destroy', w.delta, !0),
            lo(ep).then(() => {
              i.field.softWalls.destroyByPoint(Q) &&
                ((i.player.score += 3), vl(3))
            })),
            v.anims.run(Q, 'pulse', w.delta, !0)
        }
        for (const Q of i.field.bombs) v.anims.run(Q, 'pulse', w.delta)
        if (!S.left && !S.right && !S.up && !S.down && !i.player.isDead) {
          const Q =
            ((Le = x.animations.get(i.player.lastFacing)) == null
              ? void 0
              : Le.currentFrame) || 'bombermanDown2'
          x.frame = Q
        }
        let F
        i.field.buffStats.flamePass.amount > 0
          ? (F = void 0)
          : (F = i.field.explosions.byPoint(ur(x))),
          (i.field.enemies.byPoint(x) || F) && (i.player.isDead = !0)
        const z = i.field.buffs.byPoint(ur(x))
        if (z) {
          switch (((i.player.score += 50), vl(50), e && He(e, SS), z.frame)) {
            case 'bombAmountUp':
              ;(i.player.bombLimit += 1), or('bombAmountUp')
              break
            case 'bombRangeUp':
              ;(i.player.bombRange += 1), or('bombRangeUp')
              break
            case 'playerSpeedUp':
              ;(i.player.speedScale += 0.35),
                or('playerSpeedUp'),
                (i.field.buffStats.playerSpeedUp.spawned = !1),
                i.field.buffStats.playerSpeedUp.amount++
              break
            case 'detonator':
              ;(i.field.buffStats.detonator.amount = 1), or('detonator')
              break
            case 'bombPass':
              ;(i.field.buffStats.bombPass.amount = 1), or('bombPass')
              break
            case 'flamePass':
              ;(i.field.buffStats.flamePass.amount = 1), or('flamePass')
              break
          }
          i.field.buffs.destroyByPoint(ur(x))
        }
        const $e = tp * w.delta * i.player.speedScale
        d(v, i, $e)
        for (const Q of i.field.enemies) {
          const ft = i.field.explosions.byPoint(ur(Q))
          sS(Q, _ / 2, x, _ / 2 - 10) && (i.player.isDead = !0),
            ft
              ? (v.anims.run(Q, 'die', w.delta, !0),
                lo(500).then(() => {
                  var I
                  const Ee = i.field.enemies.destroyByPoint(Q),
                    P =
                      (I = Q.animations.get('die')) == null
                        ? void 0
                        : I.frames[0]
                  if (Ee && P) {
                    let O = 0
                    P.startsWith('baloon')
                      ? (O = 10)
                      : P.startsWith('droplet')
                      ? (O = 25)
                      : P.startsWith('overtimeCoin') && (O = 100),
                      (i.player.score += O),
                      vl(O)
                  }
                }))
              : v.anims.run(Q, 'right', w.delta)
        }
        s.run(w.delta, i.field.obstacles, i.player.lastPos)
      },
    }
    function m(v, w, S, x) {
      const b = L.from(S)
      for (const F of v) {
        const { x: D, y: z } = uS(F, w, b, x)
        ;(b.x = D), (b.y = z)
      }
      return b
    }
    function p(v, w, S) {
      w.field.softWalls.add(
        ...iS(w.field.obstacles, L.from(S).scale(1 / _)).map(x =>
          lp(v, L.from(x).scale(_))
        )
      )
    }
    function A(v, w, S, x) {
      const b = w.field.backgroundTiles
        .toArray()
        .filter(F => F.frame === 'empty' && !w.field.softWalls.byPoint(F))
      for (const F of b) {
        const D = F.x >= S.x && F.y >= S.y && w.field.enemies.length < IE
        for (let z = 0; z < x.length; z++) {
          const { enemyName: $e, chance: Le } = x[z]
          if (Ia(Le) && D) {
            const Q = pS(v, F, $e)
            w.field.enemies.add(Q)
          }
        }
      }
    }
  },
  Si = {
    ArrowLeft: 'left',
    ArrowRight: 'right',
    ArrowUp: 'up',
    ArrowDown: 'down',
    KeyW: 'plant',
    Space: 'explode',
  }
class kS {
  constructor() {
    T(this, 'left', !1)
    T(this, 'right', !1)
    T(this, 'up', !1)
    T(this, 'down', !1)
    T(this, 'plant', !1)
    T(this, 'explode', !1)
    T(this, 'onKeyDown', ({ code: t }) => {
      if (t in Si) {
        const n = Si[t]
        this[n] = !0
      }
    })
    T(this, 'onKeyUp', ({ code: t }) => {
      if (t in Si) {
        const n = Si[t]
        this[n] = !1
      }
    })
    window.addEventListener('keydown', this.onKeyDown),
      window.addEventListener('keyup', this.onKeyUp)
  }
}
class NS {
  constructor(t, n, r = n.width, o = n.height) {
    T(this, 'frames', {})
    ;(this.key = t),
      (this.source = n),
      (this.width = r),
      (this.height = o),
      (this.frames.__base = { x: 0, y: 0, width: r, height: o })
  }
  addFrame(t) {
    this.frames = { ...this.frames, ...t }
  }
}
class PS {
  constructor(t) {
    T(this, 'queue', [])
    T(this, 'status', 'ready')
    this.scene = t
  }
  image(t, n, r) {
    this.queue.push({ key: t, url: n, onLoad: r })
  }
  async start() {
    this.status = 'loading'
    for (const { url: t, key: n, onLoad: r } of this.queue)
      try {
        const o = await jE(t),
          i = new NS(n, o)
        r && r(i), this.scene.textures.set(n, i)
      } catch (o) {
        console.error(o)
      }
    ;(this.queue = []), (this.status = 'ready')
  }
}
class _S {
  constructor(t, n) {
    T(this, 'cameraTarget', { x: 0, y: 0 })
    ;(this.cameraWidth = t), (this.cameraHeight = n)
  }
  bind(t) {
    this.cameraTarget = t
  }
  get value() {
    return {
      x: Math.round(np(-this.cameraTarget.x + this.cameraWidth / 2, -400, 0)),
      y: Math.round(np(-this.cameraTarget.y + this.cameraHeight / 2, 0, 0)),
    }
  }
}
class bS {
  run(t, n, r, o = !1) {
    const i = t.animations.get(n)
    if (i) {
      if (o && i.isFinished) return
      i.advance(r), (t.frame = i.currentFrame)
    } else
      console.error(
        `\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F ${n} \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442!`
      )
  }
  reset(t, n) {
    const r = t.animations.get(n)
    r
      ? (r.reset(), (t.frame = r.currentFrame))
      : console.error(
          `\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F ${n} \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442!`
        )
  }
}
class RS {
  constructor(t, n) {
    T(this, 'displayList', [])
    T(this, 'textures', new Map())
    T(this, 'add', new ME(this))
    T(this, 'create', this.add.creator)
    T(this, 'anims', new bS())
    T(this, 'camera')
    ;(this.dimensions = t),
      (this.stopGame = n),
      (this.camera = new _S(this.dimensions.x, this.dimensions.y))
  }
  sortSceneByDepth() {
    this.displayList.sort(({ z: t }, { z: n }) => t - n)
  }
  render(t) {
    t.clearRect(0, 0, this.dimensions.x, this.dimensions.y),
      t.save(),
      t.translate(this.camera.value.x, this.camera.value.y),
      this.sortSceneByDepth(),
      (this.displayList = this.displayList.filter(n => !n.shouldDestroy)),
      this.displayList.forEach(n => n.exec(t)),
      t.restore()
  }
}
class BS {
  constructor() {
    T(this, 'delta', 0)
    T(this, 'prevTime', 0)
    T(this, 'now', 0)
    T(this, 'frameCount', 0)
    T(this, 'rafId', 0)
    T(this, 'onTickCallbacks', [])
    T(this, 'tick', () => {
      this.rafId = requestAnimationFrame(this.tick)
      const t = performance.now()
      ;(this.delta = zE((t - this.prevTime) / 1e3, 4)),
        (this.prevTime = t - this.delta),
        (this.frameCount += 1),
        this.onTickCallbacks.forEach(n =>
          n({ delta: this.delta, now: t, frameCount: this.frameCount })
        )
    })
  }
  start() {
    this.tick()
  }
  stop() {
    this.rafId && cancelAnimationFrame(this.rafId)
  }
  add(t) {
    this.onTickCallbacks.push(t)
  }
}
class TS {
  constructor({ root: t, width: n, height: r, backgroundColor: o, scene: i }) {
    T(this, 'kbd', new kS())
    T(this, 'sceneContext')
    T(this, 'loader')
    T(this, 'ticker', new BS())
    T(this, 'scene')
    T(this, 'root')
    T(this, 'ctx')
    T(this, 'started', !1)
    this.root = t
    const u = t.getContext('2d')
    if (!u) throw new Error('Error getting context')
    ;(this.ctx = u),
      this.setCanvasProps(n, r, o),
      (this.scene = i),
      (this.sceneContext = new RS(new L(n, r), () => this.stop())),
      (this.loader = new PS(this.sceneContext))
  }
  setCanvasProps(t, n, r) {
    ;(this.ctx.imageSmoothingEnabled = !1),
      (this.root.width = t),
      (this.root.height = n),
      (this.root.style.backgroundColor = r)
  }
  async loadFallbackTextures() {
    const t = ['black', 'white', 'yellow', 'blue', 'red'],
      r = document.createElement('canvas')
    ;(r.width = 128), (r.height = 128)
    const o = r.getContext('2d')
    if (!o) throw new Error('error getting context')
    t.forEach(i => {
      ;(o.fillStyle = i),
        o.fillRect(0, 0, 128, 128),
        this.loader.image(i, r.toDataURL())
    }),
      await this.loader.start()
  }
  async start() {
    await this.loadFallbackTextures(),
      this.scene.preload(this.loader),
      await this.loader.start(),
      this.scene.create(this.sceneContext),
      this.ticker.add(t => {
        this.scene.update(this.sceneContext, t, this.kbd),
          this.sceneContext.render(this.ctx)
      }),
      this.ticker.start(),
      (this.started = !0)
  }
  stop() {
    Ih(), this.ticker.stop(), (this.started = !1)
  }
}
function DS(e) {
  return new TS(e)
}
function OS() {
  const e = N.exports.useRef(null),
    t = N.exports.useRef(null),
    n = Oe()
  return {
    endGame: () => {
      var i
      ;(i = t.current) == null || i.stop(), (t.current = null), Ih()
    },
    startGame: () => {
      if (!e.current) return
      const i = new AudioContext()
      ;(t.current = DS({
        width: NE,
        height: PE,
        backgroundColor: '#64b0ff',
        root: e.current,
        scene: CS(i),
      })),
        t.current.start(),
        n(rd(Lt.START))
    },
    canvasRef: e,
    gameRef: t,
  }
}
const LS = '_gameStart_1kz81_1',
  IS = '_gameStartButton_1kz81_31',
  Sl = { gameStart: LS, gameStartButton: IS },
  FS = '/assets/keyboard.dd34c17e.png',
  US = ({ startGame: e }) =>
    B('div', {
      className: Sl.gameStart,
      children: [
        y('p', {
          className: Sl.gameStartText,
          children:
            '\u041A\u0443\u0434\u0430 \u0436\u0430\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u0431\u044B\u043B\u043E \u0432\u0435\u0441\u0435\u043B\u043E?!',
        }),
        y('img', {
          src: FS,
          width: 720,
          height: 303,
          alt: '\u041A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430',
          draggable: !1,
        }),
        y(Qe, {
          className: Sl.gameStartButton,
          onClick: e,
          children:
            '\u041F\u041E\u041D\u042F\u041B, \u041F\u041E\u0413\u041D\u0410\u041B\u0418!',
        }),
      ],
    }),
  MS = '_gameEnd_swnil_1',
  jS = '_gameEndText_swnil_23',
  zS = '_gameEndButtons_swnil_33',
  QS = '_gameEndButton_swnil_33',
  Bn = { gameEnd: MS, gameEndText: jS, gameEndButtons: zS, gameEndButton: QS },
  $S = ({ restartGame: e }) => {
    const t = Ve(dA)
    return B('div', {
      className: Bn.gameEnd,
      children: [
        y('p', {
          className: Bn.gameEndText,
          children:
            '\u0418\u0433\u0440\u0430 \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u0430!',
        }),
        B('p', {
          className: Bn.gameEndText,
          children: [
            '\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u0430\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u043E\u0447\u043A\u043E\u0432: ',
            t,
          ],
        }),
        B('div', {
          className: Bn.gameEndButtons,
          children: [
            y(Z, {
              to: '/',
              className: `${Be.linkButton} ${Bn.gameEndButton}`,
              children:
                '\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E',
            }),
            y(Qe, {
              onClick: e,
              className: Bn.gameEndButton,
              children:
                '\u0421\u044B\u0433\u0440\u0430\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437',
            }),
            y(Z, {
              to: '/leaderboard',
              className: `${Be.linkButton} ${Bn.gameEndButton}`,
              children:
                '\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0442\u0430\u0431\u043B\u0438\u0446\u0443 \u043B\u0438\u0434\u0435\u0440\u043E\u0432',
            }),
          ],
        }),
      ],
    })
  },
  HS = '_gameOverlay_18y8a_1',
  WS = { gameOverlay: HS },
  qS = ({ startGame: e }) => {
    const t = Ve(Km)
    return t === Lt.START || t === Lt.END
      ? B('div', {
          className: WS.gameOverlay,
          children: [
            t === Lt.START && y(US, { startGame: e }),
            t === Lt.END && y($S, { restartGame: e }),
          ],
        })
      : null
  },
  KS = e => {
    document.fullscreenElement
      ? document.exitFullscreen
        ? document.exitFullscreen()
        : document.webkitExitFullscreen
        ? document.webkitExitFullscreen()
        : document.mozCancelFullScreen
        ? document.mozCancelFullScreen()
        : document.msExitFullscreen && document.msExitFullscreen()
      : e.requestFullscreen() ||
        e.mozRequestFullScreen() ||
        e.webkitRequestFullscreen() ||
        e.msRequestFullscreen()
  },
  GS = (e, t = 'F') => {
    N.exports.useEffect(() => {
      const n = r => {
        r.code === `Key${t}` && e.current && KS(e.current)
      }
      return (
        document.addEventListener('keydown', n),
        () => {
          document.removeEventListener('keydown', n)
        }
      )
    }, [e, t])
  },
  YS = '_gameDisplay_13bkq_3',
  XS = '_gameDisplayCanvasWrapper_13bkq_23',
  pp = { gameDisplay: YS, gameDisplayCanvasWrapper: XS },
  JS = '_panel_5ebng_119',
  ZS = '_progressBar_5ebng_143',
  ex = '_bar_5ebng_159',
  tx = '_progressGo_5ebng_171',
  nx = '_progressStopped_5ebng_183',
  rx = '_buffs_5ebng_195',
  ox = '_buff_5ebng_195',
  ix = '_img_5ebng_223',
  ux = '_panelScore_5ebng_233',
  _e = {
    panel: JS,
    progressBar: ZS,
    bar: ex,
    progressGo: tx,
    'count-down': '_count-down_5ebng_1',
    progressStopped: nx,
    buffs: rx,
    buff: ox,
    img: ix,
    panelScore: ux,
  },
  sx =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAelJREFUeF7tnNttwkAQRcetRWmAOhDVRKmDBhCtJRKf9hDd6Nh4gcMfaK9szt6Z2Ye90/FUPzX7HA7zX97v+/m8/M/fX9Pix0mAvTkECINGgAKEBKA8duDluiwiqRje49Dyy3VRW+vzoykiAuz7UYDQ3wIUICQA5ciBXbI8npZJFd7j0PJuNhYXEQFWCRD6W4AChASg/CkduPYyGsnlAqxqp17paEKAAoRJTIAC/JMAKRhdcUhxv0wOFGDa5XfaCVCANwJTtyJNBqApVx2Ykqp+ZeMf8qjp2p0+1ECauC2iB8d83TUEWFXpkEWAOjAN1PvtXiYHPiLfpbgJ1N1yoABhPhGgAG8ZwhDewAgP2Rc2hDfoubRqrt3OKgyJClCAkACU60ABQgJQrgMFCAlAuQ4UICQA5TpQgJAAlOtAAUICUP6UDuze6u5eWoFsFvL0ia10q3O3BVUBwvVAAQpw3z0RHQgd2BWHtaGuXTCGfzZGgPBJJwEK8BblD9kXNgduUERSqGR2ks4w0mvsNhNJb7DLi6m2aydAQg/m6OGHMYbwBj1sCMOQG10+fBER4OgE4P3pQAFCAlAeO9BDaHvS6SGUnuJ7x6kChCEsQAFCAlAeO7Bqeq+TFSHYuXwSICMqQMavBChASADKfwGV7XtvP6epBwAAAABJRU5ErkJggg==',
  lx =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAeRJREFUeF7tnEGugzAMBc3tOEKXORpLjtDb9UtdNkYyGijhd7prlSfSybNNEsjUWnvFx2ee58+ffu778/ns/vOyLN1vkwBzbwgQxowABQgJQHnZgeu6dkWkKoZ9HFq+rmvXv8fj0RcRAebjKEDobwEKEBKAcuTALFm21mCX7iXPZmPlIiLACAFCwwtQgJAAlN/SgUcvo5FcLsCIECAMQwEKcB8Bc+AOXgRWFprVS1dnVMMXEQFWh3yjnQAF+CYwZSvSpPxXuerAKqnIVzZ2yEtNjx70oYoIcVuJHpx1ZNcQYERUb1kEqAOrgbrd7t/kwG/kuypuAvWyHChAmE8EKMB3hjCETzDCV/aFDeETRq5aNY9uZxWGRAUoQEgAynWgACEBKNeBAoQEoFwHChASgHIdKEBIAMp1oAAhASi/pQOzt7qzl1Ygm05efWKrutV52YKqAOF6oAAFeO2eiA6EDsyKw9FQjy4Ywz8bI0D4pJMABfiO8q/sC5sDTygiVahkdlKdYVSvcdlMpNrBLC9WtVk7ARJ6MEcPfxtjCJ8wwoYwDLnR5cMXEQGOTgD2TwcKEBKA8rIDPYQ2J109hNJTfDecKkAYwgIUICQA5WUHRkR3ii+89k/JJwGy8RYg4xcCFCAkAOV/mLLVH2j6R/EAAAAASUVORK5CYII=',
  ax =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAhZJREFUeF7tnNFtwzAMRKnVii6QOYJMU3SOLBBktRZw/iIKuOBkSXFe/mKIsPV8JEXKUDlf4i+efqfT85XP+3+91nP+/SnVxQLAXBwANJ0GgAA0CZjmsgJv9zqJqMbmMy5tfrtXuTW+v5IkAsD8PQLQ1DcAAWgSMM0tBWbB8nypg6r5jLubqxVVNl8ARgQATY0CEIAmAdMcBTYAqmAy8yxhZOMOnUQAOMg1USAubEoNgG2AThxTX4uTMFT3L1k7a0QpB0BVBju4oXprFKiSaowDIAAfBHrHO1VZaoWhvid5T6R3EgFgRDgNVQACcPNyXDgisi7LUjGwt7uqk3PGLbUnAsCGr6tJBIAA3KLBtI40CnxBgSosJ0g7WVNtSakVS/dlDAAjrH4gAAHYXD4OSSIo8OAKVNte2Ro3E8fHJREA7lD8Z0EPBZp7IgA8OkCn1aRWE70rFvW+QxbSAGy09NV1IAABuM+eCAqcWIk4bu0kDHVxvXwtDMAXPtlQ37oKFQWqpBrjAAjAB4HsGBBHHSbXylwNHdNqYQCayxgAAnBze1z4XdtZ2XPPcmsnYWTzGLInAkAzBgIQgM2lJy7cQON859h9X1itHLLEoto641RYSyURNS46YFRbAKqkTHdFgQA0pTYTIIfQ5vTVQyg5xbehXgCaUQGAADQJmOayAiPK+52saMLpaV4A6OEEoMcvAAhAk4Bp/g+FneRv35agfQAAAABJRU5ErkJggg==',
  cx =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAhFJREFUeF7tnEGugzAMRM3tOALLHI0lR+B2/RLdNY401YTAp6+7oljAy9iOHZSplPKKj988z5+Xfu7/vu/VO6/rWl2bAJhrA4CmzwAQgCYB01xW4LZtVRJRjc1nvLX5tm3V8y3LUicRAObzCEBT3wAEoEnANLcUmAXLUor5SOPN1Yoqe18ARgQATdECEIAmAdMcBTYAqmAy8yxhZOMenUQAOMg1USAubEoNgG2AThxTp8VJGKr7T1k7a0QpB0BVBie4oXprFKiSaowDIADfBHrHO1VZaoWhzpO8J9I7iQAwIpyGKgABeHg5LhwRWZflVjGwt7uqL+eMu9WeCAAbvq4mEQAC8IgGl3WkUeAXClRhOUHayZpqS0qtWLovYwAYYfUDAQjA5vJxSBJBgQ9XoNr2yta4mTh+LokA8ITiPwt6KNDcEwHg0wE6rSa1muhdsaj3HbKQBmCjpa+uAwEIwHP2RFDghZWI49ZOwlAX17evhQH4xScb6qyrUFGgSqoxDoAAfBPIjgFx1GFyrczV0HFZLQxAcxkDQAAebo8L/9d2VvbcV7m1kzCy9xiyJwJAMwYCEIDNpScu3EDjfOfYfV9YrRyyxKLaOuNUWLdKImpcdMCotgBUSZnuigIBaErtSoAcQpvTVw+h5BTfhnoBaEYFAALQJGCaywqMiOoUX/PeP2U+AdCbbwB6/AKAADQJmOZ/w6g+LrGMDLAAAAAASUVORK5CYII=',
  dx =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAkVJREFUeF7tnNGNAjEMRJ3WTtcAdSCqQVcHDSBau5Pgj3ilicaE7PH4A8Ws8zK2Nw5sO57iN55eh8PzJ5/3/nLp5/xzbt2HDYC5OABoBg0AAWgSMM1lBV5vfRFRjU0flza/3rraGt9fSREBYL6OADT1DUAAmgRMc0uBWbI8nvqkavoomWe7osy/bMLZBdS5qddtWRFRLyIRMAepEwHgBmgAosAHAXJg6DfS78qB1eH6cUUEgIvlOxQYed5Rb1kACMDtmJ6R79SMou5s5HbWjCoMQHV5J+0wHHdQoENvIM8Swhugl1KgeiivOm2KSzJXfZmiQABu5AS1mQBAAN7D/m0tfRQ4UNalDL2DQVOKiLOBX50hAM0VAiAATQKmOQoEoEnANEeBADQJmOYocA8ATR93Z16+F94dAdNhAALQJGCao8DVAGYdaaf3p3a4VQ7Vvqjn1tZPfKudVmFl46p9AeDAEaYaXeWnctWrjgLNVf/XANWynkFQbdXCouYnxxfVZ7mIqF/oOA3AjRhU4QMQgA8CTn+MEDYBOvdUTghn/7JXb7gdwZQXEQCiwLtw1cKHAk3BAHAWQDW3ZYk7S9LZOLWIZM+wUn/8pPpSHsIAfMHfXZ1uDAqMCABGyEWEEH5BCGfJXO3pqQVD/b5qX9SWmaXAaqdVWNm4al8AOLAaanoqPxOpXvWBOXdDq31BgQOrYSmQh9DmpNWHUPIU3w2lAnAghLOhAASgScA0lxUY0d7zZEVzgquYNwB6SwFAj18AEIAmAdP8D3sZOX5L1XrZAAAAAElFTkSuQmCC',
  fx =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAjJJREFUeF7tnEuugzAMRcPuWALDLI1hlsDu+qQyaxzppjdK4XE6axWDObm286FZcs6v9PFZ1/Xzp8d9P46jeuZ936vfFgDG2gCgGTMABKBJwDSXFVhKqYqIamz6eGnzUkrl37ZtdREBYNyPADT1DUAAmgRMc0uBUbLMOZsufWcezYoi/6IHju6oPpt63yUqIupNvkPSZ6U+CAAbXAHYJ7iqNQABeBKYUURGq+1xRQSAFwtXFJhScsZ8AARgO6Zn5Ds1o6gql5ezZsxEAKh276QZhuMOCnTodeRZQrgB+lIKVDflVadNcUnmqi9TFAjARk5Q58IABOA77H+2pI8CO8q6lKFv0GhKEVH3HG7Aq3IRgGavARCAJgHTHAUC0CRgmqNAAJoETHMUeAeApo+3Mx8+F74dAdNhAALQJGCao8CrAYxWpJ21P3WFW+Uw2hd139p6xXe00yqsqN1oXwDYsYWpRtfwXbnRvY4CzV7/1wDVsh5BUG3VwqLmJ8cX1We5iKgXdJwGYCMGVfgABOBJwFkfI4RNgM6Yygnh6F/26oDbEczwIgJAFPgWrlr4UKApGADOAqjmtihxR0k6aqcWkegMK/XlJ9WX4SEMwHh4J4cwAAHYnCQ4g38UaE4/LYBRMlfX9NSCoV5vtC/qkhkAG8cZAFCVLgBPUoRwh2Kipj8DyCG0cc+ph1Byim9D+QA0UwIAAWgSMM1lBaaUqlN8zXs/ynwBoNffAPT4JQAC0CRgmv8Bpa6YLv9brx0AAAAASUVORK5CYII=',
  px =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAkJJREFUeF7tnNGNwjAQRNetna4B6kBUg64OGkC0xkmXP7KWxhqzSbjHHyjG9vPM7tqJ0s6XeMbL53R6/eX/fb/d1nP+ubbVjw2AuTgAaJoGgAA0CZjNZQXeH+skojY2x7jr5vfHKrfG91eSRACYryMATX0DEIAmAbO5pcAsWJ4v66CajVHdxTh9VPSbzUNOIs7kABiRpmsUmHNpWRmDAiOwcCeJqOIoAajGOzUhOpNT+8iuy/otycIAjLBiIAAB+OdoLOwEwCqAWVA1x3245tZOBIBmIQ1AANohAwubCD8GYDaRjM3ssANAFLgQQIFvUAIWHoCKAgdsWKEsde12lURUFQFw4GRYVcLs8kTtFwWqpAYWXT5Qnb3qWHhgNdUDS/V+xVZxcTMLAzAiHAsDEIDdLWRJEkGBEZE9G6Pe1lQBbpWZnfHJCgSgeaQPQAB2K1csXFQlWIW084ClkxzUDY9ap6pjKXk6K5uc+lydCka9DoAqqc51AATgQgALm0/pV8TF2XZVa9ySLAxAFDgUiqy9sBr3Z8dFLFx0X1gtmncfA9W4qCrauXcye0dVYmEAdg5UHcWoh7FqH45d1QXerIxRB6jCwsKdHQsAHQIDUGfbVXXIriysDrrCrupYADjgELX436yMUVcdBZqrDsABgNkLDtXm6g5D/b9DWhiA6vJ2rgMgABcCWb0zO8ZkrA+pQF5Cm9tGfQklb/HthB0AmvEYgAA0CZjNZQVGNO3NiuaAPrV5A6C3tAD0+AUAAWgSMJv/Ar/v1W8ETwbSAAAAAElFTkSuQmCC',
  mx =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAjtJREFUeF7tnMuRwyAQREfZKQQdCc1HhaDsvAfdzFDVVLNIsp9v69IYePR8AC1LKeUdH591XT+/+rm/j+Ooxvx6varvFgDm2gCg6TMABKBJwDSXFbjve5VEVGOzj7c23/e96t+2bXUSAWA+jwA09Q1AAJoETHNLgVmwLKVIXVJXMU4bWUdGt5v9npxEnMGNHog0axExul0ANsir4gAgAFXnPZ97pAurnVZROO6ltpE9l7U7JQsDMGLJlnJ3UkJWPs2YOBTY4dO4cAesy2JgJmmz348zt1YiAIwAoKl5AALQJGCaf40Cs4FkbEbHbQCiwJMACvwHJeDCHVBRYIcbzlCWOne3SiKqigDYsbWuKmF0eaK2iwJVUh2TLm+ojp51XLhjNtUNS3Wv7qq4eJkLAzAiHBcGIACbS8gpSQQFRoRzvKgCvCozO/2TFQhA80wEgABsVq648KQqwSqknVd8neSgLnjUOlXty5R3Y7LBqW92qmDU5wCokmo8B0AAngRw4cZ5hZpEZsTF0e6q1rhTsjAAUWBXKLLWwmrcHx0XceFJ58Jq0Xz7GKjGRVXRztmJmgxVr5niwgBsbKg6ipnxvx5Z/1Bgx6E3ADsk7iQMNcRcVkirHFS3Hg0LgI0ZUuMdAAHY3smZUfOhQBR4EsguOFQTkBPvvkaBAFTl0ngOgAA8Cah3Jpi8KvNHKpBLaHMZqJdQcotvw40AaMYXAALQJGCaywqMiOoWX7PtnzJfAOjNNwA9fgFAAJoETPM/UmkvLnzk25cAAAAASUVORK5CYII=',
  hx =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAf9JREFUeF7tnNuNwjAQRZ3WVtsAdSCqWW0dNIBobVeCPzKRxj6Ok8Dhjyg3GR/f8dh5TedL+Ssvv9Ppdcvn/b9e523+/ZlmGycBxuYQIEwaAQoQEoDytANv93kRyYphjLuW3+6z2lq+v4IiIsC4HwUI/S1AAUICUI4cGA2W58t8UCUxRqudEefNxpyNb4qKyIiGZAPs3XECzBKA+2U7WAcugBbgOzkw25tRm6NqCNk0y9Mrkd5FRIClFFINBSjAR9qbws2j31M4BCC5nxIFCNvcLN9sKSfABatmi4gABfhIe1O4efR7CocAJOkK27eJvHsVFmAp6GqMAAVYNRSYwlW45jsfEuBWq5O3qcICXCFt4CFTch2YwrS8kwAFCAmsID9kFV6BQ/MhBdiMbqUr0i7lXMpVefKQKexEuqqPc+tPeMiU3HlgCpMTaYhJgMcGGL18R56myhYMcg5CvHsVFiCcBwpQgFUZbQpX4crNSdFtzSieKK1J3NEzOb3PEcU3ZCItQDgGClCAi6OLKUwG3lFPZ8EYdy3PvlnQvQrvmkpFcAKsgBXtKkABQgJQrgMFCAlAuQ4UICQA5TpQgJAAlOtAAUICUK4DBQgJQHnagX6ENiad/QilX/FdcKoAYQoLUICQAJSnHVjK1PfLijDwo8knAbIuEyDjVwQoQEgAyv8BXsdOb5iy/0UAAAAASUVORK5CYII=',
  Vx =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAfxJREFUeF7tnMuRgzAQBUV2hMCR0HwkBLLzVtmntYaqEc3Xbt9M8WDUeqOR+HXjOD7Lx6/v+89NP/d/nueqzY/Ho9rWCTD2hgBhzghQgJAAlKcdOE1TVUSyYhjjpeXTNFXxDcNQFxEBxv0oQOhvAQoQEoBy5MBosBzHEYb0Xx6tdo44b7YR2fi6qIgc0ZBsgFt3nACzBOB+2Q7WgQugBfhNDsz2ZtTmqBpCNqvl6ZXI1kVEgKUUUg0FKMBX2pvCq0e/t/AQgOR+ShQgbPNq+WlLOQEuWDVbRAQowFfam8KrR7+38BCAJF1h+06Rb16FBVgKuhojQAE2DQWmcBOueudbAjxrdfI1VViAO6QNPGRKrgNTmJZ3EqAAIYEd5LeswjtwWH1IAa5Gt9MVaZdyLuWaPHnLFHYi3dTHufUnPGRK7jwwhcmJNMQkwHsDjF6+I09TZQsGOQchvnkVFiCcBwpQgE0ZbQo34crNSdFtzSieKK1J3NEzOVufI4rvkIm0AOEYKEABLo4upjAZeI96OgvGeGl59s2Czavwpak0BCfABljRrgIUICQA5TpQgJAAlOtAAUICUK4DBQgJQLkOFCAkAOU6UICQAJSnHehHaGPS2Y9Q+hXfBacKEKawAAUICUB52oGllOorvvDcPyXvBMj6W4CMXxGgACEBKP8D0VSoH/u4NF4AAAAASUVORK5CYII=',
  gx =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAjpJREFUeF7tnFFuwjAQRDdXq3oBzoE4TdVzcAHE1VqpkfhIxtVY4yYpPP5AduI8j2e9jvF0vtRXLT6n0/KX1/t+va6f+fNjWv04AVCLA4DhoAEgAEMCYXVbgbf7Ooi4lcM2Hrr67b6KrfX+JoIIAHU/AjDUNwABGBIIq0cKVGZ5vqxNVbVRZTEqKLnPt9f11H3tIALAKgA2JO4qGoAAnAm4ihntqSgQBaLAhwaYxlQV88DyFxOYBx5sHqj8XA1r912MawnJ9Q4VhQEYeiAAAfijgd0WE1BgVan1sdGBYLTpu+md+xyRAgEYDmEAArA5ohnCjWWvp/FAZb7uSxsFwa3r2o77bme3IALAcBoDQADmmYjrJ+4qhutjeGAjhzwSQDcDIohUlTvnU8oHIABnXbjDP/FtFBjOHDYB6KZKyjvcukk5pcDkesM90G0MABvDAYBVk9pk7qZeAASgq4G/SeW67m4Udr1ydHAwmgZAF9Jv5XaLwm7jUaBLqlEOgACcCbjb29xlIJfrUytQbbAEYMc8EIDhi3UAAtC14ma5aB6YKNANDvETLi7gZizuMj8AGz0EwAYYFBiOaQACsJ3ZuOpwGSaLwP/SAwHYsakxUQcK7Ngb48JS5ZJOYgiHnbQbQKUEdUihKreFB6r7Jn/bHZ6JADBczgIgAJtxy91pa+9McL3j5TyQQ2i1CN1DKDnFt2OJi2OQO2bqKLADlioKwK0AVk3eyYphg561+gTArGsBmPErAAIwJBBW/wbtGld+N+E8mgAAAABJRU5ErkJggg==',
  yx =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAjlJREFUeF7tnEmOgzAQRYvbcQSWPhpLH4HbdUtB6gWUpe/+bqCTl10iPPD8a/AQT6WUrzh85nk+/vRx37dtO73zuq6n3yYA5toAoGkzAASgScAsLiuw1noKImphs4+PLl5rPfVvWZZzEAFgPo4ANPUNQACaBMzilgIzZ1lKkbqUzWKyoCRVFhF31Ze1KwcRAOYDB8AORaPAho9QXQIAAbgTUBUzOiihQBSIAn80QB4YESTSEbflgZk7ylSp7sWoinbqe1QQAaBpwgAE4EsD+MBGbqj6Ywtgtj6mNnyFCasBw+kLAFHgTsBRPgoEoK+ij1Ng5nzVTZvM5NSyauDL2hg+E1E7ozasQgBgIwEFYIczx4QjAhM2p3LvDFCdxdw2E3m6CQOwI1A5OSQK7Ah8WfoEwKcBVDezs5FTyzrPZYHPqW+4AtXOALCRBwIwYsoOmatpBwABqGrA31Qa7ZDVNEFdjeki8cuHbwsian/VYHPFYKoDfIkPBKAZhQEIQD+IZMfb1FUMFNg4GwPAjjwQBZor0gAEoOqKm89ZibSjQDVBtt/wUIGacKur1ABsjBAAG2BQoGnTAATgTmD0Aq26UvLWClRfThWhM0j/MogAsPFf3tHmhQLxgbsG1H9rZpcUXrGvoc521PdQT9rKS/pqwwBsmBwA/2A1JjNNFIgCX7qQfSCX0OaJknoJJbf4dixxcQ2ympU3DmICEIAdBMxHZR8YEadbfM22P6r4BEBvvAHo8QsAAtAkYBb/BloFED32LlqOAAAAAElFTkSuQmCC',
  Ax = { '--anim-duration': `${Dh}s` },
  vx = () => {
    const { score: e, inProgress: t, buffs: n } = Ve(hA)
    return B('div', {
      className: _e.panel,
      children: [
        y('div', {
          className: _e.progressBar,
          children: y('div', {
            className: _e.bar,
            children: y('div', {
              className: t ? _e.progressGo : _e.progressStopped,
              style: Ax,
            }),
          }),
        }),
        B('div', {
          className: _e.buffs,
          children: [
            B('div', {
              className: _e.buff,
              children: [
                y('img', {
                  className: _e.img,
                  src: n.bombAmountUp > 0 ? sx : lx,
                }),
                B('div', { children: ['+', n.bombAmountUp] }),
              ],
            }),
            B('div', {
              className: _e.buff,
              children: [
                y('img', {
                  className: _e.img,
                  src: n.bombRangeUp > 0 ? ax : cx,
                }),
                B('div', { children: ['+', n.bombRangeUp] }),
              ],
            }),
            y('img', { className: _e.img, src: n.playerSpeedUp > 0 ? dx : fx }),
            y('img', { className: _e.img, src: n.detonator > 0 ? px : mx }),
            y('img', { className: _e.img, src: n.bombPass > 0 ? hx : Vx }),
            y('img', { className: _e.img, src: n.flamePass > 0 ? gx : yx }),
          ],
        }),
        y('div', { className: _e.panelScore, children: e }),
      ],
    })
  },
  wx = () => {
    const e = N.exports.useRef(null)
    GS(e)
    const t = Ve(Km),
      { canvasRef: n, startGame: r } = OS()
    return y('div', {
      className: pp.gameDisplay,
      children: B('div', {
        className: pp.gameDisplayCanvasWrapper,
        ref: e,
        children: [
          t === Lt.IN_PROGRESS && y(vx, {}),
          y('canvas', { ref: n, width: 1280, height: 640 }),
          y(qS, { startGame: r }),
        ],
      }),
    })
  },
  Ex = () => y(wx, {}),
  Sx = [
    { path: '/', element: c3 },
    { path: '/sign-in', element: x3 },
    { path: '/sign-up', element: b3 },
    { path: '/profile', element: J3 },
    { path: '/profile/password', element: ow },
    { path: '/leaderboard', element: Fw },
    { path: '/forum', element: uE },
    { path: '/forum/:id', element: cE },
    { path: '/forum-new-post', element: AE },
    { path: '/forum-new-message/:id', element: kE },
    { path: '/game', element: Ex },
  ],
  xx = e => {
    const t = Oe()
    N.exports.useEffect(() => {
      if (e) {
        t(Wi({ code: e, redirect_uri: Ra }))
          .then(() => t(zn()).unwrap())
          .then(async ({ id: n }) => {
            t(Ur(n))
          })
        return
      }
      t(zn())
        .unwrap()
        .then(async ({ id: n }) => {
          t(Ur(n))
        })
        .catch(async n => {
          if (n.status === 401) {
            let r = localStorage.getItem(Ir)
            r || ((r = un.LIGHT), localStorage.setItem(Ir, un.LIGHT)),
              (document.documentElement.dataset.theme = r),
              t(o3(r))
          }
        })
    }, [])
  },
  Cx = () => {
    const [e] = iA(),
      t = e.get('code')
    return (
      xx(t),
      y(Xy, {
        children: Sx.map(({ element: n, path: r }) =>
          y(qm, { element: Ep.createElement(n), path: r }, r)
        ),
      })
    )
  }
const kx = () => y(Cx, {}),
  Nx = '/assets/heroBomb.800a86c3.png',
  Px = () =>
    y('img', {
      src: Nx,
      width: 426,
      height: 426,
      alt: '\u0413\u0435\u0440\u043E\u0439 \u0441\u0438\u043C\u0432\u043E\u043B\u0438\u0437\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u043E\u0448\u0438\u0431\u043A\u0443',
      draggable: !1,
    }),
  _x = '_errorStub_9fwmb_1',
  bx = '_errorStubTextDanger_9fwmb_21',
  xi = { errorStub: _x, errorStubTextDanger: bx },
  Rx = () =>
    B('div', {
      className: xi.errorStub,
      children: [
        B('p', {
          className: xi.errorStubText,
          children: [
            y('span', {
              className: xi.errorStubTextDanger,
              children:
                '\u0411\u0410\u0410\u0410\u0411\u0410\u0410\u0410\u0425!',
            }),
            ' \u0418 \u0412\u0421\u0401 \u0421\u041B\u041E\u041C\u0410\u041B\u041E\u0421\u042C!',
          ],
        }),
        y(Px, {}),
        y('p', {
          className: xi.errorStubText,
          children:
            '\u041D\u041E \u041C\u042B \u0423\u0416\u0415 \u0427\u0418\u041D\u0418\u041C!',
        }),
      ],
    })
class Bx extends N.exports.Component {
  constructor() {
    super(...arguments)
    T(this, 'state', { hasError: !1 })
  }
  static getDerivedStateFromError() {
    return { hasError: !0 }
  }
  render() {
    return this.state.hasError ? y(Rx, {}) : this.props.children
  }
}
const Tx = () => {
    'serviceWorker' in navigator &&
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/cashOnlyServiceWorker.ts')
          .catch(e => {
            console.error(
              '\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 service worker: ',
              e
            )
          })
      })
  },
  xl = document.getElementById('root'),
  mp = y(Yg, {
    store: qt,
    children: y(rA, { children: y(Bx, { children: y(kx, {}) }) }),
  })
xl.innerHTML === '<!--ssr-outlet-->'
  ? tu.createRoot(xl).render(mp)
  : tu.hydrateRoot(xl, mp)
Tx()
