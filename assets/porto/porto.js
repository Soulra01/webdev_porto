const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");

hamburgerMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Menambahkan efek dropdown pada submenu
const submenuItems = document.querySelectorAll(".menu li.has-submenu");

submenuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.stopPropagation(); // Mencegah menu utama ditutup saat submenu diklik
        item.classList.toggle("show-submenu");
    });
});

document.addEventListener("click", (e) => {
    submenuItems.forEach((item) => {
        if (!item.contains(e.target)) {
            item.classList.remove("show-submenu");
        }
    });
});

