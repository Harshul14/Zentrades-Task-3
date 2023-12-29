document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate email format for username
    if (!validateEmail(username)) {
        alert('Please enter a valid email address as the username.');
        return;
    }

    // Validate password format
    if (!validatePassword(password)) {
        alert('Password must contain at least one uppercase letter, one number, and no special characters except "@"');
        return;
    }

    // If both validations pass, you can perform login logic here
    // For demo purposes, let's just log the credentials
    console.log('Username:', username);
    console.log('Password:', password);
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@])[A-Za-z0-9@]{6,}$/;
    return passwordRegex.test(password);
}

