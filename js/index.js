 
	  const audio = document.querySelector('#som');
      const playPauseBtn = document.querySelector('#play-pause-btn');
      const wave = document.querySelector('.wave');
	  const progressBar = document.querySelector('.progress-bar');
      
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
	  <!-- script barra interna de progrsso -->
	   audio.addEventListener('timeupdate', () => {
        const duration = audio.duration;
        const currentTime = audio.currentTime;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
      });
	  
	
