const menuButton = document.getElementById('menu-button');
const navBar = document.querySelector('.nav-bar');
const closeButton = document.getElementById('closex');
const header = document.querySelector('header');
const links = document.querySelectorAll('.title-bar li a');

function closeMenu() {
  navBar.classList.remove('active');
  header.style.display = window.innerWidth <= 768 ? 'block' : 'none';
}

menuButton.addEventListener('click', () => {
  navBar.classList.add('active');
  if (window.innerWidth <= 768) {
    header.style.display = 'none';
  }
});

closeButton.addEventListener('click', closeMenu);

window.addEventListener('resize', () => {
  closeMenu();
});

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = link.getAttribute('href');
    const targetElement = document.querySelector(target);
    const navHeight = window.innerWidth * 0.18;
    const targetPosition = targetElement.offsetTop - navHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'auto',
    });
    closeMenu();
  });
});
