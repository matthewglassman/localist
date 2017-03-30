// For creating a new user
$(document).ready(function() {

	var usernameInput = $("#author-name"); // whatever the <input> id is
	var passwordInput = $("#author-password"); // whatever the <input> id is
	var emailInput = $("#author-email");	// whatever the <input> id is
	var zipInput = $("#author-zip"); // whatever the <input> id is
	var currentUser; 

	var userForm = $("#author-form"); // whatever the <form> id is

	$(userForm).on("submit", handleUserSubmit);

	function handleUserSubmit(event){
		event.preventDefault(); // Won't submit the creation if missing username, password, email, zip code

	    if (!usernameInput.val().trim() || !passwordInput.val().trim() || !emailInput.val().trim() || !zipInput.val().trim()) {
	      console.log("empty input");
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
	    console.log(newUser);

	    submitUser(newUser);
	}

	function submitUser(user) {
		$.post("/api/users", user, function(data) {
			console.log('Created user');
			console.log(data.user_email);
			currentUser = data.id;

	    	window.location.reload();

			// $('#messages').html("Successfully created user: " + data.user_name);
			// TODO maybe clear form if not redirecting to a new page
			// TODO Either log in the user or redirect to a login page
		}); // change /api/posts if we change the route in users-api.js

		usernameInput.val("");
	    passwordInput.val("");
	    emailInput.val("");
	    zipInput.val("");
	} // end submitUser()

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
	    }, function(data) {
	    	window.location.reload();
	    });
  	}
}); // end document.ready

