<?php 
 $phone = $_POST['phone'];
 $name = $_POST['name'];
 $email = $_POST['email'];
 $message = $_POST['message'];

 $subject = '=?utf-8?B?'.base64_encode("Сообщение с сайта")'?=';
  $headers = 'From: $email\r\nReply-to: $email\r\nContent-type: tetx/html; charset=utf-8\r\n'; 

 $saccess = mail('d.shumovsky@bk.ru', $subject, $message, $headers);
?>