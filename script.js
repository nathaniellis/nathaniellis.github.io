// Toggle mobile menu
document.getElementById("navToggle").addEventListener("click", function () {
  document.getElementById("mainNav").classList.toggle("show");
});

// Optional: Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });

    // Close menu on click (for mobile UX)
    document.getElementById("mainNav").classList.remove("show");
  });
});
