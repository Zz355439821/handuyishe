window.onload = function(){
	$("#bottom li").click(function(){
		var index = $(this).index()
		$(this).find("img").css("border","1px solid red").end().siblings().find("img").css("border","1px solid transparent")
		$(this).find("s").css("display","block").end().siblings().find("s").css("display","none")
		$("#img-small").find("img").eq(index).css("display","block").siblings().css("display","none")
		$("#img-big").find("img").eq(index).css("display","block").siblings().css("display","none")
	})
	$("#img-small").hover(function(){
		$("#img-big").show()
		$("#mask").show()
	},function(){
		$("#img-big").hide()
		$("#mask").hide()
	})
	$("#img-small").mousemove(function(e){
   		var e = e || event;
   		var x = e.pageX - $("#mask").width()/2 - $(".wrap-content").offset().left;
   		var y = e.pageY - $("#mask").height()/2 - $(".wrap-content").offset().top;
   		var maxL = $("#img-small").width() - $("#mask").width();
   		var maxT = $(".wrap-content").height() - $("#mask").height() - 148;
   		x = Math.min( maxL, Math.max(0,x) );
   		y = Math.min( maxT, Math.max(0,y) );
   		$("#mask").css({
   			"left" : x,
   			"top" :y
   		})
   		var bigImgx = x * $("#img-big img").width()/$("#img-small img").width();
   		var bigImgy = y * $("#img-big img").height()/$("#img-small img").height();
   		$("#img-big img").css({
   			"left" : -bigImgx,
   			"top" :  -bigImgy
   		})
   	})
	
	$flag1 = true;
	$flag2 = true;
	$("#stylesize1").click(function(){
		if( $flag1 ){
			$("#size1").html("[s]").css("color","#C80A28");
			$(this).css("border","1px solid red").find("s").css("display","block");
			$("#ys").html("您已选择了").css("color","#C80A28")
			$("#stylesize2").css("border","1px solid #cccccc").find("s").css("display","none")
			$flag1 = false;
			$flag2 = true;
		}else{
			$("#size1").html("").css("color","red");
			$(this).css("border","1px solid #cccccc").find("s").css("display","none");
			$("#ys").html("您未选择").css("color","#C80A28")
			$flag1 = true;
		}
	})
	$("#stylesize2").click(function(){
		if( $flag2 ){
			$("#size1").html("[M]").css("color","#C80A28");
			$(this).css("border","1px solid red").find("s").css("display","block")
			$("#ys").html("您已选择了").css("color","#C80A28")
			$("#stylesize1").css("border","1px solid #cccccc").find("s").css("display","none")
			$flag2 = false;
			$flag1 = true;
		}else{
			$("#size1").html("").css("color","red");
			$(this).css("border","1px solid #cccccc").find("s").css("display","none");
			$("#ys").html("您未选择").css("color","#C80A28")
			$flag2 = true;
		}
	})
	$flag3 = true;
	$("#stylecolor").click(function(){
		if( $flag3 ){
			$("#color1").html("[蓝色]").css("color","#C80A28")
			$("#ys").html("您已选择了").css("color","#C80A28")
			$(this).css("border","1px solid red").find("s").css("display","block");
			$flag3 = false;
		}else{
			$("#ys").html("您未选择").css("color","#C80A28")
			$("#color1").html("").css("color","red");
			$(this).css("border","1px solid #cccccc").find("s").css("display","none");
			$flag3 = true;
		}
	})
	$index = $("#num").val()
	$("#num").blur(function(){
		$index = $("#num").val()
	})
	$("#down").click(function(){
		$index-- 
		if( $index <= 0 ){
			$index = 0
			$("#num").val(0)
		}else{
			$("#num").val($index)
		}
	})
	$("#up").click(function(){
		$index++
		$("#num").val($index)
	})
	
	
	
	
	
	$("#sx").click(function(){
		$(this).addClass("listyle").siblings().removeClass("listyle")
		$("#shopxq").css("display","block")
		$("#plxq").css("display","none")
	})
	$("#px").click(function(){
		$(this).addClass("listyle").siblings().removeClass("listyle")
		$("#plxq").css("display","block")
		$("#shopxq").css("display","none")
	})
	
	
	
		var topHeight = $(".listtitle").offset().top
	$(window).scroll(function(){
		if( $(document).scrollTop() >= topHeight ){
			$(".listtitle").css({
				"position":"fixed",
				"top":0
			})
			$(".wrap-content").css("marginBottom","42px")
		}else{
			$(".listtitle").css({
				"position":"static"
			})
		}
		if( $(window).scrollTop() > 350 ){
		$("#sidnav").fadeIn()
	}else{
		$("#sidnav").css("display","none")
	}
	})
	
	

	$("#gotop").click(function(){
		$("html,body").stop().animate({"scrollTop":0},500)
	})
	
	
	
	
}
