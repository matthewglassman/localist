$(document).ready(function() {
	
	$.get("/api/maincategories", function(data) {
		var select = $('#maincategory');
    	data.forEach(function(category) {
    		var option = $('<option value="' + category.maincategories_id + '">').html(
    			category.maincategories_name).appendTo(select);
    	});

	});

	$.get("/api/subcategories", function(data) {
		var select = $('#subcategory');
    	data.forEach(function(category) {
    		var option = $('<option value="' + category.id + '">').html(
    			category.subcategories_name).appendTo(select);
    	});

	});

	var postForm = $("#post-form"); // whatever the <form> id is

	$(postForm).on("submit", handleFormSubmit);

	function handleFormSubmit(event){
		event.preventDefault(); 

	    if (!$("#title").val().trim() || !$("#body").val().trim()) {
	      return;
	    }

	    submitPost(postForm.serializeJSON());
	}

	function submitPost(post) {
		// TODO get logged in user id
		post.userId = 1;
		$.post("/api/posts", post, function(data) {
			console.log('Created post');
			console.log(data);
			// TODO: redirect to view post page?
			
		});
			
	};
});
