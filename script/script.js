const popup = $(".form");
const overlay = $(".overlay");

$(".header__mobile-button").click(function () {
    $(".header__menu").slideToggle(300);
});
$(".header__mobile-button").click(function () {
    $(".header__menu").slideDown(300);
    overlay.toggle().animate({
        opacity: 0.4,
    });
    $("body, html").css("overflow", "hidden");
});
$(".header__menu-list-item, .header__menu-button-mobile").click(function () {
    $(".header__menu").slideUp(300);
    overlay.toggle().animate({
        opacity: 0,
    });
    $("body, html").css("overflow", "auto");
});

$(".popup_btn").click(function () {
    popup.slideDown(300);
    overlay.show().animate({
        opacity: 0.4,
    });
    $("body, html").css("overflow", "hidden");
    addClickOutsideHandler();
});
$(".form__close-button").click(function () {
    popup.slideToggle(300);
    overlay.hide().animate({
        opacity: 0,
    });
    $("body, html").css("overflow", "auto");
    removeClickOutsideHandler();
});
$(".reviews__blocks.owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
        480: {
            items: 2,
        },
        768: {
            items: 3,
        },
    },
});

const handleClickOutside = (event) => {

    if (!$(event.target).closest(popup).length) {
        popup.slideUp(300)
        overlay.hide().animate({
            opacity: 0,
        });
        $("body, html").css("overflow", "auto");
        removeClickOutsideHandler();
    }
}

function addClickOutsideHandler() {
    setTimeout(function() {
        $(document).on('click', handleClickOutside);
    }, 100);
}

function removeClickOutsideHandler() {
    $(document).off('click', handleClickOutside);
}