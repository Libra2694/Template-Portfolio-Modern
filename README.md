# Portfolio Modern — Template HTML/CSS/JS

Template portofolio modern, responsif, dan mudah dikustomisasi. Cocok untuk dipakai sebagai starter di GitHub atau GitHub Pages.

## Preview
- Buka `index.html` langsung di browser untuk melihat tampilan.
- Logo: `assets/images/portfolio.png`

## Fitur
- Layout responsif dengan Tailwind CSS (CDN)
- Animasi halus: fade-in dan floating avatar
- Navbar sticky dengan efek saat scroll
- Section: Hero, About, Skills (progress bar animasi), Projects, Contact
- Grid Projects dengan tombol `View All / Show Less`
- Form kontak terintegrasi EmailJS + notifikasi cantik
- Dialog `Download CV` dengan konfirmasi dan progress
- Smooth scrolling untuk navigasi anchor

## Teknologi
- HTML5
- Tailwind CSS (via CDN)
- Font Awesome Icons
- EmailJS Browser SDK
- Vanilla JavaScript

## Struktur Project
- `index.html` — halaman utama
- `assets/styles.css` — gaya tambahan & animasi
- `assets/script.js` — interaksi UI, EmailJS, progress CV
- `assets/images/` — aset gambar (logo, profil, dll.)
- `assets/cv/` — berkas CV PDF

## Instalasi & Menjalankan
- Clone atau download repository ini
- Buka `index.html` dengan double‑click atau jalankan server lokal
  - Contoh: `npx serve` atau `python -m http.server` (opsional)

## Kustomisasi Cepat
- Nama & jabatan di `index.html` bagian Hero
  - Ganti teks “Your Name” dan “Fullstack Web Developer”
- Kontak di `index.html` bagian Contact
  - Email, telepon, lokasi, dan tautan sosial (GitHub/LinkedIn/Telegram/Instagram)
- Skills di `index.html` — ubah persentase melalui atribut `data-width`
- Gambar profil di `assets/images/profile.jpg`
- Projek di `index.html` — edit card di grid `#projectGrid`

## Konfigurasi EmailJS
Di `assets/script.js`:
- Inisialisasi: `emailjs.init('YOUR_PUBLIC_KEY')` — ganti dengan Public Key EmailJS Anda
  - Lokasi: `portfolio-modern/assets/script.js:216`
- Kirim form: `emailjs.sendForm('namaservice', 'namatemplate', this)` — ganti `namaservice` dan `namatemplate`
  - Lokasi: `portfolio-modern/assets/script.js:244`
- Langkah umum:
  1. Buat akun di emailjs.com
  2. Tambah service + template, catat `Service ID`, `Template ID`, dan `Public Key`
  3. Masukkan nilai tersebut ke dalam file `assets/script.js`

## Download CV
- File CV contoh: `assets/cv/masukincvpdfmu.pdf`
- Script default mengarah ke `./assets/cv/my-cv.pdf` — sesuaikan atau ubah nama file
  - Lokasi pengaturan tautan: `portfolio-modern/assets/script.js:171-176`

## Deploy ke GitHub Pages
1. Push project ke repository GitHub
2. Masuk ke `Settings` → `Pages`
3. Source: pilih `Branch: main` dan folder root
4. Tunggu build selesai, situs Anda siap dibagikan

## Lisensi
Gunakan bebas untuk belajar dan membuat portofolio. Tambahkan berkas `LICENSE` jika ingin menetapkan lisensi khusus (mis. MIT).

## Kredit
- Tailwind CSS, Font Awesome, dan EmailJS
- Desain dan implementasi oleh pemilik repository
`
