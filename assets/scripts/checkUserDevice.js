function redirectToMobilePage() {
    // Check if the user agent matches a mobile device and if not already on the mobile version
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.location.pathname !== '/mobile.html') {
        // Redirect to the mobile version of the site
        window.location.href = "mobile.html";
    }
}

// Call the function when the web page loads
window.onload = function() {
    redirectToMobilePage();
};
