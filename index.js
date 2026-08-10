// // Tokners landing page — minimal UI behaviour only.
// // No wallet / auth logic here by design (static UI per current scope).

// document.addEventListener('DOMContentLoaded', () => {
//   const toggle = document.querySelector('.nav-toggle');
//   const nav = document.querySelector('.main-nav');

//   if (!toggle || !nav) return;

//   toggle.addEventListener('click', () => {
//     const isOpen = nav.classList.toggle('main-nav--open');
//     toggle.setAttribute('aria-expanded', String(isOpen));
//   });
// });