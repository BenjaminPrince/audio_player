<?php
require_once ('./utils/pdo.php');
?> 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./asset/index.css" rel="stylesheet"></link>
    <title>Album</title>
</head>
<body>
    <header>

	</header>
<div id="album">
	<ul class="card-list">
	
	<li class="card">
		<a class="card-image" href="player.php" aria-current="page" target="_blank" style="background-image: url(https://static.actu.fr/uploads/2020/04/maxresdefault-960x640.jpg);" data-image-full="https://static.actu.fr/uploads/2020/04/maxresdefault-960x640.jpg">
			<img src="./musique/Lofi.jpg" alt="Lofi" />
</a>
		<a class="card-description" href="player.php" aria-current="page" target="_blank">
			<h2>LOFI</h2>
			<p>freestyle</p>
	
		</a>
	</li>
	
	<li class="card">
		<a class="card-image" href="player.php"aria-curent="page" target="_blank" style="background-image: url(https://www.tanikal.com/wp-content/uploads/2017/10/HansZimmerTours2017-Live.jpg);" data-image-full="https://www.tanikal.com/wp-content/uploads/2017/10/HansZimmerTours2017-Live.jpg">
			<img src="./musique/HansZimmerTours2017-Live.jpg" alt="Hans ZIMMER" />
		</a>
		<a class="card-description" href="player.php" target="_blank">
			<h2>Hans ZIMMER</h2>
			<p>Live in prague</p>
		</a>
	</li>
	<audio src=""></audio>
	</ul>
</div> <!--contenu généré par js -->

<footer>

</footer>
</body>
</html>