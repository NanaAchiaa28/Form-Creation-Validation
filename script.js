document.addEventListener("DOMContentLoaded", () => {
    // Form and feedback selection
    const form = document.querySelector("#registrationForm");
    const feedbackDiv = document.querySelector("#feedback");

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let isValid = true;
        const messages = [];

        // Retrieve user inputs
        const username = document.querySelector("#username").value.trim();
        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value.trim();

        // Validate username
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Validate password
        if (password.length < 6) {
            isValid = false;
            messages.push("Password must be at least 6 characters long.");
        }

        // Display feedback
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // Red
        }
    });
});
