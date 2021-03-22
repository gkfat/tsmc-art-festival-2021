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


// 初始化
$(document).ready(() => {
  // Header
  $('.section-nav').get(0).style.top = '-120px';
  // 節目場次 Slider
  $('.events-frame .container').hide();
  $('.april').show();
})