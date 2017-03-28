// For creating a new user


$(document).ready(function() {
	console.log('user.js');
	var usernameInput = $("#author-name"); // whatever the <input> id is
	var passwordInput = $("#author-password"); // whatever the <input> id is
	var emailInput = $("#author-email");	// whatever the <input> id is
	var zipInput = $("#author-zip"); // whatever the <input> id is

	var userForm = $("#author-form"); // whatever the <form> id is

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
	      user_password: passwordInput
	        .val()
	        .trim(),
	      user_zip: zipInput
	      	.val()
	      	.trim(),
	    };

	    submitUser(newUser)
	}

	function submitUser(user) {
		$.post("/api/users", user, function(data) {
			console.log('Created user');
			console.log(data.user_email);
			$('#messages').html("Successfully created user: " + data.user_name);
			// TODO maybe clear form if not redirecting to a new page
			// TODO Either log in the user or redirect to a login page
		}); // change /api/posts if we change the route in users-api.js
	} // end submitUser()

});