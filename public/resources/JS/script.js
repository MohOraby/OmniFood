$(document).ready(function() {

  $(".js-features").waypoint(function(direction) {
    if(direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  }, {
      offset: '60px;'
  });

  $(".js-scroll-plans").click(function() {
    $("html, body").animate({scrollTop: $(".js-plans").offset().top}, 1000);
  });

  $(".js-scroll-start").click(function() {
    $("html, body").animate({scrollTop: $(".js-start").offset().top}, 1000);
  });

  $(".js-scroll-features").click(function() {
    $("html, body").animate({scrollTop: $(".js-features").offset().top}, 1000);
  });

  $(".js-scroll-cities").click(function() {
    $("html, body").animate({scrollTop: $(".js-cities").offset().top}, 1000);
  });

  $(".js-scroll-plans").click(function() {
    $("html, body").animate({scrollTop: $(".js-plans").offset().top}, 1000);
  });

  $(".js-scroll-plans").click(function() {
    $("html, body").animate({scrollTop: $(".js-plans").offset().top}, 1000);
  });

  $(".js-scroll-plans").click(function() {
    $("html, body").animate({scrollTop: $(".js-plans").offset().top}, 1000);
  });

  $(".js-nav-icon").click(function(){
    $(".js-main-nav").slideToggle(200);
  });

});
