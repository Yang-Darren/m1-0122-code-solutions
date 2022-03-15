var $bulb = document.querySelector('.bulb');
var $darkLight = document.querySelector('.container');
var onOff = 'on';

function turnOnOff(event) {
  if (onOff === 'on') {
    onOff = 'off';
  } else {
    onOff = 'on';
  }
  $bulb.className = 'bulb ' + onOff;
  $darkLight.className = 'container ' + onOff;
}

$bulb.addEventListener('click', turnOnOff);
