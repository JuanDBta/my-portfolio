const projectButton = document.querySelector('.project-button');
const projectDisplay = document.querySelector('.popup-desktop');
const closeCardButton = document.querySelector('.desktoppopx');
const projectContainer = document.querySelector('.projects-container');
const projectButtonMobile = document.querySelector('.project-button');
const projectDisplayMobile = document.querySelector('.popup-mobile');
const closeCardButtonMobile = document.querySelector('.desktoppopxmobile');
const projectContainerMobile = document.querySelector('.projects-container');

projectButton.addEventListener('click', () => {
  projectDisplay.classList.add('active');
  if (window.innerWidth >= 768) {
    projectDisplay.style.display = 'block';
    projectContainer.style.display = 'none';
  }
});

closeCardButton.addEventListener('click', () => {
  projectDisplay.classList.remove('active');
  if (window.innerWidth >= 768) {
    projectDisplay.style.display = 'none';
    projectContainer.style.display = 'grid';
  } else {
    projectContainer.style.display = 'flex';
  }
});

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

