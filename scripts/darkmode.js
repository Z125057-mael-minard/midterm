let darkmode = localStorage.getItem("darkMode");

const themeToggle = document.getElementById("theme-toggle");


if (darkmode == "active"){
  document.body.classList.add("dark");
}
themeToggle.addEventListener("click", function() {
  darkmode = localStorage.getItem("darkMode");
  toggleDarkMode();
});
function toggleDarkMode(){
  if (darkmode == "active"){
    localStorage.setItem("darkMode", null);
    document.body.classList.remove("dark");
  }
  else{
    localStorage.setItem("darkMode", "active");
    document.body.classList.add("dark");
  }
}
