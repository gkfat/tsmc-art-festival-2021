/*
** Functions-------------------------
*/

let scrollY;
let prevScrollpos = window.pageYOffset;
let showingPopupId;

// Header 超過 KV 才出現的動畫
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if ( $( window ).width() > 992 ) {
    if ( currentScrollPos > 200 ) { // 超過 KV
      if ( currentScrollPos > $('#preface').get(0).offsetTop && currentScrollPos > prevScrollpos ) { // 往下滑隱藏
        $('.section-nav').css('top', '-200px');
      } else { // 往上滑
        $('.section-nav').css('top', '0');
      }
    } else {
      $('.section-nav').css('top', '-200px');
    }
    prevScrollpos = currentScrollPos;
  } else {
    if ( currentScrollPos > 200 ) {
      $('.section-nav').css('top', '0');
    } else {
      $('.section-nav').css('top', '-200px');
    }
  }
}

// Nav click scroll function
$('.nav-btn').click(function(e) {
  e.preventDefault();
  let target = $(this).attr('href');
  $('html, body').stop().animate({
    scrollTop: $(target).offset().top - 150
  }, 100, 'linear')
});

// Mobile Nav click function
$('.hamburger').on('click', function() {
  scrollY = window.scrollY;
  $(this).toggleClass('open');
  checkHamburgerOpen();
});

$('.menu-item').on('click', function() {
  $('.hamburger').toggleClass('open');
  checkHamburgerOpen();
})

function checkHamburgerOpen() {
  if ( $('.hamburger').hasClass('open') ) {
    $('.menu').show();
    $('html, body').css('overflow-y', 'hidden');
  } else {
    $('.menu').hide();
    $('html, body').css({
      'overflow-y': 'scroll',
      'scroll-behavior': 'auto'
    });
    window.scrollTo(0, scrollY);
    $('html').css('scroll-behavior', 'smooth');
  }
}

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
    } else {
      $('.may-page1').css('transform', 'translateX(-100vw)');
      $('.may-page2').css('transform', 'translateX(0)');
    }
    $(this).siblings().removeClass('disabled');
    $(this).toggleClass('disabled');
  }
})

$('.june .control').on('click', function() {
  if ( !$(this).hasClass('disabled') ) {
    const prev = $(this).hasClass('control-prev');
    if ( prev ) {
      $('.june-page1').css('transform', 'translateX(0)');
      $('.june-page2').css('transform', 'translateX(100vw)');
    } else {
      $('.june-page1').css('transform', 'translateX(-100vw)');
      $('.june-page2').css('transform', 'translateX(0)');
    }
    $(this).siblings().removeClass('disabled');
    $(this).toggleClass('disabled');
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
    videoId: 'kldbRtCN6qI',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
function onPlayerReady(event) {
  // event.target.playVideo();
}
let done = false;
function onPlayerStateChange(event) {
  if ( event.data === YT.PlayerState.PLAYING && !done ) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
  if ( event.data === YT.PlayerState.PLAYING ) {
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
  scrollY = window.scrollY;
  const classArray = $(this).attr('class').split(' ');
  showingPopupId = classArray[classArray.length - 1];
  $(`.popup, #${showingPopupId}`).show();
  if ( $( window ).width() > 992 ) {
    $(`.${showingPopupId}_dots`).show();
  }
  $('.popup').scrollTop();
  $('html, body').css('overflow-y', 'hidden');
  $('.section-nav').css('top', '-200px');
  // 若點到 popup 外就關閉
  $('.popup').on('click', function(e) {
    if ( $('.popup-frame').has(e.target).length === 0 ) {
      $('.popup').hide();
      $(`#${showingPopupId}, .${showingPopupId}_dots`).hide();
      $('html, body').css({
        'overflow-y': 'scroll',
        'scroll-behavior': 'auto'
      });
      window.scrollTo(0, scrollY);
      $('html').css('scroll-behavior', 'smooth');
    }
  })
})
$('.closePopup').on('click', function() {
  $(`.popup, #${showingPopupId}, .${showingPopupId}_dots`).hide();
  $('html, body').css({
    'overflow-y': 'scroll',
    'scroll-behavior': 'auto'
  });
  window.scrollTo(0, scrollY);
  $('html').css('scroll-behavior', 'smooth');
  if ( $( window ).width() < 992 ) {
    $('.section-nav').css('top', '0');
  }
})

// Device width change event
$(window).resize(function() {
  // 節目場次 Slider & 裝飾球
  if ( $( window ).width() > 992 ) {
    $('.events-frame .container, .menu').hide();
    $('.colorDot, .april').show();
  } else {
    $('.colorDot').hide();
    $('.events-frame .container').show();
  }
})

// 初始化
$(document).ready(() => {
  scrollY = 0;
  window.scrollTo(0, scrollY);
  // Header
  $('.section-nav').get(0).style.top = '-200px';
  // Slide
  $('.may, .june').hide();
  // Popup
  $('.popup, #popup_0, #popup_1, #popup_2, #popup_3, #popup_4, #popup_5, #popup_6, #popup_7, #popup_8, #popup_9').hide();
  $('.popup_0_dots, .popup_1_dots, .popup_2_dots, .popup_3_dots, .popup_4_dots, .popup_5_dots, .popup_6_dots, .popup_7_dots, .popup_8_dots, .popup_9_dots').hide();
  $('.initial-hidden').removeClass('initial-hidden');
})