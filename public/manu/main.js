/* ---------------------------------------------------------------*/
/* ----------------------document.ready---------------------------*/
/* ---------------------------------------------------------------*/
jQuery(document).ready(function($) {
    /* Video Youtube 
  ----------------------------------------------------------------------*/
  if($(".bg-youtube-video").length>0) {
    var sortv = ["gOdFz8B1sCE"];
    number_g = Math.floor(Math.random() * 5);
    $('#wrapper').tubular({ 
      videoId: 'gOdFz8B1sCE',
      mute: false,
      repeat: true,
      width: $(window).width()
    });
  }

  if (window.matchMedia("(min-width: 769px)").matches) {
       $("#wrapper").tubular({
           videoId: 'gOdFz8B1sCE',
           mute: false,
           repeat: true
       }); // where idOfYourVideo is the YouTube ID.
   }

  /* Countdown 
  ----------------------------------------------------------------------*/
  if($(".my-defaultCountdown").length>0) {
    $(function () {
      var austDay = new Date(2017, 06, 21, 22, 00, 0);
      $('.my-defaultCountdown').countdown({until: austDay, format: 'DHMS', onTick: watchGti});
    });

    var first = false;
    function watchGti(periods) {
      if ($.countdown.periodsToSeconds(periods) <= 2) { 
        $('.coming-soon').html('AGUARDE...');
      } 
      if(first) 
        return false;
      if ($.countdown.periodsToSeconds(periods) <= 10 && first==false) { 
        animationLogo();
        first=true;
      } 
    }
  }

  function animationLogo(){
   $('.animar-patrick-ecej').addClass('logo-proloader-gti');
   $('.animar-patrick-ecej').delay( 4000 ).hide( 400 );

   $('.animar-patrick-gti').delay( 4000 ).show( 400 );
   $('.animar-patrick-gti').addClass('logo-proloader-gti2');
  }

   /* add class for body .touch-device 
  -----------------------------------------------------------------------*/
  if( navigator.userAgent.match(/iPad|iPhone|Android/i) ) {
    $('body').addClass('touch-device');
  }
  else{
    $('body').addClass('no-touch-device');
  }

   /* -------------------- myScroll -----------------------------*/
  if($(".no-touch-device").length>0) {
    $("#first-page, .my-tabs").niceScroll({
      cursorcolor:"rgba(0, 0, 0, 0.5)",
      cursorborder:"none",
      mousescrollstep:50,
      horizrailenabled: false
    });
  }
});

/* --------------------------------------------*/
/*-------------- WINDOW LOAD ------------------*/
/* --------------------------------------------*/
$(window).load(function(){
  // Preloader
 $('.preloader').fadeOut('slow',function(){$(this).hide();});
});


$('.floor .image-wrapper').each(function(i, elem) {
  var imageUrl = $(elem).css('background-image');
  $(elem).html('<div class="preloader"><img src='+imageUrl.replace('url("', '').replace('")', '')+'><div>');
  $(elem).find('img').on('load', function() {
    $(this).parent().remove();
  });
});


// function press(key){
//   var comando = $('#tacontecendo').val()+key.key.toLowerCase()
//   $('#tacontecendo').val(comando);
//   var input = $('#tacontecendo').val();
//   if(input.length==4 && input=='ecej'){
//     $('#tacontecendo').val("");
//     var audioElement = document.createElement('audio');
//     audioElement.setAttribute('src', '/manu/acontecendo.mp3');
//     audioElement.pause();
//     audioElement.currentTime = 1;
//     audioElement.play();
//   } else if(input.length>4) {
//     $('#tacontecendo').val("");
//   }

// }