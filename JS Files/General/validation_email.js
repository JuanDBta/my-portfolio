const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const submitBtn = document.querySelector('#contact-button button');
const errorMsg = document.createElement('p');
errorMsg.textContent = 'Please enter a lower case email address.';
errorMsg.classList.add('error-msg');
errorMsg.style.display = 'none';
emailInput.parentNode.appendChild(errorMsg);
errorMsg.style.display = 'none';
