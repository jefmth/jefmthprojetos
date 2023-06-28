 const audio = document.querySelector('#som');
    const playPauseBtn = document.querySelector('#play-pause-btn');
    const wave = document.querySelector('.wave');
    const progressBar = document.querySelector('.progress-bar');
    const progressFill = document.querySelector('.progress-fill');

    playPauseBtn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        playPauseBtn.classList.remove('paused');
        wave.classList.add('playing');
      } else {
        audio.pause();
        playPauseBtn.classList.add('paused');
        wave.classList.remove('playing');
      }
    });

    progressBar.addEventListener('click', (event) => {
      const progressBarWidth = progressBar.offsetWidth;
      const clickOffsetX = event.offsetX;
      const progressPercent = (clickOffsetX / progressBarWidth) * 100;
      const newTime = (progressPercent / 100) * audio.duration;
      audio.currentTime = newTime;
      progressFill.style.width = `${progressPercent}%`;
    });

    audio.addEventListener('timeupdate', () => {
      const duration = audio.duration;
      const currentTime = audio.currentTime;
      const progressPercent = (currentTime / duration) * 100;
      progressFill.style.width = `${progressPercent}%`;
    });