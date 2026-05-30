# Aplikasi Contact Management Frontend

Aplikasi frontend untuk sistem manajemen kontak yang dibangun menggunakan **React.js** dan **Vite**. Aplikasi ini memungkinkan pengguna untuk mengelola data kontak secara mudah dan efisien melalui antarmuka web yang responsif dan modern.

## Fitur Utama

* Autentikasi Pengguna (Login dan Logout)
* Manajemen Kontak (Tambah, Lihat, Ubah, dan Hapus)
* Detail Kontak
* Manajemen Alamat Kontak
* Validasi Formulir
* Integrasi RESTful API
* Notifikasi dan Konfirmasi Aksi
* Antarmuka Responsif

## Teknologi yang Digunakan

### Frontend

* React.js
* Vite
* React Router
* Axios
* React Use
* SweetAlert2

### Tools Pengembangan

* ESLint
* npm

## Struktur Proyek

```text
src/
├── assets/           # Berkas statis (gambar, ikon, dll)
├── components/       # Komponen yang dapat digunakan kembali
├── pages/            # Halaman aplikasi
├── routes/           # Konfigurasi routing
├── lib/
│   ├── api/          # Service untuk komunikasi API
│   └── alert.js      # Utilitas notifikasi dan konfirmasi
├── App.jsx
└── main.jsx
```

## Persyaratan Sistem

Sebelum menjalankan aplikasi, pastikan telah terinstal:

* Node.js versi 20 atau lebih baru
* npm versi terbaru

## Instalasi

Clone repository:

```bash
git clone <url-repository>
cd contact-management-frontend
```

Install seluruh dependency:

```bash
npm install
```

## Konfigurasi Environment

Buat file `.env` pada root project:

```env
VITE_API_URL=http://localhost:3000/api
```

Sesuaikan nilai `VITE_API_URL` dengan alamat backend yang digunakan.

## Menjalankan Aplikasi

Jalankan mode pengembangan:

```bash
npm run dev
```

Aplikasi dapat diakses melalui browser pada alamat:

```text
http://localhost:5173
```

## Build untuk Produksi

Membuat build produksi:

```bash
npm run build
```

Melakukan preview hasil build:

```bash
npm run preview
```

## Integrasi API

Aplikasi ini terhubung dengan backend melalui RESTful API untuk melakukan operasi pengelolaan kontak.

Contoh endpoint yang digunakan:

```http
GET    /api/contacts
POST   /api/contacts
PUT    /api/contacts/{id}
DELETE /api/contacts/{id}
```

## Autentikasi

Sistem autentikasi menggunakan token yang disimpan pada Local Storage browser. Token akan digunakan secara otomatis pada setiap permintaan ke API yang memerlukan otorisasi.

## Tampilan Aplikasi

Tambahkan screenshot aplikasi pada folder berikut:

```text
docs/
├── login.png
├── dashboard.png
├── contact-list.png
├── contact-detail.png
└── contact-form.png
```

Kemudian tampilkan pada README:

```markdown
## Halaman Login

<img width="1366" height="633" alt="ScreenShot Tool -20260530220324" src="https://github.com/user-attachments/assets/e55a5938-ea56-4c12-8b0b-73447bd6fb74" />

## Daftar Kontak
<img width="1351" height="1844" alt="ScreenShot Tool -20260530220346" src="https://github.com/user-attachments/assets/88506442-cd77-41b1-8a66-b0bb2b99b5aa" />

```

## Script yang Tersedia

```bash
npm run dev      # Menjalankan aplikasi dalam mode development
npm run build    # Membuat build produksi
npm run preview  # Melihat hasil build produksi
npm run lint     # Menjalankan pemeriksaan kode dengan ESLint
```

## Backend

Aplikasi frontend ini membutuhkan layanan backend REST API untuk beroperasi.

Backend Express Js (Node Js)

```text
https://github.com/yohan20-coder/Restfull-Api-Aplikasi-Data-Kontak-Dengan-Nodejs-dan-Express-Js
```

## Kontributor

* Nama Pengembang : Yohanes Ardianus Wee

## Lisensi

Proyek ini dibuat untuk tujuan pembelajaran dan pengembangan perangkat lunak.
