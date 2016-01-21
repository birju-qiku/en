
!function (e) {
    "use strict";
    function t() {
        var e = document.createElement("bootstrap"), t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in t)if (void 0 !== e.style[n])return {end: t[n]};
        return !1
    }

    e.fn.emulateTransitionEnd = function (t) {
        var n = !1, r = this;
        e(this).one(e.support.transition.end, function () {n = !0});
        var i = function () {n || e(r).trigger(e.support.transition.end)};
        return setTimeout(i, t), this
    }, e(function () {e.support.transition = t()})
}(jQuery)

!function (e) {
    "use strict";
    var t = function (t, n) {this.options = n, this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)};
    t.prototype = {
        constructor: t,
        toggle: function () {return this[this.isShown ? "hide" : "show"]()},
        show: function () {
            var t = this, n = e.Event("show");
            this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function () {
                var n = e.support.transition && t.$element.hasClass("fade");
                t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), n && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1), t.enforceFocus(), n ? t.$element.one(e.support.transition.end, function () {t.$element.focus().trigger("shown")}) : t.$element.focus().trigger("shown")
            }))
        },
        hide: function (t) {
            t && t.preventDefault();
            t = e.Event("hide"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), e(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), e.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
            var self = this;
            self.$element.find('object').remove();

        },
        enforceFocus: function () {
            var t = this;
            e(document).on("focusin.modal", function (e) {t.$element[0] === e.target || t.$element.has(e.target).length || t.$element.focus()})
        },
        escape: function () {
            var e = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function (t) {27 == t.which && e.hide()}) : this.isShown || this.$element.off("keyup.dismiss.modal")
        },
        hideWithTransition: function () {
            var t = this, n = setTimeout(function () {t.$element.off(e.support.transition.end), t.hideModal()}, 500);
            this.$element.one(e.support.transition.end, function () {clearTimeout(n), t.hideModal()})
        },
        hideModal: function () {
            var e = this;
            this.$element.hide(), this.backdrop(function () {e.removeBackdrop(), e.$element.trigger("hidden")})
        },
        removeBackdrop: function () {this.$backdrop && this.$backdrop.remove(), this.$backdrop = null},
        backdrop: function (t) {
            var n = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var r = e.support.transition && n, i = e(document).height(), o = "100%";
                if (this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$backdrop.css({
                        width: o,
                        height: i
                    }).click("static" == this.options.backdrop ? e.proxy(this.$element[0].focus, this.$element[0]) : e.proxy(this.hide, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t)return;
                r ? this.$backdrop.one(e.support.transition.end, t) : t()
            } else!this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t) : t()) : t && t()
        }
    };
    var n = e.fn.modal;
    e.fn.modal = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("modal"), o = e.extend({}, e.fn.modal.defaults, r.data(), "object" == typeof n && n);
            i || r.data("modal", i = new t(this, o)), "string" == typeof n ? i[n]() : o.show && i.show()
        })
    }, e.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function () {return e.fn.modal = n, this}, e(document).on("click.modal.data-api", '[data-toggle="modal"]', function (t) {
        var n = e(this), r = n.attr("href"), i = e(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")), o = i.data("modal") ? "toggle" : e.extend({remote: !/#/.test(r) && r}, i.data(), n.data());
        t.preventDefault(), i.modal(o).one("hide", function () {n.focus()})
    })
}(window.jQuery)

var MI = MI || {};
MI.namespace = function () {
    var e, t, n, r = arguments, i = null;
    for (e = 0; e < r.length; e += 1)for (n = ("" + r[e]).split("."), i = MI, t = "MI" === n[0] ? 1 : 0; t < n.length; t += 1)i[n[t]] = i[n[t]] || {}, i = i[n[t]];
    return i
}

function multiline(e) {
    var t = /\/\*!?(?:\@tpl)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)[ \t]*\*\//;
    if ("function" != typeof e)throw new TypeError("Expected a function");
    var n = t.exec(e.toString());
    if (!n)throw new TypeError("Multiline comment missing.");
    return n[1]
}

!function (t) {
    function e(o) {
        if (n[o])return n[o].exports;
        var a = n[o] = {exports: {}, id: o, loaded: !1};
        return t[o].call(a.exports, a, a.exports, e), a.loaded = !0, a.exports
    }

    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([
    function (t, e, n) {t.exports = n(1)}, function (t, e, n) {
        MI.namespace("goodsCommentList,  itemUtil, goodsComment, pagenav"), MI.goodsComment = n(2), MI.itemUtil = n(4), MI.pagenav = n(5), n(6), MI.goodsCommentList = {
            config: function () {
                var t = this;
                t.slideIndex = 0, t.pageConfig = {};
                var e = {
                    getCommenturlHead: '',
                    answerCommentUrlHead: '',
                    proId: '',
                    supCommentBlock: $("#J_supComment")
                };
                t.commentApi = new MI.goodsComment(e)
            },
            init: function () {
                var t = this;
                t.config(), t.runMethod()
            },
            runMethod: function () {
                var t = this;
                t.commentApi.clickShowBigImg()
            }
        }, $(function () {MI.goodsCommentList.init()})
    }, function (t, e, n) {
        MI.namespace("goodsCommentTmpl, itemUtil"), MI.goodsCommentTmpl = n(3), MI.itemUtil = n(4), MI.pagenav = n(5);
        var o = function (t) {
            var e = this;
            e.randomColorIndex = [];
            for (var n = 1; 11 > n; n++)e.randomColorIndex.push(n);
            e.option = t
        };
        o.prototype = {
            constructor: o,

            clickShowBigImg: function () {
                var t = MI.goodsCommentTmpl.zoomTmplDiv();
                $("body").append(t), $("#JimageModal").on("hide.bs.modal", function () {$("body").removeClass("showZoomImg")});
                var e = function (t) {
                    var e = t.width, n = t.height, o = 800, a = 450, r = "";
                    if (o > e && a > n) {
                        var i = (a - n) / 2;
                        r = "margin-top:" + i + "px"
                    } else {
                        var m = parseInt(o * n / e);
                        if (a > m) {
                            var s = (a - m) / 2;
                            r = "width:" + o + "px;margin-top:" + s + "px"
                        } else r = "height:" + a + "px"
                    }
                    return r
                }, n = {};
                $("body").on("click", ".J_canZoomImg", function () {

                    $("#JimageModal").html($('#JimageModal2').html()), $("#JimageModal").modal("show"), $("body").addClass("showZoomImg")
                });
                var o = function (t) {
                    var n = $(".J_zoomNav").attr("data-amount");
                    0 === t ? ($(".J_zoomLeft").addClass("dective"), $(".J_zoomright").removeClass("dective")) : t === parseInt(n) - 1 ? ($(".J_zoomLeft").removeClass("dective"), $(".J_zoomright").addClass("dective")) : ($(".J_zoomright").removeClass("dective"), $(".J_zoomLeft").removeClass("dective")), a = 0;
                    var o = $("#JimageModal").hasClass("cantrans");
                    o && $("#JimageModal").removeClass("cantrans");
                    var r = $(".J_zoomSmlImg").eq(t);
                    r.siblings("li").removeClass("current"), r.addClass("current"), $(".J_zoomNav").attr("data-index", t);
                    var i = r.find("img").attr("data-width"), m = r.find("img").attr("data-height"), s = r.find("img").attr("src"), c = {
                        width: i,
                        height: m
                    }, l = e(c), d = $(".J_zoomBigImg").width(), u = $(".J_zoomBigImg").height();
                    $(".J_zoomImgContainer").find(".img").css("width", d).css("height", u).css("margin-left", "-" + d / 2 + "px").css("margin-top", "-" + u / 2 + "px"), $(".J_zoomBigImg").fadeOut(200);
                    var p = function () {
                        $(".J_zoomBigImg").attr("src", s), $(".J_zoomBigImg").attr("style", l);
                        var t = $(".J_zoomBigImg").width(), e = $(".J_zoomBigImg").height();
                        $(".J_zoomImgContainer").find(".img").css("width", t).css("height", e).css("margin-left", "-" + t / 2 + "px").css("margin-top", "-" + e / 2 + "px");
                        var n = function () {$(".J_zoomImgContainer").removeClass("loaded"), $(".J_zoomBigImg").fadeIn(500)};
                        setTimeout(n, 400)
                    };
                    $(".J_zoomImgContainer").addClass("loaded"), setTimeout(p, 200);
                    var g = function () {o && $("#JimageModal").addClass("cantrans")};
                    setTimeout(g, 200)
                };
                $("body").on("click", ".J_zoomSmlImg", function () {
                    var t = $(this).index();
                    o(t)
                }), $("body").on("click", ".J_zoomLeft", function () {
                    var t = $(".J_zoomNav").attr("data-index");
                    t--, 0 > t || o(t)
                }), $("body").on("click", ".J_zoomright", function () {
                    var t = $(".J_zoomNav").attr("data-index");
                    t++;
                    var e = $(".J_zoomNav").attr("data-amount");
                    t > e - 1 || o(t)
                });
                var a = 0, r = MI.itemUtil.supportCss3("transition");
                if (r) {
                    $("#JimageModal").addClass("canRotate"), $("#JimageModal").addClass("cantrans");
                    var i = function (t, e) {t.style.webkitTransform = e, t.style.MozTransform = e, t.style.msTransform = e, t.style.OTransform = e, t.style.transform = e}, m = function (t) {
                        var e = 90 * t, n = $(".J_zoomBigImgBlock").find("img")[0];
                        i(n, "rotate(" + e + "deg)")
                    };
                    $("body").on("click", ".J_rotateLeft", function () {a--, m(a)}), $("body").on("click", ".J_rotateRight", function () {a++, m(a)})
                }
            }
        }, t.exports = o
    }, function (t, e) {
        var n = {
            zoomTmplDiv: function () {
                var t = multiline(function () {/*!@tpl
                 <div class="modal fade zoom-modal modal-hide" id='JimageModal'>
                 </div>
                 */
                });
                return t
            }, zoomImgTmpl: function () {
                var t = multiline(function () {/*!@tpl


                 */
                });
                return t
            }
        };
        t.exports = n
    }, function (t, e) {
        var n = {
            supportCss3: function (t) {
                var e, n = ["webkit", "Moz", "ms", "o"], o = [], a = document.documentElement.style, r = function (t) {return t.replace(/-(\w)/g, function (t, e) {return e.toUpperCase()})};
                for (e in n)n.hasOwnProperty(e) && o.push(r(n[e] + "-" + t));
                o.push(r(t));
                for (e in o)if (o[e]in a)return !0;
                return !1
            }
        };
        t.exports = n
    }, function (t, e) {

    }, function (t, e, n) {

    }
]);