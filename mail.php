<?php 
//  $phone = $_POST['phone'];
//  $name = $_POST['name'];
//  $email = $_POST['email'];
//  $message = $_POST['message'];

// //  $subject = '=?utf-8?B?'.base64_encode("Сообщение с сайта")'?=';
// //   $headers = 'From: $email\r\nReply-to: $email\r\nContent-type: tetx/html; charset=utf-8\r\n'; 

// //  $saccess = mail('d.shumovsky@bk.ru', $subject, $message, $headers);


// //  echo var_dump($_POST);

// // $name = $_POST["name"];
// // $city = $_POST["city"];
// // $phone = $_POST["phone"];

// // echo var_dump($phone);


// $to = "d.shumovsky@bk.ru"; /* Адрес, куда отправляем письма*/
// $subject = "Письмо с обратной связи"; /*Тема письма*/
// $headers = "MIME-Version: 1.0\r\n";
// $headers .= "Content-type: text/html; charset=utf-8\r\n";
// $headers .= "From: <test@mail.ru>\r\n";/*ОТ КОГО*/

// /*ВО ВНУТРЬ ПЕРЕМЕННОЙ $message ЗАПИСЫВАЕМ ДАННЫЕ ИЗ ПОЛЕЙ */
// $message .= "Имя пользователя: ".$name."\n";
// $message .= "Населенный пункт: ".$city."\n";
// $message .= "Телефон: ".$phone."\n";

// mail ($to, $subject, $message, $headers)

if( $_POST){

    require 'phpmailer.php';
    require 'smtp.php';
    
  $mail = new PHPMailer;
  $mail->isSMTP();
  
  // Настройки
    $mail->Host = 'smtp.server.ru';
    $mail->SMTPAuth = true;
    $mail->CharSet = 'UTF-8';
    $mail->Username = 'd.shumovsky@bk.ru'; // логин от вашей почты
    $mail->Password = 'molOko-poschada-6igor'; // пароль от почтового ящика
    $mail->SMTPSecure = 'ssl';
    $mail->Port = '465';
    $mail->From = 'd.shumovsky@bk.ru'; // адрес почты, с которой идет отправка
    $mail->FromName = 'Сообщение с domain.ru'; // имя отправителя
    $mail->addAddress('info@domain.ru');
   
   // Прикрепление файлов
    for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
          $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
          $filename = $_FILES['userfile']['name'][$ct];
          if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
              $mail->addAttachment($uploadfile, $filename);
          } else {
              $msg .= 'Failed to move file to ' . $uploadfile;
          }
      }
   
  // Письмо
  $mail->isHTML(true);
  $mail->Body = "Имя: {$_POST['name']}<br> Телефон: {$_POST['nomer']}<br> Email: {$_POST['email']}<br> Сообщение: " . nl2br($_POST['body']);
  $mail->AltBody = "Имя: {$_POST['name']}\r\n Телефон: {$_POST['nomer']}\r\n Email: {$_POST['email']}\r\n Сообщение: {$_POST['body']}";
  //	$mail->SMTPDebug = 0;
  
    if( $mail->send() ){
      $answer = '1';
    }else{
      $answer = '0';
      echo 'Письмо не может быть отправлено. ';
      echo 'Ошибка: ' . $mail->ErrorInfo;
    }
    die( $answer );
  }
?>