const projectButton = document.querySelector('.project-button');
const projectDisplay = document.querySelector('.popup-desktop');
const closeCardButton = document.querySelector('.desktoppopx');
const projectContainer = document.querySelector('.projects-container');

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

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    projectContainerMobile.style.display = 'grid';
  } else {
    projectContainerMobile.style.display = 'flex';
  }
});

