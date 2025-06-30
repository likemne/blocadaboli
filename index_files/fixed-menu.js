$(window).scroll(function() {
  fixedMenu();
});

function fixedMenu() {
  	var win_h = $(document).height();
  	if (win_h >= 800) {
		var target = $(this).scrollTop();
		if(target <= 0) {
        	$('.navbar').removeClass('fixed-top');
		}
    	if (target >= 1){
			$('.navbar').addClass('fixed-top');
		}
    }
};