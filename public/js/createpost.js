$(document).ready(function() {

	var subcategories = [];
	
	var categorySelect = $('#maincategory');
	$.get("/api/maincategories", function(data) {
    	data.forEach(function(category) {
    		$('<option value="' + category.maincategories_id + '">').html(
    			category.maincategories_name).appendTo(categorySelect);
    	});
    });
    categorySelect.on('change', updateCategories);

	$.get("/api/subcategories", function(data) {
		subcategories = data;
		updateCategories();
	});

	function updateCategories (){
		var categoryId = $('#maincategory').val();

		var select = $('#subcategory');
		select.empty();
    	subcategories.forEach(function(subcategory) {
    		if (categoryId == subcategory.maincategoryMaincategoriesId) {
    			$('<option value="' + subcategory.id + '">').html(
    			subcategory.subcategories_name).appendTo(select);
    		}
       	});
	}

	var postForm = $("#post-form"); // whatever the <form> id is

	$(postForm).on("submit", handleFormSubmit);

	function handleFormSubmit(event){
		event.preventDefault(); 

	    if (!$("#title").val().trim() || !$("#body").val().trim()) {
	      return;
	    }

	    submitPost(postForm.serializeJSON());

	    $("#title").val("");
        $("#body").val("");
        $("#price").val("");
        // zipInput.val("");
	}

	function submitPost(post) {
		// TODO get logged in user id
		post.userId = $("#userId").val();
		$.post("/api/posts", post, function(data) {
			console.log('Created post');
			console.log(data);
			// TODO: redirect to view post page?
			
		});
			
	};
});
