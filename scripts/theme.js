function darkMode() {

    const divDarkMode = document.querySelector(".div_DarkMode");
    const iconToggleMode = document.querySelector("i");
    const html = document.querySelector("html");

    divDarkMode.addEventListener("click", () => {
        if(iconToggleMode.classList.contains("fa-moon")) {
            iconToggleMode.classList.remove("fa-moon");
            iconToggleMode.classList.add("fa-sun");
            html.classList.add("dark-mode");
        } 
        else if(iconToggleMode.classList.contains("fa-sun") && html.classList.contains("dark-mode")) {
            html.classList.remove("dark-mode");
            iconToggleMode.classList.toggle("fa-moon");
            iconToggleMode.classList.add("fa-moon");
        }
       
    })
}

darkMode();
