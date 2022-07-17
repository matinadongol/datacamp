var colors = ["fff","#06BDFC", "#0eff2c", "#f35fd4", "#FF931E", "#ffcf1e"];
var itemcount = $(".productsMobileItem").length;

for (var i = 1; i < itemcount + 2; i++) {
    $(".productsMobileItem:nth-of-type(" + i + ") .productsMobileItemIcon").css("background-color", colors[i - 1]);
    $(".productsMobileItem:nth-of-type(" + i + ") .productsMobileItemDesc h3").css("color", colors[i - 1]);
}