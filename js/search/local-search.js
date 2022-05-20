'use strict';
function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++)
            n[t] = e[t];
        return n;
    }
    return Array.from(e);
}
window.addEventListener('load', function () {
    function e() {
        var e = document.body.style;
        e.width = '100%', e.overflow = 'hidden', btf.animateIn(document.getElementById('search-mask'), 'to_show 0.5s'), btf.animateIn(document.querySelector('#local-search .search-dialog'), 'titleScale 0.5s'), setTimeout(function () {
            document.querySelector('#local-search-input input').focus();
        }, 100), n || (async function (e) {
            var t = [], n = e.split('.')[1], e = await fetch(GLOBAL_CONFIG.root + e);
            'json' === n ? t = await e.json() : 'xml' === n && (n = await e.text(), n = await await new window.DOMParser().parseFromString(n, 'text/xml'), t = [].concat(_toConsumableArray(n.querySelectorAll('entry'))).map(function (e) {
                return {
                    title: e.querySelector('title').textContent,
                    content: e.querySelector('content').textContent,
                    url: e.querySelector('url').textContent
                };
            }));
            e.ok && ((a = document.getElementById('loading-database')).nextElementSibling.style.display = 'block', a.remove());
            var a = document.querySelector('#local-search-input input'), r = document.getElementById('local-search-results'), o = document.getElementById('loading-status');
            a.addEventListener('input', function () {
                var d = this.value.trim().toLowerCase().split(/[\s]+/);
                '' !== d[0] && (o.innerHTML = '<i class="fas fa-spinner fa-pulse"></i>'), r.innerHTML = '';
                var m, h = '<div class="search-result-list">';
                this.value.trim().length <= 0 || (m = 0, t.forEach(function (e) {
                    var n = !0;
                    e.title && '' !== e.title.trim() || (e.title = '');
                    var a, t, r, o, c = e.title.trim().toLowerCase(), l = e.content ? e.content.trim().replace(/<[^>]+>/g, '').toLowerCase() : '', s = e.url.startsWith('/') ? e.url : GLOBAL_CONFIG.root + e.url, i = -1, u = -1;
                    '' !== c || '' !== l ? d.forEach(function (e, t) {
                        a = c.indexOf(e), i = l.indexOf(e), a < 0 && i < 0 ? n = !1 : (i < 0 && (i = 0), 0 === t && (u = i));
                    }) : n = !1, n && (t = e.content.trim().replace(/<[^>]+>/g, ''), 0 <= u && (r = u + 100, (r = 0 === (e = (e = u - 30) < 0 ? 0 : e) ? 100 : r) > t.length && (r = t.length), o = t.substring(e, r), d.forEach(function (e) {
                        var t = new RegExp(e, 'gi');
                        o = o.replace(t, '<span class="search-keyword">' + e + '</span>'), c = c.replace(t, '<span class="search-keyword">' + e + '</span>');
                    }), h += '<div class="local-search__hit-item"><a href="' + s + '" class="search-result-title">' + c + '</a>', m += 1, '' !== l && (h += '<p class="search-result">' + o + '...</p>')), h += '</div>');
                }), 0 === m && (h += '<div id="local-search__hits-empty">' + GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/, this.value.trim()) + '</div>'), h += '</div>', r.innerHTML = h, '' !== d[0] && (o.innerHTML = ''), window.pjax && window.pjax.refresh(r));
            });
        }(GLOBAL_CONFIG.localSearch.path), n = !0), document.addEventListener('keydown', function e(t) {
            'Escape' === t.code && (a(), document.removeEventListener('keydown', e));
        });
    }
    function t() {
        document.querySelector('#search-button > .search').addEventListener('click', e), document.getElementById('search-mask').addEventListener('click', a), document.querySelector('#local-search .search-close-button').addEventListener('click', a);
    }
    var n = !1, a = function () {
            var e = document.body.style;
            e.width = '', e.overflow = '', btf.animateOut(document.querySelector('#local-search .search-dialog'), 'search_close .5s'), btf.animateOut(document.getElementById('search-mask'), 'to_hide 0.5s');
        };
    t(), window.addEventListener('pjax:complete', function () {
        'block' === getComputedStyle(document.querySelector('#local-search .search-dialog')).display && a(), t();
    });
});