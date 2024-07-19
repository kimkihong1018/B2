$(function(){
    $(".main > li").mouseover(function(){
        $(".sub,.sub_bg").stop().slideDown();
    })
    $(".main > li").mouseout(function(){
        $(".sub,.sub_bg").stop().slideUp();
    })

    setInterval(function(){
        $(".top_move").animate({top : "-300px"},500 ,function(){
            $(".top_move").append($(".top_move li").eq(0));
            $(".top_move").css({top : "0"})
        })
    }, 3000)


    $(".pop_click").click(function(){
        $(".modal").show();
        $(".pop").slideDown();
    })

    $(".close").click(function(){
        $(".modal").hide();
        $(".pop").slideUp();
    })

})//jQ end