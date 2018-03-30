/*!
 * Bootstrap-select v1.10.0 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2016 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
$(document).ready(function() {
    $(".detail-content").each(function() {
        if ($(this).find("h3").length < 1 && $(this).parent(".col-md-10").find(".cta_module").length < 1) {
            $(this).addClass("singlePara")
        } else {
            if ($(this).find("p").length < 1 && $(this).parent(".col-md-10").find(".cta_module").length < 1) {
                $(this).addClass("singleHeading")
            } else {
                if ($(this).find("h3").length < 1) {
                    $(this).addClass("onlyPara")
                } else {
                    if ($(this).find("p").length < 1) {
                        $(this).addClass("onlyHeading")
                    } else {
                        if ($(this).parent(".col-md-10").find(".cta_module").length < 1 && $(this).parent(".col-md-10").parent(".social-block").find(".social-block").length < 1) {
                            $(this).addClass("onlyContent")
                        }
                    }
                }
            }
        }
    });
    $(document).on("click", "i.detail-toggle.fa-bars",
    function() {
        $(this).removeClass("fa-bars");
        $(this).addClass("fa-times");
        $(this).parent().parent(".thumb-details").addClass("rollover");
        $(this).parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children(".clampingDetail").children("span").removeClass("asianLang");
        setTimeout(function() {
            $(".rollover").children(".col-md-10").children(".detail-content").children(".clampingDetail").css("max-height", "100%");
            $(".rollover").children(".col-md-10").children(".detail-content").children("p:not(:first)").show()
        },
        250)
    });
    $(document).on("click", "i.detail-toggle.fa-times",
    function() {
        var e = $(this);
        b(e);
        $(this).removeClass("fa-times");
        $(this).addClass("fa-bars");
        $(this).removeAttr("style");
        $(this).parent().parent(".thumb-details").removeClass("rollover");
        if ($(this).parent().parent(".thumb-details").parent(".thumb-container").hasClass("singleLineEllipse")) {
            $(this).parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children(".clampingDetail").children("span").addClass("asianLang")
        }
        $(this).parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("p:not(:first)").hide()
    });
    function c() {
        $(this).children(".col-md-1").removeAttr("style");
        $(this).children(".col-md-10").removeAttr("style");
        $(".thumb-details").each(function() {
            if (!$(this).hasClass("rollover")) {
                $(this).children(".col-md-1").removeAttr("style");
                $(this).children(".col-md-10").removeAttr("style");
                var e = $(this).height();
                $(this).children(".col-md-1").css("height", e);
                $(this).children(".col-md-10").css("height", e)
            }
        })
    }
    c();
    function b(g) {
        var f = 2 * (parseInt((g.parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("h3").css("line-height")))) + "px";
        var e = 2 * (parseInt((g.parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("p").css("line-height")))) + "px";
        g.parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("h3.clampingDetail").css("max-height", f);
        g.parent().parent(".thumb-details").children(".col-md-10").children(".detail-content").children("p.clampingDetail").css("max-height", e)
    }
    function a() {
        $(".thumb-details").each(function() {
            if (!$(this).parent(".thumb-container").hasClass("singleLineEllipse")) {
                if (!$(this).hasClass("rollover")) {
                    var f = 2 * (parseInt(($(this).children(".col-md-10").children(".detail-content").children("h3").css("line-height")))) + "px";
                    var e = 2 * (parseInt(($(this).children(".col-md-10").children(".detail-content").children("p").css("line-height")))) + "px";
                    $(this).children(".col-md-10").children(".detail-content").children("h3.clampingDetail").css("max-height", f);
                    $(this).children(".col-md-10").children(".detail-content").children("p.clampingDetail").css("max-height", e)
                }
            }
        })
    }
    window.getlineHeightAsian = function() {
        $(".thumb-details").each(function() {
            if ($(this).parent(".thumb-container").hasClass("singleLineEllipse")) {
                if (!$(this).hasClass("rollover")) {
                    $(this).children(".col-md-10").children(".detail-content").children("h3.clampingDetail").css("max-height", $(this).children(".col-md-10").children(".detail-content").children("h3").css("line-height"));
                    $(this).children(".col-md-10").children(".detail-content").children("p.clampingDetail").css("max-height", $(this).children(".col-md-10").children(".detail-content").children("p").css("line-height"))
                }
            }
        });
        $(".clampingDetail").each(function() {
            if ($(this).parent(".detail-content").parent(".col-md-10").parent(".thumb-details").parent(".thumb-container").hasClass("singleLineEllipse")) {
                $(this).find("span").removeAttr("style");
                var h = $(this).parent(".detail-content").parent(".col-md-10").parent(".thumb-details").parent(".thumb-container").children(".thumb-img").width();
                var e = $(this).parent(".detail-content").parent(".col-md-10").prev(".col-md-1").children("i").width() + $(this).parent(".detail-content").parent(".col-md-10").next(".col-md-1.cntClk").children("i").width() + 80;
                var g = h - e;
                var f = $(this).parent(".detail-content").children("h3").children("span").eq(0).innerWidth();
                var j = $(this).parent(".detail-content").children("p").children("span").eq(0).innerWidth();
                if (g < f) {
                    $(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
                }
                if (g < j) {
                    $(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
                }
                if ($(this).parent(".detail-content").find("p").length > 1 || $(this).parent(".detail-content").find("p").children("span").length > 1 || $(this).parent(".detail-content").find("h3").children("span").length > 1) {
                    $(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
                }
                $(this).find("span").css("width", g);
                if ($(this).children("span").eq(0).is(":empty")) {
                    $(this).children("span").eq(1).addClass("addEllipsis").show()
                }
            }
        })
    };
    window.addEventListener("resize", a);
    function d() {
        $(".thumb-details").each(function() {
            if ($(this).hasClass("rollover")) {
                $(this).children(".cntClk").children(".detail-toggle").css("display", "inline-block")
            }
        })
    }
    d();
    window.addEventListener("resize", d);
    $(window).resize(function() {
        var f = window.navigator.userAgent;
        var e = f.indexOf("MSIE ");
        if (e > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            var g = $(".thumb-img > a img").first();
            $(".thumb-img > a img").remove();
            $(".thumb-img > a").append(g)
        }
        setTimeout(function() {
            getlineHeightAsian()
        },
        400);
        setTimeout(function() {
            c()
        },
        400)
    })
});
$(window).load(function() {
    setTimeout(function() {
        getlineHeightAsian()
    },
    400);
    $(".thumb-details").each(function() {
        if ($(this).parent(".thumb-container").hasClass("singleLineEllipse")) {
            if (!$(this).hasClass("rollover")) {
                $(this).children(".col-md-1").removeAttr("style");
                $(this).children(".col-md-10").removeAttr("style");
                var a = $(this).height();
                $(this).children(".col-md-1").css("height", a);
                $(this).children(".col-md-10").css("height", a)
            }
        }
    })
});
$(document).ready(function() {
    var a = "";
    $(".faq_ans").hide();
    $(document).on("click", ".faq_block",
    function() {
        if (!$(this).hasClass("noFade")) {
            if (!$(this).hasClass("openState")) {
                $(".faq_block").removeClass("selected");
                $(this).addClass("selected");
                a = $(this).next("div.faqAnsBox").html();
                if ($(".appenddiv") != null) {
                    $(".appenddiv").remove();
                    if (window.innerWidth < 993) {
                        $(this).parent(".col-md-6").append("<div class='col-md-12 appenddiv'><div class='openState faq_ans'> " + a + "</div></div>")
                    } else {
                        $(this).parent().parent(".row").append("<div class='col-md-12 appenddiv'><div class='openState faq_ans'> " + a + "</div></div>")
                    }
                } else {
                    if (window.innerWidth < 993) {
                        $(this).parent().next().append("<div class='col-md-12 appenddiv'><div class='openState faq_ans'> " + a + "</div></div>")
                    } else {
                        $(this).parent().parent(".row").append("<div class='col-md-12 appenddiv'><div class='openState faq_ans'> " + a + "</div></div>")
                    }
                }
            }
        }
    });
    $(document).on("click", "#remove",
    function() {
        $(this).parent(".faq_ans").remove();
        $(".faq_block").removeClass("selected")
    });
    $(window).on("resize",
    function() {
        $(".faq_block.selected").click()
    })
});
$(document).ready(function() {
    $(".thumb-container .detail-content").each(function() {
        if (!$(this).hasClass("noclamp")) {
            $(this).find("p").addClass("clampingDetail");
            $(this).find("p:not(:first)").hide()
        } else {
            $(this).find("p").addClass("noclampingDetail")
        }
    })
});
if (!Function.prototype.bind) {
    Function.prototype.bind = function(a) {
        if (typeof this !== "function") {
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
        }
        var e = Array.prototype.slice.call(arguments, 1),
        d = this,
        b = function() {},
        c = function() {
            return d.apply(this instanceof b && a ? this: a, e.concat(Array.prototype.slice.call(arguments)))
        };
        b.prototype = this.prototype;
        c.prototype = new b();
        return c
    }
} (function(n, l) {
    var h, a, p, k, j, r, t, s, m, g, c = l.createElement.bind(l),
    f = l.createTextNode.bind(l),
    b,
    e,
    o;
    a = c("span"); (function(d) {
        d.position = "absolute";
        d.whiteSpace = "pre";
        d.visibility = "hidden"
    })(a.style);
    b = c("span");
    e = c("span");
    e.style.display = "block";
    e.style.overflow = "hidden";
    e.appendChild(f("\u2060"));
    h = function(v, u, w) {
        var d;
        if (!v.ownerDocument || !v.ownerDocument === l) {
            return
        }
        j = t = 0;
        r = 1;
        g = false;
        k = [];
        p = (v.textContent || v.innerText).replace(/\n/g, " ");
        for (d = 1; d < u; d++) {
            o = e.cloneNode(true);
            b.appendChild(o);
            if (d === 1) {
                e.style.textIndent = 0
            }
        }
        e.style.textIndent = "";
        o = void 0;
        while (v.firstChild) {
            v.removeChild(v.firstChild)
        }
        v.appendChild(b);
        for (d = 0; d < u - 1; d++) {
            k.push(b.childNodes[d].clientWidth)
        }
        v.removeChild(b);
        while (b.firstChild) {
            b.removeChild(b.firstChild)
        }
        v.appendChild(a);
        p.replace(/ /g,
        function(y, z) {
            if (r === u) {
                return
            }
            a.appendChild(f(p.substr(j, z - j)));
            if (w - 20 <= a.clientWidth) {
                if (g) {
                    m = p.substr(j, z + 1 - j);
                    j = z + 1
                } else {
                    m = p.substr(j, t - j);
                    j = t
                }
                s = c("span");
                s.appendChild(f(m));
                v.appendChild(s);
                g = true;
                r++
            } else {
                g = false
            }
            t = z + 1;
            a.removeChild(a.firstChild)
        });
        v.removeChild(a);
        s = c("span");
        if (r === u) { (function(y) {
                y.overflow = "hidden";
                y.width = "100%"
            })(s.style)
        }
        s.appendChild(f(p.substr(j)));
        v.appendChild(s)
    };
    n.clamp = h
})(window, window.document);
var clampingWidth = "";
window.loadClamp = function(a) {
    var b = "";
    $(".clampingDetail").each(function() {
        $(this).attr("data-id", "randomId" + Math.floor((Math.random() * 10000) + 1));
        b = $(this).attr("data-id");
        if ($(window).innerWidth() > 1260) {
            clampingWidth = $(this).innerWidth() - 55
        } else {
            clampingWidth = $(this).innerWidth()
        }
        clamp($(".clampingDetail[data-id='" + b + "']")[0], 3, clampingWidth);
        if ($("html").attr("lang") == "ja" || $("html").attr("lang") == "ja-JP" || $("html").attr("lang") == "zh_CN" || $("html").attr("lang") == "zh-CN" || $("html").attr("lang") == "ko" || $("html").attr("lang") == "ko-KR") {
            $(".thumb-container").each(function() {
                $(this).addClass("singleLineEllipse")
            });
            if (!$(this).parent().parent().parent(".thumb-details").hasClass("rollover")) {
                $(this).parent().children("h3").eq(0).children("span").addClass("asianLang");
                $(this).parent().children("p").eq(0).children("span").addClass("asianLang")
            }
            $(".addEllipsis").each(function() {
                if ($(this).html() == "") {
                    $(this).addClass("blankSpan")
                }
            });
            if ($(this).children("span").length > 1) {
                $(this).parent(".detail-content").parents(".thumb-details").addClass("showHam");
                $(this).children("span").eq(0).addClass("addEllipsis")
            }
        } else {
            if ($(this).children("span").length > 2) {
                $(this).parent(".detail-content").parents(".thumb-details").addClass("showHam");
                $(this).children("span").eq(1).addClass("addEllipsis")
            } else {
                if ($(this).parent().find("p").length > 1) {
                    if ($(this).parent().children("p").eq(0).find("span").length > 1) {
                        $(this).parent().children("p").eq(0).children("span").eq(1).addClass("addEllipsis")
                    } else {
                        $(this).parent().children("p").eq(0).children("span").eq(0).addClass("addEllipsis")
                    }
                } else {
                    $(this).parent(".detail-content").parents(".thumb-details").removeClass("addEllipsis")
                }
            }
        }
    })
};
$(function() {
    window.showHamBurger = function() {
        $(".thumb-details .col-md-10 .clampingDetail").each(function() {
            if ($(this).parent().find("h3").find("span").hasClass("addEllipsis")) {
                $(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
            } else {
                if ($(this).parent().find("p").find("span").hasClass("addEllipsis")) {
                    $(this).parent(".detail-content").parents(".thumb-details").addClass("showHam")
                } else {
                    $(this).parent(".detail-content").parents(".thumb-details").removeClass("showHam")
                }
            }
        })
    };
    $(".collapse_content").on("click",
    function() {
        $(".hidden_clamp").toggle();
        resizeFunc();
        $(".thumb-details").each(function() {
            $(this).children(".col-md-1").removeAttr("style");
            $(this).children(".col-md-10").removeAttr("style");
            var b = $(this).height();
            $(this).children(".col-md-1").css("height", b);
            $(this).children(".col-md-10").css("height", b)
        })
    });
    var a;
    window.resizeFunc = function() {
        var b = "";
        b = $(this).attr("data-id");
        loadClamp(b);
        showHamBurger()
    };
    resizeFunc();
    $(window).resize(function() {
        setTimeout(function() {
            resizeFunc()
        },
        300)
    })
});

var owl;


// 详细页
$(document).on("click", ".submenu li a",
function(a) {
    if ($(this).attr("href") == document.location.pathname + document.location.hash) {
        $(".cross").click();
        a.preventDefault()
    } else {
        if ($(this).attr("href").split("#")[0] == document.location.pathname) {
            $(".cross").click();
            var b = "#" + $(this).attr("href").split("#")[1];
            $(".secondary-nav ul li a").each(function() {
                if ($(this).attr("href") == b) {
                    $(this).click()
                }
            })
        }
    }
});

$(document).on("click", ".submenu li a",
function(a) {
    if ($(this).attr("href") == document.location.pathname + document.location.hash) {
        $(".cross").click();
        a.preventDefault()
    } else {
        if ($(this).attr("href").split("#")[0] == document.location.pathname + document.location.hash) {
            $(".cross").click();
            var b = "#" + $(this).attr("href").split("#")[1];
            $(".secondary-nav ul li a").each(function() {
                if ($(this).attr("href") == b) {
                    $(this).click()
                }
            })
        }
    }
});

var getAnchorName = [];
var getAnchortop = [];
var scrollPos = $(window).scrollTop();
var factor = 0,
_factor = 0,
__factor = 0;
var navBarHeight = $(".navbar").outerHeight(true);
var breadCrumHeight = $(".breadCrumb").outerHeight(true);
var secondNavHeight = $(".secondary-nav").outerHeight(true);
var secondNavFixedHeight = $(".secondary-nav.fixed").outerHeight(true);
var getNavHeight = 0;
function getNavDetail() {
    getAnchorName.length = 0;
    getAnchortop.length = 0;
    $(".navSelecter").each(function() {
        getAnchorName.push($(this).attr("id"));
        getAnchortop.push(Math.ceil($(this).position().top))
    })
}
$(document).ready(function() {
    if ($(".secondary-nav ul li").length < 1) {
        $(".secondary-nav").addClass("noLinks")
    }
    SetHeaderHeight();
    $(window).load(function() {
        b();
        if (window.innerWidth <= 800) {
            calcHeight_snav()
        }
        $(".secondary-nav ul li a").each(function() {
            if ($(this).attr("href") == document.location.hash) {
                $(this).click()
            }
        })
    });
    $(window).on("scroll",
    function() {
        if (window.innerWidth <= 800) {
            collapseMenu()
        }
    });
    $(document).on("click", ".secondary-nav ul li a[href*=#]:not([href=#])",
    function(g) {
        b();
        var d = 0;
        if (window.innerWidth < 800) {
            if ($(this).hasClass("active") && !$(this).parent("ul").hasClass("open")) {
                return false
            }
        }
        if (window.innerWidth < 641) {
            d = getAnchortop[0] + 30
        } else {
            if (window.innerWidth < 801) {
                d = getAnchortop[0]
            } else {
                if (window.innerWidth < 1001) {
                    d = getAnchortop[0]
                } else {
                    d = getAnchortop[0] + 50
                }
            }
        }
        calcHeight_snav();
        g.preventDefault();
        var f = this.hash;
        var c = $(f);
        $("html, body").animate({
            scrollTop: c.offset().top - d
        },
        900,
        function() {
            onScroll()
        });
        $(".secondary-nav ul").removeClass("open")
    });
    if (window.innerWidth <= 800) {
        collapseMenu()
    }
    $(window).on("scroll",
    function() {
        b();
        onScroll()
    });
    function a(c) {}
    $(document).on("click", ".secondary-nav ul li a",
    function(d) {
        $(".content-container").css("padding-top", 0);
        if ($(this).hasClass("active")) {
            return false
        } else {
            var c = $(this);
            var f = c.attr("href");
            if (c.position().top <= scrollPos) {} else {
                c.removeClass("active")
            }
        }
    });
    $(document).on("click", ".secondary-nav ul li a.active",
    function(c) {
        $(".secondary-nav ul li").toggle();
        $(".secondary-nav ul li a.active").parent("li").toggle();
        $(".secondary-nav ul").addClass("open");
        c.preventDefault()
    });
    function b() {
        if (window.innerWidth < 1001 && window.innerWidth > 800) {
            if ($(window).scrollTop() < 40) {
                $(".content-container").css("padding-top", 0)
            }
            if ($(window).scrollTop() > 40) {
                $(".secondary-nav").addClass("fixed");
                $(".content-container").css("padding-top", $(".secondary-nav").height() + 20)
            } else {
                $(".secondary-nav").removeClass("fixed");
                $(".content-container").css("padding-top", "0")
            }
        } else {
            if ($(window).scrollTop() > ($(".secondary-nav").height() - $(".breadCrumb").height()) && $(window).scrollTop() > 0) {
                if ($(".secondary-nav ul li").length > 0) {
                    $(".secondary-nav").addClass("fixed")
                }
            } else {
                $(".secondary-nav").removeClass("fixed")
            }
            getNavDetail()
        }
    }
    if ($(window).scrollTop() > 0) {
        $(".breadCrumb").addClass("scrolling")
    }
    $(window).resize(function() {
        headlinePos();
        SetHeaderHeight();
        b();
        onScroll();
        if ($(window).scrollTop() > 0) {
            $(".breadCrumb").addClass("scrolling")
        }
        if (window.innerWidth <= 800) {
            collapseMenu();
            calcHeight_snav()
        } else {
            getNavDetail();
            if (navigator.userAgent.indexOf("MSIE") !== -1 || navigator.appVersion.indexOf("Trident/") > 0) {
                $(".content-container").css("padding-top", "0")
            } else {
                if ($(window).scrollTop() < 40) {
                    $(".content-container").css("padding-top", "initial")
                }
            }
        }
    });
    if (window.innerWidth <= 640) {
        headlinePos()
    }
    $(window).scroll(function() {
        if (window.innerWidth < 800) {
            if ($(".secondary-nav").hasClass("noLinks")) {
                if ($(window).scrollTop() == 0) {
                    $(".content-container").css("padding-top", "0")
                }
            }
            if ($(".secondary-nav ul li").length > 0) {
                $(".content-container").css("padding-top", $(".secondary-nav").height())
            }
        }
        if (window.innerWidth <= 640) {
            if ($(window).scrollTop() == 0) {
                if ($(".secondary-nav").hasClass("noLinks")) {
                    $(".secondary-nav").removeClass("hideHeading")
                }
                getNavDetail();
                if ($(".secondary-nav ul li").length > 0) {
                    $(".secondary-nav").addClass("stayTop");
                    $(".secondary-nav").removeClass("hideHeading");
                    $(".content-container").css("padding-top", $(".secondary-nav").height())
                }
            } else {
                if ($(window).scrollTop() > 0) {
                    getNavDetail();
                    if ($(".secondary-nav ul").length > 0) {
                        $(".secondary-nav").addClass("hideHeading");
                        $(".secondary-nav").removeClass("stayTop");
                        if ($(".secondary-nav ul li").length > 0) {
                            $(".content-container").css("padding-top", $(".secondary-nav").height())
                        }
                    }
                }
            }
        }
    });
    if (window.innerWidth < 800) {
        if ($(".secondary-nav ul li").length > 0) {
            $(".content-container").css("padding-top", $(".secondary-nav").height())
        }
        $(window).on("scroll", calcHeight_snav);
        $(window).on("scroll", onScroll);
        $(window).on("resize", onScroll)
    }
    onScroll();
    $(window).on("scroll", onScroll);
    $(window).on("resize", onScroll);
    $(window).on("load", onScroll)
});
function headlinePos() {
    if (window.innerWidth <= 640) {
        if ($(window).scrollTop() == 0) {
            if ($(".secondary-nav ul li").length > 0) {
                $(".secondary-nav").addClass("stayTop");
                $(".secondary-nav").removeClass("hideHeading")
            }
        } else {
            if ($(window).scrollTop() > 0) {
                $(".secondary-nav").addClass("hideHeading");
                $(".secondary-nav").removeClass("stayTop")
            }
        }
    } else {
        if (window.innerWidth > 640) {
            $(".secondary-nav").removeClass("stayTop");
            $(".secondary-nav").removeClass("hideHeading")
        }
    }
}
function SetHeaderHeight() {
    if (window.innerWidth > 800) {
        if ($(".secondary-nav .snav_left ul").length > 0) {
            $(".snav_right").height($(".secondary-nav .snav_left h2").outerHeight(true) + $(".secondary-nav .snav_left ul").outerHeight(true))
        } else {
            if ($(".secondary-nav .snav_right .cta a").length < 2) {
                $(".secondary-nav .snav_right").addClass("singleLinkRight")
            }
            $(".snav_right").height($(".secondary-nav .snav_left h2").outerHeight(true) + $(".secondary-nav .snav_left ul").outerHeight(true))
        }
    } else {
        if ($(".secondary-nav .snav_right .cta a").length < 1) {
            $(".secondary-nav .snav_left").addClass("noCtaLink")
        } else {
            if ($(".secondary-nav .snav_right .cta a").length < 2) {
                $(".secondary-nav .snav_right").addClass("singleLinkCenter")
            }
        }
        $(".snav_right").removeAttr("style");
        if ($(".secondary-nav .snav_left ul li").length < 1) {}
    }
}
function collapseMenu() {
    $(".secondary-nav ul li a").parent("li").hide();
    $(".secondary-nav ul li a.active").parent("li").show()
}
function calcHeight_snav() {
    var a = 0;
    if ($(".secondary-nav").is(":visible") == true) {
        a = $(".secondary-nav").height()
    }
}
function onScroll() {
    getNavDetail();
    var b = 0;
    if (window.innerWidth < 801) {
        b = $(window).scrollTop() + getAnchortop[0] + 50
    } else {
        if (window.innerWidth < 1001) {
            b = $(window).scrollTop() + getAnchortop[0] + $(".secondary-nav").outerHeight(true) + 10
        } else {
            b = $(window).scrollTop() + getAnchortop[0] + 70
        }
    }
    if (window.innerWidth > 800) {
        if ($(window).scrollTop() < 40) {
            SetHeaderHeight();
            $(".content-container").css("padding-top", 0)
        }
    }
    for (var a = 0; a < getAnchortop.length; a++) {
        if (b > getAnchortop[a]) {
            $(".secondary-nav ul li a").removeClass("active");
            $(".secondary-nav ul li a[href=#" + getAnchorName[a] + "]").addClass("active")
        }
    }
}

$(window).resize(function() {
    moduleHeight();
    resizeBlock_tech_specs();
    setTimeout(moduleHeight, 50);
    if (window.innerWidth > 992) {
        combinationCard()
    }
    if (window.innerWidth > 801) {
        if (!$(".secondary-nav").length > 0) {
            $(".content-container").removeAttr("style")
        }
    } else {
        if (window.innerWidth < 801) {
            if (!$(".secondary-nav").length > 0) {
                $(".content-container").css("margin-top", $(".sidebar").outerHeight())
            }
        }
    }
});

moduleHeight();
$(document).ready(function() {
    moduleHeight();
    if (window.innerWidth < 801) {
        if (!$(".secondary-nav").length > 0) {
            $(".content-container").css("margin-top", $(".sidebar").outerHeight())
        }
    }
})

$(document).ready(function() {
    if (window.innerWidth > 992) {
        combinationCard()
    }
    if (window.innerWidth < 801) {
        if (!$(".secondary-nav").length > 0) {
            $(".content-container").css("margin-top", $(".sidebar").outerHeight())
        }
    }
    if ($("div.supportList").length) {
        $(".supportList .selectpicker").selectpicker("deselectAll")
    }
});

$(window).resize(function() {
    resizeBlock_tech_specs();
    tableInnerHeight();
    setTimeout(moduleHeight, 50);
    if (window.innerWidth > 992) {
        combinationCard()
    }
    if (window.innerWidth > 801) {
        if (!$(".secondary-nav").length > 0) {
            $(".content-container").removeAttr("style")
        }
    } else {
        if (window.innerWidth < 801) {
            if (!$(".secondary-nav").length > 0) {
                $(".content-container").css("margin-top", $(".sidebar").outerHeight())
            }
        }
    }
    setModal1MaxHeight()
});