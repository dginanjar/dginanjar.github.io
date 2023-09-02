document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.remove('dark')
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  }

  let lightBtn = document.getElementById('light-btn')
  let darkBtn = document.getElementById('dark-btn')
  if (lightBtn === null || darkBtn === null) return

  lightBtn.addEventListener('click', () => {
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark')
  })

  darkBtn.addEventListener('click', () => {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
  })
})