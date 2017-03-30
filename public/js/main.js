$(document).ready(function() {

	// Posts
	var titleInput = $("#post_title");
	var bodyInput = $("#post_body");
	var priceInput = $("#post_price");
	var categorySelect = $("#category")
	// photo

	var listingForm = $("#listing");

	$(listingForm).on("submit", handlePostSubmit);

	function handlePostSubmit(event) {
	  event.preventDefault();
	    if (!titleInput.val().trim() || !bodyInput.val().trim() || !categorySelect.val()) {
	      return;
	    }
	    console.log(categorySelect.val());
	    // Constructing a newPost object to hand to the database
	    var newPost = {
		    post_title: titleInput
		      .val()
		      .trim(),
		    post_body: bodyInput
		      .val()
			  .trim(),
		    post_price: priceInput
		      .val()
		      .trim(),
		    maincategoryMaincategoriesId: categorySelect
		      .val(),
		    userId: currentUser,
		    subcategoryId: 1 // hard coding subcategory in in for testing purposes
	  	};

	  	submitPost(newPost);
	} // end of handlePostSubmit

	function submitPost(post) {
	  $.post("/api/posts", post);
	}


	var searchInput = $("#search");

	var searchForm = $("#search-form");

	$(searchForm).on("submit", handleSearchSubmit);

	function handleSearchSubmit(event) {
		console.log('search');
		event.preventDefault();
	    // TODO check that search inputs with spaces work

	    getPosts(searchInput.val().trim());

	} // end of handleSearchSubmit

	  function getPosts(searchTerms) {
	  	var params = {
	  		search: searchTerms
	  	};

	  	$.get("/api/posts", params, function(data) {
	    	console.log(data);
	    	var resultsTableBody = $('#results tbody');
	    	// Clear out any existing search results
	    	resultsTableBody.empty();
	    	// POpulate table with search results
	    	data.forEach(function(post) {
	    		// Add a tr (row) to the table body
	    		var tr = $('<tr>').appendTo(resultsTableBody);
	    		// Add a td (cell) to the row
	    		var td = $('<td>').appendTo(tr);
	    		// Add link ed text to the table cell
	    		$('<a href="/post.html?id=' + post.post_id + '">').html(post.post_title).appendTo(td);
	    		// TODO add td elements for each field you want in the listing 
	    	});
	    	
	    });
	  }

	  getPosts();
});