!function() {
    function d(b, c) {
        var f, d = document.documentElement,
        e = d.clientWidth;
        a.fontSize = (b || 30) * (e / (c || 720)),
        d.style.fontSize = parseInt(a.fontSize) + "px",
        d.style.fontSize = parseInt(a.fontSize) + "px",
        f = navigator.userAgent.toLowerCase(),
        "vitoandroid" == f.match(/vitoandroid/i) ? a.browserType = "vitoandroid": "vitoios" == f.match(/vitoios/i) ? a.browserType = "vitoios": "micromessenger" == f.match(/MicroMessenger/i) ? a.browserType = "weixin": f.match(/(iPhone|iPad|iPod|iOS)/i) ? a.browserType = "ios": f.match(/android/i) ? a.browserType = "android": (a.browserType = "pc", a.fontSize = 16, d.style.fontSize = "16px")
    }
    function e(d, e, g) {
        function i() {
            var b = document.getElementById(h),
            c = o("div", "#" + h, {
                type: d["type"]
            });
            d.style && !
            function() {
                for (var a in d.style) c.style[a] = d.style[a]
            } (),
            d.class && (c.className = d.class),
            d.margin && (c.style.margin = d.margin),
            d.padding && (c.style.padding = d.padding),
            d.show || (d.show = function() {
                c.style.display = "block"
            }),
            d.hide || (d.hide = function() {
                c.style.display = "none"
            }),
            "hide" === d.showHide && (c.style.display = "none"),
            b ? (a.plugins[d.type].init(c, d, b.parentNode), b.parentNode.insertBefore(c, b), b.parentNode.removeChild(b), e(c)) : a.plugins[d.type].init(c, d, g),
            g && g.appendChild(c),
            e(c)
        }
        if (d.type) {
            d = f(d);
            var h = d.id || k();
            c[h] = d,
            a.plugins[d.type] ? i() : l([b + "LazyUI/js/" + d.type + "/" + d.type + ".css", b + "LazyUI/js/" + d.type + "/" + d.type + ".js"],
            function() {
                i()
            })
        } else a.alert("setData:type参数不存在!")
    }
    function f(b) {
        var c = {};
        return a.
        for (b,
        function(a, b) {
            var d, e;
            "function" == typeof a || "class" == b || "id" == b || "type" == b ? c[b] = a: (d = b + "_lazy", e = b + "_change", c[d] = a, c.__defineGetter__(b,
            function() {
                return this[d]
            }), c.__defineSetter__(b,
            function(a) {
                this[d] = a,
                this[e] && this[e](a),
                this["all_change"] && this["all_change"](a, b)
            }))
        }),
        c
    }
    function g(a) {
        this.debugger ? alert(a) : console.log("lazy.alert : " + a)
    }
    function h(a) {
        "function" == typeof a ? (window.GoBackEvent = a, window.history.go( - 1)) : window.history.go(a ? a: -1)
    }
    function i() {
        var a = window.location.hash,
        b = window.location + "",
        c = new RegExp(a + "$", "g");
        b = b.replace(c, ""),
        history.pushState({},
        "page", b + "#" + k())
    }
    function k() {
        return "LazyAuto" + j++
    }
    function l(b, c, d) {
        function f(b, c, d) {
            var g, h, e = b && b.replace(/.*\//g, "").split("."),
            f = document.getElementsByTagName("head")[0];
            switch (d || e[1]) {
            case "js":
                g = document.createElement("script"),
                g.src = b,
                f.appendChild(g),
                g.onload = function() {
                    c()
                },
                g.onerror = function() {
                    a.alert("loadjs:" + b + "不存在！"),
                    c()
                };
                break;
            case "css":
                h = document.createElement("link"),
                h.rel = "stylesheet",
                h.href = b,
                f.appendChild(h),
                c();
                break;
            default:
                c()
            }
        }
        switch (a.type(b)) {
        case "array":
            if (0 == b.length) return c && c(),
            void 0;
            var e = 0; !
            function g() {
                var a = null;
                a = d && d[e],
                f(b[e],
                function() {
                    e < b.length - 1 ? (e++, g()) : e == b.length - 1 && c && c()
                },
                a)
            } ();
            break;
        case "string":
            f(b,
            function() {
                c && c()
            },
            d)
        }
    }
    function m(b, c) {
        l(b,
        function() {
            var d, e;
            try {
                b = b.replace(/.*\//g, ""),
                d = b.replace(/(.*)\.js/, "$1"),
                e = new window[d],
                c(e)
            } catch(f) {
                a.alert(f)
            }
        })
    }
    function n(a) {
        return a && "object" == typeof a && "number" == typeof a.length && "function" == typeof a.splice && !a.propertyIsEnumerable("length") ? "array": typeof a
    }
    function o(a, b, c) {
        var e, d = document.createElement(a);
        if (b && ( - 1 != b.indexOf("#") ? d.id = b.replace("#", "") : d.className = b.replace(".", "")), "a" == a && d.setAttribute("href", "javascript:;"), c) for (e in c) d.setAttribute(e, c[e]);
        return d
    }
    function p(a, b) {
        for (var c in a) b(a[c], c)
    }
    function q(a, b, c, d) {
        a.addEventListener("touchstart",
        function(a) {
            a.preventDefault(),
            b && b(a.touches[0].clientX, a.touches[0].clientY, a)
        },
        !1),
        a.addEventListener("touchmove",
        function(a) {
            a.preventDefault(),
            c && c(a.touches[0].clientX, a.touches[0].clientY, a)
        },
        !1),
        document.body.addEventListener("touchend",
        function(a) {
            d && d(a.changedTouches[0].clientX, a.changedTouches[0].clientY, a)
        },
        !1)
    }
    function r(b) {
        var c, d, e, f;
        b = {
            url: b.url || "",
            type: b.type || "GET",
            dataType: b.dataType || "",
            error: b.error ||
            function() {},
            success: b.success ||
            function() {}
        },
        "jsonp" == b.dataType ? (c = a.getAutoId(), window[c] = function(a) {
            back1 && back1(a)
        },
        d = -1 == b.url.indexOf("?") ? "?": "&", a.loadJsCss(b.url + d + "jsoncallback=" + c,
        function() {},
        "js")) : (xmlhttp = new XMLHttpRequest, "POST" == b.type ? (e = b.url.replace(/.*?\?/, ""), f = b.url.replace(/\?.*/, ""), xmlhttp.open("POST", f, !0), xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), xmlhttp.send(e)) : (xmlhttp.open("GET", b.url, !0), xmlhttp.send()), xmlhttp.onreadystatechange = function() {
            4 == xmlhttp.readyState && 200 == xmlhttp.status ? b.success(xmlhttp.responseText) : (0 == xmlhttp.status || (xmlhttp.status + "").match(/(4|5)\d\d/)) && b.error(xmlhttp.status)
        })
    }
    function s(a) {
        var c, b = this;
        switch (a) {
        case "LazyUI":
            console.log("LazyUI: 重构admin初始化方法 method使用，一定要执行回调函数back！");
            break;
        case "start":
            console.log("start: 为了防止文档在完全加载之前运行！");
            break;
        case "setData":
            console.log("setData参数问题 ： \n\r        1,传object如果有id则渲染当前对象，id不存在新建控件dom对象\n\r        2，传array渲染一组 回掉函数返回dom对象和dom数据");
            break;
        case "getData":
            console.log("getData : 根据id获取对应控件json");
            break;
        case void 0:
            return console.log("\n\r LazyUI help start---↓↓↓↓↓↓↓↓↓↓---\n\r"),
            c = " versio_2.0\n\r 720 28 关键字\n\r   plugins start setData getData getEl LazyUI \n\r lazy内置方法 \n\r   ",
            p(b,
            function(a, b) {
                c += b + "  "
            }),
            console.log(c),
            console.log("\n\r LazyUI end---↑↑↑↑↑↑↑↑↑↑---\n\r"),
            void 0
        }
    }
    function t(a) {
        console.log(a)
    }
    var j, a = {},
    b = "",
    c = {};
    document.querySelectorAll ? b = document.querySelectorAll("script[src*=admin]")[0].getAttribute("src").match(/.*(?=LazyUI)/g)[0] : a.alert("querySelectorAll不兼容！"),
    window.LazyUI = null,
    window.start = function(c) {
        a.url = b,
        a.loadJsCss([b + "LazyUI/css/admin.css", b + "LazyUI/js/method.js"],
        function() {
            d(),
            document.body.onload = function() {
                document.body.setAttribute("type", "body"),
                document.body.setAttribute("ontouchstart", ""),
                LazyUI && LazyUI(c, Object.create(a))
            }
        })
    },
    window.setData = function(b, c) {
        var d, f;
        switch (a.type(b)) {
        case "array":
            if (d = o("div", "", {
                type: "plugins"
            }), document.body.appendChild(d), 0 == b.length) return c && c(d, b),
            void 0;
            f = 0,
            !
            function g() {
                e(b[f],
                function() {
                    f < b.length - 1 ? (f++, g()) : c && c(d, b)
                },
                d)
            } ();
            break;
        case "object":
            e(b,
            function(a) {
                c && c(a, b)
            });
            break;
        default:
            a.alert("setData数据格式不对：" + b)
        }
    },
    window.getData = function(a) {
        return c[a]
    },
    window.getEl = function(a) {
        return document.getElementById(a)
    },
    window.addEventListener("popstate",
    function() {
        window.GoBackEvent && window.GoBackEvent()
    },
    !1),
    window.addEventListener("scroll",
    function() {
        p(a.scrolls,
        function(a) {
            "function" == typeof a && a(document.body.scrollHeight, document.body.scrollTop, document.body.clientHeight)
        })
    },
    !1),
    a = {
        "debugger": !1,
        ids: [],
        plugins: {},
        get help() {
            return s
        },
        create: o,
        alert: g,
        getAutoId: k,
        log: t,
        type: n,
        "for": p,
        loadJsCss: l,
        "new": m,
        setFontSize: d,
        scrolls: {},
        touchEvent: q,
        ajax: r,
        goBack: h,
        setGoBack: i
    },
    j = 0
} ();