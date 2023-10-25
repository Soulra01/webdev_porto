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

// Import library spotify-web-api-js
import SpotifyWebApi from 'spotify-web-api-js';

// Inisialisasi SpotifyWebApi dengan Client ID
const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('d4f01a3e028449c691f3af67b3a58ae4'); // Ganti 'YOUR_ACCESS_TOKEN' dengan access token yang Anda dapatkan setelah mengautentikasi pengguna

// Fungsi untuk mendapatkan data pemutaran terakhir pengguna
function getRecentTrack() {
  spotifyApi.getMyRecentlyPlayedTracks()
    .then(data => {
      // Mengambil data lagu terakhir
      const lastTrack = data.items[0].track;

      // Menampilkan informasi lagu dalam elemen dengan class "lastplay"
      const lastplayElement = document.getElementById('lastplay');
      lastplayElement.textContent = `${lastTrack.name} - ${lastTrack.artists[0].name}`;
    })
    .catch(error => {
      console.error('Error fetching recent track:', error);
    });
}

// Panggil fungsi untuk mendapatkan data pemutaran terakhir
getRecentTrack();


// Dalam kode JavaScript untuk mendapatkan data pemutaran terakhir
const lastplayElement = document.getElementById('lastplay-info');
lastplayElement.textContent = `${lastTrack.name} - ${lastTrack.artists[0].name}`;
