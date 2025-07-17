jQuery(function($) {
  const $slider = $('.custom-slick-slider');
  const $nav = $('.custom-slider-nav');

  $slider.slick({
    arrows: false,
    dots: false,
    autoplay: false,
    infinite: false
  });

  const totalSlides = $slider.slick('getSlick').slideCount;

  for (let i = 0; i < totalSlides; i++) {
    $nav.append(`<button class="nav-btn" data-slide="${i}">${i + 1}</button>`);
  }

  $nav.on('click', '.nav-btn', function () {
    $slider.slick('slickGoTo', $(this).data('slide'));
  });

  $slider.on('afterChange', function (event, slick, index) {
    $nav.find('.nav-btn').removeClass('active').eq(index).addClass('active');
  });

  $nav.find('.nav-btn').eq(0).addClass('active');
});
