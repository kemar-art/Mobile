const menuIcon = document.querySelector('.menuIcon');
const menu = document.querySelector('.menu-list');
const barras = document.querySelectorAll('.menuIcon div');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
  barras.forEach((child) => {child.classList.toggle('animated'); });
});