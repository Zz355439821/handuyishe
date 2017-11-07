window.onload = function(){
	function $(id){
		return document.getElementById(id)
	}
	$("pname").onfocus =function(){
		$("pname").value= ""
		$("pname").style.borderColor = "#000000"
	}
	$("pname").onblur =function(){
		$("pname").style.borderColor = "#dedede"
	}
	$("ppwd").onfocus = function(){
		$("ppwd").style.borderColor = "#000000"
	}
	$("ppwd").onblur = function(){
		$("ppwd").style.borderColor = "#dedede"
	}
	$("loginbtn").onclick = function(){
//		$("pname").value = $("pname").value.replace(/\s/gi, '')
		var arr = getCookie("register");
		console.log($("pname").value)
		console.log(arr[0].uname)
		for( var i = 0 ; i < arr.length ; i++ ){
			if($("pname").value==arr[i].uname && $("ppwd").value==arr[i].upwd){
				alert("登录成功");
				location.href="index.html"
				return;
			}else{
				if( i == arr.length - 1 ){
					alert("登录失败");
				}
			}
		}
	}
}
