<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="Contact Portfolio Emma Tremlet"
    content="Contact depuis le portfolio de développeuse web contenant les différents projets réalisés par Emma Tremlet">
  <link rel="stylesheet" href="style.css">
  <link rel="icon" href="/favicon.ico">
  <link rel="shortcut icon" type="'image/x.icon" href="./Images/favicon.ico">

  <title>Contact depuis Portfolio Emma TREMLET</title>
</head>

    <body>
        <?php
            // if (isset($_POST['comments'])) {
            //     $entete  = 'MIME-Version: 1.0' . "\r\n";
            //     $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
            //     $entete .= '' . "\r\n";
            //     $entete .= 'Reply-to: ' . $_POST['email'];

            //     $message = '<h1>Message envoyé depuis la page Contact de monportfolio.fr</h1>
            //     <p>
            //     <b>Nom : </b>' . $_POST['last-name'] . '<br>
            //     <b>Prénom : </b>' . $_POST['first-name'] . '<br>
            //     <b>Email : </b>' . $_POST['email'] . '<br>
            //     <b>Message : </b>' . htmlspecialchars($_POST['comments']) . '</p>';

            //     $retour = mail('emmatremlet20@gmail.com', 'Envoi depuis page Contact', $message, $entete);
            //     if($retour)
            //         echo '<p>Votre message a bien été envoyé.</p>';
            // }

              /*Envoi du mail*/
              if (isset($_POST['comments'])) {
              $nom = trim($_POST['last-name']);
              $prenom = trim($_POST['first-name']);
              $mail = trim($_POST['email']);
              $object = trim($_POST['object']);
              $message = trim($_POST['comments']);

              /*Le destinataire*/
              $to="emmatremlet20@gmail.com";

              /*Le sujet du message qui apparaitra*/
              $sujet="Message depuis le site de mon portfolio";
              $msg = '';
              /*Le message en lui même*/

              $msg .= 'Nom : '.$nom."rnrn";
              $msg .= 'Prenom : '.$prenom."rnrn";
              $msg .= 'Mail : '.$mail."rnrn";
              $msg .= 'Motif : '.$object."rnrn";
              $msg .= 'Message : '.$message."rnrn";
              /*Les en-têtes du mail*/
              $headers = ''."rn";
              $headers .= "rn";
              /*L'envoi du mail*/
              mail($to, $sujet, $msg, $headers);
              }
              ?>
    </body>
</html>