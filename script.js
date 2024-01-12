function subM(submenuId, iconId) {
    var submenu = document.getElementById(submenuId);
    var icon = document.getElementById(iconId);
    if (submenu.style.display === "block" || submenu.style.display === "") {
        submenu.style.display = "none";
        icon.classList.remove("bi-chevron-down");
        icon.classList.add("bi-chevron-up");
    } else {
        submenu.style.display = "block";
        icon.classList.remove("bi-chevron-up");
        icon.classList.add("bi-chevron-down");
    }
}

