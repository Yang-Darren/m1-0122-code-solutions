var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', clicked);

function clicked(event) {
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.target && event.target.nodeName === 'BUTTON') {
    event.target.closest('.task-list-item').remove();
  }
}
