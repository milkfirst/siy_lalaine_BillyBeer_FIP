<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set recipient email address
    $to = 'lalaine.ellie@gmail.com';

    // Set email subject
    $subject = 'New Message from ' . $name;

    // Set email message
    $message = "
        <html>
        <head>
          <title>New Message from $name</title>
        </head>
        <body>
          <p>Name: $name</p>
          <p>Email: $email</p>
          <p>Message: $message</p>
        </body>
        </html>
    ";

    // Set email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/html\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Error: Message not sent.";
    }
}
?>
