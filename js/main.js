$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown();
    },
    function(){},

)
$(".open").click(
    function(){
        $("#popup").fadeIn();
    }
);
$(".close").click(
    function(){
        $("#popup").fadeOut();
    }
);