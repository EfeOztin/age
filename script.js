function subM(submenuId, iconId) {
    var submenu = document.getElementById(submenuId);
    var icon = document.getElementById(iconId);
    if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block";
        icon.classList.remove("bi-chevron-up"); 
        icon.classList.add("bi-chevron-down");
    } else {
        submenu.style.display = "none";
        icon.classList.remove("bi-chevron-down");
        icon.classList.add("bi-chevron-up");
    }
}

function menu(event) {
    // Engelleme için event.preventDefault() kullanılıyor
    event.preventDefault();

    var menu = document.getElementById("left");
    var content = document.getElementById("right");
    var space = document.getElementById("space");
    var hb = document.getElementById("hb");

    // Parse the width value as a float
    var currentWidth = parseFloat(menu.style.width);

    // Check if the menu is currently open (width is 20%)
    if (currentWidth === 20) {
        // If open, close the menu by setting widths accordingly
        menu.style.display = "none";
        menu.style.width = "0%";
        space.style.width = "0%";
        content.style.width = "100%";
    } else {
        // If closed, open the menu by setting widths accordingly
        menu.style.display = "block";
        menu.style.width = "20%";
        space.style.width = "1%";
        content.style.width = "79%";
    }
}