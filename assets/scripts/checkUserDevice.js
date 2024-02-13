function redirectToMobilePage() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        window.location.href = "mobile.html"; // Chuyển hướng đến trang mobile.html
    }
}