const menuButton = document.getElementById('menu-button');
const navBar = document.querySelector('.nav-bar');
const closeButton = document.getElementById('closex');
const header = document.querySelector('header');
const links = document.querySelectorAll('.title-bar li a');

menuButton.addEventListener('click', () => {
  navBar.classList.add('active');
  if (window.innerWidth <= 768) {
    header.style.display = 'none';
  }
});

closeButton.addEventListener('click', () => {
  navBar.classList.remove('active');
  if (window.innerWidth <= 768) {
    header.style.display = 'block';
  } else {
    header.style.display = 'none';
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    header.style.display = 'block';
  } else {
    header.style.display = 'none';
  }
});

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = link.getAttribute('href');
    const targetElement = document.querySelector(target);
    const navHeight = document.querySelector('.nav-bar').offsetHeight;
    const targetPosition = targetElement.offsetTop - navHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
    navBar.classList.remove('active');
    header.style.display = 'block';
  });
});
