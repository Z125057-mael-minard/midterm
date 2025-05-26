const mobileToggle = document.getElementById("mobile-toggle");
const navMenu = document.getElementById("menu");

// mobile menu functionality
mobileToggle.addEventListener("click", function() {
  toggleMobileMenu();
});
function toggleMobileMenu(){
  document.getElementById("menu").classList.toggle("active");
}
