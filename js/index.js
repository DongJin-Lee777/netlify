$(function() {
        $('.selector').click(function(e) {
            $('.action').removeClass('action');
            const target = e.target.id;
            $('#func_contain_'+target).toggleClass('action');
        })
        
        
        $('#footer').css("width", $(window).width()-60+"px");

        $(window).resize(function() {
            var w = $(window).width();
            $('#footer').css("width", w-60+"px");
        })
})