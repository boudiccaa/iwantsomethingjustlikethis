// script.js

function open_card() {
  document.getElementById('outside').className = 'open-card';
  setTimeout(() => {
      document.getElementById('outside').style.display = 'none';
      document.getElementById('inside').style.display = 'block';
  }, 1000); // Match the transition duration
}

function close_card() {
  document.getElementById('inside').style.display = 'none';
  document.getElementById('outside').style.display = 'block';
  setTimeout(() => {
      document.getElementById('outside').className = '';
  }, 10); // Small delay to reset the class
}
