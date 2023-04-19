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

$(function () {
  $('#contact').submit(function () {
    var errors = false;
    $(this).find('span').empty();
    $(this)
      .find('input, textarea')
      .each(function () {
        if ($.trim($(this).val()) == '') {
          errors = true;
          $(this)
            .next()
            .text('Не заполнено поле ' + $(this).prev().text());
        }
      });
    if (!errors) {
      var data = $('#contact').serialize();
      $.ajax({
        url: 'letter.php',
        type: 'POST',
        data: data,
        beforeSend: function () {
          $('#submit').next().text('Отправляю...');
        },
        success: function (res) {
          if (res == 1) {
            $('#contact').find('input:not(#submit), textarea').val('');
            $('#submit').next().empty();
            alert('Письмо отправлено');
          } else {
            $('#submit').next().empty();
            alert('Ошибка отправки');
          }
        },
        error: function () {
          alert('Ошибка!');
        },
      });
    }
    return false;
  });
});
