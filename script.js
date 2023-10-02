function createUniqueCookies() {
  const cookies = [];

  for (let i = 1; i <= 10000; i++) {
    const cookieName = `cookie_${i}`;
    const cookieValue = `value_${i}`;
    document.cookie = `${cookieName}=${cookieValue}; path=/`;
    cookies.push({ name: cookieName, value: cookieValue });
  }

  return cookies;
}

const generatedCookies = createUniqueCookies();
console.log(`Generated ${generatedCookies.length} unique cookies.`);

document.addEventListener("DOMContentLoaded", function () {
    const createCookieButton = document.getElementById("createCookieButton");
    
    createCookieButton.addEventListener("click", function () {
        // Define the cookie name and value (replace with your large data)
        const cookieName = "largeCookie";
        const largeData = generateLargeData(); // Implement this function
        
        // Set the cookie
        document.cookie = `${cookieName}=${largeData}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;

        alert("Large cookie created successfully.");
    });
    
    // Function to generate large data (replace with your data)
    function generateLargeData() {
        // Generate a large string, e.g., for 2.5MB cookie
        const largeString = "A".repeat(2500000); // Each character is roughly 1 byte
        return encodeURIComponent(largeString); // Encode for safe storage
    }
});

