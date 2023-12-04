function startCollaboration() {
    const contactSection = document.getElementById('Contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

const startIntroButton = document.getElementById('start-intro');
startIntroButton.addEventListener('click', startCollaboration);