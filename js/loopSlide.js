$(document).ready(function() {
    function prev() {
        if ($("#list").is(":animated") == false) {
            $("#list").prepend($("#list li:last"));
            $("#list").css("left", "-140px");
            $("#list").animate(
                {
                    "left": "0px"
                },
                1000
            );
        }
    }
    function next() {
        if ($("#list").is(":animated") == false) {
            $("#list").animate(
                {
                    "left": "-140px"
                },
                1000,
                function () {
                    //alert("finish");
                    $("#list").append($("#list li:first"));
                    $("#list").css("left", "0px");
                }
            );
        }
    }
});