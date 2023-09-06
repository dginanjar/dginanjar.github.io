---
title: 'Membuat plugin untuk Tailwind'
date: 2023-09-05
draft: true
---
Setelah project Vite selesai dibuat kita akan membuat sebuah plugin untuk Tailwind. Plugin ini diberi nama `@damien/dropdown`.

```shell
cd /path/to/Project
mkdir -p src/plugins/@damien/dropdown/
npm init -y
```

Buka dan ubah `package.json` yang baru dibut dan pastikan properti `main` mengarah ke `src/index.js`.

```json
"name": "@damien/dropdown",
"main": "src/index.js",
```

Selanjutnya buat struktur folder berikut.

```
/path/to/Project/src/plugins/@damien/dropdown
|
+-- src/
|   +-- components/
|   |   |
|   |   +-- dropdown.js
|   |
|   +-- index.js
|
+-- package.json
+-- plugin.js
```

## Plugin

Isi file `plugin.js`.

```javascript
const plugin = require('tailwindcss/plugin')

module.exports = plugin(({addVariant}) => {
  addVariant('dropdown-show', '[data-dropdown=show] > &')
})
```

Sampai di sini plugin sudah selesai tapi kita lanjut dengan membuat komponen dropdown.

## Komponen Dropdown

Isi file `src/components/dropdown.js`.

```javascript
class Dropdown {
  init() {
    document.querySelectorAll('.dropdown').forEach((dropdownContainer) => {
      const dropdownBtn = dropdownContainer.querySelector('[data-toggle=dropdown]')
      const dropdownContent = dropdownContainer.querySelector('.dropdown-content')
      if (dropdownBtn === null || dropdownContent === null) return

      dropdownBtn.addEventListener('click', () => {
        if ("show" in dropdownContainer.dataset) {
          dropdownContainer.removeAttribute('data-dropdown')
        } else {
          dropdownContainer.dataset.dropdown = "show"
        }
      })
    })
  }
}

window.Dropdown = new Dropdown()
document.addEventListener('load', window.Dropdown.init())
```

## Instalasi plugin

Di folder project jalankan perintah npm untuk memasang plugin.

```shell
cd /path/to/project
npm i -D src/plugins/@damien/dropdown
```

Buka file `tailwind.config.js` dan tambahkan plugin yang sudah dibuat.

```javascript
plugins: [
    require('@kanjut/burut/plugin')
]
```

## Tes komponen Dropdown

Buat file `dropdown.html`.

```html
<div class="dropdown">
    <button data-toggle="dropdown">Dropdown</button>
    <div class="dropdown-content hidden dropdown-show:block w-64">Dropdown Content</div>
</div>
```
