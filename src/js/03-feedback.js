const refs = {
    form: document.querySelector(".feedback-form"),
  email: document.querySelector(".feedback-form input"),
  textarea: document.querySelector(".feedback-form textarea"),   
};

refs.form.addEventListener("submit", onFormSubmit);
refs.email.addEventListener("input", saveInformation);
refs.textarea.addEventListener("input", saveInformation);

function onFormSubmit(evt){
  evt.preventDefault();
  console.log('Відправляємо форму');
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}


function saveInformation(evt) {
    const message = evt.currentTarget.value;
    console.log(message);
  localStorage.setItem('feedback-form-state', message);
}

function popylateText() {
  const savedText = localStorage.getItem('feedback-form-state');

  if (savedText) {
    console.log(savedText);
    refs.email.value = savedText;
    refs.textarea.value = savedText;
  }
}
