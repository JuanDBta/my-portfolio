function storeFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comments = document.getElementById('contact-description').value;
  
    const formData = {
      name,
      email,
      comments,
    };
  
    localStorage.setItem('formData', JSON.stringify(formData));
  }

  const nameInput = document.getElementById('name');
const emailInputt = document.getElementById('email');
const commentsInput = document.getElementById('contact-description');

nameInput.addEventListener('change', storeFormData);
emailInputt.addEventListener('change', storeFormData);
commentsInput.addEventListener('change', storeFormData);
