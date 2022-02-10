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

//fonction musique suivante //

function nextMusic() {
    //on incrémente de 1//
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

// fonction musique précédente//

function prevMusic() {
    //on décrémente de 1 //
    musicIndex--;
    musicIndex <1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

//play and pause//

playPauseBtn.addEventListener("click",()=>{
    const isMusicPaused = contener.classList.contains("paused");
    isMusicPaused ? pauseMusic() : playMusic();
});

//event btn music suivante //

nextBtn.addEventListener("click", ()=>{
    nextMusic(); //appelle la function music suivante//
});

//event btn music précédente//
prevBtn.addEventListener("click", ()=>{
    prevMusic(); //appelle la function music précédente//
});

//barre de temps de la chanson//
 
mainAudio;addEventListener("timeupdate", (e)=>{
    console.log(e);
    const currentTime = e.target.currentTime; //temps en cours de la chanson//
    const duration = e.target.duration; //temps total de la chanson//
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    mainAudio;addEventListener("loadeddata ", (e)=>{
    let musicCurrentTime = contener.querySelector(".current"),
    musicDuration = contener.querySelector(".duration");

    //update song total duration//
     let audioDuration = mainAudio.duration;
     let totalMin = Math.floor(audioDuration / 60);
     let totalSec = Math.floor(audioDuration % 60);
     if(totalSec < 10){  // ajoute 0 si seconde inférieur à 10//
         totalSec = `0${totalSec}`;
     }
     musicDuration.innerText = `${totalMin}:${totalSec}`;

    });

     let currentMin = Math.floor(currentTime / 60);
     let currentSec = Math.floor(currentTime % 60);
     if(currentSec < 10){  // ajoute 0 si seconde inférieur à 10//
         currentSec = `0${currentSec}`;
     }
     musicCurrentTime.innerText = `${currentMin}:${currentSec}`;

});

//accord de la progressBar avec le temps de la chanson//

progressBar.addEventListener("click",()=>{
    let progressWidthval = progressBar.clientWidth;
    let clikedOffSetX = e.offSetX;
    let songDuration = mainAudio.duration;

    mainAudio.currentTime = (clikedOffSetX / progressWidthval) *songDuration;
})