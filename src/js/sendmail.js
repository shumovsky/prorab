$("#sendMail").on('click', function() {
    let name = $("#name").val().trim();
    let phone = $("#phone").val().trim();
    let email = $("#email").val().trim();
    let message = $("#textarea").val().trim();

    if (name == '') {
        alert('Заполните все поля')
        return false;
    } else if (phone == '') {
        alert('Заполните все поля')
        return false;
    } else if (email == '') {
        alert('Заполните все поля')
        return false;
    } else if (message.length < 5) {
        alert('Заполните все поля')
        return false;
    }


    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: { 'name': name, 'phone': phone, 'email': email, 'message': message },
        dataType: 'html',
        beforeSend: function() {
            $("#sendMail").prop('disabled', true);
        },
        success: function(data) {
            if (!data) {
                alert('Возникли ошики, сообщение не отправлено!')
            } else {
                $("#form").trigger("reset");
            }

            alert(data);
            $("#sendMail").prop('disabled', false);
        }
    })
});