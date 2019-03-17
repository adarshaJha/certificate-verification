<?php

define('AWS_KEY', 'AKIAJMGLQGOTU4Q7734Q');
define('AWS_SECRET_KEY', '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');
define('HOST', 'https://s3.amazonaws.com');
define('REGION', 'us-east-2');

// require the AWS SDK for PHP library
require 'vendor/autoload.php';

use Aws\S3\S3Client;

// Establish connection with DreamObjects with an S3 client.
$client = new Aws\S3\S3Client([
    'version'     => '2006-03-01',
    'region'      => REGION,
    'endpoint'    => HOST,
        'credentials' => [
        'key'      => AWS_KEY,
        'secret'   => AWS_SECRET_KEY,
    ]
]);


$client->getObject(array(
    'Bucket' => 'certiloadbucket',
    'Key'    => 'XAT007349.pdf',
    'SaveAs' => 'C:\xampp\htdocs\certificate-verification\try.pdf'
));


?>

