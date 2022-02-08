<!-- <?php include './utils/pdo.php' ?>

<?php
//$requete = $db->prepare('SELECT * FROM `Audio`');
//$requete->execute();
//$patients = $requete->fetchAll(); //tableau contenant tout ce qu'on a besoin
?> -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>player</title>
    <link rel="stylesheet" href="./asset/player.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

</head>

<body>
    

    <div class="contener">
        <div class="top-bar">
            <i class="material-icons">expand_more</i>
            <span>Now Playing</span>
            <i class="material-icons">more_horiz</i> 
        </div>
        <div class="img-area">
            <img src="./musique/Lofi.jpg" alt="">
        </div>
        <div class="song-details">
            <p class="album">LOFI</p>
            <p class="artist">Flovry tender spring</p>
        </div>
        <div class="progress-area">
            <div class="progress-bar"></div>

            <div class="timer">
                <span class="current">0:20</span>
                <span class="current">3:40</span>
            </div>
        </div>
        <div class="controls"> 
            <i id="repeat-plist" class="material-icons">repeat</i>  
            <i id="prev" class="material-icons">skip_previous</i>
            <div class="play-pause"> 
                <i class="material-icons">play_arrow</i>
            </div>
            <i id="next" class="material-icons">skip_next</i>
            <i id="more-music" class="material-icons">queue_music</i>
        </div>
        <div class="music-list"> 
            <div class="header">
                <div class="row">
                    <i class="material-icons">queue_music</i>
                </div>
            </div>
    </div>






</body>

</html>