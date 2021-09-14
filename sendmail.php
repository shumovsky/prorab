<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('d.shumovsky@bk.ru', 'Mailer');

$mail->addAddress('d.shumovsky@gmail.com', 'Joe User'); 


$mail->Subject = 'Привет';

$body = '<h2>Заявка</h2>';

$mail->Body = $body;

if(!$mail->send()){
  $message = 'Ошибка';
}else{
  $message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>