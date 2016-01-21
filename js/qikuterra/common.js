$(function() {
	var e = $(document).scrollTop(), h = $(window).height();
	var animate = function(e)
	{
		$(".section").each(function(){
			var n = $(this).offset().top, m = $(this).height();
			if((e+h) >= (n+m/2) && e <= (n+m)){
				$(this).removeClass("animate-init");
				$(this).addClass("active");
			}
		})
	}
	animate(e);
	window.onscroll = function(){
		e = $(document).scrollTop();
		animate(e);
	}
})

$(function(){
	$(".img1").click(function(){
		
		$(".con1").show().siblings().hide();
		$(".ca-function04").attr("id","bg1");
		});
	$(".img2").click(function(){
		
		$(".con2").show().siblings().hide();
		$(".ca-function04").attr("id","bg2");
		});
	$(".img3").click(function(){
		
		$(".con3").show().siblings().hide();
		$(".ca-function04").attr("id","bg3");
		});
	$(".img4").click(function(){
	
		$(".con4").show().siblings().hide();
		$(".ca-function04").attr("id","bg4");
		});
	$(".img5").click(function(){
	
		$(".con5").show().siblings().hide();
		$(".ca-function04").attr("id","bg5");
		});
	$(".img6").click(function(){
		
		$(".con6").show().siblings().hide();
		$(".ca-function04").attr("id","bg6");
		});
	$(".img7").click(function(){
		
		$(".con7").show().siblings().hide();
		$(".ca-function04").attr("id","bg7");
		});
	
});
	
	
$(function(){
	
	$(".ca-function04 .container .content").hover(function(){
	
		
	$(this).stop().animate({
		bottom:'0'
		
		},"slow");
	
	},function(){
	
		$(this).stop().animate({
		bottom:'-205px'
		
		},"slow");
		});

});



/*$(function(){
if(($.browser.version<9)){
	$(".ca-function05 .ca5-2 img").attr("src","images/ca5-1.png");
	}
});

*/











