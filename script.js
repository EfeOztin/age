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
    var isMobile = window.matchMedia("(max-width: 800px)").matches;
    // Parse the width value as a float
    var currentWidth = parseFloat(menu.style.width);
    if (isMobile) { 
        if (currentWidth === 100) {
            // If open, close the menu by setting widths accordingly
            menu.style.display = "none";
            menu.style.width = "0%";
            space.style.width = "0%";
            content.style.width = "100%";
        } else {
            // If closed, open the menu by setting widths accordingly
            menu.style.display = "block";
            menu.style.width = "100%";
            space.style.width = "0%";
            content.style.width = "0%";
        }
    } else {
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
}

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let count = 0;

    function nextSlide() {
        count++;
        if (count === slider.children.length) {
            count = 0;
        }
        updateSlider();
    }

    function prevSlide() {
        count--;
        if (count < 0) {
            count = slider.children.length - 1;
        }
        updateSlider();
    }

    function updateSlider() {
        const transformValue = -count * 100 + "%";
        slider.style.transform = `translateX(${transformValue})`;
    }
});
