---
title: 'Memulai project Vite dan Tailwind'
date: 2023-09-04
---
Kita mulai dengan menjalankan perintah berikut di terminal.

```shell
$ npm create vite@latest foo
$ cd foo
$ npm install
```

![Membuat project Vite](/membuat-project-vite-dan-tailwind/membuat-project-vite.png)

Kita akan mendapatkan struktur folder dan beberapa file. Hapus file `counter.js`, `javascript.svg`, `main.js` dan `style.css`.

Selanjutnya download beberapa package yang dibutuhkan.

```shell
$ npm i -D tailwindcss postcss postcss-import autoprefixer
```

Nantinya kita ingin memiliki struktur folder sebagai berikut.

```
/path/to/foo
|
+-- src/
|   |
|   +-- css/app.css
|   +-- js/app.js
|
+-- public/
|  |
|  +-- vite.svg
|
+-- package.json
+-- vite.config.js
+-- tailwind.config.js
+-- postcss.config.js
+-- index.html
```

Ada tiga file konfigurasi yang harus dibuat yaitu `vite.config.js`, `tailwind.config.js` dan `postcss.config.js`.

```shell
$ touch vite.config.js
$ npm tailwindcss init -p
```

Selanjutnya buka file `vite.config.js` dan tambahkan kode berikut.

```javascript
import { defineConfig } from 'vite'

export default defineConfig({
  server: { host: '0.0.0.0' },
  build: {
    emptyOutDir: false,
    manifest: true,
    rollupOptions: { input: resolve(__dirname, 'src/js/app.js') }
  },
})
```

Sedangkan untuk file `tailwind.config.js` kita hanya perlu mengubah bagian `content` saja.

```javascript
content: ['index.html']
```

Dan untuk file `postcss.config.js` kita hanya perlu menambahkan 2 plugin saja sehingga isinya seperti berikut.

```javascript
plugins: {
  'postcss-import': {},
  'tailwindcss/nesting': {},
  tailwindcss: {},
  autoprefixer: {},
}
```

Untuk file `index.html` kita hanya perlu mengupdate atribut `src` di `<script>` menjadi seperti berikut.

```html
<script type="module" src="/src/js/app.js"></script>
```

Masih ada 2 file lagi yang harus kita buat yaitu `src/css/app.css` dan `src/js/app.js`.

Untuk `app.css`.

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

Sedangkan untuk `app.js`.

```javascript
import '../css/app.css`
```

Untuk menjalankan server Vite buka terminal dan jalankan perintah berikut.

```shell
$ npm run dev
```

Selanjutnya kita bisa buka browser dan mengarahkan ke alamat `http://localhost:1573`.
