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
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Apply dark mode styles
        document.body.classList.add('dark-mode');
    }
});
