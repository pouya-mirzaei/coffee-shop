const themeToggle = document.querySelector("#theme-toggle");
const html = document.querySelector("html");

let theme = localStorage.getItem("theme") || "light";

themeToggle.addEventListener("click", toggleTheme);
window.addEventListener("load", () => {
    setTheme(theme);
});

function toggleTheme() {
    theme = theme == "dark" ? "light" : "dark";
    setTheme(theme);
}

function setTheme(theme) {
    let icon = themeToggle.childNodes[1];

    switch (theme) {
        case "dark":
            icon.setAttribute("href", "#sun");
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
            break;
        case "light":
            icon.setAttribute("href", "#moon");
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
            break;
    }
}
