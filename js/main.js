/*
** Functions-------------------------
*/
// Header 超過 KV 才出現的動畫
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if ( currentScrollPos > 200 ) { // 超過 KV
    if ( currentScrollPos > $('#preface').get(0).offsetTop && currentScrollPos > prevScrollpos ) { // 往下滑隱藏
      $('.section-nav').css('top', '-120px');
    } else { // 往上滑
      $('.section-nav').css('top', '0');
    }
  } else {
    $('.section-nav').css('top', '-120px');
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
});
$('.dropdown-btn__a').on('click', function() {
  $('.nav-items__li').removeClass('active');
  if ( !$(this).hasClass('active') ) {
    $(this).addClass('active');
  }
})

// Dropdown Nav click function
$('.dropdown-item').on('click', function() {
  $(this).siblings().removeClass('active');
  $('.nav-items__li').removeClass('active');
  $('.dropdown-btn__a').addClass('active');
  if ( !$(this).hasClass('active') ) {
    $(this).addClass('active');
  }
});

// Events NAV click function
$('.events-nav__li').on('click', function() {
  if ( !$(this).hasClass('active') ) {
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
    // 切換 Events frame
    const _id = $(this).attr('id');
    $('.events-frame .container').hide();
    $(`.${_id}`).show();
  }
});

// Events Frame page toggle function
$('.may .control').on('click', function() {
  if ( !$(this).hasClass('disabled') ) {
    const prev = $(this).hasClass('control-prev');
    if ( prev ) {
      $('.may-page1').css('transform', 'translateX(0)');
      $('.may-page2').css('transform', 'translateX(100vw)');
      $('.may .page').text('01/02');
      $(this).siblings().removeClass('disabled');
      $(this).toggleClass('disabled');
    } else {
      $('.may-page1').css('transform', 'translateX(-100vw)');
      $('.may-page2').css('transform', 'translateX(0)');
      $('.may .page').text('02/02');
      $(this).siblings().removeClass('disabled');
      $(this).toggleClass('disabled');
    }
  }
})

$('.june .control').on('click', function() {
  if ( !$(this).hasClass('disabled') ) {
    const prev = $(this).hasClass('control-prev');
    if ( prev ) {
      $('.june-page1').css('transform', 'translateX(0)');
      $('.june-page2').css('transform', 'translateX(100vw)');
      $('.june .page').text('01/02');
      $(this).siblings().removeClass('disabled');
        $(this).toggleClass('disabled');
    } else {
      $('.june-page1').css('transform', 'translateX(-100vw)');
      $('.june-page2').css('transform', 'translateX(0)');
      $('.june .page').text('02/02');
      $(this).siblings().removeClass('disabled');
      $(this).toggleClass('disabled');
    }
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
    videoId: 'WsRiDCf-UjU',
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
  if ( event.data === YT.PlayerState.PLAYING ) {
    $('.video-mask').css('transform', 'translateX(-100vw)');
  }
  // if ( event.data !== YT.PlayerState.PLAYING ) {
  //   $('.video-mask').css('transform', 'translateX(0)')
  // } else {
  //   $('.video-mask').css('transform', 'translateX(-100vw)');
  // }
}
function stopVideo() {
  player.stopVideo();
}

// Video play btn
$('.section-video .btn').on('click', function() {
  player.playVideo();
})

let scrollY;
let showingPopupId;
// Popup toggle function
$('.showPopup').on('click', function() {
  scrollY = window.scrollY;
  const classArray = $(this).attr('class').split(' ');
  showingPopupId = classArray[classArray.length - 1];
  $('.popup').show().scrollTop();
  $(`#${showingPopupId}`).show();
  $(`.${showingPopupId}_dots`).show();
  $('body').css('overflow-y', 'hidden');
  $('html').css('overflow-y', 'hidden');
  $('.section-nav').css('top', '-120px');
  // 若點到 popup 外就關閉
  $('.popup').on('click', function(e) {
    if ( $('.popup-frame').has(e.target).length === 0 ) {
      $('.popup').hide();
      $(`#${showingPopupId}`).hide();
      $(`.${showingPopupId}_dots`).hide();
      $('body').css('overflow-y', 'scroll');
      $('html').css('overflow-y', 'scroll');
      $('html').css('scroll-behavior', 'auto');
      window.scrollTo(0, scrollY);
      $('html').css('scroll-behavior', 'smooth');
    }
  })
})
$('.closePopup').on('click', function() {
  $('.popup').hide();
  $(`#${showingPopupId}`).hide();
  $(`.${showingPopupId}_dots`).hide();
  $('body').css('overflow-y', 'scroll');
  $('html').css('overflow-y', 'scroll');
  $('html').css('scroll-behavior', 'auto');
  window.scrollTo(0, scrollY);
  $('html').css('scroll-behavior', 'smooth');
})


// 初始化
$(document).ready(() => {
  //RWD
  if ( $( window ).width() < 768 ) {
    $('.colorDot').hide();
  }
  // Popup
  $('.popup').hide();
  $('#popup_0').hide();
  $('#popup_1').hide();
  $('#popup_2').hide();
  $('#popup_3').hide();
  $('#popup_4').hide();
  $('#popup_5').hide();
  $('#popup_6').hide();
  $('#popup_7').hide();
  $('#popup_8').hide();
  $('#popup_9').hide();
  $('.popup_0_dots').hide();
  $('.popup_1_dots').hide();
  $('.popup_2_dots').hide();
  $('.popup_3_dots').hide();
  $('.popup_4_dots').hide();
  $('.popup_5_dots').hide();
  $('.popup_6_dots').hide();
  $('.popup_7_dots').hide();
  $('.popup_8_dots').hide();
  $('.popup_9_dots').hide();
  // Header
  $('.section-nav').get(0).style.top = '-120px';
  // 節目場次 Slider
  $('.events-frame .container').hide();
  $('.april').show();
})