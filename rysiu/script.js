$(function() {

     var $window = $(window);

     $('section[data-type="background"]').each(function() {

          var $bgobj = $(this);

          $(window).scroll(function() {

          var yPos = -($window.scrollTop() / $bgobj.data('speed'));

          var coords = '50% ' + yPos + 'px';

          $bgobj.css({backgroundPosition: coords});

          });
     });
});

$('.navbar').hide();
$('.navbar').fadeIn(900);
$('.jumbotron').hide();
$('.jumbotron').fadeIn(2500);

$(function() {
    $(window).scroll(function() {
        $('.hideme').each(function(i) {
            var bottom_of_obj = $(this).position().top + $(this).outerHeight();
            var bottom_of_win = $(window).scrollTop() + $(window).height();

            if(bottom_of_win > bottom_of_obj) {
                $(this).animate({'opacity':'1'}, 1500);
            }
        });
    });
});
