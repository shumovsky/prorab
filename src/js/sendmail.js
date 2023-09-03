const forms = document.querySelectorAll('form');

function postData(form) {
  form.addEventListener('submit', (e) => {
    e.eventPreventDefault();
  });
}
