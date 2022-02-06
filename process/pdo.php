<?php

try {

    $bdd = new PDO('mysql:host=localhost;dbname=player_audio;charset=utf8','root', '');

}
catch(Exception $e)
{
    die('erreur : '.$e->getMessage());
}

