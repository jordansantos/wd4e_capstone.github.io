const formContact = document.querySelector('.form_contact');
const submitButton = document.querySelector('input[type="button"]');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

submitButton.addEventListener('click', () => {
  let formIsValid = true;

  function validateField(inputElement) {
    if (inputElement.value.trim() === '') {
      inputElement.classList.add('invalid');
      formIsValid = false;
    } else {
      inputElement.classList.remove('invalid');
    }
  }

  validateField(nameInput);
  validateField(emailInput);
  validateField(messageInput);

  if (formIsValid) {
    alert('Message sent successfully!');
  }
});