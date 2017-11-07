window.onload=function(){
	
	$(".banner div").each(function(){
		$(this).css("background","url(img/list/GY_0"+($(this).index()+1)+".jpg) no-repeat center")
	})
	$("#title li").click(function(){
		if( $(this).find("ol").css("display")=="none" ){
			$(this).find("ol").css("display","block").end().siblings().find("ol").css("display","none");
		}else{
			$(this).find("ol").css("display","none");
		}
	})
	
	/*$deffered = $.ajax({
		type:"get",
		url:"../data.json"
	});
	$deffered.done(function(res){
		alert( res[1].price );
	})*/
	
	$.ajax({
		type:"get",
		url:"list.json",
		success : function(res){
			list(res,0,40)
			$("#first").click(function(){
				$(this).css("background","#EEEEEE").siblings().css("background","none")
				list(res,0,40)
				$(".hf").click(function(){
				location.href="details.html"
				})
				$("#nnum").html(1)
			})
			$("#second").click(function(){
				list(res,40,43)
				$(this).css("background","#EEEEEE").siblings().css("background","none")
				$(".hf").click(function(){
				location.href="details.html"
				})
				$("#nnum").html(2)
			})
			$("#prev").click(function(){
				list(res,0,40)
				$("#first").css("background","#EEEEEE").siblings().css("background","none")
				$(this).css("background","#EEEEEE")
				$(".hf").click(function(){
				location.href="details.html"
				})
				$("#nnum").html(1)
			})
			$("#next").click(function(){
				list(res,40,43)
				$("#second").css("background","#EEEEEE").siblings().css("background","none")
				$(this).css("background","#EEEEEE")
				$(".hf").click(function(){
				location.href="details.html"
				})
				$("#nnum").html(2)
			})
			$(".hf").click(function(){
				location.href="details.html"
			})
		}
	})
	
	
		function list(res,m,n){
			var html = ""
			for( var i = m ; i < n ; i++ ){
			html += `
					<div class="work">
						<div>
							<a href="javascript:;" class="hf"><img src="img/list/${res[i].src}.jpg"/></a>
							<p><b>￥</b><span>${res[i].price}</span><i>￥${res[i].onsell}.00</i></p>
						</div>
					</div>
					`
			}
			$(".shoplist").html(html)
		}
	
	
	
	
	
	
	
	
	
}
