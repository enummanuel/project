// login.js

document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for Social Login Links
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
    const loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (!email || !password) {
            alert('Please fill in all fields.');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email.');
        } else {
            alert('Login successful!');
            // Perform login action (e.g., submit the form, call an API, etc.)
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
