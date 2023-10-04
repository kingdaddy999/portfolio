const themeBtn = document.querySelector("[data-theme-btn]");
const HTML = document.documentElement;
let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (sessionStorage.getItem("theme")) {
    HTML.dataset.theme = sessionStorage.getItem('theme');
} else {
    HTML.dataset.theme = isDark ? "dark" : "light";

}

const changeTheme = () => {

    HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", HTML.dataset.theme);

}

themeBtn.addEventListener("click", changeTheme);


const tabBtn = document.querySelectorAll("[data-tab-btn]");
const tabs = document.querySelectorAll("[data-tab-content]");

tabBtn.forEach(item => {
    item.addEventListener("click", function () {
        for(const tab of tabs){
            if(item.dataset.tabBtn === tab.dataset.tabContent){
                item.classList.add("active");
                tab.classList.add("active");
            } else {
                item.classList.remove("active");
                tab.classList.remove("active")
            }
        }
    });
});

