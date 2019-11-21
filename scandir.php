<?php

    $result = array();
    $dir = $_POST['dir'];
    $files = array_slice(scandir($dir),2);
    echo json_encode($files);

?>