//target 目标值
//obj  要操作的对象
//attr  要操作的属性
function startMove(target,obj,attr){
	//再次点击按钮时  清除定时器
	clearInterval(obj.timer); //为每一个obj对象 添加一个 timer属性
	obj.timer = setInterval(function(){
		var current = 0;
		//获取当前操作对象的实际属性值
		if( attr == "opacity" ){
			current = parseFloat(getStyle(obj,attr))*100;//透明度操作整数
		}else{
			current =parseInt(getStyle(obj,attr)) ;	//非透明度获取值
		}
		
		var speed = (target - current)/10;
		speed = speed>0?Math.ceil(speed) : Math.floor(speed);
		if( target ==  current  ){ //表示某个功能结束
			clearInterval(obj.timer);
		}else{
			//如果attr值是一个透明度  单独操作
			if(attr == "opacity"){
				obj.style.opacity = (current + speed)/100;//设置小数
			}else{
				obj.style[attr] = current + speed + "px";
			}
		}	
	},50)
}

function getStyle(obj,attr){
	return window.getComputedStyle?window.getComputedStyle(obj,false)[attr]:obj.currentStyle[attr];
}