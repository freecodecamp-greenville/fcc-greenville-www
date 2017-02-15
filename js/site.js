var doorbellButton = document.getElementById('doorbell')
var doorbellMessage = document.getElementById('doorbell-message')

doorbellButton.addEventListener('click', function() {
  var xhr = new XMLHttpRequest()
  xhr.addEventListener('load', function(e) {
    var response = JSON.parse(e.target.response)
    if (response.hasOwnProperty('message')) {
      doorbellMessage.innerText = response.message
    }
  })
  xhr.open('POST', 'http://doorbell.fcc-greenville.com/')
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify({
    action: 'ring'
  }))
})
