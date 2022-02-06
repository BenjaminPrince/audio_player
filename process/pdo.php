<?php

try {

    $bdd = new PDO('mysql:host=localhost;dbname=player_audio;charset=utf8','root', '');
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(Exception $e)
{
    die('erreur : '.$e->getMessage());
}

