<?php

try {

    $bdd = new PDO('mysql:host=127.0.0.1;dbname=Audio;charset=utf8','root', '');
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(Exception $e)
{
    die('erreur : '.$e->getMessage());
}

