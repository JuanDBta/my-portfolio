const header = document.querySelector('header');
const menuButton = document.getElementById('menu-button');
const navBar = document.querySelector('.nav-bar');
const closeX = document.getElementById('closex');

menuButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (navBar.style.display === 'block') {
    navBar.style.display = 'none';
    header.style.display = 'block';
  } else {
    navBar.style.display = 'block';
    header.style.display = 'none';
  }
});