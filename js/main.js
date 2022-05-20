'use strict';
var _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
    return typeof e;
} : function (e) {
    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
};
function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++)
            n[t] = e[t];
        return n;
    }
    return Array.from(e);
}
document.addEventListener('DOMContentLoaded', function () {
    function r(e) {
        e && (t = document.getElementById('site-name').offsetWidth, e = document.querySelectorAll('#menus .menus_item'), n = 0, e.length && e.forEach(function (e) {
            n += e.offsetWidth;
        }), e = document.querySelector('#search-button'), o = e ? e.offsetWidth : 0, u = document.getElementById('nav')), (i = window.innerWidth < 768 || t + n + o > u.offsetWidth - 120) ? u.classList.add('hide-menu') : u.classList.remove('hide-menu');
    }
    function d() {
        var e, t, n, a, c, o, l, s, r, d, i, u, m, f, h = GLOBAL_CONFIG.highlight;
        function g(e, t, n) {
            var o, i = document.createDocumentFragment();
            c && ((o = document.createElement('div')).className = 'highlight-tools ' + d, o.innerHTML = s + e + r, o.addEventListener('click', m), i.appendChild(o)), a && t.offsetHeight > a + 30 && ((o = document.createElement('div')).className = 'code-expand-btn', o.innerHTML = '<i class="fas fa-angle-double-down"></i>', o.addEventListener('click', f), i.appendChild(o)), 'hl' === n ? t.insertBefore(i, t.firstChild) : t.parentNode.insertBefore(i, t);
        }
        h && (e = h.highlightCopy, t = h.highlightLang, n = GLOBAL_CONFIG_SITE.isHighlightShrink, a = h.highlightHeightLimit, c = e || t || void 0 !== n, o = 'highlighjs' === h.plugin ? document.querySelectorAll('figure.highlight') : document.querySelectorAll('pre[class*="language-"]'), (c || a) && o.length && (l = 'prismjs' === h.plugin, d = !(r = s = '') === n ? 'closed' : '', void 0 !== n && (s = '<i class="fas fa-angle-down expand ' + d + '"></i>'), e && (r = '<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'), i = function (e) {
            var t = e.parentNode;
            t.classList.add('copy-true');
            var n = window.getSelection(), o = document.createRange();
            l ? o.selectNodeContents(t.querySelectorAll('pre code')[0]) : o.selectNodeContents(t.querySelectorAll('table .code pre')[0]), n.removeAllRanges(), n.addRange(o);
            var i;
            n.toString();
            e = e.lastChild, document.queryCommandSupported && document.queryCommandSupported('copy') ? (document.execCommand('copy'), void 0 !== GLOBAL_CONFIG.Snackbar ? btf.snackbarShow(GLOBAL_CONFIG.copy.success) : ((i = e.previousElementSibling).innerText = GLOBAL_CONFIG.copy.success, i.style.opacity = 1, setTimeout(function () {
                i.style.opacity = 0;
            }, 700))) : void 0 !== GLOBAL_CONFIG.Snackbar ? btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport) : e.previousElementSibling.innerText = GLOBAL_CONFIG.copy.noSupport, n.removeAllRanges(), t.classList.remove('copy-true');
        }, u = function (e) {
            var t = [].concat(_toConsumableArray(e.parentNode.children)).slice(1);
            e.firstChild.classList.toggle('closed'), btf.isHidden(t[t.length - 1]) ? t.forEach(function (e) {
                e.style.display = 'block';
            }) : t.forEach(function (e) {
                e.style.display = 'none';
            });
        }, m = function (e) {
            e = e.target.classList;
            e.contains('expand') ? u(this) : e.contains('copy-button') && i(this);
        }, f = function () {
            this.classList.toggle('expand-done');
        }, t ? l ? o.forEach(function (e) {
            var t = '<div class="code-lang">' + (e.getAttribute('data-language') ? e.getAttribute('data-language') : 'Code') + '</div>';
            btf.wrap(e, 'figure', { class: 'highlight' }), g(t, e);
        }) : o.forEach(function (e) {
            var t = e.getAttribute('class').split(' ')[1];
            g('<div class="code-lang">' + (t = 'plain' === t || void 0 === t ? 'Code' : t) + '</div>', e, 'hl');
        }) : l ? o.forEach(function (e) {
            btf.wrap(e, 'figure', { class: 'highlight' }), g('', e);
        }) : o.forEach(function (e) {
            g('', e, 'hl');
        })));
    }
    var t = void 0, n = void 0, o = void 0, u = void 0, i = void 0, a = !1, m = function () {
            btf.sidebarPaddingR(), document.body.style.overflow = 'hidden', btf.animateIn(document.getElementById('menu-mask'), 'to_show 0.5s'), document.getElementById('sidebar-menus').classList.add('open'), a = !0;
        }, c = function () {
            var e = document.body;
            e.style.overflow = '', e.style.paddingRight = '', btf.animateOut(document.getElementById('menu-mask'), 'to_hide 0.5s'), document.getElementById('sidebar-menus').classList.remove('open'), a = !1;
        };
    function f() {
        var o, i, a, c, l, s = document.getElementById('rightside'), r = window.innerHeight + 56;
        document.body.scrollHeight <= r ? s.style.cssText = 'opacity: 1; transform: translateX(-38px)' : (i = !(o = 0), a = document.getElementById('page-header'), c = 'function' == typeof chatBtnHide, l = 'function' == typeof chatBtnShow, window.scrollCollect = function () {
            return btf.throttle(function (e) {
                var t, n = window.scrollY || document.documentElement.scrollTop;
                t = o < n;
                56 < (o = n) ? (t ? (a.classList.contains('nav-visible') && a.classList.remove('nav-visible'), l && !0 === i && (chatBtnHide(), i = !1)) : (a.classList.contains('nav-visible') || a.classList.add('nav-visible'), c && !1 === i && (chatBtnShow(), i = !0)), a.classList.add('nav-fixed'), '0' === window.getComputedStyle(s).getPropertyValue('opacity') && (s.style.cssText = 'opacity: 0.7; transform: translateX(-58px)')) : (0 === n && a.classList.remove('nav-fixed', 'nav-visible'), s.style.cssText = 'opacity: \'\'; transform: \'\''), document.body.scrollHeight <= r && (s.style.cssText = 'opacity: 0.7; transform: translateX(-58px)');
            }, 200)();
        }, window.addEventListener('scroll', scrollCollect));
    }
    function h() {
        var a, e, c, l, i, s, t, r, d, u = GLOBAL_CONFIG_SITE.isToc, m = GLOBAL_CONFIG.isAnchor, f = document.getElementById('article-container');
        f && (u || m) && (s = a = t = c = l = void 0, u && (e = document.getElementById('card-toc'), l = (c = e.getElementsByClassName('toc-content')[0]).querySelectorAll('.toc-link'), i = e.querySelector('.toc-percentage'), s = c.classList.contains('is-expand'), t = function (e) {
            var t = f.clientHeight, n = document.documentElement.clientHeight, o = f.offsetTop, n = n < t ? t - n : document.documentElement.scrollHeight - n, n = Math.round(100 * ((e - o) / n));
            i.textContent = 100 < n ? 100 : n <= 0 ? 0 : n;
        }, window.mobileToc = {
            open: function () {
                e.style.cssText = 'animation: toc-open .3s; opacity: 1; right: 55px';
            },
            close: function () {
                e.style.animation = 'toc-close .2s', setTimeout(function () {
                    e.style.cssText = 'opacity:\'\'; animation: \'\'; right: \'\'';
                }, 100);
            }
        }, c.addEventListener('click', function (e) {
            e.preventDefault();
            e = e.target.classList.contains('toc-link') ? e.target : e.target.parentElement;
            btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(e.getAttribute('href')).replace('#', ''))), 300), window.innerWidth < 900 && window.mobileToc.close();
        }), a = function (e) {
            var t = e.getBoundingClientRect().top, e = c.scrollTop;
            t > document.documentElement.clientHeight - 100 && (c.scrollTop = e + 150), t < 100 && (c.scrollTop = e - 150);
        }), r = f.querySelectorAll('h1,h2,h3,h4,h5,h6'), d = '', window.tocScrollFn = function () {
            return btf.throttle(function () {
                var e = window.scrollY || document.documentElement.scrollTop;
                u && t(e), function (n) {
                    if (0 === n)
                        return;
                    var o = '', i = '';
                    if (r.forEach(function (e, t) {
                            n > btf.getEleTop(e) - 80 && (e = e.id, o = e ? '#' + encodeURI(e) : '', i = t);
                        }), d !== i && (m && btf.updateAnchor(o), d = i, u && (c.querySelectorAll('.active').forEach(function (e) {
                            e.classList.remove('active');
                        }), '' !== o))) {
                        var e = l[i];
                        if (e.classList.add('active'), setTimeout(function () {
                                a(e);
                            }, 0), !s)
                            for (var t = e.parentNode; !t.matches('.toc'); t = t.parentNode)
                                t.matches('li') && t.classList.add('active');
                    }
                }(e);
            }, 100)();
        }, window.addEventListener('scroll', tocScrollFn));
    }
    var l = function () {
            var t = document.body;
            t.classList.add('read-mode');
            var n = document.createElement('button');
            n.type = 'button', n.className = 'fas fa-sign-out-alt exit-readmode', t.appendChild(n), n.addEventListener('click', function e() {
                t.classList.remove('read-mode'), n.remove(), n.removeEventListener('click', e);
            });
        }, s = function () {
            'light' == ('dark' === document.documentElement.getAttribute('data-theme') ? 'dark' : 'light') ? (activateDarkMode(), saveToLocal.set('theme', 'dark', 2), void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)) : (activateLightMode(), saveToLocal.set('theme', 'light', 2), void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)), 'function' == typeof utterancesTheme && utterancesTheme(), 'function' == typeof changeGiscusTheme && changeGiscusTheme(), 'object' === ('undefined' == typeof FB ? 'undefined' : _typeof(FB)) && window.loadFBComment(), window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(function () {
                return window.disqusReset();
            }, 200), 'function' == typeof runMermaid && window.runMermaid();
        }, g = function () {
            var e = document.getElementById('rightside-config-hide');
            window.rightSideIn ? (window.rightSideIn = !1, btf.animateOut(e, 'rightside-item-out 0.5s')) : (window.rightSideIn = !0, btf.animateIn(e, 'rightside-item-in 0.5s'));
        }, y = function () {
            btf.scrollToDest(0, 500);
        }, p = function () {
            var e = document.documentElement.classList;
            e.contains('hide-aside') ? saveToLocal.set('aside-status', 'show', 2) : saveToLocal.set('aside-status', 'hide', 2), e.toggle('hide-aside');
        }, v = function () {
            '0' === window.getComputedStyle(document.getElementById('card-toc')).getPropertyValue('opacity') ? window.mobileToc.open() : window.mobileToc.close();
        };
    document.getElementById('rightside').addEventListener('click', function (e) {
        switch (e.target.id || e.target.parentNode.id) {
        case 'go-up':
            y();
            break;
        case 'rightside_config':
            g();
            break;
        case 'mobile-toc-button':
            v();
            break;
        case 'readmode':
            l();
            break;
        case 'darkmode':
            s();
            break;
        case 'hide-aside-btn':
            p();
        }
    });
    function b(e) {
        e.forEach(function (e) {
            var t = e, e = t.getAttribute('datetime');
            t.innerText = btf.diffDate(e, !0), t.style.display = 'inline';
        });
    }
    var L, E = function () {
            document.querySelectorAll('#article-container .tab > button').forEach(function (e) {
                e.addEventListener('click', function (e) {
                    var t, n, o, i = this.parentNode;
                    i.classList.contains('active') || (o = i.parentNode.nextElementSibling, (t = btf.siblings(i, '.active')[0]) && t.classList.remove('active'), i.classList.add('active'), n = this.getAttribute('data-href').replace('#', ''), [].concat(_toConsumableArray(o.children)).forEach(function (e) {
                        e.id === n ? e.classList.add('active') : e.classList.remove('active');
                    }), 0 < (o = o.querySelectorAll('#' + n + ' .fj-gallery')).length && btf.initJustifiedGallery(o));
                });
            });
        }, w = function () {
            document.querySelectorAll('#article-container .tabs .tab-to-top').forEach(function (e) {
                e.addEventListener('click', function () {
                    btf.scrollToDest(btf.getEleTop(btf.getParents(this, '.tabs')), 300);
                });
            });
        };
    window.refreshFn = function () {
        var e, t, n, o, i;
        r(!0), u.classList.add('show'), GLOBAL_CONFIG_SITE.isPost ? (void 0 !== GLOBAL_CONFIG.noticeOutdate && (o = GLOBAL_CONFIG.noticeOutdate, (i = btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate)) >= o.limitDay && ((n = document.createElement('div')).className = 'post-outdate-notice', n.textContent = o.messagePrev + ' ' + i + ' ' + o.messageNext, i = document.getElementById('article-container'), 'top' === o.position ? i.insertBefore(n, i.firstChild) : i.appendChild(n))), GLOBAL_CONFIG.relativeDate.post && b(document.querySelectorAll('#post-meta time'))) : (GLOBAL_CONFIG.relativeDate.homepage && b(document.querySelectorAll('#recent-posts time')), !GLOBAL_CONFIG.runtime || (n = document.getElementById('runtimeshow')) && (t = n.getAttribute('data-publishDate'), n.innerText = btf.diffDate(t) + ' ' + GLOBAL_CONFIG.runtime), (t = document.getElementById('last-push-date')) && (e = t.getAttribute('data-lastPushDate'), t.innerText = btf.diffDate(e, !0)), (e = document.querySelectorAll('#aside-cat-list .card-category-list-item.parent i')).length && e.forEach(function (e) {
            e.addEventListener('click', function (e) {
                e.preventDefault();
                this.classList.toggle('expand');
                e = this.parentNode.nextElementSibling;
                btf.isHidden(e) ? e.style.display = 'block' : e.style.display = 'none';
            });
        })), h(), !GLOBAL_CONFIG_SITE.isHome || (s = document.getElementById('scroll-down')) && s.addEventListener('click', function () {
            btf.scrollToDest(document.getElementById('content-inner').offsetTop, 300);
        }), d(), GLOBAL_CONFIG.isPhotoFigcaption && document.querySelectorAll('#article-container img').forEach(function (e) {
            var t, n = e.parentNode, o = e.title || e.alt;
            o && !n.parentNode.classList.contains('justified-gallery') && ((t = document.createElement('div')).className = 'img-alt is-center', t.textContent = o, n.insertBefore(t, e.nextSibling));
        }), f();
        var a, c, l, s = document.querySelectorAll('#article-container .fj-gallery');
        s.length && ((a = s).forEach(function (e) {
            e.querySelectorAll('img').forEach(function (e) {
                var t = e.getAttribute('data-lazy-src');
                t && (e.src = t), btf.wrap(e, 'div', { class: 'fj-gallery-item' });
            });
        }), window.fjGallery ? setTimeout(function () {
            btf.initJustifiedGallery(a);
        }, 100) : ((l = document.createElement('link')).rel = 'stylesheet', l.href = GLOBAL_CONFIG.source.justifiedGallery.css, document.body.appendChild(l), getScript('' + GLOBAL_CONFIG.source.justifiedGallery.js).then(function () {
            btf.initJustifiedGallery(a);
        }))), btf.loadLightbox(document.querySelectorAll('#article-container img:not(.no-lightbox)')), (l = document.querySelectorAll('#article-container :not(.highlight) > table, #article-container > table')).length && l.forEach(function (e) {
            btf.wrap(e, 'div', { class: 'table-wrap' });
        }), (l = document.querySelectorAll('#article-container .hide-button')).length && l.forEach(function (e) {
            e.addEventListener('click', function (e) {
                var t = this.nextElementSibling;
                this.classList.toggle('open'), this.classList.contains('open') && 0 < t.querySelectorAll('.fj-gallery').length && btf.initJustifiedGallery(t.querySelectorAll('.fj-gallery'));
            });
        }), E(), w(), c = !1, (l = document.querySelector('#comment-switch > .switch-btn')) && l.addEventListener('click', function () {
            this.classList.toggle('move'), document.querySelectorAll('#post-comment > .comment-wrap > div').forEach(function (e) {
                btf.isHidden(e) ? e.style.cssText = 'display: block;animation: tabshow .5s' : e.style.cssText = 'display: none;animation: \'\'';
            }), c || 'function' != typeof loadOtherComment || (c = !0, loadOtherComment());
        }), document.getElementById('toggle-menu').addEventListener('click', function () {
            m();
        });
    }, refreshFn(), window.addEventListener('resize', function () {
        r(!1), i && a && c();
    }), document.getElementById('menu-mask').addEventListener('click', function (e) {
        c();
    }), document.querySelectorAll('#sidebar-menus .site-page.group').forEach(function (e) {
        e.addEventListener('click', function () {
            this.classList.toggle('hide');
        });
    }), GLOBAL_CONFIG.islazyload && (window.lazyLoadInstance = new LazyLoad({
        elements_selector: 'img',
        threshold: 0,
        data_src: 'lazy-src'
    })), void 0 !== GLOBAL_CONFIG.copyright && (L = GLOBAL_CONFIG.copyright, document.body.oncopy = function (e) {
        e.preventDefault();
        var t = void 0, n = window.getSelection(0).toString(), t = n.length > L.limitCount ? n + '\n\n\n' + L.languages.author + '\n' + L.languages.link + window.location.href + '\n' + L.languages.source + '\n' + L.languages.info : n;
        return (e.clipboardData ? e : window).clipboardData.setData('text', t);
    });
});