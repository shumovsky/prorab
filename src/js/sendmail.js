'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidatre(form);

    let formData = new FormData(form);

    if (error === 0) {
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        form.reset();
      } else {
        alert('Ошибка');
      }
    }
  }

  function formValidatre(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      }
    }
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w)*(\.\w{2,8})+$/.test(input.value);
  }
});

// const form = () => {
//   const forms = document.querySelector('form');

//   const message = {
//     loading: 'Загрузка',
//     success: 'Успешно',
//     failure: 'Ошибка',
//   };

//   forms.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const statusMessage = document.createElement('div');
//     statusMessage.textContent = message.loading;
//     forms.append(statusMessage);

//     const recquest = new XMLHttpRequest();
//     recquest.open('POST', 'mail.php');

//     recquest.setRequestHeader('Contetn-type', 'multipart/form-data');
//     const formData = new FormData(forms);

//     recquest.send(formData);

//     recquest.addEventListener('load', () => {
//       if (recquest.status == 200) {
//         console.log(recquest.response);
//         statusMessage.textContent = message.success;
//         forms.reset();
//       } else {
//         statusMessage.textContent = message.failure;
//       }
//     });
//   });
// };

// form();
