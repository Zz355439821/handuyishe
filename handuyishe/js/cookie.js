//设置cookie
function setCookie(key,value,day){
	if(day){
		var d = new Date();
		d.setDate( d.getDate() + day );
		document.cookie=key + "=" + value + ";expires=" + d;
	}else{
		document.cookie=key + "=" + value;
	}
}
//删除cookie
function removeCookie(key){
	setCookie(key,"",-1);
}
//获取cookie
function getCookie( key ){
	//判断是否含有cookie ，有cookie 就获取出来
	if( document.cookie ){
		var str = document.cookie;//获取cookie信息   键1=值1; 键2=值1; 键3=值3;
		var arr = str.split("; ");//将cookie文件按照 ;   拆成数组		
		for(var i = 0 ; i <arr.length ; i++){
			item = arr[i].split("=");// 将数组中的每一个字符串通过=拆成一个小数组 [键1,值1]
			//判断小数组中 根据已知的键  下标为 [0] 为已知键，找到对应的值
			if(item[0] == key){
				return JSON.parse( item[1] ) ;//将key对应的值返回
			}
		}
		//循环结束后，如果cookie信息中不存在key，返回空数组
		return [];
	}
	//如果没有cookie ，返回一个空数组
	return [];
}
