<?php

    if(isset($_POST['add_img'])) {
        $dir = basename($_FILES['img']['name']);
        $target_dir = 'images/'.$dir;
        move_uploaded_file($_FILES['img']['tmp_name'], $target_dir);
        header('location:index.html');
    }

?>