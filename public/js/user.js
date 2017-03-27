// For creating a new user


$(document).ready(function() {
	var usernameInput = $("#user_name"); // whatever the <input> id is
	var passwordInput = $("#user_pass"); // whatever the <input> id is
	var emailInput = $("#user_email");	// whatever the <input> id is
	var zipInput = $("#user_zip"); // whatever the <input> id is

	var userForm = $("#create_user"); // whatever the <form> id is

	$(userForm).on("submit", handleFormSubmit);

	function handleFormSubmit(event){
		event.preventDefault(); // Won't submit the creation if missing username, password, email, zip code

	    if (!usernameInput.val().trim() || !passwordInput.val().trim() || !emailInput.val().trim() || !zipInput.val().trim()) {
	      return;
	    }

	    // Constructing a newUser object to hand to the database
	    var newUser = {
	      user_name: usernameInput
	        .val()
	        .trim(),
	      user_email: emailInput
	        .val()
	        .trim(),
	      user_zip: zipInput
	      	.val()
	      	.trim(),
	    };

	    submitUser(newUser)
	}

	function submitUser(user) {
		$.post("/api/users", user); // change /api/posts if we change the route in users-api.js
	} // end submitUser()

