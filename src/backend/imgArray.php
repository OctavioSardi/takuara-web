<?php
$dir = '../assets/images/Display'; // replace with your folder path
$files = array_diff(scandir($dir), array('..', '.')); // get all files except . and ..
$result = array();

foreach ($files as $file) {
    $result[] = array('name' => $file);
}

header('Content-Type: application/json');
echo json_encode($result);
?>
