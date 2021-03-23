$.getJSON("../assets/content.json", function(json) {
  console.log(json)
});

/*
** Functions-------------------------
*/
// Header 超過 KV 才出現的動畫
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if ( currentScrollPos > 200 ) { // 超過 KV
    $('.section-nav').get(0).style.top = '0';
  } else {
    $('.section-nav').get(0).style.top = '-120px';
  }
  prevScrollpos = currentScrollPos;
}

// Header Nav click function
$('.nav-items__li').on('click', function() {
  $(this).siblings().removeClass('active');
  $('.dropdown-item').removeClass('active');
  $('.dropdown-btn__a').removeClass('active');
  if ( !$(this).hasClass('active') ) {
    $(this).addClass('active');
  }
  // checkDropdown();
});
$('.dropdown-btn__a').on('click', function() {
  $('.nav-items__li').removeClass('active');
  if ( !$(this).hasClass('active') ) {
    $(this).addClass('active');
  }
  // checkDropdown();
})

// Dropdown Nav click function
$('.dropdown-item').on('click', function() {
  $(this).siblings().removeClass('active');
  $('.nav-items__li').removeClass('active');
  $('.dropdown-btn__a').addClass('active');
  if ( !$(this).hasClass('active') ) {
    $(this).addClass('active');
  }
  // checkDropdown();
});

// function checkDropdown() {
//   if ( $('.dropdown').find('.active').length > 0 ) {
//     $('.dropdown').css('display', 'block');
//     $('.dropdown-btn .triangle').css({
//       'display': 'block',
//       'border-color': 'var(--darkGray) transparent transparent transparent'
//     });
//   } else {
//     $('.dropdown').css('display', 'none');
//     $('.dropdown-btn .triangle').css({
//       'display': 'none',
//       'border-color': 'var(--gray) transparent transparent transparent'
//     });
//   }
// }


// Events NAV click function
$('.events-nav__li').on('click', function() {
  $(this).siblings().removeClass('active');
  $(this).toggleClass('active');
  // 切換 Events frame
  const _id = $(this).attr('id');
  $('.events-frame .container').hide();
  $(`.${_id}`).show();
});

// Events Frame page toggle function
$('.may .controller').on('click', function() {
  const prev = $(this).find('.control-prev').length > 0;
  if ( prev ) {
    $('.may-page1').css('transform', 'translateX(0)');
    $('.may-page2').css('transform', 'translateX(100vw)');
    $('.may .page').text('01/02');
  } else {
    $('.may-page1').css('transform', 'translateX(-100vw)');
    $('.may-page2').css('transform', 'translateX(0)');
    $('.may .page').text('02/02');
  }
})

$('.june .controller').on('click', function() {
  const prev = $(this).find('.control-prev').length > 0;
  if ( prev ) {
    $('.june-page1').css('transform', 'translateX(0)');
    $('.june-page2').css('transform', 'translateX(100vw)');
    $('.june .page').text('01/02');
  } else {
    $('.june-page1').css('transform', 'translateX(-100vw)');
    $('.june-page2').css('transform', 'translateX(0)');
    $('.june .page').text('02/02');
  }
})

// Play Video function
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-video', {
    height: '100%',
    width: '100%',
    videoId: 'mFaJUtAnQDY',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
function onPlayerReady(event) {
  // event.target.playVideo();
}
var done = false;
function onPlayerStateChange(event) {
  if ( event.data === YT.PlayerState.PLAYING && !done ) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
  if ( event.data !== YT.PlayerState.PLAYING ) {
    $('.video-mask').css('transform', 'translateX(0)')
  } else {
    $('.video-mask').css('transform', 'translateX(-100vw)');
  }
}
function stopVideo() {
  player.stopVideo();
}

// Video play btn
$('.section-video .btn').on('click', function() {
  player.playVideo();
})

// Popup toggle function
$('.showPopup').on('click', function() {
  $('.popup').css('transform', 'translateY(0)');
  $('body').addClass('stop-scrolling')
})
$('.closePopup').on('click', function() {
  $('.popup').css('transform', 'translateY(100vh)');
  $('body').removeClass('stop-scrolling')
})


// 初始化
$(document).ready(() => {
  // Header
  $('.section-nav').get(0).style.top = '-120px';
  // 節目場次 Slider
  $('.events-frame .container').hide();
  $('.april').show();
})