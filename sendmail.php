<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

$mail = new PHPMailer();
$mail->isSMTP();                   // Отправка через SMTP
$mail->Host   = 'smtp.mail.ru';  // Адрес SMTP сервера
$mail->SMTPAuth   = true;          // Enable SMTP authentication
$mail->Username   = 'd.shumovsky';       // ваше имя пользователя (без домена и @)
$mail->Password   = 'molOko-poschada-6igor';    // ваш пароль
$mail->SMTPSecure = 'ssl';         // шифрование ssl
$mail->Port   = 465;               // порт подключения
 
$mail->setFrom('d.shumovsky@bk.ru', 'Иван Иванов');    // от кого
$mail->addAddress('test@ya.ru', 'Вася Петров'); // кому
 
$mail->Subject = 'Тест';
$mail->msgHTML("<html><body>
                <h1>Здравствуйте!</h1>
                <p>Это тестовое письмо.</p>
                </html></body>");
// Отправляем
if ($mail->send()) {
  echo 'Письмо отправлено!';
} else {
  echo 'Ошибка: ' . $mail->ErrorInfo;
}



$to = "d.shumovsky@bk.ru"; /* Адрес, куда отправляем письма*/
$subject = "Письмо с обратной связи"; /*Тема письма*/
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: <test@mail.ru>\r\n";/*ОТ КОГО*/

/*ВО ВНУТРЬ ПЕРЕМЕННОЙ $message ЗАПИСЫВАЕМ ДАННЫЕ ИЗ ПОЛЕЙ */
$message .= "Имя пользователя: ".$name."\n";
$message .= "Населенный пункт: ".$city."\n";
$message .= "Телефон: ".$phone."\n";

mail ($to, $subject, $message, $headers)
?>