$(document).ready(function() {
    $(window).scroll(function() {
    	closeMenu();
    });
	$('.menu-toolbar .btn-search').click(function() {
      	console.log('red');
    	$('.modal-search').modal('show');
  	});
	$('.modal-search .closed').click(function() {
      	console.log('black');
    	$('.modal-search').modal('hide');
  	});
  	$('.btn-eyeless').click(showAccessibility);
  	scrollTop();
  	$('.akcii .btn-appointment').click(function() {
      	var label = $(this).attr('aria-label');
      	setTimeout(()=>{$('.ba-form-7 .input-akcii .ba-field-container input').attr('value', label)},500)
    });
});

function showAccessibility() {
  	if ($('._access-menu').hasClass('close')) {
      	 $('._access-menu').removeClass('close');
      	 $('._access-scrollbar').removeClass('before-collapse');
	}
  	else {
      	$('._access-menu').addClass('close');
      	$('._access-scrollbar').addClass('before-collapse');
    }
}

function scrollTop() {
    var speed = 500,
    $scrollTop = $('<div><i class="fa fa-arrow-up" aria-hidden="true"></i></div>')
      .addClass('scrollTop')
      .attr({style:'display:none; z-index:9999; position:fixed;'})
      .appendTo('body');     

    $scrollTop.click(function(e){
        e.preventDefault();
      	$( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
	});
    function show_scrollTop(){
        ( $(window).scrollTop() > 300 ) ? $scrollTop.fadeIn(600) : $scrollTop.fadeOut(600);
    }
    $(window).scroll( function(){ show_scrollTop(); } );
}

function closeMenu() {
  $('.navbar-collapse').collapse('hide');
  if ($('.navbar-toggler').hasClass('is-active')) {
	$('.navbar-toggler').removeClass('is-active');
    $('.navbar-toggler').removeClass('collapsed');
  }
}