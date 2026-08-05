# Desa Wisata Sigaol Simbolon — Jekyll Site

Website desa wisata dibangun dengan [Jekyll](https://jekyllrb.com/)

## Menjalankan secara lokal

```bash
bundle install
bundle exec jekyll serve
```

Lalu buka `http://localhost:4000` di browser.

## Struktur

```
_config.yml         # Data desa (jumlah penduduk, luas, dll) & daftar destinasi wisata
_layouts/default.html
index.html           # Halaman utama (hero, tentang desa, destinasi populer)
assets/css/main.css  # Semua styling
assets/js/main.js    # Animasi fade-in sederhana
assets/images/       # Foto-foto (diambil dari desain yang diunggah)
```

## Mengedit konten

- **Statistik desa & daftar destinasi**: edit `_config.yml`.
- **Teks "Tentang Desa"**: edit langsung di `index.html`.
- **Foto destinasi**: ganti file di `assets/images/` dengan nama yang sama, atau tambahkan
  entri baru di `_config.yml` bagian `destinations` dengan path gambar baru.
- **Warna & tipografi**: variabel warna ada di bagian atas `assets/css/main.css` (`:root`).

## Menambah destinasi baru

Tambahkan item baru ke `destinations` di `_config.yml`:

```yaml
destinations:
  - title: "Nama Destinasi"
    image: /assets/images/nama-file.jpg
    description: "Deskripsi singkat."
```

Grid akan otomatis menyesuaikan.
