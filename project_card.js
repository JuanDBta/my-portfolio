const projectButton = document.querySelector('.project-button');
const projectDisplay = document.querySelector('.popup-desktop');
const closeCardButton = document.querySelector('.desktoppopx');
const projectContainer = document.querySelector('.projects-container');

projectButton.addEventListener('click', () => {
  projectDisplay.classList.add('active');
  if (window.innerWidth >= 768) {
    projectContainer.style.display = 'none';
  }
});

closeCardButton.addEventListener('click', () => {
  projectDisplay.classList.remove('active');
  if (window.innerWidth >= 768) {
    projectContainer.style.display = 'block';
  } else {
    projectContainer.style.display = 'none';
  }
});
