var itemcount = $(".circle-container li").children().length;
var secondSection = document.getElementById("SecondProductsSection");
var firstSection = document.getElementById("FirstProductsSection");
$(".circle-container > *").css("margin", -5.5 + "em");
$(".circle-container").css({
    'width': itemcount * 8 + "em",
    'height': itemcount * 8 + "em"
});

var angle = (360 / itemcount);
var rot = 0;

if (itemcount == 0 || itemcount == 1) {
    $(".circle-container").css("border", 0);
}


if (itemcount == 1) {
    rot = 0;
}
else if (itemcount == 4) {
    rot = -135;
}
else {
    rot = -90;
}

var total = itemcount;

var colors = ["#06BDFC", "#0eff2c", "#f35fd4", "#FF931E", "#ffcf1e"];

for (var i = 1; i < itemcount + 1; i++) {
    $(".circle-container > *:nth-of-type(" + i + ")").css("transform", "rotate(" + rot * 1 + "deg) translate(" + itemcount * 8 / 2 + "em) rotate(" + rot * -1 + "deg)");
    
    $('head').append('<style>.circle-container > *:nth-of-type(' + i + ')::after{transform: rotate(' + rot * 1 + 'deg) translate(' + itemcount * 8 / 2 + 'em) rotate(' + rot * -1 + 'deg)</style>');

    $(".circle-container > *:nth-of-type(" + i + ") .img").css("background-color", colors[i - 1]);
    $(".circle-container > .productsCycleDetails:nth-of-type(" + i + ") h3").css("color", colors[i - 1]);

    if (itemcount == 1) {
        secondSection.style.marginTop = "5%";
        $(".circle-container > *:nth-of-type(" + i + ")").css("transform", "rotate(" + rot * 1 + "deg) translate(-3em) rotate(" + rot * -1 + "deg)");
        $(".circle-container > .productsCycleDetails:nth-of-type(" + i + ")").css("transform", "rotate(" + rot * 1 + "deg) translate(7em) rotate(" + rot * -1 + "deg)");
    }
    else if (itemcount == 2) {
        firstSection.style.padding = "5%";
        secondSection.style.marginTop = "10%";
        $(".circle-container > .productsCycleDetails:nth-of-type(1)").css("transform", "rotate(85deg) translate(-22em) rotate(-85deg)");
        $(".circle-container > .productsCycleDetails:nth-of-type(2)").css("transform", "rotate(99deg) translate(22em) rotate(-99deg)");
    }
    else if (itemcount == 3) {
        firstSection.style.padding = "5%";
        secondSection.style.marginTop = "5%";
        $(".circle-container > .productsCycleDetails:nth-of-type(1)").css("transform", "rotate(90deg) translate(-23em) rotate(-90deg)");
        $(".circle-container > .productsCycleDetails:nth-of-type(2)").css("transform", "rotate(15deg) translate(25em) rotate(-15deg)");
        $(".circle-container > .productsCycleDetails:nth-of-type(3)").css("transform", "rotate(165deg) translate(26em) rotate(-165deg)");
    }
    else if (itemcount == 4) {
        secondSection.style.marginTop = "20%";
        $(".circle-container > .productsCycleDetails:nth-of-type(" + i + ")").css("transform", "rotate(" + rot * 1 + "deg) translate(" + itemcount * 7.75 + "em) rotate(" + rot * -1 + "deg)");
    }
    else if (itemcount == 5) {
        firstSection.style.padding = "5%";
        secondSection.style.marginTop = "15%";
        $(".circle-container > .productsCycleDetails:nth-of-type(1)").css("transform", "rotate(90deg) translate(-30em) rotate(-90deg)");
        $(".circle-container > .productsCycleDetails:nth-of-type(2)").css("transform", "rotate(-10deg) translate(34em) rotate(10deg)");
        $(".circle-container > .productsCycleDetails:nth-of-type(3)").css("transform", "rotate(33deg) translate(31em) rotate(-33deg)");
        $(".circle-container > .productsCycleDetails:nth-of-type(4)").css("transform", "rotate(149deg) translate(31em) rotate(-149deg)");
        $(".circle-container > .productsCycleDetails:nth-of-type(5)").css("transform", "rotate(190deg) translate(35em) rotate(-190deg)");
    }
    rot = rot + angle;
}

