function startCollaboration() {
    const contactSection = document.getElementById('Contact');
    const additionalVW = 7;
    const additionalPixels = window.innerWidth * (additionalVW / 100);
    const targetPosition = contactSection.offsetTop - additionalPixels;
    window.scrollTo({
      top: targetPosition,
      behavior: 'auto',
    });
  }
  
  const startIntroButton = document.getElementById('start-intro');
  startIntroButton.addEventListener('click', startCollaboration);
  