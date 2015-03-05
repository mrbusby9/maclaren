$(document).ready(function () {
  
  //lazy loadin'
  $(".lazy").lazyload({
      effect : "fadeIn"
  });
  
});

$(window).bind("load", function() {
  var timeout = setTimeout(function() {
      $("img.lazy").trigger("sporty");
  }, 3000);
});

$(function() {
  $("img.lazy").lazyload({
      event : "sporty"
  });
});