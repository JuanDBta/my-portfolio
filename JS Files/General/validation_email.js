const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const submitBtn = document.querySelector('#contact-button button');
const errorMsg = document.createElement('p');
errorMsg.textContent = 'Please enter a lower case email address.';
errorMsg.classList.add('error-msg');
errorMsg.style.display = 'none';
emailInput.parentNode.appendChild(errorMsg);
errorMsg.style.display = 'none';

function updateErrorMsgStyle() {
  if (window.matchMedia('(min-width: 769px)').matches) {
    errorMsg.textContent = errorMsgTextLargeScreen;
    errorMsg.style.fontSize = '0.8vw';
    errorMsg.style.marginLeft = '1vw';
  } else {
    errorMsg.textContent = errorMsgText;
    errorMsg.style.fontSize = '3vw';
    errorMsg.style.marginLeft = '5vw';
  }
}

updateErrorMsgStyle();

window.addEventListener('resize', updateErrorMsgStyle);
