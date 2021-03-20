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
  if ( currentScrollPos > 500 ) { // 超過 KV
    $('.section-nav').get(0).style.top = '0';
  } else {
    $('.section-nav').get(0).style.top = '-120px';
  }
  prevScrollpos = currentScrollPos;
}



$(document).ready(function() {
  $('.section-nav').get(0).style.top = '-120px';
});