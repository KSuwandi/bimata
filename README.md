# BIMATA — Business Connectivity & Network Solutions

Website company profile BIMATA menggunakan React + Vite, dengan fokus pada konektivitas B2B untuk kantor, perusahaan, dan instansi. Kelayakan lokasi dan layanan harus dikonfirmasi berdasarkan jaringan BIMATA sendiri dan/atau mitra.

## 1. Menjalankan secara lokal

Persyaratan: Node.js versi LTS dan Git.

```bash
npm install
npm run dev
```

Buka URL lokal yang ditampilkan Vite, biasanya `http://localhost:5173`.

Sebelum commit, uji build production:

```bash
npm run build
npm run preview
```

## 2. Deploy ke GitHub + Vercel

### A. Buat repository GitHub

1. Buat repository baru di GitHub bernama `bimata-business-connectivity`.
2. Disarankan set sebagai **Private** agar source code tidak terbuka untuk publik. Website yang berhasil di-deploy tetap dapat dibuka melalui URL Vercel.
3. Buat repository kosong: jangan centang README, `.gitignore`, atau license di GitHub karena file sudah ada di project lokal.

### B. Push project dari komputer

Buka terminal di folder yang berisi `package.json`, lalu jalankan:

```bash
npm install
npm run build
git init
git add .
git commit -m "Initial BIMATA business connectivity website"
git branch -M main
git remote add origin https://github.com/USERNAME/bimata-business-connectivity.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub kamu. Jika Git meminta autentikasi, ikuti prompt login yang disediakan oleh Git Credential Manager/browser atau gunakan metode autentikasi GitHub yang kamu pakai. Jangan pernah menaruh password atau token di source code.

Jika repository Git sudah terhubung ke remote sebelumnya, jangan jalankan `git init` atau `git remote add origin` lagi. Periksa `git remote -v` terlebih dahulu.

### C. Hubungkan repository ke Vercel

1. Login ke Vercel menggunakan akun GitHub.
2. Pilih **Add New → Project**.
3. Import repository `bimata-business-connectivity`.
4. Pastikan konfigurasi build berikut:
   - Framework Preset: **Vite**
   - Root Directory: `./` (root repository, tempat `package.json` berada)
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Pilih **Deploy** dan tunggu build selesai. Vercel akan memberi URL publik, misalnya `https://nama-project.vercel.app`.

Vercel menggunakan `vercel.json` di project ini untuk menambahkan beberapa security headers dasar. HTTPS disediakan oleh platform Vercel.

## 3. Workflow update berikutnya

Setelah repository GitHub terhubung ke Vercel, alur normal untuk meng-update website adalah:

```bash
git add .
git commit -m "Update copy layanan BIMATA"
git push
```

Commit yang di-push ke branch production (`main`, jika itu branch production yang dikonfigurasi) akan memicu deployment production otomatis. Push ke branch lain biasanya membuat Preview Deployment sehingga perubahan bisa diperiksa dahulu sebelum masuk ke `main`.

Untuk update sederhana langsung ke website yang dilihat pengunjung, pastikan kamu sedang berada di branch `main` sebelum melakukan commit dan push. Jangan menaruh file `.env`, kredensial, token, kata sandi, atau data pelanggan ke repository.

## 4. Konfigurasi yang harus dilengkapi sebelum publikasi resmi

1. **WhatsApp:** atur `WHATSAPP_NUMBER` di `src/config/siteConfig.js` menggunakan nomor resmi BIMATA dengan format kode negara dan angka saja, tanpa `+`, spasi, atau tanda hubung.
2. **Identitas perusahaan:** verifikasi logo, nama badan usaha, alamat, email, nomor telepon, jam operasional, dan kanal resmi.
3. **Layanan dan klaim:** periksa `src/data/siteData.js`. Jangan mencantumkan harga, SLA, kecepatan, sertifikasi, jaminan availability, atau waktu pemasangan sebelum benar-benar dikonfirmasi.
4. **Coverage:** formulir menyiapkan pesan pemeriksaan lokasi; ia tidak mengecek jaringan secara otomatis dan bukan janji tersedianya layanan di seluruh wilayah Indonesia.
5. **Legal dan privasi:** lengkapi kebijakan privasi dan syarat layanan sesuai proses operasional BIMATA dan peraturan yang berlaku.
6. **Domain/SEO:** setelah domain ditentukan, perbarui `SITE_URL` di `src/config/siteConfig.js`, judul/deskripsi halaman, favicon, Open Graph image, serta sitemap/robots jika dibutuhkan.

## 5. Struktur folder

```text
src/
├── components/       # Komponen UI reusable
├── config/           # Konfigurasi brand dan kontak
├── data/             # Data konten, layanan, provinsi, topik chat
├── hooks/            # Custom React hooks
├── sections/         # Section utama halaman
└── styles/           # CSS website dan WhatsApp widget
```

## Catatan

- Website tidak memakai backend atau database.
- Formulir coverage dan konsultasi menyusun draft pesan WhatsApp; pengguna tetap harus mengirim pesan tersebut.
- React + Vite tidak otomatis menjamin aplikasi bebas dari serangan. Gunakan dependency yang terawat, perbarui paket secara berkala, jangan menaruh rahasia di frontend, dan uji build sebelum push.
