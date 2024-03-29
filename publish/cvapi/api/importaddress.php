<?php


$config = include('config.php');
$chain = $config['chain_name'];
$address = $_POST['publicAddress'];

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_PORT => $config['port'],
  CURLOPT_URL => $config['host'],
  CURLOPT_USERPWD => $config['user'].":".$config['pass'],
  CURLOPT_HTTPAUTH => CURLAUTH_BASIC,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 70,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"method\":\"importaddress\",\"params\":[\"$address\",\"\",false],\"id\":\"curltext\",\"chain_name\":\"$chain\"}",
  CURLOPT_HTTPHEADER => array(
    "Cache-Control: no-cache",
    "Content-Type: application/json",
  ),
));
$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);
if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
