var timesClicked = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function clickCounter(event) {
  timesClicked++;
  $clickCount.textContent = 'Clicks: ' + timesClicked;

  if (timesClicked < 4) {
    $hotButton.className = 'hot-button cold';
  }

  if (timesClicked >= 4 && timesClicked < 7) {
    $hotButton.className = 'hot-button cool';
  }

  if (timesClicked >= 7 && timesClicked < 10) {
    $hotButton.className = 'hot-button tepid';
  }

  if (timesClicked >= 10 && timesClicked < 13) {
    $hotButton.className = 'hot-button warm';
  }

  if (timesClicked >= 13 && timesClicked < 16) {
    $hotButton.className = 'hot-button hot';
  }

  if (timesClicked >= 16) {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', clickCounter);
