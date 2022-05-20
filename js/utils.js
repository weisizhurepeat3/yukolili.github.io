'use strict';
var _slicedToArray = function (t, e) {
    if (Array.isArray(t))
        return t;
    if (Symbol.iterator in Object(t))
        return function (t, e) {
            var n = [], o = !0, r = !1, i = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(o = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); o = !0);
            } catch (t) {
                r = !0, i = t;
            } finally {
                try {
                    !o && l.return && l.return();
                } finally {
                    if (r)
                        throw i;
                }
            }
            return n;
        }(t, e);
    throw new TypeError('Invalid attempt to destructure non-iterable instance');
};
function _toConsumableArray(t) {
    if (Array.isArray(t)) {
        for (var e = 0, n = Array(t.length); e < t.length; e++)
            n[e] = t[e];
        return n;
    }
    return Array.from(t);
}
var btf = {
    debounce: function (o, r, i) {
        var a = void 0;
        return function () {
            var t = this, e = arguments, n = i && !a;
            clearTimeout(a), a = setTimeout(function () {
                a = null, i || o.apply(t, e);
            }, r), n && o.apply(t, e);
        };
    },
    throttle: function (n, o, r) {
        var i = void 0, a = void 0, l = void 0, u = 0;
        r = r || {};
        function c() {
            u = !1 === r.leading ? 0 : new Date().getTime(), i = null, n.apply(a, l), i || (a = l = null);
        }
        return function () {
            var t = new Date().getTime();
            u || !1 !== r.leading || (u = t);
            var e = o - (t - u);
            a = this, l = arguments, e <= 0 || o < e ? (i && (clearTimeout(i), i = null), u = t, n.apply(a, l), i || (a = l = null)) : i || !1 === r.trailing || (i = setTimeout(c, e));
        };
    },
    sidebarPaddingR: function () {
        var t = window.innerWidth, e = document.body.clientWidth;
        t !== e && (document.body.style.paddingRight = t - e + 'px');
    },
    snackbarShow: function (t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 2000, o = GLOBAL_CONFIG.Snackbar, r = o.position, i = o.bgLight, o = o.bgDark, o = 'light' === document.documentElement.getAttribute('data-theme') ? i : o;
        Snackbar.show({
            text: t,
            backgroundColor: o,
            showAction: e,
            duration: n,
            pos: r
        });
    },
    diffDate: function (t) {
        var e, n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = new Date(), r = new Date(t), i = o.getTime() - r.getTime();
        return n ? (e = i / 86400000, t = i / 3600000, o = i / 60000, 12 < (n = i / 2592000000) ? r.toLocaleDateString().replace(/\//g, '-') : 1 <= n ? parseInt(n) + ' ' + GLOBAL_CONFIG.date_suffix.month : 1 <= e ? parseInt(e) + ' ' + GLOBAL_CONFIG.date_suffix.day : 1 <= t ? parseInt(t) + ' ' + GLOBAL_CONFIG.date_suffix.hour : 1 <= o ? parseInt(o) + ' ' + GLOBAL_CONFIG.date_suffix.min : GLOBAL_CONFIG.date_suffix.just) : parseInt(i / 86400000);
    },
    loadComment: function (t, e) {
        var n;
        'IntersectionObserver' in window ? (n = new IntersectionObserver(function (t) {
            t[0].isIntersecting && (e(), n.disconnect());
        }, { threshold: [0] })).observe(t) : e();
    },
    scrollToDest: function (n) {
        var o, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 500, i = window.pageYOffset;
        n < i && (n -= 70), 'scrollBehavior' in document.documentElement.style ? window.scrollTo({
            top: n,
            behavior: 'smooth'
        }) : (o = null, n = +n, window.requestAnimationFrame(function t(e) {
            e -= o = o || e;
            i < n ? window.scrollTo(0, (n - i) * e / r + i) : window.scrollTo(0, i - (i - n) * e / r), e < r ? window.requestAnimationFrame(t) : window.scrollTo(0, n);
        }));
    },
    animateIn: function (t, e) {
        t.style.display = 'block', t.style.animation = e;
    },
    animateOut: function (e, t) {
        e.addEventListener('animationend', function t() {
            e.style.display = '', e.style.animation = '', e.removeEventListener('animationend', t);
        }), e.style.animation = t;
    },
    getParents: function (t, e) {
        for (; t && t !== document; t = t.parentNode)
            if (t.matches(e))
                return t;
        return null;
    },
    siblings: function (e, n) {
        return [].concat(_toConsumableArray(e.parentNode.children)).filter(function (t) {
            return n ? t !== e && t.matches(n) : t !== e;
        });
    },
    wrap: function (t, e, n) {
        var o = document.createElement(e), r = !0, i = !1, e = void 0;
        try {
            for (var a, l = Object.entries(n)[Symbol.iterator](); !(r = (a = l.next()).done); r = !0) {
                var u = _slicedToArray(a.value, 2), c = u[0], d = u[1];
                o.setAttribute(c, d);
            }
        } catch (t) {
            i = !0, e = t;
        } finally {
            try {
                !r && l.return && l.return();
            } finally {
                if (i)
                    throw e;
            }
        }
        t.parentNode.insertBefore(o, t), o.appendChild(t);
    },
    unwrap: function (t) {
        var e = t.parentNode;
        e !== document.body && (e.parentNode.insertBefore(t, e), e.parentNode.removeChild(e));
    },
    isHidden: function (t) {
        return 0 === t.offsetHeight && 0 === t.offsetWidth;
    },
    getEleTop: function (t) {
        for (var e = t.offsetTop, n = t.offsetParent; null !== n;)
            e += n.offsetTop, n = n.offsetParent;
        return e;
    },
    loadLightbox: function (t) {
        var n, e = GLOBAL_CONFIG.lightbox;
        'mediumZoom' === e && (n = mediumZoom(t)).on('open', function (t) {
            var e = 'dark' === document.documentElement.getAttribute('data-theme') ? '#121212' : '#fff';
            n.update({ background: e });
        }), 'fancybox' === e && (t.forEach(function (t) {
            var e, n;
            'A' !== t.parentNode.tagName && (e = t.dataset.lazySrc || t.src, n = t.title || t.alt || '', btf.wrap(t, 'a', {
                href: e,
                'data-fancybox': 'gallery',
                'data-caption': n,
                'data-thumb': e
            }));
        }), window.fancyboxRun || (Fancybox.bind('[data-fancybox]', {
            Hash: !1,
            Thumbs: { autoStart: !1 }
        }), window.fancyboxRun = !0));
    },
    initJustifiedGallery: function (t) {
        t.forEach(function (t) {
            btf.isHidden(t) || fjGallery(t, {
                itemSelector: '.fj-gallery-item',
                rowHeight: 220,
                gutter: 4,
                onJustify: function () {
                    this.$container.style.opacity = '1';
                }
            });
        });
    },
    updateAnchor: function (t) {
        var e;
        t !== window.location.hash && (t = t || location.pathname, e = GLOBAL_CONFIG_SITE.title, window.history.replaceState({
            url: location.href,
            title: e
        }, e, t));
    }
};