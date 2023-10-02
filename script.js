// Define a function to create unique cookies
function createUniqueCookies() {
    const cookieName = "myUniqueCookie";
    const cookieValue = generateUniqueValue(); // You need to implement this function

    // Set the cookie with a unique value
    document.cookie = `${cookieName}=${cookieValue}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;

    alert(`Cookie created with value: ${cookieValue}`);
}

// Function to generate a unique value (you can customize this)
function generateUniqueValue() {
    return Math.random().toString(36).substring(2); // Generates a random string
}

// Call the createUniqueCookies function when the page loads
window.onload = createUniqueCookies;
