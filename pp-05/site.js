// Release the dollar-sign from jQuery's control
$.noConflict();

// Re-introduce dollar sign scoped to self-executing
// function
(function($) {
  var doorbell = new Audio('media/doorbell.mp3');
  $('html').removeClass('nojs').addClass('js');
  $('audio').remove();
  $('#doorbell').on('click', function(){
    doorbell.play();
  });

  window.addEventListener("keypress", function(e){
    if (e.key === "d") {
      doorbell.play();
    }
  });

})(jQuery);
