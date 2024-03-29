<?php
include ('./utils/pdo.php');
?> 
<!-- <?php 
//$jesuisunid = $_GET['id'] ;
//$pdo = "SELECT * FROM chanson WHERE album_id = ?";
//$Pdostement = $bdd->prepare($pdo);
//$result = $Pdostement->execute([$jesuisunid]);
//$result = $Pdostement->fetchAll(PDO::FETCH_ASSOC);
?>
<?php
//$unid = $_GET['id'] ;
//$pdo = "SELECT * FROM album WHERE id = ?";
//$Pdostement = $bdd->prepare($pdo);
//$album= $Pdostement->execute([$unid]);
//$album= $Pdostement->fetch(PDO::FETCH_ASSOC);
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
            <img src="./musique/<?=$album['image']?>"> 

        </div>
        <div class="song-details">
            <p class="name"><?=$result[0]['titre']?> </p>
            <p class="artist"><?=$album['artiste']?> </p>
        </div>
        <div class="progress-area">
            <div class="progress-bar">
                <audio id="main-audio" src="./musique/<?=$result['recup']?>"></audio>
            </div>
            <div class="timer">
                <span class="current">0:00</span>
                <span class="duration"></span>
            </div>
          
        </div>
        <div class="controls">
            <i id="repeat-plist" class="material-icons" title="Playlist looped">repeat</i>
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
                    <span>Music list</span>
                </div>
                <i id="close" class="material-icons">close</i>
            </div> 
            <ul>
            <!-- js ou json -->
            </ul>   
        </div>
    </div>





    <script src="asset/music-list.js"></script>  <!--remplacer par un dossiser php avec fetch-->
    <script src="asset/player.js"></script> 

</body>

</html>