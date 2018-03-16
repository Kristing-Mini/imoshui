$(document).ready(function(){
	$(".navfirst").eq(0).css({"borderBottom":" solid .03rem #60c768"});
	ul = $(".showImg");
	width = $(".innerImg").width();
	showNumber = $(".innerImg").length;
	var firstShow = 0;
	showList = $(".choos").find("li").eq(firstShow).css({"background-color":"#60c768"});
	
	$(".choose").click(function(e){	
	var getNub = $(e.target).attr("value");
	firstShow = getNub;
	ul.animate({"left":-width*firstShow},10);
	$(".choos").find("li").each(function(index,ele){
		if(index == firstShow){
			ele.style.backgroundColor="#60c768";
			}else{
				ele.style.backgroundColor="rgba(160,160,160,.3)";
			}
		});	
	});

	setInterval(function(){
		firstShow ++;
		if(firstShow > showNumber - 1){
			firstShow = 0;
			ul.animate({
				"left":0
			},10);
		}else{
			ul.animate({
				"left":-width*firstShow
			},800);
		}
		$(".choos").find("li").each(function(index,ele){
			if(index == firstShow){
				ele.style.backgroundColor="#60c768";
			}else{
				ele.style.backgroundColor="rgba(160,160,160,.3)";
			}
		});	
	},3000);
});


$(".navBlock").click(function(e){
	var getVal = $(e.target).attr("value");
	var getText = $(e.target).text();
	$(".navBlock").each(function(index,ele){
		if(getVal == index){
			ele.style.borderBottom = " solid .03rem #60c768";
		}else{
			ele.style.borderBottom = "none";
		}
	});
	if(getVal == 0){
		$(".content").css({"display":"block"});
		$(".detail").css({"display":"none"});
	}else{
		$(".content").css({"display":"none"});
		$(".detail").css({"display":"block"});
	};
	$("#getName").text(getText);	
});

$('.footRight').click(function(){
	window.open("./about.html");
})







