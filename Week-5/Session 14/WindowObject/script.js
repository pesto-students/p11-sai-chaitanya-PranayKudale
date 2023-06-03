function displayWindowProperties() {
  // Display user agent string
  console.log("User Agent:", window.navigator.userAgent);

  // Display screen dimensions
  console.log(
    "Screen Dimensions:",
    window.screen.width,
    "x",
    window.screen.height
  );

  // Display current URL and path
  console.log("Current URL:", window.location.href);
  console.log("Path:", window.location.pathname);

  // Store and retrieve data in sessionStorage
  sessionStorage.setItem("sessionData", "Hello, sessionStorage!");
  console.log(
    "Data stored in sessionStorage:",
    sessionStorage.getItem("sessionData")
  );

  // Store and retrieve data in localStorage
  localStorage.setItem("localData", "Hello, localStorage!");
  console.log(
    "Data stored in localStorage:",
    localStorage.getItem("localData")
  );
}

// Call displayWindowProperties when the page loads
window.onload = displayWindowProperties;
