// signup.js

document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for Social Sign-Up Links
    const socialButtons = document.querySelectorAll('.social-login a');
    socialButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple Form Validation
    const signupForm = document.querySelector('form');
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        if (!username || !email || !password) {
            alert('Please fill in all fields.');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email.');
        } else {
            alert('Sign up successful!');
            // Perform sign-up action (e.g., submit the form, call an API, etc.)
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
