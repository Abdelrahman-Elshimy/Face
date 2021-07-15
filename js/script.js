$(document).ready(function () {

    'use strict';

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

    // __________ toggle icon class in mid_desc
    $(".mid_desc h3").click(function () {

        if ($(this).children("i").hasClass("fa-chevron-down")) {
            $(this).children("i").removeClass("fa-chevron-down").addClass("fa-chevron-left")
        } else {
            $(this).children("i").addClass("fa-chevron-down").removeClass("fa-chevron-left")
        }

    })

});

