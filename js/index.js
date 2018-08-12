import axios from 'axios';

document.getElementById('show-future-meetups').addEventListener('click', e => {
  document.querySelector('.future-meetups').style.display = 'block';
  e.target.parentElement.removeChild(e.target);
  e.preventDefault();
});

var doorbellButton = document.getElementById('doorbell');
var doorbellMessage = document.getElementById('doorbell-message');

doorbellButton.addEventListener('click', function() {
  axios
    .post('https://doorbell.fcc-greenville.com/', { action: 'ring' })
    .then(response => {
      if (response.status === 200 && response.data.hasOwnProperty('message')) {
        doorbellMessage.innerText = response.data.message;
      }
    });
});

function getDoorbellStatus() {
  axios
    .post('https://doorbell.fcc-greenville.com/', { action: 'status' })
    .then(response => {
      if (
        response.status === 200 &&
        response.data.hasOwnProperty('status') &&
        response.data.status === 'active'
      ) {
        doorbellButton.style.display = 'block';
      }
    });
}

getDoorbellStatus();
