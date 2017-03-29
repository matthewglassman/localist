$(document).ready(function() {
	var url =  window.location.href;
	// url is of form post.html?id=<postId>
	var postId = url.split('=')[1];

	$.get("/api/posts/" + postId, function(data) {
		$('#title').html(data['post_title']);
		
	});
});
