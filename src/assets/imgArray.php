<?php
$allFiles = scandir('images/Display'); // Or any other directory
$files = array_diff($allFiles, array('.', '..'));
echo json_encode($files)
/* print_r($files) */
?>
