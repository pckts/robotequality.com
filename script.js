// Wait for DOM to load before starting the animation
document.addEventListener('DOMContentLoaded', function() {
    var h1 = document.querySelector('#headline');
    var text = 'Robots are Friends';
    var index = 0;
    var speed = 50; // milliseconds per character
    var blinkSpeed = 1000; // milliseconds per blink

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
        } else {
            var lastChar = h1.lastChild;
            var blinkChar = document.createElement('span');
            blinkChar.classList.add('blink');
            blinkChar.innerText = '.';
            h1.appendChild(blinkChar);
            blinkChar.style.setProperty('--blink-speed', blinkSpeed + 'ms');
        }
    }

    type();

    // Detect whether device is in dark or light mode
    var prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    // Update styles based on device mode
    function updateColorScheme() {
        if (prefersDarkMode.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }

    // Listen for changes in device mode and update styles accordingly
    prefersDarkMode.addEventListener('change', function() {
        updateColorScheme();
    });
    updateColorScheme();
});
