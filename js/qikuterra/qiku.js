$(function(){
	$(".selected1").click(function(){
		
			$(".div1").show();
			$(".div2").hide();
			$(".selected1").css('background','#f8f8f8').css('color','#ea3700');
			$(".selected2").css('background','#cbcacb').css('color','#000');
		});
	$(".selected2").click(function(){
		
			$(".div2").show();
			$(".div1").hide();
			$(".selected1").css('background','#cbcacb').css('color','#000');
			$(".selected2").css('background','#f8f8f8').css('color','#ea3700');
		});
	
	$(".selected3").click(function(){
		
			$(".div3").show();
			$(".div4").hide();
			$(".selected3").css('background','#f8f8f8').css('color','#ea3700');
			$(".selected4").css('background','#cbcacb').css('color','#000');
		});
	$(".selected4").click(function(){
		
			$(".div4").show();
			$(".div3").hide();
			$(".selected3").css('background','#cbcacb').css('color','#000');
			$(".selected4").css('background','#f8f8f8').css('color','#ea3700');
		});
		
		
	$(".selected5").click(function(){
		
			$(".div5").show();
			$(".div6").hide();
			$(".selected5").css('background','#f8f8f8').css('color','#ea3700');
			$(".selected6").css('background','#cbcacb').css('color','#000');
		});
	$(".selected6").click(function(){
		
			$(".div6").show();
			$(".div5").hide();
			$(".selected5").css('background','#cbcacb').css('color','#000');
			$(".selected6").css('background','#f8f8f8').css('color','#ea3700');
		});
	
	});