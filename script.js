// Wait for DOM to load before starting the animation
document.addEventListener('DOMContentLoaded', function() {
    var h1 = document.querySelector('h1');
    var text = 'ROBOTS ARE FRIENDS.';
    h1.innerText = '';
    var index = 0;
    var speed = 50; // milliseconds per character

    // Set initial color scheme based on device preferences
    var isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setColors(isDarkMode);

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

    // Detect changes in device color scheme preferences
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(event) {
        var isDarkMode = event.matches;
        setColors(isDarkMode);
    });

    // Apply appropriate CSS variables based on device color scheme preferences
    function setColors(isDarkMode) {
        if (isDarkMode) {
            document.documentElement.style.setProperty('--background-color', '#171717');
            document.documentElement.style.setProperty('--text-color', '#f5f5f5');
        } else {
            document.documentElement.style.setProperty('--background-color', '#f5f5f5');
            document.documentElement.style.setProperty('--text-color', '#171717');
        }
    }
});
