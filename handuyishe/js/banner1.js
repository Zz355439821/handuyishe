window.onload = function(){ 
    function $(id){
		return document.getElementById(id)
	}
    var indexa = 1 ;
	var ulist = document.getElementById("banner").children;
	var olist = document.getElementById("oList").children;
//	var timer = null;
	var timer = setInterval( autoPlayBannaer , 5000 )
	function autoPlayBannaer(){ 
		indexa++;
		for( var i = 0 ; i < olist.length ; i++ ){
			olist[i].className = "";
			startMove( 0 , ulist[i] , "opacity" )	
		}
		if( indexa == olist.length ){
			indexa = 0;
		}
		olist[indexa].className = "bw"
		startMove( 100 , ulist[indexa] , "opacity" )
	}
	for( let i = 0 ; i < olist.length ; i++ ){
		olist[i].onmouseover = function(){
			clearInterval(timer);
			indexa = i - 1;
			autoPlayBannaer()
			olist[i].class="bw"
		}
		olist[i].onmouseout = function(){
			timer = setInterval( autoPlayBannaer , 5000 )	
			olist[i].class=""
		}
	}
	
	
	
	var arr = [];
	var flag = true;
	var timer1 = setInterval(xiaoshi,8000)
	$("sub2").onclick=function(){
		var reg =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
		var str = $("sub1").value;
		$("sub3").style.display = "block"
		if( reg.test(str) ){
			flag = true;
//			$("sub3").innerHTML = "你输入的邮箱格式正确";
		}else{
			$("sub3").innerHTML = "你输入的邮箱格式不对";
			flag = false;
		}
		if( flag ){
			var _json = {
				"yx" : $("sub1").value
			}
			if( arr.length != 0 ){
				for( var i = 0 ; i < arr.length ; i++ ){
					if( $("sub1").value == arr[i].yx ){
						$("sub3").innerHTML = "该邮箱已经订阅过了";
						console.log(1)
					}else{
						arr.push(_json)
						$("sub3").innerHTML = "订阅成功";
						console.log(2)
					}
				}
			}else{
				arr.push(_json)
				$("sub3").innerHTML = "订阅成功";
			}
		}
	}
	function xiaoshi(){
		$("sub3").style.display = "none"
	}
	
	
}