$(function(){
	$(".rules").click(function(){
		$(".rulespage").stop().fadeIn(1000);
	});
	$(".close").click(function(){
		$(".rulespage").stop().fadeOut(100);
	})
	$(".restart").click(function(){
		$(".gameover").stop().fadeOut(100);
		scoreClear();
		progressbarHandler();
		wolfImageShow();
	})
	
	/*监听开始按钮，进行进度条处理*/
	$(".start").click(function(){
		//点击之后开始按钮消失
		$(this).css({
			"display":"none"
		});
		progressbarHandler();
		wolfImageShow();
		// var timer=setInterval(function(){
		// 	$(".progressbar").width(function(index,c){
				
		// 		return c-1;
		// 	},100);
	})
	// $(".container").on("click",".wolfImag",function(){
	// 	if(/h/.test($(this).attr("src"))){
	// 		$(".score").text(String(parseInt($(".score").text())+10));
	// 	}else{
	// 		$(".score").text(String(parseInt($(".score").text())-10));
	// 	}
	// })
	//点击重新开始游戏，分数清零
	function scoreClear(){
		$(".score").text(0);
	}

	function progressbarHandler(){
		$(".progressbar").width(180);
		var currentWidth=$(".progressbar").width();
		var timer=setInterval(function(){
			if(currentWidth<=0){
				clearInterval(timer);
				$(".gameover").stop().fadeIn(100);
				stopWolfAnimation();
			}else{
			    currentWidth-=1;
			    $(".progressbar").width(currentWidth);}
			
			



		},100)
	}
	function gamePlayer($wolf){
		
		$wolf.one("click",function(){
			var start=6;
			var end=9;
			// window.wolfIndexEnd=9;
		 //    window.wolfIndexStart=6;
		 clearInterval(window.wolfTimer);
		 var playerTimer=setInterval(function(){
		 	
		 	if(start>9){
		 		$wolf.remove();
		 		clearInterval(playerTimer);
		 		wolfImageShow();
		 	}else{
		 		$wolf.attr("src",window.wolfType[start]);
		 		start++;
		 	}


		 },300);
			
			if(/h/.test($(this).attr("src"))){
			    $(".score").text(String(parseInt($(".score").text())+10));
		    }else{
			    $(".score").text(String(parseInt($(".score").text())-10));
		    }
		   
	})

	}
	function wolfImageShow(){
		var wolfH=["images/h0.png","images/h1.png","images/h2.png","images/h3.png","images/h4.png","images/h5.png","images/h6.png","images/h7.png","images/h8.png","images/h9.png"];
		var wolfX=["images/x0.png","images/x1.png","images/x2.png","images/x3.png","images/x4.png","images/x5.png","images/x6.png","images/x7.png","images/x8.png","images/x9.png"];
		var arrPos = [
            {left:"100px",top:"115px"},
            {left:"20px",top:"160px"},
            {left:"190px",top:"142px"},
            {left:"105px",top:"193px"},
            {left:"19px",top:"221px"},
            {left:"202px",top:"212px"},
            {left:"120px",top:"275px"},
            {left:"30px",top:"295px"},
            {left:"209px",top:"297px"}
        ];
        var $wolf=$("<img class='wolfImag'>");
        var posIndex=Math.round(Math.random()*8);
        $wolf.css({
        	position:"absolute",
        	left:arrPos[posIndex].left,
        	top:arrPos[posIndex].top
        });
        window.wolfType=(Math.round(Math.random())==0)?wolfH:wolfX;
        window.wolfIndexStart=0;
        window.wolfIndexEnd=5;
        window.wolfTimer=setInterval(function(){
        	if(wolfIndexStart>wolfIndexEnd){
        		$(".wolfImag").remove();
        		clearInterval(wolfTimer);
        		wolfImageShow();

        	}
        	$wolf.attr("src",wolfType[wolfIndexStart]);
        	wolfIndexStart++;

        },300)
        $wolf.appendTo($(".container"));
        gamePlayer($wolf);



	}
	function stopWolfAnimation(){
		$(".wolfImag").remove();
		clearInterval(window.wolfTimer);
	}
})