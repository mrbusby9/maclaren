$(document).ready(function () {
  
  //lazy loadin'
  $(".lazy").lazyload({
      effect : "fadeIn"
  });
  
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
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


//init controller
var controller = new ScrollMagic.Controller();


//OLD 
//create a scene
var scene = new ScrollMagic.Scene({
triggerElement: "#old-fade-in",
duration: "100%"
})
.setTween("#old-design", 0.5, {opacity: 1}) // trigger a TweenMax.to tween
//.addIndicators({name: "Start 1 (duration: 0)"}) // add indicators (requires plugin)
.addTo(controller);


//build scene
var scene = new ScrollMagic.Scene({
triggerElement: "#old-fade-out",
duration: "100%"
})
.setTween("#old-design", 0.1, {opacity: 0}) // the tween durtion can be omitted and defaults to 1
//.addIndicators({name: "End 1 (duration: 0)"}) // add indicators (requires plugin)
.addTo(controller);


//NEW
//build scene
var scene = new ScrollMagic.Scene({
triggerElement: "#new-fade-in",
duration: "100%"
})
.setTween("#new-design", 0.5, {opacity: 1}) // the tween durtion can be omitted and defaults to 1
//.addIndicators({name: "Start 2 (duration: 0)"}) // add indicators (requires plugin)
.addTo(controller);

//build scene
var scene = new ScrollMagic.Scene({
triggerElement: "#new-fade-out",
duration: "100%"
})
.setTween("#new-design", 0.5, {opacity: 0}) // the tween durtion can be omitted and defaults to 1
//.addIndicators({name: "End 2 (duration: 0)"}) // add indicators (requires plugin)
.addTo(controller);


$(window).scroll(function(){    
  var bottom = $('.header').offset().top;
  console.log(bottom + " " + $('.header').height());
  if ($(this).scrollTop() > bottom){ 
      $('.header-content').addClass('fixed'); 
  }
  else{
      $('.header-content').removeClass('fixed');
  }
});
