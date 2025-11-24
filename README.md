# Portfolio Modern — Template HTML/CSS/JS

Template portofolio modern, responsif, dan mudah dikustomisasi. Siap dijadikan template GitHub/GitHub Pages dan disesuaikan oleh pengguna (nama, kontak, skills, proyek, dan CV) seperti tampilan pada screenshot.

## Preview
- Buka `index.html` di browser untuk langsung melihat tampilan.
- Logo: `assets/images/portfolio.png`.

## Fitur
- Layout responsif dengan Tailwind CSS (CDN).
- Animasi halus: fade‑in dan floating avatar.
- Navbar sticky dengan efek saat scroll.
- Section terstruktur: Hero, About, Skills (progress bar animasi), Projects, Contact.
- Grid Projects dengan tombol `View All / Show Less`.
- Form kontak + EmailJS dengan notifikasi sukses/gagal.
- Dialog `Download CV` dengan konfirmasi dan progress bar.
- Smooth scrolling untuk navigasi anchor.

## Teknologi
- HTML5, Tailwind CSS (CDN), Font Awesome.
- EmailJS Browser SDK.
- Vanilla JavaScript.

## Struktur Project
- `index.html` — halaman utama.
- `assets/styles.css` — gaya tambahan & animasi.
- `assets/script.js` — interaksi UI, EmailJS, progress CV.
- `assets/images/` — aset gambar (logo, profil, dll.).
- `assets/cv/` — berkas CV PDF.

## Instalasi & Menjalankan
- Download/clone repo ini.
- Buka `index.html` (double‑click) atau jalankan server lokal
  - Contoh: `npx serve` atau `python -m http.server`.

## Cara Pakai (Setelan Template)
- Nama & Jabatan (Hero)
  - Ubah teks di `index.html` pada `Hi, I'm` dan jabatan.
  - Referensi: `portfolio-modern/index.html:44-52`.
- Foto Profil
  - Ganti file `assets/images/profile.jpg` dengan foto Anda.
- Kontak & Sosial (Contact)
  - Ubah email, telepon, lokasi, dan tautan GitHub/LinkedIn/Telegram/Instagram.
  - Referensi: `portfolio-modern/index.html:262-305` (termasuk `portfolio-modern/index.html:293-304`).
- Skills
  - Atur persentase di `index.html` via atribut `data-width` pada elemen `.skill-bar`.
  - Contoh: `portfolio-modern/index.html:121`, `portfolio-modern/index.html:130`, `portfolio-modern/index.html:148`.
- Projects
  - Edit/duplikasi kartu pada grid `#projectGrid`.
  - Referensi awal: `portfolio-modern/index.html:165-217`.
- Download CV
  - Taruh file CV Anda di `assets/cv/`.
  - Script unduh default menuju `./assets/cv/my-cv.pdf` — sesuaikan nama file.
  - Referensi tautan: `portfolio-modern/assets/script.js:171-176`.

## Mengaktifkan Form "Get In Touch" dengan EmailJS
Di `assets/script.js`:
- Inisialisasi Public Key:
  - `portfolio-modern/assets/script.js:216` → `emailjs.init('YOUR_PUBLIC_KEY')`.
- Kirim form via Service & Template:
  - `portfolio-modern/assets/script.js:244` → `emailjs.sendForm('namaservice', 'namatemplate', this)`.

Contoh konfigurasi yang digunakan di project ini:

```
// ======================
// EMAILJS CONFIGURATION
// ======================

// Inisialisasi EmailJS
// EmailJS Configuration
// configurasi email js bisa chat Libra
emailjs.init('YOUR_PUBLIC_KEY'); // Ganti dengan Public Key Anda

// Setup Form Kontak
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnSpinner = document.getElementById('btn-spinner');
  const notificationPopup = document.getElementById('notification-popup');
  const notificationIcon = document.getElementById('notification-icon');
  const notificationTitle = document.getElementById('notification-title');
  const notificationMessage = document.getElementById('notification-message');
  const notificationClose = document.getElementById('notification-close');

  // Close notification handler
  notificationClose.addEventListener('click', function() {
    notificationPopup.classList.add('hidden');
  });

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Show loading state
    btnText.textContent = 'Sending...';
    submitBtn.disabled = true;
    btnSpinner.classList.remove('hidden');

    // Kirim email
    emailjs.sendForm('namaservice', 'namatemplate', this)
      .then(() => {
        // Show success notification
        showNotification(
          'Success!',
          'Your message has been sent successfully.',
          'text-green-500',
          'fa-check-circle'
        );
        contactForm.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        showNotification(
          'Error!',
          'Failed to send message. Please try again.',
          'text-red-500',
          'fa-exclamation-circle'
        );
      })
      .finally(() => {
        // Reset button state
        btnText.textContent = 'Send Message';
        submitBtn.disabled = false;
        btnSpinner.classList.add('hidden');
      });
  });
}
```

Langkah pengaturan EmailJS:
1. Buat akun di `emailjs.com`.
2. Tambahkan Email Service dan Template, catat `Service ID`, `Template ID`.
3. Ambil `Public Key` dari dashboard.
4. Masukkan nilai ke `assets/script.js` sesuai referensi di atas.
5. Sesuaikan field form sesuai kebutuhan (nama `name` input sudah disiapkan di `index.html`).

## Deploy ke GitHub Pages
1. Push project ke repository GitHub.
2. `Settings` → `Pages`.
3. Source: pilih `Branch: main` (root).
4. Tunggu build; situs siap dibagikan.

## Bantuan
Jika Anda tidak paham cara setting, silakan hubungi:
- Libra — Email: `youremail@gmail.com`, Telegram: `@yourhandle`.

## Lisensi
Proyek ini menggunakan lisensi MIT. Lihat berkas `portfolio-modern/LICENSE` untuk detail.
