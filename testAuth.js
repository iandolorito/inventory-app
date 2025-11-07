const { registerUser, loginUser } = require('./auth');

// registerUser("johndoe", "john@example.com", "Password123!", "John", "Doe");
loginUser("john.doe@example.com", "$2b$10$hashedPasswordHere");
