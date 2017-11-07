window.onload=function(){
	 function $(id){
		return document.getElementById(id)
	}
	
//	订阅
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
	
//注册方式	
	
	$("right-bg1").onclick=function(){
		$("tel-info").style.display="block"
		$("email-info").style.display="none"
		$("right-bg1").className="btnbg1"
		$("right-bg2").className="btnbg2"
	}
	$("right-bg2").onclick=function(){
		$("tel-info").style.display="none"
		$("email-info").style.display="block"
		$("right-bg2").className="btnbg1"
		$("right-bg1").className="btnbg2"
	}
	
	
//	手机验证
	var flag1 = false;
	$("utname").onblur = function(){
		$("telnamets").innerHTML = ""
		var str = $("utname").value;
		var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		if( reg.test(str) ){
			$("telnamets").innerHTML = "正确"
			flag1 = true;
		}else{
			$("telnamets").innerHTML = "手机号格式不正确"
			flag1 = false;
		}
	}
	$("utpwd1").onblur= function(){
		$("telpwdts1").innerHTML = ""
		var str = $("utpwd1").value;
		var reg = /(?=.*[a-zA-Z])(?=.*[\d])[\w\W]{6,16}/
		if( 7 < str.length < 17 ){
			if( reg.test(str) ){
				$("telpwdts1").innerHTML = "正确"
				flag1 = true;
			}else{
				$("telpwdts1").innerHTML = "请按照要求填写密码"
				flag1 = false;
			}
		}else{
			$("telpwdts1").innerHTML = "密码长度不正确"
				flag1 = false;
		}
	}
	$("utpwd2").onblur = function(){
		var str1 = $("utpwd1").value;
		var str2 = $("utpwd2").value;
		if( flag1 && str1 == str2 ){
			$("telpwdts2").innerHTML = "正确"
			flag1 = true;
		}else{
			$("telpwdts2").innerHTML = "两次密码不一致"
			flag1 = false;
		}
	}
	var flag2 = true;
	$("tqueren").onclick = function(){
		if( flag2 ){
			flag2 = false;
		}else{
			flag2 = true;
		}
	}
	
//	邮箱验证
	
	var flag3 = true;
	$("uename").onblur = function(){
		$("emailnamets").innerHTML = ""
		var reg =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
		var str = $("uename").value
		if( str.length > 0 ){
			if( reg.test(str) ){
				$("emailnamets").innerHTML = "正确"
				flag3 = true;
			}else{
				$("emailnamets").innerHTML = "E-mail格式不对"
				flag3 = false;
			}
		}else{
			$("emailnamets").innerHTML = "请填写E-mail"
		}
	}
	$("uepwd1").onblur= function(){
		$("emailpwdts1").innerHTML = ""
		var str = $("uepwd1").value;
		var reg = /(?=.*[a-zA-Z])(?=.*[\d])[\w\W]{6,16}/
		if( 7 < str.length < 17 ){
			if( reg.test(str) ){
				$("emailpwdts1").innerHTML = "正确"
				flag3 = true;
			}else{
				$("emailpwdts1").innerHTML = "请按照要求填写密码"
				flag3 = false;
			}
		}else{
			$("emailpwdts1").innerHTML = "密码长度不正确"
				flag3 = false;
		}
	}
	$("uepwd2").onblur = function(){
		var str1 = $("uepwd1").value;
		var str2 = $("uepwd2").value;
		if( flag3 && str1 == str2 ){
			$("emailpwdts2").innerHTML = "正确"
			flag3 = true;
		}else{
			$("emailpwdts2").innerHTML = "两次密码不一致"
			flag3 = false;
		}
	}
	var flag4 = true;
	$("equeren").onclick = function(){
		if( flag4 ){
			flag4 = false;
		}else{
			flag4 = true;
		}
	}


//	存cookie
var arr = []
$("registertbtn").onclick = function(){
		if( flag1 && flag2 ){
			var _json = {
				"uname" : $("utname").value ,
				"upwd" : $("utpwd1").value
			}
			arr.push( _json );
			setCookie("register",JSON.stringify(arr));
			alert("注册成功")
			location.href="login.html"
		}else{
			alert("请按照要求注册")
		}
	}
$("registerebtn").onclick = function(){
		if( flag3 && flag4 ){
			var _json = {
				"uname" : $("uename").value ,
				"upwd" : $("uepwd1").value
			}
			arr.push( _json );
			setCookie("register",JSON.stringify(arr));
			alert("注册成功")
			location.href="login.html"
		}else{
			alert("请按照要求注册")
		}
	}










}
