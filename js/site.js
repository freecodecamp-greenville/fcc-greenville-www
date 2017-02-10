var doorbellButton = document.getElementById('doorbell')
var doorbellMessage = document.getElementById('doorbell-message')

doorbellButton.addEventListener('click', function() {
  var xhr = new XMLHttpRequest()
  xhr.addEventListener('load', function() {
    doorbellMessage.innerText = "We got you'r message"
  })
  xhr.open('GET', 'http://doorbell.fcc-greenville.com/')
  xhr.send()
})
