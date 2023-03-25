// Wait for DOM to load before starting the animation
document.addEventListener('DOMContentLoaded', function() {
    var h1 = document.querySelector('h1');
    var text = 'ROBOTS ARE FRIENDS.';
    h1.innerText = '';
    var index = 0;
    var speed = 50; // milliseconds per character

    // Start typing animation
    function type() {
        if (text[index] === ' ') {
            h1.innerHTML += '&nbsp;';
        } else {
            h1.innerHTML += text[index];
        }
        index++;
        if (index < text.length) {
            setTimeout(type, speed);
        }
    }

    type();

    // Detect dark mode and toggle styles
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    function toggleDarkMode(e) {
        const darkModeOn = e.matches;
        const body = document.querySelector('body');
        const container = document.querySelector('.container');
        if (darkModeOn) {
            body.classList.add('dark-mode');
            container.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
            container.classList.remove('dark-mode');
        }
    }
    toggleDarkMode(darkModeMediaQuery);
    darkModeMediaQuery.addListener(toggleDarkMode);
});
