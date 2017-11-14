// Release the dollar-sign from jQuery's control
$.noConflict();

function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}
