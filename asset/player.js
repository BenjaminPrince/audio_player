const contener = document.querySelector(".contener"),
musicImg = contener.querySelector(".img-area"),
musicName = contener.querySelector(".song-details .name"),
musicArtist = contener.querySelector(".song-details .artist"),
playPauseBtn = contener.querySelector(".play-pause"),
prevBtn = contener.querySelector("#prev"),
nextBtn = contener.querySelector("#next"),
mainAudio = contener.querySelector("#main-audio"),
progressArea = contener.querySelector(".progress-area"),
progressBar = progressArea.querySelector(".progress-bar"),
musicList = contener.querySelector(".music-list"),
moreMusicBtn = contener.querySelector("#more-music"),
closemoreMusic = musicList.querySelector("#close");


let musicIndex = 1;


window.addEventListener("load", ()=>{
  loadMusic(musicIndex);
});


//load music function

function loadMusic(indexNumb){
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
    //mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
}


