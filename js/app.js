$(document).ready(function() {
	popularPics();
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
		url: "https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=d5e832076cd44faa9fbcf7f98a2689bd",
		dataType:"jsonp",
		type:"GET"
	}) .done(function(getTags){
		var imageCounter=0;
		var group = '<div class="pix">';
		$.each(getTags.data, function(index, photo){
			var imageUrl = photo.images.standard_resolution.url;
			var captionDiv = '<div class="caption"></div>';
			group += '<div class="outline"><a class="imglink" href="' + imageUrl + '"><img src="' + imageUrl + '" class="instaImgs" />';
			if (photo.caption === null){
				group += '<div class="caption"></div></div';	
			} else {
				group += '<div class="caption">' + photo.caption.text + '</div></div>';
			}
		}); group += '</div>';
			$('.pixGallery').html(group);
	});		
};
var popularPics = function(popular) {
	var getPopular = $.ajax({
		url: "https://api.instagram.com/v1/media/popular?client_id=d5e832076cd44faa9fbcf7f98a2689bd",
		dataType:"jsonp",
		type:"GET"
	}) .done(function(getPopular){
		var imageCounter=0;
		var group = '<div class="pix">';
		$.each(getPopular.data, function(i, photo){
			var imageUrl = photo.images.standard_resolution.url;
			var captionDiv = '<div class="caption"></div>';
			group += '<div class="outline"><a class="imglink" href="' + imageUrl + '"><img src="' + imageUrl + '" class="instaImgs" />';
			if (photo.caption === null){
				group += '<div class="caption"></div></div';	
			} else {
				group += '<div class="caption">' + photo.caption.text + '</div></div>';
			}
		}); group += '</div>';
			$('.pixGallery').html(group);
	});		
};
