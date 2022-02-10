<?php
//on va chercher les sons dans la base
//on se connecte à la base
include ('./utils/pdo.php');


//on ecrit la requete

$sql = 'SELECT * FROM `chanson` ';


//on recup les données

$titre = $requete->fetchAll();

?>


