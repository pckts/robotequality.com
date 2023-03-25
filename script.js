document.addEventListener('DOMContentLoaded', function() {
    var h1 = document.querySelector('h1');
    var text = 'ROBOTS ARE FRIENDS.';
    h1.innerText = '';
    var index = 0;
    var speed = 50;
  
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
  });
