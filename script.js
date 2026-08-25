

var icon = document.getElementById("icon");
var savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

function updateThemeIcon() {
    var isDark = document.body.classList.contains("dark");

    if (icon) {
        icon.classList.toggle("fa-sun", !isDark);
        icon.classList.toggle("fa-moon", isDark);
        icon.parentElement.setAttribute("aria-label", isDark ? "Gunakan light mode" : "Gunakan dark mode");
    }
}

updateThemeIcon();

if (icon) {
    icon.onclick = function() {
        var isDark = document.body.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        updateThemeIcon();
    };
}

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
}