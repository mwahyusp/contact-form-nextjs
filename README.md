Form Kontak Sederhana

Proyek ini adalah formulir kontak sederhana yang dibuat menggunakan Next.js dan Tailwind CSS. Pengguna dapat mengisi nama dan pesan, lalu melihat data yang dikirim di halaman.

Prasyarat

Node.js (versi LTS direkomendasikan)
npm

Instalasi

Clone repositori ini atau buat proyek baru:npx create-next-app@latest contact-form

Masuk ke direktori proyek:cd contact-form

Instal dependensi:npm install

Pastikan Tailwind CSS sudah dikonfigurasi (lihat langkah umum di atas).

Menjalankan Proyek

Jalankan server pengembangan:npm run dev

Buka http://localhost:3000 di browser.

Struktur Proyek

pages/index.js: Halaman utama dengan formulir kontak.
styles/globals.css: File CSS dengan konfigurasi Tailwind.

Fitur

Input untuk nama dan pesan.
Tombol "Kirim" untuk menampilkan data yang diinput.
State dikelola menggunakan React useState.

Teknologi yang Digunakan

Next.js
Tailwind CSS
React (useState)
