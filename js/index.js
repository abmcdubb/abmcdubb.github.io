$(window).bind('load', function() {
  if ($('.home-page').length) {
    $(".preloading").effect("blind", {direction: "down"});
    $('.show-after-load').show(); 

    $('.main-text .introduction-text1').textillate({
      in: {
        effect: 'flipInX', 
        delayScale: 1.5,
        delay: 15,
        sync: false,
        shuffle: true,
        reverse: false,
        callback: function () {
          $('.main-text .introduction-text2').textillate({
            in: {
            effect: 'flipInX', 
            delayScale: 1.5,
            delay: 15,
            sync: false,
            shuffle: true,
            reverse: false,
            }
          })
        }
      }
    })
    var mainTargetOffset = $(".main").offset().top;
    var workTargetOffset = $(".recent-work").offset().top - 90;
    var $w = $(window).scroll(function() {
     
      if ($w.scrollTop() > mainTargetOffset && $w.scrollTop() < workTargetOffset) {
        $('.fixed-navbar').removeClass('fixed-navbar-start hidden green-logo')
        $('.fixed-navbar').addClass('visible')
      }
      else if ($w.scrollTop() > mainTargetOffset && $w.scrollTop() > workTargetOffset) {
        $('.fixed-navbar').removeClass('fixed-navbar-start hidden')
        $('.fixed-navbar').addClass('visible green-logo')
      }
      else {
        $('.fixed-navbar').removeClass('visible hidden green-logo').addClass('hidden')
      }
    })

    $('.projects').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
      focusOnSelect: true,
      asNavFor: '.project-descriptions',
      prevArrow: '<img src="images/previous-arrow.png" class="previous-arrow">',
      nextArrow: '<img src="images/next-arrow.png" class="next-arrow">',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
    $('.project-descriptions').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.projects'
    });
  };

  $('.navlink').hover(function() {
    $(this).addClass('animated pulse')
  });

  $('.navlink, .logo').bind('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass('animated pulse')
  }); 
})