<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);


// $mail->setForm('zayvka.pancher@gmail.com', 'Заявка с сайта');

$mail -> addAddress ('zayvka.pancher@gmail.com', 'd.shumovsky@bk.ru');

$mail->Subject = 'Заявка с пришла';

$body = '<h1>Встречай</h1>';
if(trim(!empty($_POST['name']))){
$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['mail']))){
    $body.='<p><strong>E-mail:</strong> '.$_POST['mail'].'</p>';
}
if(trim(!empty($_POST['message']))){
    $body.='<p><strong>E-mail:</strong> '.$_POST['message'].'</p>';
}

$mail->Body = $body;

if(!$mail->send()){
    $message = 'Ошибка';
}
else{
    $message = 'Данные отправлены';
}

$response = ['message' => $message];
header('Content-type: application/json');
echo json_encode($response);

?>