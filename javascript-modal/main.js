var $modalButton = document.querySelector('#modal');
var $popUp = document.querySelector('#pop');
var $survey = document.querySelector('#survey');
var $closePopup = document.querySelector('#close');
var ads = 0;

$modalButton.addEventListener('click', surveyPop);
$closePopup.addEventListener('click', surveyPop);

function surveyPop(event) {
  if (ads === 0) {
    $popUp.className = 'modal-cover';
    $survey.textContent = 'Would you like to take a survey?';
    $closePopup.textContent = 'NO';
    ads = 1;
  } else {
    $popUp.className = 'hidden';
    ads = 0;
  }
}
