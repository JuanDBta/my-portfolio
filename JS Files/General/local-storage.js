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