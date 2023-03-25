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
