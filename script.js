document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Send the login data to the server
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                alert("Login successful!");
                // Redirect or perform other actions as needed
            } else {
                alert("Login failed. Please check your credentials.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    });
});
