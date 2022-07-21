$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $(".scrollup").fadeIn();
        } else {
            $(".scrollup").fadeOut();
        }
    })
    $(".scrollup").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 400);
        return false;
    })




    var indexPosition = 0;
    $("#gallery div").hover(function () { // Mouse over
        indexPosition++;
        $(this).css({
            "z-index": indexPosition,
            "width": "50%",
            "height": "25rem",
        });
        $(this).addClass("noRotation");
        $(this).siblings().css("filter", "blur(3px)");
    }, function () { // Mouse out
        $(this).css({
            "width": "40%",
            "height": "20rem",
        });
        $(this).siblings().css("filter", "grayscale(0%)");
        $(this).removeClass("noRotation");
    });
});