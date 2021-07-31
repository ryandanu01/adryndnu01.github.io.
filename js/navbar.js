$(document).ready(function () {
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    );
  });

  $('#btt').on('click', function () {
    $('body, html').animate(
      {
        scrollTop: 0,
      },
      800
    );
  });

  $(window).scroll(function () {
    var window = $(this).scrollTop();
    var y = $('#about').scrollTop();
    var btt = $('#btt');
    var navbar = $('#navbar');
    var nav = $('#navbar-scroll');

    if (window > y) {
      navbar.css('opacity', 0);
      navbar.css('transform', 'translate(0,-10px)');
      nav.css('display', 'block');
      btt.css('display', 'block');
    } else {
      navbar.css('opacity', 1);
      navbar.css('transform', 'translate(0,0)');
      nav.css('display', 'none');
      btt.css('display', 'none');
    }
  });
});
