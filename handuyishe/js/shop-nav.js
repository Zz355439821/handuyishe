//------------------------<banner-nav>---------------------------------
$("#shop-nav li").each(function(index){
	$(this).hover(function(){
		$(this).css({"border-bottom":"1px solid #cccccc"}).find("h3").stop().animate({"marginLeft":"5px"},300)
			.find("i").css("background","url(img/icon/tb0"+($(this).index()+1)+".png)").end().end()
			.find(".all-nav").fadeIn()
	//	console.log($(this).index())
	},function(){
		$(this).css({"border-bottom":"1px dashed #cccccc"}).find("h3").stop().animate({"marginLeft":"0px"},300)
			.find("i").css("background","url(img/icon/tb"+($(this).index()+1)+".png)").end().end()
			.find(".all-nav").fadeOut()
	})
})
//--------------------------<sprite>-------------------------------------------
$("#sprite li").each(function(index){
	$(this).index();
	$(this).css("background","url(img/sprite/0"+$(this).index()+".jpg) no-repeat center")
}).hover(function(){
	$(this).css("background","url(img/sprite/1"+$(this).index()+".jpg) no-repeat center")
},function(){
	$(this).css("background","url(img/sprite/0"+$(this).index()+".jpg) no-repeat center")
})
//----------------------------<tab>------------------------------------------------
$("#titlelist li").each(function(){
	$(this).hover(function(){
		$(this).attr("class","red").siblings().removeAttr("class","red");
		$("#tablist>li").eq($(this).index()).css("display","block").siblings().css("display","none")
//		console.log($("#tablist li").eq($(this).index()).html())
	},function(){
		$(this).removeAttr()
	})
})
//------------------------------<top&sidenav>------------------------------------------
$(window).scroll(function(){
	if( $(window).scrollTop() > 350 ){
		$("#sidnav").fadeIn()
	}else{
		$("#sidnav").css("display","none")
	}
	if( $(window).scrollTop() > 640 ){
		$("#topsearch").slideDown();
	}else{
		$("#topsearch").slideUp();
	}
})
$("#gotop").click(function(){
	$("html,body").stop().animate({"scrollTop":0},500)
})
//------------------------------------<smalllunbo>---------------------------------------------
var sindex = 0;
var stimer = setInterval(AutoPlaySmall,2000);
var $ulist = $("#slbt li")
var $olist = $("#slbp>li")
function AutoPlaySmall(){
	sindex++;
	if( sindex == 5 ){
		sindex = 0
	}
	$ulist.eq(sindex).find("a").addClass("Dialogbox").parent().siblings().find("a").removeClass("Dialogbox");
	$olist.eq(sindex).fadeIn(1000).siblings().fadeOut(1000)
}
$ulist.hover(function(){
	clearInterval(stimer);
	$ulist.eq($(this).index()).find("a").addClass("Dialogbox").parent().siblings().find("a").removeClass("Dialogbox");
	$olist.eq($(this).index()).fadeIn(1000).siblings().fadeOut(1000);
	sindex = $(this).index()
},function(){
	stimer = setInterval(AutoPlaySmall,2000);
})
$olist.hover(function(){
	clearInterval(stimer);
},function(){
	stimer = setInterval(AutoPlaySmall,2000)
})
//-----------------------------------------<tab2>-------------------------------------------------
$("#ulist>li").each(function(){
	$(this).find("div").find("span").css("background","url(img/tab2/0"+($(this).index()+1)+".png)");
	$(this).mouseenter(function(){
		$(this).find("div").css("display","none").end().find("ol").css("display","block");
		$(this).siblings().find("div").css("display","block").end().find("ol").css("display","none");
	})
})
//---------------------------------------------<link>------------------------------------------------
	var num = 2;
	var timer1 = setInterval(autoPlayLink,50);
	var oUl = document.getElementById("u");
	function autoPlayLink(){
		num--;
		if( num < -555 ){
			num = 0;
		}
		oUl.style.left = num + "px";
	}
	oUl.onmouseover=function(){
		clearInterval(timer1)
	}
	oUl.onmouseout=function(){
		timer1 = setInterval(autoPlay,50)
	}




