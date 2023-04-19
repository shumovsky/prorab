// Form;

const form = () => {
  const forms = document.querySelector('#form');
  console.log(forms);
  const message = {
    loading: 'Загрузка',
    success: 'Успешно',
    failure: 'Ошибка',
  };

  forms.forEach((item) => {
    postData(item);
  });

  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.textContent = message.loading;
      form.append(statusMessage);

      const recquest = new XMLHttpRequest();
      recquest.open('POST', 'mail.php');

      recquest.setRequestHeader('Contetn-type', 'multipart/form-data');
      const formData = new FormData(form);

      recquest.send(formData);

      recquest.addEventListener('load', () => {
        if (recquest.status == 200) {
          console.log(recquest.response);
          statusMessage.textContent = message.success;
          form.reset();
        } else {
          statusMessage.textContent = message.failure;
        }
      });
    });
  }
};

form();
