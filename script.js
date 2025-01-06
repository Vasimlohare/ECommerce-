document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".header-container nav ul li a");

    // Highlight the clicked link and remove highlight from others
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            // Prevent default behavior
            event.preventDefault();

            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove("active"));

            // Add active class to the clicked link
            link.classList.add("active");

            // Log the link's text (you can modify this for further actions)
            console.log(`Navigating to: ${link.textContent}`);
        });
    });
});

// JavaScript to navigate to login page on click
document.getElementById("clickable-login").addEventListener("click", function () {
    window.location.href = "login.html"; // Redirect to login.html
});
document.getElementById("clickable-register").addEventListener("click", function () {
    window.location.href = "registration.html"; // Redirect to registration.html
});
document.getElementById("about-link").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default jump to the section
    const aboutSection = document.getElementById("about-section");
    aboutSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the section smoothly
});
document.getElementById("contact-link").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default jump to the section
    const contactSection = document.getElementById("contact-section");
    contactSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the section smoothly
});
const goToTopButton = document.getElementById('goToTop');

    window.onscroll = function () {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goToTopButton.style.display = 'flex';
      } else {
        goToTopButton.style.display = 'none';
      }
    };

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    document.getElementById("product-link").addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default jump to the section
      const contactSection = document.getElementById("product-section");
      contactSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the section smoothly
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners to all product links
    document.querySelectorAll(".product a").forEach((productLink) => {
        productLink.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default navigation behavior

            const productPage = productLink.getAttribute("data-product");

            // Check if the user is logged in
            const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

            if (isLoggedIn) {
                // If logged in, navigate to the product page
                window.location.href = productPage;
            } else {
                // If not logged in, save the product page and redirect to login
                localStorage.setItem("redirectAfterLogin", productPage);
                window.location.href = "login.html";
            }
        });
    });

    // Handle redirect after login
    const redirectAfterLogin = localStorage.getItem("redirectAfterLogin");
    if (redirectAfterLogin && window.location.pathname.endsWith("login.html")) {
        document.getElementById("loginButton").addEventListener("click", () => {
            // Simulate login (replace with actual login logic)
            localStorage.setItem("isLoggedIn", "true");

            // Redirect to the saved product page
            window.location.href = redirectAfterLogin;
            localStorage.removeItem("redirectAfterLogin");
        });
    }
});




