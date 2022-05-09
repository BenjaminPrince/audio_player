<?php

try {

    $bdd = new PDO('mysql:host=141.94.22.233;dbname=BenjaminPrince_audio;charset=utf8','BenjaminPrince', 'PrinceBenjamin07');
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(Exception $e)
{
    die('erreur : '.$e->getMessage());
}

