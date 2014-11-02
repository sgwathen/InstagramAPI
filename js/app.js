$(document).ready(function() {
	$('.popular').mousedown(function(e) {
        $(this).toggleClass('popularClick');
    })
	.mouseup(function(e) {
        $(this).toggleClass('popularClick');
    });
	$('.go').mousedown(function(e) {
        $(this).toggleClass('goClick');
    })
	.mouseup(function(e) {
        $(this).toggleClass('goClick');
    });
	//submission of tag
	$('.go').click(function(e) {
		e.preventDefault();
		var tag = $('#tagsearch').val();
		//initiate ajax call
		searchTags(tag);
	});
	$('.popular').click(function(e) {
		e.preventDefault();
		popularPics();
	});
});