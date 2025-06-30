/**
 *
 * @copyright   (C) 2024 CityChange / Joomset Project. All rights reserved.
 *
 */

$(document).ready(function() {
	$('.mod_citychange .adress').click(function() {
    	$('.modal-citychange').modal('show');
  	});
	$('.modal-citychange .closed').click(function() {
    	$('.modal-citychange').modal('hide');
  	});
});