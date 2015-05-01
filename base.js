$(document).ready( function() {
	
	var appear = $('.appear');
	var disappear = $('.disappear');
	
	disappear.click(function(){
		
		disappear.hide({
			effect: 'fade',
			complete: function() {
				appear.show({
					effect: 'fade'
				});
			}
		});
		
	});
	
});
