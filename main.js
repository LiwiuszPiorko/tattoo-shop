$('.tattoo-artists-button').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.photos').offset().top
    }, 500)
})
$('.gallery-button').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.gallery').offset().top
    }, 500)
})
$('.media-button').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.media').offset().top
    }, 500)
})
$('.contact-button').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.contact').offset().top
    }, 500)
})