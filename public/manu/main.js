function create_BG_Video() {
  //create the video element and its source
  var el = document.createElement('video');
  var source = document.createElement('source');
  // here is the magic that takes a random key in videoList object
 
  source.src = '/manu/bg1.mp4';
  var type;
  //as ogg video may be with a '.ogv' extension, we have to watch for it      
  source.type = "video/mp4";
  // video.controls = true;
  el.appendChild(source);

  el.className = 'bg_video';
  el.width = window.innerWidth;
  el.height = window.innerHeight;
  el.setAttribute('autoplay', 'false');
  el.play(); 
  //Set it as the first element in our body
  document.body.insertBefore(el, document.body.childNodes[0]);
}

function videoplaymobile(){
    var videos = document.querySelectorAll('video');

    [].forEach.call(videos, function(video) {
        video.play(); 
    });
}
/* ---------------------------------------------------------------*/
/* ----------------------document.ready---------------------------*/
/* ---------------------------------------------------------------*/
jQuery(document).ready(function($) {
    /* Video Youtube 
  ----------------------------------------------------------------------*/
  // if (window.matchMedia("(min-width: 769px)").matches) {
  //      $("#wrapper").tubular({
  //          videoId: 'gOdFz8B1sCE',
  //          mute: false,
  //          repeat: true
  //      }); // where idOfYourVideo is the YouTube ID.
  //  } else {
  //   create_BG_Video();

  //   var isAndroid = navigator.userAgent.indexOf('Android') >= 0;
  //   var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

  //   if (isChrome && isAndroid) {
  //     var videos = document.querySelectorAll('video');

  //     [].forEach.call(videos, function(video) {
  //         video.controls = true;
  //     });
  //   }
  // }

  $("#wrapper").tubular({
           videoId: 'gOdFz8B1sCE',
           mute: false,
           repeat: true
       }); // where idOfYourVideo is the YouTube ID.

  /* Countdown 
  ----------------------------------------------------------------------*/
  if($(".my-defaultCountdown").length>0) {
    $(function () {
      var austDay = new Date(2017, 07, 08, 22, 00, 0);
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