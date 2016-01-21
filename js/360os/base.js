// JavaScript Document
function isltIE9() {
    return $.support.leadingWhitespace ? !1 : !0
}
var Base = function(e) {
    this.$id = $(e)
};
Base.prototype = {
    setAntiClass: function(t) {
        this.$id.each(function(){
			var a = $(document).scrollTop(),
			b = $(window).height(),
			c = $(this).offset().top,
			d = $(this).height();
			if((a+b)>c&&(c+d)>a){
				var o = $(this).attr("animatein");
				$(this).addClass(o)
			}
		})
    },
    showHide: function(e, t) {
        this.$id.hover(function() {
            $(e).show().hover(function() {
                clearTimeout(timeout)
            },
            function() {
                $(e).hide()
            })
        },
        function() {
            timeout = setTimeout(function() {
                $(e).hide()
            },
            t)
        })
    }
};
var tabs = function(e) {
	this.tb = $(e)
};
tabs.prototype = {
	show: function() {
		var slides = this.tb.find(".slides"),
		list = slides.find(".tb_list"),
		prev = this.tb.find(".prev"),
		next = this.tb.find(".next"),
		i = 0,
		n = $(list).length;
		
		function init() {
			list.hide().eq(0).show();
		}
		function a() {
			var box = list.eq(i);
			box.fadeOut(500)
		}
		function b() {
			var box = list.eq(i);
			box.fadeIn(1000)
		}
		init()
		next.click(function(){
			a()
			i++
			if(i >= n) {
				i = 0
			}
			b()
		})
		prev.click(function(){
			a()
			i--
			if(i < 0) {
				i = n-1
			}
			b()
		})
	}
};
$(function() {
    var wx = new Base(".i_weixin"),
    t = {
        box: ".os_wx",
        time: 0
    };
    wx.showHide(t.box, t.time);
	var anti = new Base(".anti");
	anti.setAntiClass(0);
	if($(document).scrollTop()>100){
		$(".header").addClass("fixed")
	}
	window.onscroll = function(){
		anti.setAntiClass(0);
		if($(document).scrollTop()>100){
			$(".header").addClass("fixed")
		}else{
			$(".header").removeClass("fixed")
		}
	}
});