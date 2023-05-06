function isStrongPassword(password) {
  if (password.length < 8) {
    return false; // Password is too short
  }

  if (password.includes("password")) {
    return false; // Password contains "password"
  }

  if (password === password.toLowerCase()) {
    return false; // Password has no uppercase characters
  }

  return true;
}
