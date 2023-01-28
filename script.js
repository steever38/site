// Fonction pour jouer la musique
function playMusic() {
    var music = document.getElementById("music");
    var volumeSlider = document.getElementById("volume-slider");
    volumeSlider.value = 1; // Définir la valeur de la barre de volume à 1
    volumeSlider.style.background = 'linear-gradient(to right, #007bff 0%, #007bff ' + volumeSlider.value + '%, #6c757d ' + volumeSlider.value + '%, #6c757d 100%)';
    music.volume = 0.01; // Volume réglé à 1%
    music.play();
  }
  
  // Fonction pour changer le volume
  function changeVolume() {
    var music = document.getElementById("music");
    var volumeSlider = document.getElementById("volume-slider");
    music.volume = volumeSlider.value / 100;
  }
  
  // Fonction pour couper le son
  function muteMusic() {
    var music = document.getElementById("music");
    music.muted = !music.muted;
  }

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });