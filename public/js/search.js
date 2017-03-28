// Creating a new listing

$(document).ready(function() {

  var searchInput = $("#search");

  var searchForm = $("#search-form");

  $(searchForm).on("submit", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();
    // TODO check that search inputs with spaces work

    getPosts(searchInput.val().trim());

  } // end of handleFormSubmit

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
    		var tr = $('<tr>').appendTo(resultsTableBody);
    		$('<td>').html(post.post_title).appendTo(tr);
    	});
    	
    });
  }
});