// For creating a new user

$(document).ready(function() {
	console.log('user.js');
	// creating user
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
	      	.trim()
	    };

	    submitUser(newUser.user_name, newUser.user_email, newUser.user_password, newUser.user_zip);
	}

	function submitUser(user_name, user_email, user_password, user_zip) {
		// $.post("/api/users", user, function(data) {

		$.post("/api/users", {
			user_name: user_name,
			user_email: user_email,
			user_password: user_password,
			user_zip: user_zip
		}).then(function(data) {
	      window.location.replace(data);
	      $('#messages').html("Successfully created user: " + data.user_name);
	    }).catch(function(err) {
	      console.log(err);
	    });

		usernameInput.val("");
	    passwordInput.val("");
	    emailInput.val("");
	    zipInput.val("");
		
			// TODO maybe clear form if not redirecting to a new page
			// TODO Either log in the user or redirect to a login page
	}; // end submitUser() // change /api/posts if we change the route in users-api.js
	
	// logging in
	var loginInput = $("#login-email");
  	var loginPasswordInput = $("#login-password");

  	var loginForm = $("#login-form");

  	$(loginForm).on("submit", function(event) {

	    event.preventDefault();

	    var userData = {
	      user_email: loginInput.val().trim(),
	      user_password: loginPasswordInput.val().trim()
	    };

	    if (!userData.user_email || !userData.user_password) {
	    	alert("Please fill out all the fields!")
	    	return;
	    }

	    // If we have an email and password we run the loginUser function and clear the form
	    loginUser(userData.user_email, userData.user_password);
	    
	    loginInput.val("");
	    loginPasswordInput.val("");
	});

	function loginUser(email, password) {
		
	    $.post("/api/login", {
	      user_email: email,
	      user_password: password
	    }).then(function(data){
			window.location.replace(data);
		})
  	}

}); // end document.ready