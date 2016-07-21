//补零
	function fnbuling(num){
		if(num<10){
			num = '0' + num;
		}
		return num;
	}
	//封装星期
	function fnWeek(sweek){
		var  nWeek = nDate.getDay();
		var  arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
		return  sweek = arr[nWeek];
	}
	//封装年月日
	function fnYear(nyear,sMark){
		var nYear = nyear.getFullYear();
		var nMonth = fnbuling(nyear.getMonth()+1);
		var nDay = fnbuling(nyear.getDate());
		var str1 = '';
		if(sMark){
			return str1 = nYear + sMark + nMonth + sMark + nDay;
		}else{
			return str1 = nYear + '年' + nMonth + '月' + nDay + '日';
		}
	}
	//封装时分秒
	function fnTime(ntime,sMark){
		var nHours = fnbuling(ntime.getHours());
		var nMinutes = fnbuling(ntime.getMinutes());
		var nSeconds = fnbuling(ntime.getSeconds());
		var str ='';
		if(sMark){
			return str = nHours + sMark + nMinutes + sMark + nSeconds;
		}else{
			return str = nHours + '时' + nMinutes + '分' + nSeconds + '秒';
		}
	}
	//封装一个月总天数
	function fnHaveDays(nmonth,sMark){
		var nYear = nmonth.getFullYear();
		var nMonth = nmonth.getMonth();
		var nDate1 = new Date(nYear,nMonth,1);
		var nDate2 = new Date(nYear,nMonth+1,1);
		var nDays = (nDate2-nDate1)/1000/3600/24;
		return nDays;
	}
	//封装获取子节点
	function getChilds(oBox){
				var aChildNode = oBox.childNodes;
				var aLi = [];
				for(i=0;i<aChildNode.length;i++){
					if(aChildNode.nodeType == 1){
						aLi.push(aChildNode[i]);
					}
				}
				return aLi;
			}
	//DOM2级事件添加方法
	function addEvent(oBox,sEvent,aFn){
		for(i=0;i<aFn.length;i++){
			if(oBox.addEventListener){
				oBox.addEventListener(sEvent,aFn[i],false);
			}else{
				oBox.attachEvent('on'+sEvent,aFn[i]);
			}
		}
	}
	//计算器
	function fnSum(a,b,c){
				switch(c){
					case '+':
						return parseInt(a) + parseInt(b);
						break;
					case '-':
						return parseInt(a) - parseInt(b);
						break;
					case '*':
						return parseInt(a) * parseInt(b);
						break;
					case '/':
						return parseInt(a) / parseInt(b);
						break;
				}
			}
			function sum(sMark){
				var oTxt01 = document.getElementById('txt01');
				var oTxt02 = document.getElementById('txt02');
				var oTxt03 = document.getElementById('txt03');
				var nTxt01 = oTxt01.value;
				var nTxt02 = oTxt02.value;
				oTxt03.value = fnSum(nTxt01,nTxt02,sMark);
				oTxt01.value = 0;
				oTxt02.value = 0;
			}
	//数组的去重排序
	function fn(a){
			var arr1 = [a[0]];
			for(i=1;i<a.length;i++){
				for(var j = 0;j<arr1.length;j++){
					if(a[i] == arr1[j]){
						break;
					}
				}
				if(a[i] != arr1[j]){
					arr1.push(a[i]);
				}
			}
			for(m=1;m<arr1.length;m++){
				for(n=0;n<arr1.length-m;n++){
					if(arr1[n]>arr1[n+1]){
						var a = arr1[n];
						arr1[n] = arr1[n+1];
						arr1[n+1] = a;
					}
				}
			}
			return arr1;
		}
	// 1,1,2,3,5,8,13,21,34斐波那契数列
		function fn(n){
			if(n == 1){
				return 1;
			}else if(n == 2){
				return 1;
			}else{
				return fn(n-1)+fn(n-2);
			}
		}
	//封装Cookie	
function getCookie(sKey){
	var result = "";
	var aCookie	= document.cookie.split('; ');
	for(var i=0;i<aCookie.length;i++){
		var aCook = aCookie[i].split('=');
		if(aCook[0] === sKey ){
			result = aCook[1];	
		}
	}
	return result;
}
function setCookie(sKey,sValue,passDay){
	var dDate = new Date();
	dDate.setDate(dDate.getDate()+passDay);
	document.cookie = sKey + '=' + sValue +'; expires' + '=' + dDate;
		  
}
//根据ClassName获取元素
function getBayClass(oBox,sClass){
	var aTag = oBox.getElementsByTagName("*");
	var aTagName=[];
	for(var i=0;i<aTag.length;i++){
		if(aTag[i].className == sClass){
			aTagName.push(aTag[i])	
		}	
	}
	return aTagName;		
}
//获取非行间样式
	function getStyle(oDiv,direct){
		var resolt="";
		if(window.getComputedStyle){
			resolt = window.getComputedStyle(oDiv,false)[direct];
		}else{
			resolt = oDiv.currentStyle[direct];
		}
		return resolt;
	}
//匀速运动+透明度（需要调用“获取非行间样式”）
function fnUniform(oDiv,nTarget,nSpeed,direct){
	clearInterval(oDiv.Timer);
	var offset = parseInt(getStyle(oDiv,direct));
	if(direct === "opacity"){
		offset = parseFloat(getStyle(oDiv,direct));
	}
	if(nTarget<offset){
		nSpeed *= -1;
	}
	oDiv.Timer = setInterval(function(){
		if(direct ==="opacity"){
			offset = parseFloat(getStyle(oDiv,direct));
			if(Math.abs(nTarget-offset)<Math.abs(nSpeed)){
				clearInterval(oDiv.Timer);
				oDiv.style[direct] = nTarget;
				oDiv.style["filter"] = "alpha(opacity:" + nTarget*100 + ")";
			}else{
				oDiv.style[direct] = offset + nSpeed;
				oDiv.style["filter"] = "alpha(opacity:" + parseInt((offset+nSpeed)*100) + ")";
			}
		}else{
			offset = parseInt(getStyle(oDiv,direct));
			if(Math.abs(nTarget-offset)<Math.abs(nSpeed)){
				clearInterval(oDiv.Timer);
				oDiv.style[direct] = nTarget + "px";
			}else{
				oDiv.style[direct] = offset + nSpeed + "px";
			}
		}
	},30);
}
	//缓冲运动+透明度（需要调用“获取非行间样式”）
function fnMove(oDiv,oJson,fn){
	clearInterval(oDiv.Timer);
	oDiv.Timer = setInterval(function(){
		var bSwitch=true;
		for(var direct in oJson){
			var offset = parseInt(getStyle(oDiv,direct));
			if(direct == "opacity"){
				offset = parseFloat(getStyle(oDiv,"opacity"));
			}
			var nSpeed = (oJson[direct]-offset)/7;
			if(direct == "opacity"){
				nSpeed = parseFloat(nSpeed);
			}else{
				nSpeed = nSpeed>0?Math.ceil(nSpeed):Math.floor(nSpeed);
			}
			if(nSpeed != 0){
				bSwitch = false;
			}
			if(direct == "opacity"){
				oDiv.style[direct] = parseFloat(offset + nSpeed);
				oDiv.style["filter"] = "alpha(opacity:" + parseInt((offset + nSpeed)*100) + ")";
			}else{
				oDiv.style[direct] = offset + nSpeed + "px";
			}
		}
		if(bSwitch){
			clearInterval(oDiv.Timer);
			if(fn){
				fn();
			}
		}
	},30);
}
#{sdfsfsaafdasdfsdfdfasdf}