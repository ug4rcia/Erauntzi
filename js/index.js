$( document ).ready(function() {
    if (window.location.href.includes("index")) {
        $("#ES").css("color", "black");
    }else if (window.location.href.includes("eu")) {
        $("#EU").css("color", "black");
    }else if (window.location.href.includes("in")) {
        $("#IN").css("color", "black");
    }
});