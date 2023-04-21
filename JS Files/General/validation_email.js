const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const errorMsg = document.createElement('p');

errorMsg.textContent = 'Please enter a lower case email address.';
errorMsg.classList.add('error-msg');
errorMsg.style.display = 'none';
errorMsg.style.color = 'red';
errorMsg.style.fontFamily = 'Poppins';
errorMsg.style.fontSize = '3vw';
errorMsg.style.marginLeft = '5vw';
emailInput.parentNode.appendChild(errorMsg);

const errorMsgText = 'Please enter a lower case email address';
const errorMsgTextDesktop = 'Please enter a lower case email address';

function updateErrorMsgStyle() {
  if (window.matchMedia('(min-width: 768px)').matches) {
    errorMsg.textContent = errorMsgTextDesktop;
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

form.addEventListener('submit', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    event.preventDefault();
    errorMsg.style.display = 'block';
  } else {
    errorMsg.style.display = 'none';
  }
});
