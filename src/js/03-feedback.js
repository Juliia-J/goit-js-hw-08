import throttle from "lodash.throttle";

const refs = {
  form: document.querySelector(".feedback-form"),
  email: document.querySelector(".feedback-form input"),
  textarea: document.querySelector(".feedback-form textarea"),   
};

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onFormInput, 500));

const feedbackForm = localStorage.getItem('feedback-form-state')
  ? JSON.parse(localStorage.getItem('feedback-form-state')) : {};

saveInformation()  

function onFormInput(evt) {
  feedbackForm[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));
}

function onFormSubmit(evt) {
  if (!refs.email.value || !refs.textarea.value)
    return;
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(feedbackForm);
}

function saveInformation(evt) {
  if (!localStorage.getItem('feedback-form-state'))
    return;
  const savedMessage = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedMessage) {
    if (savedMessage.email) {
      refs.email.value = savedMessage.email;
    };

    if (savedMessage.message) {
      refs.textarea.value = savedMessage.message;
    }
  }
}
