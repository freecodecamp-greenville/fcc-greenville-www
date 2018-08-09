document
  .getElementById('show-future-meetups')
  .addEventListener('click', function(e) {
    document.querySelector('.future-meetups').style.display = 'block';
    var elShowMeetups = document.getElementById('show-future-meetups');
    elShowMeetups.parentElement.removeChild(elShowMeetups);
    e.preventDefault();
  });

var doorbellButton = document.getElementById('doorbell');
var doorbellMessage = document.getElementById('doorbell-message');

doorbellButton.addEventListener('click', function() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function(e) {
    var response = JSON.parse(e.target.response);
    if (response.hasOwnProperty('message')) {
      doorbellMessage.innerText = response.message;
    }
  });
  xhr.open('POST', 'https://doorbell.fcc-greenville.com/');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(
    JSON.stringify({
      action: 'ring'
    })
  );
});

function getDoorbellStatus() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function(e) {
    var response = JSON.parse(e.target.response);
    if (response.hasOwnProperty('status')) {
      if (response.status === 'active') {
        doorbellButton.style.display = 'block';
      }
    }
  });
  xhr.open('POST', 'https://doorbell.fcc-greenville.com/');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(
    JSON.stringify({
      action: 'status'
    })
  );
}

getDoorbellStatus();
