$(document).ready(function () {
    $(".menu-block__item").click(function () {
        $(".menu-block__item").removeClass("item__active");
        $(this).addClass("item__active");
    });

    $("#menu-block__item1").click(function () {
        $("#content__page1").css('display', 'block');
        $("#content__page2").css('display', 'none');
        $("#content__page3").css('display', 'none');
        $("#content__page4").css('display', 'none');
        $("#content__page5").css('display', 'none');
        $("#content__page6").css('display', 'none');
    });

    $("#menu-block__item2").click(function () {
        $("#content__page1").css('display', 'none');
        $("#content__page2").css('display', 'block');
        $("#content__page3").css('display', 'none');
        $("#content__page4").css('display', 'none');
        $("#content__page5").css('display', 'none');
        $("#content__page6").css('display', 'none');
    });

    $("#menu-block__item3").click(function () {
        $("#content__page1").css('display', 'none');
        $("#content__page2").css('display', 'none');
        $("#content__page3").css('display', 'block');
        $("#content__page4").css('display', 'none');
        $("#content__page5").css('display', 'none');
        $("#content__page6").css('display', 'none');
    });

    $("#menu-block__item4").click(function () {
        $("#content__page1").css('display', 'none');
        $("#content__page2").css('display', 'none');
        $("#content__page3").css('display', 'none');
        $("#content__page4").css('display', 'block');
        $("#content__page5").css('display', 'none');
        $("#content__page6").css('display', 'none');
    });

    $("#menu-block__item5").click(function () {
        $("#content__page1").css('display', 'none');
        $("#content__page2").css('display', 'none');
        $("#content__page3").css('display', 'none');
        $("#content__page4").css('display', 'none');
        $("#content__page5").css('display', 'block');
        $("#content__page6").css('display', 'none');
    });
    $("#menu-block__item6").click(function () {
        $("#content__page1").css('display', 'none');
        $("#content__page2").css('display', 'none');
        $("#content__page3").css('display', 'none');
        $("#content__page4").css('display', 'none');
        $("#content__page5").css('display', 'none');
        $("#content__page6").css('display', 'block');
    });

    /* buttons */

    $(".menu-block__button-night").click(function () {
        $(".menu-block__button-circle").toggleClass('menu-block__button-active');
        $(".background-list").toggleClass('background-list__active');
        $(".menu-block__moon").toggleClass('menu-block__moon-active');
        $(".menu-block__sun").toggleClass('menu-block__sun-active');
        $(".content__text").toggleClass('content__text-active');
        $(".content__parag").toggleClass('content__text-active');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('.up-button').fadeIn(0);
        } else {
            $('.up-button').fadeOut(0);
        }
    });
    $('.up-button').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });

});