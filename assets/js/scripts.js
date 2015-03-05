$(document).ready(function () {
  
  //lazy loadin'
  $(".lazy").lazyload({
      effect : "fadeIn"
  });
  
  $(".lazy").lazyload({
    threshold : 200
  });
  
});

$(window).bind("load", function() {
  var timeout = setTimeout(function() {
      $(".lazy").trigger("sporty")
  }, 3000);
});