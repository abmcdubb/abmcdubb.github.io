$(window).bind('load', function() {
  // $('.preloading').fadeOut()
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

  $('.navlink, .logo').hover(function() {
    $(this).addClass('animated pulse')
  })

  // $('.logo').hover(function() {
  //   $(this).addClass('animated jello')
  // })

  $('.navlink, .logo').bind('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass('animated pulse')
  });

  $('.projects').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    focusOnSelect: true,
    asNavFor: '.project-descriptions',
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
})