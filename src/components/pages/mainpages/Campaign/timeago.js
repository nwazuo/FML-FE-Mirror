/* eslint-disable */

!(function (e, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? t(exports)
		: 'function' == typeof define && define.amd
		? define(['exports'], t)
		: t(((e = e || self).timeago = {}));
})(this, function (e) {
	'use strict';
	var r = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
	var a = ['秒', '分钟', '小时', '天', '周', '个月', '年'];
	function t(e, t) {
		n[e] = t;
	}
	function i(e) {
		return n[e] || n.en_US;
	}
	var n = {},
		f = [60, 60, 24, 7, 365 / 7 / 12, 12];
	function o(e) {
		return e instanceof Date
			? e
			: !isNaN(e) || /^\d+$/.test(e)
			? new Date(parseInt(e))
			: ((e = (e || '')
					.trim()
					.replace(/\.\d+/, '')
					.replace(/-/, '/')
					.replace(/-/, '/')
					.replace(/(\d)T(\d)/, '$1 $2')
					.replace(/Z/, ' UTC')
					.replace(/([+-]\d\d):?(\d\d)/, ' $1$2')),
			  new Date(e));
	}
	function d(e, t) {
		for (
			var n = e < 0 ? 1 : 0, r = (e = Math.abs(e)), a = 0;
			e >= f[a] && a < f.length;
			a++
		)
			e /= f[a];
		return (
			(0 === (a *= 2) ? 9 : 1) < (e = Math.floor(e)) && (a += 1),
			t(e, a, r)[n].replace('%s', e.toString())
		);
	}
	function l(e, t) {
		return ((t ? o(t) : new Date()) - o(e)) / 1e3;
	}
	var s = 'timeago-id';
	function h(e) {
		return parseInt(e.getAttribute(s));
	}
	var p = {},
		v = function (e) {
			clearTimeout(e), delete p[e];
		};
	function m(e, t, n, r) {
		v(h(e));
		var a = r.relativeDate,
			i = r.minInterval,
			o = l(t, a);
		e.innerText = d(o, n);
		var u,
			c = setTimeout(
				function () {
					m(e, t, n, r);
				},
				Math.min(
					1e3 *
						Math.max(
							(function (e) {
								for (
									var t = 1, n = 0, r = Math.abs(e);
									e >= f[n] && n < f.length;
									n++
								)
									(e /= f[n]), (t *= f[n]);
								return (r = (r %= t) ? t - r : t), Math.ceil(r);
							})(o),
							i || 1
						),
					2147483647
				)
			);
		(p[c] = 0), (u = c), e.setAttribute(s, u);
	}
	t('en_US', function (e, t) {
		if (0 === t) return ['just now', 'right now'];
		var n = r[Math.floor(t / 2)];
		return 1 < e && (n += 's'), [e + ' ' + n + ' ago', 'in ' + e + ' ' + n];
	}),
		t('zh_CN', function (e, t) {
			if (0 === t) return ['刚刚', '片刻后'];
			var n = a[~~(t / 2)];
			return [e + ' ' + n + '前', e + ' ' + n + '后'];
		}),
		(e.cancel = function (e) {
			e ? v(h(e)) : Object.keys(p).forEach(v);
		}),
		(e.format = function (e, t, n) {
			return d(l(e, n && n.relativeDate), i(t));
		}),
		(e.register = t),
		(e.render = function (e, t, n) {
			var r = e.length ? e : [e];
			return (
				r.forEach(function (e) {
					m(e, e.getAttribute('datetime'), i(t), n || {});
				}),
				r
			);
		}),
		Object.defineProperty(e, '__esModule', { value: !0 });
});

/* eslint-enable */
function getTimeInterval(date) {
	let seconds = Math.floor((Date.now() - date) / 1000);
	let unit = 'second';
	let direction = 'ago';
	if (seconds < 0) {
		seconds = -seconds;
		direction = 'from now';
	}
	let value = seconds;
	if (seconds >= 31536000) {
		value = Math.floor(seconds / 31536000);
		unit = 'year';
	} else if (seconds >= 86400) {
		value = Math.floor(seconds / 86400);
		unit = 'day';
	} else if (seconds >= 3600) {
		value = Math.floor(seconds / 3600);
		unit = 'hour';
	} else if (seconds >= 60) {
		value = Math.floor(seconds / 60);
		unit = 'minute';
	}
	if (value != 1) unit = unit + 's';
	return value + ' ' + unit + ' ' + direction;
}

export default function timeago(time) {
	return getTimeInterval(time);
}
