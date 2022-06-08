const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.email.addEventListener("input", saveInformation);
// refs.textarea.addEventListener("input", saveInformation);

function onFormSubmit(evt) {}
evt.preventDefault();
console.log('Відправляємо форму');

function saveInformation(evt) {

    const message = evt.currentTarget.value;
    console.log(message);
  localStorage.setItem('feedback-form-state', message);
//   localStorage.setItem('LOCALSTORAGE_KEY', message.value);
  updateOutput();
  form.reset();
}
