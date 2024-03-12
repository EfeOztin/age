var bohcaImage = ["images/i/bohçalama.jpg", "images/i/bohçalama-2.jpg"];
var catiImage = ["images/i/çatı-sistemleri.jpg", "images/i/çatı-sistemleri-2.jpg", "images/i/çatı-sistemleri-3.jpg"];
var ıslakImage = ["images/i/ıslak-hacim.jpg", "images/i/ıslak-hacim-2.jpg", "images/i/ıslak-hacim-3.jpg"];
var terasImage = ["images/i/poliüretan-teras.jpg", "images/i/poliüretan-teras-2.jpg"];
var perdeImage = ["images/i/temel-perde.jpg", "images/i/temel-perde-2.jpg"];

var bohcaIndex = 0;
var catiIndex = 0;
var ıslakIndex = 0;
var terasIndex = 0;
var perdeIndex = 0;

function bohca() {
    bohcaIndex = (bohcaIndex + 1) % bohcaImage.length;
    var image = document.getElementById("bohça");
    image.style.opacity = "0.4";
    setTimeout(function () {
        image.src = bohcaImage[bohcaIndex];
        image.style.opacity = "1";
    }, 500);
}

function cati() {
    catiIndex = (catiIndex + 1) % catiImage.length;
    var image = document.getElementById("çatı");
    image.style.opacity = "0.4";
    setTimeout(function () {
        image.src = catiImage[catiIndex];
        image.style.opacity = "1";
    }, 500);
}

function islak() {
    ıslakIndex = (ıslakIndex + 1) % ıslakImage.length;
    var image = document.getElementById("ıslak");
    image.style.opacity = "0.4";
    setTimeout(function () {
        image.src = ıslakImage[ıslakIndex];
        image.style.opacity = "1";
    }, 500);
}

function teras() {
    terasIndex = (terasIndex + 1) % terasImage.length;
    var image = document.getElementById("teras");
    image.style.opacity = "0.4";
    setTimeout(function () {
        image.src = terasImage[terasIndex];
        image.style.opacity = "1";
    }, 500);
}

function perde() {
    perdeIndex = (perdeIndex + 1) % perdeImage.length;
    var image = document.getElementById("perde");
    image.style.opacity = "0.4";
    setTimeout(function () {
        image.src = perdeImage[perdeIndex];
        image.style.opacity = "1";
    }, 500);
}


setInterval(islak, 5000);
setInterval(cati, 5200);
setInterval(bohca, 4600);
setInterval(perde, 4800);
setInterval(teras, 5400);
