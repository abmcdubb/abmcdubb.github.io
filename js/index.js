$(window).bind('load', function() {
  if ($('.home-page').length) {
    $(".preloading").effect("blind", { direction: "down" });
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

    if (screen.width <= 360) {
      $('.home-page').addClass('something')
    }

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
  };

  $('.navlink').hover(function() {
    $(this).addClass('animated pulse')
  });

  $('.navlink, .logo').bind('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass('animated pulse')
  }); 

  if (!$('body').hasClass('something')) {
    inView.threshold(0.10);
    inView('.pokemongo-tweets')
      .on('enter', function(el) {
        $(el).find('.project-name').addClass('pink-bkg');
        $(el).addClass('pink-bkg');
      });
    inView('.nyborhood')
      .on('enter', function(el) {
        $(el).find('.project-name').addClass('blue-bkg');
        $(el).addClass('blue-bkg');
      });
    inView('.me-dot-com')
      .on('enter', function(el) {
        $(el).find('.project-name').addClass('beige-bkg');
        $(el).addClass('beige-bkg');        
      });
    };

    // $('body').panelSnap({panelSelector: '.section', slideSpeed: 200});

})
