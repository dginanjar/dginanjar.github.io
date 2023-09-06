---
title: 'Membuat plugin untuk Tailwind'
date: 2023-09-05
description: 'Membuat plugin untuk Tailwind dengan contoh menambahkan custom variant'
---
Setelah [project Vite](/memulai-project-vite-dan-tailwind) selesai dibuat kita akan membuat sebuah plugin untuk Tailwind dengan contoh kasus membuat custom variant.

Buat sebuah file `src/js/plugin.js` dan isi kode berikut.

```javascript
const plugin = require('tailwindcss/plugin')

module.exports = plugin(({addVariant}) => {
  addVariant('expand', '[data-expand=true] > &')
})
```

Ini berarti kita menambahkan variant Tailwind baru dg nama `expand`. Jika variant `hover` mengatur jika sebuah elemen mendapatkan mouseover maka di sini kondisinya adalah `[data-expand=true] > &` yang artinya sebuah elemen memiliki parent dengan atribut `data-expand="true"`.

Buka file `tailwind.config.js` dan tambahkan plugin yang sudah dibuat.

```javascript
plugins: [
    require('./src/js/plugin')
]
```

Untuk mengetes, tambahkan kode HTML berikut.

```html
<div data-expand="true">
    <div class="hidden expand:block">First Example</div>
</div>

<div>
    <div class="hidden expand:block">Second Example</div>
</div>
```
