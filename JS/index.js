// JavaScript Document
//Home
var temp1 = document.getElementById("fontAdd1")
temp1.onmouseover=function(){
	addBig(110);
}
temp1.onmouseout=function(){
	addMin(30);
}
function addBig(i){
	temp1.style.fontSize=i+"px";
	if(i>30){
		var t = setTimeout(function(){addBig(i)});
		i=i-4;
	}else{
		i=30;
		clearTimeout(t);
	}
}
function addMin(i){
	temp1.style.fontSize=i+"px";
	if(i<110){
		var t = setTimeout(function(){addMin(i)});
		i=i+4;
	}else{
		i=110;
		clearTimeout(t);
	}
}

//Object
var temp2 = document.getElementById("fontAdd2")
temp2.onmouseover=function(){
	addBig2(110);
}
temp2.onmouseout=function(){
	addMin2(30);
}
function addBig2(i){
	temp2.style.fontSize=i+"px";
	if(i>30){
		var t = setTimeout(function(){addBig2(i)});
		i=i-4;
	}else{
		i=30;
		clearTimeout(t);
	}
}
function addMin2(i){
	temp2.style.fontSize=i+"px";
	if(i<110){
		var t = setTimeout(function(){addMin2(i)});
		i=i+4;
	}else{
		i=110;
		clearTimeout(t);
	}
}

//Web
var temp3 = document.getElementById("fontAdd3")
temp3.onmouseover=function(){
	addBig3(110);
}
temp3.onmouseout=function(){
	addMin3(30);
}
function addBig3(i){
	temp3.style.fontSize=i+"px";
	if(i>30){
		var t = setTimeout(function(){addBig3(i)});
		i=i-4;
	}else{
		i=30;
		clearTimeout(t);
	}
}
function addMin3(i){
	temp3.style.fontSize=i+"px";
	if(i<110){
		var t = setTimeout(function(){addMin3(i)});
		i=i+4;
	}else{
		i=110;
		clearTimeout(t);
	}
}

//Collect
var temp4 = document.getElementById("fontAdd4")
temp4.onmouseover=function(){
	addBig4(110);
}
temp4.onmouseout=function(){
	addMin4(30);
}
function addBig4(i){
	temp4.style.fontSize=i+"px";
	if(i>30){
		var t = setTimeout(function(){addBig4(i)});
		i=i-4;
	}else{
		i=30;
		clearTimeout(t);
	}
}
function addMin4(i){
	temp4.style.fontSize=i+"px";
	if(i<110){
		var t = setTimeout(function(){addMin4(i)});
		i=i+4;
	}else{
		i=110;
		clearTimeout(t);
	}
}

//Learn
var temp5 = document.getElementById("fontAdd5")
temp5.onmouseover=function(){
	addBig5(110);
}
temp5.onmouseout=function(){
	addMin5(30);
}
function addBig5(i){
	temp5.style.fontSize=i+"px";
	if(i>30){
		var t = setTimeout(function(){addBig5(i)});
		i=i-4;
	}else{
		i=30;
		clearTimeout(t);
	}
}
function addMin5(i){
	temp5.style.fontSize=i+"px";
	if(i<110){
		var t = setTimeout(function(){addMin5(i)});
		i=i+4;
	}else{
		i=110;
		clearTimeout(t);
	}
}



var doc = document.getElementById("roll");
		
function stp1(){
	doc.setAttribute("src","Image/beijing.jpg");
	setTimeout(stp2,3000);
}
		
function stp2(){
	doc.setAttribute("src","Image/kebi.jpg");
	setTimeout(stp3,3000);
}
		
function stp3(){
	doc.setAttribute("src","Image/kebi1.jpg");
	setTimeout(stp4,3000);
}
		
function stp4(){
	doc.setAttribute("src","Image/back.jpg");
	setTimeout(stp1,3000);
	}
		
	stp1();






