jQuery(document).ready(function ($) {

  /*open menu*/
  $(document).on('click', '.open-menu a', function (e){
    e.preventDefault();

    $.fancybox.open( $('#menu-responsive'), {
      touch:false,
      autoFocus:false,
    });
    setTimeout(function() {
      $('html').addClass('is-menu');
    }, 100);

  });

 /* close menu*/
  $(document).on('click', '.close-menu a, .close-filter a ', function (e){
    e.preventDefault();
    $.fancybox.close();
    $('html').removeClass('is-menu');
  });



 /* fix header*/
  $(".top-line").sticky({
    topSpacing:0
  });

  /*animations*/
  AOS.init({
    disable: 'mobile',
    duration: 800,
  });

  /*slider*/
  var swiperSpeaker = new Swiper(".slider-speaker", {
    spaceBetween: 5,
    navigation: {
      nextEl: ".speaker-next",
      prevEl: ".speaker-prev",
    },
    pagination: {
      clickable: true,
      el: ".speaker-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  /*col + /- */
  $(".btn-count-plus").click(function () {
    var e = $(this).parent().find("input");
    return e.val(parseInt(e.val()) + 1), e.change(), !1
  }), $(".btn-count-minus").click(function () {
    var e = $(this).parent().find("input"), t = parseInt(e.val()) - 1;
    return t = t < 1 ? 1 : t, e.val(t), e.change(), !1
  });


  //SELECT
  $('select').niceSelect();

});