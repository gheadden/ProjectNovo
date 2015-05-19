$(document).ready(function(){
	
	var scrollTop;
	var terms = $("#trm-container");
	var how = $("#how");
	var workFlow = $("#workflow");
	var stratWrd = $("#strat-wrd");
	var devWrd = $("#dev-wrd");
	var mainWrd = $("#main-wrd");
	var strategy = $("#strategy");
	var developement = $("#developement");
	var maintenance = $("#maintenance");
	var stratBar = $("#bar-1");
	var devBar = $("#bar-2");
	var mainBar = $("#bar-3");
	var bar1 = $("#bar-1 > .pro-bar");
	var bar2 = $("#bar-2 > .pro-bar");
	var bar3 = $("#bar-3 > .pro-bar");
	var wordContainer = $("#word-container");
	
	var pageTop = 56;
	var pageBottom;
	var howTop;
	var howHeight;
	var howBottom;
	var termTop;
	var stratTop;
	var stratHeight;
	var stratBottom;
	var devTop;
	var devHeight;
	var devBottom;
	var mainTop;
	var mainHeight;
	var mainBottom;
	
	var percentage;
	 
	
	$(window).scroll(function(){
		
		pageBottom = $(document).height();
		
		termsTop = workFlow.offset().top + workFlow.height() + 200;
		
		howTop = how.offset().top;
		howHeight = how.height();
		howBottom = howTop + howHeight;
		
		stratTop = strategy.offset().top;
		stratHeight = strategy.height();
		stratBottom = stratTop + stratHeight;
		
		devTop = developement.offset().top;
		devHeight = developement.height();
		devBottom = devTop + devHeight;
		
		mainTop = maintenance.offset().top;
		mainHeight = maintenance.height();
		mainBottom = mainTop + mainHeight;
		
		scrollTop = $(window).scrollTop() + pageTop;
		
		if (scrollTop > termsTop) {
			if (!wordContainer.hasClass("progress-outline")){
				wordContainer.addClass("progress-outline", 200);
				
				if (stratBar.hasClass("hide-mobile")){
					stratBar.removeClass("hide-mobile");
				}
				
				if (devBar.hasClass("hide-mobile")){
					devBar.removeClass("hide-mobile");
				}
				
				if (mainBar.hasClass("hide-mobile")){
					mainBar.removeClass("hide-mobile");
				}
			}
			
			if (!terms.hasClass("fix")) {
				terms.addClass("fix");
			}
			
		}
		
		else if (scrollTop <= termsTop) {
			if (wordContainer.hasClass("progress-outline")){
				wordContainer.removeClass("progress-outline", 200);
			}
			
			if (terms.hasClass("fix")) {
				terms.removeClass("fix");
			}
			
			
		}
		
		if (scrollTop + 80 > howBottom) {
			if (terms.hasClass("fix")) {
				terms.removeClass("fix");
			}
		}
		
		if (scrollTop + 150 <= stratTop){
			
			if (stratWrd.hasClass("active")){
				stratWrd.removeClass("active");
			}
			
			if (stratWrd.hasClass("passed")){
				stratWrd.removeClass("passed");
			}
			
			if (bar1.hasClass("full")){
				bar1.removeClass("full");
			}
			
			if (!bar1.hasClass("empty")){
				bar1.addClass("empty");
				bar1.css({
					"width": ""
				});
			}
			
			if (stratBar.hasClass("hide-mobile")){
				stratBar.removeClass("hide-mobile");
			}
			
			if (devBar.hasClass("hide-mobile")){
				devBar.removeClass("hide-mobile");
			}
			
			if (mainBar.hasClass("hide-mobile")){
				mainBar.removeClass("hide-mobile");
			}
			
			
		}
		
		if (scrollTop + 150 > stratTop && scrollTop + 150 < stratBottom){
			
			percentage = 100*((scrollTop + 150 - stratTop)/(stratBottom - stratTop));
			
			bar1.css({
				"width": String(percentage) + "%"
			});
			
			if (!stratWrd.hasClass("active")){
				stratWrd.addClass("active");
				if (!devBar.hasClass("hide-mobile")){
					devBar.addClass("hide-mobile");
				}
				if (!mainBar.hasClass("hide-mobile")){
					mainBar.addClass("hide-mobile");
				}
				
			}
			
			if (stratWrd.hasClass("passed")){
				stratWrd.removeClass("passed");
			}
			
			if (bar1.hasClass("full")){
				bar1.removeClass("full");
			}
			
			if (bar1.hasClass("empty")){
				bar1.removeClass("empty");
			}
			
			if (stratBar.hasClass("hide-mobile")){
				stratBar.removeClass("hide-mobile");
			}
		}
		
		if (scrollTop + 150 >= stratBottom){
			
			if (stratWrd.hasClass("active")){
				stratWrd.removeClass("active");
			}
			
			if (!stratWrd.hasClass("passed")){
				stratWrd.addClass("passed");
			}
			
			if (!bar1.hasClass("full")){
				bar1.addClass("full");
				bar1.css({
					"width": ""
				});
			}
			
			if (bar1.hasClass("empty")){
				bar1.removeClass("empty");
			}
		}
		
		if (scrollTop + 150 < devBottom){
			
			if (devWrd.hasClass("active")){
				devWrd.removeClass("active");
			}
			
			if (devWrd.hasClass("passed")){
				devWrd.removeClass("passed");
			}
			
			if (bar2.hasClass("full")){
				bar2.removeClass("full");
			}
			
			if (!bar2.hasClass("empty")){
				bar2.addClass("empty");
				bar2.css({
					"width": ""
				});
			}
		}
		
		if (scrollTop + 150 > devTop && scrollTop + 150 < devBottom){
			
			percentage = 100*((scrollTop + 150 - devTop)/(devBottom - devTop));
			
			bar2.css({
				"width": String(percentage) + "%"
			});
			
			if (!devWrd.hasClass("active")){
				devWrd.addClass("active");
				if (!stratBar.hasClass("hide-mobile")){
					stratBar.addClass("hide-mobile");
				}
				if (!mainBar.hasClass("hide-mobile")){
					mainBar.addClass("hide-mobile");
				}
			}
			
			if (devWrd.hasClass("passed")){
				devWrd.removeClass("passed");
			}
			
			if (bar2.hasClass("full")){
				bar2.removeClass("full");
			}
			
			if (bar2.hasClass("empty")){
				bar2.removeClass("empty");
			}
			
			if (devBar.hasClass("hide-mobile")){
				devBar.removeClass("hide-mobile");
			}
		}
		
		if (scrollTop + 150 >= devBottom){
			
			if (devWrd.hasClass("active")){
				devWrd.removeClass("active");
			}
			
			if (!devWrd.hasClass("passed")){
				devWrd.addClass("passed");
			}
			
			if (!bar2.hasClass("full")){
				bar2.addClass("full");
				bar2.css({
					"width": ""
				});
			}
			
			if (bar2.hasClass("empty")){
				bar2.removeClass("empty");
			}
		}
		
		if (scrollTop + 150 < mainBottom){
			
			if (mainWrd.hasClass("active")){
				mainWrd.removeClass("active");
			}
			
			if (mainWrd.hasClass("passed")){
				mainWrd.removeClass("passed");
			}
			
			if (bar3.hasClass("full")){
				bar3.removeClass("full");
			}
			
			if (!bar3.hasClass("empty")){
				bar3.addClass("empty");
				bar3.css({
					"width": ""
				});
			}
		}
		
		if (scrollTop + 150 > mainTop && scrollTop + 150 < mainBottom){
			
			percentage = 100*((scrollTop + 150 - mainTop)/(mainBottom - mainTop));
			
			bar3.css({
				"width": String(percentage) + "%"
			});
			
			if (!mainWrd.hasClass("active")){
				mainWrd.addClass("active");
				if (!devBar.hasClass("hide-mobile")){
					devBar.addClass("hide-mobile");
				}
				if (!stratBar.hasClass("hide-mobile")){
					stratBar.addClass("hide-mobile");
				}
			}
			
			if (mainWrd.hasClass("passed")){
				mainWrd.removeClass("passed");
			}
			
			if (bar3.hasClass("full")){
				bar3.removeClass("full");
			}
			
			if (bar3.hasClass("empty")){
				bar3.removeClass("empty");
			}
			
			if (mainBar.hasClass("hide-mobile")){
				mainBar.removeClass("hide-mobile");
			}
		}
		
		if (scrollTop + 150 >= mainBottom){
			
			if (mainWrd.hasClass("active")){
				mainWrd.removeClass("active");
			}
			
			if (!mainWrd.hasClass("passed")){
				mainWrd.addClass("passed");
			}
			
			if (!bar3.hasClass("full")){
				bar3.addClass("full");
				bar3.css({
					"width": ""
				});
			}
			
			if (bar3.hasClass("empty")){
				bar3.removeClass("empty");
			}
		}
		
	});
	
	
	
	$("#consult").click(function(){
		chartToggle($("#consult-list"));
	});
	
	$("#proposal").click(function(){
		chartToggle($("#proposal-list"));
	});
	
	$("#design").click(function(){
		chartToggle($("#design-list"));
	});
	
	$("#marketing").click(function(){
		chartToggle($("#marketing-list"));
	});
	
	$("#marketing-pro").click(function(){
		chartToggle($("#marketing-pro-list"));
	});
	
	$("#design-pro").click(function(){
		chartToggle($("#design-pro-list"));
	});
	
	$("#design-re").click(function(){
		chartToggle($("#design-re-list"));
	});
	
	$("#content-cre").click(function(){
		chartToggle($("#content-cre-list"));
	});
	
	$("#content-re").click(function(){
		chartToggle($("#content-re-list"));
	});
	
	$("#site-dev").click(function(){
		chartToggle($("#site-dev-list"));
	});
	
	$("#plat-test").click(function(){
		chartToggle($("#plat-test-list"));
	});
	
	$("#site-pro").click(function(){
		chartToggle($("#site-pro-list"));
	});
	
	$("#site-re").click(function(){
		chartToggle($("#site-re-list"));
	});
	
	$("#launch").click(function(){
		chartToggle($("#launch-list"));
	});
	
	$("#seo").click(function(){
		chartToggle($("#seo-list"));
	});
	
	$("#analysis").click(function(){
		chartToggle($("#analysis-list"));
	});
	
	$("#update").click(function(){
		chartToggle($("#update-list"));
	});
	
	$("#security").click(function(){
		chartToggle($("#security-list"));
	});
	
	$("#edit").click(function(){
		chartToggle($("#edit-list"));
	});
	
	$("#addition").click(function(){
		chartToggle($("#addition-list"));
	});
	
	
});

function chartToggle(toToggle){
	if (toToggle.is(":visible")){
		toToggle.removeClass("visible");
		setTimeout( function() {
			toToggle.hide(500, function(){
				toToggle.parent().removeClass("stretch");
			});
		}, 500);
		
	}
	
	else {
		toToggle.parent().addClass("stretch");
		setTimeout(function(){
			toToggle.show(500, function() {
				toToggle.addClass("visible");
			});
		}, 500);
	}
}

$.fn.extend({
	fix: function(scrollTop, bottomLimit, fixClass) {
    	
    	var fixTop = this.offset().top;
        
    	if (this.hasClass(fixClass)) {
			fixTop -= parseFloat(this.css("top"));
		}
        
		if (scrollTop > fixTop && scrollTop + this.height() < bottomLimit){
			this.css("top", String(scrollTop - fixTop) + "px");
			if (!this.hasClass(fixClass)){this.addClass(fixClass);}
		}
        
		else if (this.hasClass(fixClass)){this.removeClass(fixClass);this.css("top", "");}
           
   },
   
    chartToggle: function() {
	    if (this.is(":visible")){
			this.removeClass("visible");
			setTimeout( function() {
				this.hide(500, function(){
					this.parent().removeClass("stretch");
				});
			}, 500);
			
		}
		
		else {
			this.parent().addClass("stretch");
			setTimeout(function(){
				this.show(500, function() {
					this.addClass("visible");
				});
			}, 500);
		}
   }
});