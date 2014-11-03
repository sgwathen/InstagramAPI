$(document).ready(function() {
	//popularPics();
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
	$('#tagsearch').keypress(function(e) {
		if(e.which == 13) {
			e.preventDefault();
			$('.go').click();	
		}
	});
});
//client-id: d5e832076cd44faa9fbcf7f98a2689bd
var searchTags = function(tag) {
	var getTags = $.ajax({
		url: "https://api.instagram.com/v1/tags" + tag + "/media/recent?client_id=d5e832076cd44faa9fbcf7f98a2689bd",
		dataType:"jsonp",
		type:"GET"
	}) .done(function(getTags){
		var imageUrl = photo.images.standard_resolution.url;
		var captionDiv = '<div class="caption"></div>'
		$.each(getPopular.data, function(index, photo){
			$('.outline').html('<a class="imglink" href="' + imageUrl + '"><img src="' + imageUrl + '"/>' + captionDiv);
			if (photo.caption === null){
				$('.caption').html('');	
			} else {
				$('.caption').html(photo.caption.text);
			}
		});
	});		
};