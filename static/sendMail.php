<?php
	$target = $_GET['target'];

	if($target == 'contato') {
		$nome  = addslashes(strip_tags($_POST['nome']));
		$email = addslashes(strip_tags($_POST['email']));
		$msg   = nl2br(addslashes(strip_tags($_POST['msg'])));

		if ($nome === "" || $email === "" || $msg === "") {
			die(header('Location: http://www.nswsolution.com/site/#sendError'));
		} else {
			
			if (!empty($_POST)) {

				$nome  = addslashes(strip_tags($_POST['nome']));
				$email = addslashes(strip_tags($_POST['email']));
				$msg   = addslashes(strip_tags($_POST['msg']));

				$mensagem = '
				<p><strong>Nome:</strong> ' . $nome . '</p>
				<p><strong>Email:</strong> ' . $email . '</p>
				<p><strong>Mensagem:</strong> ' . $msg . '</p>
			';

				require_once('http://nswsolution.com/site/includes/class.smtp.php');
				require_once('http://nswsolution.com/site/includes/class.phpmailer.php');


				$mail = new PHPMailer();
				$mail->IsSMTP(); // telling the class to use SMTP
				$mail->SMTPDebug  = 1;
				$mail->Host       = "smtp.gmail.com";  // SMTP server
				// enable SMTP authentication
				$mail->SMTPAuth   = true;
				$mail->Port       = 587; 
				// set the SMTP port for the GMAIL server
				$mail->SMTPSecure = 'tls';
				$mail->Username   = "nsws.noreplay@gmail.com";  // SMTP account username
				$mail->Password   = "NswS0lution@123";          // SMTP account password
				$mail->CharSet    = 'utf-8';


				$mail->SetFrom('nsws.noreplay@gmail.com', $nomeRem);

				$mail->AddReplyTo($email, $nome);

				$mail->Subject = 'Mensagem do site';

				$mail->MsgHTML($mensagem);

				$emailDest = 'rpessoa21@gmail.com';
				//
				$mail->AddAddress($emailDest);


				if (!$mail->Send()) {
					echo $mail->ErrorInfo;
					die();
					die(header('Location: http://www.nswsolution.com/site/#sendError'));
				} else {
					// echo 'foi?';
					die(header('Location: http://www.nswsolution.com/site/#sendSuccess'));
				}

				
			}
		}
	}


?>