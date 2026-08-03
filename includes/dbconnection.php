<?php

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$host = "localhost";
$user = "root";
$password = "";
$database = "shop_database";
 
$connection = mysqli_connect($host, $user, $password, $database);

?>