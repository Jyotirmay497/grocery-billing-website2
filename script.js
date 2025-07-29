function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    once: true,
  });
});
