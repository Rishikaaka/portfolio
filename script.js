document.addEventListener("DOMContentLoaded", function() {
  // DOM is ready
  console.log("DOM is ready");

  // Smooth scrolling for anchor links
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      const offset = 50; // Offset to adjust scroll position

      if (target) {
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: "smooth"
        });
      }

      // Close mobile navigation menu if open
      const navMenu = document.querySelector(".nav-menu");
      navMenu.classList.remove("show");
    });
  });

  // Toggle mobile navigation
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  navToggle.addEventListener("click", function() {
    navMenu.classList.toggle("show");
  });

  // Form submission handling
  const form = document.querySelector("#contact-form");
  const formMessage = document.querySelector(".form-message");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Perform form validation and submission logic here
    // Example: AJAX request to submit form data to a server

    // Display success message
    formMessage.textContent = "Thank you for your message!";
    formMessage.classList.add("success");

    // Reset form fields
    form.reset();
  });
});
