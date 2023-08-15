const logos = document.querySelectorAll('.logos a img');
logos.forEach(logo => {
    const interval = setInterval(() => {
        const x = Math.random();
        const y = Math.random();
        logo.style.setProperty('--random-x', x);
        logo.style.setProperty('--random-y', y);
    }, 200);
    logo.dataset.interval = interval;
});
const video = document.getElementById('bg-video');

video.addEventListener('ended', () => {
    video.currentTime = 0;
    video.play();
});
