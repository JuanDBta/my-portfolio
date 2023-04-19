const menuProjects = document.createElement('div');
menuProjects.classList.add('menu-projects');

const backgroundProjects = document.createElement('div');
backgroundProjects.classList.add('background-projects');
const imgProjects = document.createElement('img');
imgProjects.setAttribute('src', 'Images SVG/Projects2.svg');
backgroundProjects.appendChild(imgProjects);


const projectsTitle = document.createElement('h3');
projectsTitle.classList.add('projects-title');
projectsTitle.textContent = 'Project names goes here';


const menuLanguages = document.createElement('ul');
menuLanguages.classList.add('menu-languages');

const htmlCss = document.createElement('li');
htmlCss.classList.add('language-button');
htmlCss.textContent = 'HTML/CSS';

const rubyRails = document.createElement('li');
rubyRails.classList.add('language-button');
rubyRails.textContent = 'Ruby on Rails';

const javascript = document.createElement('li');
javascript.classList.add('language-button');
javascript.textContent = 'JavaScript';

menuLanguages.appendChild(htmlCss);
menuLanguages.appendChild(rubyRails);
menuLanguages.appendChild(javascript);


const projectButton = document.createElement('button');
projectButton.setAttribute('type', 'button');
projectButton.classList.add('project-button');
projectButton.textContent = 'See this project';
const imgArrow = document.createElement('img');
imgArrow.setAttribute('src', 'Images SVG/ic_arrow_right.svg');
projectButton.appendChild(imgArrow);


menuProjects.appendChild(backgroundProjects);
menuProjects.appendChild(projectsTitle);
menuProjects.appendChild(menuLanguages);
menuProjects.appendChild(projectButton);


const parentElement = document.querySelector('.project-container');
parentElement.appendChild(menuProjects);

const parentElement = document.querySelectorAll('.project-container')[0];
parentElement.appendChild(menuProjects);
