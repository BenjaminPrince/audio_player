const contener = document.querySelector(".contener"),
musicImg = contener.querySelector(".img-area img"),
musicName = contener.querySelector(".song-details .name"),
musicArtist = contener.querySelector(".song-details .artist"),
mainAudio = contener.querySelector(".progress-area #main-audio"), 
playPauseBtn = contener.querySelector(".play-pause"),
prevBtn = contener.querySelector("#prev"),
nextBtn = contener.querySelector("#next"),
progressArea = contener.querySelector(".progress-area"),
progressBar = progressArea.querySelector(".progress-bar"),
musicList = contener.querySelector(".music-list"),
moreMusicBtn = contener.querySelector("#more-music"),
closemoreMusic = musicList.querySelector("#close");

console.log(mainAudio)

let musicIndex = 2;


window.addEventListener("load", ()=>{
  loadMusic(musicIndex);
});


//load music function

function loadMusic(indexNumb) {

    console.log(`musique/${allMusic[indexNumb - 1].src}.mp3`)

    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `musique/${allMusic[indexNumb - 1].img}.jpg`;
    mainAudio.src = `musique/${allMusic[indexNumb - 1].src}.mp3`;//marche pas a voir
    
}

//play music function
function playMusic(){
    contener.classList.add("paused");
    playPauseBtn.querySelector("i").innerText = "pause";
    mainAudio.play();
}
//pause music function
function pauseMusic(){
    contener.classList.remove("paused");
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    mainAudio.pause();
}

//play ans pause//

playPauseBtn.addEventListener("click",()=>{
    const isMusicPaused = contener.classList.contains("paused");
    isMusicPaused ? pauseMusic() : playMusic();
});



