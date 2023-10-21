<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$company = $_POST['company'];
$category = $_POST['category'];
$subcategory = $_POST['subcategory'];
$description = $_POST['description'];
$budget = $_POST['budget'];

// Handle file uploads
if (isset($_FILES['file'])) {
    $fileCount = count($_FILES['file']['name']);
    
    for ($i = 0; $i < $fileCount; $i++) {
        $fileName = $_FILES['file']['name'][$i];
        $fileTmpName = $_FILES['file']['tmp_name'][$i];
        // You can move the uploaded file to a directory on your server
        // For example, to a folder named "uploads"
        move_uploaded_file($fileTmpName, 'uploads/' . $fileName);
    }
}

// Continue with the email sending code
// Email address where you want to send the details
$to = "smv12es@gmail.com";

// Subject of the email
$subject = "New Form Submission";

// Compose the email message
$message = "Name: $name\n";
$message .= "Email: $email\n";
$message .= "Phone: $phone\n";
$message .= "Company: $company\n";
$message .= "Category: $category\n";
$message .= "Subcategory: $subcategory\n";
$message .= "Description: $description\n";
$message .= "Budget: $budget\n";

// Additional headers
$headers = "From: $email\r\n";

// Send the email
if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully!";
} else {
    
    echo "Email could not be sent: " . error_get_last()['message'];
}


?>
