function logPortValue() {
    let port = document.getElementById('portName').value
    console.log(port);
    setResult(true)
    event.preventDefault()
  }

function setResult(input) {

    if (input) { //istrue
        document.getElementById('result').innerHTML = '<p class="green">yes</p>'
    } else {
        document.getElementById('result').innerHTML = '<p class="red">no</p>'
    }
}