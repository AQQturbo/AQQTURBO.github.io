$('#wrap ul li ').hover(function(){
    $(this).stop().animate({
        width:'800px'
    },500).siblings().stop().animate({
        width:'200px'
    },500)
});