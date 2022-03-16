var $submitForm = document.forms[0];

function submitForm(event) {
  event.preventDefault();
  var formValues = {};
  formValues.name = $submitForm.name.value;
  formValues.email = $submitForm.email.value;
  formValues.message = $submitForm.message.value;
  console.log(formValues);
  $submitForm.reset();
}

$submitForm.addEventListener('submit', submitForm);
