<?php 
 $phone = $_POST['phone'];
 $name = $_POST['name'];
 $email = $_POST['email'];
 $message = $_POST['message'];

//  $subject = '=?utf-8?B?'.base64_encode("Сообщение с сайта")'?=';
//   $headers = 'From: $email\r\nReply-to: $email\r\nContent-type: tetx/html; charset=utf-8\r\n'; 

//  $saccess = mail('d.shumovsky@bk.ru', $subject, $message, $headers);


//  echo var_dump($_POST);

// $name = $_POST["name"];
// $city = $_POST["city"];
// $phone = $_POST["phone"];

// echo var_dump($phone);


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