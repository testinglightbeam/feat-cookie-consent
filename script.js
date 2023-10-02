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
