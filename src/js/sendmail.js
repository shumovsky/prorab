const form = () => {
  const forms = document.querySelector('form');

  const message = {
    loading: 'Загрузка',
    success: 'Успешно',
    failure: 'Ошибка',
  };

  forms.addEventListener('submit', (e) => {
    e.preventDefault();

    const statusMessage = document.createElement('div');
    statusMessage.textContent = message.loading;
    forms.append(statusMessage);

    const recquest = new XMLHttpRequest();
    recquest.open('POST', 'mail.php');

    recquest.setRequestHeader('Contetn-type', 'multipart/form-data');
    const formData = new FormData(forms);

    recquest.send(formData);

    recquest.addEventListener('load', () => {
      if (recquest.status == 200) {
        console.log(recquest.response);
        statusMessage.textContent = message.success;
        forms.reset();
      } else {
        statusMessage.textContent = message.failure;
      }
    });
  });
};

form();
