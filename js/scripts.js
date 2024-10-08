document.getElementById('scrollButton').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

document.getElementById('backToTopButton').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('playAudioButton').addEventListener('click', function() {
    const audio = document.getElementById('backgroundAudio');
    audio.play();
});
