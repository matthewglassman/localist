// Creating a new listing

$(document).ready(function() {

  var titleInput = $("#post_title");
  var bodyInput = $("#post_body");
  var priceInput = $("#post_price");
  // photo

  var listingForm = $("#listing");

  $(listingForm).on("submit", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!titleInput.val().trim() || !bodyInput.val().trim()) {
      return;
    }
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
        .trim()
    };

  } // end of handleFormSubmit

  function submitPost(post) {
    $.post("/api/posts", post);
  }



