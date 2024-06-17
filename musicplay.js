document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const likeButton = document.getElementById('like');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const currentSong = document.querySelector('.current-song');
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.querySelector('.progress-container');

    const songs = [
        { title: "Brain Dance", src: "\Brain Dance.mp3" },
        { title: "Equatorial complex", src: "\Equatorial Complex.mp3" },
       // { title: "Galactic Rap", src: "\Galactic Rap.mp3" },
       // { title: "Garden Music",  src:"\Garden Music.mp3"},        
        { title: "Nightdreams",  src:"\Nightdreams.mp3"},        
        { title: "River Fire ",  src:"\River Fire.mp3"},        
       // { title: "River Flute",  src:"\River Flute.mp3"}, 
        
    ];

    let currentSongIndex = 0;

    function loadSong(index) {
        audio.src = songs[index].src;
        currentSong.textContent = songs[index].title;
    }

    function playSong() {
        audio.play();
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline';
    }

    function pauseSong() {
        audio.pause();
        playButton.style.display = 'inline';
        pauseButton.style.display = 'none';
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    }

    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    }

    function updateProgressBar() {
        const { duration, currentTime } = audio;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }

    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    }
    let num=2;
    function like(){
        
        
        if(num%2==0){
            likeButton.textContent="❤️";
            num++;
            console.log(num);
        }else{
            likeButton.textContent="🤍";
            num++;
        }

    }

    playButton.addEventListener('click', playSong);
    pauseButton.addEventListener('click', pauseSong);
    nextButton.addEventListener('click', nextSong);
    prevButton.addEventListener('click', prevSong);
    audio.addEventListener('timeupdate', updateProgressBar);
    progressContainer.addEventListener('click', setProgress);
    likeButton.addEventListener('click',like);

    
    loadSong(currentSongIndex);
});
