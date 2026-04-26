function openCard() {
    const card = document.querySelector('.card');
    const audio = document.getElementById('welcomeSong');

    // Toggle the card opening animation
    card.classList.toggle('open');

    // Play the song
    if (card.classList.contains('open')) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0; // Reset song
    }
}