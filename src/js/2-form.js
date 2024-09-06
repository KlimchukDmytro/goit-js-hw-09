console.log("Form");

let formData = { email: "", message: "" };

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

function saveToLocalStorage() {
  formData.email = emailInput.value;
  formData.message = messageInput.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFromLocalStorage() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
}

form.addEventListener('input', saveToLocalStorage);

document.addEventListener('DOMContentLoaded', loadFromLocalStorage);

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  if (emailInput.value === "" || messageInput.value === "") {
    alert("Fill please all fields");
  } else {
    console.log(formData); 
    localStorage.removeItem('feedback-form-state'); 
    form.reset(); 
    formData = { email: "", message: "" }; 
  }
});
