const projectButtonMobile = document.querySelector('.project-button');
const projectDisplayMobile = document.querySelector('.popup-project-mobile');
const closeCardButtonMobile = document.querySelector('.desktoppopxmobile');
const projectContainerMobile = document.querySelector('.projects-container');

projectButtonMobile.addEventListener('click', () => {
  projectDisplayMobile.classList.add('active');
  if (window.innerWidth <= 768) {
    projectDisplayMobile.style.display = 'block';
    projectContainerMobile.style.display = 'none';
  }
});

closeCardButtonMobile.addEventListener('click', () => {
  projectDisplayMobile.classList.remove('active');
  if (window.innerWidth <= 768) {
    projectDisplayMobile.style.display = 'none';
    projectContainerMobile.style.display = 'flex';
  } else {
    projectContainerMobile.style.display = 'grid';
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    projectContainerMobile.style.display = 'grid';
  } else {
    projectContainerMobile.style.display = 'flex';
  }
});
