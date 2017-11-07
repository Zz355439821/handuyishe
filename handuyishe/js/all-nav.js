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