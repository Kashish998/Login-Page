document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const loginButton = document.querySelector(".loginbtn");
    const emailInput = document.querySelector(".email-input");
    const passwordInput = document.querySelector(".password-input");
    const errorMessage = document.getElementById("error-message");
    // Hardcoded credentials
    const hardcodedEmail = "test@gmail.com";
    const hardcodedPassword = "password123";
   

    // Add event listener for login button
    if (loginButton) {
      loginButton.addEventListener("click", function () {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
  errorMessage.style.display = "none";
            errorMessage.textContent = "";

            // Validate input fields
            if (!email || !password) {
                errorMessage.textContent = "Please fill in both email and password.";
                errorMessage.style.display = "block";
                return;
            }
        // Check credentials
        if (email === hardcodedEmail && password === hardcodedPassword) {
          alert("Login successful!");
          window.location.href = "nextpage.html"; // Redirect to next page
        } else {
          errorMessage.textContent = "Invalid email or password. Please try again.";
                errorMessage.style.display = "block";
        }
      });
    } else {
      console.error("Login button not found.");
    }
  });

  let hide = document.getElementById("hide");
  let password = document.getElementById("password");

  hide.onclick = function(){
    if (password.type == "password"){
        password.type = "text";
        hide.src = "show.png";
    }
    else{
        password.type="password";
        hide.src = "hide.png"
    }
  }
